import { Section } from '@/types';
import { senses } from '@/data/senses';

// Function to generate distinct colors for numerals
const generateColors = (count: number) => {
  const colors = [];
  for (let i = 0; i < count; i++) {
    const hue = Math.floor((i * 360) / count);
    colors.push(`hsl(${hue}, 70%, 60%)`);
  }
  return colors;
};

const romanNumerals = [
  'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X',
  'XI', 'XII', 'XIII', 'XIV', 'XV', 'XVI', 'XVII', 'XVIII', 'XIX', 'XX',
  'XXI', 'XXII', 'XXIII', 'XXIV', 'XXV', 'XXVI', 'XXVII', 'XXVIII', 'XXIX', 'XXX',
  'XXXI', 'XXXII', 'XXXIII'
];

const xxxiii: Section = {
  id: 'xxxiii',
  title: 'XXXIII',
  content: `
    <div class="py-8">
      <div class="space-y-6">
        <h2 class="text-3xl font-bold text-amber-300 mb-6">Rediscovering the Forgotten Senses</h2>
        
        <p class="text-amber-200 leading-relaxed">
          For most of recorded history, the story of human perception has been told in the language of five. Sight, hearing, smell, taste, and touch: these are the "official" gateways through which the human soul interacts with the world. This canonization of the senses is often traced back to Aristotle, who, in his work De Anima, defined them as the five pillars of sensory experience. His framework was elegant, simple, and enduring — so enduring that it hardened into dogma. Generations grew up believing that human beings possessed only five ways of knowing the world.
        </p>
        
        <p class="text-amber-200 leading-relaxed">
          But reality is far richer than this neat arithmetic.
        </p>
        
        <div class="flex justify-center my-8">
          <img 
            src="https://images.watchermind.online/lotusSilueteMoon.jpeg" 
            alt="Lotus silhouette against the moon" 
            class="w-full max-w-md rounded-lg border border-amber-800/50"
          />
        </div>
        
        <p class="text-amber-200 leading-relaxed">
          Modern neuroscience, physiology, and psychology reveal that the body contains a multitude of specialized sensors, each tuned to its own domain. We do not merely see; we also detect movement, balance, temperature, pain, pressure, vibration, hydration, oxygen levels, and even the flow of time. Depending on how finely one classifies them, researchers now argue for at least 21 senses, with some models expanding to 33 or more distinct perceptual modalities.
        </p>
        
        <p class="text-amber-200 leading-relaxed">
          This is not an expansion for the sake of complication. It is a recognition that perception is the foundation of consciousness itself. The nervous system is not a passive recorder of the world but an alchemical transformer. It takes photons and turns them into sight, air pressure into sound, molecules into smell and taste. Every "sense" is a translation system, a living bridge between matter and awareness.
        </p>
        
        <h3 class="text-2xl font-bold text-amber-300 mt-8 mb-4">Why 33?</h3>
        
        <p class="text-amber-200 leading-relaxed">
          The number 33 has long carried symbolic weight. In esoteric traditions, it marks completion and mastery: the 33 vertebrae of the human spine, the "33 steps" of initiation in certain mystical schools, the symbolic age of spiritual transformation in Christian narrative. In mapping the senses, it offers a way to capture not just the five external gateways but also the many internal ones — those hidden forms of perception that monitor the inner temple of the body.
        </p>
        
        <p class="text-amber-200 leading-relaxed">
          These 33 senses will not all look the same. Some are obvious (sight, hearing); others are subtle (baroreception, which monitors blood pressure). Some are physical in nature; others border on the metaphysical, like chronoception (the sense of time) or magnetoreception (the debated sense of Earth's magnetic fields). Yet all are real in the sense that they have receptors, pathways, and roles in shaping how we feel the world and ourselves.
        </p>
        
        <div class="mt-16">
          <h2 class="text-3xl font-bold text-amber-300 mb-8 text-center">The 33 Senses</h2>
          
          <div class="grid grid-cols-1 gap-8 max-w-4xl mx-auto">
            ${senses.reduce((html, sense, index) => {
              const color = generateColors(33)[index];
              const numeral = romanNumerals[index];
              return html + `
                <div class="flex items-start bg-amber-900/20 p-6 rounded-xl border border-amber-800/30 shadow-lg">
                  <span class="text-2xl font-bold mr-4 mt-1 min-w-[3rem] text-center" style="color: ${color}">${numeral}</span>
                  <div class="prose prose-invert max-w-none text-[120%] text-justify">
                    ${sense.content}
                  </div>
                </div>
              `;
            }, '')}
          </div>
        </div>
      </div>
    </div>
  `
};

export default xxxiii;
