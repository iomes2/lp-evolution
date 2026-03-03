import React from 'react';
import { Twitter, Facebook, Instagram, Music } from 'lucide-react'; // Using Music for Spotify placeholder

const Header = () => {
  return (
    <header className="w-full bg-black text-white border-b border-white/5 absolute top-0 z-50">
      <div className="max-w-[1400px] mx-auto px-6 h-24 flex items-center justify-between">
        
        {/* Logo Placeholder (Text combined with shapes could emulate it, or just use an image later) */}
        <div className="flex items-center gap-2">
          {/* Faking the orange 3-circle logo icon */}
          <div className="relative w-8 h-8 flex items-center justify-center">
             <div className="absolute w-5 h-5 border-2 border-primary rounded-full top-0 left-0"></div>
             <div className="absolute w-5 h-5 border-2 border-primary rounded-full top-0 right-0"></div>
             <div className="absolute w-5 h-5 border-2 border-primary rounded-full bottom-0 left-1/2 -translate-x-1/2"></div>
          </div>
          <div className="flex flex-col">
            <span className="font-display font-black text-2xl italic tracking-tighter leading-none">EVOLUTION</span>
            <span className="text-[10px] text-primary tracking-[0.3em] font-bold mt-1">F I T N E S S</span>
          </div>
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="#" className="text-sm font-medium hover:text-primary transition-colors border-b border-primary pb-1">Home</a>
          <a href="#" className="text-sm font-medium hover:text-primary transition-colors text-gray-300">Sobre nós</a>
          <a href="#" className="text-sm font-medium hover:text-primary transition-colors text-gray-300">Nossas marcas</a>
          <a href="#" className="text-sm font-medium hover:text-primary transition-colors text-gray-300">Licenciadas</a>
          <a href="#" className="text-sm font-medium hover:text-primary transition-colors text-gray-300">Contato</a>
        </nav>

        {/* Social Icons */}
        <div className="hidden md:flex items-center gap-4 text-gray-500">
          <a href="#" className="hover:text-white transition-colors"><Twitter size={18} /></a>
          <a href="#" className="hover:text-white transition-colors"><Facebook size={18} /></a>
          <a href="#" className="hover:text-white transition-colors"><Music size={18} /></a>
          <a href="#" className="hover:text-white transition-colors"><Instagram size={18} /></a>
        </div>

        {/* Mobile menu button */}
        <button className="md:hidden text-white">
          <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Header;
