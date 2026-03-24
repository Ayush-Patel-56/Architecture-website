'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const leadership = [
  {
    name: 'Moshe Safdie',
    role: 'Founder & Principal',
    image: '/moshe.png',
  },
  {
    name: 'Jaron Lubin',
    role: 'Partner',
    image: '/partner1.png',
  },
  {
    name: 'Sean Scensor',
    role: 'Partner',
    image: '/partner2.png',
  },
];

const team = [
  { name: 'Andrea Biondo', role: 'Principal' },
  { name: 'Chris Mullane', role: 'Principal' },
  { name: 'Kushal Lachhwani', role: 'Associate Principal' },
  { name: 'Sarah Gieseking', role: 'Associate Principal' },
  { name: 'Darryl Condon', role: 'Associate Principal' },
  { name: 'Grace Kwok', role: 'Associate Principal' },
];

export default function People() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />

      {/* Header Spacer */}
      <div className="h-32" />

      {/* Featured Leadership */}
      <section className="py-20 px-6 md:px-12 max-w-[1400px] mx-auto">
        <div className="space-y-6 mb-20">
          <h1 className="text-4xl md:text-6xl font-light uppercase tracking-[0.1em] text-[#111]">People</h1>
          <div className="h-[1px] w-24 bg-black/20" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-20">
          {leadership.map((person, index) => (
            <motion.div 
              key={person.name}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 1, ease: 'easeOut' }}
              className="group cursor-pointer"
            >
              <div className="aspect-[3/4] relative overflow-hidden mb-6 bg-neutral-100">
                <Image 
                  src={person.image} 
                  alt={person.name} 
                  fill 
                  className="object-cover transition-transform duration-[1.5s] group-hover:scale-110"
                />
              </div>
              <div className="space-y-1">
                <h2 className="text-xl font-light uppercase tracking-wide group-hover:italic transition-all duration-300">
                  {person.name}
                </h2>
                <p className="text-[11px] uppercase tracking-[0.2em] text-neutral-400 font-bold">
                  {person.role}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Team List */}
      <section className="py-32 px-6 md:px-12 max-w-[1400px] mx-auto bg-neutral-50">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-12">
          {team.map((person, index) => (
            <motion.div 
              key={person.name}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.8 }}
              className="border-t border-neutral-200 pt-6 group"
            >
              <h3 className="text-lg font-light uppercase tracking-wide group-hover:text-neutral-500 transition-colors">
                {person.name}
              </h3>
              <p className="text-[9px] uppercase tracking-[0.3em] text-neutral-400 font-bold mt-2">
                {person.role}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Culture Section */}
      <section className="py-32 px-6 overflow-hidden bg-white">
        <div className="max-w-4xl mx-auto flex flex-col items-center text-center gap-12">
            <h2 className="text-3xl md:text-5xl font-light tracking-tight uppercase leading-[0.9]">
               A Global <span className="italic">Collaborative</span> Entity
            </h2>
            <p className="text-lg font-light text-neutral-500 max-w-2xl leading-relaxed">
              Our multidisciplinary team is composed of passionate individuals from diverse cultural backgrounds, bringing unique perspectives to every challenge we undertake.
            </p>
            <div className="flex flex-wrap justify-center gap-8 md:gap-16">
               <div className="text-center">
                  <p className="text-4xl font-light">80+</p>
                  <p className="text-[9px] uppercase tracking-widest text-neutral-400 mt-2">Team Members</p>
               </div>
               <div className="text-center">
                  <p className="text-4xl font-light">12</p>
                  <p className="text-[9px] uppercase tracking-widest text-neutral-400 mt-2">Nationalities</p>
               </div>
               <div className="text-center">
                  <p className="text-4xl font-light">4</p>
                  <p className="text-[9px] uppercase tracking-widest text-neutral-400 mt-2">Global Studios</p>
               </div>
            </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
