<template>
  <section ref="target" class="smyrna section">
    <div class="smyrna-main">
      <div class="smyrna-main-wrapper-pic">
        <img class="smyrna-main-pic" src="../../assets/images/smyrna.jpg" alt="" ref="img" />
      </div>

      <h2 class="smyrna-main-header section-header">SMYRNA.</h2>
      <p class="smyrna-main-p">
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia
        consequat duis enim velit mollit.
      </p>
      <svg class="background-animation">
        <text
          class="background-animation-text-small"
          dominant-baseline="middle"
          text-anchor="middle"
          fill="none"
          vector-effect="non-scaling-stroke"
          :style="{ 'stroke-dashoffset': animateVal + '%' }"
        >
          Turkiye
        </text>
      </svg>
    </div>
    <BaseAside>The Dream</BaseAside>
  </section>
</template>

<script setup>
import BaseAside from '../ui/BaseAside.vue'
import { useAnimation } from '../../composables/useBackgroundAnimationHandler'
import { animate } from '../../composables/useElementAnimationHandler'

animate.header('.smyrna-main-header', '.smyrna')
animate.text('.smyrna-main-p', '.smyrna')
animate.mainImg('.smyrna-main-pic', '.smyrna')
const { target, animateVal } = useAnimation()
</script>

<style lang="scss" scoped>
@import '../../assets/breakpoints.scss';
.smyrna {
  background-color: var(--rw-primary-2);
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url(../../assets/logos/background-logo.svg);
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  &-main {
    margin-left: 10rem;
    margin-right: 5rem;
    position: relative;
    display: flex;
    align-items: center;
    &-wrapper-pic {
      overflow: hidden;
      display: inline-table;
    }
    &-pic {
      max-width: 50vw;
    }
    &-header {
      position: absolute;
      top: 0;
      left: 40%;
    }
    &-p {
      text-align: center;
      font-size: var(--rw-font-p1);
      margin: 0 1rem;
    }
  }
  & text {
    transform: translate(75%, 85%);
    @media only screen and (max-width: $bp-750) {
      transform: translate(55%, 95%);
      font-size: var(--rw-font-h2);
    }
  }
  @media only screen and (max-width: $bp-950) {
    &-main {
      margin-left: 2rem;
      margin-right: 2rem;
    }
  }
  @media only screen and (max-width: $bp-750) {
    &-main {
      align-self: center;
      padding-top: 2rem;
      height: 100vh;
      display: flex;
      flex-direction: column;
      align-content: center;
      justify-content: center;
      margin-left: 0rem;
      margin-right: 0rem;
      gap: 2rem;
      &-header {
        top: 45vw;
        left: 12%;
      }
      &-p {
        margin-top: 5rem;
      }
      &-pic {
        max-width: 80vw;
      }
    }
  }
}
</style>
