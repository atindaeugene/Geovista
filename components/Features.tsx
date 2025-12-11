import React from 'react';
import { Globe, Layers, MapPin, Building2, Ruler, Sprout } from 'lucide-react';
import { ServiceItem } from '../types';

const services: ServiceItem[] = [
  {
    id: 'gis',
    title: 'Advanced GIS Mapping',
    description: 'Data-driven visualizations that reveal hidden patterns, risks, and opportunities in land development.',
    icon: Globe,
  },
  {
    id: 'planning',
    title: 'Urban Planning',
    description: 'Strategic master planning that balances regulatory compliance with community needs and economic viability.',
    icon: Building2,
  },
  {
    id: 'survey',
    title: 'Land Surveying',
    description: 'High-precision topographical and boundary surveys using LiDAR and drone technology.',
    icon: Ruler,
  },
  {
    id: 'environmental',
    title: 'Environmental Consulting',
    description: 'Impact assessments and sustainability strategies to navigate complex environmental regulations.',
    icon: Sprout,
  },
  {
    id: 'zoning',
    title: 'Zoning & Permitting',
    description: 'Expert navigation of local zoning laws to expedite project approval and minimize red tape.',
    icon: Layers,
  },
  {
    id: 'location',
    title: 'Site Selection Intelligence',
    description: 'Demographic and spatial analysis to identify the optimal location for your next asset.',
    icon: MapPin,
  },
];

const Features: React.FC = () => {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-brand-primary font-bold tracking-wide uppercase text-sm mb-3">Our Expertise</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4">Comprehensive Spatial Solutions</h3>
          <p className="text-slate-600 text-lg">
            From initial concept to final approval, we provide the technical data and regulatory insight you need to build with confidence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div key={service.id} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-shadow duration-300 border border-slate-100 group">
              <div className="w-14 h-14 bg-brand-light rounded-xl flex items-center justify-center mb-6 group-hover:bg-brand-primary transition-colors">
                <service.icon size={28} className="text-brand-primary group-hover:text-white transition-colors" />
              </div>
              <h4 className="text-xl font-bold text-brand-dark mb-3">{service.title}</h4>
              <p className="text-slate-600 leading-relaxed">{service.description}</p>
              <a href="#" className="inline-block mt-4 text-brand-primary font-semibold text-sm hover:underline">Learn more &rarr;</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;