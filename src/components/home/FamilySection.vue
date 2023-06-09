<template>
  <section ref="target" class="family section" data-scroll-section>
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
          <h3 ref="subHeader" class="family-main-info-h3">
            <span class="family-main-info-h3-words">A Story </span>
            <span class="family-main-info-h3-words">that </span>
            <span class="family-main-info-h3-words">started </span>
            <span class="family-main-info-h3-words">half </span>
            <span class="family-main-info-h3-words">century </span>
            <span class="family-main-info-h3-words">ago.</span>
          </h3>
          <p class="family-main-info-p">
            Nestled amidst rolling hills, the family-run vineyard of the Smyrna estate has
            flourished for over half a century, each generation pouring their heart and soul into
            crafting wines that embody a legacy of passion, dedication, and the timeless art of
            winemaking.
          </p>
          <div class="family-main-info-text-line"></div>
        </div>
        <div class="family-main-info-images">
          <img
            class="family-main-info-images-1"
            src="../../assets/images/family.jpg"
            alt="a family picture"
            data-scroll
            data-scroll-speed="1"
          />
          <div class="family-main-info-images-2-wrapper">
            <img
              class="family-main-info-images-2"
              src="../../assets/images/mansion.jpg"
              alt="mansion picture"
            />
          </div>
          <img
            class="family-main-info-images-3"
            src="../../assets/images/dog-farm.jpg"
            alt="dog and cow picture"
            data-scroll
            data-scroll-speed="2"
          />
        </div>
      </div>
    </div>
    <BaseAside :color="'dark'">Generation</BaseAside>

    <svg class="background-animation">
      <text
        class="background-animation-text"
        dominant-baseline="middle"
        text-anchor="middle"
        fill="none"
        vector-effect="non-scaling-stroke"
        :style="{ 'stroke-dashoffset': animateVal + '%' }"
      >
        ROKA
      </text>
    </svg>
  </section>
</template>

<script setup>
import BaseAside from '../ui/BaseAside.vue'
import { useAnimation } from '../../composables/useBackgroundAnimationHandler'
import { animate } from '../../composables/useElementAnimationHandler'
const { target, animateVal } = useAnimation()

animate.header('.family-main-header-h2', '.family')
animate.mainImg('.family-main-info-images-2', '.family')
animate.text('.family-main-info-p', '.family')
animate.line('.family-main-info-text-line', '.family')
animate.words('.family-main-info-h3-words', '.family')
animate.smallImg('.family-main-info-images-1', '.family')
animate.smallImg('.family-main-info-images-3', '.family')
</script>

<style lang="scss" scoped>
@import '../../assets/breakpoints.scss';
.family {
  color: var(--rw-primary-2);
  background-color: var(--rw-accent-2);
  display: flex;
  align-items: center;
  position: relative;
  padding-left: 6rem;
  &-main {
    flex: 1;
    &-header {
      width: 90%;
      border-bottom: 1px solid var(--rw-primary-2);
    }
    &-info {
      font-size: var(--rw-font-p2);
      display: flex;
      &-text {
        position: relative;
        &-line {
          position: absolute;
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
        margin-top: 15%;
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
          z-index: 55;
        }
      }
    }
  }
  & svg {
    @media only screen and (max-width: $bp-750) {
      height: 100vh;
    }
  }
  & text {
    transform: translate(25%, 90%);
    @media only screen and (max-width: $bp-950) {
      transform: translate(25%, 95%);
    }
    @media only screen and (max-width: $bp-750) {
      display: none;
    }
  }
  @media only screen and (max-width: $bp-950) {
    padding-left: 2rem;
    align-items: normal;
    &-main {
      &-info {
        &-text {
          &-line {
            margin-top: 2rem;
          }
        }
        & p {
          margin-top: 15%;
        }
        &-images {
          &-1 {
            width: 35vw;
            position: absolute;
            z-index: 2;
            right: 4%;
            top: -15rem;
          }
          &-3 {
            width: 30vw;
            position: absolute;
            bottom: -20%;
            right: 1%;
          }
        }
      }
    }
  }
  @media only screen and (max-width: $bp-750) {
    &-main {
      margin-top: 8rem;
      &-header {
        width: 100%;

        & h2 {
          position: relative;
          z-index: 20;
        }
      }
      &-info {
        display: flex;
        flex-direction: column;
        gap: 4rem;
        &-h3 {
          width: 100%;
          position: relative;
          z-index: 20;
        }
        & p {
          margin-top: 5%;
        }
        &-text {
          &-line {
            display: none;
          }
        }
        &-images {
          display: flex;
          justify-content: center;
          align-items: center;
          margin-bottom: 1rem;
          margin-top: 4rem;
          &-1 {
            width: 45vw;
            position: absolute;
            z-index: 5;
            right: 1%;
            top: -65rem;
          }
          &-2 {
            width: 95%;
            &-wrapper {
              display: flex;
              justify-content: center;
            }
          }
          &-3 {
            width: 65%;
            position: absolute;
            bottom: -55%;
            right: 1%;
          }
        }
      }
    }
  }
  @media only screen and (max-width: 450px) and (max-height: 750px) {
    & .family-main-info-images-1 {
      top: -55rem;
    }
  }
}
</style>
