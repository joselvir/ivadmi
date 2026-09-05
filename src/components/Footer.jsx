import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-[#2f312d] text-[#f7f3ee] py-16">
      <div className="max-w-[1440px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 pb-12 border-b border-white/10">
          
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-[#8fa08c] clip-badge flex items-center justify-center text-white font-bold text-lg">
                C
              </div>
              <div>
                <span className="font-bold text-lg tracking-tight block leading-none">Cleanecs</span>
                <span className="text-xs text-[#d4c5b9] font-medium tracking-widest uppercase">Koh Samui</span>
              </div>
            </div>
            <p className="text-xs text-[#d4c5b9] leading-relaxed">
              Hospitality-grade property maintenance and villa care solutions tailored for elite residences in Koh Samui, Thailand.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-sm uppercase tracking-wider mb-4 text-[#8fa08c]">Navigation</h4>
            <ul className="space-y-2 text-xs text-[#d4c5b9]">
              <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
              <li><a href="#process" className="hover:text-white transition-colors">Process</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#testimonials" className="hover:text-white transition-colors">Testimonials</a></li>
              <li><a href="#faq" className="hover:text-white transition-colors">FAQ</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-sm uppercase tracking-wider mb-4 text-[#8fa08c]">Services</h4>
            <ul className="space-y-2 text-xs text-[#d4c5b9]">
              <li><span className="hover:text-white transition-colors cursor-pointer">Villa Maintenance</span></li>
              <li><span className="hover:text-white transition-colors cursor-pointer">Deep Sanitization</span></li>
              <li><span className="hover:text-white transition-colors cursor-pointer">Post-Construction</span></li>
              <li><span className="hover:text-white transition-colors cursor-pointer">Poolside Living Care</span></li>
              <li><span className="hover:text-white transition-colors cursor-pointer">Turnkey Turnover</span></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-sm uppercase tracking-wider mb-4 text-[#8fa08c]">Island Office</h4>
            <p className="text-xs text-[#d4c5b9] leading-relaxed mb-4">
              Bophut Hills Estate, Tambon Bophut, Ko Samui District, Surat Thani 84320, Thailand
            </p>
            <p className="text-xs text-[#8fa08c] font-bold">
              Mon - Sat: 8:00 AM - 6:00 PM ICT
            </p>
          </div>

        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#d4c5b9]">
          <p>© {new Date().getFullYear()} Cleanecs Koh Samui. All rights reserved.</p>
          <div className="flex gap-6 mt-4 sm:mt-0">
            <span className="hover:text-white cursor-pointer transition-colors">Privacy Policy</span>
            <span className="hover:text-white cursor-pointer transition-colors">Terms of Service</span>
            <span className="hover:text-white cursor-pointer transition-colors">Insurance Details</span>
          </div>
        </div>
      </div>
    </footer>
  );
}