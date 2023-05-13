<template>
  <LoadingScreen v-if="isLoading"></LoadingScreen>
  <div class="home-view" v-else>
    <BaseHeader></BaseHeader>
    <SmyrnaSection></SmyrnaSection>
    <FamilySection></FamilySection>
    <VineyardParallax></VineyardParallax>
    <VineyardSection></VineyardSection>
    <WineSection></WineSection>
    <BaseFooter></BaseFooter>
  </div>
  <div class="animateScreen"></div>
</template>

<script setup>
import { ref } from 'vue'
import BaseHeader from '../components/home/BaseHeader.vue'
import FamilySection from '../components/home/FamilySection.vue'
import SmyrnaSection from '../components/home/SmyrnaSection.vue'
import VineyardParallax from '../components/home/VineyardParallax.vue'
import VineyardSection from '../components/home/VineyardSection.vue'
import WineSection from '../components/home/WineSection.vue'
import BaseFooter from '../components/ui/BaseFooter.vue'
import LoadingScreen from '../components/ui/LoadingScreen.vue'

const isLoading = ref(true)
setTimeout(() => {
  isLoading.value = false
}, 4000)

/* 
const emit = defineEmits(['testEm'])
function test() {
  emit('testEm')
}
setTimeout(() => {
  test()
}, 7000) 
 */
</script>

<style lang="scss" scoped>
.animateScreen {
  position: absolute;
  top: 0;
  z-index: 555;
  height: 100vh;
  width: 100vw;
  background-color: var(--rw-secondary-3);
}
</style>
