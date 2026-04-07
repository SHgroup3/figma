import React from "react";
import blockImage from "../../assets/block.png"; // Path check karein, 2 level deep hai

const HeroSection = () => {
  return (
    <section className="flex flex-col items-center pt-[4vh] md:pt-[8vh] lg:pt-[12vh] px-[5%] text-center w-full max-w-7xl mx-auto overflow-hidden bg-white">
      <div className="flex flex-col gap-6 md:gap-[4vh] w-full max-w-4xl z-10">
        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-[7vw] xl:text-7xl font-medium tracking-tight leading-[1.1] text-black">
          Custom Software <br className="hidden md:block" /> 
          Developers in Europe
          <span className="text-[#EA2451]">/</span>
          <span className="text-indigo-900">&gt;</span>
        </h1>
        <p className="text-gray-500 text-base md:text-[2.2vw] lg:text-xl max-w-2xl mx-auto leading-relaxed">
          We develop forward-thinking custom software. Get software that meets
          your exact needs, is scalable, efficient, delivered on-time & to budget.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-6 w-full sm:w-auto">
          <button className="w-full sm:w-64 bg-[#EA2451] text-white py-4 rounded-sm font-mono font-semibold text-sm hover:bg-red-700 transition-all shadow-md">
            Speak with an engineer
          </button>
          <button className="w-full sm:w-64 border border-black/20 text-black py-4 rounded-sm font-mono font-semibold text-sm hover:bg-black hover:text-white transition-all">
            See our projects
          </button>
        </div>
      </div>
      <div className="w-full mt-4 max-w-4xl flex items-end justify-center">
        <img 
          src={blockImage} 
          alt="Illustration" 
          className="w-full h-auto max-h-48 sm:max-h-64 md:max-h-[350px] lg:max-h-[420px] object-contain object-bottom"
        />
      </div>
    </section>
  );
};

export default HeroSection;