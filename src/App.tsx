import { useState, useEffect } from 'react';
import Sidebar from '@/components/Sidebar';
import TitlePage from '@/components/TitlePage';
import ContentSection from '@/components/ContentSection';
import { sections } from '@/data/sections';
import { SectionId, DEFAULT_SECTION, SECTION_TITLES } from '@/routing/sections';

function App() {
  const [currentSectionId, setCurrentSectionId] = useState<SectionId>(DEFAULT_SECTION);
  
  // Handle hash routing
  useEffect(() => {
    const getHash = (): SectionId => {
      const raw = window.location.hash.replace(/^#/, '');
      return Object.keys(SECTION_TITLES).includes(raw) ? raw as SectionId : DEFAULT_SECTION;
    };
    
    const handleHashChange = () => {
      const sectionId = getHash();
      setCurrentSectionId(sectionId);
      document.title = `Holy Chrism — ${SECTION_TITLES[sectionId]}`;
      window.scrollTo({ top: 0, behavior: 'instant' });
    };
    
    // Initial load
    handleHashChange();
    
    // Listen for hash changes
    window.addEventListener('hashchange', handleHashChange);
    
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);
  
  const navigateToSection = (id: SectionId) => {
    window.location.hash = id;
  };
  
  const section = sections.find(s => s.id === currentSectionId);
  
  return (
    <div className="flex h-screen bg-gradient-to-br from-gray-900 to-black text-amber-200 font-cinzel overflow-hidden">
      <Sidebar currentSection={currentSectionId} navigateToSection={navigateToSection} />
      
      <main className="flex-1 overflow-y-auto p-6 md:p-12 relative">
        <div className="relative z-10 max-w-4xl mx-auto">
          {currentSectionId === 'home' ? (
            <TitlePage navigateToSection={navigateToSection} />
          ) : section ? (
            <ContentSection section={section} navigateToSection={navigateToSection} />
          ) : (
            <div className="text-center py-12">
              <h2 className="text-2xl font-bold text-amber-300">Section not found</h2>
              <button 
                onClick={() => navigateToSection('home')}
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
