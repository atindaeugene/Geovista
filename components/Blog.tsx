import React from 'react';
import { BlogPost } from '../types';
import { Calendar } from 'lucide-react';

const posts: BlogPost[] = [
  {
    id: '1',
    title: 'The Future of Urban Digital Twins',
    excerpt: 'How real-time 3D models are changing the way cities simulate traffic, energy usage, and emergency response.',
    date: 'Oct 12, 2023',
    category: 'Technology',
    // Nairobi Skyline Night
    imageUrl: 'https://images.unsplash.com/photo-1523805009345-7448845a9e53?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
  },
  {
    id: '2',
    title: 'Navigating New Wetland Regulations',
    excerpt: 'A comprehensive guide to the updated EPA guidelines and what they mean for commercial development.',
    date: 'Sep 28, 2023',
    category: 'Regulation',
    // Lake Naivasha / Wetlands
    imageUrl: 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
  },
  {
    id: '3',
    title: 'GIS in Disaster Mitigation',
    excerpt: 'Case studies on how predictive mapping saved millions in infrastructure damage during the last hurricane season.',
    date: 'Sep 15, 2023',
    category: 'Case Study',
    // African Landscape / Weather
    imageUrl: 'https://images.unsplash.com/photo-1518182170546-07fa6ee04918?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
  }
];

const Blog: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-brand-primary font-bold tracking-wide uppercase text-sm mb-3">Insights & News</h2>
          <h3 className="text-3xl font-bold text-brand-dark">Latest from the Field</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post) => (
            <article key={post.id} className="group cursor-pointer">
              <div className="overflow-hidden rounded-xl mb-4 h-48">
                <img 
                  src={post.imageUrl} 
                  alt={post.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="flex items-center gap-4 text-xs text-slate-500 mb-3">
                <span className="text-brand-primary font-bold uppercase">{post.category}</span>
                <span className="flex items-center gap-1"><Calendar size={12} /> {post.date}</span>
              </div>
              <h4 className="text-xl font-bold text-brand-dark mb-2 group-hover:text-brand-primary transition-colors">
                {post.title}
              </h4>
              <p className="text-slate-600 text-sm line-clamp-2">
                {post.excerpt}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;