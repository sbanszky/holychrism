import { SectionId } from '@/routing/sections';

type TitlePageProps = {
  navigateToSection: (id: SectionId) => void;
};

export default function TitlePage({ navigateToSection }: TitlePageProps) {
  return (
    <div className="relative min-h-screen">
      {/* Content remains centered as before */}
      <div className="flex flex-col items-center justify-center min-h-[calc(100vh-100px)] py-12">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-amber-300 tracking-wider">
          THE SACRED CODEX
        </h1>
        <p className="text-xl mb-10 text-amber-200 max-w-2xl mx-auto">
          Rediscovering the Forgotten Senses and the Inner Anointing
        </p>
        
        <div className="mb-12">
          <div className="flex justify-center mb-4">
            <div className="w-24 h-1 bg-amber-700 rounded-full"></div>
          </div>
          <p className="text-amber-400 italic mb-8">
            "In the hidden chambers of human experience, a subtle force flows..."
          </p>
        </div>
        
        <button 
          onClick={() => navigateToSection('prologue')}
          className="px-8 py-3 bg-amber-900/30 text-amber-200 rounded-lg hover:bg-amber-900/50 transition-all transform hover:scale-105 border border-amber-800/50"
        >
          Begin the Journey
        </button>
        
        <div className="mt-16 flex justify-center">
          <div className="relative">
            <div className="absolute inset-0 bg-amber-900/20 rounded-full blur-md"></div>
            <div className="relative w-64 h-64 rounded-full overflow-hidden border-2 border-amber-800/50">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-900/10 to-transparent"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-amber-400 text-9xl font-bold opacity-30">33</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer positioned at absolute bottom */}
      <footer className="absolute bottom-0 w-full text-center border-t border-amber-800/50 pt-6 pb-8">
        <p className="text-amber-400/80 text-lg tracking-wider font-light">
          A MANUSCRIPT OF ANCIENT WISDOM FOR THE DIGITAL AGE
        </p>
      </footer>
    </div>
  );
}
