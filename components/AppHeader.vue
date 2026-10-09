<script setup lang="ts">
const t = useContent()
const lang = useLang()
const scrolled = ref(false)
const open = ref(false)

onMounted(() => {
  const on = () => (scrolled.value = window.scrollY > 40)
  on()
  window.addEventListener('scroll', on, { passive: true })
  onBeforeUnmount(() => window.removeEventListener('scroll', on))
})

watch(lang, (l) => {
  if (import.meta.client) document.documentElement.lang = l
})
</script>

<template>
  <header class="head" :class="{ scrolled, open }">
    <div class="wrap bar">
      <a href="#top" class="logo" aria-label="INTELLIMIND">intelli<b>mind</b></a>

      <nav class="links" aria-label="Main">
        <a href="#what" @click="open = false">{{ t.nav.what }}</a>
        <a href="#work" @click="open = false">{{ t.nav.work }}</a>
        <a href="#studio" @click="open = false">{{ t.nav.studio }}</a>
        <a href="#contact" @click="open = false">{{ t.nav.contact }}</a>
        <div class="lang" role="group" aria-label="Language">
          <button :class="{ on: lang === 'en' }" @click="lang = 'en'">EN</button>
          <button :class="{ on: lang === 'pt' }" @click="lang = 'pt'">PT</button>
        </div>
      </nav>

      <button class="burger" :aria-expanded="open" aria-label="Menu" @click="open = !open">
        <span /><span />
      </button>
    </div>
  </header>
</template>

<style scoped>
.head {
  position: fixed;
  inset: 0 0 auto 0;
  z-index: 50;
  transition: background 0.35s ease;
}
.head.scrolled,
.head.open {
  background: rgba(35, 35, 35, 0.9);
  backdrop-filter: blur(14px);
}
.bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 72px;
}
.logo {
  text-decoration: none;
  font-size: 1.7rem;
  font-weight: 500;
  letter-spacing: -0.01em;
}
.logo b {
  font-weight: 500;
  color: var(--blue);
}
.links {
  display: flex;
  align-items: center;
  gap: 36px;
}
.links a {
  text-decoration: none;
  font-weight: 500;
  font-size: 0.98rem;
  opacity: 0.9;
  transition: color 0.2s ease;
}
.links a:hover {
  color: var(--blue);
}
.lang {
  display: flex;
  gap: 2px;
  font-size: 0.8rem;
}
.lang button {
  all: unset;
  cursor: pointer;
  font: 600 0.8rem var(--font);
  padding: 4px 9px;
  border-radius: 999px;
  color: var(--muted);
}
.lang button.on {
  background: #eee;
  color: #111;
}
.burger {
  all: unset;
  display: none;
  cursor: pointer;
  width: 36px;
  height: 36px;
  position: relative;
}
.burger span {
  position: absolute;
  left: 7px;
  right: 7px;
  height: 2px;
  background: #fff;
  transition: transform 0.3s ease;
}
.burger span:first-child {
  top: 13px;
}
.burger span:last-child {
  top: 21px;
}
.open .burger span:first-child {
  transform: translateY(4px) rotate(45deg);
}
.open .burger span:last-child {
  transform: translateY(-4px) rotate(-45deg);
}

@media (max-width: 820px) {
  .burger {
    display: block;
  }
  .links {
    position: absolute;
    top: 72px;
    left: 0;
    right: 0;
    flex-direction: column;
    align-items: flex-start;
    gap: 0;
    background: var(--bg);
    padding: 8px 32px 24px;
    display: none;
  }
  .open .links {
    display: flex;
  }
  .links a {
    padding: 14px 0;
  }
  .lang {
    margin-top: 10px;
  }
}
</style>
