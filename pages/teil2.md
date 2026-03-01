---
title: -- Gesundheit ist Eigenverantwortung
layout: center
class: text-center text-6xl
---

# <span class="text-6xl">Gesundheit</span>

<div class="text-3xl m-8">ist</div>

# <span class="text-6xl">Eigenverantwortung</span>

---
title: meiden
layout: two-cols
clicks: 2
---

# Ernährung

## Vorsicht bei ...

<div class="mt-6 h-50">
  <img src="/images/raffinierte-kh.jpg" />
  <line-md:remove v-if="$clicks >= 1" class="abs-tl size-90 top-30 left-24" style="color: #d91d1d"/>
  <div class="mt-6">Kohlenhydraten / Zucker</div>
</div>

::right::

<div>
  <line-md:remove v-if="$clicks >= 2" style="color: #d91d1d" class="abs-tr size-90 right-25 top-26"/>
  <img src="/images/sonnenblumenöl.webp" class="size-100"/>
  <div class="mt-6 ml-12">industriell hergestellte pflanzliche Öle<br>( z.B. Sonnenblumenöl )</div>
</div>

---
title: Was ist gesunde Ernährung ?
---

<br><br>

# Was ist gesunde Ernährung ?

---
title: Das Problem mit den Ernährungsempfehlungen
---

<br><br>

## Das Problem mit den

# Ernährungsempfehlungen

---
clicks: 7
---

# DGE-Ernährungs-

# Empfehlungen 2025

<img src="/images/dge-ernaehrungskreis.webp" class="size-120 abs-tr top-5 right-10"/>
<br>

<v-clicks>

- überwiegend Kohlenhydrate bzw Zucker
- ballaststoffreich
- viel Getreide
- wenig Proteine
- wenig Fette

</v-clicks>

<v-click>
  <PieChart :percentages="[85, 5, 10]" :open="$clicks >=6"></PieChart>
  <div v-mark="{ at:7 , color: 'red', type: 'circle', strokeWidth: '4' }" class="relative bottom-24 left-54 h-8 w-42" />
</v-click>

<span class="abs-br py-4 pr-20">DGE (Deutsche Gesellschaft für Ernährung e.V.)</span>

---
title: Tante Emma
layout: image
image: /images/TanteEmma.jpg
backgroundSize: contain
---

---
title: Rauchen ist gesund
layout: image
image: /images/rauchen.webp
backgroundSize: contain
---

---
title: Eisenhauer
layout: image
image: /images/eisenhauer.jpg
backgroundSize: contain
---

---
title: Ancel Keys
layout: image
image: /images/1961.jpg
backgroundSize: contain
---

---
title: -- Die Cholesterinhypothese
---

### Die Cholesterinhypothese

<v-clicks>

- 1913: Nikolai Anitschkow Kaninchen-Versuch mit tierischer Nahrung
- 1950er: in den USA sterben fast eine halbe Million Menschen jedes Jahr an einem Herzinfarkt
- 1955: US-Präsident Dwight D. Eisenhower einen Herzanfall, den er knapp überlebt
- Ancel Keys (University of Minnesota): Diet-Heart-Hypothesis<br>
  -> Vergleich vom Fettkonsum in 6-7 Länder in 2 Studien<br>
- George Mann: Framingham-Heart-Study<br>
  -> Massai-Krieger (Fleisch, Milch und Rinderblut) trotzdem keine Gefäßerkrankungen
- 1970er: John Yudkin (University of London)<br>
  sieht raffinierte Kohlenhydrate, insbesondere Zucker als das Hauptproblem
- 1980 Dietary Guidelines (allen Menschen wird eine fettarme Ernährung empfohlen)<br>
  - Margarine statt Butter, Fettarme Milch, Joghurt, Quark und Käse
  - Seefisch und Nüsse werden zu "Dickmacher"
  - Vermehrter Einsatz von raffinierten Speiseölen (reich an Omega-6 Fettsäuren) und Zucker
- 2007 Professor Gardner A to Z Study - Low-Carb-Diät<br>
  - Cholesterin stieg, Trigyceride halbiert, Gewichtsabnahme, Blutdruckabnahme

</v-clicks>

---
title: folgen den Richtlinien 1
layout: image
image: /images/folgen_den_richtlinien_1.jpeg
backgroundSize: 30rem
---

<span class="abs-tr mt-28 mr-8 text-2xl font-black">pro Kopf Verzehr</span>

<div class="abs-tr mr-5 mt-41 font-black text-blue-1 text-xl">
  <v-clicks>
    <div>+ frisches Gemüse</div>
    <div class="mt-10">+ frisches Obst</div>
    <div class="mt-6">+ Getreideprodukte</div>
    <div class="mt-6">+ pflanzliche Öle<span class="text-red"> +87%</span></div>
  </v-clicks>
</div>

<div class="abs-tr mr-20 mt-80 text-red-2 text-xl font-black">
  <v-clicks>
    <div>- rotes Fleisch</div>
    <div class="mt-3">- Vollmilch</div>
    <div>- Eier</div>
    <div>- tierische Fette</div>
    <div>- Butter</div>
  </v-clicks>
</div>

---
title: folgen den Richtlinien 2
layout: image
image: /images/folgen_den_richtlinien_2.jpeg
backgroundSize: 30rem
---

<span class="abs-tr mt-20 mr-8 text-2xl font-black">Kalorien pro Kopf</span>

<div class="abs-tr mr-14 mt-34 font-black text-blue-1 text-xl">
  <v-clicks>
    <div>+ Getreideprodukte</div>
    <div class="abs-tl mt-5">+ pflanzliche Öle<span class="abs-tr -right-17 text-red"> +97%</span></div>
    <div class="mt-12">+ zugesetzte Zucker</div>
    <div class="mt-9">+ Obst u Gemüse</div>
    <div class="mt-12">+ Nüssen</div>
  </v-clicks>
</div>

<div class="abs-tr mr-20 mt-45 text-red-2 text-xl font-black">
  <v-clicks>
    <div>&nbsp;&nbsp;Fleisch u Eier</div>
    <div class="mt-12">- Milchprodukte</div>
    <div class="mt-12">- tierische Fette</div>
  </v-clicks>
</div>

---
title: folgen den Richtlinien 3
layout: image
image: /images/folgen_den_richtlinien_3.jpeg
backgroundSize: 30rem
---

<span class="abs-tr mt-15 mr-8 text-2xl font-black">Kalorien pro Kopf</span>

<div class="abs-tr mt-28 font-black text-blue-1 text-xl">
  <v-clicks>
  <div>+ gesamt</div>
  <div class="mt-17">+ pflanzliche ohne Zucker</div>
  <div class="mt-12">+ zugesetzte Zucker</div>
  <div class="">+ Obst u Gemüse</div>
</v-clicks>
</div>

<div class="abs-tr mr-10 mt-63 text-red-2 text-xl font-black">
  <v-clicks>
  <div>- tierische Produkte</div>
</v-clicks>
</div>

---
title: folgen den Richtlinien 4
layout: image
image: /images/folgen_den_richtlinien_4.jpg
backgroundSize: 40rem
---

<div class="abs-tr right-2 mt-42 font-black text-white text-xl">
  <v-clicks>
  <div>+ Kohlenhydrate</div>
  <div class="mt-17">- Fette</div>
  <div class="mt-16">- gesättigte Fette</div>
</v-clicks>
</div>

---
layout: image
image: /images/Übergewicht-in-den-USA.jpg
backgroundSize: 70%
---

## Die Amerikaner folgen den Ernährungsempfehlungen

---
title: Helsinki Businessmen Study
---

<img src="/images/helsinki.png" class="w-170 abs-tl top-5 right-10"/>

<div v-mark="{ at: 1, color: 'green', type: 'underline', strokeWidth: '4' }" class="absolute left-6 top-53 h-6 w-29" />
<div v-mark="{ at: 2, color: 'green', type: 'underline', strokeWidth: '4' }" class="absolute left-6 top-56 h-6 w-26" />
<div v-mark="{ at: 3, color: 'green', type: 'underline', strokeWidth: '4' }" class="absolute left-33 top-56 h-6 w-7" />
<div v-mark="{ at: 4, color: 'green', type: 'underline', strokeWidth: '4' }" class="absolute left-47 top-56 h-6 w-15" />
<div v-mark="{ at: 5, color: 'red', type: 'underline', strokeWidth: '4' }" class="absolute left-17 top-60 h-6 w-15" />
<div v-mark="{ at: 6, color: 'red', type: 'underline', strokeWidth: '4' }" class="absolute left-34 top-60 h-6 w-7" />
<div v-mark="{ at: 7, color: 'red', type: 'underline', strokeWidth: '4' }" class="absolute left-48 top-60 h-6 w-31" />
<div v-mark="{ at: 8, color: 'blue', type: 'underline', strokeWidth: '4' }" class="absolute left-6 top-63 h-6 w-32" />
<div v-mark="{ at: 9, color: 'blue', type: 'underline', strokeWidth: '4' }" class="absolute left-47 top-63 h-6 w-16" />
<div v-mark="{ at: 10, color: 'blue', type: 'underline', strokeWidth: '4' }" class="absolute left-6 top-67 h-6 w-26" />
<div v-mark="{ at: 11, color: 'blue', type: 'underline', strokeWidth: '4' }" class="absolute left-6 top-70 h-6 w-25" />

