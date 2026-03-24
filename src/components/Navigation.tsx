'use client';

import { useState, useEffect } from 'react';
import { Menu, X, Search } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { name: 'Projects', href: '/projects' },
    { name: 'Practice', href: '/practice' },
    { name: 'People', href: '/people' },
    { name: 'Media', href: '/media' },
    { name: 'Events', href: '/events' },
    { name: 'Careers', href: '/careers' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <>
      <nav className={`fixed top-0 left-0 w-full z-[100] flex justify-between items-center px-6 md:px-12 py-8 transition-all duration-500 ${
        scrolled ? 'bg-white/80 backdrop-blur-md py-4 text-black' : 'mix-blend-difference text-white'
      }`}>
        <div className="flex items-center gap-4 cursor-pointer group" onClick={() => setIsOpen(true)}>
          <Menu className="w-6 h-6 transition-transform group-hover:scale-110" />
        </div>
        
        <Link href="/" className="flex items-center cursor-pointer hover:opacity-70 transition-opacity">
          <div className="text-xl md:text-2xl tracking-[0.2em] uppercase flex items-center">
            <span className="font-light">Studio</span>
            <span className="font-extrabold">SAHAJ</span>
          </div>
        </Link>
        
        <div className="cursor-pointer group">
          <Search className="w-6 h-6 transition-transform group-hover:scale-110" />
        </div>
      </nav>

      {/* Fullscreen Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-[110] bg-white flex flex-col items-center justify-center"
          >
            <button 
              onClick={() => setIsOpen(false)}
              className="absolute top-8 left-6 md:left-12 group p-2"
            >
              <X className="w-8 h-8 text-black transition-transform group-hover:rotate-90 duration-500" />
            </button>

            <div className="flex flex-col items-center gap-8 md:gap-12">
              {menuItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + index * 0.1, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                >
                  <Link 
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="text-4xl md:text-6xl font-light uppercase tracking-[0.2em] relative group hover:italic transition-all duration-300"
                  >
                    {item.name}
                    <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-black group-hover:w-full transition-all duration-500" />
                  </Link>
                </motion.div>
              ))}
            </div>

            <div className="absolute bottom-12 text-[10px] uppercase tracking-[0.4em] text-neutral-400">
               Boston  |  Jerusalem  |  Singapore  |  Shanghai
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
