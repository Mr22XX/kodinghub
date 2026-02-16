"use client";
import { motion, AnimatePresence } from 'framer-motion';
import { X, Code, Globe, Database, Smartphone } from 'lucide-react';

export default function CourseModal({ isOpen, onClose }) {
  const courses = [
    { 
      title: "Frontend Web Dasar", 
      icon: <Globe size={24} />, 
      desc: "HTML, CSS Vanila & Tailwind , JS.",
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

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
          {/* Backdrop */}
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/90"
          />
          
          {/* Modal Content */}
          <motion.div 
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            className="relative bg-[#121212] border border-white/10 p-8 rounded-[32px] max-w-lg w-full shadow-2xl"
          >
            <button onClick={onClose} className="absolute top-6 right-6 text-gray-500 hover:text-white">
              <X size={24} />
            </button>

            <h3 className="text-2xl font-black text-white italic mb-2 tracking-tight">PILIH PROGRAM</h3>
            <p className="text-gray-400 text-sm mb-8">Pilih kursus yang sesuai dengan minat belajarmu.</p>

            <div className="space-y-4">
              {courses.map((course, i) => (
                <a 
                  key={i}
                  href={`https://wa.me/6281377845302?text=${encodeURIComponent(course.wa)}`}
                  target="_blank"
                  className="flex items-center gap-5 p-5 rounded-2xl bg-white/5 border border-white/5 hover:border-orange-500/50 hover:bg-orange-500/5 transition-all group"
                >
                  <div className="p-3 rounded-xl bg-orange-500/10 text-orange-500 group-hover:bg-orange-500 group-hover:text-black transition-colors">
                    {course.icon}
                  </div>
                  <div className="flex-1 text-left">
                    <h4 className="font-bold text-white group-hover:text-orange-500">{course.title}</h4>
                    <p className="text-xs text-gray-500">{course.desc}</p>
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