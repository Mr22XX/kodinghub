"use client";
import React from 'react';
// Load langsung (bukan dynamic)
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Workflow from './components/Workflow';
import Tutors from './components/Tutors';
import FAQ from './components/Faq';
import Testi from './components/Testi';
import Footer from './components/Footer';

import { MessageCircle } from 'lucide-react';

export default function KodingHubDetail() {
  return (
    // 'selection:bg-orange-500/30' bagus, tapi tambahkan 'scroll-smooth' 
    // agar navigasi antar section tidak kaku
    <main className="min-h-screen bg-[#080808] text-white selection:bg-orange-500/30 overflow-x-hidden scroll-smooth">
      <Navbar />
      
      {/* Wrapping semua komponen bawah dengan 'isolate' 
         supaya layer GPU per section tidak tabrakan
      */}
      <div className="flex flex-col">
        <Hero />
        
        {/* Gunakan 'content-visibility: auto' di level CSS global/inline 
           Ini rahasia agar muat langsung tapi browser tidak render elemen 
           yang belum terlihat di layar (menghemat CPU secara drastis).
        */}
        <div className="[&>section]:content-visibility-auto [&>section]:contain-intrinsic-size-[1px_500px]">
          <Services />
          <Workflow />
          <Tutors />
          <FAQ />
          <Testi />
        </div>
      </div>
      
      <Footer />

      {/* Floating WA - Versi CSS Murni (Lebih cepat dari motion.a) */}
      <a 
        href="https://wa.me/6281377845302"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-[60] bg-green-500 p-4 rounded-full shadow-lg transition-transform hover:scale-110 active:scale-95 group"
      >
        <MessageCircle className="w-6 h-6 md:w-8 md:h-8 text-white fill-current" />
        <span className="absolute -top-1 -right-1 flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-orange-500"></span>
        </span>
      </a>
    </main>
  );
}