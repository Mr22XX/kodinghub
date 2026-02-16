const workflows = [
  { title: "Konsultasi", desc: "Diskusikan kebutuhan proyek atau tugas kodingmu secara mendetail via chat atau meeting." },
  { title: "Pengerjaan", desc: "Tim ahli kami mulai membangun sistem atau mengerjakan tugas dengan standar clean code." },
  { title: "Review & Revisi", desc: "Kamu mengecek hasilnya. Kami berikan garansi revisi jika ada yang belum sesuai." },
  { title: "Serah Terima", desc: "Dapatkan file source code lengkap beserta dokumentasi dan penjelasan cara kerjanya." },
];
      {/* CARA KERJA / WORKFLOW SECTION */}
       export default function Workflow() {
        return(
      <section id="workflow" className="py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-3xl font-black uppercase italic tracking-widest">Cara Kerja Kami</h2>
            <div className="h-1 w-20 bg-orange-500 mx-auto mt-4"></div>
          </div>
          <div className="grid md:grid-cols-4 gap-12">
            {workflows.map((flow, i) => (
              <div key={i} className="relative group">
                <div className="text-6xl font-black text-white/5 absolute -top-10 left-0 group-hover:text-orange-500/10 transition-colors">0{i+1}</div>
                <h4 className="text-xl font-bold mb-4 relative z-10">{flow.title}</h4>
                <p className="text-gray-500 text-sm leading-relaxed">{flow.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
        );
    }