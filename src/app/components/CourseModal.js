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

  useEffect(() => {
    if (isOpen) {
      // Mengunci body agar tidak bisa discroll saat modal buka
      document.documentElement.style.overflow = 'hidden';
      document.body.style.overflow = 'hidden';
    } else {
      document.documentElement.style.overflow = '';
      document.body.style.overflow = '';
    }
    return () => {
      document.documentElement.style.overflow = '';
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        /* portal-like wrapper */
        <div className="fixed inset-0 z-[9999] flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none">
          
          {/* Backdrop: Pakai fixed inset-0 juga agar menutupi seluruh layar */}
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/90 backdrop-blur-sm z-0"
          />
          
          {/* Modal Content */}
          <motion.div 
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            className="relative z-10 w-full max-w-lg mx-auto p-4 md:p-0"
          >
            <div className="relative bg-[#121212] border border-white/10 p-6 md:p-10 rounded-[32px] md:rounded-[40px] shadow-2xl">
              {/* Dekorasi Cahaya */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-32 bg-orange-500/20 blur-[60px] pointer-events-none" />

              <button 
                onClick={onClose} 
                className="absolute top-4 right-4 md:top-6 md:right-6 p-2 rounded-full bg-white/5 text-gray-500 hover:text-white transition-all z-20"
              >
                <X size={20} />
              </button>

              <header className="mb-6">
                <h3 className="text-2xl md:text-3xl font-black text-white italic tracking-tighter uppercase leading-none">
                  PILIH <span className="text-orange-500">PROGRAM</span>
                </h3>
                <p className="text-gray-500 text-[10px] font-bold uppercase tracking-[0.2em] mt-3">
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
                    className="flex items-center gap-4 p-4 md:p-5 rounded-[24px] bg-white/[0.03] border border-white/5 hover:border-orange-500/40 hover:bg-orange-500/[0.02] transition-all group"
                  >
                    <div className="p-3 rounded-2xl bg-orange-500/10 text-orange-500 group-hover:bg-orange-500 group-hover:text-black transition-all">
                      {course.icon}
                    </div>
                    <div className="flex-1 text-left">
                      <h4 className="font-black text-white text-sm uppercase italic group-hover:text-orange-500 transition-colors">
                        {course.title}
                      </h4>
                      <p className="text-[10px] text-gray-500 font-medium leading-tight mt-0.5">
                        {course.desc}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}