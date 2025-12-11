import React from 'react';
import { MapPin, Phone, Mail, Linkedin, Twitter, Facebook } from 'lucide-react';
import { Page } from '../types';

interface FooterProps {
  setActivePage: (page: Page) => void;
}

const Footer: React.FC<FooterProps> = ({ setActivePage }) => {
  return (
    <footer className="bg-slate-900 text-slate-300 py-16 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand */}
          <div>
            {/* White Logo for Dark Background */}
            <div className="mb-6 cursor-pointer" onClick={() => setActivePage('home')}>
              <svg viewBox="0 0 220 50" className="h-10 w-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="25" cy="25" r="20" stroke="#ffffff" strokeWidth="2" strokeOpacity="0.8" fill="none" />
                <path d="M25 5V45M5 25H45" stroke="#ffffff" strokeWidth="1.5" strokeOpacity="0.5" strokeLinecap="round" />
                <path d="M9 13C13 18 37 18 41 13" stroke="#ffffff" strokeWidth="1.5" strokeOpacity="0.8" fill="none" />
                <path d="M9 37C13 32 37 32 41 37" stroke="#ffffff" strokeWidth="1.5" strokeOpacity="0.8" fill="none" />
                
                <text x="58" y="28" fontFamily="Inter, sans-serif" fontWeight="700" fontSize="24" fill="#ffffff">GeoVista</text>
                <text x="58" y="44" fontFamily="Inter, sans-serif" fontWeight="600" fontSize="11" letterSpacing="0.2em" fill="#10b981">GROUP</text>
              </svg>
            </div>
            
            <p className="text-sm leading-relaxed mb-6">
              Empowering communities and developers with precision spatial data and actionable planning strategies across Kenya and East Africa.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center hover:bg-brand-primary hover:text-white transition-colors"><Linkedin size={16} /></a>
              <a href="#" className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center hover:bg-brand-primary hover:text-white transition-colors"><Twitter size={16} /></a>
              <a href="#" className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center hover:bg-brand-primary hover:text-white transition-colors"><Facebook size={16} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold mb-6">Explore</h3>
            <ul className="space-y-3 text-sm">
              <li><button onClick={() => setActivePage('services')} className="hover:text-brand-primary transition-colors">Services</button></li>
              <li><button onClick={() => setActivePage('portfolio')} className="hover:text-brand-primary transition-colors">Portfolio</button></li>
              <li><button onClick={() => setActivePage('blog')} className="hover:text-brand-primary transition-colors">Insights</button></li>
              <li><button onClick={() => setActivePage('contact')} className="hover:text-brand-primary transition-colors">Contact Us</button></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-bold mb-6">Services</h3>
            <ul className="space-y-3 text-sm">
              <li>GIS Mapping & Analysis</li>
              <li>Urban & Regional Planning</li>
              <li>Land Surveying (LiDAR)</li>
              <li>Environmental Compliance</li>
              <li>Zoning Consulting</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-bold mb-6">Contact</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-brand-primary mt-0.5" />
                <span>Nairobi, Kenya.</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-brand-primary" />
                <span>+254 741 392 943</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={18} className="text-brand-primary mt-0.5" />
                <div className="flex flex-col">
                  <span>info@geovistagrp.com</span>
                  <span className="text-slate-500">geovistagroup@gmail.com</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500">
          <p>&copy; {new Date().getFullYear()} GeoVista Group. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;