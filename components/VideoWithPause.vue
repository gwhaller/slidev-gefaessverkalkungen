<template>
  <div class="flex flex-col items-center justify-center gap-4">
    <video
      ref="videoRef"
      :src="src"
      class="w-[640px] h-auto"
      @canplay="onCanPlay"
      @timeupdate="onTimeUpdate"
      @ended="onEnded"
    />
    <div v-if="halfPaused" class="text-2xl text-white opacity-60">
      ▶ klicken zum Weiterspielen
    </div>
  </div>
</template>

<script setup>
import { ref, watch, onMounted, onBeforeUnmount } from "vue";

const props = defineProps({
  src: { type: String, required: true },
  pauseOffset: { type: Number, default: 5 },
  play: { type: Boolean, default: false },
});

const videoRef = ref(null);
const halfPaused = ref(false);
const midPauseDone = ref(false);
const started = ref(false);

const onCanPlay = () => {
  if (!started.value) {
    started.value = true;
    videoRef.value?.play().catch(() => {});
  }
};

const resume = () => {
  halfPaused.value = false;
  midPauseDone.value = true;
  videoRef.value?.play().catch(() => {});
};

watch(
  () => props.play,
  (val) => {
    if (val && halfPaused.value) resume();
  },
);

onMounted(() => {
  // fallback: falls canplay bereits gefeuert wurde
  if (videoRef.value?.readyState >= 3) {
    started.value = true;
    videoRef.value.play().catch(() => {});
  }
});

onBeforeUnmount(() => {
  videoRef.value?.pause();
});

const onTimeUpdate = () => {
  if (!halfPaused.value && !midPauseDone.value && videoRef.value) {
    const half = videoRef.value.duration / 2 + props.pauseOffset;
    if (videoRef.value.currentTime >= half) {
      videoRef.value.pause();
      halfPaused.value = true;
    }
  }
};

const onEnded = () => {
  halfPaused.value = false;
  midPauseDone.value = false;
};
</script>
