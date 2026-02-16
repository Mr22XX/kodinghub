"use client";
import React, { memo } from 'react';
import Image from 'next/image';
import { Github, ExternalLink, Code2 } from 'lucide-react';

const tutors = [
  {
    name: "Rayhan Muhammad Adha",
    role: "Fullstack Developer",
    specialist: ["Laravel", "Vue.js", "Node.js"],
    exp: "3+ Tahun",
    img: "/mentor.jpg",
    github: "https://github.com/Mr22XX",
    porto : 'https://my-portoo-alpha.vercel.app/'
  },
  {
    name: "Akhmat Qavidhufahmi",
    role: "Backend Engineer",
    specialist: ["Laravel", "Python", "Cloud"],
    exp: "3+ Tahun",
    img: "/mentor1.jpg", 
    github: "https://github.com/SxCentauri",
    porto: 'https://akhmat-dev.vercel.app/'
  }
];

function Tutors() {
  return (
    <section id="tutors" className="py-24 md:py-32 px-6 bg-[#080808] relative overflow-hidden contain-paint">
      {/* 1. Optimized Background - Menggunakan opacity rendah tanpa filter blur kompleks */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-orange-500/[0.03] rounded-full pointer-events-none" style={{ filter: 'blur(100px)' }} />

      <div className="max-w-7xl mx-auto relative z-10">
        <header className="text-center mb-16 md:mb-24 space-y-4">
          <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full border border-orange-500/10 bg-orange-500/5">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500" />
            <span className="text-orange-500 font-black text-[10px] tracking-[0.3em] uppercase">Expert Mentors</span>
          </div>
          <h3 className="text-4xl md:text-7xl font-black italic tracking-tighter text-white uppercase leading-none">
            Belajar Dari <span className="text-orange-500">Praktisi.</span>
          </h3>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
          {tutors.map((tutor, i) => (
            <div 
              key={i}
              className="group relative bg-[#0c0c0c] border border-white/5 rounded-[40px] p-6 md:p-10 transition-colors duration-300 hover:bg-[#111111] will-change-transform"
            >
              <div className="flex flex-col md:flex-row gap-8 md:items-center">
                
                {/* 2. Image Optimization - Menggunakan fixed dimensions untuk stabilitas layout */}
                <div className="relative w-full md:w-48 h-64 md:h-48 shrink-0 overflow-hidden rounded-[24px] bg-zinc-900 border border-white/5 translate-z-0">
                  <Image 
                    src={tutor.img} 
                    alt={tutor.name}
                    fill
                    priority={i < 2} // Muat gambar mentor pertama lebih cepat
                    className="object-cover grayscale transition-transform duration-500 ease-out group-hover:grayscale-0 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 200px"
                    quality={75} // Menurunkan sedikit kualitas untuk kecepatan loading mobile
                  />
                  <div className="absolute top-3 right-3 bg-black/80 px-2.5 py-1 rounded-lg border border-white/10 z-20">
                    <span className="text-[8px] font-black text-orange-500 tracking-tighter uppercase">{tutor.exp} EXP</span>
                  </div>
                </div>

                {/* 3. Info Container - Minimalist Text Rendering */}
                <div className="flex-1 space-y-4 text-left">
                  <div className="space-y-1">
                    <h4 className="text-2xl md:text-3xl font-black text-white italic tracking-tighter uppercase leading-tight">
                      {tutor.name}
                    </h4>
                    <p className="text-orange-500 text-[11px] font-black uppercase tracking-[0.2em] opacity-90">
                      {tutor.role}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {tutor.specialist.map((skill, idx) => (
                      <span key={idx} className="bg-white/5 border border-white/10 text-[9px] text-gray-400 px-3 py-1.5 rounded-full uppercase font-black tracking-widest transition-colors group-hover:text-orange-500">
                        {skill}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-6 pt-4">
                    <a 
                      href={tutor.github} 
                      target="_blank" 
                      className="flex items-center gap-2 text-white/40 hover:text-orange-500 transition-colors text-[10px] font-black uppercase tracking-widest"
                    >
                      <Github size={14} /> GitHub
                    </a>
                    <a 
                      href={tutor.porto}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-white/40 hover:text-orange-500 transition-colors text-[10px] font-black uppercase tracking-widest"
                    >
                      <Code2 size={14} /> Portfolio
                    </a>
                  </div>
                </div>
              </div>

              {/* 4. Decorative Icon - Statis (Low Impact) */}
              <div className="absolute top-8 right-8 text-white/[0.02] group-hover:text-orange-500/[0.05] transition-colors duration-500 pointer-events-none">
                <ExternalLink size={60} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default memo(Tutors);