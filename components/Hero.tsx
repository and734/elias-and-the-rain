import React, { useEffect, useState } from 'react';
import { HERO_CONTENT, BOOK_LINK } from '../constants';
import { ChevronDown } from 'lucide-react';

export const Hero: React.FC = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      
      {/* Subtle Gradient Radial for Depth - Modified transparency to show global rain */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-transparent via-noir-900/40 to-black/80 z-0" />

      {/* Content */}
      <div className="relative z-20 text-center max-w-5xl px-4 flex flex-col items-center">
        <p className={`text-noir-accent font-display font-bold tracking-[0.2em] text-sm md:text-lg mb-6 uppercase red-glow transition-all duration-1000 delay-300 transform ${isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          {HERO_CONTENT.subtitle}
        </p>
        
        <h1 className={`text-6xl md:text-8xl lg:text-9xl font-display font-black text-white mb-8 tracking-tight leading-none text-glow transition-all duration-1000 ease-out transform ${isMounted ? 'opacity-100 translate-y-0 blur-none' : 'opacity-0 translate-y-12 blur-sm'}`}>
          ELIAS <span className="text-gray-600 font-serif italic font-normal text-5xl md:text-7xl">e la</span> PIOGGIA
        </h1>
        
        <div className={`h-px w-32 bg-gradient-to-r from-transparent via-noir-gold to-transparent mb-10 transition-all duration-1000 delay-500 transform ${isMounted ? 'w-32 opacity-100' : 'w-0 opacity-0'}`}></div>

        <p className={`text-xl md:text-3xl text-gray-400 font-serif italic mb-12 font-light transition-all duration-1000 delay-700 transform ${isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          "{HERO_CONTENT.tagline}"
        </p>

        <a 
          href={BOOK_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className={`group relative inline-flex items-center justify-center px-10 py-5 font-sans text-sm font-bold text-white transition-all duration-1000 delay-1000 bg-transparent border border-gray-700 hover:border-noir-accent hover:bg-noir-accent/5 focus:outline-none ${isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-noir-accent rounded-full group-hover:w-72 group-hover:h-72 opacity-10"></span>
          <span className="relative tracking-[0.2em] uppercase">{HERO_CONTENT.cta}</span>
        </a>
      </div>

      {/* Scroll Indicator */}
      <div className={`absolute bottom-10 z-20 animate-bounce transition-opacity duration-1000 delay-[1200ms] ${isMounted ? 'opacity-100' : 'opacity-0'}`}>
        <ChevronDown className="w-6 h-6 text-gray-600" />
      </div>
    </div>
  );
};