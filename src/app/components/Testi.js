import { 
Star
} from 'lucide-react';
      {/* TESTIMONI SINGKAT */}
       export default function Testi() {
        return(
      <section className="py-24 bg-orange-500 text-black px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-8">
            {[1,2,3,4,5].map(i => <Star key={i} className="w-8 h-8 fill-black" />)}
          </div>
          <p className="text-2xl md:text-4xl font-black italic leading-tight mb-8">
            "Koding Hub benar-benar penyelamat! Tugas dan Laprak koding saya selesai lebih cepat dan saya dijelaskan setiap bagian kodenya sampai paham."
          </p>
          <div className="font-bold tracking-widest uppercase text-sm">— Mr B, Mahasiswa IT</div>
        </div>
      </section>
        );
    }