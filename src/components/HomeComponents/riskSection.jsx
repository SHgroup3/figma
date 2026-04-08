import React from "react";
import group from "../../assets/Group.png";

const RiskSection = () => {
  const services = [
    {
      title: "PROVEN TRACK RECORD",
      desc: "Multiple projects completed with an average company valuation of over $7 million.",
    },
    {
      title: "LOCATED IN SPAIN",
      desc: "Enjoy a higher-level of project security, control and management.",
    },
    {
      title: "AN EXTENSION OF YOUR TEAM",
      desc: "We work with your team to ensure your software is delivered on budget, on time and to budget.",
    },
  ];

  return (
    <section className="w-full bg-white flex justify-center items-center">
      <div className="max-w-[1440px] w-full flex flex-col items-center justify-center pt-10 md:pt-24 pb-20 md:pb-32 px-6 md:px-20">
        {/* Main Content Wrapper */}
        <div className="max-w-[1280px] w-full flex flex-col items-center md:items-start gap-10 md:gap-14">
          {/* Header Section */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left gap-4 md:gap-6 w-full">
            <h2 className="text-3xl md:text-5xl font-medium font-['Inter'] leading-[1.1] tracking-tight text-black">
              Don’t risk your project
            </h2>
            <p className="text-base md:text-xl font-normal font-['Inter'] leading-relaxed text-black/70 max-w-[634px]">
              Choose a software dev team who can deliver to your specification.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-5 w-full">
            {services.map((service, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center md:flex-row md:items-start md:text-left p-4 gap-4 md:gap-5 w-full"
              >
                <div className="flex-none w-10 md:w-12">
                  <img
                    src={group}
                    alt={service.title}
                    className="w-full h-auto object-contain"
                  />
                </div>

                <div className="flex flex-col items-center md:items-start gap-2">
                  <h3 className="text-lg md:text-xl font-normal font-['IBM_Plex_Mono'] leading-tight tracking-tight text-black/90">
                    {service.title}
                  </h3>
                  <p className="text-sm md:text-base font-normal font-['Inter'] leading-normal text-black/55">
                    {service.desc}
                  </p>
                </div>
              </div>
            ))}
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
              Book a free software audit
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default RiskSection;
