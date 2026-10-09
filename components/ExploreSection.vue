<script setup lang="ts">
const t = useContent()
</script>

<template>
  <section id="what" class="section explore">
    <WaveDivider />
    <div class="wrap">
      <div v-reveal class="head">
        <h2 class="h2">{{ t.explore.title }}</h2>
        <p class="lead">{{ t.explore.lead }}</p>
      </div>

      <div class="rows">
        <article v-for="(s, i) in t.explore.items" :key="s.key" v-reveal class="row" :class="{ flip: i % 2 === 1 }">
          <div class="media">
            <SceneArt :kind="s.key as 'games' | 'web' | 'ai'" />
          </div>
          <div class="info">
            <span class="num">0{{ i + 1 }}</span>
            <h3>{{ s.name }}</h3>
            <p>{{ s.text }}</p>
            <a href="#contact" class="pill">{{ t.explore.more }}</a>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
.head {
  display: grid;
  gap: 18px;
  margin-bottom: clamp(48px, 7vw, 88px);
}
.rows {
  display: grid;
  gap: clamp(56px, 8vw, 110px);
}
.row {
  display: grid;
  grid-template-columns: 1.25fr 1fr;
  gap: clamp(32px, 6vw, 88px);
  align-items: center;
}
.row.flip {
  grid-template-columns: 1fr 1.25fr;
}
.row.flip .media {
  order: 2;
}
.media {
  aspect-ratio: 16 / 10;
  overflow: hidden;
  border-radius: 14px;
}
.media :deep(svg) {
  transition: transform 0.9s cubic-bezier(0.2, 0.7, 0.2, 1);
}
.row:hover .media :deep(svg) {
  transform: scale(1.05);
}
.info {
  display: grid;
  gap: 16px;
  justify-items: start;
}
.num {
  font-size: 0.9rem;
  font-weight: 600;
  letter-spacing: 0.14em;
  color: var(--blue);
}
h3 {
  font-size: clamp(2.2rem, 4vw, 3.4rem);
  font-weight: 600;
  letter-spacing: -0.02em;
}
.info p {
  color: var(--muted);
  max-width: 40ch;
  margin-bottom: 8px;
}
@media (max-width: 860px) {
  .row,
  .row.flip {
    grid-template-columns: 1fr;
  }
  .row.flip .media {
    order: 0;
  }
}
</style>

<style scoped>
.explore {
  position: relative;
  margin-top: 0;
  z-index: 2;
  padding-top: clamp(80px, 11vw, 150px);
  background: #1c1c1c;
}
</style>
