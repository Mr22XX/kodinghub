"use client";
import React, { memo } from 'react';
import Image from 'next/image'; // WAJIB untuk performa HP
import { Github, ExternalLink, Code2 } from 'lucide-react';

const tutors = [
  {
    name: "Rayhan Muhammad Adha",
    role: "Fullstack Developer",
    specialist: ["Laravel", "Vue.js", "Node.js"],
    exp: "3+ Tahun",
    img: "/mentor.jpg", // Pastikan file ini ada di folder public
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
    <section id="tutors" className="py-24 md:py-32 px-6 bg-[#080808] relative overflow-hidden">
      {/* Decorative Blur - Ringan */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-orange-500/5 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto relative z-10">
        <header className="text-center mb-16 md:mb-24 space-y-4">
          <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full border border-orange-500/20 bg-orange-500/5">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse" />
            <span className="text-orange-500 font-black text-[10px] tracking-[0.3em] uppercase">Expert Mentors</span>
          </div>
          <h3 className="text-4xl md:text-7xl font-black italic tracking-tighter text-white uppercase leading-none">
            Belajar Dari <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-200">Praktisi.</span>
          </h3>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
          {tutors.map((tutor, i) => (
            <div 
              key={i}
              className="group relative bg-[#0c0c0c] border border-white/5 rounded-[40px] p-6 md:p-10 transition-all duration-500 hover:border-orange-500/40 hover:bg-[#111111]"
            >
              <div className="flex flex-col md:flex-row gap-8 md:items-center">
                {/* Image Container dengan Next/Image */}
                <div className="relative w-full md:w-48 h-64 md:h-48 shrink-0 overflow-hidden rounded-[24px] bg-zinc-900 border border-white/5">
                  <Image 
                    src={tutor.img} 
                    alt={tutor.name}
                    fill
                    className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700 ease-out"
                    sizes="(max-width: 768px) 100vw, 200px"
                  />
                  <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-lg border border-white/10">
                    <span className="text-[8px] font-black text-orange-500 tracking-tighter uppercase">{tutor.exp} EXP</span>
                  </div>
                </div>

                {/* Info Container */}
                <div className="flex-1 space-y-4 text-left">
                  <div className="space-y-1">
                    <h4 className="text-2xl md:text-3xl font-black text-white italic tracking-tighter uppercase leading-tight">
                      {tutor.name}
                    </h4>
                    <p className="text-orange-500 text-[11px] font-black uppercase tracking-[0.2em]">
                      {tutor.role}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {tutor.specialist.map((skill, idx) => (
                      <span key={idx} className="bg-white/5 border border-white/5 text-[9px] text-gray-400 px-3 py-1.5 rounded-full uppercase font-black tracking-widest group-hover:text-white transition-colors">
                        {skill}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4 pt-4">
                    <a 
                      href={tutor.github} 
                      target="_blank" 
                      className="flex items-center gap-2 text-white/40 hover:text-orange-500 transition-colors text-[10px] font-bold uppercase tracking-widest"
                    >
                      <Github size={16} /> GitHub
                    </a>
                    <a 
                      href={tutor.porto}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-white/40 hover:text-orange-500 transition-colors text-[10px] font-bold uppercase tracking-widest"
                    >
                      <Code2 size={16} /> Web
                    </a>
                  </div>
                </div>
              </div>

              {/* Decorative Corner Icon */}
              <div className="absolute top-8 right-8 text-white/5 group-hover:text-orange-500/10 transition-colors duration-500 pointer-events-none">
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