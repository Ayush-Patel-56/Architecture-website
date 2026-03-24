'use client';

import { useState, useEffect } from 'react';
import { Menu, X, Search } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

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

  const searchData = [
    { title: 'Cultural Center', cat: 'Project', href: '/projects' },
    { title: 'Residential Tower', cat: 'Project', href: '/projects' },
    { title: 'Institutional Hub', cat: 'Project', href: '/projects' },
    { title: 'Marina Bay Sands', cat: 'Project', href: '/projects' },
    { title: 'Firm Philosophy', cat: 'Practice', href: '/practice' },
    { title: 'Global Topology', cat: 'Practice', href: '/practice' },
    { title: 'Moshe Safdie', cat: 'People', href: '/people' },
    { title: 'Ahmedabad Studio', cat: 'Contact', href: '/contact' },
    { title: 'Singapore Studio', cat: 'Contact', href: '/contact' },
    { title: 'Careers', cat: 'Links', href: '/careers' },
  ];

  const filteredResults = searchQuery.trim() === '' 
    ? [] 
    : searchData.filter(item => 
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.cat.toLowerCase().includes(searchQuery.toLowerCase())
      );

  return (
    <>
      <nav className={`fixed top-0 left-0 w-full z-[100] flex justify-between items-center px-6 md:px-12 py-8 transition-all duration-500 ${
        scrolled ? 'bg-white/80 backdrop-blur-md py-4 text-black border-b border-black/5' : 'mix-blend-difference text-white'
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
        
        <div className="cursor-pointer group" onClick={() => setIsSearchOpen(true)}>
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
            className="fixed inset-0 z-[110] bg-white flex flex-col items-center justify-center p-6"
          >
            <button 
              onClick={() => setIsOpen(false)}
              className="absolute top-8 left-6 md:left-12 group p-2"
            >
              <X className="w-8 h-8 text-black transition-transform group-hover:rotate-90 duration-500" />
            </button>

            <div className="flex flex-col items-center gap-6 md:gap-10">
              {menuItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + index * 0.05, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
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
               Ahmedabad  |  Boston  |  Singapore  |  Zurich  |  Shanghai
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Search Overlay */}
      <AnimatePresence>
        {isSearchOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[120] bg-white flex flex-col items-center p-8 md:p-20 overflow-y-auto"
          >
            <button 
              onClick={() => {
                setIsSearchOpen(false);
                setSearchQuery('');
              }}
              className="absolute top-8 right-6 md:right-12 group p-2"
            >
              <X className="w-8 h-8 text-black transition-transform group-hover:rotate-90 duration-500" />
            </button>

            <div className="w-full max-w-4xl pt-20">
              <div className="flex flex-col gap-12">
                 <div className="space-y-4">
                    <p className="text-[10px] uppercase tracking-[0.5em] text-neutral-400 font-bold">Search the Studio</p>
                    <input 
                      autoFocus
                      type="text" 
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder="Projects, People, Practice..."
                      className="w-full text-4xl md:text-7xl font-light uppercase tracking-tighter bg-transparent border-b border-black/10 focus:border-black outline-none pb-8 transition-all"
                    />
                 </div>

                 <div className="space-y-8">
                    {filteredResults.length > 0 ? (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
                        {filteredResults.map((result, i) => (
                           <motion.div 
                            key={`${result.title}-${i}`}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.05 }}
                           >
                             <Link 
                              href={result.href}
                              onClick={() => {
                                setIsSearchOpen(false);
                                setSearchQuery('');
                              }}
                              className="group flex flex-col gap-2 border-b border-black/5 pb-4 hover:border-black transition-all"
                             >
                                <span className="text-[9px] uppercase tracking-[0.3em] text-neutral-400 group-hover:text-black font-bold">{result.cat}</span>
                                <span className="text-2xl font-light uppercase tracking-widest">{result.title}</span>
                             </Link>
                           </motion.div>
                        ))}
                      </div>
                    ) : (
                      searchQuery.trim() !== '' && (
                        <p className="text-xl font-light text-neutral-400 uppercase tracking-widest italic">No matching results found.</p>
                      )
                    )}
                 </div>

                 <div className="pt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
                    <div className="space-y-4">
                       <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-black border-b border-black w-fit pb-1">Projects</p>
                       <div className="flex flex-col gap-2 text-[11px] uppercase tracking-widest text-neutral-400">
                          <p onClick={() => setSearchQuery('Cultural')} className="cursor-pointer hover:text-black">Cultural</p>
                          <p onClick={() => setSearchQuery('Residential')} className="cursor-pointer hover:text-black">Residential</p>
                          <p onClick={() => setSearchQuery('Mixed-Use')} className="cursor-pointer hover:text-black">Mixed-Use</p>
                       </div>
                    </div>
                    <div className="space-y-4">
                       <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-black border-b border-black w-fit pb-1">Studios</p>
                       <div className="flex flex-col gap-2 text-[11px] uppercase tracking-widest text-neutral-400">
                          <p onClick={() => setSearchQuery('Ahmedabad')} className="cursor-pointer hover:text-black">Ahmedabad</p>
                          <p onClick={() => setSearchQuery('Singapore')} className="cursor-pointer hover:text-black">Singapore</p>
                          <p onClick={() => setSearchQuery('Zurich')} className="cursor-pointer hover:text-black">Zurich</p>
                       </div>
                    </div>
                 </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
