<template>
  <section class="vineyard section">
    <div class="vineyard-main">
      <div class="vineyard-main-header">
        <h2 class="vineyard-main-header-h2 section-header">Vineyard.</h2>
        <img src="../../assets/images/vineyard-1.jpg" alt="" />
      </div>
    </div>
    <BaseAside :color="'dark'">Expressive</BaseAside>
  </section>
</template>

<script setup>
import BaseAside from '../ui/BaseAside.vue'
</script>

<style lang="scss" scoped>
.vineyard {
  background-color: var(--rw-accent-2);
  padding-top: 2rem;
  &-main {
    display: flex;
    flex-direction: column;
    width: 95%;
    &-header {
      color: var(--rw-primary-2);
      & img {
        width: 100%;
        padding-right: 1rem;
      }
    }
  }
}
</style>
