import { Button } from '@/components/ui/button';
import { Section } from '@/types';

type TitlePageProps = {
  setCurrentSection: (id: string | null) => void;
};

export default function TitlePage({ setCurrentSection }: TitlePageProps) {
  return (
    <div className="text-center py-12 relative">
      <h1 className="text-5xl md:text-7xl font-bold mb-8 text-amber-300 tracking-wider">
        THE SACRED CODEX
      </h1>
      
      <div className="max-w-2xl mx-auto mb-12">
        <p className="text-xl mb-6 italic text-amber-200/80">
          "In the stillness of the inner temple, the oil of anointing flows eternal, 
          connecting heaven and earth through the vessel of the awakened soul."
        </p>
        
        <div className="border-t border-b border-amber-800/50 py-6 my-8">
          <p className="text-lg">
            A Manuscript of Ancient Wisdom for the Digital Age
          </p>
        </div>
      </div>
      
      <div className="mt-16 flex flex-col items-center">
        <Button 
          onClick={() => setCurrentSection('prologue')}
          className="btn-black-gold px-8 py-6 text-lg z-10 relative font-bold tracking-wider"
        >
          Begin Reading
        </Button>
        
        {/* Egyptian Eye of Horus */}
        <div className="mt-4 relative w-24 h-24">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-20 h-20 text-amber-300 animate-egyptian-glow">
              <svg viewBox="0 0 100 100" className="w-full h-full">
                {/* Eye shape */}
                <path 
                  d="M20,50 Q50,20 80,50 Q50,80 20,50 Z" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2"
                />
                
                {/* Pupil */}
                <circle cx="50" cy="50" r="10" fill="currentColor" />
                
                {/* Egyptian teardrop */}
                <path 
                  d="M50,60 L50,75 C50,80 60,80 60,75" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2"
                />
              </svg>
            </div>
          </div>
        </div>
        
        {/* Holy Chrism text */}
        <div className="mt-6">
          <h2 className="text-3xl font-semibold text-amber-300 tracking-widest uppercase">
            Holy Chrism
          </h2>
          <div className="mt-2 w-32 h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent mx-auto"></div>
        </div>
      </div>
    </div>
  );
}
