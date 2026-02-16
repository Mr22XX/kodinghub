"use client";
import React, { useState } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: 'Home', href: '#' },
    { name: 'Services', href: '#services' },
    { name: 'Tutors', href: '#tutors' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <nav className="fixed w-full z-[100] px-6 py-6">
      <div className="max-w-7xl mx-auto flex justify-between items-center bg-black/50 backdrop-blur-xl border border-white/10 p-4 rounded-3xl">
        
        {/* Logo */}
        <div className="text-2xl font-black text-white italic tracking-tighter">
          KODING<span className="text-orange-500">HUB.ID</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 items-center">
          {menuItems.map((item) => (
            <a 
              key={item.name} 
              href={item.href} 
              className="text-xs font-bold uppercase tracking-widest text-gray-400 hover:text-orange-500 transition-colors"
            >
              {item.name}
            </a>
          ))}
          <button className="bg-orange-500 text-black px-6 py-2 rounded-full font-bold text-xs uppercase hover:bg-orange-600 transition-all">
            Hubungi Kami
          </button>
        </div>

        {/* Mobile Toggle Button */}
        <button 
          className="md:hidden text-white p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-28 left-6 right-6 bg-[#121212] border border-white/10 rounded-[32px] p-8 md:hidden shadow-2xl"
          >
            <div className="flex flex-col gap-6">
              {menuItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="text-2xl font-black italic text-white uppercase tracking-tighter hover:text-orange-500 flex justify-between items-center group"
                >
                  {item.name}
                  <ArrowRight className="opacity-0 group-hover:opacity-100 transition-all text-orange-500" />
                </a>
              ))}
              <hr className="border-white/5 my-2" />
              <button className="bg-orange-500 text-black w-full py-4 rounded-2xl font-black uppercase text-sm italic shadow-lg shadow-orange-500/20">
                Hubungi Kami
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}