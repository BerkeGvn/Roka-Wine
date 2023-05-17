<template>
  <div ref="target" class="loading" data-scroll-section>
    <svg class="loading-animation">
      <text
        class="loading-animation-text"
        x="50%"
        y="40%"
        dominant-baseline="middle"
        text-anchor="middle"
        fill="none"
        vector-effect="non-scaling-stroke"
        text-rendering="optimizeLegibility"
        :style="{ 'stroke-dashoffset': animateVal + '%' }"
      >
        ROKA
      </text>
      <text
        class="loading-animation-text"
        x="50%"
        y="60%"
        dominant-baseline="middle"
        text-anchor="middle"
        fill="none"
        vector-effect="non-scaling-stroke"
        text-rendering="optimizeLegibility"
        :style="{ 'stroke-dashoffset': animateVal + '%' }"
      >
        WINE
      </text>
    </svg>
  </div>
</template>

<script setup>
import { useAnimation } from '../../composables/useBackgroundAnimationHandler'
import { animate } from '../../composables/useElementAnimationHandler'
const { target, animateVal } = useAnimation()
animate.loadingSlide('.animateScreen')
</script>

<style lang="scss" scoped>
.loading {
  height: 100vh;
  background-color: var(--rw-primary-2);
  background-image: url(../../assets/logos/background-logo-2.svg);
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
}
.loading-animation {
  font-family: 'Source Serif Pro', serif;
  position: absolute;
  width: 100vw;
  height: 100vh;
  -webkit-user-drag: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
.loading-animation-text {
  stroke-dasharray: 100%;
  stroke-dashoffset: 100%;
  font-size: 10vw;
  line-height: 88%;
  stroke-width: 2px;
  stroke: var(--rw-text-color-2);
  text-transform: uppercase;
}
</style>
