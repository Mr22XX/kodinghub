import { Star, Quote } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Testi() {
  return (
    <section className="py-24 bg-orange-500 text-black px-6 relative overflow-hidden">
      {/* Dekorasi Kutipan Besar di Background - Menggunakan opacity rendah agar elegan */}
      <Quote className="absolute -top-10 -left-10 w-64 h-64 text-black/5 -rotate-12 pointer-events-none" />
      <Quote className="absolute -bottom-10 -right-10 w-64 h-64 text-black/5 rotate-12 pointer-events-none" />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Rating Bintang dengan animasi muncul satu-satu */}
        <div className="flex justify-center mb-10 gap-1">
          {[1, 2, 3, 4, 5].map((i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Star className="w-6 h-6 md:w-8 md:h-8 fill-black text-black" />
            </motion.div>
          ))}
        </div>

        {/* Testimoni Teks */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-2xl md:text-5xl font-black italic leading-[1.1] mb-10 tracking-tighter uppercase"
        >
          "Koding Hub benar-benar penyelamat! Tugas koding saya selesai <span className="bg-black text-orange-500 px-2">lebih cepat</span> dan dijelaskan sampai paham."
        </motion.p>

        {/* Nama & Role */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="flex flex-col items-center gap-2"
        >
          <div className="h-1 w-10 bg-black rounded-full mb-2"></div>
          <div className="font-black tracking-[0.2em] uppercase text-xs md:text-sm">
            — Mr B, Mahasiswa IT
          </div>
        </motion.div>
      </div>
    </section>
  );
}