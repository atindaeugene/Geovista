import React from 'react';
import { Testimonial } from '../types';
import { Quote } from 'lucide-react';

const testimonials: Testimonial[] = [
  {
    id: '1',
    quote: "GeoVista's regulatory insights saved us six months on our permitting timeline. Their maps aren't just pretty; they are powerful tools for negotiation with county officials.",
    author: "Wangari Kamau",
    role: "Director of Development",
    company: "Apex Properties Kenya"
  },
  {
    id: '2',
    quote: "The level of detail in their environmental impact assessment gave the NEMA officers the confidence to approve our master plan unanimously.",
    author: "David Omondi",
    role: "County Planner",
    company: "Kisumu County Govt"
  },
  {
    id: '3',
    quote: "We use GeoVista for all our site selection across East Africa. Their demographic layering is unmatched in the region.",
    author: "Amina Hassan",
    role: "VP of Expansion",
    company: "Savanna Retail Group"
  }
];

const partners = ['NEMA', 'KeNHA', 'KURA', 'Nairobi City County', 'UN-Habitat', 'NCA'];

const Testimonials: React.FC = () => {
  return (
    <section className="py-20 bg-brand-dark text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Logos */}
        <div className="mb-20">
          <p className="text-center text-slate-400 text-sm font-semibold uppercase tracking-widest mb-8">Trusted by Leading Organizations Across East Africa</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-50">
            {partners.map((partner, idx) => (
              <span key={idx} className="text-xl md:text-2xl font-bold font-sans tracking-tight hover:text-white transition-colors cursor-default whitespace-nowrap">
                {partner}
              </span>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item) => (
            <div key={item.id} className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700 relative">
              <Quote className="absolute top-6 right-6 text-brand-primary opacity-20" size={48} />
              <p className="text-slate-300 italic mb-6 leading-relaxed relative z-10">"{item.quote}"</p>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-brand-primary to-blue-500 flex items-center justify-center font-bold text-white text-sm">
                  {item.author.charAt(0)}
                </div>
                <div>
                  <div className="font-bold text-white text-sm">{item.author}</div>
                  <div className="text-emerald-400 text-xs">{item.role}, {item.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Testimonials;