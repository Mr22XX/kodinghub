"use client";
import React, { useState, useEffect } from 'react';
import { MessageCircle } from 'lucide-react';

// Import Komponen (Pastikan path file sesuai dengan struktur folder kamu)
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Workflow from './components/Workflow';
import Tutors from './components/Tutors';
import FAQ from './components/Faq';
import Testi from './components/Testi';
import Footer from './components/Footer';

/**
 * 1. REUSABLE SKELETON COMPONENTS
 * Didesain minimalis agar tidak menambah beban bundle JS
 */
const SkeletonBase = ({ className }) => (
  <div className={`animate-pulse bg-white/5 rounded-2xl ${className}`} />
);

const SectionSkeleton = () => (
  <div className="max-w-7xl mx-auto px-6 py-24 space-y-12">
    <div className="space-y-4">
      <SkeletonBase className="w-32 h-2 md:w-48" />
      <SkeletonBase className="w-full max-w-xl h-10 md:h-16" />
    </div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {[1, 2, 3].map((i) => (
        <div key={i} className="p-8 rounded-[32px] border border-white/5 bg-[#0c0c0c] space-y-5">
          <SkeletonBase className="w-12 h-12 rounded-xl" />
          <SkeletonBase className="w-3/4 h-6" />
          <SkeletonBase className="w-full h-24" />
        </div>
      ))}
    </div>
  </div>
);

export default function KodingHubDetail() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    // Memberi sedikit jeda agar transisi terasa halus setelah hydration
    const timer = setTimeout(() => setIsMounted(true), 10);
    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="min-h-screen bg-[#080808] text-white selection:bg-orange-500/30 overflow-x-hidden scroll-smooth antialiased">
      <Navbar />
      
      <div className="flex flex-col">
        {/* 2. HERO SECTION
            Dimuat langsung tanpa kondisi agar LCP (Largest Contentful Paint) cepat.
        */}
        <Hero />
        
        {/* 3. CONTENT WRAPPER
           Menggunakan 'content-visibility' agar browser hanya me-render section 
           yang masuk ke area viewport (sangat menghemat CPU).
        */}
        <div className="relative [&>section]:content-visibility-auto [&>section]:contain-intrinsic-size-[1px_500px]">
          {!isMounted ? (
            /* TAMPILAN SKELETON SAAT INITIAL LOAD */
            <div className="opacity-50">
              <SectionSkeleton />
              <SectionSkeleton />
            </div>
          ) : (
            /* TAMPILAN KONTEN ASLI */
            <div className="animate-[fadeIn_0.6s_ease-out]">
              <Services />
              <Workflow />
              <Tutors />
              <FAQ />
              <Testi />
            </div>
          )}
        </div>
      </div>
      
      <Footer />

      {/* 4. FLOATING WHATSAPP 
          Versi optimasi tanpa Framer Motion untuk startup lebih cepat.
      */}
      <a 
        href="https://wa.me/6281377845302"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-[60] bg-green-500 p-4 rounded-full shadow-[0_10px_40px_rgba(34,197,94,0.3)] transition-all duration-300 hover:scale-110 hover:-translate-y-1 active:scale-95 group"
      >
        <MessageCircle className="w-6 h-6 md:w-8 md:h-8 text-white fill-current" />
        <span className="absolute -top-1 -right-1 flex h-4 w-4">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
          <span className="relative inline-flex rounded-full h-4 w-4 bg-orange-500"></span>
        </span>
      </a>

      {/* 5. GLOBAL ANIMATION STYLES */}
      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }

        /* Optimalisasi scrollbar agar selaras dengan desain dark */
        ::-webkit-scrollbar {
          width: 8px;
        }
        ::-webkit-scrollbar-track {
          background: #080808;
        }
        ::-webkit-scrollbar-thumb {
          background: #222;
          border-radius: 10px;
        }
        ::-webkit-scrollbar-thumb:hover {
          background: #f97316;
        }
      `}</style>
    </main>
  );
}