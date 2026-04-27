---
clicks: 18
---

# Ernährung <span v-if="$clicks >= 12 && $clicks < 13" v-motion :initial="{ x: -30, opacity: 0 }" :enter="{ x: 0, opacity: 1, transition: { duration: 600 } }" class="text-2xl font-normal text-gray-300 ml-6">bis vor ca 2000 Jahren</span><span v-if="$clicks >= 13" v-motion :initial="{ x: -30, opacity: 0 }" :enter="{ x: 0, opacity: 1, transition: { duration: 600 } }" class="text-2xl font-normal ml-6 font-bold" :class="$clicks >= 13 ? 'text-red-300' : 'text-yellow-300'">heute<span class="transition-opacity duration-700" :style="{ opacity: $clicks >= 13 && $clicks < 14 ? 1 : 0 }">?</span></span>

<div class="grid grid-cols-2 gap-x-6 gap-y-13 mx-auto w-full max-w-4xl mt-16 px-8">
  <!-- Oben links: Grüner Kreis Proteine (Click 1) + Protein-Bild (Click 2) + "Wichtig" (Click 6, pulsierend) -->
  <div class="flex items-center justify-center gap-4">
    <div class="relative">
      <span
        v-if="$clicks >= 6"
        class="animate-pulse text-white text-4xl font-bold whitespace-nowrap"
        style="position: absolute; right: 100%; padding-right: 0.75rem; top: 50%; transform: translateY(-50%); animation-duration: 1s; animation-iteration-count: 3;"
      >Wichtig</span>
      <img
        src="/assets/images/baustoffe.webp"
        class="w-24 h-24 object-cover rounded transition-opacity duration-500"
        :style="{ opacity: $clicks >= 2 && $clicks < 11 ? 1 : 0 }"
      />
    </div>
    <div
      class="w-32 h-32 rounded-full bg-green-400 flex items-center justify-center transition-opacity transition-transform duration-500"
      :style="{ opacity: $clicks >= 1 ? 1 : 0, transform: $clicks >= 17 ? 'scale(0.4)' : 'scale(1)' }"
    >
      <span class="text-black text-2xl font-bold text-center">Proteine</span>
    </div>
  </div>

  <!-- Oben rechts: Fett-Kreis (Click 3) + Kohle-Bild (Click 4) + '+' und Baustoffe-Bild (Click 5) -->
  <div class="flex items-center justify-start gap-4">
    <div
      class="w-32 h-32 rounded-full bg-yellow-400 flex items-center justify-center transition-opacity transition-transform duration-500"
      :style="{ opacity: $clicks >= 3 ? 1 : 0, transform: $clicks >= 14 ? 'scale(0.4)' : 'scale(1)' }"
    >
      <span class="text-gray-800 font-bold text-center" style="font-size: 1.25rem; text-shadow: 0 2px 4px rgba(0,0,0,0.3)">Fett</span>
    </div>
    <div class="flex items-center gap-2">
      <img
        src="/assets/images/kohle.webp"
        class="w-24 h-24 object-cover rounded transition-opacity duration-500"
        :style="{ opacity: $clicks >= 4 && $clicks < 11 ? 1 : 0 }"
      />
      <span
        class="text-white text-3xl font-bold transition-opacity duration-500"
        :style="{ opacity: $clicks >= 5 && $clicks < 11 ? 1 : 0 }"
      >+</span>
      <img
        src="/assets/images/baustoffe.webp"
        class="w-24 h-24 object-cover rounded transition-opacity duration-700"
        :style="{ opacity: $clicks >= 5 && $clicks < 11 ? 1 : 0 }"
      />
    </div>
  </div>

  <!-- Unten links: Zucker-Kreis (Click 7) + Papier-Bild (Click 8) + Extra (auto nach 8) -->
  <div class="no-dim flex items-center justify-center gap-4">
    <!-- Papier-Bild: ab Click 8, verschwindet bei Click 11 -->
    <div class="relative" :style="{ visibility: $clicks >= 8 ? 'visible' : 'hidden' }">
      <span
        class="absolute right-full mr-10 text-white text-4xl font-bold whitespace-nowrap transition-opacity duration-700"
        :style="{ opacity: $clicks >= 8 ? 1 : 0, transitionDelay: $clicks >= 8 ? '0.6s' : '0s', top: '50%', transform: 'translateY(-50%)' }"
      >Extra</span>
      <img
        src="/assets/images/papier.avif"
        class="w-24 h-24 object-cover rounded transition-opacity duration-500"
        :style="{ opacity: $clicks >= 11 ? 0 : 1 }"
      />
    </div>
    <!-- Zucker-Kreis: ab Click 7, verkleinert ab Click 9 -->
    <div class="relative" :style="{ visibility: $clicks >= 7 ? 'visible' : 'hidden' }">
      <div
        class="w-32 h-32 rounded-full bg-red-500 flex items-center justify-center transition-transform duration-500"
        :style="{ transform: $clicks >= 18 ? 'scale(1.8)' : ($clicks >= 9 ? 'scale(0.5)' : 'scale(1)') }"
      >
        <span class="text-white text-2xl font-bold text-center" style="text-shadow: 0 2px 4px rgba(0,0,0,0.5)">Zucker<br/>Stärke</span>
      </div>
      <!-- Fragezeichen Overlay: Click 10 -->
      <div
        class="absolute inset-0 flex items-center justify-center transition-opacity duration-500"
        :style="{ opacity: $clicks >= 10 && $clicks < 11 ? 1 : 0 }"
      >
        <span class="text-white text-7xl font-bold" style="text-shadow: 0 3px 6px rgba(0,0,0,0.7)">?</span>
      </div>
    </div>
  </div>

  <!-- Unten rechts: Pflanzenöle (Click 14), Giftflasche (Click 15) -->
  <div class="no-dim flex items-center justify-start gap-4">
    <div
      class="no-dim w-32 h-32 rounded-full flex items-center justify-center transition-opacity duration-500"
      :style="{ opacity: $clicks >= 15 ? 1 : 0, visibility: $clicks >= 15 ? 'visible' : 'hidden' }"
      style="background: repeating-linear-gradient(45deg, #FBBF24, #FBBF24 10px, #991B1B 10px, #991B1B 20px);"
    >
      <span class="text-white text-2xl font-bold text-center" style="text-shadow: 0 2px 4px rgba(0,0,0,0.5)">Pflanzenöle</span>
    </div>
    <img
      src="/assets/images/giftflasche.webp"
      class="no-dim w-24 h-24 object-cover rounded transition-opacity duration-500"
      :style="{ opacity: $clicks >= 16 ? 1 : 0, visibility: $clicks >= 16 ? 'visible' : 'hidden' }"
    />
  </div>
</div>

<!-- Anchor: zwingt Slidev zu 18 Click-Steps -->
<span v-click="18" class="absolute opacity-0 pointer-events-none" />

<!-- Zeitstrahl: grüner Balken ab Click 12 -->
<div
  class="absolute bottom-4 left-8 right-8 transition-opacity duration-700"
  :style="{ opacity: $clicks >= 12 ? 1 : 0, transitionDelay: $clicks >= 12 ? '0.4s' : '0s' }"
>
  <div class="relative flex h-4 rounded-full overflow-visible w-full">
    <div class="bg-green-500 rounded-l-full" style="width: 98%" />
    <div class="bg-yellow-400 rounded-r-full" style="width: 2%" />
    <!-- Vertikaler hellroter Strich am Ende des Balkens ab Click 13 -->
    <div
      class="absolute right-0 top-1/2 -translate-y-1/2 w-1 bg-red-400 rounded transition-all duration-500"
      :style="{ height: $clicks >= 13 ? '2.5rem' : '0', opacity: $clicks >= 13 ? 1 : 0 }"
    />
  </div>
  <div class="text-green-300 text-lg font-bold mt-1">500.000 Jahre</div>
</div>
