import React from 'react';
 
export default function Process() {
  return (
    <section id="process" className="py-24 bg-[#f7f3ee] relative overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text */}
          <div className="lg:col-span-5 scroll-reveal">
            <span className="text-xs font-bold uppercase tracking-widest text-[#8fa08c] block mb-3">Methodology</span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-[#2f312d] tracking-tight mb-6">
              A streamlined approach to <span className="font-serif-italic text-[#8fa08c]">perfection</span>.
            </h2>
            <p className="text-sm sm:text-base text-[#6b6e67] mb-8 leading-relaxed">
              From initial assessment to final inspection, our structured workflows ensure zero friction and exceptional attention to detail across your entire property.
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-[#8fa08c] text-white flex items-center justify-center font-bold text-xs shrink-0 mt-1">1</div>
                <div>
                  <h4 className="font-bold text-[#2f312d]">Assessment & Scope</h4>
                  <p className="text-xs text-[#6b6e67]">Tailored evaluation of your villa's specific surface materials and requirements.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-[#8fa08c] text-white flex items-center justify-center font-bold text-xs shrink-0 mt-1">2</div>
                <div>
                  <h4 className="font-bold text-[#2f312d]">Execution & Care</h4>
                  <p className="text-xs text-[#6b6e67]">Trained specialists implement eco-friendly treatments and rigorous sanitization.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-[#8fa08c] text-white flex items-center justify-center font-bold text-xs shrink-0 mt-1">3</div>
                <div>
                  <h4 className="font-bold text-[#2f312d]">Quality Sign-off</h4>
                  <p className="text-xs text-[#6b6e67]">Strict supervisor check to guarantee uncompromising standards.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Visual Complex Stack */}
          <div className="lg:col-span-7 relative flex justify-center items-center py-12 scroll-reveal">
            <div className="relative w-full max-w-lg aspect-square">
              
              {/* Plane Back */}
              <div className="process-plane-back absolute inset-4 bg-[#f4efe8] border border-[rgba(47,49,45,0.08)] clip-card transform -rotate-[10deg] shadow-lg flex items-center justify-center p-8">
                <div className="opacity-40 text-right">
                  <span className="text-xs uppercase font-bold tracking-widest text-[#8fa08c]">Phase 01</span>
                  <p className="text-2xl font-bold text-[#2f312d]">Initial Plan</p>
                </div>
              </div>

              {/* Plane Mid */}
              <div className="process-plane-mid absolute inset-8 bg-[#fcfaf7] border border-[rgba(47,49,45,0.1)] clip-card transform -rotate-[6deg] shadow-xl flex items-center justify-center p-8">
                <div className="opacity-70 text-center">
                  <span className="text-xs uppercase font-bold tracking-widest text-[#8fa08c]">Phase 02</span>
                  <p className="text-2xl font-bold text-[#2f312d]">Specialized Treatment</p>
                </div>
              </div>

              {/* Plane Front */}
              <div className="process-plane-front absolute inset-12 bg-[#2f312d] text-[#f7f3ee] clip-card transform -rotate-[3deg] shadow-2xl flex flex-col justify-between p-8">
                <div className="flex justify-between items-center">
                  <span className="text-xs uppercase font-bold tracking-widest text-[#8fa08c]">Final Delivery</span>
                  <iconify-icon icon="solar:verified-check-bold-duotone" className="text-2xl text-[#8fa08c]"></iconify-icon>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">Immaculate Result</h3>
                  <p className="text-xs text-[#d4c5b9]">Delivering hospitality-grade perfection for your Koh Samui retreat.</p>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}