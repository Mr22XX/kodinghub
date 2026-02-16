"use client";
import React, { useState, memo } from 'react';
import dynamic from 'next/dynamic';
import { Layout, CheckCircle2, ArrowRight, Cpu, Coffee } from 'lucide-react';

// Dynamic import untuk CourseModal agar bundle JS tidak berat di awal
const CourseModal = dynamic(() => import('./CourseModal'), { ssr: false });

const SERVICE_LIST = [
  {
    title: "Web Development",
    desc: "Landing Page, E-Commerce, Dashboard, hingga Sistem Informasi menggunakan modern Tech-Stack.",
    features: ['Responsif & Cepat', 'Admin Panel'],
    icon: <Layout className="w-6 h-6 md:w-8 md:h-8" />,
    link: "https://wa.me/6281377845302",
    cta: "Pesan Web",
    color: "group-hover:bg-blue-500/10"
  },
  {
    title: "Joki Tugas IT",
    desc: "Solusi cepat untuk tugas Python, Java, C++, PHP, Laravel, dan lainnya. Bergaransi!",
    features: ['Bebas Plagiasi', 'Harga Ekonomis', 'Revisi Gratis'],
    icon: <Cpu className="w-6 h-6 md:w-8 md:h-8" />,
    link: "https://wa.me/6281377845302",
    cta: "Kirim Tugas",
    highlight: true,
    color: "group-hover:bg-orange-500/10"
  },
  {
    title: "Belajar Private",
    desc: "Bimbingan intensif dari nol sampai mahir. Kurikulum terstruktur & praktis.",
    features: ['Live Mentoring', 'Project Portofolio'],
    icon: <Coffee className="w-6 h-6 md:w-8 md:h-8" />,
    cta: "Daftar Kursus",
    isModal: true,
    color: "group-hover:bg-purple-500/10"
  }
];

function Services() { 
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section id="services" className="py-24 px-6 bg-[#050505] relative overflow-hidden contain-paint isolate">
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-500/[0.03] blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto relative z-10">
        <header className="mb-16 md:mb-24 flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <span className="h-[2px] w-8 bg-orange-500 rounded-full" />
              <span className="text-orange-500 font-black text-[10px] tracking-[0.3em] uppercase">Service Catalog</span>
            </div>
            <h3 className="text-4xl md:text-7xl font-black text-white leading-none tracking-tighter uppercase italic">
              KODING TANPA <br /> <span className="text-orange-500">PUSING.</span>
            </h3>
          </div>
          <p className="text-gray-500 max-w-[280px] text-[10px] font-bold leading-relaxed uppercase tracking-widest opacity-60">
            Ekosistem solusi IT untuk Mahasiswa & Profesional dengan standar industri.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {SERVICE_LIST.map((service, i) => (
            <div 
              key={i}
              className={`group relative rounded-[32px] p-[1.5px] transition-transform duration-300 will-change-transform active:scale-[0.98] ${
                service.highlight ? 'bg-orange-500' : 'bg-white/10 hover:bg-white/20'
              }`}
            >
              <div className="relative h-full w-full bg-[#0c0c0c] rounded-[31px] p-8 md:p-10 flex flex-col overflow-hidden">
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none ${service.color}`} />

                <div className={`relative z-10 p-4 rounded-2xl w-fit mb-8 transition-transform duration-500 group-hover:-translate-y-1 ${service.highlight ? 'bg-orange-500 text-black' : 'bg-white/5 text-orange-500'}`}>
                  {service.icon}
                </div>

                <h4 className="relative z-10 text-2xl font-black text-white uppercase italic mb-4 tracking-tight">
                  {service.title}
                </h4>

                <p className="relative z-10 text-gray-400 text-sm leading-relaxed mb-8 font-medium">
                  {service.desc}
                </p>

                <div className="relative z-10 space-y-4 mb-10 mt-auto">
                  {service.features.map((f) => (
                    <div key={f} className="flex items-center gap-3 text-[10px] font-black text-gray-400 uppercase tracking-widest">
                      <CheckCircle2 size={14} className="text-orange-500" />
                      {f}
                    </div>
                  ))}
                </div>

                {service.isModal ? (
                  <button 
                    onClick={() => setIsModalOpen(true)}
                    className="relative z-10 flex items-center justify-between bg-white/5 border border-white/10 p-5 rounded-2xl transition-all hover:bg-white/10 group/btn"
                  >
                    <span className="text-white text-[10px] font-black uppercase italic tracking-widest">Daftar Sekarang</span>
                    <ArrowRight size={18} className="text-orange-500 transition-transform group-hover/btn:translate-x-1" />
                  </button>
                ) : (
                  <a 
                    href={service.link}
                    className={`relative z-10 flex items-center justify-center gap-3 p-5 rounded-2xl font-black text-[10px] uppercase italic tracking-[0.2em] transition-all ${
                      service.highlight ? 'bg-orange-500 text-black shadow-lg shadow-orange-500/20' : 'bg-white text-black hover:bg-orange-500'
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

      {/* FIXED MODAL WRAPPER - Menjamin posisi selalu di tengah viewport */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6 bg-black/90 backdrop-blur-sm animate-[fadeIn_0.2s_ease-out]">
          <div className="w-full max-w-lg relative animate-[scaleUp_0.3s_ease-out]">
             <CourseModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
          </div>
        </div>
      )}

      <style jsx global>{`
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes scaleUp { from { opacity: 0; transform: scale(0.95); } to { opacity: 1; transform: scale(1); } }
      `}</style>
    </section>
  );
}

export default memo(Services);