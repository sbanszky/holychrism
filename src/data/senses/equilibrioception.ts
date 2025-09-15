import { Sense } from '@/types';

const equilibrioception: Sense = {
  id: 'equilibrioception',
  title: 'Equilibrioception – The Inner Compass',
  category: 'The Hidden Senses – The Inner Compass',
  content: `
    <div class="border-l-2 border-amber-700 pl-4 py-2">
      <h3 class="text-xl font-bold text-amber-300 mb-2">Equilibrioception: The Sense of Balance</h3>
      
      <p class="text-amber-200 mb-4">
        Balance is the quiet foundation of all movement. It does not draw attention like sight or sound, 
        yet it makes every other sense usable. Without balance, the body cannot stand, the eyes cannot focus, 
        the hands cannot act. Balance is not just physical stability — it is orientation, the primal knowing 
        of where you are in space, and whether you are upright in the world.
      </p>
      
      <h4 class="text-lg font-bold text-amber-300 mb-2 mt-6">The Outer Function — The Vestibular System</h4>
      
      <p class="text-amber-200 mb-4">
        Equilibrioception is governed primarily by the vestibular system, a set of tiny structures in the 
        inner ear embedded within the bony labyrinth of the temporal bone. It works in constant collaboration 
        with vision and proprioception to maintain posture, focus gaze, and coordinate movement.
      </p>
      
      <p class="text-amber-200 mb-4">
        There are two key components:
      </p>
      
      <ul class="list-disc pl-5 text-amber-200 mb-4">
        <li class="mb-2">
          <strong>Semicircular Canals</strong> — Three fluid-filled arcs oriented at right angles to each other, 
          like a 3D gyroscope. They detect angular acceleration (rotational movements). When you turn your head, 
          the fluid lags, bending hair cells that send signals via the vestibular branch of cranial nerve VIII 
          to the brain.
        </li>
        <li>
          <strong>Otolith Organs (Utricle and Saccule)</strong> — These detect linear acceleration and gravity. 
          They contain hair cells topped with tiny calcium carbonate crystals (otoliths). When you tilt or accelerate, 
          the crystals shift, pulling the hair cells and sending signals about head orientation and gravitational pull.
        </li>
      </ul>
      
      <p class="text-amber-200">
        These vestibular signals go to the vestibular nuclei in the brainstem, the cerebellum (balance control), 
        and oculomotor centers (to stabilize vision). The vestibulo-ocular reflex (VOR) keeps your eyes fixed on 
        a target even when your head moves — without it, vision would blur with each step.
      </p>
    </div>
  `
};

export default equilibrioception;
