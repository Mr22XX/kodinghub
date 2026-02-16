"use client";
import React, { useState, memo } from 'react'; 
import { Plus } from 'lucide-react'; 

const faqs = [
  { q: "Berapa lama pengerjaan joki tugas?", a: "Tergantung tingkat kesulitan, biasanya 1-3 hari kerja. Kami juga melayani paket express 24 jam untuk kebutuhan mendesak." },
  { q: "Apakah ada garansi jika kode error?", a: "Tentu! Kami memberikan garansi revisi gratis sampai kode berjalan sesuai spesifikasi tugas Anda. Kepuasan klien adalah prioritas kami." },
  { q: "Bagaimana sistem belajarnya?", a: "Belajar dilakukan secara remote via Google Meet/Zoom dengan kurikulum praktis yang menyesuaikan tingkat kemampuan Anda saat ini." }
];

function FAQ() {
  const [activeFaq, setActiveFaq] = useState(null);

  return (
    <section id="faq" className="py-24 px-6 bg-[#080808] relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[300px] bg-orange-500/5 blur-[120px] rounded-full -z-10" />

      <div className="max-w-3xl mx-auto relative z-10">
        <header className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-3">
            <span className="h-px w-8 bg-orange-500" />
            <span className="text-orange-500 font-black text-[10px] tracking-[0.4em] uppercase">Support</span>
            <span className="h-px w-8 bg-orange-500" />
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-white italic tracking-tighter uppercase">
            FAQ<span className="text-orange-500">.</span>
          </h2>
        </header>

        <div className="space-y-4">
          {faqs.map((faq, i) => {
            const isOpen = activeFaq === i;
            return (
              <div 
                key={i} 
                className={`group rounded-[24px] border transition-all duration-500 ${
                  isOpen ? 'bg-[#121212] border-orange-500/30 shadow-2xl shadow-orange-500/5' : 'bg-[#0c0c0c] border-white/5 hover:border-white/10'
                }`}
              >
                <button 
                  onClick={() => setActiveFaq(isOpen ? null : i)}
                  className="w-full flex justify-between items-center p-6 md:p-8 text-left outline-none"
                >
                  <span className={`text-base md:text-xl font-black uppercase italic tracking-tight transition-colors duration-300 ${
                    isOpen ? 'text-orange-500' : 'text-white group-hover:text-orange-500'
                  }`}>
                    {faq.q}
                  </span>
                  
                  <div className={`shrink-0 ml-4 p-2 rounded-xl transition-all duration-500 ${
                    isOpen ? 'bg-orange-500 text-black rotate-45' : 'bg-white/5 text-gray-500 rotate-0'
                  }`}>
                    <Plus size={20} strokeWidth={3} />
                  </div>
                </button>
                
                {/* CSS Grid Animation (Smoother than Framer Motion height: auto) */}
                <div className={`grid transition-all duration-500 ease-in-out overflow-hidden ${
                  isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                }`}>
                  <div className="min-h-0">
                    <div className="px-6 md:px-8 pb-8 text-gray-400 text-sm md:text-base leading-relaxed font-medium border-t border-white/5 pt-4">
                      {faq.a}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer FAQ */}
        <div className="mt-16 text-center">
          <p className="text-gray-500 text-xs font-bold uppercase tracking-widest mb-6">Punya pertanyaan lain?</p>
          <a 
            href="https://wa.me/6281377845302"
            className="inline-flex items-center gap-3 bg-white text-black px-8 py-4 rounded-2xl font-black text-xs uppercase italic hover:bg-orange-500 transition-colors active:scale-95"
          >
            Hubungi Admin via WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}

export default memo(FAQ);