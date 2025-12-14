import React from 'react';
import { Character } from '../types';
import { User, FileText } from 'lucide-react';

interface CharacterCardProps {
  character: Character;
  index: number;
}

export const CharacterCard: React.FC<CharacterCardProps> = ({ character, index }) => {
  return (
    <div className="group relative bg-noir-800/50 border border-gray-800 p-8 hover:border-noir-gold/50 transition-all duration-300 hover:bg-noir-800">
      
      {/* Abstract Background Icon */}
      <div className="absolute top-4 right-4 opacity-5 group-hover:opacity-10 transition-opacity">
        <FileText className="w-24 h-24" />
      </div>

      <div className="relative z-10">
        <div className="flex items-center space-x-3 mb-6">
            <div className="h-px flex-1 bg-gray-800 group-hover:bg-noir-gold/30 transition-colors"></div>
            <p className="text-noir-gold text-xs font-bold tracking-[0.2em] uppercase">
                {character.role}
            </p>
        </div>

        <h3 className="text-3xl font-display text-white mb-4">{character.name}</h3>
        
        <div className="mb-6">
            <p className="text-gray-400 text-sm font-sans leading-relaxed">
            {character.description}
            </p>
        </div>

        {character.quote && (
          <div className="border-l-2 border-noir-accent pl-4 mt-6">
            <p className="text-gray-300 font-serif italic text-lg leading-relaxed">
              "{character.quote}"
            </p>
          </div>
        )}
      </div>
    </div>
  );
};