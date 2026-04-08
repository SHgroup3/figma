import React from "react";
import group4 from "../../assets/group4.png";

const CodingLanguagesSection = () => {
  return (
    <section className="w-full bg-white flex justify-center items-center py-[80px] md:py-[120px]">
      <div className="max-w-[1440px] w-full px-6 md:px-[100px] flex flex-col lg:flex-row items-center gap-[40px] lg:gap-[80px]">
        <div className="flex-1 flex flex-col items-start gap-[24px]">
          <h2 className="text-[36px] md:text-[50px] font-medium font-['Inter'] leading-[110%] tracking-[-2px] text-black">
            Specialists in most coding languages
          </h2>

          <div className="flex flex-col gap-[20px] text-[16px] md:text-[20px] font-['Inter'] leading-[160%] text-black/70">
            <p>
              We specialize in high-end generalist services, adept at reverse
              engineering business needs to build robust solutions that
              withstand scalability challenges.
            </p>
            <p>
              With our efficient approach, we deliver to your scope efficiently,{" "}
              <span className="text-[#EA2451]">
                surpassing the output of larger teams while maintaining superior
                quality and client-centric processes.
              </span>
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-[16px] w-full mt-4">
            <div className="flex-1 bg-[#F8F8F8] p-[24px] rounded-[2px] flex flex-col gap-[12px] border border-transparent hover:border-gray-200 transition-all">
              <div className="w-[32px] h-[32px] bg-[#EA2451]/10 rounded-full flex items-center justify-center text-[14px]">
                🛡️
              </div>
              <h3 className="text-[24px] font-medium font-['IBM_Plex_Mono'] text-[#53449A] uppercase tracking-wider">
                Security
              </h3>
              <p className="text-[13px] text-black/60 font-['Inter']">
                Costa Blanca Geeks offer robust security measures, surpassing
                larger teams.
              </p>
            </div>

            <div className="flex-1 bg-[#F8F8F8] p-[24px] rounded-[2px] flex flex-col gap-[12px] border border-transparent hover:border-gray-200 transition-all">
              <div className="w-[32px] h-[32px] bg-[#EA2451]/10 rounded-full flex items-center justify-center text-[14px]">
                🚀
              </div>
              <h3 className="text-[24px] font-medium font-['IBM_Plex_Mono'] text-[#53449A] uppercase tracking-wider">
                Performance
              </h3>
              <p className="text-[13px] text-black/60 font-['Inter']">
                Costa Blanca Geeks ensure optimal performance with specialized
                expertise.
              </p>
            </div>
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
              Let's discuss your project
            </span>
          </button>
        </div>
        <div className="flex-1 w-full flex justify-center lg:justify-end items-center">
          <div className="relative w-full max-w-[600px] lg:max-w-[650px]">
            <img
              src={group4}
              alt="Coding Specialists Working"
              className="w-full h-auto object-contain transform hover:scale-[1.02] transition-transform duration-500"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CodingLanguagesSection;
