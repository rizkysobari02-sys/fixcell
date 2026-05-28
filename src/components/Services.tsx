import React from 'react';
import { Wrench, Cpu, GraduationCap, AlertCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const servicesData = [
  {
    id: 1,
    title: 'Reparasi Cepat & Rapi',
    description: 'Perbaikan hardware dan software handphone yang dilakukan dengan cepat, presisi, dan dijamin rapi oleh ahlinya.',
    icon: 'Wrench'
  },
  {
    id: 2,
    title: 'Sparepart Berkualitas',
    description: 'Kami menyediakan komponen pengganti original dan berkualitas tinggi untuk memastikan keawetan perangkat Anda.',
    icon: 'Cpu'
  },
  {
    id: 3,
    title: 'Pelatihan Teknisi Siap Kerja',
    description: 'Program pelatihan khusus untuk anak muda lokal agar memiliki keahlian teknisi handphone dan siap kerja mandiri.',
    icon: 'GraduationCap'
  }
];

const iconMap: Record<string, React.ReactNode> = {
  Wrench: <Wrench className="w-10 h-10" />,
  Cpu: <Cpu className="w-10 h-10" />,
  GraduationCap: <GraduationCap className="w-10 h-10" />
};

export default function Services() {
  return (
    <section id="layanan" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Layanan Kami</h2>
          <p className="text-lg text-slate-600">
            Kami menyediakan solusi menyeluruh untuk kebutuhan perangkat seluler Anda, dikerjakan oleh ahlinya.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <motion.div 
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-slate-50 rounded-2xl p-8 border border-slate-100 hover:shadow-xl hover:border-blue-100 transition-all group"
            >
              <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all">
                {iconMap[service.icon] || <AlertCircle className="w-10 h-10" />}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
              <p className="text-slate-600 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
