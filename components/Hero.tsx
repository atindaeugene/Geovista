import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

interface HeroProps {
  onCtaClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onCtaClick }) => {
  return (
    <section className="relative bg-brand-dark text-white overflow-hidden min-h-[85vh] flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1572455044327-7248d62638a1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1974&q=80" 
          alt="Aerial view of Nairobi City" 
          className="w-full h-full object-cover"
          loading="eager"
        />
        {/* Dark overlay to ensure text readability */}
        <div className="absolute inset-0 bg-slate-900/60"></div>
        {/* Gradient for text contrast on the left */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/50 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="max-w-3xl">
          {/* Tagline */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-6 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            Leading GIS & Urban Solutions in Kenya
          </div>

          {/* Headline (USP) */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 tracking-tight text-white shadow-sm">
            Precision Mapping. <br />
            <span className="text-brand-primary text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">Sustainable Planning.</span> <br />
            Future-Ready Communities.
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-slate-200 mb-8 leading-relaxed max-w-2xl font-light shadow-black drop-shadow-md">
            We combine advanced geospatial technology with deep regulatory expertise to deliver actionable spatial intelligence for developers and governments across Kenya and East Africa.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button 
              onClick={onCtaClick}
              className="bg-brand-primary hover:bg-emerald-500 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all shadow-lg hover:shadow-emerald-500/25 flex items-center justify-center gap-2 group border border-transparent"
            >
              Start Your Project
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button 
              className="bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all flex items-center justify-center"
            >
              View Case Studies
            </button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 flex flex-wrap items-center gap-6 text-sm text-slate-200 font-medium">
            <div className="flex items-center gap-2 backdrop-blur-sm bg-black/20 px-3 py-1.5 rounded-full">
              <CheckCircle2 size={16} className="text-emerald-400" />
              <span>Registered Physical Planners</span>
            </div>
            <div className="flex items-center gap-2 backdrop-blur-sm bg-black/20 px-3 py-1.5 rounded-full">
              <CheckCircle2 size={16} className="text-emerald-400" />
              <span>NEMA & County Compliance</span>
            </div>
            <div className="flex items-center gap-2 backdrop-blur-sm bg-black/20 px-3 py-1.5 rounded-full">
              <CheckCircle2 size={16} className="text-emerald-400" />
              <span>East African Experience</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;