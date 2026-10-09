<script setup lang="ts">
import type { Lang } from '~/composables/useContent'
const t = useContent()
const lang = useLang()
const scrolled = ref(false)
const open = ref(false)
const langOpen = ref(false)
const langBox = ref<HTMLElement | null>(null)
const current = computed(() => LANGS.find((l) => l.code === lang.value) ?? LANGS[0])
const pick = (code: Lang) => {
  lang.value = code
  langOpen.value = false
}

onMounted(() => {
  const on = () => (scrolled.value = window.scrollY > 40)
  on()
  const away = (e: PointerEvent) => {
    if (langBox.value && !langBox.value.contains(e.target as Node)) langOpen.value = false
  }
  const esc = (e: KeyboardEvent) => e.key === 'Escape' && (langOpen.value = false)
  window.addEventListener('scroll', on, { passive: true })
  document.addEventListener('pointerdown', away)
  document.addEventListener('keydown', esc)
  onBeforeUnmount(() => {
    window.removeEventListener('scroll', on)
    document.removeEventListener('pointerdown', away)
    document.removeEventListener('keydown', esc)
  })
})

</script>

<template>
  <header class="head" :class="{ scrolled, open }">
    <div class="wrap bar">
      <a href="#top" class="logo" aria-label="INTELLIMIND">intelli<b>mind</b></a>

      <nav class="links" :aria-label="t.a11y.main">
        <a href="#what" @click="open = false">{{ t.nav.what }}</a>
        <a href="#work" @click="open = false">{{ t.nav.work }}</a>
        <a href="#studio" @click="open = false">{{ t.nav.studio }}</a>
        <a href="#contact" @click="open = false">{{ t.nav.contact }}</a>
        
      </nav>

      <div class="right">
        <div ref="langBox" class="lang">
          <button class="lang-btn" aria-haspopup="listbox" :aria-expanded="langOpen" :aria-label="t.a11y.language" @click="langOpen = !langOpen">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" aria-hidden="true">
              <circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3c3 3.2 3 14.8 0 18M12 3c-3 3.2-3 14.8 0 18" />
            </svg>
            <span>{{ current.short }}</span>
            <svg class="chev" viewBox="0 0 12 8" width="10" height="7" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M1 1.5l5 5 5-5" /></svg>
          </button>
          <ul v-if="langOpen" class="menu" role="listbox" :aria-label="t.a11y.language">
            <li v-for="l in LANGS" :key="l.code" role="option" :aria-selected="l.code === lang">
              <button :class="{ on: l.code === lang }" :lang="l.html" @click="pick(l.code)">
                <span>{{ l.label }}</span>
                <svg v-if="l.code === lang" viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 8.5l3.2 3.2L13 4.8" /></svg>
              </button>
            </li>
          </ul>
        </div>
        <button class="burger" :aria-expanded="open" :aria-label="t.a11y.menu" @click="open = !open">
          <span /><span />
        </button>
      </div>
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
  margin-left: auto;
  margin-right: 32px;
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
.right {
  display: flex;
  align-items: center;
  gap: 6px;
}
.lang {
  position: relative;
}
.lang-btn {
  all: unset;
  display: inline-flex;
  align-items: center;
  gap: 7px;
  cursor: pointer;
  padding: 7px 14px;
  border: 1.5px solid rgba(255, 255, 255, 0.35);
  border-radius: 999px;
  font: 600 0.85rem var(--font);
  color: #fff;
  transition: border-color 0.2s ease, background 0.2s ease;
}
.lang-btn:hover,
.lang-btn[aria-expanded='true'] {
  border-color: var(--blue);
  background: rgba(134, 180, 234, 0.12);
}
.chev {
  transition: transform 0.2s ease;
}
.lang-btn[aria-expanded='true'] .chev {
  transform: rotate(180deg);
}
.menu {
  position: absolute;
  right: 0;
  top: calc(100% + 10px);
  min-width: 176px;
  margin: 0;
  padding: 8px;
  list-style: none;
  background: #2b2b2b;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 14px;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.5);
  animation: pop 0.16s ease both;
  z-index: 60;
}
.menu button {
  all: unset;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  width: 100%;
  cursor: pointer;
  padding: 10px 12px;
  border-radius: 9px;
  font: 500 0.95rem var(--font);
  color: #e8e8e8;
}
.menu button:hover {
  background: rgba(255, 255, 255, 0.08);
}
.menu button.on {
  color: var(--blue);
}
@keyframes pop {
  from {
    opacity: 0;
    transform: translateY(-6px);
  }
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
    padding: 16px 0;
    font-size: 1.1rem;
    width: 100%;
  }
  .menu {
    max-height: calc(100svh - 100px);
    overflow-y: auto;
  }
  .lang-btn {
    padding: 7px 11px;
  }
}
</style>
