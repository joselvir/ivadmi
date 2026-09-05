import React from 'react';
import { useScrollReveal } from './hooks/useScrollReveal';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Process from './components/Process';
import About from './components/About';
import Testimonials from './components/Testimonials';
import FinalConversion from './components/FinalConversion';
import Footer from './components/Footer';

export default function App() {
  useScrollReveal();

  return (
    <div className="min-h-screen bg-[#f7f3ee] text-[#2f312d]">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Process />
        <About />
        <Testimonials />
        <FinalConversion />
      </main>
      <Footer />
    </div>
  );
}