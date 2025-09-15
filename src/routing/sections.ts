export type SectionId = 
  | 'home'
  | 'prologue'
  | 'part-i'
  | 'part-ii'
  | 'part-iii'
  | 'part-iv'
  | 'epilogue'
  | 'secret-chapter'
  | 'five-senses'
  | 'beyond-five'
  | 'xxxiii'
  | 'signature';

export const SECTION_TITLES: Record<SectionId, string> = {
  'home': 'The beginning',
  'prologue': 'Prologue – The Forgotten Anointing',
  'part-i': 'Part I – The Triple Anointing',
  'part-ii': 'Part II – The Lunar Alchemy',
  'part-iii': 'Part III – The Solar Fire',
  'part-iv': 'Part IV – The Sacred Chemistry',
  'epilogue': 'Epilogue – The Inner Sun',
  'secret-chapter': 'Secret Chapter',
  'five-senses': 'The Five Senses',
  'beyond-five': 'Beyond the Five',
  'xxxiii': 'XXXIII',
  'signature': 'Signature'
};

export const DEFAULT_SECTION: SectionId = 'home';
