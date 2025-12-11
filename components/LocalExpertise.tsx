import React from 'react';
import { ShieldCheck, Map, FileText } from 'lucide-react';

const LocalExpertise: React.FC = () => {
  return (
    <section className="py-20 bg-brand-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-10 md:p-16 flex flex-col justify-center">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-bold uppercase tracking-wider mb-6 w-fit">
                Why Choose Us
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-brand-dark mb-6">
                Deep Local Roots. <br />
                Regulatory Mastery.
              </h3>
              <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                We don't just understand the software; we understand the landscape. Our team maintains active relationships with NEMA, county governments, and regulatory agencies, ensuring your project doesn't just look good on paper—it gets built.
              </p>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center text-blue-600">
                    <ShieldCheck size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-brand-dark">Compliance Guaranteed</h4>
                    <p className="text-slate-500 text-sm">100% success rate in environmental compliance audits (EIA/EA).</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center text-blue-600">
                    <FileText size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-brand-dark">Expedited Permitting</h4>
                    <p className="text-slate-500 text-sm">We anticipate county approval requirements before they arise, reducing timelines by ~30%.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative h-64 lg:h-auto">
              <img 
                src="https://images.unsplash.com/photo-1621847468516-1ed5d0df56fe?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Engineers on site" 
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-blue-900/20 mix-blend-multiply"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocalExpertise;