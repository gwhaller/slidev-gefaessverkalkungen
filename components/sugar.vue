<script setup>
import { ref, onUnmounted } from "vue";

const props = defineProps({
  clicks: { type: Number, default: 0 },
});

const insulinScale = ref(1);
const zuckerScale = ref(1);
const ovalScale = ref(1);

let rafId = null;
let startTime = null;

function pulseFactor(t, period) {
  return (
    (Math.sin(((t % period) / period) * Math.PI * 2 - Math.PI / 2) + 1) / 2
  );
}

function tick(ts) {
  if (!startTime) startTime = ts;
  const t = ts - startTime;

  insulinScale.value =
    props.clicks >= 6 && props.clicks < 8 ? 1 + pulseFactor(t, 1200) * 0.12 : 1;
  zuckerScale.value =
    (props.clicks >= 5 && props.clicks < 8) || props.clicks >= 11
      ? 1 + pulseFactor(t, 1200) * 0.15
      : 1;
  ovalScale.value =
    props.clicks >= 7 && props.clicks < 8 ? 1 + pulseFactor(t, 1400) * 0.06 : 1;

  rafId = requestAnimationFrame(tick);
}

rafId = requestAnimationFrame(tick);
onUnmounted(() => {
  if (rafId) cancelAnimationFrame(rafId);
});

function svgScaleTransform(s, cx, cy) {
  if (s === 1) return undefined;
  return `translate(${cx},${cy}) scale(${s.toFixed(4)}) translate(${-cx},${-cy})`;
}
</script>

