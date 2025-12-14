import React from 'react';
import { BookOpen } from 'lucide-react';
import { BOOK_LINK } from '../constants';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-noir-900 text-white py-20 px-6 border-t border-noir-700 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 pointer-events-none" style={{
         backgroundImage: 'radial-gradient(circle at center, #8a0000 0%, transparent 70%)'
      }}></div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <BookOpen className="w-12 h-12 text-noir-gold mx-auto mb-8" />
        
        <h2 className="text-3xl md:text-5xl font-display font-bold mb-8 leading-tight">
          NON FIDARTI DELL'OMBRA <br /> CHE TI COPRE DAL SOLE.
        </h2>
        
        <p className="text-xl md:text-2xl font-serif italic text-gray-400 mb-12">
          "Lei è la prima a portarti il buio."
        </p>
        
        <a 
          href={BOOK_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-noir-accent hover:bg-red-900 text-white px-10 py-5 font-bold tracking-widest text-lg transition-all transform hover:scale-105 shadow-[0_0_30px_rgba(138,0,0,0.4)]"
        >
          LEGGI IL RACCONTO ORA
        </a>

        <div className="mt-20 text-gray-600 text-sm">
          <p>&copy; {new Date().getFullYear()} Elias e la Pioggia. Tutti i diritti riservati.</p>
        </div>
      </div>
    </footer>
  );
};