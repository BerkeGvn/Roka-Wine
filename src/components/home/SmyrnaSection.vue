<template>
  <div class="smyrna">
    <div class="smyrna-main">
      <img class="smyrna-main-pic" src="../../assets/images/smyrna.jpg" alt="" />
      <h2 class="smyrna-main-header">SMYRNA.</h2>
      <p class="smyrna-main-p">
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia
        consequat duis enim velit mollit.
      </p>
    </div>
    <BaseAside>The Dream</BaseAside>
  </div>
</template>

<script setup>
import BaseAside from '../ui/BaseAside.vue'
</script>

<style lang="scss" scoped>
.smyrna {
  height: 100vh;
  background-color: var(--rw-primary-2);
  overflow: hidden;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url(../../assets/background-logo.svg);
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  &-main {
    margin-left: 10rem;
    margin-right: 12rem;
    position: relative;
    display: flex;
    align-items: center;
    &-pic {
      max-width: 50vw;
    }
    &-header {
      font-size: 5.7vw;
      font-weight: 400;
      font-style: italic;
      position: absolute;
      top: 0;
      left: 40%;
    }
    &-p {
      text-align: center;
      font-size: var(--rw-font-p1);
      margin: 0 4rem;
    }
  }
}
</style>