<template>
  <svg
    width="1080.6548"
    height="751.42596"
    viewBox="-15 -15 1111 782"
    version="1.1"
    id="svg148"
    sodipodi:docname="zucker.svg"
    inkscape:version="1.2.2 (b0a8486541, 2022-12-01)"
    xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
    xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:svg="http://www.w3.org/2000/svg"
  >
    <sodipodi:namedview
      id="namedview134"
      pagecolor="#1d1d1d"
      bordercolor="#000000"
      borderopacity="0.25"
      inkscape:showpageshadow="2"
      inkscape:pageopacity="0"
      inkscape:pagecheckerboard="0"
      inkscape:deskcolor="#363636"
      showgrid="false"
      showguides="false"
      inkscape:zoom="0.64083333"
      inkscape:cx="562.54876"
      inkscape:cy="261.37841"
      inkscape:window-width="1920"
      inkscape:window-height="943"
      inkscape:window-x="0"
      inkscape:window-y="40"
      inkscape:window-maximized="1"
      inkscape:current-layer="svg148"
    />
    <defs id="defs152">
      <marker
        style="overflow: visible"
        id="Arrow1"
        refX="0"
        refY="0"
        orient="auto-start-reverse"
        inkscape:stockid="Arrow1"
        markerWidth="7.2651181"
        markerHeight="12"
        viewBox="0 0 4.0606602 6.7071068"
        inkscape:isstock="true"
        inkscape:collect="always"
        preserveAspectRatio="xMidYMid"
      >
        <path
          style="
            fill: none;
            stroke: context-stroke;
            stroke-width: 1;
            stroke-linecap: butt;
          "
          d="M 3,-3 0,0 3,3"
          id="path5057"
          transform="rotate(180,0.125,0)"
          sodipodi:nodetypes="ccc"
        />
      </marker>
      <marker
        style="overflow: visible"
        id="Arrow1-6"
        refX="0"
        refY="0"
        orient="auto-start-reverse"
        inkscape:stockid="Arrow1"
        markerWidth="8"
        markerHeight="12"
        viewBox="0 0 4.0606602 6.7071068"
        inkscape:isstock="true"
        inkscape:collect="always"
        preserveAspectRatio="xMidYMid"
      >
        <path
          style="
            fill: none;
            stroke: context-stroke;
            stroke-width: 1;
            stroke-linecap: butt;
          "
          d="M 3,-3 0,0 3,3"
          id="path5057-1"
          transform="rotate(180,0.125,0)"
          sodipodi:nodetypes="ccc"
        />
      </marker>
    </defs>
    <!-- ClipPath für Muskel-Oval -->
    <clipPath id="muskel-text-clip">
      <ellipse cx="192.5" cy="680.92596" rx="183" ry="58" />
    </clipPath>
    <!-- Linker Pfeil Nahrung→Muskel: verschwindet ab click 1, erscheint wieder ab click 2 mit 1s Delay -->
    <path
      :style="{
        opacity: clicks === 0 ? 1 : clicks >= 2 ? 1 : 0,
        transition: clicks >= 2 ? 'opacity 0.6s ease 1s' : 'opacity 0.6s ease',
      }"
      style="
        display: inline;
        fill: #ffffff;
        fill-opacity: 1;
        fill-rule: evenodd;
        stroke: #ffffff;
        stroke-width: 4.56903;
        stroke-linecap: butt;
        stroke-linejoin: miter;
        stroke-dasharray: none;
        stroke-opacity: 1;
        marker-end: url(#Arrow1);
      "
      d="M 478.77039,168.60053 255.39361,571.33061"
      id="path1453"
      inkscape:connector-type="polyline"
      inkscape:connector-curvature="0"
    />
    <!-- Insulin am linken Pfeil: ab click 2, größer ab click 6, pulsiert bis click 8 -->
    <text
      :transform="svgScaleTransform(insulinScale, 140, 524)"
      :style="{
        opacity: clicks >= 2 ? 1 : 0,
        fontSize: clicks >= 6 ? '72px' : '44px',
        transition: 'opacity 0.6s ease, font-size 0.6s ease',
      }"
      x="20"
      y="560"
      font-family="Arial, Helvetica, sans-serif"
      font-style="italic"
      id="text122"
      style="
        fill: #0072ff;
        fill-opacity: 1;
        stroke: #0072ff;
        stroke-linecap: round;
        stroke-linejoin: round;
        stroke-opacity: 1;
      "
    >
      Insulin
    </text>
    <!-- Rechter Pfeil Nahrung→Fettgewebe: ab click 4 mit 1s Delay -->
    <path
      :style="{
        opacity: clicks >= 4 ? 1 : 0,
        transition: 'opacity 0.6s ease 1s',
      }"
      style="
        display: inline;
        fill: #ffffff;
        fill-opacity: 1;
        fill-rule: evenodd;
        stroke: #ffffff;
        stroke-width: 4.569;
        stroke-linecap: butt;
        stroke-linejoin: miter;
        stroke-dasharray: none;
        stroke-opacity: 1;
        marker-end: url(#Arrow1-6);
      "
      d="M 596.67982,172.08536 820.05665,574.81544"
      id="path1453-8"
      inkscape:connector-type="polyline"
      inkscape:connector-curvature="0"
    />
    <!-- Insulin am rechten Pfeil: ab click 4, größer ab click 6, pulsiert bis click 8 -->
    <text
      :transform="svgScaleTransform(insulinScale, 960, 524)"
      :style="{
        opacity: clicks >= 4 ? 1 : 0,
        fontSize: clicks >= 6 ? '72px' : '44px',
        transition: 'opacity 0.6s ease, font-size 0.6s ease',
      }"
      x="1070"
      y="560"
      text-anchor="end"
      font-family="Arial, Helvetica, sans-serif"
      font-style="italic"
      id="text106"
      style="
        fill: #0072ff;
        fill-opacity: 1;
        stroke: #0072ff;
        stroke-linecap: round;
        stroke-linejoin: round;
        stroke-opacity: 1;
      "
    >
      Insulin
    </text>
    <!-- Zucker oben: erscheint ab click 1, pulsiert ab click 5 und click 11 -->
    <text
      :transform="svgScaleTransform(zuckerScale, 549, 90)"
      xml:space="preserve"
      style="
        font-style: normal;
        font-variant: normal;
        font-weight: normal;
        font-stretch: normal;
        font-size: 64px;
        font-family: sans-serif;
        -inkscape-font-specification: &quot;sans-serif, Normal&quot;;
        font-variant-ligatures: normal;
        font-variant-caps: normal;
        font-variant-numeric: normal;
        font-variant-east-asian: normal;
        fill: #ff5555;
        fill-opacity: 1;
        stroke: #ff5555;
        stroke-width: 3;
        stroke-dasharray: none;
        stroke-opacity: 1;
      "
      :style="{
        opacity: clicks >= 1 ? 1 : 0,
        fontSize: (clicks >= 5 && clicks < 8) || clicks >= 11 ? '80px' : '64px',
        transition: 'opacity 0.6s ease, font-size 0.6s ease',
      }"
      x="549"
      y="122.07543"
      text-anchor="middle"
      id="text1149-6"
    >
      <tspan
        id="tspan1288"
        x="549"
        y="122.07543"
        style="
          fill: #ff5555;
          fill-opacity: 1;
          stroke: #ff5555;
          stroke-opacity: 1;
        "
      >
        Zucker
      </tspan>
    </text>
    <!-- Fett oben: verschwindet ab click 1 -->
    <text
      xml:space="preserve"
      :style="{ opacity: clicks >= 1 ? 0 : 1, transition: 'opacity 0.6s ease' }"
      style="
        font-style: normal;
        font-variant: normal;
        font-weight: normal;
        font-stretch: normal;
        font-size: 64px;
        font-family: sans-serif;
        -inkscape-font-specification: &quot;sans-serif, Normal&quot;;
        font-variant-ligatures: normal;
        font-variant-caps: normal;
        font-variant-numeric: normal;
        font-variant-east-asian: normal;
        fill: #eaab00;
        fill-opacity: 1;
        stroke: #eaab00;
        stroke-width: 3;
        stroke-dasharray: none;
        stroke-opacity: 1;
      "
      x="480.45514"
      y="123.74209"
      id="text1149-6-7"
    >
      <tspan sodipodi:role="line" id="tspan3035" x="480.45514" y="123.74209">
        Fett
      </tspan>
    </text>
    <text
      xml:space="preserve"
      style="
        font-style: normal;
        font-variant: normal;
        font-weight: normal;
        font-stretch: normal;
        font-size: 48px;
        font-family: sans-serif;
        -inkscape-font-specification: &quot;sans-serif, Normal&quot;;
        font-variant-ligatures: normal;
        font-variant-caps: normal;
        font-variant-numeric: normal;
        font-variant-east-asian: normal;
        fill: #ffffff;
        fill-opacity: 1;
        stroke: #ffffff;
        stroke-width: 3;
        stroke-dasharray: none;
        stroke-opacity: 1;
      "
      x="442.61377"
      y="37.98"
      id="text1149-6-2-53"
    >
      <tspan sodipodi:role="line" id="tspan3666" x="442.61377" y="37.98">
        Nahrung
      </tspan>
    </text>
    <text
      xml:space="preserve"
      style="
        font-style: normal;
        font-variant: normal;
        font-weight: normal;
        font-stretch: normal;
        font-size: 48px;
        font-family: sans-serif;
        -inkscape-font-specification: &quot;sans-serif, Normal&quot;;
        font-variant-ligatures: normal;
        font-variant-caps: normal;
        font-variant-numeric: normal;
        font-variant-east-asian: normal;
        fill: #ffffff;
        fill-opacity: 1;
        stroke: #fefefe;
        stroke-width: 3;
        stroke-dasharray: none;
        stroke-opacity: 1;
        display: none;
      "
      x="113.21771"
      y="701.18561"
      id="text1149-6-2-5"
    >
      <tspan sodipodi:role="line" id="tspan2964" x="113.21771" y="701.18561">
        Muskel
      </tspan>
    </text>
    <ellipse
      cx="192.5"
      cy="680.92596"
      rx="190"
      ry="68"
      :transform="svgScaleTransform(ovalScale, 192.5, 680.9)"
      :style="{
        strokeWidth: clicks >= 7 ? 20 : 5,
        transition: 'stroke-width 0.6s ease',
      }"
      style="
        fill: none;
        fill-opacity: 1;
        stroke: #ffffff;
        stroke-linecap: round;
        stroke-linejoin: round;
        stroke-opacity: 1;
      "
    />
    <!-- Scrollende Texte im Muskel-Oval -->
    <g
      clip-path="url(#muskel-text-clip)"
      :style="{ opacity: clicks >= 10 ? 0 : 1 }"
    >
      <text
        x="192.5"
        y="700"
        text-anchor="middle"
        font-family="sans-serif"
        font-size="44px"
        fill="#ffffff"
        stroke="none"
        :style="{ animationPlayState: clicks >= 2 ? 'paused' : 'running' }"
        class="muskel-through-first muskel-delay-0"
      >
        Nieren
      </text>
      <text
        x="192.5"
        y="700"
        text-anchor="middle"
        font-family="sans-serif"
        font-size="44px"
        fill="#ffffff"
        stroke="none"
        :style="{ animationPlayState: clicks >= 2 ? 'paused' : 'running' }"
        class="muskel-through muskel-delay-1"
      >
        Gehirn
      </text>
      <text
        x="192.5"
        y="700"
        text-anchor="middle"
        font-family="sans-serif"
        font-size="44px"
        fill="#ffffff"
        stroke="none"
        :style="{ animationPlayState: clicks >= 2 ? 'paused' : 'running' }"
        class="muskel-through muskel-delay-2"
      >
        Blutgefäße
      </text>
      <text
        x="192.5"
        y="700"
        text-anchor="middle"
        font-family="sans-serif"
        font-size="44px"
        fill="#ffffff"
        stroke="none"
        :style="{ animationPlayState: clicks >= 2 ? 'paused' : 'running' }"
        class="muskel-through muskel-delay-3"
      >
        Nerven
      </text>
      <text
        x="192.5"
        y="700"
        text-anchor="middle"
        font-family="sans-serif"
        font-size="44px"
        fill="#ffffff"
        stroke="none"
        :style="{ animationPlayState: clicks >= 2 ? 'paused' : 'running' }"
        class="muskel-through muskel-delay-4"
      >
        Muskel
      </text>
      <!-- 2. Durchlauf -->
      <text
        x="192.5"
        y="700"
        text-anchor="middle"
        font-family="sans-serif"
        font-size="44px"
        fill="#ffffff"
        stroke="none"
        :style="{
          animationPlayState: clicks >= 2 ? 'paused' : 'running',
          animationDelay: '3.5s',
        }"
        class="muskel-through"
      >
        Nieren
      </text>
      <text
        x="192.5"
        y="700"
        text-anchor="middle"
        font-family="sans-serif"
        font-size="44px"
        fill="#ffffff"
        stroke="none"
        :style="{
          animationPlayState: clicks >= 2 ? 'paused' : 'running',
          animationDelay: '5s',
        }"
        class="muskel-through"
      >
        Gehirn
      </text>
      <text
        x="192.5"
        y="700"
        text-anchor="middle"
        font-family="sans-serif"
        font-size="44px"
        fill="#ffffff"
        stroke="none"
        :style="{
          animationPlayState: clicks >= 2 ? 'paused' : 'running',
          animationDelay: '6.5s',
        }"
        class="muskel-through"
      >
        Blutgefäße
      </text>
      <text
        x="192.5"
        y="700"
        text-anchor="middle"
        font-family="sans-serif"
        font-size="44px"
        fill="#ffffff"
        stroke="none"
        :style="{
          animationPlayState: clicks >= 2 ? 'paused' : 'running',
          animationDelay: '8s',
        }"
        class="muskel-through"
      >
        Nerven
      </text>
      <text
        x="192.5"
        y="700"
        text-anchor="middle"
        font-family="sans-serif"
        font-size="44px"
        fill="#ffffff"
        stroke="none"
        :style="{
          animationPlayState: clicks >= 2 ? 'paused' : 'running',
          animationDelay: '9.5s',
        }"
        class="muskel-stop"
      >
        Muskel
      </text>
    </g>
    <!-- Click 10: unendlicher Durchlauf -->
    <g clip-path="url(#muskel-text-clip)">
      <g
        class="muskel-infinite muskel-inf-d0"
        :style="{ animationPlayState: clicks >= 10 ? 'running' : 'paused' }"
      >
        <text
          x="192.5"
          y="700"
          text-anchor="middle"
          font-family="sans-serif"
          font-size="44px"
          fill="#ffffff"
          stroke="none"
        >
          Nieren
        </text>
        <rect
          x="107"
          y="683"
          width="172"
          height="6"
          fill="#ff4444"
          rx="3"
          class="strike-loop-rect"
          :style="{
            animationPlayState: clicks >= 10 ? 'running' : 'paused',
            animationDelay: '0s',
          }"
        />
      </g>
      <g
        class="muskel-infinite muskel-inf-d1"
        :style="{ animationPlayState: clicks >= 10 ? 'running' : 'paused' }"
      >
        <text
          x="192.5"
          y="700"
          text-anchor="middle"
          font-family="sans-serif"
          font-size="44px"
          fill="#ffffff"
          stroke="none"
        >
          Gehirn
        </text>
        <rect
          x="107"
          y="683"
          width="172"
          height="6"
          fill="#ff4444"
          rx="3"
          class="strike-loop-rect"
          :style="{
            animationPlayState: clicks >= 10 ? 'running' : 'paused',
            animationDelay: '1.5s',
          }"
        />
      </g>
      <g
        class="muskel-infinite muskel-inf-d2"
        :style="{ animationPlayState: clicks >= 10 ? 'running' : 'paused' }"
      >
        <text
          x="192.5"
          y="700"
          text-anchor="middle"
          font-family="sans-serif"
          font-size="44px"
          fill="#ffffff"
          stroke="none"
        >
          Blutgefäße
        </text>
        <rect
          x="55"
          y="683"
          width="276"
          height="6"
          fill="#ff4444"
          rx="3"
          class="strike-loop-rect"
          :style="{
            animationPlayState: clicks >= 10 ? 'running' : 'paused',
            animationDelay: '3s',
          }"
        />
      </g>
      <g
        class="muskel-infinite muskel-inf-d3"
        :style="{ animationPlayState: clicks >= 10 ? 'running' : 'paused' }"
      >
        <text
          x="192.5"
          y="700"
          text-anchor="middle"
          font-family="sans-serif"
          font-size="44px"
          fill="#ffffff"
          stroke="none"
        >
          Nerven
        </text>
        <rect
          x="110"
          y="683"
          width="166"
          height="6"
          fill="#ff4444"
          rx="3"
          class="strike-loop-rect"
          :style="{
            animationPlayState: clicks >= 10 ? 'running' : 'paused',
            animationDelay: '4.5s',
          }"
        />
      </g>
      <g
        class="muskel-infinite muskel-inf-d4"
        :style="{ animationPlayState: clicks >= 10 ? 'running' : 'paused' }"
      >
        <text
          x="192.5"
          y="700"
          text-anchor="middle"
          font-family="sans-serif"
          font-size="44px"
          fill="#ffffff"
          stroke="none"
        >
          Muskel
        </text>
        <rect
          x="108"
          y="683"
          width="170"
          height="6"
          fill="#ff4444"
          rx="3"
          class="strike-loop-rect"
          :style="{
            animationPlayState: clicks >= 10 ? 'running' : 'paused',
            animationDelay: '6s',
          }"
        />
      </g>
    </g>
    <text
      xml:space="preserve"
      style="
        font-style: normal;
        font-variant: normal;
        font-weight: normal;
        font-stretch: normal;
        font-size: 48px;
        font-family: sans-serif;
        -inkscape-font-specification: &quot;sans-serif, Normal&quot;;
        font-variant-ligatures: normal;
        font-variant-caps: normal;
        font-variant-numeric: normal;
        font-variant-east-asian: normal;
        fill: #eaab00;
        fill-opacity: 1;
        stroke: #eaab00;
        stroke-width: 3;
        stroke-dasharray: none;
        stroke-opacity: 1;
      "
      x="753.65375"
      y="693.32501"
      id="text1149-6-2-5-3"
      :class="{ 'fettgewebe-shake': clicks >= 9 }"
    >
      <tspan sodipodi:role="line" id="tspan2814" x="753.65375" y="693.32501">
        Fettgewebe
      </tspan>
    </text>
    <!-- Click 9: Fettgewebe durchgestrichen -->
    <rect
      x="744"
      y="678"
      width="290"
      height="7"
      fill="#ff4444"
      rx="3"
      class="strike-line"
      :style="{
        animationName: clicks >= 9 ? 'strike-grow' : 'none',
        animationDuration: '0.6s',
        animationDelay: clicks >= 9 ? '0.5s' : '0s',
        animationFillMode: 'both',
        animationTimingFunction: 'ease-out',
        opacity: clicks >= 9 ? 1 : 0,
        transition: clicks >= 9 ? 'opacity 0s ease 0.5s' : 'none',
      }"
    />
    <ellipse
      cx="888.15485"
      cy="679.16058"
      rx="190"
      ry="68"
      :transform="svgScaleTransform(ovalScale, 888.15, 679.16)"
      :style="{
        strokeWidth: clicks >= 7 ? 20 : 5,
        transition: 'stroke-width 0.6s ease',
      }"
      id="ellipse118-9"
      style="
        fill: none;
        fill-opacity: 1;
        stroke: #eaab00;
        stroke-linecap: round;
        stroke-linejoin: round;
        stroke-opacity: 1;
      "
    />
    <!-- Insulin am unteren Pfeil: ab click 3, pulsiert bis click 8 -->
    <text
      :transform="svgScaleTransform(insulinScale, 641, 590)"
      :style="{
        opacity: clicks >= 3 ? 1 : 0,
        fontSize: clicks >= 6 ? '72px' : '42px',
        transition: 'opacity 0.6s ease, font-size 0.6s ease',
      }"
      x="641"
      y="615"
      text-anchor="middle"
      font-family="Arial, Helvetica, sans-serif"
      font-style="italic"
      id="text144"
      style="
        fill: #0072ff;
        fill-opacity: 1;
        stroke: #0072ff;
        stroke-linecap: round;
        stroke-linejoin: round;
        stroke-opacity: 1;
      "
    >
      Insulin
    </text>
    <!-- Unterer Pfeil Fettgewebe→Muskel: verschwindet ab click 1, erscheint wieder ab click 3 mit 2s Delay, grau -->
    <path
      :class="{ 'arrow-appear': clicks >= 3 }"
      :style="{
        opacity: clicks === 0 ? 1 : clicks >= 3 ? 1 : 0,
        stroke: clicks >= 3 ? '#333333' : '#ffffff',
        transition: clicks >= 1 && clicks < 3 ? 'opacity 0.6s ease' : 'none',
      }"
      style="
        fill: none;
        fill-rule: evenodd;
        stroke-width: 4.569;
        stroke-linecap: butt;
        stroke-linejoin: miter;
        stroke-dasharray: none;
        stroke-opacity: 1;
        marker-end: url(#Arrow1);
      "
      d="M 680.07862,675.415 403.4045,677.1078"
      id="path3268"
      inkscape:connector-type="polyline"
      inkscape:connector-curvature="0"
    />
    <!-- X unter Insulin: erscheint ab click 3 mit 1s Delay -->
    <path
      :class="{ 'x-appear': clicks >= 3 }"
      :style="{
        opacity: clicks >= 3 ? 1 : 0,
        fill: '#eaab00',
        stroke: '#ffffff',
      }"
      style="
        fill: #eaab00;
        fill-opacity: 1;
        stroke: #ffffff;
        stroke-width: 4.569;
        stroke-miterlimit: 2.7;
        stroke-dasharray: none;
        stroke-opacity: 1;
      "
      d="m 612.95767,638.44455 55.5469,75.92235"
      id="path9718"
    />
    <path
      :class="{ 'x-appear': clicks >= 3 }"
      :style="{
        opacity: clicks >= 3 ? 1 : 0,
        fill: '#eaab00',
        stroke: '#ffffff',
      }"
      style="
        fill: #eaab00;
        fill-opacity: 1;
        stroke: #ffffff;
        stroke-width: 4.569;
        stroke-miterlimit: 2.7;
        stroke-dasharray: none;
        stroke-opacity: 1;
      "
      d="M 668.93637,637.22062 613.38947,713.143"
      id="path9718-3"
    />
    <!-- Pfeile nach oben: erscheinen ab click 8 gleichzeitig nach 1s -->
    <!-- Pfeil links vom linken Insulin -->
    <text
      :style="{
        opacity: clicks >= 8 ? 1 : 0,
        transition: 'opacity 0.5s ease 1s',
      }"
      x="38"
      y="562"
      text-anchor="end"
      font-family="Arial, Helvetica, sans-serif"
      font-size="120px"
      style="fill: #ff8888; stroke: none"
    >
      ↑
    </text>
    <!-- Pfeil links vom rechten Insulin -->
    <text
      :style="{
        opacity: clicks >= 8 ? 1 : 0,
        transition: 'opacity 0.5s ease 1s',
      }"
      x="880"
      y="562"
      text-anchor="end"
      font-family="Arial, Helvetica, sans-serif"
      font-size="120px"
      style="fill: #ff8888; stroke: none"
    >
      ↑
    </text>
    <!-- Pfeil links vom mittleren Insulin -->
    <text
      :style="{
        opacity: clicks >= 8 ? 1 : 0,
        transition: 'opacity 0.5s ease 1s',
      }"
      x="562"
      y="615"
      text-anchor="end"
      font-family="Arial, Helvetica, sans-serif"
      font-size="120px"
      style="fill: #ff8888; stroke: none"
    >
      ↑
    </text>
    <!-- Pfeile neben Zucker: erscheinen ab click 11 nach 1s -->
    <text
      :style="{
        opacity: clicks >= 11 ? 1 : 0,
        transition: 'opacity 0.5s ease 1s',
      }"
      x="390"
      y="120"
      text-anchor="end"
      font-family="Arial, Helvetica, sans-serif"
      font-size="120px"
      style="fill: #ff8888; stroke: none"
    >
      ↑
    </text>
    <text
      :style="{
        opacity: clicks >= 11 ? 1 : 0,
        transition: 'opacity 0.5s ease 1s',
      }"
      x="760"
      y="120"
      text-anchor="end"
      font-family="Arial, Helvetica, sans-serif"
      font-size="120px"
      style="fill: #ff8888; stroke: none"
    >
      ↑
    </text>
  </svg>
