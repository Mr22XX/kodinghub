"use client";
import React, { Suspense } from 'react';
import dynamic from 'next/dynamic';

// 1. Komponen 'Above the Fold' (dimuat langsung agar LCP cepat)
import Navbar from './components/Navbar';
import Hero from './components/Hero';

// 2. Dynamic Imports untuk komponen bawah (Lazy Loading)
// Ini akan memecah file JS menjadi potongan kecil yang hanya dimuat saat di-scroll
const Services = dynamic(() => import('./components/Services'), { ssr: true });
const Workflow = dynamic(() => import('./components/Workflow'), { ssr: true });
const Tutors = dynamic(() => import('./components/Tutors'), { ssr: false });
const FAQ = dynamic(() => import('./components/Faq'), { ssr: false });
const Testi = dynamic(() => import('./components/Testi'), { ssr: false });
const Footer = dynamic(() => import('./components/Footer'), { ssr: true });

// Komponen ikon dimuat secara dinamis atau pastikan library lucide-react tidak membengkak
import { MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export default function KodingHubDetail() {
  // Logic activeFaq dihapus dari sini karena sudah ada di dalam komponen FAQ masing-masing
  // Hal ini mencegah seluruh halaman render ulang saat satu FAQ dibuka.

  return (
    <main className="min-h-screen bg-[#080808] text-white selection:bg-orange-500/30 overflow-x-hidden">
      <Navbar />
      
      {/* Hero dimuat langsung */}
      <Hero />

      {/* Gunakan wrapper dengan content-visibility untuk performa scroll maksimal */}
      <div className="space-y-0 [&>section]:content-visibility-auto [&>section]:contain-intrinsic-size-[1px_500px]">
        <section id="services">
          <Suspense fallback={<div className="h-96 bg-[#080808]" />}>
            <Services />
          </Suspense>
        </section>

        <section id="workflow">
          <Workflow />
        </section>

        <section id="tutors">
          <Tutors />
        </section>

        <section id="faq">
          <FAQ />
        </section>

        <section id="testi">
          <Testi />
        </section>
      </div>
      
      <Footer />

      {/* Floating WA - Optimized Animation */}
      <motion.a 
        href="https://wa.me/6281377845302"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-[60] bg-green-500 p-3 md:p-4 rounded-full shadow-[0_10px_40px_rgba(34,197,94,0.4)]"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <MessageCircle className="w-6 h-6 md:w-8 md:h-8 text-white fill-current" />
        <span className="absolute -top-1 -right-1 flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-orange-500"></span>
        </span>
      </motion.a>
    </main>
  );
}