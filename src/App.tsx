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
          ) : (
            <ContentSection section={section!} setCurrentSection={setCurrentSection} />
          )}
        </div>
      </main>
    </div>
  );
}

export default App;
