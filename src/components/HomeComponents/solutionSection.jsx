import React from 'react';
import man from '../../assets/man.png';

const SolutionsSection = () => {
  return (
    <section className="w-full bg-white flex justify-center items-center py-12 md:py-24 lg:py-32">
      <div className="max-w-[1440px] w-full px-6 md:px-16 lg:px-20 flex flex-col lg:flex-row items-center gap-10 lg:gap-24">
        
        {/* Left Content Column */}
        <div className="w-full flex flex-col lg:flex-1">
          <h2 className="text-3xl md:text-5xl lg:text-[48px] font-medium font-['Inter'] leading-[1.1] tracking-tight text-black mb-6 lg:mb-8">
            Custom Software Solutions
          </h2>

          {/* Mobile Image (Visible only on small screens) */}
          <div className="w-full mb-8 lg:hidden"> 
            <div className="aspect-square w-full bg-gray-50 rounded-sm overflow-hidden relative border border-gray-100 shadow-md">
              <img 
                src={man}
                alt="Solutions" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/10">
                <div className="w-14 h-14 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/40">
                  <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[16px] border-l-white border-b-[10px] border-b-transparent ml-1"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div className="flex flex-col items-start gap-6">
            <div className="flex flex-col gap-5 text-base md:text-lg lg:text-[20px] font-['Inter'] leading-relaxed text-black/70">
              <p>
                We create <span className="text-[#EA2451] font-medium">bespoke, cloud-friendly software solutions</span> for 
                businesses that are looking to grow – and need quality 
                software products delivered within strict timeframes.
              </p>
              
              <p>
                Leveraging our expertise in architecture, coding, 
                deployment, and performance, <span className="text-[#EA2451] font-medium">we ensure seamless 
                scalability and innovation.</span>
              </p>
              
              <p>
                We do not outsource our work – you will work directly with 
                our top developers located in western Europe, ensuring your
                software delivered on-time within budget and to
                your specification. No more wasted budget or delaying your project.
              </p>

              <p className="font-medium text-black">No more wasted budget, or delaying your projects.</p>
            </div>
            
            <button className="w-full sm:w-auto mt-4 bg-[#EA2451] text-white px-10 py-4 rounded-sm font-bold text-[14px] uppercase transition-all hover:bg-[#d11d46] hover:shadow-lg active:scale-95 shadow-sm">
              Tell us about your project
            </button>
          </div>
        </div>

        {/* Right Image Column (Hidden on mobile, visible on LG+) */}
        <div className="hidden lg:block flex-1 w-full relative">
          <div className="aspect-[4/5] w-full bg-gray-50 rounded-sm overflow-hidden relative border border-gray-100 shadow-md">
            <img 
              src={man}
              alt="Solutions Desktop" 
              className="w-full h-full object-cover"
            />
            {/* Overlay Tag */}
            <div className="absolute bottom-8 left-0 right-0 flex justify-center">
              <span className="bg-black/90 text-white px-5 py-2 text-[14px] font-['Inter'] rounded-[2px] tracking-wide">
                In the evolving landscape
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default SolutionsSection;