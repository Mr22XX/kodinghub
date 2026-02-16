"use client";
import React from 'react';
import { Instagram, Linkedin, MessageCircle, Github, ArrowUpRight } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  // Fungsi untuk scroll ke atas saat logo diklik
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative py-24 px-6 border-t border-white/5 bg-[#080808] overflow-hidden">
      {/* Efek Cahaya Halus */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-orange-500/5 blur-[120px] rounded-full -z-10" />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-24">
          
          {/* Brand Section */}
          <div className="md:col-span-2 space-y-8">
            <div>
              {/* Logo dibuat bisa diklik untuk scroll ke atas */}
              <button 
                onClick={scrollToTop}
                className="text-4xl font-black text-white italic tracking-tighter mb-4 hover:opacity-80 transition-opacity"
              >
                KODING<span className="text-orange-500">HUB.</span>
              </button>
              <p className="text-gray-500 text-sm leading-relaxed max-w-sm font-medium uppercase tracking-tight">
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
                  className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-orange-500 hover:border-orange-500/50 transition-all duration-300"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links - Pastikan ID di section lain sesuai (id="services", id="faq", dll) */}
          <div className="space-y-6">
            <h5 className="text-white text-xs font-black uppercase tracking-[0.2em]">Navigasi</h5>
            <ul className="space-y-4">
              {['Home', 'Services', 'Tutors', 'FAQ'].map((item) => (
                <li key={item}>
                  <a 
                    href={item === 'Home' ? '#' : `#${item.toLowerCase()}`} 
                    onClick={item === 'Home' ? (e) => { e.preventDefault(); scrollToTop(); } : undefined}
                    className="text-gray-500 hover:text-white text-sm font-bold uppercase tracking-tighter transition-colors flex items-center group"
                  >
                    {item} <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-gray-600 text-[10px] tracking-[0.3em] uppercase font-black">
            © {currentYear} KODING HUB — CRAFTED WITH PASSION
          </div>
          <div className="flex gap-8 text-[10px] tracking-[0.2em] uppercase font-bold text-gray-600">
            <span className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" /> 
              System Operational
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}