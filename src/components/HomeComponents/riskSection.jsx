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
      {/* max-w-7xl standard 1280px hota hai, agar 1440 chahiye toh max-w-[1440px] theek hai */}
      <div className="max-w-7xl w-full flex flex-col items-center justify-center pt-10 md:pt-24 pb-20 md:pb-32 px-6 md:px-20">
        
        <div className="max-w-7xl w-full flex flex-col items-start gap-10 md:gap-12">
          <div className="flex flex-col items-start gap-4 md:gap-6 w-full">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium font-sans leading-tight tracking-tight text-black">
              Don’t risk your project
            </h2>
            <p className="text-base md:text-xl font-normal font-sans leading-relaxed text-black/70 max-w-2xl">
              Choose a software dev team who can deliver to your specification.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 w-full">
            {services.map((service, index) => (
              <div
                key={index}
                className="flex flex-row items-start py-4 md:py-5 pr-4 gap-4 md:gap-5 w-full"
              >
                <div className="flex-none w-10 md:w-12">
                  <img
                    src={group}
                    alt={service.title}
                    className="w-full h-auto object-contain"
                  />
                </div>
                <div className="flex flex-col items-start gap-2">
                  <h3 className="text-lg md:text-xl font-normal font-mono leading-tight tracking-tight text-black/90">
                    {service.title}
                  </h3>
                  <p className="text-sm md:text-base font-normal font-sans leading-normal text-black/60">
                    {service.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <button className="flex flex-row justify-center items-center px-8 h-14 bg-[#EA2451] rounded-sm w-full sm:w-auto min-w-[300px] hover:bg-[#d11d46] transition-all group">
            <span className="text-white font-mono font-medium text-base md:text-lg">
              Book a free software audit
            </span>
          </button>
          
        </div>
      </div>
    </section>
  );
};

export default RiskSection;