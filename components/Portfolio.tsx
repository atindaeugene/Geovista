import React from 'react';
import { Project } from '../types';
import { ArrowUpRight } from 'lucide-react';

const projects: Project[] = [
  {
    id: '1',
    title: 'Nairobi Metro Expansion',
    category: 'Urban Planning',
    location: 'Nairobi, Kenya',
    description: 'Integrated 15km of new light rail lines into existing high-density zoning, optimizing commuter flow.',
    // Nairobi Expressway / Infrastructure vibe
    imageUrl: 'https://images.unsplash.com/photo-1625760235308-498b33530c33?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    stats: [
      { label: 'Commute Reduced', value: '18%' },
      { label: 'Coverage', value: '15 sq km' }
    ]
  },
  {
    id: '2',
    title: 'Rift Valley Eco-Lodge',
    category: 'Sustainable Design',
    location: 'Naivasha, Kenya',
    description: 'A 500-acre master-planned community focused on net-zero energy usage and wildlife preservation.',
    // Rift Valley / Savanna Landscape
    imageUrl: 'https://images.unsplash.com/photo-1489396160835-7796bf409930?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    stats: [
      { label: 'Units', value: '450' },
      { label: 'Green Space', value: '60%' }
    ]
  },
  {
    id: '3',
    title: 'Mombasa Coastal Analysis',
    category: 'GIS & Analysis',
    location: 'Mombasa, Kenya',
    description: 'High-resolution flood risk modeling to guide municipal infrastructure investments over the next 20 years.',
    // Kenyan Coast / Mombasa
    imageUrl: 'https://images.unsplash.com/photo-1534764878206-a05e550259b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    stats: [
      { label: 'Assets Protected', value: '$2.5B' },
      { label: 'Resolution', value: '0.5m' }
    ]
  }
];

const Portfolio: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div className="max-w-2xl">
            <h2 className="text-brand-primary font-bold tracking-wide uppercase text-sm mb-3">Our Work</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4 md:mb-0">Transforming Data into Development</h3>
          </div>
          <button className="hidden md:flex items-center gap-2 text-brand-dark font-semibold hover:text-brand-primary transition-colors">
            View Full Portfolio <ArrowUpRight size={18} />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="group relative overflow-hidden rounded-2xl shadow-lg cursor-pointer">
              <div className="aspect-w-4 aspect-h-3 h-64 overflow-hidden">
                <img 
                  src={project.imageUrl} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/80 to-transparent opacity-90 transition-opacity"></div>
              
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <div className="text-emerald-400 text-xs font-bold uppercase tracking-wider mb-2">{project.category} • {project.location}</div>
                <h4 className="text-2xl font-bold mb-2">{project.title}</h4>
                <p className="text-slate-300 text-sm mb-4 line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity delay-100 duration-300">
                  {project.description}
                </p>
                <div className="flex gap-4 border-t border-white/20 pt-4 opacity-0 group-hover:opacity-100 transition-opacity delay-150 duration-300">
                  {project.stats.map((stat, idx) => (
                    <div key={idx}>
                      <div className="text-lg font-bold">{stat.value}</div>
                      <div className="text-xs text-slate-400 uppercase">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center md:hidden">
          <button className="btn-secondary">
            View Full Portfolio
          </button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;