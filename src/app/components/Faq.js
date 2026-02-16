"use client";
import React, { useState, memo } from 'react'; 
import { Plus } from 'lucide-react'; 

const faqs = [
  { q: "Berapa lama pengerjaan joki tugas?", a: "Tergantung tingkat kesulitan, biasanya 1-3 hari kerja. Kami juga melayani paket express 24 jam untuk kebutuhan mendesak." },
  { q: "Apakah ada garansi jika kode error?", a: "Tentu! Kami memberikan garansi revisi gratis sampai kode berjalan sesuai spesifikasi tugas Anda. Kepuasan klien adalah prioritas kami." },
  { q: "Bagaimana sistem belajarnya?", a: "Belajar dilakukan secara remote via Google Meet/Zoom dengan kurikulum praktis yang menyesuaikan tingkat kemampuan Anda saat ini." }
];

// 1. Pecah menjadi komponen kecil (Sub-Component)
// Ini mencegah render ulang FAQ lain saat satu FAQ dibuka
const FAQItem = memo(({ faq, index }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div 
      className={`group rounded-[24px] border transition-colors duration-300 ${
        isOpen ? 'bg-[#121212] border-orange-500/30' : 'bg-[#0c0c0c] border-white/5'
      }`}
      style={{ willChange: 'auto' }} // Menghindari memory leak di Chrome
    >
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center p-6 md:p-8 text-left outline-none cursor-pointer"
        aria-expanded={isOpen}
      >
        <span className={`text-base md:text-xl font-black uppercase italic tracking-tight transition-colors duration-300 ${
          isOpen ? 'text-orange-500' : 'text-white group-hover:text-orange-500'
        }`}>
          {faq.q}
        </span>
        
        <div className={`shrink-0 ml-4 p-2 rounded-xl transition-transform duration-300 ${
          isOpen ? 'bg-orange-500 text-black rotate-45' : 'bg-white/5 text-gray-500 rotate-0'
        }`}>
          <Plus size={20} strokeWidth={3} />
        </div>
      </button>
      
      {/* 2. Optimized Grid Animation - Menggunakan opacity dan transform untuk GPU speed */}
      <div className={`grid transition-all duration-300 ease-out overflow-hidden ${
        isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
      }`}>
        <div className="min-h-0">
          <div className="px-6 md:px-8 pb-8 text-gray-500 text-xs md:text-sm leading-relaxed font-bold uppercase tracking-tight border-t border-white/5 pt-4 opacity-80">
            {faq.a}
          </div>
        </div>
      </div>
    </div>
  );
});

FAQItem.displayName = 'FAQItem';

function FAQ() {
  return (
    <section id="faq" className="py-24 px-6 bg-[#080808] relative overflow-hidden contain-paint">
      {/* Background Decor - Statis tanpa filter kompleks di mobile */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[300px] bg-orange-500/[0.03] rounded-full -z-10" 
           style={{ filter: 'blur(100px)' }} />

      <div className="max-w-3xl mx-auto relative z-10">
        <header className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-3">
            <span className="h-px w-8 bg-orange-500" />
            <span className="text-orange-500 font-black text-[10px] tracking-[0.4em] uppercase">Support</span>
            <span className="h-px w-8 bg-orange-500" />
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-white italic tracking-tighter uppercase leading-none antialiased">
            FAQ<span className="text-orange-500">.</span>
          </h2>
        </header>

        {/* 3. List FAQ - Menggunakan komponen kecil yang sudah di-memo */}
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <FAQItem key={i} faq={faq} index={i} />
          ))}
        </div>

        {/* Footer FAQ - Static & Fast */}
        <div className="mt-16 text-center">
          <p className="text-gray-600 text-[10px] font-black uppercase tracking-[0.3em] mb-6 opacity-60 italic">
            Punya pertanyaan lain?
          </p>
          <a 
            href="https://wa.me/6281377845302"
            className="inline-flex items-center gap-3 bg-white text-black px-10 py-5 rounded-2xl font-black text-[10px] uppercase italic tracking-widest hover:bg-orange-500 transition-all active:scale-95 shadow-xl shadow-white/5"
          >
            Hubungi Admin via WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}

export default memo(FAQ);