import React from "react";

const TechLogos = () => {
  const techLogos = [
    'aws.png', 'blockchain.png', 'docker.png', 'elastic.png', 'java.png',
    'logo-javascript.png', 'mysql.png', 'nodejs.png', 'postgresql.png', 'python.png', 
    'spring.png', 'typescript.png'
  ];

  return (
    <footer className="flex-none bg-gray-50 py-8 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        {/* Logos Container: Mobile par auto-scroll aur desktop par flex-wrap */}
        <div className="flex items-center justify-between gap-8 md:gap-12 overflow-x-auto no-scrollbar pb-2">
          {techLogos.map((logo, index) => (
            <img 
              key={index} 
              src={`/logos/${logo}`} 
              alt="tech logo" 
              className="h-6 md:h-8 lg:h-10 transition-all duration-300" 
            />
          ))}
        </div>
      </div>
      <style jsx="true">{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </footer>
  );
};

export default TechLogos;