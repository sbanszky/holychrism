import { ChevronLeft } from 'lucide-react';
import { Section } from '@/types';
import { Button } from '@/components/ui/button';

type ContentSectionProps = {
  section: Section;
  setCurrentSection: (id: string | null) => void;
};

export default function ContentSection({ section, setCurrentSection }: ContentSectionProps) {
  return (
    <article className="prose prose-invert max-w-none relative pb-20">
      <h1 className="text-4xl font-bold mb-6 text-amber-300">{section.title}</h1>
      
      <div 
        className="prose prose-invert max-w-none text-[120%] text-justify"
        dangerouslySetInnerHTML={{ __html: section.content }} 
      />
      
      {section.subsections && section.subsections.map((subsection, index) => (
        <div key={index} className="mt-12">
          <h2 className="text-2xl font-semibold mb-4 text-amber-300">{subsection.title}</h2>
          <div 
            className="prose prose-invert max-w-none text-[120%] text-justify"
            dangerouslySetInnerHTML={{ __html: subsection.content }} 
          />
        </div>
      ))}
      
      <Button 
        onClick={() => setCurrentSection(null)}
        variant="ghost"
        className="fixed bottom-6 right-6 text-amber-400 hover:bg-amber-900/30 z-50 flex items-center shadow-lg bg-black/50 backdrop-blur-sm"
      >
        <ChevronLeft className="mr-2" /> Back to Contents
      </Button>
    </article>
  );
}
