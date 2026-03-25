'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const projects = [
  {
    title: 'Cultural Center',
    location: 'Qinhuangdao, China',
    image: '/cultural.png',
    type: 'Cultural',
  },
  {
    title: 'Residential Tower',
    location: 'Singapore',
    image: '/residential.png',
    type: 'Residential',
  },
  {
    title: 'Institutional Hub',
    location: 'Cambridge, MA',
    image: '/institutional.png',
    type: 'Institutional',
  },
  {
    title: 'Marina Bay Sands',
    location: 'Singapore',
    image: '/hero.png',
    type: 'Mixed-Use',
  },
  {
    title: 'Urban Garden Hub',
    location: 'Shanghai, China',
    image: '/research.png',
    type: 'Urban Design',
  },
  {
    title: 'Modern Library',
    location: 'Ahmedabad',
    image: '/archive.png',
    type: 'Institutional',
  },
];

const categories = ['All', 'Cultural', 'Residential', 'Institutional', 'Mixed-Use', 'Urban Design'];

export default function ProjectsPage() {
  const [filter, setFilter] = useState('All');

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(p => p.type === filter);

  return (
    <main className="min-h-screen bg-white">
      <Navigation />

      {/* Header Spacer */}
      <div className="h-32" />

      {/* Projects Content */}
      <section className="py-20 px-6 md:px-12 max-w-[1400px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-10">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-6xl font-light uppercase tracking-[0.1em] text-[#111]">Projects</h1>
            <div className="h-[1px] w-24 bg-black/20" />
          </div>
          
          <div className="flex gap-8 text-[10px] uppercase tracking-[0.25em] text-neutral-400 font-bold overflow-x-auto pb-4 scrollbar-hide w-full md:w-auto">
            {categories.map((type) => (
              <button
                key={type}
                onClick={() => setFilter(type)}
                className={`transition-all duration-300 whitespace-nowrap hover:text-black relative ${
                  filter === type ? 'text-black after:content-[""] after:absolute after:-bottom-2 after:left-0 after:w-full after:h-[1px] after:bg-black' : ''
                }`}
              >
                {type}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-20">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={`${project.title}-${index}`}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="group cursor-pointer"
            >
              <div className="aspect-[3/4] relative overflow-hidden mb-6 bg-neutral-100">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-700" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-700 translate-y-4 group-hover:translate-y-0 text-center px-4">
                  <span className="text-white text-[10px] tracking-[0.3em] uppercase border border-white/60 px-6 py-3 backdrop-blur-md bg-white/5">
                    Explore Details
                  </span>
                </div>
              </div>
              <div className="flex justify-between items-start gap-4">
                <div className="space-y-1">
                  <h3 className="text-xl font-light tracking-wide uppercase transition-all duration-300 group-hover:opacity-60">{project.title}</h3>
                  <p className="text-[11px] text-neutral-400 tracking-[0.1em] uppercase font-medium">{project.location}</p>
                </div>
                <span className="text-[9px] text-neutral-400 border border-neutral-200 px-3 py-1 uppercase tracking-[0.1em] font-bold">
                  {project.type}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
