<template>
  <div class="main">
    <div class="vineyard-parallax"></div>
    <BaseAside>Elegant</BaseAside>
  </div>
</template>

<script setup>
import BaseAside from '../ui/BaseAside.vue'
</script>

<style lang="scss" scoped>
.main {
  background-color: var(--rw-accent-2);
  overflow: hidden;
  background-image: url(../../assets/images/vineyard-3.jpg);
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
  display: flex;
}
.vineyard-parallax {
  flex: 1;
}
</style>
