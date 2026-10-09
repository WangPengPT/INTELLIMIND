<script setup lang="ts">
const t = useContent()
</script>

<template>
  <section id="studio" class="section">
    <div class="wrap layout">
      <div v-reveal class="text">
        <h2 class="h2">{{ t.about.title }}</h2>
        <p class="lead">{{ t.about.p1 }}</p>
        <p class="lead">{{ t.about.p2 }}</p>
        <div class="btns">
          <a href="#contact" class="pill solid">{{ t.about.cta }}</a>
          <a href="#top" class="pill">{{ t.about.cta2 }}</a>
        </div>
        <dl class="values">
          <div v-for="v in t.about.values" :key="v.t">
            <dt>{{ v.t }}</dt>
            <dd>{{ v.d }}</dd>
          </div>
        </dl>
      </div>

      <div v-reveal="150" class="photo" aria-hidden="true">
        <div class="tiles" />
        <div class="veil" />
        <svg class="rooster" viewBox="0 0 160 190">
          <circle cx="80" cy="95" r="84" fill="#f4f1e8" />
          <g transform="translate(0 6) scale(.92) translate(7 0)">
            <path d="M40 150 Q10 110 30 70 Q45 40 70 50 Q74 30 92 28 Q108 30 108 46 L124 44 L112 56 Q114 80 100 100 Q120 90 142 60 Q140 120 110 150Z" fill="#14264a" />
            <path d="M72 50 q-10 -22 4 -34 q2 14 12 14 q4 -16 18 -16 q-2 16 -6 20z" fill="#c8302e" />
            <path d="M108 46 L126 52 L108 58Z" fill="#f2b632" />
            <circle cx="96" cy="44" r="4" fill="#fff7e6" />
            <g fill="#c8302e"><circle cx="64" cy="90" r="6" /><circle cx="80" cy="112" r="6" /><circle cx="52" cy="118" r="5" /></g>
            <g fill="#f2b632"><circle cx="86" cy="86" r="4" /><circle cx="68" cy="130" r="4" /><circle cx="100" cy="124" r="4" /></g>
            <g fill="#1d6b4f"><circle cx="40" cy="92" r="4" /><circle cx="96" cy="108" r="4" /></g>
            <path d="M60 150 V176 M86 150 V176 M50 178 H72 M76 178 H98" stroke="#14264a" stroke-width="6" stroke-linecap="round" />
          </g>
        </svg>
      </div>
    </div>
  </section>
</template>

<style scoped>
.layout {
  display: grid;
  grid-template-columns: 1fr 1.05fr;
  gap: clamp(32px, 6vw, 96px);
  align-items: center;
}
.text {
  display: grid;
  gap: 20px;
  justify-items: start;
}
.btns {
  display: flex;
  gap: 12px;
  margin-top: 8px;
}
.values {
  margin: 24px 0 0;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  border-top: 1px solid rgba(255, 255, 255, 0.14);
  padding-top: 24px;
}
dt {
  font-weight: 600;
  color: var(--blue);
}
dd {
  margin: 4px 0 0;
  font-size: 0.9rem;
  color: var(--muted);
  line-height: 1.45;
}
.photo {
  position: relative;
  aspect-ratio: 4 / 3.2;
  border-radius: 10px;
  overflow: hidden;
  display: grid;
  place-items: center;
}
.tiles {
  position: absolute;
  inset: 0;
  background: var(--azulejo);
  background-size: 96px 96px;
}
.veil {
  position: absolute;
  inset: 0;
  background: radial-gradient(circle at 50% 50%, rgba(10, 25, 60, 0) 20%, rgba(10, 25, 60, 0.55) 100%);
}
.rooster {
  position: relative;
  width: min(46%, 240px);
  filter: drop-shadow(0 20px 30px rgba(0, 0, 0, 0.35));
  animation: peck 4s ease-in-out infinite;
}
@keyframes peck {
  50% {
    transform: rotate(4deg);
  }
}
@media (max-width: 900px) {
  .layout {
    grid-template-columns: 1fr;
  }
  .values {
    grid-template-columns: 1fr;
  }
}
</style>
