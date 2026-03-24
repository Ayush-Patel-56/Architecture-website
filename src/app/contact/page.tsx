'use client';

import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Mail, Phone, MapPin, Globe } from 'lucide-react';
import Image from 'next/image';

const offices = [
  {
    city: 'Ahmedabad',
    address: 'Near Gurdwara Gobind Dham, Thaltej, Ahmedabad, In Bodakdev, Ahmedabad',
    country: 'India',
    phone: '+91 79-400-31100',
  },
  {
    city: 'Boston',
    address: '100 Properzi Way, Somerville, MA 02143',
    country: 'USA',
    phone: '617-629-2100',
  },
  {
    city: 'Singapore',
    address: '36 Armenian Street #03-04',
    country: 'Singapore 179934',
    phone: '+65 6223 1188',
  },
  {
    city: 'Zurich',
    address: 'Löwenstrasse 20, 8001 Zürich',
    country: 'Switzerland',
    phone: '+41 44 211 1100',
  },
  {
    city: 'Toronto',
    address: '39 Cuthbert Crescent',
    country: 'Toronto, ON M4S 2G9, Canada',
    phone: '+1 416-485-1100',
  },
  {
    city: 'Shanghai',
    address: 'No. 838 South Huang Pi Road, Huangpu District',
    country: 'Shanghai, China 200000',
    phone: '+86 21-6386-1100',
  }
];

const inquiries = [
  { label: 'General Inquiries', email: 'info@studiosahaj.com' },
  { label: 'Media & Communications', email: 'press@studiosahaj.com' },
  { label: 'New Business', email: 'studio@studiosahaj.com' },
  { label: 'Research & Innovation', email: 'labs@studiosahaj.com' },
  { label: 'Employment Opportunities', email: 'careers@studiosahaj.com' },
];

export default function Contact() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-[40vh] w-full flex items-center justify-center overflow-hidden bg-neutral-100">
        <Image 
          src="/hero.png" 
          alt="Global Headquarters" 
          fill 
          className="object-cover brightness-[0.4] opacity-80"
          priority
        />
        <div className="relative z-10 text-center text-white px-6">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-4xl md:text-7xl font-light uppercase tracking-[0.4em]"
          >
            Contact
          </motion.h1>
          <motion.div 
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="h-[1px] w-12 bg-white/40 mx-auto mt-6"
          />
        </div>
      </section>

      {/* Inquiries Section */}
      <section className="py-24 px-6 md:px-12 max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div className="space-y-12">
             <div className="space-y-6">
                <h2 className="text-3xl font-light uppercase tracking-widest text-[#111]">Inquiries</h2>
                <div className="h-[1px] w-12 bg-black" />
             </div>
             <p className="text-lg font-light text-neutral-500 max-w-lg leading-relaxed italic">
                Our global projects are led from our Ahmedabad root studio. We are committed to responding to your inquiries across media, new business, and international design collaborations.
             </p>
             <div className="space-y-8 pt-8">
                {inquiries.map((item, index) => (
                  <motion.div 
                    key={item.label}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.8 }}
                    className="flex flex-col md:flex-row md:items-center justify-between gap-2 border-b border-neutral-100 pb-4 group cursor-pointer"
                  >
                    <span className="text-[10px] uppercase tracking-[0.25em] text-neutral-400 font-bold group-hover:text-black transition-colors">{item.label}</span>
                    <span className="text-sm font-light text-neutral-600 hover:text-black transition-colors">{item.email}</span>
                  </motion.div>
                ))}
             </div>
          </div>

          <div className="relative aspect-video lg:aspect-square bg-neutral-50 p-1 overflow-hidden shadow-sm">
             <Image 
                src="/studio.png" 
                alt="Studio Desk" 
                fill 
                className="object-cover grayscale-0 opacity-90 transition-transform duration-1000 hover:scale-110"
             />
             <div className="absolute top-8 left-8 text-white space-y-2 mix-blend-difference">
                <p className="text-[10px] uppercase tracking-[0.3em] font-bold">Global Reach</p>
                <div className="h-[1px] w-6 bg-white" />
             </div>
          </div>
        </div>
      </section>

      {/* Offices Section */}
      <section className="py-32 bg-neutral-50 px-6 md:px-12">
        <div className="max-w-[1400px] mx-auto">
          <div className="space-y-6 mb-20">
            <h2 className="text-3xl font-light uppercase tracking-widest text-[#111]">Global Studios</h2>
            <div className="h-[1px] w-12 bg-black/20" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-20 gap-x-12">
            {offices.map((office, index) => (
              <motion.div
                key={office.city}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
                className="flex flex-col space-y-6 hover:translate-x-2 transition-transform duration-500"
              >
                <div className="space-y-2">
                  <h3 className="text-2xl font-light uppercase tracking-widest">{office.city}</h3>
                  <div className="h-[1px] w-8 bg-neutral-300" />
                </div>
                <div className="space-y-4 text-xs font-light text-neutral-500 leading-loose uppercase tracking-[0.15em]">
                  <p>{office.address}</p>
                  <p>{office.country}</p>
                  <p className="text-black font-bold pt-2 flex items-center gap-2">
                    <Phone className="w-3 h-3" /> {office.phone}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Map Filler Section */}
      <section className="h-[40vh] bg-neutral-200 relative">
         <div className="absolute inset-0 flex items-center justify-center text-center px-6">
            <div className="space-y-4">
               <Globe className="w-12 h-12 text-black/10 mx-auto" />
               <p className="text-[10px] uppercase tracking-[0.5em] text-neutral-400 font-bold">Interconnected Global Architecture</p>
            </div>
         </div>
      </section>

      <Footer />
    </main>
  );
}
