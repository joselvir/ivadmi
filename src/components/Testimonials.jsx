import React, { useState, useEffect } from 'react';

const REVIEWS = [
  {
    quote: "Cleanecs transformed our estate management. Their attention to detail on delicate marble floors and outdoor wooden decking is unparalleled on Koh Samui.",
    author: "Marcus Vance",
    role: "Villa Owner, Chaweng Noi",
    rating: 5
  },
  {
    quote: "Professional, punctual, and discrete. Managing our luxury rental turnover has never been this stress-free. Our guests constantly compliment the cleanliness.",
    author: "Elena Rostova",
    role: "Property Manager, Bophut",
    rating: 5
  },
  {
    quote: "The only cleaning service on the island I fully trust with my key and security protocols. Absolute top-tier quality every single week.",
    author: "Julian Thorne",
    role: "Homeowner, Lamai",
    rating: 5
  }
];

export default function Testimonials() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % REVIEWS.length);
    }, 5200);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="testimonials" className="py-24 bg-[#f4efe8] overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6">
        
        <div className="text-center max-w-2xl mx-auto mb-16 scroll-reveal">
          <span className="text-xs font-bold uppercase tracking-widest text-[#8fa08c] block mb-3">Client Testimonials</span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#2f312d] tracking-tight">
            Trusted by <span className="font-serif-italic text-[#8fa08c]">discerning owners</span>.
          </h2>
        </div>

        <div className="max-w-3xl mx-auto relative scroll-reveal">
          <div className="overflow-hidden">
            <div 
              className="testimonials-carousel-track flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {REVIEWS.map((rev, idx) => (
                <div key={idx} className="w-full shrink-0 px-4">
                  <div className="bg-[#fcfaf7] border border-[rgba(47,49,45,0.08)] p-8 sm:p-12 clip-card shadow-sm text-center">
                    <div className="flex justify-center gap-1 text-amber-600 mb-6">
                      {[...Array(rev.rating)].map((_, i) => (
                        <iconify-icon key={i} icon="solar:star-bold" className="text-lg"></iconify-icon>
                      ))}
                    </div>
                    <p className="text-base sm:text-xl font-medium text-[#2f312d] mb-8 leading-relaxed italic">
                      "{rev.quote}"
                    </p>
                    <h4 className="font-bold text-base text-[#2f312d]">{rev.author}</h4>
                    <p className="text-xs text-[#6b6e67] uppercase tracking-wider mt-1">{rev.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center items-center gap-3 mt-8">
            {REVIEWS.map((_, idx) => (
              <button 
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                className={`w-3 h-3 clip-badge transition-all ${currentSlide === idx ? 'bg-[#8fa08c] w-6' : 'bg-[#d4c5b9]'}`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}