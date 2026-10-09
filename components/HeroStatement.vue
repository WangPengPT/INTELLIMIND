<script setup lang="ts">
const t = useContent()
// "*word*" marks a highlighted word
const parts = computed(() =>
  t.value.hero.statement.split('*').map((text, i) => ({ text, hl: i % 2 === 1 }))
)
</script>

<template>
  <section id="top" class="hero">
    <div class="wrap">
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
  padding: clamp(150px, 22vh, 230px) 0 clamp(56px, 8vw, 96px);
}
h1 {
  font-size: clamp(2.1rem, 5vw, 4.4rem);
  font-weight: 500;
  line-height: 1.18;
  max-width: 19em;
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
