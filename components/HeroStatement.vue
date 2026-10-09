<script setup lang="ts">
const t = useContent()
// "*word*" marks a highlighted word
const parts = computed(() =>
  t.value.hero.statement.split('*').map((text, i) => ({ text, hl: i % 2 === 1 }))
)
</script>

<template>
  <section id="top" class="hero">
    <svg class="sphere" viewBox="-120 -120 240 240" aria-hidden="true">
      <g class="spin" fill="none" stroke="#f2b632" stroke-width="2.2">
        <circle r="104" opacity=".5" />
        <ellipse rx="104" ry="34" transform="rotate(-23)" stroke-width="7" opacity=".85" />
        <ellipse rx="104" ry="34" opacity=".4" />
        <ellipse rx="34" ry="104" opacity=".5" />
        <ellipse rx="70" ry="104" opacity=".35" />
        <line y1="-112" y2="112" opacity=".6" />
      </g>
      <circle r="24" fill="#86b4ea" opacity=".9" />
      <circle r="24" fill="none" stroke="#f2b632" stroke-width="3" />
    </svg>
    <div class="wrap">
      <p class="hello"><span class="flag" aria-hidden="true"><i /><i /></span>{{ t.hero.hello }}</p>
      <h1>
        <template v-for="(p, i) in parts" :key="i">
          <span v-if="p.hl" class="hl">{{ p.text }}</span>
          <template v-else>{{ p.text }}</template>
        </template>
      </h1>
    </div>
  </section>
</template>

<style scoped>
.hero {
  position: relative;
  padding: clamp(150px, 22vh, 230px) 0 clamp(56px, 8vw, 96px);
}
/* soft glow that fades out completely, so the hero blends into the page */
.hero::before {
  content: '';
  position: absolute;
  inset: 0 0 -40px 0;
  background: radial-gradient(60% 80% at 85% 0%, rgba(134, 180, 234, 0.14), transparent 70%);
  -webkit-mask-image: linear-gradient(180deg, #000 30%, transparent 100%);
  mask-image: linear-gradient(180deg, #000 30%, transparent 100%);
  pointer-events: none;
}
.hello {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 22px;
  font-size: 1.1rem;
  font-weight: 500;
  color: var(--muted);
}
.flag {
  display: inline-flex;
  width: 30px;
  height: 20px;
  border-radius: 3px;
  overflow: hidden;
}
.flag i:first-child {
  width: 40%;
  background: #1d6b4f;
}
.flag i:last-child {
  flex: 1;
  background: #c8302e;
}
.sphere {
  position: absolute;
  right: max(4vw, 24px);
  top: 110px;
  width: clamp(220px, 28vw, 420px);
  opacity: 0.3;
  z-index: 0;
  pointer-events: none;
}
.spin {
  animation: spin 70s linear infinite;
}
@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
@media (max-width: 900px) {
  .sphere {
    opacity: 0.22;
    top: 90px;
  }
}
h1 {
  font-size: clamp(2.1rem, 4.8vw, 6rem);
  font-weight: 500;
  line-height: 1.18;
  max-width: 17em;
  position: relative;
  z-index: 1;
  letter-spacing: -0.015em;
  animation: rise 1.1s cubic-bezier(0.2, 0.7, 0.2, 1) both;
}
.hl {
  color: var(--blue);
}
@keyframes rise {
  from {
    opacity: 0;
    transform: translateY(28px);
  }
}
</style>
