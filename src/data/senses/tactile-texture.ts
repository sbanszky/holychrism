import { Sense } from '@/types';

const tactileTexture: Sense = {
  id: 'tactile-texture',
  title: 'Tactile Texture – The Surface Sense',
  category: 'The Hidden Senses – The Inner Compass',
  content: `
    <div class="border-l-2 border-amber-700 pl-4 py-2">
      <h3 class="text-xl font-bold text-amber-300 mb-2">Tactile Texture – The Surface Sense</h3>
      <p class="text-amber-200">If nociception guards and pruriception alerts, then <strong>tactile texture sense reveals.</strong></p>
      <p class="text-amber-200">It is the capacity to distinguish the <strong>fine structure</strong> of surfaces — the grain of wood, the weave of fabric, the ridges of a fingerprint, the velvet of a petal. This is not about pain or temperature, but <strong>shape, pattern, and micro-detail</strong>, perceived directly through the skin.</p>
      <p class="text-amber-200">It is the sense that lets a blind reader feel words on a page, a weaver sense thread tension, or a child explore the world through curious fingertips.</p>
      <p class="text-amber-200">Texture sense is the <strong>skin’s sight</strong> — a way of seeing without eyes.</p>
      
      <hr class="my-4 border-amber-800">
      
      <h4 class="text-lg font-semibold text-amber-300 mt-4 mb-2">The Outer Function — Mechanoreceptors for Detail</h4>
      <p class="text-amber-200">Texture perception is mediated mainly by <strong>cutaneous mechanoreceptors</strong>, each specialized for a different aspect of touch:</p>
      <ul class="list-disc list-inside text-amber-200 pl-4">
        <li>
          <strong>Merkel cell–neurite complexes</strong>
          <ul class="list-[circle] list-inside pl-4">
            <li>Found in the basal epidermis and hair follicles</li>
            <li>Slowly adapting type I (SAI) receptors</li>
            <li>Detect fine edges, points, and surface texture</li>
            <li>High spatial resolution (~0.5 mm)</li>
          </ul>
        </li>
        <li>
          <strong>Meissner corpuscles</strong>
          <ul class="list-[circle] list-inside pl-4">
            <li>Located in dermal papillae, especially in fingertips</li>
            <li>Rapidly adapting (RA) receptors</li>
            <li>Detect low-frequency skin motion (flutter, slip)</li>
            <li>Crucial for grip control and micro-vibration</li>
          </ul>
        </li>
        <li>
          <strong>Ruffini endings</strong>
          <ul class="list-[circle] list-inside pl-4">
            <li>Slowly adapting type II (SAII) receptors</li>
            <li>Sense skin stretch, important for shape and hand conformation</li>
          </ul>
        </li>
        <li>
          <strong>Pacinian corpuscles</strong>
          <ul class="list-[circle] list-inside pl-4">
            <li>Deep in dermis/subcutis</li>
            <li>Very rapidly adapting</li>
            <li>Detect high-frequency vibration (~200 Hz) from fine surface textures during movement</li>
          </ul>
        </li>
      </ul>
      <p class="text-amber-200">Signals from these receptors travel via <strong>Aβ fibers</strong> to the <strong>dorsal column–medial lemniscal pathway</strong>, synapsing in the <strong>gracile and cuneate nuclei</strong>, then crossing to the <strong>ventroposterior thalamus</strong> and finally to the <strong>primary somatosensory cortex (S1)</strong>.</p>
      <p class="text-amber-200">Texture perception especially activates <strong>area 3b</strong> of S1 and the <strong>secondary somatosensory cortex (S2)</strong>, which integrate touch features into coherent surface representations.</p>
    </div>
  `
};

export default tactileTexture;
