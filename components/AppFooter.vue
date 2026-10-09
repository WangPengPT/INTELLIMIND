<script setup lang="ts">
const t = useContent()
const links = [['#what', '#what', '#what'], ['#studio', '#work', '#contact']]
</script>

<template>
  <footer class="foot">
    <svg class="wave" viewBox="0 0 1440 140" preserveAspectRatio="none" aria-hidden="true">
      <path d="M0 0 H1440 V70 C1320 140 1200 140 1080 70 S840 0 720 70 S480 140 360 70 S120 0 0 70Z" fill="#1a1a1a" />
      <path d="M0 0 H1440 V40 C1320 110 1200 110 1080 40 S840 -30 720 40 S480 110 360 40 S120 -30 0 40Z" fill="#232323" />
    </svg>
    <div class="wrap grid">
      <div v-for="c in t.footer.cols" :key="c.h" class="col">
        <h3>{{ c.h }}</h3>
        <a v-for="(l, i) in c.l" :key="l" :href="links[c.h === t.footer.cols[0].h ? 0 : 1][i]">{{ l }}</a>
      </div>
      <div class="col end">
        <a href="#top" class="logo">intelli<b>mind</b></a>
        <p class="made">
          {{ t.footer.made }}
          <svg viewBox="0 0 30 20" width="22" height="15" role="img" aria-label="Portugal">
            <rect width="12" height="20" fill="#1d6b4f" />
            <rect x="12" width="18" height="20" fill="#c8302e" />
            <circle cx="12" cy="10" r="4.5" fill="#f2b632" />
            <circle cx="12" cy="10" r="2.5" fill="#fff" />
          </svg>
        </p>
        <p class="small">©{{ new Date().getFullYear() }} INTELLIMIND, Lda. {{ t.footer.rights }}</p>
      </div>
    </div>
    <div class="mark" aria-hidden="true">intelli<b>mind</b></div>
  </footer>
</template>

<style scoped>
.foot {
  position: relative;
  background: #000;
  padding: 150px 0 72px;
}
.wave {
  position: absolute;
  top: -1px;
  left: 0;
  width: 100%;
  height: clamp(70px, 9vw, 140px);
}
.mark {
  margin-top: 56px;
  text-align: center;
  font-size: clamp(4rem, 17vw, 15rem);
  font-weight: 600;
  letter-spacing: -0.04em;
  line-height: 0.9;
  color: rgba(255, 255, 255, 0.05);
  user-select: none;
  overflow: hidden;
  white-space: nowrap;
}
.mark b {
  font-weight: 600;
  color: rgba(134, 180, 234, 0.12);
}
.grid {
  display: grid;
  grid-template-columns: 1fr 1fr 2fr;
  gap: 40px;
}
.col {
  display: grid;
  align-content: start;
  gap: 10px;
}
h3 {
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 8px;
}
.col a {
  text-decoration: none;
  font-size: 0.95rem;
  color: var(--muted);
}
.col a:hover {
  color: var(--blue);
}
.end {
  justify-items: start;
}
.logo {
  font-size: 1.5rem;
  font-weight: 500;
  color: #fff !important;
}
.logo b {
  font-weight: 500;
  color: var(--blue);
}
.made {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 0.92rem;
  color: #ddd;
}
.small {
  font-size: 0.8rem;
  color: #888;
}
@media (max-width: 760px) {
  .grid {
    grid-template-columns: 1fr 1fr;
  }
  .end {
    grid-column: 1 / -1;
  }
}
</style>
