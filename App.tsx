import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
import LocalExpertise from './components/LocalExpertise';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';
import VoiceAssistant from './components/VoiceAssistant';
import { Page } from './types';

const App: React.FC = () => {
  const [activePage, setActivePage] = useState<Page>('home');

  // Simple router logic for SPA feel without react-router dependency
  const renderContent = () => {
    switch (activePage) {
      case 'home':
        return (
          <>
            <Hero onCtaClick={() => {
              setActivePage('contact');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }} />
            <Features />
            <LocalExpertise />
            <Portfolio />
            <Testimonials />
            <Blog />
          </>
        );
      case 'services':
        return (
          <div className="pt-10">
            <Features />
            <LocalExpertise />
          </div>
        );
      case 'portfolio':
        return (
          <div className="pt-10">
            <Portfolio />
            <Testimonials />
          </div>
        );
      case 'blog':
        return (
          <div className="pt-10">
            <Blog />
          </div>
        );
      case 'contact':
        return <Contact />;
      default:
        return <Hero onCtaClick={() => setActivePage('contact')} />;
    }
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-brand-primary selection:text-white relative">
      <Header activePage={activePage} setActivePage={setActivePage} />
      
      <main>
        {renderContent()}
      </main>

      <Footer setActivePage={(page) => {
        setActivePage(page);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }} />

      {/* AI Voice Assistant Widget */}
      <VoiceAssistant />
    </div>
  );
};

export default App;