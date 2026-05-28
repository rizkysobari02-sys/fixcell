import React, { useState, useEffect } from 'react';
import { Menu, X, Wrench } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Layanan', href: '#layanan' },
    { name: 'Tentang', href: '#tentang' },
    { name: 'Kontak', href: '#kontak' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <a href="#home" className="flex items-center gap-2 text-blue-700">
            <Wrench className="w-8 h-8" />
            <span className="text-2xl font-bold tracking-tight">Fix Cell</span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className={`font-medium hover:text-blue-600 transition-colors ${scrolled ? 'text-slate-700' : 'text-slate-800'}`}>
                {link.name}
              </a>
            ))}
            <a href="https://wa.me/628132968772" target="_blank" rel="noopener noreferrer" className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-full font-medium transition-colors shadow-sm">
              Hubungi Kami
            </a>
          </div>

          {/* Mobile Toggle */}
          <button className="md:hidden text-slate-800" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg border-t border-slate-100 py-4 px-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-slate-700 font-medium py-2 border-b border-slate-50"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a 
            href="https://wa.me/628132968772" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="bg-blue-600 text-white text-center py-3 rounded-lg font-medium mt-2"
            onClick={() => setIsOpen(false)}
          >
            Hubungi Kami
          </a>
        </div>
      )}
    </nav>
  );
}
