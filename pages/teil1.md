---
title: Anatomie
src: ./anatomie.md
---

---
title: Arterien
---

<div class="abs-tl ml-26 mt-20 !text-(shadow-lg 6xl)">
  <h1>Arterien</h1>
  <ul class="text-xl">
    <li>Sauerstoff</li>
    <li>Nährstoffe</li>
    <li>alle Organe</li>
  </ul>
</div>
<SlidevVideo autoplay>
  <source src="/videos/vid_arterien.mp4" type="video/mp4" />
</SlidevVideo>

---
title: Erkrankungen
layout: image-left
image: /images/plaque.avif
---

# Erkrankungen

<v-clicks>

- Bluthochdruck
- Erweiterungen (Aneurysma)
- Entzündungen (rheumatisch)
- <span v-mark.underline.red="4">Arteriosklerose</span> (Arterienverkalkung)

</v-clicks>

---
layout: two-cols
---

# Arterienverkalkung

<img src="/images/Arterienwand_normal.png" class="mt-15"/>

::right::

<img src="/images/Arterienwand_artheriosklerosis2.jpg" class="mt-20" />

---
title: Plaque
layout: image
image: /images/plaque.jpg
---

## <span class="text-black font-bold text-5xl">Arterienverkalkung</span>

---
layout: image-left
image: /images/schlaganfall.avif
---

# Arterienverkalkung

## Schlaganfall

---
title: Herzinfarkt
layout: image-right
image: /images/herz.jpg
---

# Arterienverkalkung

## Herzinfarkt

---
title: pAVK
layout: image-right
image: /images/wade.jpg
---

# Arterienverkalkung

<h3 class="text-red">arterielle Verschlusskrankheit</h3>
<h3 class="text-red">pAVK</h3>

<br>

<v-clicks>

| Stadium | Beschwerden          |
| ------- | -------------------- |
| I       | keine                |
| II      | Schmerzen beim Gehen |
| III     | Schmerzen in Ruhe    |
| IV      | Wunden               |

</v-clicks>

---
title: Bahnhof
layout: image
image: /images/bahnhof.jpg
---

<div class="abs-bl left-10 bottom-10 !text-(shadow-lg 5xl)">arterielle Verschlusskrankheit</div>

---
src: ./prognose_1.md
---

---
layout: image-left
image: /images/fuesse.avif
---

# arterielle Verschlusskrankheit

<h2 class="text-red">Durchblutungsstörungen</h2>

<v-clicks>

- <span v-mark.underline.red="1">Schmerzen</span> beim Gehen<br>
  Füße, Waden, Oberschenkel, Gesäß, -einseitig
- kühle, blasse oder marmorierte Haut
- trockene Haut
- starke Verhornung
- langsam wachsende Fußnägel
- Erektionsstörungen
- schlecht heilende <span v-mark.underline.red="7">Wunden</span>

</v-clicks>

---
layout: image-left
image: /images/fusspulse.jpg
clicks: 6
---

## Untersuchung

<v-clicks>

- Fußpulse
- ABI-Messung
- Ultraschalluntersuchung
- Computertomografie
- Kernspin-Untersuchung

</v-clicks>

  <el-hand-right v-if="$clicks === 6" class="motion-translate-x-loop-25 motion-blur-in-sm size-10 mt-5 ml-6 text-yellow-5" v-click/>

---
title: ABI
layout: image
image: /images/abi-messung.jpg
---

<div class="abs-tl left-26 top-10 !text-(shadow-lg 4xl) text-black">ABI-Messung</div>

---
title: ABI-Ausdruck
layout: image
image: /images/abi.jpg
---

<span v-mark="{ at: 1, color: 'blue', type: 'circle', strokeWidth: '7' }" class="text-transparent abs-tl mt-108 ml-60">XXXXXXXX</span>
<span v-mark="{ at: 2, color: 'blue', type: 'circle', strokeWidth: '7' }" class="text-transparent abs-tl mt-22 ml-60">XXXXXXXX</span>
<span v-mark="{ at: 3, color: 'blue', type: 'circle', strokeWidth: '7' }" class="text-transparent abs-tl mt-66 ml-60">XXXXXXXXXX</span>

