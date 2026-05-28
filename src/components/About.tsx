import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="tentang" className="py-20 bg-slate-900 text-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex-1 relative"
          >
            <div className="absolute -inset-4 bg-blue-500/20 rounded-3xl blur-2xl"></div>
            <img 
              src="/images/about-training.jpg" 
              alt="Pelatihan Teknisi Fix Cell" 
              className="relative rounded-2xl shadow-2xl border border-slate-700 w-full object-cover aspect-[4/3]"
              onError={(e) => {
                e.currentTarget.src = 'https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&q=80&w=1000';
              }}
            />
            <div className="absolute -bottom-6 -right-6 bg-blue-600 text-white p-6 rounded-2xl shadow-xl hidden md:block">
              <p className="text-3xl font-bold mb-1">100+</p>
              <p className="text-sm font-medium opacity-90">Teknisi Terlatih</p>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex-1"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Membangun Kemandirian Teknologi di Desa</h2>
            <p className="text-slate-300 text-lg mb-6 leading-relaxed">
              Fix Cell lahir dari kepedulian terhadap sulitnya akses perbaikan perangkat seluler di daerah terpencil. Kami hadir untuk memangkas biaya transportasi warga yang biasanya harus ke kota hanya untuk servis HP.
            </p>
            <p className="text-slate-300 text-lg mb-8 leading-relaxed">
              Lebih dari sekadar tempat servis, visi utama kami adalah memberdayakan anak muda lokal—mulai dari pelajar SMK hingga karang taruna—melalui pelatihan teknisi dasar agar mereka siap kerja dan mandiri.
            </p>
            
            <ul className="space-y-4">
              {[
                'Memberdayakan pemuda lokal (17-35 tahun)',
                'Solusi perbaikan dekat dan terjangkau',
                'Mencetak teknisi ahli bersertifikat'
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="w-6 h-6 text-blue-400 flex-shrink-0" />
                  <span className="text-slate-200 font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
