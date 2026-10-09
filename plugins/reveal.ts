// v-reveal: fade/slide an element in once it scrolls into view.
export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive('reveal', {
    mounted(el: HTMLElement, binding) {
      el.classList.add('reveal')
      if (binding.value) el.style.transitionDelay = `${binding.value}ms`
      const io = new IntersectionObserver(
        (entries) => {
          for (const e of entries) {
            if (e.isIntersecting) {
              el.classList.add('in')
              io.unobserve(el)
            }
          }
        },
        { threshold: 0.15 }
      )
      io.observe(el)
    },
    getSSRProps: () => ({})
  })
})
