'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const eventItems = [
  {
    category: 'Event',
    title: "Announcing the design of Mandarin Oriental Residences",
    date: 'February 18, 2026',
    image: '/residential.png',
  },
  {
    category: 'Lecture',
    title: 'Architects, not Architecture',
    date: 'November 25, 2025',
    image: '/lecture.png',
  },
  {
    category: 'Lecture',
    title: 'Garden Typologies for the Mega City',
    date: 'October 23, 2025',
    image: '/research.png',
  },
  {
    category: 'Event',
    title: 'Moshe Safdie to Speak at Arts and Wellness Festival',
    date: 'October 7, 2025',
    image: '/studio.png',
  },
  {
    category: 'Exhibit',
    title: 'Architecture as an Instruction-Based Art',
    date: 'August 25, 2024',
    image: '/exhibit.png',
  },
  {
    category: 'Lecture',
    title: 'The Shape of Things to Come',
    date: 'April 18, 2024',
    image: '/cultural.png',
  },
];

const categories = ['All', 'Lecture', 'Event', 'Exhibit'];

export default function Events() {
  const [filter, setFilter] = useState('All');

  const filteredItems = filter === 'All' 
    ? eventItems 
    : eventItems.filter(item => item.category === filter);

  return (
    <main className="min-h-screen bg-white">
      <Navigation />

      {/* Header Spacer */}
      <div className="h-32" />

      {/* Featured Events Section */}
      <section className="px-6 md:px-12 max-w-[1400px] mx-auto py-20">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-10">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-6xl font-light uppercase tracking-[0.1em] text-[#111]">Events</h1>
            <div className="h-[1px] w-24 bg-black/20" />
          </div>
          
          <div className="flex gap-8 text-[10px] uppercase tracking-[0.25em] text-neutral-400 font-bold overflow-x-auto pb-4 scrollbar-hide w-full md:w-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`transition-all duration-300 whitespace-nowrap hover:text-black relative ${
                  filter === cat ? 'text-black after:content-[""] after:absolute after:-bottom-2 after:left-0 after:w-full after:h-[1px] after:bg-black' : ''
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Featured Card */}
        {filter === 'All' && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="group cursor-pointer relative aspect-video md:aspect-[21/9] overflow-hidden mb-24 bg-neutral-100"
          >
            <Image 
              src="/lecture.png" 
              alt="Featured Event" 
              fill 
              className="object-cover brightness-75 transition-transform duration-[2s] group-hover:scale-105"
            />
            <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-16 text-white space-y-4 bg-gradient-to-t from-black/60 to-transparent">
              <span className="text-[10px] uppercase tracking-[0.4em] font-bold">Featured Lecture</span>
              <h2 className="text-3xl md:text-5xl font-light uppercase tracking-wide leading-tight max-w-3xl">
                The Shape of Things to Come: A Vision for the Polycentric City
              </h2>
              <p className="text-xs uppercase tracking-widest opacity-80">April 18, 2026</p>
            </div>
          </motion.div>
        )}

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-24">
          {filteredItems.map((item, index) => (
            <motion.div
              key={`${item.title}-${index}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              className="group cursor-pointer flex flex-col"
            >
              <div className="aspect-[4/3] relative overflow-hidden mb-8 bg-neutral-100">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-[1.5s] group-hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                   <span className="text-[9px] text-white backdrop-blur-md bg-black/30 border border-white/20 px-3 py-1 uppercase tracking-[0.2em] font-bold">
                    {item.category}
                  </span>
                </div>
              </div>
              
              <div className="space-y-4 flex-1 flex flex-col">
                <p className="text-[10px] text-neutral-400 uppercase tracking-[0.2em] font-bold">{item.date}</p>
                <h3 className="text-xl font-light tracking-wide uppercase leading-snug group-hover:italic transition-all duration-300">
                  {item.title}
                </h3>
                <div className="mt-auto pt-4 flex items-center gap-4 group/btn">
                   <span className="text-[9px] uppercase tracking-[0.3em] font-bold border-b border-black/10 pb-2 group-hover/btn:border-black transition-all">Details</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Calendar Section */}
      <section className="bg-neutral-900 py-32 px-6 text-white text-center">
        <div className="max-w-xl mx-auto space-y-10">
          <h2 className="text-3xl font-light uppercase tracking-[0.2em]">Upcoming Calendar</h2>
          <p className="text-sm font-light text-neutral-400 leading-relaxed max-w-sm mx-auto">
            Stay informed about our upcoming public lectures, firm exhibits, and community events globally.
          </p>
          <button className="text-[10px] uppercase tracking-[0.3em] font-bold px-10 py-4 border border-white/20 hover:bg-white hover:text-black transition-all duration-500">
            Download 2026 Schedule
          </button>
        </div>
      </section>

      <Footer />
    </main>
  );
}