<div class="bg-red-500/50 w-58 h-4 abs-tl top-13 left-40" />
<div v-click=12 class="bg-red-500/50 w-18 h-4 abs-tl top-97 left-26" />
<div  v-click=13 class="text-blue-900 abs-tl left-8 top-100 font-black" v-motion :initial="{ y: 80 }" :enter="{ y: 0 }">Reduktion des Herzinfarkt-Risikos</div>
<div v-click=14 class="bg-red-500/50 w-12 h-4 abs-tl top-90 left-142" />
<div v-click=14 class="bg-red-500/50 w-15 h-4 abs-tl top-94 left-99" />
<div  v-click=15 class="text-red-600 abs-tl left-89 top-100 font-black" v-motion :initial="{ y: 80 }" :enter="{ y: 0 }">führte zur erhöhten Sterblichkeit</div>

<div class="abs-tr right-20">
<div class="mt-4 text-green">mehr</div>
<v-clicks>

- Sport/Bewegung
- Gemüse
- Früchte
- Vollkornprodukte

</v-clicks>

<div class="mt-4 text-red">weniger</div>
<v-clicks>

- gesättigte Fetten
- Süßigkeiten
- gezuckerte Getränke

</v-clicks>
<br>
<v-clicks>

- Gewichtskontrolle
- Rauchen einstellen
- Blutdruck
- Cholesterinsenker

</v-clicks>

</div>

---
title: Urlaub
layout: image
image: /images/helsinki_urlaub.png
backgroundSize: contain
---

---
title: -- Das Problem mit der Genetik
---

<br><br>

## Das Problem mit der

# **Genetik**

---
title: Massai
layout: image
image: /images/massai.jpg
backgroundSize: contain
---

---
title: Inuit
layout: image
image: /images/inuit.jpg
backgroundSize: contain
---

---
title: -- Das Problem mit den Studien
---

<br><br>

## Das Problem mit den

# **Studien**

---
title: Studien
layout: image-right
image: /images/finanzierung2.jpg
---

<br><br>

# Studien

<v-clicks>

- wer hat die Studie finanziert
- Studiendesign
  - retrospective vs prospektive Studie
  - Größe der Studie
  - womit wird verglichen
  - Untersuchungszeitraum
- Offenlegung aller Ergebnisse
- Wiederholbarkeit der Ergebnisse
- Interpretation der Ergebnisse

</v-clicks>

---
title: Mehrländerstudie
---

<SlidevVideo autoplay>
  <source src="/videos/keys.mp4" type="video/mp4" />
</SlidevVideo>

---
title: Fragebogen
layout: image
image: /images/fragebogen.gif
backgroundSize: contain
---

---
title: Relatives Risiko
layout: image
image: /images/RelativesRisiko.png
backgroundSize: contain
---

---
title: Relatives Risiko
layout: image-left
image: /images/roulette.jpg
---

<br><br>

# Ernährungsforschung

<br><br>

<v-clicks>

## überwiegend **WERTLOS**

## meist Missbraucht für Werbezwecke

</v-clicks>

---
title: -- Das Problem mit den sekundären Pflanzenstoffen
---

<br><br>

## Das Problem mit den

# **sekundären Pflanzenstoffen**

---
title: Sekundäre Pflanzenstoffe
layout: image
image: /images/sekundaerePflanzenstoffe.jpeg
backgroundSize: 100%
---

---
title: biochemie
layout: image
image: /images/Biochemie.jpeg
backgroundSize: 100%
---

---
title: -- Das Problem mit den Nährstoffen
---

<br><br>

## Das Problem mit den

# **Nährstoffen**

---
layout: image-right
image: /images/baustoffe.webp
---

# Proteine = Eiweiß

<span class="*:size-12 *:mx-2">
  <twemoji-cut-of-meat />
  <emojione-v1-fish />
  <fluent-emoji-flat-glass-of-milk />
  <twemoji-cheese-wedge />
  <emojione-egg />
  <twemoji-beans />
  <img src="/icons/walnut.png" class="inline-block align-top"/>
</span>

<br>
<br>

### Baustoff

#### kann nicht gespeichert werden

