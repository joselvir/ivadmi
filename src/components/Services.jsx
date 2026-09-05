import React from 'react';

const SERVICES_DATA = [
  {
    title: "Luxury Villa Maintenance",
    desc: "Comprehensive routine upkeep designed specifically for high-end residential estates across Samui.",
    img: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1763d73d-98e3-4f93-8ba9-5de15f69e6b3_1600w.png",
    tag: "Most Popular",
    columnStyle: "outer"
  },
  {
    title: "Deep Sanitization & Care",
    desc: "Intensive cleaning targeting hard-to-reach areas, upholstery, and climate systems for pure indoor air.",
    img: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/2ac34355-6627-4c4d-a912-fbf34892c90c_1600w.png",
    tag: "Specialized",
    columnStyle: "middle"
  },
  {
    title: "Post-Construction Clean",
    desc: "Transforming newly built or renovated luxury properties into immaculate, move-in-ready sanctuaries.",
    img: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/a49edbad-9c86-4f7f-8557-4cc9e08323fa_1600w.png",
    tag: "Detail Oriented",
    columnStyle: "outer"
  },
  {
    title: "Poolside & Outdoor Living",
    desc: "Detailed cleaning of terraces, lounge decks, and outdoor entertainment spaces to counter tropical dust.",
    img: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/bb5ef409-fec4-4e48-bc6b-3bcbe9992f15_1600w.png",
    tag: "Tropical Care",
    columnStyle: "outer"
  },
  {
    title: "Turnkey Turnover Service",
    desc: "Rapid, flawless staging and cleaning for short-term luxury rentals and VIP guest arrivals.",
    img: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/7efdba9f-240a-40a2-aa75-a05ff79efdb6_1600w.png",
    tag: "Hospitality Grade",
    columnStyle: "middle"
  },
  {
    title: "Custom Estate Management",
    desc: "Tailored multi-service schedules combining housekeeping, window care, and dedicated oversight.",
    img: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/3cb4edb7-7e60-449e-b7d6-95ff0d116c47_1600w.png",
    tag: "Bespoke",
    columnStyle: "outer"
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-[#fcfaf7]">
      <div className="max-w-[1440px] mx-auto px-6">
        
        <div className="text-center max-w-2xl mx-auto mb-16 scroll-reveal">
          <span className="text-xs font-bold uppercase tracking-widest text-[#8fa08c] block mb-3">Our Core Offerings</span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#2f312d] tracking-tight mb-4">
            Services crafted for <span className="font-serif-italic text-[#8fa08c]">ultimate comfort</span>.
          </h2>
          <p className="text-sm sm:text-base text-[#6b6e67]">
            Every service is executed with strict quality protocols and eco-friendly agents safe for families and natural stone surfaces.
          </p>
        </div>

        {/* 3-Column Precise Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES_DATA.map((srv, idx) => {
            const isMiddle = srv.columnStyle === 'middle';
            const bgClass = isMiddle ? 'bg-[#f4efe8]' : 'bg-[#f7f3ee]';
            const delayStyle = { transitionDelay: `${(idx % 3) * 0.08}s` };

            return (
              <div 
                key={idx}
                className={`scroll-reveal ${bgClass} border border-[rgba(47,49,45,0.08)] clip-card overflow-hidden flex flex-col group`}
                style={delayStyle}
              >
                {/* Media Container with 16/10 Aspect Ratio */}
                <div className="relative aspect-[16/10] overflow-hidden bg-[#e9e3dc]">
                  <img 
                    src={srv.img} 
                    alt={srv.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                    loading="lazy"
                  />
                  <div className="absolute top-4 left-4 bg-[#fcfaf7]/90 backdrop-blur-sm px-3 py-1 clip-badge text-[10px] font-bold uppercase tracking-wider text-[#2f312d]">
                    {srv.tag}
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-8 flex flex-col flex-grow justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-[#2f312d] mb-3 group-hover:text-[#8fa08c] transition-colors">
                      {srv.title}
                    </h3>
                    <p className="text-sm text-[#6b6e67] leading-relaxed mb-6">
                      {srv.desc}
                    </p>
                  </div>

                  <a 
                    href="#booking" 
                    className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#2f312d] group-hover:text-[#8fa08c] transition-colors"
                  >
                    <span>Request Details</span>
                    <iconify-icon icon="solar:arrow-right-linear" className="text-base transition-transform group-hover:translate-x-1"></iconify-icon>
                  </a>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}