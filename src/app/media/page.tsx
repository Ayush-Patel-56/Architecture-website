'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const newsItems = [
  {
    category: 'Article',
    title: "Lessons for Economics in StudioSAHAJ's 'If Walls Could Speak'",
    date: 'October 10, 2025',
    image: '/news2.png',
  },
  {
    category: 'Award',
    title: 'Habitat Qinhuangdao and Sky Habitat Honored with Global Excellence',
    date: 'October 10, 2025',
    image: '/award.png',
  },
  {
    category: 'News',
    title: 'Crystal Bridges Museum Expansion set to open in June 2026',
    date: 'September 9, 2025',
    image: '/cultural.png',
  },
  {
    category: 'Article',
    title: 'Redefining Singapore: Breaking Ground on Marina Bay Sands Expansion',
    date: 'August 1, 2025',
    image: '/news1.png',
  },
  {
    category: 'Award',
    title: 'Surbana Jurong receives International Architecture Award 2025',
    date: 'August 1, 2025',
    image: '/institutional.png',
  },
  {
    category: 'Interview',
    title: 'Moshe Safdie: Designing Between Worlds and Civilizations',
    date: 'July 24, 2025',
    image: '/studio.png',
  },
];

const categories = ['All', 'News', 'Award', 'Article', 'Interview'];

export default function Media() {
  const [filter, setFilter] = useState('All');

  const filteredItems = filter === 'All' 
    ? newsItems 
    : newsItems.filter(item => item.category === filter);

  return (
    <main className="min-h-screen bg-white">
      <Navigation />

      {/* Header Spacer */}
      <div className="h-32" />

      {/* Featured News Section */}
      <section className="px-6 md:px-12 max-w-[1400px] mx-auto py-20">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-10">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-6xl font-light uppercase tracking-[0.1em] text-[#111]">Media</h1>
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
              src="/news1.png" 
              alt="Featured News" 
              fill 
              className="object-cover brightness-75 transition-transform duration-[2s] group-hover:scale-105"
            />
            <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-16 text-white space-y-4 bg-gradient-to-t from-black/60 to-transparent">
              <span className="text-[10px] uppercase tracking-[0.4em] font-bold">Featured News</span>
              <h2 className="text-3xl md:text-5xl font-light uppercase tracking-wide leading-tight max-w-3xl">
                Redefining Urbanism: The Marina Bay Sands Expansion Breaks Ground
              </h2>
              <p className="text-xs uppercase tracking-widest opacity-80">August 1, 2025</p>
            </div>
          </motion.div>
        )}

        {/* Media Grid */}
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
                   <span className="text-[9px] uppercase tracking-[0.3em] font-bold border-b border-black/10 pb-2 group-hover/btn:border-black transition-all">Read Story</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Subscribe Section */}
      <section className="bg-neutral-50 py-32 px-6">
        <div className="max-w-2xl mx-auto text-center space-y-10">
          <h2 className="text-3xl font-light uppercase tracking-[0.2em]">Insights Newsletter</h2>
          <p className="text-sm font-light text-neutral-500 leading-relaxed max-w-md mx-auto">
            Subscribe to receive the latest updates, awards, and exclusive interviews from our global studios.
          </p>
          <div className="flex flex-col md:flex-row gap-4 border-b border-black/10 pb-2">
            <input 
              type="email" 
              placeholder="Email Address" 
              className="flex-1 bg-transparent px-4 py-2 text-xs uppercase tracking-widest outline-none font-medium placeholder:text-neutral-300"
            />
            <button className="text-[10px] uppercase tracking-[0.3em] font-bold px-8 py-3 bg-black text-white hover:opacity-80 transition-opacity">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
