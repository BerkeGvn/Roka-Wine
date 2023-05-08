<template>
  <aside class="aside">
    <slot></slot>
  </aside>
</template>

<script setup></script>

<style lang="scss" scoped>
aside {
  position: absolute;
  right: 0;
  top: 0;
  border-left: 3px solid var(--rw-text-color-1);
  padding: 1.04vw 1.04vw;
  height: 100%;
  text-align: center;
  font-size: var(--rw-font-h4);
  writing-mode: vertical-rl;
}
</style>
