"use client";
import React, { memo } from 'react';
import { ArrowRight, MessageCircle } from 'lucide-react';

const stats = [
  { label: "Projek Selesai", value: "10+" },
  { label: "Siswa Aktif", value: "50+" },
  { label: "Rating", value: "4.9/5" },
  { label: "Baris Kode", value: "1M+" },
];

function Hero() {
  return (
    <section className="relative pt-36 md:pt-48 pb-24 md:pb-32 px-6 overflow-hidden bg-[#080808]">
      {/* Background Glow - Low performance impact */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[800px] h-[400px] bg-orange-600/10 blur-[120px] rounded-full -z-10 pointer-events-none" />
      
      <div className="max-w-6xl mx-auto flex flex-col items-center text-center">
        {/* Status Badge */}
        <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full mb-8 backdrop-contain">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute h-full w-full rounded-full bg-orange-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
          </span>
          <span className="text-[10px] font-black tracking-[0.2em] text-gray-400 uppercase">Available for New Projects</span>
        </div>
        
        {/* Headline */}
        <h1 className="text-5xl md:text-8xl font-black mb-8 leading-[0.95] tracking-tighter text-white uppercase italic">
          Koding <span className="text-orange-500 not-italic">Cepat</span><br className="hidden md:block" />
          Tanpa Batas<span className="text-orange-500">.</span>
        </h1>
        
        <p className="text-gray-400 text-sm md:text-xl max-w-2xl mb-12 leading-relaxed font-medium uppercase tracking-tight opacity-80">
          Solusi IT End-to-End: Jasa Web, Joki Tugas IT Bergaransi, dan Mentoring Private dari Praktisi.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mb-20 w-full sm:w-auto">
          {/* Button 1: Scroll to Services */}
          <button 
            onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
            className="group relative px-10 py-5 bg-orange-500 rounded-2xl overflow-hidden transition-all duration-300 active:scale-95 shadow-[0_20px_40px_rgba(249,115,22,0.15)]"
          >
            <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            <span className="relative z-10 text-black font-black text-xs md:text-sm uppercase tracking-widest flex items-center justify-center gap-3">
              Eksplor Layanan <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </span>
          </button>

          {/* Button 2: WhatsApp Link */}
          <a 
            href="https://wa.me/6281377845302?text=Halo%20KodingHub,%20saya%20ingin%20konsultasi%20mengenai%20projek/tugas"
            target="_blank"
            rel="noopener noreferrer"
            className="group px-10 py-5 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center transition-all duration-300 hover:bg-white/10 hover:border-orange-500/50 active:scale-95"
          >
            <span className="text-white font-black text-xs md:text-sm uppercase tracking-widest flex items-center gap-3 italic">
              Konsultasi Gratis <MessageCircle size={18} className="text-orange-500 group-hover:rotate-12 transition-transform" />
            </span>
          </a>
        </div>

        {/* Stats Section */}
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

export default memo(Hero);