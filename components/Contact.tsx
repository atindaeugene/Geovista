import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="bg-slate-50 min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-brand-dark mb-4">Start Your Project</h1>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Ready to leverage spatial data for your next development? Our team of experts is ready to assist you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Info Card */}
          <div className="bg-brand-dark text-white p-10 rounded-2xl shadow-xl h-fit">
            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
            <p className="text-slate-300 mb-8 leading-relaxed">
              Fill out the form and our team will get back to you within 24 hours.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center">
                  <Phone size={20} className="text-brand-primary" />
                </div>
                <span>+254 741 392 943</span>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Mail size={20} className="text-brand-primary" />
                </div>
                <div className="flex flex-col">
                  <span>info@geovistagrp.com</span>
                  <span className="text-slate-400 text-sm">geovistagroup@gmail.com</span>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin size={20} className="text-brand-primary" />
                </div>
                <span>Nairobi, Kenya.</span>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-2 bg-white p-10 rounded-2xl shadow-md border border-slate-100">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-slate-700 mb-2">First Name</label>
                  <input type="text" id="firstName" className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-brand-primary focus:border-brand-primary outline-none transition-all" placeholder="John" />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-slate-700 mb-2">Last Name</label>
                  <input type="text" id="lastName" className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-brand-primary focus:border-brand-primary outline-none transition-all" placeholder="Doe" />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">Email Address</label>
                <input type="email" id="email" className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-brand-primary focus:border-brand-primary outline-none transition-all" placeholder="john@company.com" />
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-medium text-slate-700 mb-2">Service Interest</label>
                <select id="service" className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-brand-primary focus:border-brand-primary outline-none transition-all">
                  <option value="">Select a service...</option>
                  <option value="gis">GIS Mapping</option>
                  <option value="planning">Urban Planning</option>
                  <option value="survey">Land Surveying</option>
                  <option value="consulting">General Consulting</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">Message</label>
                <textarea id="message" rows={4} className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-brand-primary focus:border-brand-primary outline-none transition-all" placeholder="Tell us about your project needs..."></textarea>
              </div>

              <button type="submit" className="w-full bg-brand-primary hover:bg-emerald-500 text-white font-bold py-4 rounded-lg shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2">
                Send Message <Send size={18} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;