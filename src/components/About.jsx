import React from 'react';

export default function About() {
  return (
    <section id="about" className="py-24 bg-[#fcfaf7]">
      <div className="max-w-[1440px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Founder Portrait */}
          <div className="lg:col-span-5 relative scroll-reveal">
            <div className="relative aspect-[4/5] max-w-md mx-auto clip-card overflow-hidden border border-[rgba(47,49,45,0.1)]">
              <img 
                src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f0084eec-5f7f-4a16-91cc-f32c1151c832_320w.jpg" 
                alt="Founder Portrait" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2f312d]/80 via-transparent to-transparent flex flex-col justify-end p-6 text-white">
                <h4 className="font-bold text-lg">Stefan & Team</h4>
                <p className="text-xs text-[#f7f3ee]/80">Founders of Cleanecs Koh Samui</p>
              </div>
            </div>
          </div>

          {/* About Text */}
          <div className="lg:col-span-7 scroll-reveal">
            <span className="text-xs font-bold uppercase tracking-widest text-[#8fa08c] block mb-3">Our Philosophy</span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-[#2f312d] tracking-tight mb-6">
              Excellence rooted in <span className="font-serif-italic text-[#8fa08c]">island expertise</span>.
            </h2>
            <p className="text-sm sm:text-base text-[#6b6e67] mb-6 leading-relaxed">
              Founded on Koh Samui, Cleanecs was built to solve the unique challenges of tropical coastal properties. High humidity, sea salt, and fine island dust require specialized maintenance formulas and meticulous care routines that generic services simply cannot provide.
            </p>
            <p className="text-sm sm:text-base text-[#6b6e67] mb-8 leading-relaxed">
              We combine European quality management standards with local insight, ensuring your villa remains an immaculate sanctuary year-round.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 pt-6 border-t border-[rgba(47,49,45,0.08)]">
              <div>
                <h3 className="text-2xl font-extrabold text-[#2f312d]">10+</h3>
                <p className="text-xs text-[#6b6e67]">Years Island Experience</p>
              </div>
              <div>
                <h3 className="text-2xl font-extrabold text-[#2f312d]">250+</h3>
                <p className="text-xs text-[#6b6e67]">Villas Maintained</p>
              </div>
              <div>
                <h3 className="text-2xl font-extrabold text-[#2f312d]">100%</h3>
                <p className="text-xs text-[#6b6e67]">Eco-Safe Guarantee</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}