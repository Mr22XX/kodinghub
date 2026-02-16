import { motion } from 'framer-motion';     
const stats = [
  { label: "Projek Selesai", value: "10+" },
  { label: "Siswa Aktif", value: "50+" },
  { label: "Rating Kepuasan", value: "4.9/5" },
  { label: "Baris Kode", value: "1M+" },
];

     {/* HERO SECTION */}
     export default function Hero() {
        return(
      <section className="relative pt-48 pb-32 px-6 overflow-hidden">
        {/* Dekorasi Background */}
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-orange-600/20 blur-[180px] rounded-full -z-10" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-orange-900/10 blur-[120px] rounded-full -z-10" />
        
        <div className="max-w-6xl mx-auto text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full mb-8"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
            </span>
            <span className="text-[10px] font-bold tracking-[0.2em] text-gray-300 uppercase">Solusi Digital Terintegrasi</span>
          </motion.div>
          
          <h1 className="text-5xl md:text-8xl font-black mb-8 leading-[1.1] tracking-tight">
            Koding Lebih <span className="text-orange-500 italic uppercase">Cepat</span> <br />
            Tanpa Batas.
          </h1>
          <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto mb-12 font-light leading-relaxed">
            Dari pembuatan <span className="text-white font-medium underline decoration-orange-500">Web Profesional</span>, bantuan <span className="text-white font-medium underline decoration-orange-500">Tugas IT</span> mendesak, hingga <span className="text-white font-medium underline decoration-orange-500">Belajar</span> Coding.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-6 mb-20">
            <button className="bg-white text-black px-10 py-4 rounded-2xl font-black text-lg hover:bg-orange-500 transition-all active:scale-95">
              Lihat Layanan
            </button>
            <button className="border border-white/10 bg-white/5 backdrop-blur text-white px-10 py-4 rounded-2xl font-black text-lg hover:bg-white/10 transition-all">
              Mulai Konsultasi
            </button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto border-t border-white/5 pt-16">
            {stats.map((s, i) => (
              <div key={i} className="text-center">
                <div className="text-3xl md:text-4xl font-black text-white mb-1 tracking-tighter">{s.value}</div>
                <div className="text-gray-500 text-[10px] uppercase tracking-widest font-bold">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      );
    }