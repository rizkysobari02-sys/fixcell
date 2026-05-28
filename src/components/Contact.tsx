import React, { useState } from 'react';
import { MessageSquare, Phone, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', phone: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Merangkai teks pesan untuk WhatsApp
    const text = `Halo Fix Cell, saya ${formData.name}.%0A%0ANomor HP/WA: ${formData.phone}%0A%0APesan/Keluhan:%0A${formData.message}`;
    const waUrl = `https://wa.me/628132968772?text=${text}`;
    
    // Membuka WhatsApp di tab baru
    window.open(waUrl, '_blank');
    
    // Mengosongkan form
    setFormData({ name: '', phone: '', message: '' });
  };

  return (
    <section id="kontak" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          <div className="flex-1">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Siap Memperbaiki Ponsel Anda?</h2>
            <p className="text-lg text-slate-600 mb-8">
              Hubungi kami untuk konsultasi kerusakan, menanyakan ketersediaan sparepart, atau mendaftar program pelatihan teknisi kami.
            </p>
            
            <div className="space-y-6 mb-10">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-lg">WhatsApp / Telepon</h4>
                  <p className="text-slate-600">0813-296-8772</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-lg">Lokasi Workshop</h4>
                  <p className="text-slate-600">Pusat Komunitas Desa, Jalan Raya No. 123</p>
                </div>
              </div>
            </div>

            <a 
              href="https://wa.me/628132968772" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white px-8 py-4 rounded-xl font-bold text-lg transition-colors w-full sm:w-auto"
            >
              <MessageSquare className="w-6 h-6" />
              Hubungi via WhatsApp
            </a>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex-1 bg-slate-50 p-8 rounded-3xl border border-slate-100"
          >
            <h3 className="text-2xl font-bold text-slate-900 mb-6">Kirim Pesan Cepat</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">Nama Lengkap</label>
                <input 
                  type="text" 
                  id="name" 
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                  placeholder="Budi Santoso"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-1">Nomor HP/WA</label>
                <input 
                  type="tel" 
                  id="phone" 
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                  placeholder="08123456789"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">Pesan / Keluhan</label>
                <textarea 
                  id="message" 
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all resize-none"
                  placeholder="Ceritakan kendala HP Anda..."
                ></textarea>
              </div>
              <button 
                type="submit" 
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl transition-colors flex justify-center items-center gap-2"
              >
                <MessageSquare className="w-5 h-5" />
                Kirim via WhatsApp
              </button>
              <p className="text-xs text-slate-500 text-center mt-3">
                Form ini akan otomatis membuka aplikasi WhatsApp Anda.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
