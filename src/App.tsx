import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Features from './components/Features';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <About />
        <Features />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
