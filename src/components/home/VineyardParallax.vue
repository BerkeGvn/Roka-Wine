<template>
  <section class="main" data-scroll-section>
    <div class="vineyard-parallax"></div>
    <BaseAside>Elegant</BaseAside>
  </section>
</template>

<script setup>
import BaseAside from '../ui/BaseAside.vue'
import { animate } from '../../composables/useElementAnimationHandler'
animate.parallax('.main')
</script>

<style lang="scss" scoped>
.main {
  background-color: var(--rw-accent-2);
  background-image: url(../../assets/images/vineyard-3.jpg);
  background-repeat: no-repeat;
  background-position: 50% 0%;
  background-size: cover;
  background-attachment: scroll;
  height: 100vh;
  display: flex;
  position: relative;
  z-index: -10;
}
.vineyard-parallax {
  flex: 1;
}
</style>