<br>
<v-clicks>

- Reparatur
- Organe, Muskeln, Knochen, Gelenke, Haut
- Antikörper
- Enzyme
- Hormone
- Transport
- mind 0,8mg pro kg KG am Tag

</v-clicks>

---

## Eiweiß - Proteine

<span class="*:size-12 *:mx-2">
  <twemoji-cut-of-meat />
  <emojione-v1-fish />
  <fluent-emoji-flat-glass-of-milk />
  <twemoji-cheese-wedge />
  <emojione-egg />
  <twemoji-beans />
  <img src="/icons/walnut.png" class="inline-block align-top"/>
</span>

<v-clicks>

- Baumaterial
- ca 20 % der Körpermasse
- ca 50.000 verschiedene Eiweißstoffe im menschlichen Körper
- Grundbausteine sind die 20 Aminosäuren
- davon 9 Aminosäuren <span v-mark.underline.red="5">unentbehrlich</span> !
  > Weizen fehlt es an der <span class="text-red-300 font-bold">Lysin</span><br>
  > Hülsenfrüchten mangelt es an <span class="text-red-300 font-bold">Methionin</span>
- Aufnahme behindert durch Magenschutztabletten
- tgl ca 300 g Eiweiß recycled
- überschüssige Eiweiße werden verbrannt

</v-clicks>

<img src="/images/darm_eiweiss.jpg" class="abs-br w-130 p-4"/>

---
title: Angst Fette
layout: image
image: /images/panik.jpg
backgroundSize: 150%
clicks: 1
---

<div v-if="$clicks === 1" class="abs-br mr-20 mb-16 !text-(shadow-lg 9xl) motion-preset-[pop slide-up focus] motion-delay-100 motion-preset-shake motion-delay-50">Fette</div>

---

<div class="grid grid-cols-2 gap-4">

<div>

## Fett

<br>

<v-click>

### gesättigte Fettsäuren

</v-click>

<div class="flex justify-between mb-20">
  <div v-click=1 class="flex space-x-2xl *:size-12">
    <img class="size-12" src="/icons/butter2.png"/>
    <noto-v1-bacon/>
    <emojione-avocado/>
    <twemoji-coconut/>
  </div>
  <div>
    <span v-click class="mr-10">Brennstoff</span><br>
    <span v-click v-mark.underline.red="3">Vitamine</span>
  </div>
</div>

<v-click at=4>

### ungesättigte Fettsäuren

</v-click>

<div class="flex justify-between">
  <div v-click=4  class="flex space-x-2xl *:size-12">
    <img src="/icons/olive-oil.png"/>
    <openmoji-olive/>
    <emojione-v1-sunflower/>
    <twemoji-fish/>
  </div>
  <div v-click=5 class="mr-10 pt-4">Chemikalien</div>
</div>

</div>

<div>
  <img src="/images/kohle.webp" class="h-60"/>
  <img src="/images/putzmittel.avif" class="h-54 mt-4"/>
</div>
</div>

---
title: gesättigte vs ungesättigte FS
---

## Fette<span class="ml-4 space-x-2"><img class="size-12 inline" src="/icons/butter2.png"/><noto-v1-bacon/><emojione-avocado/><twemoji-coconut/></span><br><br>

<img src="/images/butter.jpg" class="abs-tl w-80 mt-30 ml-14" />
<img src="/images/Öl.jpg" class="abs-tl w-80 mt-81 ml-14" />
<img src="/images/fettsaeure_ges.jpg" class="abs-tr w-120 h-45 mt-30 mr-14" />
<img src="/images/infachungesaettigte.jpg" class="abs-tr w-120 h-45 mt-81 mr-14" />
<span class="abs-tr text-red-500 mr-30 mt-20 text-2xl font-bold">Fettsäuren</span>
<span class="abs-tr text-red-500 mr-30 mt-30 text-2xl font-bold">gesättigt</span>
<span class="abs-tr text-red-500 mr-30 mt-81 text-2xl font-bold">ungesättigt</span>
<span class="abs-tr text-red-500 mr-30 mt-118 text-2xl font-bold">mehrfach ungesättigt</span>

---
title: alle FS
---

## Fette<span class="ml-4 space-x-2"><img class="size-12 inline" src="/icons/butter2.png"/><noto-v1-bacon/><emojione-avocado/><twemoji-coconut/></span><br><br>

<img src="/images/Übersicht-Fettsäuren.jpg" class="abs-tl w-180 mt-30 ml-14" />
<span class="abs-tr text-red-500 mr-10 mt-45 text-2xl font-bold">Brennstoff</span>
<span class="abs-tr text-red-500 mr-12 mt-75 text-2xl font-bold">essentiell</span>

