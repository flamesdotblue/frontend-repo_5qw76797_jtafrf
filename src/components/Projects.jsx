import React from 'react';
import { ExternalLink, Star } from 'lucide-react';

const projects = [
  {
    title: 'HoloBoard',
    description: '3D Kanban board with drag-and-drop cards rendered with WebGL and Spline.',
    image: 'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1200&auto=format&fit=crop',
    link: '#',
    stars: 118,
    tags: ['React', 'Three/WebGL', 'Spline']
  },
  {
    title: 'Pulse Analytics',
    description: 'Realtime analytics dashboard with animated charts and dark mode.',
    image: 'https://images.unsplash.com/photo-1698306642516-9841228dcff3?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxQdWxzZSUyMEFuYWx5dGljc3xlbnwwfDB8fHwxNzYxNDk3ODYzfDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    link: '#',
    stars: 203,
    tags: ['Vite', 'Tailwind', 'D3.js']
  },
  {
    title: 'Campus Connect',
    description: 'Mobile-first community portal with events, posts, and messaging.',
    image: 'https://images.unsplash.com/photo-1553778263-73a83bab9b0c?q=80&w=1200&auto=format&fit=crop',
    link: '#',
    stars: 89,
    tags: ['PWA', 'React Router', 'Firebase']
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-white to-slate-50">
      <div className="container mx-auto px-6">
        <div className="flex items-end justify-between mb-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">Featured Projects</h2>
            <p className="text-gray-600 mt-2">A selection of things I’ve built lately.</p>
          </div>
          <a href="#contact" className="hidden md:inline-block text-sm font-semibold text-gray-700 hover:text-gray-900">
            Get in touch →
          </a>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((proj) => (
            <article key={proj.title} className="group rounded-2xl overflow-hidden border bg-white shadow-sm hover:shadow-lg transition-shadow">
              <div className="relative h-48 overflow-hidden">
                <img src={proj.image} alt={proj.title} className="h-full w-full object-cover transform group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute top-3 right-3 inline-flex items-center gap-1 rounded-full bg-white/90 px-2 py-1 text-xs font-medium shadow-sm">
                  <Star className="h-4 w-4 text-amber-500" /> {proj.stars}
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-lg font-semibold text-gray-900">{proj.title}</h3>
                <p className="mt-2 text-gray-700 text-sm leading-relaxed">{proj.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {proj.tags.map((t) => (
                    <span key={t} className="text-xs bg-slate-100 text-slate-700 px-2 py-1 rounded-full">{t}</span>
                  ))}
                </div>
                <div className="mt-5 flex justify-end">
                  <a href={proj.link} className="inline-flex items-center gap-1 text-sm font-semibold text-gray-800 hover:text-gray-900">
                    View Project <ExternalLink className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
