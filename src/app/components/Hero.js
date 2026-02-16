"use client";
import React, { memo } from 'react';
import { ArrowRight, MessageCircle } from 'lucide-react';

const stats = [
  { label: "Projek Selesai", value: "100+" },
  { label: "Siswa Aktif", value: "500+" },
  { label: "Rating", value: "4.9/5" },
  { label: "Baris Kode", value: "1M+" },
];

function Hero() {
  return (
    // 'contain-strict' atau 'will-change' membantu browser menyiapkan layer GPU
    <section className="relative pt-36 md:pt-48 pb-24 md:pb-32 px-6 overflow-hidden bg-[#080808] isolate">
      
      {/* 1. Background Glow - Menggunakan CSS murni tanpa blur filter yang berat di mobile */}
      <div 
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[800px] h-[400px] bg-orange-600/10 rounded-full -z-10 pointer-events-none opacity-50"
        style={{ filter: 'blur(120px)', willChange: 'filter' }} 
      />
      
      <div className="max-w-6xl mx-auto flex flex-col items-center text-center">
        
        {/* 2. Status Badge - Animasi CSS Native (Sangat Ringan) */}
        <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full mb-8">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute h-full w-full rounded-full bg-orange-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
          </span>
          <span className="text-[10px] font-black tracking-[0.2em] text-gray-400 uppercase">Available for New Projects</span>
        </div>
        
        {/* 3. Headline - Optimasi font-rendering */}
        <h1 className="text-5xl md:text-8xl font-black mb-8 leading-[0.95] tracking-tighter text-white uppercase italic antialiased">
          Koding <span className="text-orange-500 not-italic">Cepat</span><br className="hidden md:block" />
          Tanpa Batas<span className="text-orange-500">.</span>
        </h1>
        
        <p className="text-gray-400 text-sm md:text-xl max-w-2xl mb-12 leading-relaxed font-medium uppercase tracking-tight opacity-80">
          Solusi IT End-to-End: Jasa Web, Joki Tugas IT Bergaransi, dan Mentoring Private dari Praktisi.
        </p>

        {/* 4. Action Buttons - Tanpa Framer Motion (Hanya CSS Transition) */}
        <div className="flex flex-col sm:flex-row gap-4 mb-20 w-full sm:w-auto">
          <button 
            onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
            className="group relative px-10 py-5 bg-orange-500 rounded-2xl overflow-hidden transition-transform duration-200 active:scale-95"
          >
            {/* Efek kilau menggunakan CSS transform (lebih enteng dari opacity animation) */}
            <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-500 ease-in-out" />
            
            <span className="relative z-10 text-black font-black text-xs md:text-sm uppercase tracking-widest flex items-center justify-center gap-3">
              Eksplor Layanan <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </span>
          </button>

          <a 
            href="https://wa.me/6281377845302"
            target="_blank"
            rel="noopener noreferrer"
            className="group px-10 py-5 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center transition-all duration-200 hover:bg-white/10 active:scale-95"
          >
            <span className="text-white font-black text-xs md:text-sm uppercase tracking-widest flex items-center gap-3 italic">
              Konsultasi Gratis <MessageCircle size={18} className="text-orange-500 group-hover:scale-110 transition-transform" />
            </span>
          </a>
        </div>

        {/* 5. Stats Section - Grid Static (Zero Render Lag) */}
        <div className="w-full max-w-4xl grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-white/5 pt-12">
          {stats.map((s, i) => (
            <div key={i} className="flex flex-col items-center">
              <span className="text-3xl md:text-5xl font-black text-white tracking-tighter mb-1">
                {s.value}
              </span>
              <span className="text-orange-500/60 text-[10px] uppercase tracking-[0.2em] font-black">
                {s.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// React.memo memastikan komponen ini tidak render ulang jika parent component berubah state.
export default memo(Hero);