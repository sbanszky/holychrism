import { Section } from '@/types';
import { SectionId } from '@/routing/sections';
import { useState } from 'react';

type ContentSectionProps = {
  section: Section;
  navigateToSection: (id: SectionId) => void;
};

export default function ContentSection({ section, navigateToSection }: ContentSectionProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="py-8">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-amber-300 mb-4">{section.title}</h2>
      </div>
      
      <div 
        className="prose prose-invert max-w-none text-amber-200"
        dangerouslySetInnerHTML={{ __html: section.content }}
      />
      
      {/* Hover-reveal button container */}
      <div 
        className="fixed bottom-6 right-0 z-50 flex items-center transition-all duration-300"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Button that slides in */}
        <button 
          onClick={() => navigateToSection('home')}
          className={`
            flex items-center gap-2 px-4 py-2 bg-amber-900/50 text-amber-200 rounded-l-lg
            hover:bg-amber-900/70 transition-all shadow-lg transform
            ${isHovered ? 'translate-x-0' : 'translate-x-full'}
          `}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd" />
          </svg>
          Back to beginning
        </button>
        
        {/* Always-visible arrow trigger */}
        <div className="flex items-center justify-center w-10 h-10 bg-amber-900/50 rounded-r-lg shadow-lg cursor-pointer">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-6 w-6 text-amber-200 transform transition-transform duration-300"
            style={{ transform: isHovered ? 'rotate(180deg)' : 'rotate(0deg)' }}
            viewBox="0 0 20 20" 
            fill="currentColor"
          >
            <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg>
        </div>
      </div>
    </div>
  );
}
