import React from 'react';

const PastProjects = () => {
  const availableLogos = [
    'aws.png', 'blockchain.png', 'docker.png', 'elastic.png', 'java.png', 'kubernetes.png',
    'logo-javascript.png', 'mysql.png', 'nodejs.png', 'postgresql.png', 'python.png', 
    'spring.png', 'typescript.png', 'php.png', 'nestjs.png'
  ];

  const projects = [
    {
      title: "Digital bureaucracy enterprise platform, Europe.",
      features: "Automated processes, flexible data structure, search functionality, AWS deployment, multi-languages, multi-modularity.",
      contributions: "Performance update (x3 improvement for some requests, complicated SOAP integration).",
      tech: ["python", "spring", "mysql", "java", "aws"]
    },
    {
      title: "Exchange platform, Asia.",
      features: "High load, high requirements for sustainability.",
      contributions: "Team management, production support, DB concurrency and bottlenecks.",
      tech: ["java", "spring", "mysql"]
    },
    {
      title: "Advertising platform, USA.",
      features: "Data collecting, data pre-processing, powerful search, UI ready API, automated processes, reports, AWS deployment.",
      contributions: "Integration with many data sources, data collecting and processing pipelines, microservices architecture.",
      tech: ["java", "aws", "postgresql", "python", "docker", "spring"]
    },
    {
      title: "E-Mobility rental platform, USA.",
      features: "Rent an electric scooter via mobile app.",
      contributions: "Reviewed and improved suboptimal architecture. Performance improved drastically. Fixed business critical bugs.",
      tech: ["java", "php", "mysql"]
    },
    {
      title: "Exchange platform, Europe.",
      features: "Flexible exchange platform for enterprise equipment.",
      contributions: "Architecture the app with micro services approach, building deployment pipelines on AWS, integrations.",
      tech: ["java", "spring", "postgresql", "aws"]
    },
    {
      title: "NFT marketplace, USA.",
      features: "Sell, buy, and rent NFTs.",
      contributions: "Designed architecture and implemented cloud-friendly microservices. Built instant search and advanced sorting.",
      tech: ["nodejs", "kubernetes", "typescript", "postgresql"]
    }
  ];

  return (
    <section className="w-full bg-white flex justify-center items-center py-16 md:py-28">
      <div className="max-w-[1440px] w-full px-6 md:px-16 lg:px-24 flex flex-col items-start gap-10 md:gap-14">
        
        <h2 className="text-3xl md:text-5xl font-medium font-['Inter'] leading-tight tracking-tight text-black max-w-2xl">
          Some of Our Past Projects
        </h2>

        {/* Projects Grid */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="border border-gray-100 p-8 rounded-sm flex flex-col gap-6 bg-white hover:shadow-xl hover:border-gray-200 transition-all duration-300 h-full"
            >
              <h3 className="text-xl md:text-2xl font-medium font-['Inter'] leading-snug text-[#EA2451]">
                {project.title}
              </h3>

              <div className="flex flex-col gap-2">
                <h4 className="text-[12px] font-bold font-['IBM_Plex_Mono'] text-[#53449A] uppercase tracking-wider">Key features:</h4>
                <p className="text-sm text-black/70 font-['Inter'] leading-relaxed">{project.features}</p>
              </div>

              <div className="flex flex-col gap-2">
                <h4 className="text-[12px] font-bold font-['IBM_Plex_Mono'] text-[#53449A] uppercase tracking-wider">Key contributions:</h4>
                <p className="text-sm text-black/70 font-['Inter'] leading-relaxed">{project.contributions}</p>
              </div>

              {/* Technologies Section - Pushed to bottom */}
              <div className="mt-auto pt-6 border-t border-gray-50">
                <h4 className="text-[11px] font-bold font-['IBM_Plex_Mono'] text-[#53449A] uppercase mb-4 tracking-widest">Technologies:</h4>
                <div className="flex flex-wrap items-center gap-4">
                  {project.tech.map((t, i) => {
                    // Optimized finding logic
                    const logoFile = availableLogos.find(file => 
                      file.toLowerCase().includes(t.toLowerCase())
                    );

                    return logoFile ? (
                      <img 
                        key={i} 
                        src={`/logos/${logoFile}`} 
                        alt={t} 
                        className="h-6 md:h-7 w-auto object-contain transition-transform hover:scale-110"
                        title={t.toUpperCase()}
                      />
                    ) : (
                      <span key={i} className="text-[10px] font-bold text-gray-400 uppercase bg-gray-50 px-2 py-1 rounded-sm">{t}</span>
                    );
                  })}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <button className="bg-[#EA2451] hover:bg-[#d11d46] px-8 py-4 rounded-sm transition-all active:scale-95 shadow-md">
          <span className="text-white font-['IBM_Plex_Mono'] font-bold text-sm uppercase tracking-wider">
            Speak With Our Experts
          </span>
        </button>

      </div>
    </section>
  );
};

export default PastProjects;