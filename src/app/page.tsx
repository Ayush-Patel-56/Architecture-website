'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Link from 'next/link';

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
];

export default function Home() {
  const [filter, setFilter] = useState('All');

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(p => p.type === filter);

  return (
    <main className="min-h-screen bg-[#fdfdfd] selection:bg-black selection:text-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-[100svh] w-full overflow-hidden">
        <motion.div 
          initial={{ scale: 1.15 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2, ease: [0.33, 1, 0.68, 1] }}
          className="absolute inset-0"
        >
          <Image
            src="/hero.png"
            alt="Hero Architectural Masterpiece"
            fill
            className="object-cover brightness-75"
            priority
          />
        </motion.div>
        
        <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-20 bg-gradient-to-t from-black/60 via-transparent to-transparent">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 1, ease: 'easeOut' }}
            className="text-white space-y-6 max-w-3xl"
          >
            <h1 className="text-6xl md:text-8xl font-light tracking-tight leading-[0.9] md:leading-[0.85]">
              For Everyone <br /> <span className="italic">a Garden</span>
            </h1>
            <p className="text-lg md:text-xl font-light opacity-90 max-w-xl leading-relaxed">
              Architecture that creates human environments, combining nature with the urban landscape.
            </p>
            <div className="pt-4">
              <Link href="/projects">
                <button className="flex items-center gap-4 border border-white/40 bg-white/5 backdrop-blur-lg px-8 py-4 text-xs tracking-[0.2em] uppercase hover:bg-white hover:text-black transition-all duration-500 group">
                  Explore Projects <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-32 px-6 md:px-12 max-w-[1400px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-10">
          <div className="space-y-6">
            <h2 className="text-4xl font-light uppercase tracking-[0.15em] text-[#111]">Work</h2>
            <div className="h-[1px] w-20 bg-black/20" />
          </div>
          
          <div className="flex gap-10 text-[10px] uppercase tracking-[0.25em] text-neutral-400 font-bold overflow-x-auto pb-4 scrollbar-hide">
            {['All', 'Cultural', 'Residential', 'Institutional'].map((type) => (
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
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.15, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
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
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-700 translate-y-4 group-hover:translate-y-0">
                  <span className="text-white text-[10px] tracking-[0.3em] uppercase border border-white/60 px-6 py-3 backdrop-blur-md bg-white/5">
                    View Project
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

      {/* Vision/Practice Section */}
      <section className="bg-neutral-900 py-32 px-6 md:px-12 text-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
             initial={{ opacity: 0, x: -50 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 1 }}
             className="space-y-8"
          >
            <h2 className="text-4xl md:text-6xl font-light tracking-tight uppercase leading-[0.9]">
              Buildings that <br /> <span className="italic">Elevate</span> the <br /> Human Experience
            </h2>
            <p className="text-lg font-light text-neutral-400 max-w-md leading-relaxed">
              Our multidisciplinary approach integrates architecture, urbanism, and interior design to create iconic structures that resonate with their context.
            </p>
            <Link href="/practice">
              <button className="text-xs tracking-[0.3em] uppercase border-b border-white/20 pb-2 hover:border-white transition-all">
                Our Philosophy
              </button>
            </Link>
          </motion.div>
          
          <div className="relative aspect-video lg:aspect-square">
             <Image 
                src="/hero.png" 
                alt="Architecture detail" 
                fill 
                className="object-cover grayscale hover:grayscale-0 transition-all duration-1000 opacity-50"
             />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

