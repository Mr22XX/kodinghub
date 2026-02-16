"use client";
import React, { useState } from 'react'; 
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react'; 

const faqs = [
  { q: "Berapa lama pengerjaan joki tugas?", a: "Tergantung tingkat kesulitan, biasanya 1-3 hari kerja. Kami juga melayani paket express 24 jam untuk kebutuhan mendesak." },
  { q: "Apakah ada garansi jika kode error?", a: "Tentu! Kami memberikan garansi revisi gratis sampai kode berjalan sesuai spesifikasi tugas Anda. Kepuasan klien adalah prioritas kami." },
  { q: "Bagaimana sistem belajarnya?", a: "Belajar dilakukan secara remote via Google Meet/Zoom dengan kurikulum praktis yang menyesuaikan tingkat kemampuan Anda saat ini." }
];

export default function FAQ() {
  const [activeFaq, setActiveFaq] = useState(null);

  return (
    <section id="faq" className="py-20 md:py-32 px-6 max-w-4xl mx-auto bg-[#080808]">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12 md:mb-16"
      >
        <h2 className="text-3xl md:text-5xl font-black text-white italic tracking-tighter uppercase">
          Pertanyaan <span className="text-orange-500">Umum</span>
        </h2>
        <div className="h-1 w-12 bg-orange-500 mx-auto mt-4 rounded-full"></div>
      </motion.div>

      <div className="space-y-2">
        {faqs.map((faq, i) => (
          <div key={i} className="border-b border-white/5 pb-2">
            <button 
              onClick={() => setActiveFaq(activeFaq === i ? null : i)}
              className="w-full flex justify-between items-center py-5 text-left text-white group transition-all"
            >
              <span className={`text-base md:text-lg font-bold tracking-tight transition-colors duration-300 ${activeFaq === i ? 'text-orange-500' : 'text-gray-200 group-hover:text-white'}`}>
                {faq.q}
              </span>
              
              <div className={`p-2 rounded-lg transition-all duration-300 ${activeFaq === i ? 'bg-orange-500 text-black rotate-0' : 'bg-white/5 text-gray-500 rotate-90'}`}>
                {activeFaq === i ? <Minus size={18} strokeWidth={3} /> : <Plus size={18} strokeWidth={3} />}
              </div>
            </button>
            
            <AnimatePresence initial={false}>
              {activeFaq === i && (
                <motion.div 
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ 
                    height: "auto", 
                    opacity: 1,
                    transition: { height: { duration: 0.3 }, opacity: { duration: 0.2, delay: 0.1 } }
                  }}
                  exit={{ height: 0, opacity: 0 }}
                  className="overflow-hidden"
                >
                  <div className="pb-6 pr-10 text-gray-400 text-sm md:text-base leading-relaxed font-medium">
                    {faq.a}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
}