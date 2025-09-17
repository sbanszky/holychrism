import { SectionId } from '@/routing/sections';
import { SECTION_TITLES } from '@/routing/sectionTitles';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <main className="flex flex-col items-center max-w-4xl w-full">
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-7xl font-bold text-amber-300 mb-6">
            THE SACRED CODEX
          </h1>
          <p className="text-xl md:text-2xl text-amber-200 max-w-2xl">
            Rediscovering the 33 Forgotten Senses of Human Perception
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full mb-12">
          {Object.entries(SECTION_TITLES).map(([id, title]) => (
            <Link 
              key={id} 
              href={`/section/${id}`}
              className="bg-amber-900/50 hover:bg-amber-900/70 transition-all rounded-lg p-4 text-center flex flex-col items-center justify-center aspect-square"
            >
              <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16 mb-2" />
              <span className="text-amber-200 font-medium">{title}</span>
            </Link>
          ))}
        </div>

        <div className="mt-12 mb-8">
          <Image
            src="/signature.png"
            alt="Author Signature"
            width={200}
            height={80}
            className="mx-auto"
          />
        </div>
      </main>
    </div>
  );
}
