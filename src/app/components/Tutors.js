"use client";
import { motion } from 'framer-motion';     
import React, { useState } from 'react';   
import { 
  Github, 
  ArrowRight, 
  Mail, 
  Linkedin,
} from 'lucide-react';

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
    name: "Siti AminahAkhmat Qavidhufahmi",
    role: "Web Developer",
    specialist: "Laravel, Vue js, Node js",
    exp: "3+ Tahun",
    img: "/mentor1.jpeg",
    github : "https://github.com/SxCentauri"
  }
];
{/* TUTOR / MENTOR SECTION */}
export default function Tutors(){
          return(
      <section id="tutors" className="py-32 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-orange-500 font-bold tracking-[0.3em] text-xs mb-4 uppercase">Mentors</h2>
            <h3 className="text-4xl md:text-5xl font-black italic tracking-tighter">Belajar dari <span className="text-orange-500">Ahlinya.</span></h3>
            <p className="text-gray-500 mt-6 max-w-xl mx-auto text-sm">Tutor kami adalah Mahasiswa yang mempunyai pengalaman projek dan sertifikasi BNSP.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {tutors.map((tutor, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -15 }}
                className="group relative"
              >
                {/* Background Decor */}
                <div className="absolute inset-0 bg-orange-500 rounded-[40px] rotate-3 group-hover:rotate-6 transition-transform -z-10 opacity-0 group-hover:opacity-100" />
                
                <div className="bg-[#121212] border border-white/5 p-8 rounded-[40px] overflow-hidden transition-colors group-hover:border-transparent">
                  <div className="relative mb-8 w-full aspect-square overflow-hidden rounded-3xl">
                    <img 
                      src={tutor.img} 
                      alt={tutor.name} 
                      className="object-cover w-full h-full grayscale group-hover:grayscale-0 transition-all duration-500 scale-110 group-hover:scale-100"
                    />
                    <div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-md px-4 py-2 rounded-xl border border-white/10">
                      <span className="text-[10px] font-bold text-orange-500 tracking-widest uppercase">{tutor.exp} EXP</span>
                    </div>
                  </div>

                  <h4 className="text-2xl font-bold mb-1 tracking-tight">{tutor.name}</h4>
                  <p className="text-orange-500 text-xs font-black uppercase tracking-widest mb-4">{tutor.role}</p>
                  
                  <div className="flex flex-wrap gap-2 mt-6">
                    {tutor.specialist.split(', ').map((skill, idx) => (
                      <span key={idx} className="bg-white/5 border border-white/10 text-[10px] text-gray-400 px-3 py-1 rounded-full uppercase font-bold tracking-tighter">
                        {skill}
                      </span>
                    ))}
                  </div>
                    <div className="flex justify-between items-center mb-4">
                        <span className="text-[10px] text-gray-500 uppercase font-black tracking-widest">Tech Stack</span>
                        
                        <a 
                        href={tutor.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 bg-white/10 hover:bg-orange-500 hover:text-black transition-all px-3 py-1.5 rounded-lg border border-white/5 text-[10px] font-bold uppercase"
                        >
                        <Github size={14} /> GitHub
                        </a>
                    </div>

                  <div className="mt-8 pt-8 border-t border-white/5 flex justify-between items-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="text-xs font-bold text-gray-400 italic">Ready to mentor</span>
                    <div className="flex gap-4">
                      <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-all cursor-pointer">
                          <i className="fab fa-linkedin-in text-xs"></i>
                      </div>
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