---
title: Transfette
layout: image-right
image: /images/transfette.avif
---

## Transfette <emojione-v1-black-skull-cross-bones class="ml-6"/>

<v-clicks>

- Pommes, Chicken Wings, Krapfen
- Sonnenblumenölmargarine
- Chips, Cornflakes
- Wurst
- Fertigsuppen
- Müsliriegel
- Cappuccino-Pulver
- <span v-mark.underline.red="8">Fertiggerichte</span>

</v-clicks>

<!--
In Dänemark dürfen Lebensmittel bereits seit 15 Jahren nicht mehr als zwei Prozent Transfette enthalten. Seitdem ist die Zahl der Herzerkrankungen laut einer Studie deutlich zurückgegangen, um etwa 700 Todesfälle pro Jahr. In Deutschland gibt es derzeit keine gesetzlichen Regelungen für Transfette in Lebensmitteln.
-->

---
title: Samenoel Herstellung
layout: two-cols-header
---

## Industriell hergestellte Samenöle (Sonnenblumenöl) <emojione-v1-black-skull-cross-bones class="ml-6"/>

::left::

<SlidevVideo autoplay>
  <source src="/videos/oel.mp4" type="video/mp4" />
</SlidevVideo>

::right::

<div class="abs-tr mt-20">

Herstellung:

<v-clicks>

- Presskuchen 140°C -> Öle
- chemische Lösungsmittel -> Hexan/Waschbenzin
- Phosphaten -> entschleimt
- Natronlauge -> neutralisiert
- Bleicherde
- desodoriert -> 270°C /60 Min
- Haltbarkeit -> TBHQ, BHT oder BHA

</v-clicks>

Es entstehen:

<v-clicks>

- schädliche Esterverbindungen und Aldehyde
- Kohlenwasserstoffe (PAK)
- stark oxidiertes Produkt

</v-clicks>
</div>

---
title: Tabelle Omega 6
layout: two-cols
image: /images/sonnenblumenöl.webp
backgroundSize: 90%
---

### mehrfach ungesättigte Fettsäuren

#### Pflanzenöle

<img src="/images/sonnenblumenöl.webp" class="abs-bl w-90 mb-5 ml-14" />

::right::

<fluent-color-warning-16 class="text-xl abs-tr mt-42 mr-125" />

| Öl             | Linolsäure | Omega 6/3 |
| -------------- | ---------- | --------- |
| Erdnussöl      | 28%        | 182:1     |
| Distelöl       | 70%        | 160:1     |
| Traubenkernöl  | 70%        | 135:1     |
| Sonnenblumenöl | 66%        | 120:1     |
| Kürbiskernöl   | 50%        | 110:1     |
| Maiskaimöl     | 60%        | 50:1      |
| Sesamöl        | 45%        | 22:1      |
| Olivenöl       | 10%        | 10:1      |
| Sojaöl         | 55%        | 8:1       |
| Weizenkeimöl   | 50%        | 7:1       |
| Walnussöl      | 50%        | 4:1       |
| Leinenöl       | 50%        | 3:1       |
| Hanföl         | 50%        | 3:1       |
| Rapsöl         | 20%        | 3:1       |
| Reiskleieöl    | 30%        | 1:3       |

<style>
th, td {
  font-size: 12px;
  padding: 6px;
  text-align: left;
}
tr:nth-child(n+1):nth-child(-n+6) {color: LightPink}
</style>

---
title: FS vs Cholesterin
---

## Cholesterin

<img src="/images/vgl_trigl_chol.jpg" class="abs-tl w-180 mt-30 ml-14" />

---

## Cholesterin

- wird in der Leber produziert
- notwendiger Baustein der Zellmembran
- unverzichtbar bei der Verdauung
- Grundbaustein bei der Hormonproduktion
- Bildung von Vitamin-D
- das Gehirn besteht zu 25% aus Cholesterin

---

## Lipoproteine

<v-clicks>

<img src="/images/fett_wasser.jpg" class="abs-tl w-100 mt-20 ml-14" />
<img src="/images/Aufbau-Lipo.jpg" class="abs-bl w-100 mb-3 ml-14" />
<img src="/images/lipoproteine.webp" class="abs-tr w-100 h-55 mt-20 mr-14" />

<SlidevVideo autoplay class="abs-br w-100 mb-3 mr-14">
  <source src="/videos/zellmembran.mp4" type="video/mp4" />
