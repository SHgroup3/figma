import React from 'react';
import rectangle from '../../assets/rectangle.png'

const WhyChooseUs = () => {
  const points = [
    {
      title: "SEAMLESS COLLABORATION",
      desc: "We prioritize robust client partnerships. Understanding your business, domain, requirements, and constraints ensures precise alignment with your vision, laying a solid foundation for successful project execution."
    },
    {
      title: "ARCHITECTURE THAT EMPOWERS INNOVATION",
      desc: "Drawing on our extensive experience and best practices, we craft resilient software architecture tailored to your needs. From microservices to event-driven models, we optimize performance and scalability using RDS, NoSQL, or search engines."
    },
    {
      title: "CODING FOR EXCELLENCE",
      desc: "We transform your concepts into reality with efficient, reusable code, utilizing optimal technologies for your project's success. Our versatile skills enable us to deliver tailored solutions, maximizing results."
    },
    {
      title: "CONTINUOUS INTEGRATION & DELIVERY (CI/CD)",
      desc: "We streamline CI/CD pipelines and deploy scalable infrastructure across AWS, Azure, Google Cloud, and more. Tailored to project needs and budget, ensuring optimal ROI."
    }
  ];

  return (
    <section className="w-full bg-white flex justify-center items-center py-16 md:py-24">
      <div className="max-w-[1440px] w-full px-6 md:px-20 flex flex-col items-center gap-12 md:gap-16">
        <div className="text-center flex flex-col gap-3">
          <h2 className="text-3xl md:text-5xl font-medium font-['Inter'] text-black tracking-tight">
            Why Choose Us
          </h2>
          <p className="text-base md:text-lg text-black/60 font-['Inter'] max-w-[700px]">
            Costa Blanca Geeks delivers a crafted and precise implementation of your project.
          </p>
        </div>
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-4 items-stretch">
          
          {/* Left Side: Pink Illustration Box */}
          <div className="bg-[#EA2451] rounded-[4px] flex items-center justify-center p-12 h-full">
            <img 
              src={rectangle} 
              alt="Cubes Illustration" 
              className="w-full max-w-[400px] object-contain"
            />
          </div>
          <div className="grid grid-cols-1 gap-3">
            {points.map((item, index) => (
              <div 
                key={index} 
                className="bg-[#F8F8F8] p-6 md:p-8 rounded-[4px] flex flex-col justify-center gap-3 border border-transparent hover:border-gray-200 transition-all"
              >
                <h3 className="text-sm md:text-[22px] font-medium font-['IBM_Plex_Mono'] text-[#53449A] uppercase tracking-wider">
                  {item.title}
                </h3>
                <p className="text-sm md:text-[15px] leading-relaxed text-black/70 font-['Inter']">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;