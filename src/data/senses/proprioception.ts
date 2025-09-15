import { Sense } from '@/types';

const proprioception: Sense = {
  id: 'proprioception',
  title: 'Proprioception – The Body Map',
  category: 'The Hidden Senses – The Inner Compass',
  content: `
    <div class="border-l-2 border-amber-700 pl-4 py-2">
      <h3 class="text-xl font-bold text-amber-300 mb-2">Proprioception – The Body Map</h3>
      
      <p class="text-amber-200 mb-4">
        If equilibrioception is the gyroscope of the human temple, proprioception is its map. 
        It tells you where your limbs are without looking, how much force to use, and how to move 
        through space without colliding with the world.
      </p>
      
      <p class="text-amber-200 mb-4">
        Close your eyes and touch your nose — this act, effortless and precise, is proprioception in action. 
        Without it, you would stumble, miss your mouth with a spoon, or be unable to walk in the dark.
      </p>
      
      <p class="text-amber-200 mb-4">
        Where balance keeps you upright, proprioception keeps you coherent. It is the sense that silently 
        stitches body and space together into a single, living geometry.
      </p>
      
      <h4 class="text-lg font-bold text-amber-300 mb-2 mt-6">The Outer Function — The Body’s Internal GPS</h4>
      
      <p class="text-amber-200 mb-4">
        Proprioception is sometimes called the "sixth sense" in neuroscience, though it is actually a complex 
        network of mechanosensory feedback loops. Its main sensory organs are:
      </p>
      
      <ul class="list-disc pl-5 text-amber-200 mb-4">
        <li class="mb-2">
          <strong>Muscle spindles</strong> — detect stretch and speed of muscle lengthening
        </li>
        <li class="mb-2">
          <strong>Golgi tendon organs</strong> — detect tension at the junction of muscle and tendon
        </li>
        <li class="mb-2">
          <strong>Joint capsule mechanoreceptors</strong> — detect joint angle and pressure
        </li>
        <li>
          <strong>Skin stretch receptors</strong> — contribute information about limb movement
        </li>
      </ul>
      
      <p class="text-amber-200">
        These signals travel through large myelinated Aα and Aβ fibers to the dorsal columns of the spinal cord, 
        then ascend to the somatosensory cortex (S1), cerebellum, and posterior parietal cortex.
      </p>
      
      <p class="text-amber-200 mt-4">
        This system operates continuously and unconsciously, producing a real-time body schema — a dynamic 3D model 
        of your body in space. This schema updates hundreds of times per second, allowing fluid movement, coordination, 
        and postural control.
      </p>
    </div>
  `
};

export default proprioception;
