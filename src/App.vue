<script setup></script>

<template>
  <RouterView />
</template>

<style lang="scss">
.section {
  min-height: 100vh;
}
.section-header {
  font-size: var(--rw-font-h1);
  font-weight: 400;
  font-style: italic;
}
.background-animation {
  position: absolute;
  width: 100vw;
  height: 100vh;
  -webkit-user-drag: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
.background-animation-text {
  stroke-dasharray: 100%;
  stroke-dashoffset: 100%;
  font-size: 10vw;
  line-height: 88%;
  stroke-width: 0.8px;
  stroke: var(--rw-secondary-2);
  text-transform: uppercase;
  transition: all 1s;

  &:hover {
    stroke-dashoffset: 0%;
  }
}
</style>
