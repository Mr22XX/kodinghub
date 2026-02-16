"use client";
import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Code, Globe, Database } from 'lucide-react';

export default function CourseModal({ isOpen, onClose }) {
  const courses = [
    { 
      title: "Frontend Web Dasar", 
      icon: <Globe size={24} />, 
      desc: "HTML, CSS Vanila & Tailwind, JS.",
      wa: "Halo, saya mau daftar kursus Frontend Web Dasar" 
    },
    { 
      title: "Backend Web Dasar", 
      icon: <Database size={24} />, 
      desc: "PHP / Node js, MySQL",
      wa: "Halo, saya mau daftar kursus Backend Web Dasar." 
    },
    { 
      title: "Kelas Laravel", 
      icon: <Code size={24} />, 
      desc: "Laravel Dasar Sampai Ahli.",
      wa: "Halo, saya mau daftar kursus Laravel" 
    }
  ];

  // Efek untuk mengunci scroll saat modal terbuka agar posisi tetap konsisten
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        /* Layer Utama: Menggunakan flex untuk centering vertikal & horizontal */
        <div className="fixed inset-0 z-[999] flex items-center justify-center p-4 md:p-6 overflow-hidden">
          
          {/* Backdrop: Animasi memudar */}
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
          />
          
          {/* Modal Content: Menggunakan Scale & Fade agar terkesan 'pop up' */}
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative bg-[#121212] border border-white/10 p-6 md:p-10 rounded-[40px] max-w-lg w-full shadow-[0_30px_100px_rgba(0,0,0,0.5)] z-10"
          >
            {/* Dekorasi Cahaya Orange di dalam Modal */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-32 bg-orange-500/10 blur-[60px] pointer-events-none" />

            <button 
              onClick={onClose} 
              className="absolute top-6 right-6 p-2 rounded-full bg-white/5 text-gray-500 hover:text-white hover:bg-white/10 transition-all"
            >
              <X size={20} />
            </button>

            <header className="mb-8">
              <h3 className="text-3xl font-black text-white italic tracking-tighter uppercase leading-none">
                PILIH <span className="text-orange-500">PROGRAM</span>
              </h3>
              <p className="text-gray-500 text-[10px] font-bold uppercase tracking-[0.2em] mt-3 opacity-60">
                Pilih jalur karirmu sekarang.
              </p>
            </header>

            <div className="space-y-3">
              {courses.map((course, i) => (
                <a 
                  key={i}
                  href={`https://wa.me/6281377845302?text=${encodeURIComponent(course.wa)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-5 p-5 rounded-[24px] bg-white/[0.03] border border-white/5 hover:border-orange-500/40 hover:bg-orange-500/[0.02] transition-all group"
                >
                  <div className="p-3 rounded-2xl bg-orange-500/10 text-orange-500 group-hover:bg-orange-500 group-hover:text-black transition-all duration-300">
                    {course.icon}
                  </div>
                  <div className="flex-1 text-left">
                    <h4 className="font-black text-white text-sm uppercase italic tracking-tight group-hover:text-orange-500 transition-colors">
                      {course.title}
                    </h4>
                    <p className="text-[10px] text-gray-500 font-medium leading-relaxed mt-0.5">
                      {course.desc}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}