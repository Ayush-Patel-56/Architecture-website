'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Mail, MapPin, Globe } from 'lucide-react';

const positions = [
  {
    title: 'Project Manager',
    location: 'Somerville, MA',
    description: 'We are looking for a strategic, dynamic, and thoughtful Project Manager with exemplary design sensitivities and organizational skills to join our architectural practice.',
    details: [
      'Prepare fee proposals and monitor expenses to manage project budgets.',
      'Assess deviations from project requirements and update schedules.',
      'Support the design team through meetings and reviews.',
      'Collaborate with project consultants for technical coordination.'
    ],
    prerequisites: [
      'Professional degree in Architecture.',
      '10 years of professional experience, with 3 years as a Project Manager.',
      'Exemplary skills in organization, communication, and collaboration.'
    ]
  },
  {
    title: 'Senior Architect',
    location: 'Singapore',
    description: 'Support the design and delivery of major institutional and mixed-use projects in the Southeast Asian region.',
    details: [
      'Lead design documentation at each project stage.',
      'Coordinate with global studios on large-scale masterplans.',
      'Ensure design intent is preserved through construction.'
    ],
    prerequisites: [
      '8+ years experience in large-scale architecture.',
      'Strong proficiency in Revit and Rhino.',
      'Regional experience in Asia preferred.'
    ]
  }
];

export default function Careers() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-[60vh] w-full flex items-center justify-center overflow-hidden">
        <Image 
          src="/studio.png" 
          alt="Studio Culture" 
          fill 
          className="object-cover brightness-50"
          priority
        />
        <div className="relative z-10 text-center text-white px-6 space-y-4">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="text-5xl md:text-8xl font-light uppercase tracking-[0.3em]"
          >
            Careers
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="text-sm md:text-base font-light uppercase tracking-[0.4em] opacity-70"
          >
            Join Our Global Studio
          </motion.p>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-32 px-6 md:px-12 max-w-4xl mx-auto text-center space-y-12">
         <div className="space-y-6">
            <h2 className="text-3xl md:text-5xl font-light uppercase tracking-[0.1em] text-[#111] leading-tight">
               Designing the <span className="italic">Future</span> Together
            </h2>
            <div className="h-[1px] w-12 bg-black mx-auto" />
         </div>
         <p className="text-lg font-light text-neutral-500 leading-relaxed italic">
            Headquartered in Somerville, MA with offices in Toronto, Jerusalem, Singapore and Shanghai, StudioSAHAJ is constantly engaged in the design of a diverse range of projects. Current work includes the expansion of Marina Bay Sands, mixed-use developments in the USA, and large-scale master plans globally.
         </p>
         <div className="flex flex-wrap justify-center gap-12 pt-8">
            <div className="flex items-center gap-2 text-[10px] uppercase tracking-widest font-bold text-neutral-400">
               <Globe className="w-4 h-4" /> 5 Global Studios
            </div>
            <div className="flex items-center gap-2 text-[10px] uppercase tracking-widest font-bold text-neutral-400">
               <MapPin className="w-4 h-4" /> Multiple Continents
            </div>
            <div className="flex items-center gap-2 text-[10px] uppercase tracking-widest font-bold text-neutral-400">
               <Mail className="w-4 h-4" /> careers@studiosahaj.com
            </div>
         </div>
      </section>

      {/* Open Positions Grid */}
      <section className="py-24 px-6 md:px-12 max-w-[1200px] mx-auto space-y-24">
        {positions.map((job, index) => (
          <motion.div 
            key={job.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-neutral-100 pt-16"
          >
            <div className="space-y-4">
               <h3 className="text-2xl font-light uppercase tracking-wide">{job.title}</h3>
               <p className="text-[10px] uppercase tracking-widest text-neutral-400 font-bold">{job.location}</p>
            </div>
            
            <div className="md:col-span-2 space-y-12">
               <div className="space-y-6">
                  <p className="text-lg font-light text-neutral-600 leading-relaxed">{job.description}</p>
                  <ul className="space-y-3">
                     {job.details.map((detail, i) => (
                        <li key={i} className="text-sm font-light text-neutral-500 flex gap-4">
                           <span className="text-black/20">•</span> {detail}
                        </li>
                     ))}
                  </ul>
               </div>

               <div className="space-y-6 bg-neutral-50 p-8 rounded-sm">
                  <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-black">Prerequisites</h4>
                  <ul className="space-y-3">
                     {job.prerequisites.map((req, i) => (
                        <li key={i} className="text-xs font-light text-neutral-500 flex gap-4">
                           <span className="text-black/20">—</span> {req}
                        </li>
                     ))}
                  </ul>
               </div>

               <div className="pt-6">
                  <button className="text-[10px] uppercase tracking-[0.4em] font-bold border border-black px-10 py-5 hover:bg-black hover:text-white transition-all duration-500">
                     Apply for this Position
                  </button>
               </div>
            </div>
          </motion.div>
        ))}
      </section>

      {/* Call to Action */}
      <section className="bg-neutral-900 py-32 px-6 text-white text-center">
         <div className="max-w-xl mx-auto space-y-12">
            <h2 className="text-3xl font-light uppercase tracking-[0.2em] leading-tight">Can't find a <span className="italic">match</span>?</h2>
            <p className="text-sm font-light text-neutral-400 leading-relaxed max-w-sm mx-auto">
               We are always looking for exceptional talent. If you believe your vision aligns with our practice, please submit an open application.
            </p>
            <button className="text-[10px] uppercase tracking-[0.3em] font-bold border-b border-white/20 pb-2 hover:border-white transition-all">
               Open Application
            </button>
         </div>
      </section>

      <Footer />
    </main>
  );
}
