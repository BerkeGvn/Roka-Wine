<template>
  <aside :class="props.color" class="aside">
    <slot></slot>
  </aside>
</template>

<script setup>
const props = defineProps(['color'])
</script>

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
  letter-spacing: 4px;
}
.dark {
  color: var(--rw-primary-2);
  border-color: var(--rw-primary-2);
}
</style>
