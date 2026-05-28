import React from 'react';
import { ShieldCheck, MapPin, Wallet, AlertCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const featuresData = [
  {
    id: 1,
    title: 'Teknisi Bersertifikat Kompetensi',
    description: 'Setiap perbaikan ditangani langsung oleh teknisi yang telah lulus uji kompetensi resmi.',
    icon: 'ShieldCheck'
  },
  {
    id: 2,
    title: 'Layanan Langsung di Komunitas Lokal',
    description: 'Hadir langsung di desa Anda. Tidak perlu lagi menghabiskan waktu dan biaya transportasi ke kota.',
    icon: 'MapPin'
  },
  {
    id: 3,
    title: 'Harga Terjangkau',
    description: 'Kami menawarkan harga servis dan sparepart yang jujur, transparan, dan ramah di kantong.',
    icon: 'Wallet'
  }
];

const iconMap: Record<string, React.ReactNode> = {
  ShieldCheck: <ShieldCheck className="w-8 h-8" />,
  MapPin: <MapPin className="w-8 h-8" />,
  Wallet: <Wallet className="w-8 h-8" />
};

export default function Features() {
  return (
    <section className="py-20 bg-blue-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Mengapa Memilih Kami?</h2>
          <p className="text-lg text-slate-600">
            Nilai lebih yang membuat Fix Cell menjadi pilihan utama masyarakat.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuresData.map((feature, index) => (
            <motion.div 
              key={feature.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow flex flex-col items-center text-center"
            >
              <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mb-6">
                {iconMap[feature.icon] || <AlertCircle className="w-8 h-8" />}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
              <p className="text-slate-600">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
