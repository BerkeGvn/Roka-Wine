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
  border-left: 3px solid var(--rw-text-color-1);
  padding: 1.04vw 1.04vw;
  min-height: 100vh;
  text-align: center;
  font-size: var(--rw-font-h4);
  writing-mode: vertical-rl;
  letter-spacing: 4px;
  align-self: stretch;
  position: relative;
}
.dark {
  color: var(--rw-primary-2);
  border-color: var(--rw-primary-2);
}

.red {
  border-color: var(--rw-secondary-3);
}
</style>
