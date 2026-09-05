import React from 'react';

export default function Navbar() {
  return (
    <div className="hero-nav-wrap fixed top-5 left-0 right-0 z-[9999] px-4">
      <nav className="max-w-[1440px] mx-auto bg-[#fcfaf7]/85 backdrop-blur-[16px] border border-[rgba(47,49,45,0.08)] px-6 py-4 clip-nav flex items-center justify-between shadow-sm">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-[#8fa08c] clip-badge flex items-center justify-center text-white font-bold text-lg">
            C
          </div>
          <div>
            <span className="font-bold text-lg tracking-tight block leading-none">Cleanecs</span>
            <span className="text-xs text-[#6b6e67] font-medium tracking-widest uppercase">Koh Samui</span>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-[#2f312d]">
          <a href="#services" className="hover:text-[#8fa08c] transition-colors">Services</a>
          <a href="#process" className="hover:text-[#8fa08c] transition-colors">Process</a>
          <a href="#about" className="hover:text-[#8fa08c] transition-colors">About</a>
          <a href="#testimonials" className="hover:text-[#8fa08c] transition-colors">Reviews</a>
          <a href="#faq" className="hover:text-[#8fa08c] transition-colors">FAQ</a>
        </div>

        <div className="flex items-center gap-4">
          <a 
            href="tel:+66000000000" 
            className="hidden sm:flex items-center gap-2 text-xs font-semibold text-[#2f312d] bg-[#f4efe8] px-3 py-2 clip-badge border border-[rgba(47,49,45,0.06)]"
          >
            <iconify-icon icon="solar:phone-calling-bold-duotone" className="text-[#8fa08c] text-base"></iconify-icon>
            <span>+66 (0) 77 000 000</span>
          </a>
          <a 
            href="#booking" 
            className="bg-[#2f312d] text-[#f7f3ee] px-5 py-2.5 text-xs font-bold uppercase tracking-wider clip-btn hover:bg-[#8fa08c] transition-colors"
          >
            Book Service
          </a>
        </div>
      </nav>
    </div>
  );
}