<template>
  <section ref="target" class="smyrna section">
    <div class="smyrna-main">
      <div class="smyrna-main-wrapper-pic">
        <img
          data-aos="picture-animation"
          data-aos-duration="1000"
          data-aos-delay="200"
          data-aos-once="true"
          class="smyrna-main-pic"
          src="../../assets/images/smyrna.jpg"
          alt=""
        />
      </div>
      <h2
        class="smyrna-main-header section-header"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="400"
        data-aos-once="true"
      >
        SMYRNA.
      </h2>
      <p
        class="smyrna-main-p"
        data-aos="fade-up"
        data-aos-duration="800"
        data-aos-delay="800"
        data-aos-once="true"
      >
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia
        consequat duis enim velit mollit.
      </p>
      <svg class="background-animation">
        <text
          class="background-animation-text-small"
          x="75%"
          y="85%"
          dominant-baseline="middle"
          text-anchor="middle"
          fill="none"
          vector-effect="non-scaling-stroke"
          :style="{ 'stroke-dashoffset': animate + '%' }"
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
import { useAnimation } from '../../composables/useAnimationHandler'
const { target, animate } = useAnimation()
</script>

<style lang="scss" scoped>
.smyrna {
  background-color: var(--rw-primary-2);
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url(../../assets/background-logo.svg);
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
}
[data-aos='picture-animation'] {
  transform: scale(1.5) translate3d(0, -30%, 0);
  opacity: 0;
  transition: all;
  &.aos-animate {
    transform: scale(1) translate3d(0, 0, 0);
    opacity: 1;
  }
}
</style>
