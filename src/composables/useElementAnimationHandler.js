import { onMounted } from "vue";
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'


gsap.registerPlugin(ScrollTrigger)

export function gsapLoco(el, locoScroll) {
  locoScroll.on("scroll", ScrollTrigger.update);

  ScrollTrigger.scrollerProxy(el, {
    scrollTop(value) {
      return arguments.length ? locoScroll.scrollTo(value, { duration: 0, disableLerp: true }) : locoScroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight
      };
    },
    pinType: el.style.transform ? "transform" : "fixed"
  });


  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  ScrollTrigger.refresh()



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
        y: '+10vh',
        delay: 0.8,
        duration: 2,
        ease: 'power1.inOut',
        opacity: 0
      })
    })
  },
  button(el, container) {
    onMounted(() => {
      gsap.from(el, {
        scrollTrigger: {
          start: '120px 80%',
          trigger: container,
          scroller: '.container'
        },
        y: '+10vh',
        delay: 1,
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
  smallImg(el, container) {
    onMounted(() => {
      gsap.from(el, {
        scrollTrigger: {
          start: '120px 80%',
          trigger: container,
          scroller: '.container',
        },
        duration: 1.8,
        opacity: 0,
        delay: 0.6,
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
        y: '+10vh',
        delay: 1,
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
  },

  loadingSlide(el) {
    onMounted(() => {
      let tl = gsap.timeline({ paused: false });
      tl.from(el, {
        y: '100%',
        delay: 3,
        duration: 1,
        ease: 'Power1.easeOut'
      });
      tl.to(el, {
        y: '0%',
        duration: 1,
        ease: 'Power1.easeOut'
      });
      tl.to(el, {
        y: '-100%',
        duration: 1,
        ease: 'Power1.easeIn'
      });
      tl.to(el, {
        height: 0,
        width: 0,
      });
    })
  }
}

// helper function to play animation when tab isn't active
function tickGSAPWhileHidden(value) {
  if (value === false) {
    document.removeEventListener("visibilitychange", tickGSAPWhileHidden.fn);
    return clearInterval(tickGSAPWhileHidden.id);
  }
  const onChange = () => {
    clearInterval(tickGSAPWhileHidden.id);
    if (document.hidden) {
      gsap.ticker.lagSmoothing(0); // keep the time moving forward (don't adjust for lag)
      tickGSAPWhileHidden.id = setInterval(gsap.ticker.tick, 500);
    } else {
      gsap.ticker.lagSmoothing(500, 33); // restore lag smoothing
    }
  };
  document.addEventListener("visibilitychange", onChange);
  tickGSAPWhileHidden.fn = onChange;
  onChange(); // in case the document is currently hidden.
}

tickGSAPWhileHidden(true);