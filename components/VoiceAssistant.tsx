import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI, LiveServerMessage, Modality } from "@google/genai";
import { Mic, MicOff, MessageCircle, X, Sparkles, Volume2 } from 'lucide-react';

const VoiceAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isConnected, setIsConnected] = useState(false);
  const [isTalking, setIsTalking] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [audioContext, setAudioContext] = useState<AudioContext | null>(null);
  const sessionRef = useRef<any>(null);
  const sourceNodeRef = useRef<MediaStreamAudioSourceNode | null>(null);
  const processorRef = useRef<ScriptProcessorNode | null>(null);

  // Audio queue management
  const nextStartTimeRef = useRef<number>(0);
  const sourcesRef = useRef<Set<AudioBufferSourceNode>>(new Set());

  const initializeAudio = async () => {
    try {
      if (!process.env.API_KEY) {
        throw new Error("API Key not found");
      }

      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const ctx = new (window.AudioContext || (window as any).webkitAudioContext)({ sampleRate: 24000 });
      setAudioContext(ctx);
      nextStartTimeRef.current = ctx.currentTime;

      // Input stream (Microphone)
      // Note: sampleRate 16000 is often preferred for speech recognition input, 
      // but we'll stick to context default or resample. 
      // The snippet suggests a separate input context for 16k.
      const inputCtx = new (window.AudioContext || (window as any).webkitAudioContext)({ sampleRate: 16000 });
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      
      const sessionPromise = ai.live.connect({
        model: 'gemini-2.5-flash-native-audio-preview-09-2025',
        callbacks: {
          onopen: () => {
            console.log("Gemini Live Session Opened");
            setIsConnected(true);
            setError(null);
            
            // Setup Audio Input Processing
            const source = inputCtx.createMediaStreamSource(stream);
            const processor = inputCtx.createScriptProcessor(4096, 1, 1);
            
            processor.onaudioprocess = (e) => {
              const inputData = e.inputBuffer.getChannelData(0);
              const pcmBlob = createBlob(inputData);
              sessionPromise.then(session => {
                session.sendRealtimeInput({ media: pcmBlob });
              });
            };
            
            source.connect(processor);
            processor.connect(inputCtx.destination);
            
            sourceNodeRef.current = source;
            processorRef.current = processor;
          },
          onmessage: async (message: LiveServerMessage) => {
            // Handle Audio Output
            const base64Audio = message.serverContent?.modelTurn?.parts?.[0]?.inlineData?.data;
            if (base64Audio) {
              setIsTalking(true);
              const audioBuffer = await decodeAudioData(
                decode(base64Audio),
                ctx,
                24000,
                1
              );
              
              const source = ctx.createBufferSource();
              source.buffer = audioBuffer;
              source.connect(ctx.destination);
              
              // Schedule playback
              // Ensure we don't schedule in the past
              const currentTime = ctx.currentTime;
              const startTime = Math.max(nextStartTimeRef.current, currentTime);
              source.start(startTime);
              nextStartTimeRef.current = startTime + audioBuffer.duration;
              
              sourcesRef.current.add(source);
              source.onended = () => {
                sourcesRef.current.delete(source);
                if (sourcesRef.current.size === 0) {
                  setIsTalking(false);
                }
              };
            }

            // Handle Interruptions
            if (message.serverContent?.interrupted) {
              sourcesRef.current.forEach(s => s.stop());
              sourcesRef.current.clear();
              nextStartTimeRef.current = ctx.currentTime;
              setIsTalking(false);
            }
          },
          onclose: () => {
            setIsConnected(false);
            console.log("Session Closed");
          },
          onerror: (err) => {
            console.error("Session Error", err);
            setError("Connection failed. Please try again.");
            setIsConnected(false);
          }
        },
        config: {
          responseModalities: [Modality.AUDIO],
          systemInstruction: `You are 'Vista', the friendly AI assistant for GeoVista Group. 
          Your goal is to briefly explain our services (GIS Mapping, Urban Planning, Land Surveying, Environmental Compliance) to visitors.
          Keep your responses concise, professional, and warm. 
          If the user asks for a quote, pricing, or detailed consultation, explicitly encourage them to click the 'Chat on WhatsApp' button below to talk to a human expert.
          You are based in Nairobi, Kenya.`,
        }
      });

      sessionRef.current = sessionPromise;

    } catch (err) {
      console.error(err);
      setError("Microphone access denied or API error.");
    }
  };

  const disconnect = async () => {
    if (sessionRef.current) {
      // There isn't a direct .close() on the promise, but usually the client handles cleanup or we just stop sending audio
      // The library might not expose a clean close on the promise wrapper easily without the session object.
      // We will refresh the page or stop audio processing to 'disconnect' effectively in this simplified view.
      
      if (processorRef.current) {
        processorRef.current.disconnect();
        processorRef.current = null;
      }
      if (sourceNodeRef.current) {
        sourceNodeRef.current.disconnect();
        sourceNodeRef.current = null;
      }
      if (audioContext) {
        audioContext.close();
        setAudioContext(null);
      }
      setIsConnected(false);
    }
  };

  useEffect(() => {
    // Cleanup on unmount
    return () => {
      disconnect();
    };
  }, []);

  const toggleSession = () => {
    if (isConnected) {
      disconnect();
    } else {
      initializeAudio();
    }
  };

  // Helper functions for Audio
  function createBlob(data: Float32Array): { data: string; mimeType: string } {
    const l = data.length;
    const int16 = new Int16Array(l);
    for (let i = 0; i < l; i++) {
      int16[i] = data[i] * 32768;
    }
    return {
      data: encode(new Uint8Array(int16.buffer)),
      mimeType: 'audio/pcm;rate=16000',
    };
  }

  function encode(bytes: Uint8Array) {
    let binary = '';
    const len = bytes.byteLength;
    for (let i = 0; i < len; i++) {
      binary += String.fromCharCode(bytes[i]);
    }
    return btoa(binary);
  }

  function decode(base64: string) {
    const binaryString = atob(base64);
    const len = binaryString.length;
    const bytes = new Uint8Array(len);
    for (let i = 0; i < len; i++) {
      bytes[i] = binaryString.charCodeAt(i);
    }
    return bytes;
  }

  async function decodeAudioData(
    data: Uint8Array,
    ctx: AudioContext,
    sampleRate: number,
    numChannels: number,
  ): Promise<AudioBuffer> {
    const dataInt16 = new Int16Array(data.buffer);
    const frameCount = dataInt16.length / numChannels;
    const buffer = ctx.createBuffer(numChannels, frameCount, sampleRate);

    for (let channel = 0; channel < numChannels; channel++) {
      const channelData = buffer.getChannelData(channel);
      for (let i = 0; i < frameCount; i++) {
        channelData[i] = dataInt16[i * numChannels + channel] / 32768.0;
      }
    }
    return buffer;
  }

  return (
    <>
      {/* Floating Action Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 z-50 bg-brand-primary hover:bg-emerald-500 text-white p-4 rounded-full shadow-2xl transition-transform hover:scale-105 flex items-center gap-2"
        >
          <Sparkles size={24} />
          <span className="font-semibold hidden md:inline">Ask AI Assistant</span>
        </button>
      )}

      {/* Assistant Panel */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 z-50 w-full max-w-sm bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col transition-all animate-in slide-in-from-bottom-10 fade-in duration-300">
          
          {/* Header */}
          <div className="bg-brand-dark text-white p-4 flex justify-between items-center">
            <div className="flex items-center gap-2">
              <Sparkles size={18} className="text-brand-primary" />
              <h3 className="font-bold">Vista Assistant</h3>
            </div>
            <button onClick={() => { setIsOpen(false); disconnect(); }} className="text-slate-400 hover:text-white">
              <X size={20} />
            </button>
          </div>

          {/* Body */}
          <div className="p-6 bg-slate-50 min-h-[200px] flex flex-col items-center justify-center text-center">
            {error ? (
              <div className="text-red-500 text-sm mb-4">{error}</div>
            ) : (
              <>
                <div className={`w-20 h-20 rounded-full flex items-center justify-center mb-6 transition-colors duration-500 ${
                  isConnected 
                    ? isTalking ? 'bg-emerald-100 animate-pulse' : 'bg-blue-50' 
                    : 'bg-slate-100'
                }`}>
                  {isConnected ? (
                    isTalking ? (
                      <Volume2 size={32} className="text-emerald-600" />
                    ) : (
                      <Mic size={32} className="text-blue-600" />
                    )
                  ) : (
                    <MicOff size={32} className="text-slate-400" />
                  )}
                </div>

                <h4 className="font-bold text-slate-800 mb-2">
                  {isConnected 
                    ? isTalking ? "Vista is speaking..." : "Listening..." 
                    : "Start a conversation"}
                </h4>
                <p className="text-sm text-slate-500 mb-6 px-4">
                  {isConnected 
                    ? "Ask about our GIS, Planning, or Environmental services." 
                    : "Tap the microphone to speak with our AI assistant about your project needs."}
                </p>

                <button
                  onClick={toggleSession}
                  className={`w-full py-3 rounded-lg font-semibold flex items-center justify-center gap-2 transition-colors ${
                    isConnected
                      ? 'bg-red-100 text-red-600 hover:bg-red-200'
                      : 'bg-brand-dark text-white hover:bg-slate-800'
                  }`}
                >
                  {isConnected ? 'Stop Conversation' : 'Start Speaking'}
                </button>
              </>
            )}
          </div>

          {/* Footer - WhatsApp Integration */}
          <div className="p-4 bg-white border-t border-slate-100">
            <a 
              href="https://wa.me/254741392943" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full bg-[#25D366] hover:bg-[#20bd5a] text-white py-3 rounded-lg font-bold shadow-sm flex items-center justify-center gap-2 transition-colors"
            >
              <MessageCircle size={20} />
              Chat on WhatsApp
            </a>
            <p className="text-center text-xs text-slate-400 mt-2">
              For detailed quotes and immediate support
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default VoiceAssistant;
