import { BookOpen, ChevronRight, Home, Eye, Key, Lock, User, Star, Brain, Heart, Globe } from 'lucide-react';
import { Section } from '@/types';
import { sections } from '@/data/sections';

type SidebarProps = {
  currentSection: string | null;
  setCurrentSection: (id: string | null) => void;
};

export default function Sidebar({ currentSection, setCurrentSection }: SidebarProps) {
  return (
    <aside className="w-64 bg-black/30 backdrop-blur-sm border-r border-amber-800/50 flex flex-col h-full">
      <div className="p-6 border-b border-amber-800/50">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold text-amber-200 flex items-center gap-2">
            <BookOpen className="text-amber-400" size={24} />
            <span>The Sacred Codex</span>
          </h1>
          
          <div className="flex gap-3">
            <div className="p-1 text-amber-400">
              <Eye size={20} />
            </div>
            
            <div className="text-amber-300 text-sm flex items-center">
              Holy Chrism
            </div>
          </div>
        </div>
      </div>
      
      <nav className="flex-1 overflow-y-auto py-4">
        <ul className="space-y-1 px-4">
          <li>
            <button 
              onClick={() => setCurrentSection(null)}
              className={`w-full flex items-center gap-3 p-3 rounded-lg text-left transition-all ${
                !currentSection 
                  ? 'bg-amber-900/30 text-amber-200' 
                  : 'hover:bg-amber-900/10 hover:text-amber-200'
              }`}
            >
              <Home size={18} className="flex-shrink-0" />
              <span>The beginning</span>
            </button>
          </li>
          
          {sections.map((section) => (
            <li key={section.id}>
              <button 
                onClick={() => setCurrentSection(section.id)}
                className={`w-full flex items-center gap-3 p-3 rounded-lg text-left transition-all ${
                  currentSection === section.id 
                    ? 'bg-amber-900/30 text-amber-200' 
                    : 'hover:bg-amber-900/10 hover:text-amber-200'
                }`}
              >
                {section.id === 'secret-chapter' ? (
                  <div className="flex items-center justify-center w-full gap-1">
                    <Lock size={14} className="text-amber-400" />
                    <Key size={14} className="text-amber-400" />
                  </div>
                ) : section.id === 'five-senses' ? (
                  <div className="flex items-center justify-center w-full gap-1">
                    <User size={16} className="text-amber-400" />
                  </div>
                ) : section.id === 'beyond-five' ? (
                  <div className="flex items-center justify-center w-full gap-1">
                    <Star size={14} className="text-amber-400" />
                    <Star size={14} className="text-amber-400" />
                    <Star size={14} className="text-amber-400" />
                  </div>
                ) : section.id === 'xxxiii' ? (
                  <div className="flex items-center justify-center w-full">
                    <span className="text-amber-400">XXXIII</span>
                  </div>
                ) : section.id === 'signature' ? (
                  <div className="flex items-center justify-center w-full">
                    <Heart size={18} className="text-amber-400" />
                  </div>
                ) : (
                  <>
                    <ChevronRight size={18} className="flex-shrink-0" />
                    <span>{section.title}</span>
                  </>
                )}
              </button>
            </li>
          ))}
        </ul>
      </nav>
      
      <div className="p-4 border-t border-amber-800/50">
        <a 
          href="https://hc-date-calculator.watchermind.online/" 
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center gap-2 p-3 rounded-lg transition-all hover:bg-amber-900/20 group"
        >
          <div className="text-amber-400 group-hover:text-amber-200 transition-colors">
            <Eye size={24} />
          </div>
          <span className="text-sm text-amber-500 group-hover:text-amber-300 transition-colors">
            date calculator
          </span>
        </a>
      </div>
      
      <div className="p-4 text-xs text-amber-700 border-t border-amber-800/50 flex justify-center">
        <p>© {new Date().getFullYear()} The Sacred Codex</p>
      </div>
    </aside>
  );
}
