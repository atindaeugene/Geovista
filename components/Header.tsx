import React, { useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { Page } from '../types';

interface HeaderProps {
  activePage: Page;
  setActivePage: (page: Page) => void;
}

const Header: React.FC<HeaderProps> = ({ activePage, setActivePage }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems: { label: string; value: Page }[] = [
    { label: 'Home', value: 'home' },
    { label: 'Services', value: 'services' },
    { label: 'Portfolio', value: 'portfolio' },
    { label: 'Insights', value: 'blog' },
    { label: 'Contact', value: 'contact' },
  ];

  const handleNavClick = (page: Page) => {
    setActivePage(page);
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-slate-200 shadow-sm transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div 
            className="flex items-center cursor-pointer group" 
            onClick={() => handleNavClick('home')}
          >
            {/* Custom SVG Logo for GeoVista Group - Solid Colors for Reliability */}
            <svg viewBox="0 0 220 50" className="h-10 w-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Globe Icon */}
              <circle cx="25" cy="25" r="20" stroke="#059669" strokeWidth="2" fill="none" />
              <path d="M25 5C15 5 5 15 5 25S15 45 25 45S45 35 45 25S35 5 25 5" fill="#f0fdf4" fillOpacity="0.5"/>
              <path d="M25 5V45M5 25H45" stroke="#0f172a" strokeWidth="1.5" strokeLinecap="round" />
              <path d="M9 13C13 18 37 18 41 13" stroke="#059669" strokeWidth="1.5" fill="none" />
              <path d="M9 37C13 32 37 32 41 37" stroke="#0ea5e9" strokeWidth="1.5" fill="none" />
              
              {/* Text */}
              <text x="58" y="28" fontFamily="Inter, sans-serif" fontWeight="700" fontSize="24" fill="#0f172a">GeoVista</text>
              <text x="58" y="44" fontFamily="Inter, sans-serif" fontWeight="600" fontSize="11" letterSpacing="0.2em" fill="#059669">GROUP</text>
            </svg>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.value}
                onClick={() => handleNavClick(item.value)}
                className={`text-sm font-medium transition-colors hover:text-brand-primary ${
                  activePage === item.value ? 'text-brand-primary' : 'text-slate-600'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex">
            <button 
              onClick={() => handleNavClick('contact')}
              className="bg-brand-dark hover:bg-slate-800 text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-all shadow-lg hover:shadow-xl flex items-center"
            >
              <Phone size={16} className="mr-2" />
              Get a Quote
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-slate-600 hover:text-brand-dark p-2"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 absolute w-full left-0 shadow-lg h-screen z-50">
          <div className="px-4 pt-2 pb-6 space-y-1">
            {navItems.map((item) => (
              <button
                key={item.value}
                onClick={() => handleNavClick(item.value)}
                className={`block w-full text-left px-3 py-4 text-lg font-medium border-b border-slate-50 ${
                  activePage === item.value 
                    ? 'text-brand-primary' 
                    : 'text-slate-600'
                }`}
              >
                {item.label}
              </button>
            ))}
            <div className="pt-6 px-3">
              <button 
                onClick={() => handleNavClick('contact')}
                className="w-full bg-brand-primary text-white px-5 py-4 rounded-lg text-lg font-semibold shadow-md"
              >
                Request Consultation
              </button>
            </div>
            
            <div className="mt-8 px-3 text-sm text-slate-500">
              <p className="font-semibold mb-2">Contact Us</p>
              <p>+254 741 392 943</p>
              <p>info@geovistagrp.com</p>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;