<script setup lang="ts">
const t = useContent()
</script>

<template>
  <footer class="foot">
    <div class="wrap grid">
      <div v-for="c in t.footer.cols" :key="c.h" class="col">
        <h3>{{ c.h }}</h3>
        <a v-for="l in c.l" :key="l" href="#top">{{ l }}</a>
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
  </footer>
</template>

<style scoped>
.foot {
  background: #000;
  padding: 72px 0;
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
