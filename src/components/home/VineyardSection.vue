<template>
  <section ref="target" class="vineyard section">
    <div class="vineyard-main">
      <div class="vineyard-main-header">
        <h2
          class="vineyard-main-header-h2 section-header"
          data-aos="fade-right"
          data-aos-duration="1000"
          data-aos-delay="500"
          data-aos-once="true"
        >
          VINEYARD.
        </h2>
        <img src="../../assets/images/vineyard-1.jpg" alt="" />
      </div>
      <div class="vineyard-main-info">
        <div class="vineyard-main-info-line"></div>
        <div>
          <p class="vineyard-main-info-p">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia
            consequat duis enim velit mollit.
          </p>
          <svg class="background-animation">
            <text
              class="background-animation-text"
              x="25%"
              y="20%"
              dominant-baseline="middle"
              text-anchor="middle"
              fill="none"
              vector-effect="non-scaling-stroke"
              :style="{ 'stroke-dashoffset': animateVal + '%' }"
            >
              İZMİR
            </text>
          </svg>
        </div>
        <div class="vineyard-main-info-images">
          <img
            class="vineyard-main-info-images-1"
            src="../../assets/images/vineyard-2.jpg"
            alt="vineyard picture"
          />
          <img
            class="vineyard-main-info-images-2"
            src="../../assets/images/grapes.jpg"
            alt="grapes picture"
            data-scroll
            data-scroll-speed="1"
          />
        </div>
      </div>

      <div class="vineyard-footer">
        <div class="vineyard-footer-border"></div>
        <h3>Roka</h3>
        <div class="vineyard-footer-logo">
          <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M5.15392 10.6668C8.00035 10.6668 10.3078 8.27894 10.3078 5.33339C10.3078 2.38784 8.00035 0 5.15392 0C2.30749 0 0 2.38784 0 5.33339C0 8.27894 2.30749 10.6668 5.15392 10.6668ZM10.5768 21.3338C13.4232 21.3338 15.7307 18.946 15.7307 16.0005C15.7307 13.0549 13.4232 10.6671 10.5768 10.6671C7.73034 10.6671 5.42285 13.0549 5.42285 16.0005C5.42285 18.946 7.73034 21.3338 10.5768 21.3338ZM21.154 5.33339C21.154 8.27894 18.8465 10.6668 16.0001 10.6668C13.1537 10.6668 10.8462 8.27894 10.8462 5.33339C10.8462 2.38784 13.1537 0 16.0001 0C18.8465 0 21.154 2.38784 21.154 5.33339ZM21.423 21.3338C24.2694 21.3338 26.5769 18.946 26.5769 16.0005C26.5769 13.0549 24.2694 10.6671 21.423 10.6671C18.5765 10.6671 16.269 13.0549 16.269 16.0005C16.269 18.946 18.5765 21.3338 21.423 21.3338ZM21.4026 26.6666C21.4026 29.6122 19.0951 32 16.2486 32C13.4022 32 11.0947 29.6122 11.0947 26.6666C11.0947 23.7211 13.4022 21.3333 16.2486 21.3333C19.0951 21.3333 21.4026 23.7211 21.4026 26.6666ZM26.8463 10.6668C29.6927 10.6668 32.0002 8.27894 32.0002 5.33339C32.0002 2.38784 29.6927 0 26.8463 0C23.9999 0 21.6924 2.38784 21.6924 5.33339C21.6924 8.27894 23.9999 10.6668 26.8463 10.6668Z"
              fill="#E75055"
            />
          </svg>
        </div>
      </div>
    </div>

    <BaseAside :color="'dark'">Mediterranean </BaseAside>
  </section>
</template>

<script setup>
import BaseAside from '../ui/BaseAside.vue'
import { useAnimation } from '../../composables/useBackgroundAnimationHandler'
import { animate } from '../../composables/useElementAnimationHandler'
const { target, animateVal } = useAnimation()

animate.header('.vineyard-main-header-h2', '.vineyard')
animate.mainImg('.vineyard-main-info-images-1', '.vineyard')
animate.text('.vineyard-main-info-p', '.vineyard')
animate.line('.vineyard-main-info-line', '.vineyard')
</script>

<style lang="scss" scoped>
.vineyard {
  background-color: var(--rw-accent-2);
  color: var(--rw-primary-2);
  display: flex;
  overflow: hidden;
  position: relative;
  align-items: center;
  &-main {
    &-header {
      &-h2 {
        margin-left: 6rem;
        margin-top: 5rem;
      }
      & img {
        width: 100%;
      }
    }
    &-info {
      font-size: var(--rw-font-p2);
      display: flex;
      align-items: center;
      margin-top: 4rem;
      position: relative;
      &-line {
        position: absolute;
        top: 1px;
        left: 20%;
        background-color: var(--rw-primary-2);
        width: 50%;
        height: 1px;
      }
      & p {
        margin: 0 2rem;
        width: 80%;
      }
      &-images {
        position: relative;
        margin-right: 2rem;

        & img {
          &:first-child {
            width: 35vw;
            position: relative;
            z-index: 2;
          }
          &:last-child {
            height: 25vw;
            position: absolute;
            top: 20%;
            left: -15%;
            z-index: 3;
          }
        }

        &::after {
          content: '1962';
          position: absolute;
          color: var(--rw-secondary-3);
          font-size: 10.1vw;
          bottom: -25%;
          right: 0;
          z-index: 5;
        }
      }
    }
  }

  &-footer {
    font-size: var(--rw-font-h4);
    margin-top: 15rem;
    align-self: flex-end;
    text-align: right;
    position: relative;
    &-border {
      border-top: 3px solid var(--rw-primary-2);
      width: 110%;
    }
    & h3 {
      margin-right: 2rem;
    }
    &-logo {
      position: absolute;
      top: 20%;
      right: -8rem;
      & svg {
        width: 4.8rem;
        height: 4.8rem;
      }
    }
  }
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
  width: 0%;
  transition: all;
  &.aos-animate {
    width: 50%;
  }
}
</style>
