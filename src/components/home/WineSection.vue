<template>
  <section class="wine section">
    <div class="wine-main">
      <div class="wine-main-images">
        <img class="wine-main-images-1" src="../../assets/images/barrels.jpg" alt="a wine barrel" />
        <img
          class="wine-main-images-2"
          src="../../assets/images/wine-red.jpg"
          alt="a wine bottle"
        />
        <img
          class="wine-main-images-3"
          src="../../assets/images/wine-glass.jpg"
          alt="a wine glass"
        />
      </div>
      <div class="wine-main-info">
        <h2 class="wine-main-info-header-h2 section-header">WINES.</h2>
        <div class="wine-main-info-text">
          <p>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia
            consequat duis enim velit mollit.
          </p>
        </div>
        <a class="wine-main-info-button">Our Wines</a>
      </div>
    </div>
    <BaseAside :color="'red'">Passion</BaseAside>
  </section>
</template>

<script setup>
import BaseAside from '../ui/BaseAside.vue'
</script>

<style lang="scss" scoped>
.wine {
  background-color: var(--rw-primary-2);
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url(../../assets/background-logo.svg);
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  &-main {
    flex: 1;
    position: relative;
    display: flex;
    align-self: stretch;

    &-info {
      align-self: stretch;
      font-size: var(--rw-font-p2);
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      &-header-h2 {
        position: relative;
        z-index: 10;
      }
      &-text {
        margin-left: 30%;
      }
      &-button {
        margin-right: 5%;
        font-size: var(--rw-font-h6);
        align-self: flex-end;
      }
    }
    &-images {
      position: relative;
      align-self: stretch;
      padding-left: 5rem;
      padding-top: 5rem;
      &-1 {
        width: 27vw;
      }
      &-2 {
        width: 25vw;
        position: absolute;
        z-index: 2;
        top: 30%;
        left: 40%;
      }
      &-3 {
        width: 15vw;
        position: absolute;
        left: 100%;
        bottom: -5%;
        z-index: 2;
      }
    }
  }
}
</style>