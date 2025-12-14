import React, { useEffect, useState } from 'react';
import { Hero } from './components/Hero';
import { Section } from './components/Section';
import { CharacterCard } from './components/CharacterCard';
import { Footer } from './components/Footer';
import RainEffect from './components/RainEffect';
import { SYNOPSIS, PLOT_POINTS, CHARACTERS, THEMES, THEME_ICONS, BOOK_LINK } from './constants';
import { Droplets, MapPin, Eye } from 'lucide-react';

const App: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      if (windowHeight === 0) return;
      const scroll = totalScroll / windowHeight;
      setScrollProgress(scroll);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen text-gray-200 selection:bg-noir-accent selection:text-white font-sans relative">
      
      {/* Global Background Rain - Fixed Position */}
      <RainEffect className="fixed inset-0 z-0 pointer-events-none" />

      {/* Reading Progress Bar */}
      <div 
        className="fixed top-0 left-0 h-1 bg-noir-accent z-[60] transition-all duration-100 ease-out shadow-[0_0_10px_#8a0000]"
        style={{ width: `${scrollProgress * 100}%` }}
      />

      {/* Sticky Navigation / CTA */}
      <nav className="fixed top-0 w-full z-50 mix-blend-difference px-6 py-4 flex justify-between items-center pointer-events-none">
        <button 
          onClick={scrollToTop}
          className="text-white font-display font-bold text-xl pointer-events-auto hover:text-noir-gold transition-colors"
        >
          E/P
        </button>
        <a 
          href={BOOK_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white text-black hover:bg-gray-200 px-6 py-2 text-xs font-bold tracking-widest pointer-events-auto uppercase transition-colors"
        >
          Leggi Ora
        </a>
      </nav>

      {/* Main Content - Relative z-10 to sit above the fixed rain */}
      <div className="relative z-10">
        
        <Hero />

        {/* Prologue / Synopsis - Text Only Layout */}
        <Section id="prologue" className="bg-noir-900/90 backdrop-blur-sm border-b border-noir-700/50">
          <div className="max-w-4xl mx-auto flex flex-col items-center">
              
              <div className="mb-10 p-4 border border-noir-gold/30 rounded-full bg-black/50">
                  <MapPin className="w-8 h-8 text-noir-gold" />
              </div>

              <h2 className="text-4xl md:text-5xl font-display text-white text-center mb-12 leading-tight">
                Manila. <br/> <span className="text-noir-accent text-3xl">Il mostro che respira.</span>
              </h2>
              
              <div className="space-y-8 text-center">
                  <p className="text-xl leading-relaxed text-gray-400 font-light font-serif">
                  {SYNOPSIS.intro}
                  </p>
                  
                  <div className="h-px w-20 bg-gray-800 mx-auto"></div>

                  <p className="text-lg leading-relaxed text-gray-300">
                  {SYNOPSIS.protagonist}
                  </p>
                  
                  <div className="py-8">
                      <p className="text-2xl font-display text-white tracking-wide border-y border-gray-800 py-6">
                          {SYNOPSIS.hook}
                      </p>
                  </div>
              </div>
          </div>
        </Section>

        {/* The Conspiracy */}
        <Section id="conspiracy" className="bg-black/85 backdrop-blur-sm">
          <div className="text-center mb-20">
            <Eye className="w-12 h-12 text-white mx-auto mb-4 opacity-50" />
            <h2 className="text-3xl md:text-5xl font-display text-white mb-4">IL COMPASSO SPEZZATO</h2>
            <div className="h-1 w-20 bg-noir-accent mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20">
            {PLOT_POINTS.map((point, idx) => (
              <div key={idx} className={`relative p-8 md:p-12 border border-gray-800/50 bg-noir-900/60 hover:border-noir-gold/30 transition-colors duration-500`}>
                <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-noir-900 px-4 text-6xl font-display text-gray-800 select-none">
                  0{idx + 1}
                </div>
                <h3 className="text-2xl font-serif text-white mb-6 mt-4 text-center">{point.title}</h3>
                <p className="text-gray-400 leading-relaxed text-center font-light">
                  {point.content}
                </p>
              </div>
            ))}
          </div>
        </Section>

        {/* Characters Grid */}
        <Section id="characters" className="bg-noir-900/90 backdrop-blur-sm">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-gray-800/50 pb-8">
            <div>
              <h2 className="text-4xl md:text-6xl font-display text-white mb-2">DRAMATIS <br/><span className="text-noir-accent">PERSONAE</span></h2>
            </div>
            <p className="text-gray-500 text-right max-w-md mt-6 md:mt-0">
              I dossier riservati della polizia di Tondo.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {CHARACTERS.map((char, idx) => (
              <CharacterCard key={idx} character={char} index={idx} />
            ))}
          </div>
        </Section>

        {/* Themes Parallax-like */}
        <Section id="themes" className="bg-black/80 backdrop-blur-sm">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {THEMES.map((theme, idx) => (
              <div key={idx} className="flex flex-col items-center text-center group">
                <div className="mb-8 p-6 rounded-full bg-black/60 border border-gray-800 group-hover:border-noir-gold transition-colors duration-300 relative">
                  {THEME_ICONS[theme.icon]}
                  {theme.icon === 'rain' && <Droplets className="absolute top-0 right-0 w-3 h-3 text-white animate-ping" />}
                </div>
                <h3 className="text-xl font-display font-bold text-white mb-4 uppercase tracking-widest">{theme.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
                  {theme.description}
                </p>
              </div>
            ))}
          </div>
        </Section>

        {/* Quote Interlude */}
        <div className="bg-noir-accent/95 py-24 px-6 text-center backdrop-blur-md">
          <h2 className="text-2xl md:text-4xl font-display font-black text-white leading-tight max-w-4xl mx-auto">
            "L'UNICO MODO PER VINCERE LA GUERRA È RACCOGLIERE I CONTI DELLA LOGGIA."
          </h2>
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default App;