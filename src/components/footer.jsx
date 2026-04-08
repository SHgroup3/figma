import React from "react";

const TechLogos = () => {
  const techLogos = [
    'aws.png', 'blockchain.png', 'docker.png', 'elastic.png', 'java.png',
    'logo-javascript.png', 'mysql.png', 'nodejs.png', 'postgresql.png', 'python.png', 
    'spring.png', 'typescript.png'
  ];

  return (
    <footer className="py-4 border-gray-500">
      <div className="max-w-7xl mx-auto px-6 md:px-16">
        <div className="flex items-center justify-start md:justify-between gap-8 md:gap-12 overflow-x-auto no-scrollbar py-2">
          {techLogos.map((logo, index) => (
            <img 
              key={index} 
              src={`/logos/${logo}`} 
              alt="tech logo" 
              className="h-6 md:h-8 lg:h-9 object-contain flex-shrink-0 transition-all duration-300" 
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