<script setup lang="ts">
const t = useContent()
const art = [
  'linear-gradient(160deg,#241a58 0%,#b9507c 60%,#f7a65d 100%)',
  'linear-gradient(160deg,#173f86 0%,#3b86d4 100%)',
  'linear-gradient(160deg,#04181a 0%,#1d6b4f 100%)'
]
</script>

<template>
  <section id="work" class="section">
    <div class="wrap">
      <div v-reveal class="top">
        <h2 class="h2">{{ t.work.title }}</h2>
        <a href="#contact" class="pill">{{ t.work.more }}</a>
      </div>

      <div class="grid">
        <article v-for="(w, i) in t.work.items" :key="w.name" v-reveal="i * 120" class="card">
          <div class="art" :style="{ background: art[i] }">
            <span class="word">{{ w.name }}</span>
            <svg v-if="i === 0" class="deco" viewBox="0 0 120 160" aria-hidden="true">
              <path d="M52 150 L60 40 L68 150Z" fill="#f6efe2" />
              <rect x="50" y="26" width="20" height="16" fill="#ffe9a8" />
              <path d="M46 26 L60 12 L74 26Z" fill="#c8302e" />
              <path d="M70 34 L120 10 L120 58Z" fill="#ffe9a8" opacity=".3" />
            </svg>
            <svg v-else-if="i === 1" class="deco" viewBox="0 0 120 160" aria-hidden="true">
              <g fill="none" stroke="#fff" stroke-width="3" stroke-linecap="round" opacity=".85">
                <path d="M10 20 C60 40 20 80 60 100 S110 130 100 150" />
                <path d="M30 10 C80 50 40 90 80 120" opacity=".6" />
              </g>
            </svg>
            <svg v-else class="deco" viewBox="0 0 120 160" aria-hidden="true">
              <circle cx="60" cy="70" r="46" fill="#bff3dc" opacity=".16" />
              <path d="M60 36 l6 18 18 6 -18 6 -6 18 -6 -18 -18 -6 18 -6z" fill="#ffe9a0" />
            </svg>
          </div>
          <h3>{{ w.text }}</h3>
          <p class="meta">{{ w.kind }} · {{ t.work.status }}</p>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
.top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  margin-bottom: 40px;
}
.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 28px;
}
.card {
  display: grid;
  gap: 16px;
  align-content: start;
}
.art {
  position: relative;
  aspect-ratio: 16 / 10;
  border-radius: 10px;
  overflow: hidden;
  display: grid;
  place-items: center;
  transition: transform 0.5s cubic-bezier(0.2, 0.7, 0.2, 1);
}
.card:hover .art {
  transform: scale(1.025);
}
.word {
  position: relative;
  z-index: 1;
  font-size: clamp(2.2rem, 4vw, 3.2rem);
  font-weight: 600;
  letter-spacing: -0.02em;
}
.deco {
  position: absolute;
  right: 6%;
  bottom: -4%;
  height: 80%;
  opacity: 0.9;
}
h3 {
  font-size: 1.02rem;
  font-weight: 600;
  line-height: 1.4;
}
.meta {
  font-size: 0.78rem;
  color: var(--muted);
  margin-top: -6px;
}
@media (max-width: 900px) {
  .grid {
    grid-template-columns: 1fr;
  }
}
</style>
