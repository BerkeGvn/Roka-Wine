
import { ref, onMounted, watch } from 'vue'
import useIntersectionObserver from './useIntersectionObserver'
export function useAnimation() {

  const target = ref(null)
  const inView = ref(false)
  const animate = ref(100)
  onMounted(() => {
    useIntersectionObserver(target.value, inView)
  })
  function countdown() {
    if (animate.value <= 1) {
      return
    }
    animate.value -= 1
    setTimeout(countdown, 20)
  }

  watch(inView, (newVal) => {
    if (newVal === true && animate.value > 0) {
      countdown()
    }
  })
  return { target, animate }
}