</template>

<style scoped>
@keyframes fade-in {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
.x-appear {
  animation: fade-in 0.6s ease 1s both;
}
.arrow-appear {
  animation: fade-in 0.6s ease 2s both;
}
@keyframes muskel-through {
  from {
    transform: translateY(80px);
  }
  to {
    transform: translateY(-200px);
  }
}
@keyframes muskel-through-first {
  from {
    transform: translateY(-19px);
  }
  to {
    transform: translateY(-200px);
  }
}
@keyframes muskel-stop {
  from {
    transform: translateY(80px);
  }
  to {
    transform: translateY(-5px);
  }
}
.muskel-through {
  animation: muskel-through 10s linear 1 both;
}
.muskel-through-first {
  animation: muskel-through-first 6.5s linear 1 both;
}
.muskel-delay-0 {
  animation-delay: 0s;
}
.muskel-delay-1 {
  animation-delay: -2s;
}
.muskel-delay-2 {
  animation-delay: -0.5s;
}
.muskel-delay-3 {
  animation-delay: 1s;
}
.muskel-delay-4 {
  animation-delay: 2.5s;
}
.muskel-stop {
  animation: muskel-stop 3.5s ease-out 1 both;
}
.muskel-c9-d0 {
  animation-delay: 0s;
}
.muskel-c9-d1 {
  animation-delay: 1.5s;
}
.muskel-c9-d2 {
  animation-delay: 3s;
}
.muskel-c9-d3 {
  animation-delay: 4.5s;
}
.muskel-infinite {
  animation: muskel-through 7.5s linear infinite backwards;
}
.muskel-inf-d0 {
  animation-delay: 0s;
}
.muskel-inf-d1 {
  animation-delay: 1.5s;
}
.muskel-inf-d2 {
  animation-delay: 3s;
}
.muskel-inf-d3 {
  animation-delay: 4.5s;
}
.muskel-inf-d4 {
  animation-delay: 6s;
}
@keyframes strike-loop {
  0%,
  29% {
    transform: scaleX(0);
  }
  35% {
    transform: scaleX(1);
  }
  56% {
    transform: scaleX(1);
  }
  62% {
    transform: scaleX(0);
  }
  100% {
    transform: scaleX(0);
  }
}
.strike-loop-rect {
  transform-box: fill-box;
  transform-origin: 0% 50%;
  animation: strike-loop 7.5s linear infinite both;
}
@keyframes strike-grow {
  from {
    transform: scaleX(0);
  }
  to {
    transform: scaleX(1);
  }
}
.strike-line {
  transform-box: fill-box;
  transform-origin: 0% 50%;
}
@keyframes fettgewebe-shake {
  0% {
    transform: translateX(0);
  }
  10% {
    transform: translateX(-6px);
  }
  20% {
    transform: translateX(6px);
  }
  30% {
    transform: translateX(-5px);
  }
  40% {
    transform: translateX(5px);
  }
  50% {
    transform: translateX(-4px);
  }
  60% {
    transform: translateX(4px);
  }
  70% {
    transform: translateX(-2px);
  }
  80% {
    transform: translateX(2px);
  }
  90% {
    transform: translateX(-1px);
  }
  100% {
    transform: translateX(0);
  }
}
.fettgewebe-shake {
  transform-box: fill-box;
  transform-origin: center;
  animation: fettgewebe-shake 0.5s ease-out 1 both;
}
</style>
