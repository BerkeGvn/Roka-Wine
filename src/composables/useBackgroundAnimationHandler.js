
import { ref, onMounted, watch } from 'vue'
import useIntersectionObserver from './useIntersectionObserver'
export function useAnimation() {

  const target = ref(null)
  const inView = ref(false)
  const animateVal = ref(100)
  onMounted(() => {
    useIntersectionObserver(target.value, inView)
  })
  function countdown() {
    if (animateVal.value <= 1) {
      return
    }
    animateVal.value -= 1
    setTimeout(countdown, 20)
  }

  watch(inView, (newVal) => {
    if (newVal === true && animateVal.value > 0) {
      countdown()
    }
  })
  return { target, animateVal }
}