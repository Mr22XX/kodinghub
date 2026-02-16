"use client";
import React, { memo } from 'react';
import { Star, Quote } from 'lucide-react';

function Testi() {
  return (
    <section className="py-24 bg-orange-500 text-black px-6 relative overflow-hidden contain-paint">
      {/* Background Decor - Menggunakan CSS transition saja agar ringan */}
      <Quote className="absolute -top-10 -left-10 w-64 h-64 text-black/5 -rotate-12 pointer-events-none" />
      <Quote className="absolute -bottom-10 -right-10 w-64 h-64 text-black/5 rotate-12 pointer-events-none" />

      <div className="max-w-5xl mx-auto text-center relative z-10">
        {/* Rating Bintang - Animasi CSS murni (lebih enteng dari framer-motion) */}
        <div className="flex justify-center mb-8 gap-1">
          {[1, 2, 3, 4, 5].map((i) => (
            <Star 
              key={i} 
              className="w-6 h-6 md:w-8 md:h-8 fill-black text-black animate-bounce" 
              style={{ animationDelay: `${i * 100}ms`, animationIterationCount: 1 }}
            />
          ))}
        </div>

        {/* Testimoni Teks - Typografi diperkuat */}
        <div className="space-y-10">
          <p className="text-3xl md:text-6xl font-black italic leading-[1] tracking-tighter uppercase">
            "Koding Hub benar-benar penyelamat! <br className="hidden md:block" />
            Tugas koding saya selesai 
            <span className="inline-block bg-black text-orange-500 px-3 py-1 mx-2 -rotate-1">
              lebih cepat
            </span> 
            dan dijelaskan sampai paham."
          </p>

          {/* Nama & Role */}
          <div className="flex flex-col items-center gap-3">
            <div className="h-[3px] w-12 bg-black rounded-full" />
            <div className="space-y-1">
              <span className="block font-black tracking-[0.3em] uppercase text-[10px] md:text-xs">
                MR B
              </span>
              <span className="block font-medium italic text-[10px] md:text-xs opacity-70">
                Mahasiswa Teknik Informatika
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default memo(Testi);