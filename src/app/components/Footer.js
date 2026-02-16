"use client";
import React, { memo } from 'react';
import { Instagram, MessageCircle, ArrowUpRight } from 'lucide-react';

function Footer() {
  const currentYear = new Date().getFullYear();

  // Optimasi: Gunakan window.scrollTo murni tanpa library tambahan
  const scrollToTop = (e) => {
    e?.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    // 'contain-paint' sangat krusial di footer agar browser tidak me-render elemen di atasnya saat scroll ke bawah
    <footer className="relative py-16 md:py-24 px-6 border-t border-white/5 bg-[#050505] overflow-hidden contain-paint isolate">
      
      {/* 1. Background Glow - Statis (Hapus blur jika terasa lag di HP tua) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] md:w-[800px] h-[200px] bg-orange-500/[0.03] rounded-full -z-10 pointer-events-none" style={{ filter: 'blur(100px)' }} />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16 mb-20">
          
          {/* Brand Section */}
          <div className="md:col-span-7 space-y-8">
            <div className="space-y-4">
              <button 
                onClick={scrollToTop}
                className="text-3xl md:text-5xl font-black text-white italic tracking-tighter hover:text-orange-500 transition-colors duration-300 block text-left uppercase antialiased"
              >
                KODING<span className="text-orange-500">HUB.</span>
              </button>
              <p className="text-gray-500 text-[11px] md:text-sm leading-relaxed max-w-sm font-bold uppercase tracking-tight opacity-70">
                Membangun ekosistem digital yang menghubungkan ide kreatif dengan eksekusi kode yang presisi dan berstandar industri.
              </p>
            </div>
            
            <div className="flex gap-4">
              {[
                { icon: <Instagram size={18} />, link: "https://instagram.com/kodinghub.id", label: "Instagram" },
                { icon: <MessageCircle size={18} />, link: "https://wa.me/6281377845302", label: "WhatsApp" }
              ].map((social, i) => (
                <a 
                  key={i} 
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-orange-500 hover:border-orange-500/30 transition-all duration-300 will-change-transform active:scale-95"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links Section */}
          <div className="md:col-span-5">
            <div className="space-y-6">
              <h5 className="text-orange-500 text-[10px] font-black uppercase tracking-[0.4em]">Sitemap</h5>
              <ul className="space-y-4">
                {['Home', 'Services', 'Tutors', 'FAQ'].map((item) => (
                  <li key={item}>
                    <a 
                      href={item === 'Home' ? '#' : `#${item.toLowerCase()}`} 
                      onClick={item === 'Home' ? scrollToTop : undefined}
                      className="text-gray-500 hover:text-white text-[10px] font-black uppercase tracking-[0.2em] transition-colors flex items-center group w-fit italic"
                    >
                      {item} 
                      <ArrowUpRight size={14} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300 text-orange-500" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-gray-600 text-[9px] tracking-[0.4em] uppercase font-black italic">
            © {currentYear} KODING HUB — HIGH PERFORMANCE EXECUTION
          </div>
          
          <div className="flex items-center gap-6">
            <div className="px-4 py-2 rounded-full border border-white/5 bg-white/[0.01] flex items-center gap-3">
              <div className="relative flex h-1.5 w-1.5">
                {/* 2. Optimasi Animasi Ping: Hanya berjalan jika elemen terlihat (browser default behavior) */}
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-green-500"></span>
              </div>
              <span className="text-[9px] tracking-[0.2em] uppercase font-black text-gray-500">
                System Operational
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default memo(Footer);