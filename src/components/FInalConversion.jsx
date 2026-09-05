import React, { useState } from 'react';
 
const FAQS = [
  {
    q: "Are your cleaning products safe for natural stone and teak wood?",
    a: "Yes. Tropical luxury villas feature delicate surfaces like marble, granite, and untreated teak. We exclusively use pH-balanced, eco-friendly formulations specifically tested to protect high-end materials."
  },
  {
    q: "Do I need to be present during the cleaning session?",
    a: "Not at all. Most of our villa owners and property managers provide secure access codes or key cards. Our team is fully insured, vetted, and supervised for total peace of mind."
  },
  {
    q: "How do you service properties across different areas of Koh Samui?",
    a: "Our mobile teams are stationed across strategic zones (Chaweng, Bophut, Lamai, Maenam, and Lipa Noi), allowing us to provide rapid scheduling and consistent quality island-wide."
  },
  {
    q: "Can I set up a recurring maintenance contract?",
    a: "Yes, we offer customized weekly, bi-weekly, and monthly maintenance subscriptions tailored to your occupancy schedule."
  }
];

export default function FinalConversion() {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <section id="booking" className="py-24 bg-[#f7f3ee]">
      <div className="max-w-[1440px] mx-auto px-6">
        
        {/* Split Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-20">
          
          {/* Left Context Side (#f4efe8 gradient) */}
          <div className="lg:col-span-5 bg-[#f4efe8] border border-[rgba(47,49,45,0.08)] p-8 sm:p-12 clip-card flex flex-col justify-between scroll-reveal">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#8fa08c] block mb-3">Get in Touch</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#2f312d] tracking-tight mb-6">
                Ready for <span className="font-serif-italic text-[#8fa08c]">impeccable</span> villa care?
              </h2>
              <p className="text-sm text-[#6b6e67] mb-8 leading-relaxed">
                Contact our Koh Samui coordination team today to schedule an on-site property evaluation or book your customized cleaning service.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3 text-sm text-[#2f312d]">
                  <iconify-icon icon="solar:phone-calling-bold-duotone" className="text-xl text-[#8fa08c]"></iconify-icon>
                  <span>+66 (0) 77 000 000 / Direct WhatsApp available</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-[#2f312d]">
                  <iconify-icon icon="solar:letter-bold-duotone" className="text-xl text-[#8fa08c]"></iconify-icon>
                  <span>concierge@cleanecs-samui.com</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-[#2f312d]">
                  <iconify-icon icon="solar:map-point-bold-duotone" className="text-xl text-[#8fa08c]"></iconify-icon>
                  <span>Bophut, Koh Samui, Surat Thani 84320</span>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-[rgba(47,49,45,0.08)]">
              <p className="text-xs text-[#6b6e67]">Response time: Under 2 hours during operational hours (8:00 AM – 6:00 PM ICT).</p>
            </div>
          </div>

          {/* Right Form Side (#fcfaf7 gradient) */}
          <div className="lg:col-span-7 bg-[#fcfaf7] border border-[rgba(47,49,45,0.08)] p-8 sm:p-12 clip-card scroll-reveal">
            {formSubmitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12">
                <div className="w-16 h-16 bg-[#8fa08c] text-white clip-badge flex items-center justify-center text-3xl mb-4">
                  <iconify-icon icon="solar:check-read-bold"></iconify-icon>
                </div>
                <h3 className="text-2xl font-bold text-[#2f312d] mb-2">Request Received</h3>
                <p className="text-sm text-[#6b6e67] max-w-md">
                  Thank you. Our concierge team will review your details and contact you shortly via phone or WhatsApp.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <h3 className="text-xl font-bold text-[#2f312d] mb-4">Schedule Your Consultation</h3>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#6b6e67] mb-2">Full Name</label>
                    <input 
                      required 
                      type="text" 
                      placeholder="Marcus Vance" 
                      className="w-full bg-[#f4efe8] border border-[rgba(47,49,45,0.1)] px-4 py-3 clip-badge text-sm text-[#2f312d] focus:outline-none focus:border-[#8fa08c]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#6b6e67] mb-2">Phone / WhatsApp</label>
                    <input 
                      required 
                      type="tel" 
                      placeholder="+66 89 000 0000" 
                      className="w-full bg-[#f4efe8] border border-[rgba(47,49,45,0.1)] px-4 py-3 clip-badge text-sm text-[#2f312d] focus:outline-none focus:border-[#8fa08c]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#6b6e67] mb-2">Villa Location</label>
                    <input 
                      required 
                      type="text" 
                      placeholder="Chaweng Noi, Koh Samui" 
                      className="w-full bg-[#f4efe8] border border-[rgba(47,49,45,0.1)] px-4 py-3 clip-badge text-sm text-[#2f312d] focus:outline-none focus:border-[#8fa08c]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#6b6e67] mb-2">Service Type</label>
                    <select 
                      className="w-full bg-[#f4efe8] border border-[rgba(47,49,45,0.1)] px-4 py-3 clip-badge text-sm text-[#2f312d] focus:outline-none focus:border-[#8fa08c]"
                    >
                      <option>Luxury Villa Maintenance</option>
                      <option>Deep Sanitization & Care</option>
                      <option>Post-Construction Clean</option>
                      <option>Turnkey Turnover Service</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#6b6e67] mb-2">Additional Notes / Requirements</label>
                  <textarea 
                    rows="4" 
                    placeholder="Tell us about your property size and preferred schedule..." 
                    className="w-full bg-[#f4efe8] border border-[rgba(47,49,45,0.1)] px-4 py-3 clip-card text-sm text-[#2f312d] focus:outline-none focus:border-[#8fa08c]"
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  className="w-full bg-[#2f312d] text-[#f7f3ee] py-4 text-xs font-bold uppercase tracking-widest clip-btn hover:bg-[#8fa08c] transition-colors shadow-md"
                >
                  Submit Consultation Request
                </button>
              </form>
            )}
          </div>

        </div>

        {/* FAQ Accordion Section using Native details/summary */}
        <div id="faq" className="max-w-3xl mx-auto pt-12 border-t border-[rgba(47,49,45,0.08)] scroll-reveal">
          <div className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-[#8fa08c] block mb-2">Common Questions</span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#2f312d]">Frequently Asked Questions</h3>
          </div>

          <div className="space-y-4">
            {FAQS.map((faq, idx) => (
              <details 
                key={idx}
                className="group bg-[#fcfaf7] border border-[rgba(47,49,45,0.08)] clip-card p-6 open:bg-[#fcfaf7]"
              >
                <summary className="flex justify-between items-center cursor-pointer font-bold text-[#2f312d] text-base select-none">
                  <span>{faq.q}</span>
                  <iconify-icon icon="solar:alt-arrow-down-linear" className="text-xl text-[#8fa08c] transition-transform duration-300 group-open:rotate-180"></iconify-icon>
                </summary>
                <p className="mt-4 text-sm text-[#6b6e67] leading-relaxed pt-4 border-t border-[rgba(47,49,45,0.06)]">
                  {faq.a}
                </p>
              </details>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}