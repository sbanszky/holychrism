import { useState } from 'react';
import Sidebar from '@/components/Sidebar';
import TitlePage from '@/components/TitlePage';
import ContentSection from '@/components/ContentSection';
import { sections } from '@/data/sections';

function App() {
  const [currentSection, setCurrentSection] = useState<string | null>(null);
  const section = sections.find(s => s.id === currentSection);

  return (
    <div className="flex h-screen bg-gradient-to-br from-gray-900 to-black text-amber-200 font-cinzel overflow-hidden">
      <Sidebar currentSection={currentSection} setCurrentSection={setCurrentSection} />
      
      <main className="flex-1 overflow-y-auto p-6 md:p-12 relative">
        <div className="relative z-10 max-w-4xl mx-auto">
          {!currentSection ? (
            <TitlePage setCurrentSection={setCurrentSection} />
          ) : section ? (
            <ContentSection section={section} setCurrentSection={setCurrentSection} />
          ) : (
            <div className="text-center py-12">
              <h2 className="text-2xl font-bold text-amber-300">Section not found</h2>
              <button 
                onClick={() => setCurrentSection(null)}
                className="mt-4 px-4 py-2 bg-amber-900/30 text-amber-200 rounded hover:bg-amber-900/50 transition"
              >
                Return to the beginning
              </button>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

export default App;
