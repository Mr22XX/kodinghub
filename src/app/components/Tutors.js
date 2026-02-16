"use client";
import { motion } from 'framer-motion';     
import React, { useState, useEffect } from 'react';   
import { Github, Linkedin, Mail } from 'lucide-react';

const tutors = [
  {
    name: "Rayhan Muhammad Adha",
    role: "Web Developer",
    specialist: "Laravel, Vue js, Node js",
    exp: "3+ Tahun",
    img: "/mentor.jpeg",
    github : "https://github.com/Mr22XX"
  },
  {
    name: "Akhmat Qavidhufahmi", // Sedikit diperpendek agar tidak pecah di mobile
    role: "Web Developer",
    specialist: "Laravel, Vue js, Node js",
    exp: "3+ Tahun",
    img: "/mentor1.jpeg",
    github : "https://github.com/SxCentauri"
  }
];

export default function Tutors(){
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    setIsDesktop(window.innerWidth > 768);
  }, []);

  return (
    <section id="tutors" className="py-24 md:py-32 px-6 border-t border-white/5 bg-[#080808]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-orange-500 font-bold tracking-[0.3em] text-[10px] md:text-xs mb-4 uppercase">Mentors</h2>
          <h3 className="text-4xl md:text-5xl font-black italic tracking-tighter text-white uppercase">
            Belajar dari <span className="text-orange-500">Ahlinya.</span>
          </h3>
          <p className="text-gray-500 mt-6 max-w-xl mx-auto text-xs md:text-sm italic">
            Tutor kami adalah praktisi yang memiliki pengalaman projek nyata dan sertifikasi kompetensi.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {tutors.map((tutor, i) => (
            <motion.div 
              key={i}
              whileHover={isDesktop ? { y: -5 } : {}}
              className="group relative"
            >
              {/* Background Decor - Dimatikan di Mobile untuk performa */}
              <div className="hidden md:block absolute inset-0 bg-orange-500 rounded-[40px] rotate-3 group-hover:rotate-6 transition-transform -z-10 opacity-0 group-hover:opacity-100 duration-500" />
              
              <div className="bg-[#121212] border border-white/5 p-6 md:p-8 rounded-[32px] md:rounded-[40px] overflow-hidden transition-all duration-300 group-hover:border-orange-500/30">
                
                {/* Image Container */}
                <div className="relative mb-6 md:mb-8 w-full aspect-square md:aspect-video overflow-hidden rounded-2xl md:rounded-3xl bg-zinc-900">
                  <img 
                    src={tutor.img} 
                    alt={tutor.name} 
                    loading="lazy"
                    className="object-cover w-full h-full grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
                  />
                  {/* Label EXP - Blur dimatikan di Mobile */}
                  <div className="absolute bottom-4 left-4 bg-black/80 md:backdrop-blur-md px-3 py-1.5 rounded-xl border border-white/10">
                    <span className="text-[9px] md:text-[10px] font-black text-orange-500 tracking-widest uppercase">{tutor.exp} EXP</span>
                  </div>
                </div>

                <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6">
                  <div>
                    <h4 className="text-xl md:text-2xl font-bold mb-1 tracking-tight text-white uppercase">{tutor.name}</h4>
                    <p className="text-orange-500 text-[10px] font-black uppercase tracking-[0.2em]">{tutor.role}</p>
                  </div>
                  
                  <a 
                    href={tutor.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-white/5 hover:bg-orange-500 hover:text-black transition-all px-4 py-2 rounded-xl border border-white/5 text-[10px] font-bold uppercase w-fit"
                  >
                    <Github size={14} /> GitHub
                  </a>
                </div>

                <div className="pt-6 border-t border-white/5">
                  <span className="text-[9px] text-gray-500 uppercase font-black tracking-widest block mb-3">Tech Stack</span>
                  <div className="flex flex-wrap gap-2">
                    {tutor.specialist.split(', ').map((skill, idx) => (
                      <span key={idx} className="bg-[#1a1a1a] border border-white/5 text-[9px] md:text-[10px] text-gray-400 px-3 py-1 rounded-lg uppercase font-bold">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}