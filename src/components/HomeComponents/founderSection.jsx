import founder1 from '../../assets/founder1.png';
import founder2 from '../../assets/founder2.png';

const FoundersSection = () => {
  const founders = [
    {
      name: "Ivan",
      role: "Founder and Senior Software Engineer",
      image: founder2,
      bio: "Ivan is a skilled engineer with over 11 years of experience, specializing in product development and technical proficiency. His extensive involvement in startups has given him a firsthand understanding of the challenges that products face from inception to growth and eventual acquisition."
    },
    {
      name: "Slava",
      role: "Founder, Developer and Software Architect",
      image: founder1,
      bio: "Slava is a seasoned engineer and technical manager with over 12 years of experience in the field. His high-level tech skills and deep understanding of software architecture have allowed him to deliver complex solutions that have successfully scaled to serve millions of users. Slava's expertise in solving"
    }
  ];

  return (
    <section className="w-full bg-[#FFFFFF] flex justify-center items-center py-[100px]">
      <div className="max-w-[1440px] w-full px-6 md:px-[100px] flex flex-col items-start gap-[24px]">
        
        <h2 className="text-[40px] md:text-[50px] font-medium font-['Inter'] leading-[110%] tracking-[-2px] text-black">
          Founders
        </h2>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-[40px]">
          {founders.map((founder, index) => (
            <div key={index} className="flex flex-col items-start gap-[24px]">
              <div className="w-full aspect-square overflow-hidden rounded-[2px] bg-gray-100">
                <img 
                  src={founder.image} 
                  alt={founder.name} 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>
              <div className="flex flex-col items-start gap-[12px] w-full">
                <h3 className="text-[32px] font-medium font-['Inter'] text-black">
                  {founder.name}
                </h3>
                <div className="px-[12px] py-[4px] border border-[#53449A]/30 rounded-full">
                  <span className="text-[12px] font-medium font-['IBM_Plex_Mono'] text-[#53449A] uppercase">
                    {founder.role}
                  </span>
                </div>

                <p className="text-[16px] leading-[160%] text-black/70 font-['Inter']">
                  {founder.bio}
                </p>
                <button className="flex items-center gap-2 group mt-2">
                  <span className="text-[14px] font-semibold font-['Inter'] text-[#EA2451] border-b border-transparent group-hover:border-[#EA2451] transition-all">
                    Read more
                  </span>
                  <span className="text-[#EA2451] text-[18px]">↗</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FoundersSection;