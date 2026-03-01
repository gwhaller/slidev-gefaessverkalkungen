<script setup>
import { ref, computed, watch } from "vue";
import { useTransition } from "@vueuse/core";

const props = defineProps({
  percentages: {
    type: Array,
    default: () => [33, 33, 34],
  },
  shrink: {
    type: Boolean,
    default: false,
  },
  open: {
    type: Boolean,
    default: false,
  },
});

// 🎨 Colors and labels
const fillColors = ["fill-red-500", "fill-blue-500", "fill-yellow-500"];
const bgColors = ["bg-red-500", "bg-blue-500", "bg-yellow-500"];
const labels = ["Kohlenhydrate", "Proteine", "Fette"];

// 🎯 Start segments with a minimal value (0%)
const animatedPercentages = ref(props.percentages.map(() => 0));

// 🚀 Animation with `useTransition`
const transition = useTransition(animatedPercentages, {
  duration: 500,
  transition: [0.25, 0.1, 0.25, 1],
});

// 🎬 Start animation when `props.open` changes
watch(
  () => props.open,
  (newOpen) => {
    if (newOpen) {
      animatedPercentages.value = [...props.percentages];
    } else {
      animatedPercentages.value = props.percentages.map(() => 0);
    }
  },
  { immediate: true },
);

// 🎯 SVG helper functions
const polarToCartesian = (centerX, centerY, radius, angleInDegrees) => {
  const angleInRadians = ((angleInDegrees - 90) * Math.PI) / 180.0;
  return {
    x: centerX + radius * Math.cos(angleInRadians),
    y: centerY + radius * Math.sin(angleInRadians),
  };
};

const describeArc = (x, y, radius, startAngle, endAngle) => {
  const start = polarToCartesian(x, y, radius, startAngle);
  const end = polarToCartesian(x, y, radius, endAngle);
  const largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";
  return `M ${start.x},${start.y} A ${radius},${radius} 0 ${largeArcFlag},1 ${end.x},${end.y} L 50,50 Z`;
};

// 🏹 Compute animated arcs
const arcs = computed(() => {
  let cumulativeAngle = 0;
  return transition.value.map((percentage, index) => {
    const angle = (percentage / 100) * 360;
    const startAngle = cumulativeAngle;
    const endAngle = cumulativeAngle + angle;
    cumulativeAngle += angle;

    return {
      d: describeArc(50, 50, 49, startAngle, endAngle),
      class: fillColors[index % fillColors.length],
    };
  });
});
</script>

<template>
  <div class="flex">
    <div
      :class="{ 'scale-60': props.shrink, 'scale-100': !props.shrink }"
      class="transition-transform duration-1000"
    >
      <svg width="200" height="200" viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="49" fill="#ddd" />
        <path
          v-for="(arc, index) in arcs"
          :key="index"
          :d="arc.d"
          :class="[arc.class]"
          stroke="#fff"
          stroke-width="1"
        />
      </svg>
    </div>
    <div class="flex flex-col">
      <div class="mt-auto">
        <ul>
          <li
            v-for="(label, index) in labels"
            :key="index"
            class="flex items-center space-x-2"
          >
            <span :class="['w-4 h-4 inline-block', bgColors[index]]"></span>
            <span>{{ label }}</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
