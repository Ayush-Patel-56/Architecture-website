'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const sections = [
  {
    title: 'Firm Philosophy',
    description: 'Studio Sahaj believes in architecture that emerges naturally from its context—where design feels effortless, rooted, and human. We create spaces guided by simplicity, climate, and experience rather than imposed form.',
    highlight: '"Architecture that feels natural, lives lightly, and belongs effortlessly."',
    image: '/hero.png',
  },
  {
    title: 'Global Topology',
    description: 'Studio Sahaj is an interdisciplinary architectural design studio (LLP) focused on sustainable and human-centric design, integrating creative exploration with technical expertise.',
    highlight: 'While rooted in Ahmedabad, the firm maintains a global presence with offices in the USA, Singapore, Toronto, Switzerland, and Shanghai.',
    image: '/studio.png',
  },
  {
    title: 'Research & Innovation',
    description: 'Our approach seeks harmony between people, place, and material—quiet, timeless, and intuitive. We continuously explore new ways of thinking about urbanism through rigorous spatial research.',
    image: '/research.png',
  },
  {
    title: 'Model Shop',
    description: 'Physical models are essential to our process. They allow us to test light, scale, and materiality in a way that digital tools cannot fully replicate.',
    image: '/models.png',
  },
];

export default function Practice() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-[80vh] w-full flex items-center justify-center overflow-hidden">
        <Image 
          src="/studio.png" 
          alt="Studio Life" 
          fill 
          className="object-cover brightness-50"
          priority
        />
        <div className="relative z-10 text-center text-white px-6">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="text-5xl md:text-8xl font-light uppercase tracking-[0.3em]"
          >
            Practice
          </motion.h1>
          <motion.div 
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="h-[1px] w-24 bg-white/40 mx-auto mt-8"
          />
        </div>
      </section>

      {/* Content Blocks */}
      <div className="max-w-[1400px] mx-auto py-32 px-6 md:px-12 space-y-40">
        {sections.map((section, index) => (
          <motion.section 
            key={section.title}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 lg:gap-24 items-center`}
          >
            <div className="flex-1 w-full aspect-[16/10] relative overflow-hidden bg-neutral-100">
              <Image 
                src={section.image} 
                alt={section.title} 
                fill 
                className="object-cover transition-transform duration-[2s] hover:scale-110"
              />
            </div>
            
            <div className="flex-1 space-y-6 max-w-xl">
              <div className="flex items-center gap-4 text-neutral-400">
                <span className="text-[10px] font-bold tracking-[0.4em] uppercase">0{index + 1}</span>
                <div className="h-[1px] w-8 bg-neutral-200" />
              </div>
              <h2 className="text-3xl md:text-5xl font-light uppercase tracking-[0.1em] text-[#111]">
                {section.title}
              </h2>
              <p className="text-lg font-light text-neutral-500 leading-relaxed italic">
                {section.description}
              </p>
              {section.highlight && (
                <p className="text-sm font-medium text-[#ff4e4e] tracking-widest uppercase py-4 leading-relaxed italic">
                  {section.highlight}
                </p>
              )}
              <div className="pt-4">
                <button className="text-[10px] uppercase tracking-[0.3em] font-bold border-b border-black/10 pb-2 hover:border-black transition-all">
                  Learn More
                </button>
              </div>
            </div>
          </motion.section>
        ))}
      </div>

      {/* Quote Section */}
      <section className="bg-neutral-50 py-32 px-6">
         <div className="max-w-4xl mx-auto text-center space-y-12">
            <p className="text-2xl md:text-4xl font-light text-neutral-800 leading-tight">
              "To capture the essence of a place, one must understand its people, its history, and its light."
            </p>
            <div className="space-y-2">
              <p className="text-xs uppercase tracking-[0.3em] font-bold">Om Patel</p>
              <p className="text-[10px] uppercase tracking-[0.2em] text-neutral-400">Founder & Principal</p>
            </div>
         </div>
      </section>

      <Footer />
    </main>
  );
}
