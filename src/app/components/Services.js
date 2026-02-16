"use client";
import React, { useState, useEffect, memo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import dynamic from 'next/dynamic';
import { Globe, Layout, CheckCircle2, ArrowRight, Terminal, Cpu, BookOpen, Coffee } from 'lucide-react';

const CourseModal = dynamic(() => import('./CourseModal'), { ssr: false });

const SERVICE_LIST = [
  {
    title: "Web Development",
    desc: "Landing Page, E-Commerce, Dashboard, hingga Sistem Informasi menggunakan modern Tech-Stack.",
    features: ['Responsif & Cepat', 'Admin Panel'],
    icon: <Layout className="w-6 h-6 md:w-8 md:h-8" />,
    bgIcon: <Globe />,
    link: "https://wa.me/6281377845302",
    cta: "Pesan Web",
    color: "from-blue-500/20"
  },
  {
    title: "Joki Tugas IT",
    desc: "Solusi cepat untuk tugas Python, Java, C++, PHP, Laravel, dan lainnya. Bergaransi!",
    features: ['Bebas Plagiasi', 'Harga Ekonomis', 'Revisi Gratis'],
    icon: <Cpu className="w-6 h-6 md:w-8 md:h-8" />,
    bgIcon: <Terminal />,
    link: "https://wa.me/6281377845302",
    cta: "Kirim Tugas",
    highlight: true,
    color: "from-orange-500/20"
  },
  {
    title: "Belajar Private",
    desc: "Bimbingan intensif dari nol sampai mahir. Kurikulum terstruktur & praktis.",
    features: ['Live Mentoring', 'Project Portofolio'],
    icon: <Coffee className="w-6 h-6 md:w-8 md:h-8" />,
    bgIcon: <BookOpen />,
    cta: "Daftar Kursus",
    isModal: true,
    color: "from-purple-500/20"
  }
];

function Services() { 
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section id="services" className="py-24 px-6 bg-[#050505] relative overflow-hidden">
      {/* Background Decorative - Low Performance Impact */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-500/5 blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <header className="mb-16 md:mb-24 flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <span className="h-[2px] w-8 bg-orange-500 rounded-full" />
              <span className="text-orange-500 font-black text-[10px] tracking-[0.3em] uppercase">Service Catalog</span>
            </div>
            <h3 className="text-4xl md:text-7xl font-black text-white leading-none tracking-tighter uppercase">
              KODING TANPA <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-300">PUSING.</span>
            </h3>
          </div>
          <p className="text-gray-500 max-w-[280px] text-xs font-medium leading-relaxed uppercase tracking-wider">
            Ekosistem solusi IT untuk Mahasiswa & Profesional dengan standar industri.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {SERVICE_LIST.map((service, i) => (
            <div 
              key={i}
              className={`group relative p-[1px] rounded-[32px] overflow-hidden transition-all duration-500 ${
                service.highlight ? 'bg-gradient-to-b from-orange-500 to-transparent' : 'bg-white/10 hover:bg-white/20'
              }`}
            >
              {/* Inner Card */}
              <div className={`relative h-full w-full bg-[#0c0c0c] rounded-[31px] p-8 md:p-10 flex flex-col transition-all duration-500 ${service.highlight ? 'bg-gradient-to-br from-[#0c0c0c] to-[#1a110a]' : ''}`}>
                
                {/* Subtle Glow Effect on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />

                <div className={`relative z-10 p-3 rounded-2xl w-fit mb-8 ${service.highlight ? 'bg-orange-500 text-black' : 'bg-white/5 text-orange-500'}`}>
                  {service.icon}
                </div>

                <h4 className="relative z-10 text-2xl font-black text-white uppercase italic mb-4 tracking-tight">
                  {service.title}
                </h4>

                <p className="relative z-10 text-gray-400 text-sm leading-relaxed mb-8 font-medium">
                  {service.desc}
                </p>

                <div className="relative z-10 space-y-3 mb-10 mt-auto">
                  {service.features.map((f) => (
                    <div key={f} className="flex items-center gap-3 text-[11px] font-bold text-gray-300 uppercase tracking-tight">
                      <CheckCircle2 size={14} className="text-orange-500" />
                      {f}
                    </div>
                  ))}
                </div>

                {service.isModal ? (
                  <button 
                    onClick={() => setIsModalOpen(true)}
                    className="relative z-10 group/btn flex items-center justify-between bg-white/5 hover:bg-white/10 border border-white/10 p-4 rounded-2xl transition-all"
                  >
                    <span className="text-white text-xs font-black uppercase italic">Daftar Sekarang</span>
                    <ArrowRight size={18} className="text-orange-500 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                ) : (
                  <a 
                    href={service.link}
                    className={`relative z-10 flex items-center justify-center gap-3 p-4 rounded-2xl font-black text-xs uppercase italic transition-all active:scale-95 ${
                      service.highlight ? 'bg-orange-500 text-black shadow-[0_0_20px_rgba(249,115,22,0.3)]' : 'bg-white text-black hover:bg-orange-500'
                    }`}
                  >
                    {service.cta}
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {isModalOpen && (
          <CourseModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        )}
      </AnimatePresence>
    </section>
  );
}

export default memo(Services);