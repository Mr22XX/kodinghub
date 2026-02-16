"use client";
import React, { useState } from 'react';
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

  return (
    <section id="services" className="py-32 px-6 bg-[#0c0c0c] relative">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-6 text-left">
          <div>
            <h2 className="text-orange-500 font-bold tracking-[0.3em] text-xs mb-4 uppercase">Katalog Jasa</h2>
            <h3 className="text-4xl md:text-6xl font-black italic tracking-tighter leading-none text-white">Apa yang Bisa <br /> Kami Kerjakan?</h3>
          </div>
          <p className="text-gray-500 max-w-xs text-sm italic">"Kualitas kode bukan hanya tentang bagaimana ia bekerja, tapi tentang bagaimana ia bisa dikembangkan."</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Jasa 1 */}
          <motion.div whileHover={typeof window !== 'undefined' && window.innerWidth > 768 ? { y: -5 } : {}} className="p-10 rounded-[40px] bg-[#121212] border border-white/5 relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-8 text-white/5 group-hover:text-orange-500/10 transition-colors">
              <Globe className="w-24 h-24" />
            </div>
            <div className="p-4 bg-orange-500/10 rounded-2xl w-fit mb-8">
              <Layout className="w-8 h-8 text-orange-500" />
            </div>
            <h4 className="text-2xl font-bold mb-4 text-white">Web Development</h4>
            <p className="text-gray-400 text-sm mb-8 leading-relaxed">Landing Page, E-Commerce, Dashboard, hingga Sistem Informasi lainnya. Menggunakan Tech-Stack modern seperti Laravel, Vue js, dan Express js.</p>
            <ul className="space-y-3 mb-10">
              {['Responsif & Cepat',  'Admin Panel'].map((item) => (
                <li key={item} className="flex items-center text-xs text-gray-300">
                  <CheckCircle2 className="w-4 h-4 text-orange-500 mr-2" /> {item}
                </li>
              ))}
            </ul>
            <a 
              href="https://wa.me/6281377845302?text=Halo%20KodingHub,%20saya%20ingin%20pesan%20layanan%20Web%20Development."
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-500 font-bold text-sm flex items-center gap-2 group-hover:gap-4 transition-all"
            >
              Pesan Web <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>

          {/* Jasa 2 (Joki Tugas) */}
          <motion.div whileHover={{ y: -10 }} className="p-10 rounded-[40px] bg-orange-500 text-black relative overflow-hidden group shadow-2xl shadow-orange-500/20">
            <div className="absolute top-0 right-0 p-8 text-black/5">
              <Terminal className="w-24 h-24" />
            </div>
            <div className="p-4 bg-black/10 rounded-2xl w-fit mb-8">
              <Cpu className="w-8 h-8 text-black" />
            </div>
            <h4 className="text-2xl font-black mb-4 uppercase italic">Joki Tugas IT</h4>
            <p className="font-medium mb-8 text-sm leading-relaxed text-black/80">Stuck sama tugas kampus? Kami bantu selesaikan tugas Python, Java, C++, PHP, Laravel, dan bahasa pemrograman lainnya.</p>
            <ul className="space-y-3 mb-10">
              {['Bebas Plagiasi', 'Harga Ekonomis', 'Revisi Gratis'].map((item) => (
                <li key={item} className="flex items-center text-xs font-bold">
                  <CheckCircle2 className="w-4 h-4 text-black mr-2" /> {item}
                </li>
              ))}
            </ul>
            <a 
              href="https://wa.me/6281377845302?text=Halo%20KodingHub,%20saya%20mau%20kirim%20tugas%20IT%20untuk%20dijokiin."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black text-white w-full py-4 rounded-2xl font-black text-sm uppercase transition-transform active:scale-95 flex items-center justify-center shadow-xl hover:bg-zinc-900"
            >
              Kirim Tugas Sekarang
            </a>
          </motion.div>

          {/* Jasa 3 */}
          <motion.div whileHover={{ y: -10 }} className="p-10 rounded-[40px] bg-[#121212] border border-white/5 relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-8 text-white/5 group-hover:text-orange-500/10 transition-colors">
              <BookOpen className="w-24 h-24" />
            </div>
            <div className="p-4 bg-orange-500/10 rounded-2xl w-fit mb-8">
              <Coffee className="w-8 h-8 text-orange-500" />
            </div>
            <h4 className="text-2xl font-bold mb-4 text-white">Belajar Private</h4>
            <p className="text-gray-400 text-sm mb-8 leading-relaxed">Bimbingan belajar dari nol sampai mahir. Cocok untuk kamu Mahasiswa Baru IT.</p>
            <ul className="space-y-3 mb-10">
              {['Live Mentoring', 'Project Portofolio'].map((item) => (
                <li key={item} className="flex items-center text-xs text-gray-300">
                  <CheckCircle2 className="w-4 h-4 text-orange-500 mr-2" /> {item}
                </li>
              ))}
            </ul>
            <button 
                onClick={() => setIsModalOpen(true)}
                className="text-orange-500 font-bold text-sm flex items-center gap-2 group-hover:gap-4 transition-all"
            >
                Daftar Kursus <ArrowRight className="w-4 h-4" />
            </button>
          </motion.div>
        </div>
      </div>

      {/* --- PINDAHKAN MODAL KE SINI (DI LUAR GRID) --- */}
      <CourseModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </section>
  );
}