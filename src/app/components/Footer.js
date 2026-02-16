"use client";
import React from 'react';
import { Instagram, MessageCircle, ArrowUpRight } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative py-16 md:py-24 px-6 border-t border-white/5 bg-[#080808] overflow-hidden">
      {/* 1. Optimasi Efek Glow - Gunakan pointer-events-none */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] md:w-[600px] h-[150px] bg-orange-500/10 blur-[100px] rounded-full -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16 mb-16 md:mb-24">
          
          {/* Brand Section */}
          <div className="md:col-span-2 space-y-6 md:space-y-8">
            <div>
              <button 
                onClick={scrollToTop}
                className="text-3xl md:text-4xl font-black text-white italic tracking-tighter mb-4 hover:text-orange-500 transition-colors"
              >
                KODING<span className="text-orange-500">HUB.ID</span>
              </button>
              <p className="text-gray-500 text-[11px] md:text-sm leading-relaxed max-w-xs font-medium uppercase tracking-tight">
                Membangun ekosistem digital yang menghubungkan ide kreatif dengan eksekusi kode yang presisi.
              </p>
            </div>
            
            <div className="flex gap-4">
              {[
                { icon: <Instagram size={20} />, link: "https://instagram.com/kodinghub.id" },
                { icon: <MessageCircle size={20} />, link: "https://wa.me/6281377845302" }
              ].map((social, i) => (
                <a 
                  key={i} 
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-orange-500 hover:border-orange-500/50 transition-all duration-300"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Navigasi Section */}
          <div className="space-y-6">
            <h5 className="text-white text-[10px] font-black uppercase tracking-[0.3em] opacity-50">Navigasi</h5>
            <ul className="grid grid-cols-2 md:grid-cols-1 gap-4">
              {['Home', 'Services', 'Tutors', 'FAQ'].map((item) => (
                <li key={item}>
                  <a 
                    href={item === 'Home' ? '#' : `#${item.toLowerCase()}`} 
                    onClick={item === 'Home' ? (e) => { e.preventDefault(); scrollToTop(); } : undefined}
                    className="text-gray-500 hover:text-white text-xs md:text-sm font-bold uppercase tracking-tighter transition-colors flex items-center group w-fit"
                  >
                    {item} <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all ml-1" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
          <div className="text-gray-600 text-[9px] md:text-[10px] tracking-[0.3em] uppercase font-black">
            © {currentYear} KODING HUB — CRAFTED WITH PASSION
          </div>
          <div className="flex gap-8 text-[9px] md:text-[10px] tracking-[0.2em] uppercase font-bold text-gray-600">
            <span className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.5)]" /> 
              System Operational
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}