</SlidevVideo>

</v-clicks>

---
title: Lipoprotein Kreislauf
---

## Lipoproteine

### Kreislauf

<img src="/images/bad_lp.png" class="abs-tl w-114 mb-3 ml-12" />
<img src="/images/Lipoproteinen.jpg" class="abs-tr w-100 mt-38 mr-14" />

---
title: oxLDL
---

## Lipoproteine

<span>Zuckerreiche Ernähung</span>

<v-clicks>

<img src="/images/ldl_typb.jpg" class="abs-tl w-90 mt-30 ml-14" />
<img src="/images/gef_wand_1.jpg" class="abs-tr w-90 mt-30 mr-14" />
<img src="/images/oxy_ldl2.jpg" class="abs-bl w-90 h-51 mb-5 ml-14" />
<img src="/images/gef_wand_2.jpg" class="abs-br w-90 mb-5 mr-14" />

</v-clicks>

---
title: Schaumzellen
---

## Lipoproteine

<img src="/images/chol_plaque.jpg" class="abs-tl w220 mt-25 ml-14" />

---
title: neues Model ox-LDL
layout: image
image: /images/ox-LDL.jpg
backgroundSize: 70%
---

---
title: -- Das Problem mit den Kohlenhydraten
---

<br><br>

## Das Problem mit den

# **Kohlenhydraten / Zucker**

---
layout: image-right
image: /images/papier.avif
---

## Kohlenhydrate

<div class="*:size-12 *:m-2" >
  <emojione-baguette-bread />
  <emojione-croissant />
  <emojione-pancakes />
  <noto-cooked-rice />
  <emojione-spaghetti />
  <emojione-hamburger />
  <emojione-pizza />
  <twemoji-banana />
  <streamline-emojis-candy />
  <img src="/icons/ketchup.png" class="inline-block align-top"/>
  <noto-beverage-box />
  <img src="/icons/cola.png" class="inline-block align-top"/>
</div>

<br>
<br>

### Brennstoff

#### Schnell verfügbare Energie

#### Speicherbar

<v-clicks depth="2">

- Leber (kurzfristige Energie ca 90 Min)
- Fett (langfristig)

</v-clicks>

---

## Kohlenhydrate

<div class="*:size-12 *:m-2" >
  <emojione-baguette-bread />
  <emojione-croissant />
  <emojione-pancakes />
  <noto-cooked-rice />
  <emojione-spaghetti />
  <emojione-hamburger />
  <emojione-pizza />
  <twemoji-banana />
  <streamline-emojis-candy />
  <img src="/icons/ketchup.png" class="inline-block align-top"/>
  <noto-beverage-box />
  <img src="/icons/cola.png" class="inline-block align-top"/>
</div>
<br><br>

### Natürlich vorkommende Kohlenhydrate

<img src="/images/gute-kh.webp" class="abs-bl w-110 m-6 ml-10"/>
<img src="/images/verdauung_kohlenhydrate.jpg" class="abs-br w-110 m-6 mr-10"/>

---

## Kohlenhydrate

<div class="*:size-12 *:m-2" >
  <emojione-baguette-bread />
  <emojione-croissant />
  <emojione-pancakes />
  <noto-cooked-rice />
  <emojione-spaghetti />
  <emojione-hamburger />
  <emojione-pizza />
  <twemoji-banana />
  <streamline-emojis-candy />
  <img src="/icons/ketchup.png" class="inline-block align-top"/>
  <noto-beverage-box />
  <img src="/icons/cola.png" class="inline-block align-top"/>
</div>
<br>

### Raffinierte Kohlenhydrate

#### Zucker = Mehl

<img src="/images/raffinierte-kh.jpg" class="abs-bl w-93 m-6 ml-10"/>
<div class="relativ">
  <img src="/images/verdauung_zucker.jpg" class="abs-br w-110 m-6 mr-10"/>
</div>

---
title: Insulin
---

## Kohlenhydrate<span class="ml-4 space-x-2"><emojione-baguette-bread class="size-12"/><img src="/icons/wuerfelzucker.png" class="inline-block align-top size-12"/></span>

### <br>Zucker

<v-clicks>

- bevorzugte Energiequelle <twemoji-thinking-face class="size-8 ml-2" />
- kann Gewebestrukturen schädigen<br>
  -- karamellisieren (HbA1c)

</v-clicks>

### <br>Insulin

<v-clicks>

- Masthormon
- schleust Zucker in die Zelle
- fördert die Bildung von Fett
- verhindert den Fettabbau

</v-clicks>

