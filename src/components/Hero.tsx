import React from 'react';
import { ArrowRight, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-gradient-to-br from-blue-50 to-white">
      <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-50 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-64 h-64 bg-blue-200 rounded-full blur-3xl opacity-30 pointer-events-none"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex-1 text-center md:text-left"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-100 text-blue-800 text-sm font-semibold mb-6">
              <ShieldCheck className="w-4 h-4" />
              <span>Teknisi Bersertifikat Kompetensi</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight mb-6">
              Solusi Lengkap <span className="text-blue-600">Dunia Ponsel</span> di Desa Anda
            </h1>
            <p className="text-lg md:text-xl text-slate-600 mb-8 max-w-2xl mx-auto md:mx-0">
              Reparasi cepat, sparepart berkualitas, dan pelatihan teknisi dasar. Kami memangkas jarak untuk membawa layanan profesional langsung ke komunitas Anda.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a 
                href="https://wa.me/628132968772" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-bold text-lg transition-all shadow-lg hover:shadow-blue-600/30"
              >
                Konsultasi Servis Sekarang
                <ArrowRight className="w-5 h-5" />
              </a>
              <a 
                href="#layanan" 
                className="inline-flex items-center justify-center px-8 py-4 rounded-full font-bold text-lg text-blue-700 bg-blue-50 hover:bg-blue-100 transition-colors"
              >
                Pelajari Lebih Lanjut
              </a>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex-1 w-full max-w-lg"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
              <img 
                src="/images/hero-repair.jpg" 
                alt="Teknisi sedang memperbaiki ponsel" 
                className="w-full h-auto object-cover aspect-[4/3]"
                onError={(e) => {
                  e.currentTarget.src = 'https://images.unsplash.com/photo-1597740985671-2a8a3b80502e?auto=format&fit=crop&q=80&w=1000';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
