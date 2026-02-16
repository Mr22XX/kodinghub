"use client";
import React, { useState } from 'react'; 
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react'; 

const faqs = [
  { q: "Berapa lama pengerjaan joki tugas?", a: "Tergantung tingkat kesulitan, biasanya 1-3 hari kerja. Kami juga melayani express 24 jam." },
  { q: "Apakah ada garansi jika kode error?", a: "Tentu! Kami memberikan garansi revisi gratis sampai kode berjalan sesuai spesifikasi tugas Anda." },
  { q: "Bagaimana sistem belajarnya?", a: "Belajar dilakukan secara remote via Google Meet/Zoom dengan kurikulum yang menyesuaikan kebutuhan Anda." }
];

export default function FAQ() {
  const [activeFaq, setActiveFaq] = useState(null);

  return (
    <section id="faq" className="py-32 px-6 max-w-4xl mx-auto">
      <h2 className="text-3xl font-black mb-16 text-center text-white italic tracking-widest uppercase">
        Pertanyaan Umum
      </h2>
      <div className="space-y-4">
        {faqs.map((faq, i) => (
          <div key={i} className="border-b border-white/10 pb-4">
            <button 
              onClick={() => setActiveFaq(activeFaq === i ? null : i)}
              className="w-full flex justify-between items-center py-4 text-left text-white hover:text-orange-500 transition-colors"
            >
              <span className="text-xl font-bold tracking-tight">{faq.q}</span>
              {/* Ikon Plus/Minus akan berubah tergantung status activeFaq */}
              {activeFaq === i ? <Minus className="text-orange-500" /> : <Plus />}
            </button>
            
            <AnimatePresence>
              {activeFaq === i && (
                <motion.div 
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="overflow-hidden text-gray-400 leading-relaxed py-2"
                >
                  {faq.a}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
}