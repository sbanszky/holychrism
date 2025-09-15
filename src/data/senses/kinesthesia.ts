import { Sense } from '@/types';

const kinesthesia: Sense = {
  id: 'kinesthesia',
  title: 'Kinesthesia – The Sense of Motion',
  category: 'The Hidden Senses – The Inner Compass',
  content: `
    <div class="border-l-2 border-amber-700 pl-4 py-2">
      <h3 class="text-xl font-bold text-amber-300 mb-2">Kinesthesia – The Sense of Motion</h3>
      
      <p class="text-amber-200 mb-4">
        Where proprioception tells you where your body is, kinesthesia tells you how it is moving — 
        and how much effort that motion requires. It is the sense of velocity, acceleration, force, and fluidity.
      </p>
      
      <p class="text-amber-200 mb-4">
        If proprioception is the body’s map, kinesthesia is its choreography. It lets you catch a falling glass, 
        write with a pen, or play a violin without watching your fingers. It transforms position into motion, 
        static form into living gesture.
      </p>
      
      <h4 class="text-lg font-bold text-amber-300 mb-2 mt-6">The Outer Function — Motion Perception from Within</h4>
      
      <p class="text-amber-200 mb-4">
        Kinesthesia arises from the same deep somatosensory network as proprioception but emphasizes 
        dynamic feedback rather than static position. Its key sensory contributors are:
      </p>
      
      <ul class="list-disc pl-5 text-amber-200 mb-4">
        <li class="mb-2">
          <strong>Muscle spindles</strong> — detect change in muscle length and speed of stretch
        </li>
        <li class="mb-2">
          <strong>Golgi tendon organs</strong> — detect changes in muscle tension during contraction
        </li>
        <li class="mb-2">
          <strong>Joint mechanoreceptors</strong> — sense acceleration and deceleration at joints
        </li>
        <li class="mb-2">
          <strong>Skin stretch receptors</strong> — detect movement of skin over moving muscles
        </li>
        <li>
          <strong>Efference copy signals</strong> — motor command duplicates sent to sensory areas to predict expected movement
        </li>
      </ul>
      
      <p class="text-amber-200">
        These signals travel via Aα and Aβ fibers to the cerebellum (coordinating timing/force), 
        primary somatosensory cortex, and posterior parietal cortex (integrating body schema with spatial planning).
      </p>
      
      <p class="text-amber-200 mt-4">
        Unlike proprioception, which builds a static map, kinesthesia builds a dynamic model — 
        the brain’s expectation of how the body is moving in real time. This predictive aspect 
        allows smooth, efficient motion without conscious micromanagement.
      </p>
    </div>
  `
};

export default kinesthesia;