<img v-if="$clicks >= 2" src="/images/Apfel-Karamell.png" class="abs-tr w-50 mt-14 mr-70"/>
<!-- <img v-if="$clicks >= 2" src="/images/zellmembran.gif" class="abs-tr w-45 mt-14 mr-20"/> -->
<!-- <img src="/images/insulinrezeptor.jpg" class=" abs-br w-100 m-6 mr-20" v-if="$clicks === 7" /> -->
<img src="/images/insulinrezeptor2.jpg" class=" abs-br w-100 h-70 m-6 mr-20" v-if="$clicks >= 2" />

---
title: Nüchtern-BZ
---

## Kohlenhydrate<span class="ml-4 space-x-2"><emojione-baguette-bread class="size-12"/><img src="/icons/wuerfelzucker.png" class="inline-block align-top size-12"/></span><br><br>

<oui-dot class="text-green-500 absolute text-3xl left-10 top-44" v-click="1" />
<oui-dot class="text-yellow-500 absolute text-3xl left-10 top-78"  v-click="2"/>
<oui-dot class="text-red-500 absolute text-3xl left-10 top-94"  v-click="3" />

### moderater Zucker- und Mehl-Konsum<img src="/icons/wuerfelzucker.png" class="inline-block align-top size-6 ml-2"/><br>

<v-click>

- Nüchtern Insulin und Blutzucker im Normbereich<br>
  <span class="ml-4">= gesund</span>

</v-click>

### <br>erhöhter Konsum<img src="/icons/wuerfelzucker.png" class="inline-block align-top size-6 ml-2"/><img src="/icons/wuerfelzucker.png" class="inline-block align-top size-6 ml-2"/><img src="/icons/wuerfelzucker.png" class="inline-block align-top size-6 ml-2"/>

<v-click>

- nüchtern-Insulin<mdi-arrow-up-thin class="text-xl" /> (bis 10x) Blutzucker normal<br>
  <span class="ml-4">= Prä-Diabetes <span v-mark.underline.red="2">(viele Jahre unentdeckt)</span></span>

</v-click>
<v-click>

- nüchtern-Insulin<mdi-arrow-up-thin class="text-xl" /> -Blutzucker<mdi-arrow-up-thin class="text-xl" /> <br>
  <span class="ml-4">= Diabetes</span>

</v-click>

<div class="abs-br">
  <el-arrow-up v-if="$clicks >= 2" class="absolute text-blue-500 top-40 left-70 size-12 motion-translate-y-loop-25"/>
  <img src="/images/insulin_kurve.png" class=" w-95 mr-20 mb-20" />
</div>

---
title: Ärzteblatt
layout: image
image: /images/aerzteblatt.png
backgroundSize: 38%
---

---
title: Prädiabetes
---

## Kohlenhydrate<span class="ml-4 space-x-2"><emojione-baguette-bread class="size-12"/><img src="/icons/wuerfelzucker.png" class="inline-block align-top size-12"/></span>

## Prä-Diabetes

<div class="grid grid-cols-2 gap-4">
<div>

### <span class="text-red-300">Symptome</span>

<v-clicks>

- Gewichtszunahme
- Heißhunger
- Schwäche
- Müdigkeit
- Erhöhte Neigung zu Infektionen (Haut, Genitale, Harnwege)
- Verzögerte Wundheilung
- ...

</v-clicks>

</div>
<div>

### <span class="text-red-300">Folgen</span>

<v-clicks>

- Bluthochdruck
- Fettstoffwechselstörungen
- Arterienverkalkungen
- Diabetes

</v-clicks>

</div>
</div>

---
title: Zuckersucht
layout: image-right
image: /images/zuckersucht.avif
backgroundSize: 120%
---

## Kohlenhydrate<span class="ml-4 space-x-2"><emojione-baguette-bread class="size-12"/><img src="/icons/wuerfelzucker.png" class="inline-block align-top size-12"/></span><br><br>

### Raffinierte Kohlenhydrate<br> führen zur<br><span class="text-red-400">körperlichen und<br>seelischen Abhängigkeit</span><br><br>

<v-clicks>

- ### Dopamin-Ausschüttung
- ### Insulin<mdi-arrow-up-thin class="text-2xl" /> blockiert Fettabbau<br><span v-mark.underline.red="2">Energieversorgung <mdi-arrow-down-thin class="text-2xl" /></span>

</v-clicks>

---
layout: image-right
image: /images/intervallfasten.jpg
backgroundSize: 100%
---

