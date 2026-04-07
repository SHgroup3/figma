import React from 'react';

const GuaranteeSection = () => {
  const cards = [
    {
      icon: "/logos/g1.png",
      title: "TIMELINE GUARANTEES",
      boldText: "No more budget increases or passed-launch dates",
      desc: "We guarantee to deliver your software product on-time and to the agreed budget on project with a fix price pre-agreed."
    },
    {
      icon: "/logos/g2.png",
      title: "QUALITY GUARANTEES",
      boldText: "Get the product you actually want – with clean, scalable code.",
      desc: "Our work is not outsourced – and we only take on a few select projects per year to ensure that our work is consistently of a high standard."
    },
    {
      icon: "/logos/g3.png",
      title: "TRANSPARENCY GUARANTEES",
      boldText: "Know exactly what stage your project is at.",
      desc: "Enjoy frequent & concise lines of communication with updates to remove any ambiguity as the project progresses."
    },
    {
      icon: "/logos/g4.png",
      title: "ENJOY FIRST MOVERS ADVANTAGE",
      boldText: "We ensure that your software reaches the market when you need it to",
      desc: "– no more loss of market share or frustrated investors."
    },
    {
      icon: "/logos/g5.png",
      title: "YOUR BEST INTERESTS IN MIND",
      boldText: "If we complete your project early",
      desc: "– we will not drag out the process. Instead, we will deliver your product before the due date, even if it means less billable fees for us."
    }
  ];

  return (
      <section className="w-full bg-white flex justify-center items-center py-16 md:py-24 lg:py-32">
        <div className="max-w-7xl w-full px-6 md:px-16 lg:px-20 flex flex-col items-start gap-12 md:gap-16">
          
          {/* Section Heading */}
          <div className="flex flex-col gap-4 max-w-2xl">
            <h2 className="text-3xl md:text-5xl lg:text-[50px] font-medium font-['Inter'] leading-[1.1] tracking-tight text-black">
              Money Back Guarantee
            </h2>
            <p className="text-base md:text-lg font-['Inter'] leading-relaxed text-black/60">
              We are the only software developer to provide guarantees on fixed price projects.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {cards.map((card, index) => (
              <div 
                key={index} 
                className="flex flex-col items-start p-6 md:p-8 gap-5 bg-black/[0.03] rounded-sm border border-transparent hover:border-gray-200 hover:bg-white hover:shadow-sm transition-all duration-300 w-full min-h-[240px]"
              >
                {/* Icon Container */}
                <div className="w-10 h-10 bg-[#EA2451]/10 rounded-full flex items-center justify-center p-2">
                  <img 
                    src={card.icon} 
                    alt={card.title} 
                    className="w-full h-full object-contain" 
                  />
                </div>

                {/* Content */}
                <div className="flex flex-col gap-3">
                  <h3 className="text-[13px] md:text-[14px] font-bold font-['IBM_Plex_Mono'] text-[#53449A] uppercase tracking-[2px]">
                    {card.title}
                  </h3>
                  <div className="text-[15px] md:text-[17px] font-['Inter'] leading-relaxed text-black/70">
                    <span className="font-bold text-black block mb-1">
                      {card.boldText}
                    </span>
                    <p>{card.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
  );
};

export default GuaranteeSection;