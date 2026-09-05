import React from 'react';
 
export default function Hero() {
  return (
    <section className="relative min-h-[92vh] pt-32 pb-20 flex items-center overflow-hidden">
      {/* Background Layer Stack */}
      <div 
        className="hero-bg absolute inset-0 z-0 scale-[1.01] bg-cover bg-center"
        style={{
          backgroundImage: `url('https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/0b9f293f-1d43-45a5-8afa-a26a8259ca55_1600w.png')`
        }}
      >
        <div 
          className="absolute inset-0"
          style={{
            background: `linear-gradient(180deg, rgba(247,243,238,0.92) 0%, rgba(247,243,238,0.75) 50%, rgba(247,243,238,0.98) 100%),
                         radial-gradient(circle at 70% 30%, rgba(143,160,140,0.15) 0%, transparent 60%)`
          }}
        />
      </div>

      {/* Grid Lines Pattern */}
      <div 
        className="hero-grid-lines absolute inset-0 z-[1] pointer-events-none opacity-[0.45]" 
        style={{
          backgroundImage: 'linear-gradient(to right, rgba(47, 49, 45, 0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(47, 49, 45, 0.05) 1px, transparent 1px)',
          backgroundSize: '60px 60px'
        }}
      />

      {/* Shell Content */}
      <div className="hero-shell relative z-[2] max-w-[1440px] mx-auto px-6 w-full">
        <div className="hero-content grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Hero Copy */}
          <div className="hero-copy lg:col-span-7 hero-fade-up">
            <div className="inline-flex items-center gap-2 bg-[#f4efe8] border border-[rgba(47,49,45,0.08)] px-3 py-1.5 clip-badge mb-6">
              <span className="w-2 h-2 rounded-full bg-[#8fa08c] animate-pulse"></span>
              <span className="text-xs font-bold uppercase tracking-wider text-[#2f312d]">Premier Island Maintenance</span>
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-[#2f312d] leading-[1.1] mb-6">
              Pristine spaces for <span className="font-serif-italic text-[#8fa08c]">luxury villas</span> in Koh Samui.
            </h1>

            <p className="text-base sm:text-lg text-[#6b6e67] max-w-xl mb-8 leading-relaxed">
              Meticulous property care, specialized deep cleaning, and hospitality-grade housekeeping tailored for discerning homeowners across the island.
            </p>

            <div className="flex flex-wrap items-center gap-4 mb-10">
              <a 
                href="#booking" 
                className="bg-[#2f312d] text-[#f7f3ee] px-8 py-4 text-xs font-bold uppercase tracking-widest clip-btn hover:bg-[#8fa08c] transition-all shadow-md"
              >
                Schedule Consultation
              </a>
              <a 
                href="#services" 
                className="bg-[#fcfaf7] text-[#2f312d] border border-[rgba(47,49,45,0.15)] px-8 py-4 text-xs font-bold uppercase tracking-widest clip-btn hover:border-[#8fa08c] transition-all"
              >
                Explore Services
              </a>
            </div>

            {/* Trust Stack */}
            <div className="hero-trust-stack flex items-center gap-4 pt-4 border-t border-[rgba(47,49,45,0.08)]">
              <div className="flex -space-x-2">
                <div className="w-9 h-9 rounded-full bg-[#8fa08c] border-2 border-[#f7f3ee] flex items-center justify-center text-white text-xs font-bold">VS</div>
                <div className="w-9 h-9 rounded-full bg-[#2f312d] border-2 border-[#f7f3ee] flex items-center justify-center text-white text-xs font-bold">LM</div>
                <div className="w-9 h-9 rounded-full bg-[#d4c5b9] border-2 border-[#f7f3ee] flex items-center justify-center text-[#2f312d] text-xs font-bold">+250</div>
              </div>
              <div>
                <div className="flex items-center gap-1 text-amber-600">
                  <iconify-icon icon="solar:star-bold" className="text-sm"></iconify-icon>
                  <iconify-icon icon="solar:star-bold" className="text-sm"></iconify-icon>
                  <iconify-icon icon="solar:star-bold" className="text-sm"></iconify-icon>
                  <iconify-icon icon="solar:star-bold" className="text-sm"></iconify-icon>
                  <iconify-icon icon="solar:star-bold" className="text-sm"></iconify-icon>
                </div>
                <p className="text-xs text-[#6b6e67] font-medium">Trusted by 250+ luxury villa owners in Koh Samui</p>
              </div>
            </div>
          </div>

          {/* Hero Visual Card */}
          <div className="hero-visual lg:col-span-5 relative">
            <div className="hero-floating-card hero-float-soft bg-[#fcfaf7]/90 backdrop-blur-md border border-[rgba(47,49,45,0.1)] p-6 clip-card shadow-xl relative z-10">
              <div className="absolute top-4 right-4 bg-[#f4efe8] px-3 py-1 clip-badge text-[10px] font-bold uppercase tracking-wider text-[#8fa08c]">
                Live Status
              </div>
              
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-[#8fa08c]/20 clip-badge flex items-center justify-center text-[#8fa08c] text-xl">
                  <iconify-icon icon="solar:shield-check-bold-duotone"></iconify-icon>
                </div>
                <div>
                  <h3 className="font-bold text-[#2f312d]">100% Insured & Vetted</h3>
                  <p className="text-xs text-[#6b6e67]">Rigorous background checks & professional training</p>
                </div>
              </div>

              <div className="space-y-3 pt-4 border-t border-[rgba(47,49,45,0.06)]">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-[#6b6e67]">Villa Deep Cleaning</span>
                  <span className="font-bold text-[#2f312d]">Available</span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-[#6b6e67]">Eco-Friendly Products</span>
                  <span className="font-bold text-[#8fa08c]">100% Organic</span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-[#6b6e67]">Satisfaction Guarantee</span>
                  <span className="font-bold text-[#2f312d]">Risk-Free</span>
                </div>
              </div>
            </div>

            {/* Decorative element behind card */}
            <div className="absolute -bottom-6 -right-6 w-72 h-72 bg-[#8fa08c]/10 clip-card -z-10 pointer-events-none"></div>
          </div>

        </div>
      </div>
    </section>
  );
}