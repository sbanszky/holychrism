import { Sense } from '@/types';

const vestibularAcceleration: Sense = {
  id: 'vestibular-acceleration',
  title: 'Vestibular Acceleration – The Motion Sense',
  category: 'The Hidden Senses – The Inner Compass',
  content: `
    <div class="border-l-2 border-amber-700 pl-4 py-2">
      <h3 class="text-xl font-bold text-amber-300 mb-2">Vestibular Acceleration – The Motion Sense</h3>
      <div class="text-amber-200">
        <p>If graviception is the tether that holds you to Earth, <strong>vestibular acceleration is the wind that lets you move through it.</strong></p>
        <p class="mt-4">It is the sense that detects <strong>speed, rotation, and directional change</strong> — the feeling of starting, stopping, spinning, or soaring. This is the system that tells you you're moving even with your eyes closed, that keeps your eyes steady while your head whips, that lets you ride a bike, do a cartwheel, or dance without toppling.</p>
        <p class="mt-4">Where equilibrioception is about staying upright, vestibular acceleration is about <strong>navigating motion without losing yourself.</strong></p>
        
        <hr class="border-amber-800 my-6">
        
        <h4 class="text-lg font-bold text-amber-300 mt-6 mb-2">The Outer Function — The Inertial System of the Inner Ear</h4>
        
        <p>The <strong>vestibular apparatus</strong> sits deep inside the <strong>petrous temporal bone</strong> of the skull, forming part of the inner ear's bony labyrinth. It consists of two complementary sensors:</p>
        
        <ul class="list-disc pl-5 space-y-2 mt-4">
          <li><strong>Semicircular canals (anterior, posterior, lateral):</strong> Three fluid-filled arcs arranged orthogonally like 3D gyroscopes. They detect <strong>angular acceleration</strong> — rotation of the head. Inside each canal is an <strong>ampulla</strong> containing the <strong>crista ampullaris</strong>, lined with hair cells embedded in a gelatinous cupula. When the head rotates, endolymph fluid lags, bending the hair cells and signaling motion.</li>
          <li><strong>Otolith organs (utricle and saccule):</strong> Flat sacs containing hair cells topped with <strong>otoconia</strong> (tiny calcium carbonate crystals). They detect <strong>linear acceleration and head tilt</strong> relative to gravity. When you accelerate in a car or elevator, the crystals shift, bending the hairs.</li>
        </ul>
        
        <p class="mt-4">These signals travel via the <strong>vestibular branch of cranial nerve VIII</strong> to the <strong>vestibular nuclei (brainstem)</strong>, <strong>cerebellum (timing/posture)</strong>, and <strong>ocular motor nuclei</strong>. The <strong>vestibulo-ocular reflex (VOR)</strong> stabilizes gaze: when your head moves, your eyes move in the opposite direction within 10 ms to keep your vision stable.</p>
        <p class="mt-4">This system runs faster than conscious thought — essential for survival in a moving world.</p>
        
        <hr class="border-amber-800 my-6">
        
        <h4 class="text-lg font-bold text-amber-300 mt-6 mb-2">Distinguishing Acceleration from Velocity</h4>
        
        <p>The vestibular system does not detect constant velocity — only <strong>changes</strong> in velocity. If you spin in a circle at constant speed, after a few seconds you stop feeling it. But the instant you slow or stop, the fluid keeps moving and you feel like you're spinning the opposite way.</p>
        <p class="mt-4">This is why astronauts in weightlessness or pilots in zero-visibility can become disoriented — without gravity cues or external reference points, the brain struggles to distinguish motion from stillness. The vestibular system is exquisitely tuned to Earth's gravity context.</p>
      </div>
    </div>
  `
};

export default vestibularAcceleration;