## Kohlenhydrate<span class="ml-4 space-x-2"><emojione-baguette-bread class="size-12"/><img src="/icons/wuerfelzucker.png" class="inline-block align-top size-12"/></span><br>

## Lösung aus der Zuckerfalle?

<br>

<v-clicks>

- ### Problem erkennen
- ### raffinierte Zucker meiden
- ### keine Angst vor Fetten
- ### Intervallfasten

</v-clicks>

---
title: Intervallfasten
layout: image
image: /images/intervallfasten2.jpg
---

---
title: -- Das Problem mit der Energie
---

<br><br>

## Das Problem mit der

# Energie

---
title: KH vs Fett
layout: two-cols
---

<p class="text-2xl">Fette</p>
<img src="/images/kokosoel.jpg" class="w-90" />
<img src="/images/TierischeFette.jpg" class="mt-5 w-90" />

::right::

<p class="text-2xl">Kohlenhydrate</p>
<img src="/images/kohlenhydrate.webp" class="w-90 h-50" />
<img src="/images/milch.jpg" class="mt-5 w-90 h-52" />

---
title: Vegan vs Karnivore
layout: two-cols-header
tclicks: 7
---

<p class="text-center text-5xl">Ernährung</p>
<p class="text-center text-3xl">2 Extreme</p>

::left::

<div>
  <p class="text-center text-4xl">vegan &nbsp;<twemoji-broccoli /></p>
  <v-click>
    <PieChart :percentages="[70, 20, 10]" :open="$clicks >= 1" />
    <div v-mark="{ at: 2, color: 'red', type: 'circle', strokeWidth: '4' }" class="relative bottom-24 left-52 w-42 h-8" />
  </v-click>
</div>

::right::

<div>
  <p class="text-center text-4xl">karnivore &nbsp;<twemoji-cut-of-meat /></p>
  <PieChart v-click="3" :percentages="[5,40, 55]" :shrink="$clicks >= 7" :open="$clicks >= 3" />
  <div v-mark="{ at: 4, color: 'yellow', type: 'circle', strokeWidth: '4' }" class="relative bottom-8 left-52 w-28 h-8" />
  <div v-mark="{ at: 5, color: 'blue', type: 'circle', strokeWidth: '4' }" class="relative bottom-24 left-52 w-30 h-8" />
  <div class="relative text-2xl bottom-6" >
    <span v-click="6">hohe Nährstoffdichte</span>
    <span v-click="7"> = weniger Hunger</span>
  </div>
</div>

---
layout: two-cols
---

# Zusammenfassung

## Gesunde Ernährung

<v-clicks class="text-2xl">

- Proteine + Fette
- extra Energie ?<br>
  -> Kohlenhydrate / Zucker

</v-clicks>

<img v-click="1" src="/images/TierischeFette.jpg" class="scale-100" />

::right::
<img v-click="2" src="/images/kohlenhydrate2.jpg" class="abs-tr h-60 w-110" />
<img v-click="1" src="/images/PflanzlicheProteine.webp" class="abs-br mb-8 h-60 w-110" />

---
layout: two-cols
---

# Zusammenfassung

## Gefäßgesundheit

Ernährung

<v-clicks>

- <gg-arrow-down class="size-6 text-red-400" />raffinierte Kohlenhydrate <span class="ml-4 space-x-2"><emojione-baguette-bread class="size-8"/><img src="/icons/wuerfelzucker.png" class="inline-block align-top size-8"/></span><br>
- <gg-arrow-down class="size-6  text-red-400" />raffinierte Pflanzenöle<twemoji-sunflower class="ml-4 size-8"/>
  - Anreicherung im Körper
  - Oxidation bei Licht und Sauerstoff

- keine Angst vor gesättigten Fetten <img class="size-8 ml-2 inline" src="/icons/butter2.png"/>
- Vorsicht bei Fertignahrung <emojione-pizza class="ml-4 size-6" />

</v-clicks>

::right::

<img src="/images/suppe1.jpg" class="abs-tr w-60 mt-20 mr-80" />
<img src="/images/suppe2.jpg" class="abs-tr w-60 mt-20 mr-14" />
<div v-mark="{ at: 5, color: 'red', type: 'circle', strokeWidth: '6' }" class="abs-tr top-50 right-33 h-6 w-30" />

---
layout: image
image: /images/lege.png
backgroundSize: 70%
title: Lege klärt auf
---

<div class="abs-bl p-8">

## ZDFBesseresser

## Lege klärt auf

</div>

---
layout: image
image: /images/Kochen-mit-Familie.jpg
backgroundSize: 70%
title: Kochen mit Familie
---
