import React from 'react';
import { Wrench, Facebook, Instagram, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-8 border-t border-slate-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <a href="#home" className="flex items-center gap-2 text-white mb-6">
              <Wrench className="w-8 h-8 text-blue-500" />
              <span className="text-2xl font-bold tracking-tight">Fix Cell</span>
            </a>
            <p className="text-slate-400 mb-6 max-w-sm">
              Solusi reparasi ponsel terpercaya di desa Anda. Memberdayakan anak muda lokal melalui teknologi.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Tautan Cepat</h4>
            <ul className="space-y-3">
              <li><a href="#home" className="hover:text-blue-400 transition-colors">Beranda</a></li>
              <li><a href="#layanan" className="hover:text-blue-400 transition-colors">Layanan Kami</a></li>
              <li><a href="#tentang" className="hover:text-blue-400 transition-colors">Tentang Kami</a></li>
              <li><a href="#kontak" className="hover:text-blue-400 transition-colors">Hubungi Kami</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Program Kami</h4>
            <ul className="space-y-3">
              <li><a href="#kontak" className="hover:text-blue-400 transition-colors">Daftar Pelatihan Teknisi</a></li>
              <li><a href="#kontak" className="hover:text-blue-400 transition-colors">Mitra Sparepart</a></li>
              <li><a href="#kontak" className="hover:text-blue-400 transition-colors">Karir & Magang</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
          <p>&copy; {new Date().getFullYear()} Fix Cell. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Kebijakan Privasi</a>
            <a href="#" className="hover:text-white transition-colors">Syarat & Ketentuan</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
