import { onMounted } from "vue";

import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'


gsap.registerPlugin(ScrollTrigger)

export function test(el, locoScroll) {
  ScrollTrigger.scrollerProxy(el, {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight
      };
    }

  });
}

export const animate = {
  header(el, container) {
    onMounted(() => {
      gsap.from(el, {
        scrollTrigger: {
          start: '120px 80%',
          trigger: container,
          scroller: '.container'
        },
        x: -200,
        delay: 0.6,
        duration: 3,
        ease: 'power1.inOut',
        opacity: 0
      })
    })
  },

  text(el, container) {
    onMounted(() => {
      gsap.from(el, {
        scrollTrigger: {
          start: '120px 80%',
          trigger: container,
          scroller: '.container'
        },
        y: 200,
        delay: 0.8,
        duration: 2,
        ease: 'power1.inOut',
        opacity: 0
      })
    })
  },

  mainImg(el, container) {
    onMounted(() => {
      gsap.from(el, {
        scrollTrigger: {
          start: '120px 80%',
          trigger: container,
          scroller: '.container',
          markers: true
        },
        y: -200,
        scale: 1.5,
        duration: 1.6,
        opacity: 0,
        delay: 0.4,
        ease: 'power1.inOut',
      })
    })
  },

  words(el, container) {
    onMounted(() => {
      gsap.from(el, {
        scrollTrigger: {
          start: '120px 80%',
          trigger: container,
          scroller: '.container'
        },
        y: 200,
        delay: 0.8,
        duration: 1,
        ease: 'power1.inOut',
        stagger: 0.25,
        opacity: 0
      })
    })
  },

  line(el, container) {
    onMounted(() => {
      gsap.from(el, {
        scrollTrigger: {
          start: '15% 80%',
          trigger: container,
          scroller: '.container'
        },
        width: 0,
        delay: 0.8,
        duration: 2,
        ease: 'power1.inOut',
        opacity: 0
      })
    })
  },

  parallax(el) {
    console.log('asfds')
    onMounted(() => {
      gsap.to(el, {
        backgroundPosition: "50% 100%",
        ease: "none",
        scrollTrigger: {
          trigger: el,
          start: "top bottom",
          end: "bottom top",
          scrub: 1.5,
          scroller: '.container'
        }
      });
    })
  }

}

