"use client";
import React, { memo } from 'react';

const workflows = [
  { title: "Konsultasi", desc: "Diskusikan proyek atau tugas kodingmu secara mendetail via chat atau meeting." },
  { title: "Pengerjaan", desc: "Tim ahli kami mulai membangun sistem dengan standar clean code & performa tinggi." },
  { title: "Review & Revisi", desc: "Kamu mengecek hasilnya. Kami berikan garansi revisi sampai benar-benar puas." },
  { title: "Serah Terima", desc: "Dapatkan file source code lengkap beserta dokumentasi dan penjelasan teknis." },
];

function Workflow() {
  return (
    <section id="workflow" className="py-24 md:py-32 px-6 bg-[#080808] overflow-hidden contain-layout">
      <div className="max-w-7xl mx-auto">
        
        {/* Header - Optimized rendering with italic utility */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-orange-500" />
              <span className="text-orange-500 font-black text-[10px] tracking-[0.4em] uppercase">The Process</span>
            </div>
            <h2 className="text-4xl md:text-7xl font-black italic tracking-tighter text-white uppercase leading-[0.9]">
              Sistem Kerja <br /> 
              <span className="text-orange-500">Terstruktur.</span>
            </h2>
          </div>
          <p className="text-gray-600 max-w-[280px] text-[10px] font-black uppercase tracking-widest leading-relaxed border-l border-white/5 pl-6 italic opacity-80">
            Menjamin akurasi eksekusi dari ide hingga menjadi produk digital siap pakai.
          </p>
        </div>

        {/* Grid Workflow */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-0 relative">
          
          {/* Garis Horizontal Background - Static (Low impact) */}
          <div className="hidden md:block absolute top-[52px] left-0 w-full h-px bg-white/5 pointer-events-none" />

          {workflows.map((flow, i) => (
            <div 
              key={i} 
              className="group relative pt-12 md:pt-24 pb-12 md:pb-0 px-4 transition-colors duration-200"
            >
              {/* Nomor Langkah - Menggunakan opacity statis agar tidak membebani render */}
              <div className="absolute top-0 left-4 md:left-6 text-7xl md:text-8xl font-black text-white/[0.02] group-hover:text-orange-500/[0.04] transition-colors duration-300 pointer-events-none italic select-none">
                0{i + 1}
              </div>

              {/* Dot Indicator - Optimized with will-change */}
              <div className="relative z-10 flex items-center mb-8 md:mb-12">
                <div className="w-10 h-10 rounded-xl bg-[#0c0c0c] border border-white/10 flex items-center justify-center transition-all duration-300 group-hover:border-orange-500/30 will-change-transform">
                  <div className="w-1.5 h-1.5 rounded-full bg-white group-hover:bg-orange-500 group-hover:scale-125 transition-all duration-300" />
                </div>
                {/* Garis Vertikal (Mobile) */}
                <div className="md:hidden flex-1 h-px bg-white/5 ml-4" />
              </div>

              {/* Content - Static Typography */}
              <div className="relative z-10 space-y-4">
                <h4 className="text-xl font-black text-white uppercase italic tracking-tight group-hover:text-orange-500 transition-colors duration-300">
                  {flow.title}
                </h4>
                <p className="text-gray-500 text-[11px] md:text-xs leading-relaxed font-bold uppercase tracking-tight md:max-w-[200px] opacity-70">
                  {flow.desc}
                </p>
              </div>

              {/* Arrow Indicator - CSS Native (Bukan SVG kompleks) */}
              {i < workflows.length - 1 && (
                <div className="hidden md:flex absolute top-[52px] -right-3 z-20 items-center justify-center translate-y-[-50%] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                   <div className="w-2 h-2 border-t-2 border-r-2 border-orange-500 rotate-45" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default memo(Workflow);