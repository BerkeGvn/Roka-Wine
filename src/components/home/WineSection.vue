<template>
  <section class="wine section">
    <div class="wine-main">
      <div class="wine-main-images">
        <img
          class="wine-main-images-1"
          src="../../assets/images/barrels.jpg"
          alt="a wine barrel"
          data-aos="fade-up"
          data-aos-duration="500"
          data-aos-delay="300"
          data-aos-once="true"
        />
        <img
          class="wine-main-images-2"
          src="../../assets/images/wine-red.jpg"
          alt="a wine bottle"
          data-aos="fade-up"
          data-aos-duration="500"
          data-aos-delay="600"
          data-aos-once="true"
        />
        <img
          class="wine-main-images-3"
          src="../../assets/images/wine-glass.jpg"
          alt="a wine glass"
          data-scroll
          data-scroll-speed="1"
        />
      </div>
      <div class="wine-main-info">
        <h2
          class="wine-main-info-header-h2 section-header"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="500"
          data-aos-once="true"
        >
          WINES.
        </h2>
        <div class="wine-main-info-text">
          <p data-aos="fade-up" data-aos-duration="800" data-aos-delay="1000" data-aos-once="true">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia
            consequat duis enim velit mollit.
          </p>
        </div>
        <div class="wine-main-info-button">
          <a
            href="#"
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="1200"
            data-aos-once="true"
            >Our Wines
          </a>
          <svg
            width="12"
            height="20"
            viewBox="0 0 12 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            data-aos="fade-left"
            data-aos-duration="800"
            data-aos-delay="1200"
            data-aos-once="true"
          >
            <path
              d="M2 -8.74228e-07L12 10L2 20L0.225001 18.225L8.45 10L0.225002 1.775L2 -8.74228e-07Z"
              fill="#E75055"
            />
          </svg>
        </div>
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
        display: flex;
        align-items: center;
        gap: 1rem;
        &:hover {
          & a {
            &:hover::after {
              bottom: -5%;
            }
          }
          & svg {
            padding-left: 1rem;
          }
        }
        & a {
          position: relative;
          &::after {
            content: '';
            position: absolute;
            bottom: -1%;
            left: 0;
            height: 2px;
            width: 100%;
            background-color: var(--rw-secondary-2);
            transition: all 0.2s;
          }
        }
        & svg {
          transition: all 0.5s;
          width: 2.2rem;
          height: 2.2rem;
        }
        & polygon {
          fill: var(--rw-secondary-2);
        }
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