---
title: Ultraschall
---

<SlidevVideo autoplay class="abs-tl">
  <source src="/videos/us.mp4" type="video/mp4" />
</SlidevVideo>

<div class="abs-bl bottom-10 !text-(shadow-lg 4xl) ">Ultraschall-Untersuchung</div>

---
title: ct
layout: two-cols
---

<img src="/images/ct.jpg" class="w-70"/>

::right::

<SlidevVideo autoplay>
  <source src="/videos/3dct.mp4" type="video/mp4"/>
</SlidevVideo>

---
layout: image-right
image: ./images/amputation.gif
clicks: 4
---

## Behandlungsmöglichkeiten

<v-clicks>

- Gehtraining
- PTA (Aufdehnen)
- Operationen
  - Ausschäl-Operation
  - Bypass-Operation

</v-clicks>

<el-hand-right v-if="$clicks === 4" class="motion-translate-x-loop-25 motion-blur-in-sm size-10 mt-5 ml-6 text-yellow-5" v-click/>

---
title: Gehtraining
layout: two-cols
---

<div class="abs-tl ml-20 mt-16 !text-(shadow-lg 5xl)">Gehtraining</div>

<img src="/images/gehtraining.jpeg" class="object-cover h-full"/>

::right::

<img src="/images/kollateralen.jpg" class="h-full"/>

---
layout: image
image: /images/pta_illu.jpg
backgroundSize: 60%
---

# PTA

---
title: pta
---

<div class="abs-tl ml-20 mt-16 !text-(shadow-lg 6xl)">PTA</div>

<SlidevVideo autoplay controls>
  <source src="/videos/pta.mp4" type="video/mp4" />
</SlidevVideo>

<Arrow class="timed-fadeout" x1="500" y1="350" x2="440" y2="300" width="3" color="red" />

<style>
.timed-fadeout {
  opacity: 1;
  animation: fadeOut 18s forwards;
}

@keyframes fadeOut {
  0%, 83.33% { /* 5/6 of the animation = 83.33% */
    opacity: 1;
  }
  100% {
    opacity: 0;
    visibility: hidden;
  }
}
</style>

---
title: Carotis-TEA
---

<SlidevVideo autoplay class="abs-tl">
  <source src="/videos/carotis_tea.mp4" type="video/mp4" />
</SlidevVideo>

<div class="abs-tl ml-40 mt-16 !text-(shadow-lg 6xl)">TEA</div>

## TEA

---
layout: image
image: /images/bypass_illu.jpg
backgroundSize: 50%
---

# Bypass

---
layout: image-right
image: /images/avk.webp
clicks: 6
---

<v-clicks depth="2">

## Ursache

<div class="mb-8"><noto-fire class="mr-4 size-8 text-blue-400" />Gefäßentzündung</div>

## Risikofaktoren

<div class="relative flex flex-col space-y-4 mt-8">
  <div class="flex">
    <fluent-emoji-cigarette class="mr-4 size-8" />
    <div class="mt-2">Rauchen</div>
    <div v-if="$clicks >= 5" class="relative">
      <checkmark class="absolute ml-2" />
    </div>
  </div>
    <medical-icon-i-genetics class="mr-4 size-8 text-blue-400" />Veranlagung
  <div><noto-candy class="mr-4 size-8" />Zuckerkrankheit</div>
  <div><fluent-emoji-flat-butter class="mr-4 size-8" />Fettstoffwechselstörungen</div>
  <div><healthicons-blood-pressure-monitor-outline class="mr-4 size-8 text-red-400" />Bluthochdruck</div>
</div>

</v-clicks>

  <div v-if="$clicks === 6" class="">
    <img src="/icons/klammer.png" class="absolute top-84 left-80 h-35 w-5 inline-block align-top" />
    <span class="absolute top-97 left-88 text-2xl !opacity-100">Ernährung</span>
  </div>

<style>
img {
  filter: invert(100%)
}

</style>
