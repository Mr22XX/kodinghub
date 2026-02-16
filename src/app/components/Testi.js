"use client";
import React, { memo } from 'react';
import { Star, Quote } from 'lucide-react';

function Testi() {
  return (
    // 'contain-paint' dan 'isolate' membantu browser tidak menghitung ulang background di luar section ini
    <section className="py-24 bg-orange-500 text-black px-6 relative overflow-hidden contain-paint isolate">
      
      {/* 1. Background Decor - Dibuat Statis untuk mengurangi beban GPU saat scroll */}
      <Quote className="absolute -top-10 -left-10 w-64 h-64 text-black/5 -rotate-12 pointer-events-none select-none" />
      <Quote className="absolute -bottom-10 -right-10 w-64 h-64 text-black/5 rotate-12 pointer-events-none select-none" />

      <div className="max-w-5xl mx-auto text-center relative z-10">
        
        {/* 2. Rating Bintang - Diganti ke transisi opacity sederhana atau animasi ringan */}
        <div className="flex justify-center mb-8 gap-1.5">
          {[1, 2, 3, 4, 5].map((i) => (
            <Star 
              key={i} 
              className="w-6 h-6 md:w-8 md:h-8 fill-black text-black opacity-0 animate-[fadeIn_0.5s_ease-out_forwards]" 
              style={{ animationDelay: `${i * 100}ms` }}
            />
          ))}
        </div>

        {/* 3. Testimoni Teks - Typografi dioptimasi */}
        <div className="space-y-10">
          <p className="text-3xl md:text-6xl font-black italic leading-[1] tracking-tighter uppercase antialiased">
            "Koding Hub benar-benar penyelamat! <br className="hidden md:block" />
            Tugas koding saya selesai 
            <span className="inline-block bg-black text-orange-500 px-3 py-1 mx-2 -rotate-1 shadow-lg">
              lebih cepat
            </span> 
            dan dijelaskan sampai paham."
          </p>

          {/* Nama & Role - Static Render */}
          <div className="flex flex-col items-center gap-3">
            <div className="h-[3px] w-12 bg-black rounded-full" />
            <div className="space-y-1">
              <span className="block font-black tracking-[0.3em] uppercase text-[10px] md:text-xs">
                MAHASISWA UNIB
              </span>
              <span className="block font-bold italic text-[10px] md:text-xs opacity-80 uppercase">
                Teknik Informatika
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* CSS Keyframes Inline untuk performa maksimal tanpa external CSS */}
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(5px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}

export default memo(Testi);