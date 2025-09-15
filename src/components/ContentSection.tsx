import { Section } from '@/types';
import { SectionId } from '@/routing/sections';

type ContentSectionProps = {
  section: Section;
  navigateToSection: (id: SectionId) => void;
};

export default function ContentSection({ section, navigateToSection }: ContentSectionProps) {
  return (
    <div className="py-8">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-amber-300 mb-4">{section.title}</h2>
      </div>
      
      <div 
        className="prose prose-invert max-w-none text-amber-200"
        dangerouslySetInnerHTML={{ __html: section.content }}
      />
      
      {/* New button position - bottom-right */}
      <div className="fixed bottom-6 right-6 z-50">
        <button 
          onClick={() => navigateToSection('home')}
          className="flex items-center gap-2 px-4 py-2 bg-amber-900/50 text-amber-200 rounded-lg hover:bg-amber-900/70 transition-all shadow-lg"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd" />
          </svg>
          Back to beginning
        </button>
      </div>
    </div>
  );
}
