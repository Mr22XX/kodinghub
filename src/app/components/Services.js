"use client";
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import CourseModal from './CourseModal';
import { 
  Globe, 
  Layout, 
  CheckCircle2, 
  ArrowRight, 
  Terminal, 
  Cpu, 
  BookOpen, 
  Coffee 
} from 'lucide-react';

export default function Services() { 
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isDesktop, setIsDesktop] = useState(false);

    // Cek layar hanya di client side untuk menghindari hydration error
    useEffect(() => {
        setIsDesktop(window.innerWidth > 768);
    }, []);

  return (
    <section id="services" className="py-20 md:py-32 px-6 bg-[#0c0c0c] relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-20 gap-6 text-left">
          <div>
            <h2 className="text-orange-500 font-bold tracking-[0.3em] text-[10px] md:text-xs mb-3 md:mb-4 uppercase">Katalog Jasa</h2>
            <h3 className="text-3xl md:text-6xl font-black italic tracking-tighter leading-[1.1] text-white uppercase">
              Apa yang Bisa <br /> Kami Kerjakan?
            </h3>
          </div>
          <p className="text-gray-500 max-w-xs text-xs md:text-sm italic border-l border-orange-500/30 pl-4">
            "Kualitas kode bukan hanya tentang bagaimana ia bekerja, tapi tentang bagaimana ia bisa dikembangkan."
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          
          {/* Jasa 1 - Web Dev */}
          <motion.div 
            whileHover={isDesktop ? { y: -8 } : {}}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="p-8 md:p-10 rounded-[32px] md:rounded-[40px] bg-[#121212] border border-white/5 relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 p-6 md:p-8 text-white/5 group-hover:text-orange-500/10 transition-colors pointer-events-none">
              <Globe className="w-20 h-20 md:w-24 md:h-24" />
            </div>
            <div className="p-3 md:p-4 bg-orange-500/10 rounded-2xl w-fit mb-6 md:mb-8 text-orange-500">
              <Layout className="w-6 h-6 md:w-8 md:h-8" />
            </div>
            <h4 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 text-white uppercase tracking-tight">Web Development</h4>
            <p className="text-gray-400 text-xs md:text-sm mb-6 md:mb-8 leading-relaxed">Landing Page, E-Commerce, Dashboard, hingga Sistem Informasi menggunakan modern Tech-Stack.</p>
            <ul className="space-y-2 md:space-y-3 mb-8 md:mb-10">
              {['Responsif & Cepat', 'Admin Panel'].map((item) => (
                <li key={item} className="flex items-center text-[11px] md:text-xs text-gray-300">
                  <CheckCircle2 className="w-3.5 h-3.5 md:w-4 h-4 text-orange-500 mr-2" /> {item}
                </li>
              ))}
            </ul>
            <a 
              href="https://wa.me/6281377845302?text=Halo%20KodingHub"
              className="text-orange-500 font-bold text-xs md:text-sm flex items-center gap-2 hover:gap-4 transition-all uppercase tracking-widest"
            >
              Pesan Web <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>

          {/* Jasa 2 - Joki Tugas (Main Feature) */}
          <motion.div 
            whileHover={isDesktop ? { y: -8 } : {}}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="p-8 md:p-10 rounded-[32px] md:rounded-[40px] bg-orange-500 text-black relative overflow-hidden group shadow-xl md:shadow-2xl md:shadow-orange-500/20"
          >
            <div className="absolute top-0 right-0 p-6 md:p-8 text-black/5 pointer-events-none">
              <Terminal className="w-20 h-20 md:w-24 md:h-24" />
            </div>
            <div className="p-3 md:p-4 bg-black/10 rounded-2xl w-fit mb-6 md:mb-8">
              <Cpu className="w-6 h-6 md:w-8 md:h-8 text-black" />
            </div>
            <h4 className="text-xl md:text-2xl font-black mb-3 md:mb-4 uppercase italic">Joki Tugas IT</h4>
            <p className="font-medium mb-6 md:mb-8 text-xs md:text-sm leading-relaxed text-black/80">Solusi cepat untuk tugas Python, Java, C++, PHP, Laravel, dan lainnya. Bergaransi!</p>
            <ul className="space-y-2 md:space-y-3 mb-8 md:mb-10">
              {['Bebas Plagiasi', 'Harga Ekonomis', 'Revisi Gratis'].map((item) => (
                <li key={item} className="flex items-center text-[11px] md:text-xs font-bold">
                  <CheckCircle2 className="w-3.5 h-3.5 md:w-4 h-4 text-black mr-2" /> {item}
                </li>
              ))}
            </ul>
            <a 
              href="https://wa.me/6281377845302"
              className="bg-black text-white w-full py-3 md:py-4 rounded-xl md:rounded-2xl font-black text-xs md:text-sm uppercase transition-transform active:scale-95 flex items-center justify-center shadow-lg"
            >
              Kirim Tugas Sekarang
            </a>
          </motion.div>

          {/* Jasa 3 - Belajar */}
          <motion.div 
            whileHover={isDesktop ? { y: -8 } : {}}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="p-8 md:p-10 rounded-[32px] md:rounded-[40px] bg-[#121212] border border-white/5 relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 p-6 md:p-8 text-white/5 group-hover:text-orange-500/10 transition-colors pointer-events-none">
              <BookOpen className="w-20 h-20 md:w-24 md:h-24" />
            </div>
            <div className="p-3 md:p-4 bg-orange-500/10 rounded-2xl w-fit mb-6 md:mb-8 text-orange-500">
              <Coffee className="w-6 h-6 md:w-8 md:h-8" />
            </div>
            <h4 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 text-white uppercase tracking-tight">Belajar Private</h4>
            <p className="text-gray-400 text-xs md:text-sm mb-6 md:mb-8 leading-relaxed">Bimbingan intensif dari nol sampai mahir. Kurikulum terstruktur & praktis.</p>
            <ul className="space-y-2 md:space-y-3 mb-8 md:mb-10">
              {['Live Mentoring', 'Project Portofolio'].map((item) => (
                <li key={item} className="flex items-center text-[11px] md:text-xs text-gray-300">
                  <CheckCircle2 className="w-3.5 h-3.5 md:w-4 h-4 text-orange-500 mr-2" /> {item}
                </li>
              ))}
            </ul>
            <button 
                onClick={() => setIsModalOpen(true)}
                className="text-orange-500 font-bold text-xs md:text-sm flex items-center gap-2 hover:gap-4 transition-all uppercase tracking-widest"
            >
              Daftar Kursus <ArrowRight className="w-4 h-4" />
            </button>
          </motion.div>
        </div>
      </div>

      <CourseModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </section>
  );
}