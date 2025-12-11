export type Page = 'home' | 'services' | 'portfolio' | 'blog' | 'contact';

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<any>;
}

export interface Project {
  id: string;
  title: string;
  category: string;
  location: string;
  description: string;
  imageUrl: string;
  stats: { label: string; value: string }[];
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  imageUrl: string;
}