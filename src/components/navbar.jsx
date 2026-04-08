import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navLinks = [
    "Home",
    "Solutions",
    "Engineers",
    "Why Choose Us",
    "Projects",
    "Founders",
    "Blog",
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 h-16">
        <div className="flex items-center">
          <img
            src="/logos/wp.png"
            alt="Logo"
            className="h-8 md:h-10 w-auto object-contain"
          />
        </div>
        <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
          {navLinks.map((link) => (
            <a
              key={link}
              href="#"
              className="font-mono text-[18px] font-medium text-gray-700 hover:text-red-600 transition-colors whitespace-nowrap"
            >
              {link}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-4">
          <button className="hidden lg:block bg-[#EA2451] text-white px-6 py-2 rounded-sm font-mono font-medium text-sm hover:bg-red-700 transition-all">
            Contact Us
          </button>
          <button
            className="lg:hidden text-black p-2 focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="fixed inset-0 top-16 bg-white z-50 lg:hidden flex flex-col p-6 shadow-2xl overflow-y-auto animate-in fade-in slide-in-from-top-4">
          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a
                key={link}
                href="#"
                className="font-mono text-lg font-semibold text-gray-900 border-b border-gray-50 pb-2 active:text-red-600"
                onClick={() => setIsMenuOpen(false)}
              >
                {link}
              </a>
            ))}
          </div>
          
          <button className="mt-8 bg-[#EA2451] text-white py-4 rounded-sm font-mono font-bold text-base uppercase tracking-wider">
            Contact Us
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;