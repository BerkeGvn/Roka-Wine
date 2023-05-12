<template>
  <div ref="scrollContainer" class="container" data-scroll-container>
    <RouterView />
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import LocomotiveScroll from 'locomotive-scroll'
import 'locomotive-scroll/dist/locomotive-scroll.css'
import { test } from './composables/useElementAnimationHandler'
const scrollContainer = ref(null)
let scroll = null

onMounted(() => {
  scroll = new LocomotiveScroll({
    el: scrollContainer.value,
    smooth: true,
    smartphone: {
      smooth: true
    }
  })
  test(scrollContainer.value, scroll)
})
onBeforeUnmount(() => {
  scroll.destroy()
})

setTimeout(() => {
  scroll.update()
}, 500)
</script>

<style lang="scss">
.section {
  min-height: 100vh;
}
.section-header {
  font-size: var(--rw-font-h1);
  font-weight: 400;
  font-style: italic;
}
.background-animation {
  font-family: 'Source Serif Pro', serif;
  position: absolute;
  width: 90vw;
  height: 90vh;
  -webkit-user-drag: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
.background-animation-text {
  stroke-dasharray: 100%;
  stroke-dashoffset: 100%;
  font-size: 10vw;
  line-height: 88%;
  stroke-width: 0.8px;
  stroke: var(--rw-secondary-1);
  text-transform: uppercase;
  transition: all 1s;
}
.background-animation-text-small {
  stroke-dasharray: 100%;
  stroke-dashoffset: 100%;
  font-size: 5vw;
  line-height: 88%;
  stroke-width: 0.8px;
  stroke: var(--rw-text-color-2);
  text-transform: uppercase;
  transition: all 1s;
}
</style>
