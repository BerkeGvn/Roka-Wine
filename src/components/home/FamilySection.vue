<template>
  <section ref="target" class="family section">
    <div class="family-main">
      <div class="family-main-header">
        <h2
          class="family-main-header-h2 section-header"
          data-aos="fade-right"
          data-aos-duration="1000"
          data-aos-delay="500"
          data-aos-once="true"
        >
          FAMILY.
        </h2>
      </div>
      <div class="family-main-info">
        <div class="family-main-info-text">
          <h3 class="family-main-info-h3">
            <span
              data-aos="fade-up"
              data-aos-duration="500"
              data-aos-delay="500"
              data-aos-once="true"
              >A Story
            </span>
            <span
              data-aos="fade-up"
              data-aos-duration="500"
              data-aos-delay="700"
              data-aos-once="true"
              >that
            </span>
            <span
              data-aos="fade-up"
              data-aos-duration="500"
              data-aos-delay="900"
              data-aos-once="true"
              >started
            </span>
            <span
              data-aos="fade-up"
              data-aos-duration="500"
              data-aos-delay="1100"
              data-aos-once="true"
              >half
            </span>
            <span
              data-aos="fade-up"
              data-aos-duration="500"
              data-aos-delay="1300"
              data-aos-once="true"
              >century
            </span>
            <span
              data-aos="fade-up"
              data-aos-duration="500"
              data-aos-delay="1600"
              data-aos-once="true"
              >ago.</span
            >
          </h3>
          <div class="family-main-info-text-para">
            <p
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="1000"
              data-aos-once="true"
            >
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit
              officia consequat duis enim velit mollit.
            </p>
            <div
              class="family-main-info-text-line"
              data-aos="line-animation"
              data-aos-duration="1000"
              data-aos-once="true"
            ></div>
          </div>
        </div>
        <div class="family-main-info-images">
          <img
            class="family-main-info-images-1"
            src="../../assets/images/family.jpg"
            alt="a family picture"
            data-aos="zoom-in-down"
            data-aos-duration="500"
            data-aos-delay="800"
            data-aos-once="true"
          />
          <div class="family-main-info-images-2-wrapper">
            <img
              class="family-main-info-images-2"
              src="../../assets/images/mansion.jpg"
              alt="mansion picture"
              data-aos="picture-animation"
              data-aos-duration="1000"
              data-aos-delay="300"
              data-aos-once="true"
            />
          </div>
          <img
            class="family-main-info-images-3"
            src="../../assets/images/dog-farm.jpg"
            alt="dog and cow picture"
            data-aos="zoom-in-up"
            data-aos-duration="500"
            data-aos-delay="800"
            data-aos-once="true"
          />
        </div>
      </div>
    </div>
    <BaseAside :color="'dark'">Generation</BaseAside>

    <svg class="background-animation">
      <text
        class="background-animation-text"
        x="25%"
        y="90%"
        dominant-baseline="middle"
        text-anchor="middle"
        fill="none"
        vector-effect="non-scaling-stroke"
        :style="{ 'stroke-dashoffset': animate + '%' }"
      >
        ROKA
      </text>
    </svg>
  </section>
</template>

<script setup>
import BaseAside from '../ui/BaseAside.vue'
import { useAnimation } from '../../composables/useAnimationHandler'
const { target, animate } = useAnimation()
</script>

<style lang="scss" scoped>
.family {
  color: var(--rw-primary-2);
  background-color: var(--rw-accent-2);
  display: flex;
  align-items: center;
  position: relative;
  &-main {
    flex: 1;
    &-header {
      margin-left: 6rem;
      width: 90%;
      border-bottom: 1px solid var(--rw-primary-2);
    }
    &-info {
      font-size: var(--rw-font-p2);
      margin-left: 6rem;
      display: flex;
      &-text {
        position: relative;
        &-line {
          width: 150%;
          height: 1px;
          margin-top: 5rem;
          background-color: var(--rw-primary-2);
        }
      }
      &-h3 {
        font-weight: 400;
        font-style: italic;
        font-size: var(--rw-font-h4);
        margin-top: 5rem;
        width: 200%;
        z-index: 5;
        position: relative;
        & span {
          margin-right: 10px;
          display: inline-block;
        }
      }
      & p {
        margin-top: 25%;
        position: relative;
      }

      &-images {
        position: relative;
        width: 100%;
        align-self: center;

        &-1 {
          width: 28vw;
          position: absolute;
          z-index: 2;
          right: 4%;
          top: -15rem;
        }
        &-2 {
          width: 50vw;
          &-wrapper {
            overflow: hidden;
          }
        }
        &-3 {
          width: 23vw;
          position: absolute;
          bottom: -15%;
          right: 1%;
        }
      }
    }
  }
}
.visible {
  stroke-dashoffset: 0%;
}
[data-aos='picture-animation'] {
  transform: scale(1.5);
  opacity: 0;
  transition: all;
  &.aos-animate {
    transform: scale(1);
    opacity: 1;
  }
}
[data-aos='line-animation'] {
  width: 5%;
  transition: all;
  &.aos-animate {
    width: 105%;
  }
}
</style>
