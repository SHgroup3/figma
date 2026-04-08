import React from 'react';

const EngineersSection = () => {
  const features = [
    { icon: "/logos/icon1.png", title: "EXTENSIVE EXPERIENCE AND BEST PRACTICES" },
    { icon: "/logos/icon2.png", title: "SMOOTH COMMUNICATION FOR A PERFECT PARTNERSHIP" },
    { icon: "/logos/icon3.png", title: "CONTINUOUS INTEGRATIONS & DELIVERY" },
    { icon: "/logos/icon4.png", title: "EFFICIENT, REUSABLE CODE & OPTIMAL TECHNOLOGY" },
    { icon: "/logos/icon5.png", title: "RESILIENT SOFTWARE ARCHITECTURE" }, 
  ];

  return (
    <section className="w-full bg-white flex justify-center items-center py-16 md:py-24 lg:py-32">
      <div className="max-w-[1440px] w-full px-6 md:px-16 lg:px-20 flex flex-col lg:flex-row items-center lg:items-start justify-between gap-12 lg:gap-16">
        <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left gap-6">
          <h2 className="text-3xl md:text-5xl lg:text-[54px] font-medium font-['Inter'] leading-[1.1] tracking-tight text-black">
            We are your software engineers.
          </h2>
          
          <p className="text-base md:text-lg font-['Inter'] leading-relaxed text-black/70 max-w-[500px]">
            Quality is at the heart of everything we do. <span className="text-[#EA2451] font-medium">We build your project 
            across all stages without outsourcing to external developers.</span> From 
            project design to testing to launch, we are in full control.
          </p>

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
        <div className="flex-1 w-full grid grid-cols-1 sm:grid-cols-2 gap-4">
          {features.map((item, index) => (
            <div 
              key={index} 
              className="p-8 rounded-sm flex flex-col items-center text-center lg:items-start lg:text-left gap-5 bg-[#F8F8F8] border border-transparent hover:border-gray-200 transition-all group"
            >
              <div className="w-12 h-12 bg-[#EA2451]/10 rounded-full flex items-center justify-center p-2.5 transition-colors group-hover:bg-[#EA2451]/20">
                <img 
                  src={item.icon} 
                  alt="" 
                  className="w-full h-auto object-contain" 
                  onError={(e) => { e.target.style.display = 'none' }}
                />
              </div>
              
              <h3 className="text-[13px] md:text-[14px] font-medium font-['IBM_Plex_Mono'] leading-[1.5] text-[#53449A] uppercase tracking-wider">
                {item.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EngineersSection;