import React from 'react';
import man from '../../assets/man.png';

const SolutionsSection = () => {
  return (
    <section className="w-full bg-white flex justify-center items-center py-16 md:py-24 lg:py-32">
      <div className="max-w-[1440px] w-full px-6 md:px-16 lg:px-20 flex flex-col lg:flex-row items-center lg:items-start gap-12 lg:gap-24">
        <div className="w-full flex flex-col items-center lg:items-start lg:flex-1">
          <h2 className="text-3xl md:text-5xl lg:text-[48px] font-medium font-['Inter'] leading-[1.1] tracking-tight text-black mb-8 text-center lg:text-left">
            Custom Software Solutions
          </h2>
          <div className="w-full mb-10 lg:hidden flex justify-center"> 
            <div className="aspect-square w-full max-w-[500px] bg-gray-50 rounded-sm overflow-hidden relative border border-gray-100 shadow-sm">
              <img 
                src={man}
                alt="Solutions" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/5">
                <div className="w-14 h-14 bg-white/30 backdrop-blur-md rounded-full flex items-center justify-center border border-white/40">
                  <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[16px] border-l-white border-b-[10px] border-b-transparent ml-1"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center lg:items-start gap-6 text-center lg:text-left">
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
                your specification.
              </p>

              <p className="font-semibold text-black">No more wasted budget, or delaying your projects.</p>
            </div>
            <button
            className="flex flex-row justify-center items-center 
  h-auto py-3 px-4 w-full max-w-[200px] text-[13px] leading-tight
  sm:h-14 sm:py-0 sm:px-10 sm:w-auto sm:max-w-none sm:min-w-[300px] sm:text-[16px]
  
  bg-[#EA2451] rounded-sm hover:bg-[#d11d46] transition-all active:scale-95 shadow-md group"
          >
            <span
              className="text-white font-['IBM_Plex_Mono'] font-medium uppercase tracking-wider 
    whitespace-normal sm:whitespace-nowrap text-center"
            >
              Tell us about your project
            </span>
          </button>
          </div>
        </div>
        <div className="hidden lg:block flex-1 w-full relative">
          <div className="aspect-[4/5] w-full bg-gray-50 rounded-sm overflow-hidden relative border border-gray-100 shadow-md">
            <img 
              src={man}
              alt="Solutions Desktop" 
              className="w-full h-full object-cover"
            />
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