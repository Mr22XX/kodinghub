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
    <section id="workflow" className="py-24 md:py-32 px-6 bg-[#080808] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Header - Minimalist & Bold */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-orange-500" />
              <span className="text-orange-500 font-black text-[10px] tracking-[0.4em] uppercase">The Process</span>
            </div>
            <h2 className="text-4xl md:text-7xl font-black italic tracking-tighter text-white uppercase leading-none">
              Sistem Kerja <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-200">Terstruktur.</span>
            </h2>
          </div>
          <p className="text-gray-500 max-w-[280px] text-[11px] font-bold uppercase tracking-widest leading-relaxed border-l border-white/10 pl-6">
            Menjamin akurasi eksekusi dari ide hingga menjadi produk digital yang siap pakai.
          </p>
        </div>

        {/* Grid Workflow */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-0 relative">
          
          {/* Garis Horizontal Background (Desktop Only) */}
          <div className="hidden md:block absolute top-[52px] left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

          {workflows.map((flow, i) => (
            <div 
              key={i} 
              className="group relative pt-12 md:pt-24 pb-12 md:pb-0 px-4 transition-all duration-500 hover:bg-white/[0.02] rounded-[32px]"
            >
              {/* Nomor Langkah (Background Text) */}
              <div className="absolute top-0 left-4 md:left-6 text-7xl md:text-8xl font-black text-white/[0.03] group-hover:text-orange-500/[0.05] transition-colors pointer-events-none italic">
                0{i + 1}
              </div>

              {/* Dot Indicator di Garis */}
              <div className="relative z-10 flex items-center mb-8 md:mb-12">
                <div className="w-10 h-10 rounded-xl bg-[#0c0c0c] border border-white/10 flex items-center justify-center group-hover:border-orange-500/50 transition-all duration-500 group-hover:shadow-[0_0_20px_rgba(249,115,22,0.15)]">
                  <div className="w-1.5 h-1.5 rounded-full bg-white group-hover:bg-orange-500 group-hover:scale-150 transition-all" />
                </div>
                {/* Garis Vertikal (Mobile Only) */}
                <div className="md:hidden flex-1 h-px bg-white/5 ml-4" />
              </div>

              {/* Content */}
              <div className="relative z-10 space-y-4">
                <h4 className="text-xl font-black text-white uppercase italic tracking-tight group-hover:text-orange-500 transition-colors">
                  {flow.title}
                </h4>
                <p className="text-gray-500 text-xs md:text-sm leading-relaxed font-medium md:max-w-[220px]">
                  {flow.desc}
                </p>
              </div>

              {/* Arrow Indicator (Desktop Only) - Menghubungkan step */}
              {i < workflows.length - 1 && (
                <div className="hidden md:block absolute top-[48px] -right-4 z-20 opacity-0 group-hover:opacity-100 transition-opacity">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-orange-500">
                    <path d="M5 12H19M19 12L13 6M19 12L13 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
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