<template>
  <svg class="animated-check" viewBox="0 0 24 24">
    <path d="M4.1 12.7L9 17.6 20.3 6.3" fill="none" />
  </svg>
</template>

<style>
* {
  padding: 0;
  margin: 0;
}

.animated-check {
  height: 2em;
  width: 2em;
}

.animated-check path {
  fill: none;
  stroke: #7ac142;
  stroke-width: 4;
  stroke-dasharray: 23;
  stroke-dashoffset: 23;
  animation: draw 0.2s linear forwards;
  stroke-linecap: round;
  stroke-linejoin: round;
}

@keyframes draw {
  to {
    stroke-dashoffset: 0;
  }
}
</style>
