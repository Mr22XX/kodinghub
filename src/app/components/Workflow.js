"use client";
import React from 'react';
import { motion } from 'framer-motion';

const workflows = [
  { title: "Konsultasi", desc: "Diskusikan kebutuhan proyek atau tugas kodingmu secara mendetail via chat atau meeting." },
  { title: "Pengerjaan", desc: "Tim ahli kami mulai membangun sistem atau mengerjakan tugas dengan standar clean code." },
  { title: "Review & Revisi", desc: "Kamu mengecek hasilnya. Kami berikan garansi revisi jika ada yang belum sesuai." },
  { title: "Serah Terima", desc: "Dapatkan file source code lengkap beserta dokumentasi dan penjelasan." },
];

export default function Workflow() {
  return (
    <section id="workflow" className="py-24 md:py-32 px-6 bg-[#080808]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 md:mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-black uppercase italic tracking-tighter text-white"
          >
            Cara Kerja <span className="text-orange-500 text-6xl md:text-8xl block md:inline opacity-20 md:opacity-100">Kami</span>
          </motion.h2>
          <div className="h-1.5 w-12 bg-orange-500 mx-auto mt-6 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-y-16 gap-x-12 relative">
          {/* Garis Penghubung (Hanya muncul di Desktop) */}
          <div className="hidden md:block absolute top-12 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent -z-10" />

          {workflows.map((flow, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative group text-center md:text-left"
            >
              {/* Nomor Langkah */}
              <div className="text-7xl md:text-8xl font-black text-white/[0.03] absolute -top-12 md:-top-16 left-1/2 md:left-0 -translate-x-1/2 md:translate-x-0 group-hover:text-orange-500/10 transition-colors duration-500 pointer-events-none">
                0{i + 1}
              </div>

              {/* Icon/Dot Indicator */}
              <div className="w-10 h-10 rounded-2xl bg-[#121212] border border-white/10 flex items-center justify-center mb-6 mx-auto md:mx-0 relative z-10 group-hover:border-orange-500/50 transition-colors shadow-xl">
                <div className="w-2 h-2 rounded-full bg-orange-500 group-hover:scale-150 transition-transform shadow-[0_0_10px_rgba(249,115,22,0.5)]"></div>
              </div>

              <h4 className="text-xl font-bold mb-3 text-white uppercase tracking-tight relative z-10 group-hover:text-orange-500 transition-colors italic">
                {flow.title}
              </h4>
              <p className="text-gray-500 text-sm leading-relaxed font-medium md:max-w-[200px]">
                {flow.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}