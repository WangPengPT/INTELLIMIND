<script setup lang="ts">
const t = useContent()
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
          <div class="art" :class="{ paper: i === 0 }">
            <WorkArt :kind="(['game', 'web', 'ai'] as const)[i]" />
            <span class="word">{{ w.name }}</span>
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
  overflow: hidden;
  border-radius: 10px;
  transition: transform 0.5s cubic-bezier(0.2, 0.7, 0.2, 1);
}
.art::after {
  content: '';
  position: absolute;
  inset: 55% 0 0 0;
  background: linear-gradient(180deg, transparent, rgba(0, 0, 0, 0.55));
  pointer-events: none;
}
.art.paper::after {
  display: none;
}
.art.paper .word {
  color: #141414;
  text-shadow: none;
}
.card:hover .art {
  transform: scale(1.025);
}
.word {
  position: absolute;
  left: 22px;
  bottom: 22px;
  z-index: 1;
  font-size: clamp(2rem, 3.4vw, 3rem);
  font-weight: 600;
  letter-spacing: -0.02em;
  text-shadow: 0 4px 24px rgba(0, 0, 0, 0.5);
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
