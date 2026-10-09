<script setup lang="ts">
withDefaults(defineProps<{ bg?: string }>(), { bg: '#1c1c1c' })

// Seamless wave: one period is 720 wide, four periods fill the strip and it slides by half.
const line = (y: number, amp: number) => `M0 ${y} ` + `c180 ${-amp} 540 ${amp} 720 0 `.repeat(4).trim()
const area = (y: number, amp: number) => line(y, amp) + ' V120 H0 Z'

const rand = (n: number) => {
  const x = Math.sin(n * 12.9898) * 43758.5453
  return Math.round((x - Math.floor(x)) * 100) / 100
}

// Lisbon skyline on the far shore: rooftops, Estrela-style dome, Belém tower, and a suspension bridge.
const roofs = (() => {
  const out: { x: number; w: number; h: number }[] = []
  let x = 0
  let i = 1
  while (x < 1600) {
    const w = Math.round(18 + rand(i) * 26)
    const h = Math.round(14 + rand(i + 1) * 34)
    out.push({ x, w, h })
    x += w + 2
    i += 2
  }
  return out
})()
</script>

<template>
  <div class="wave" aria-hidden="true">
    <!-- far shore -->
    <svg class="skyline" viewBox="0 -30 1600 150" preserveAspectRatio="xMidYMax slice">
      <g fill="#27385f" transform="translate(0 -44)">
        <rect v-for="(r, i) in roofs" :key="i" :x="r.x" :y="104 - r.h" :width="r.w" :height="r.h + 20" />
        <!-- dome -->
        <path d="M980 104 V60 a26 26 0 0 1 52 0 V104Z" />
        <rect x="1004" y="26" width="4" height="12" />
        <!-- Belém tower -->
        <rect x="1330" y="58" width="46" height="60" />
        <path d="M1326 58 h8 v-8 h8 v8 h8 v-8 h8 v8 h8 v-8 h8 v8 h4 v6 h-52z" />
        <path d="M1342 50 a11 11 0 0 1 22 0z" />
        <!-- 25 de Abril bridge -->
        <rect x="140" y="30" width="7" height="90" />
        <rect x="360" y="30" width="7" height="90" />
        <rect x="40" y="76" width="480" height="5" />
      </g>
      <g fill="none" stroke="#27385f" stroke-width="2.2" transform="translate(0 -44)">
        <path d="M40 76 Q143 24 143 32 Q250 80 363 32 Q363 24 520 76" />
        <path d="M143 32 L120 76 M143 32 L168 76 M363 32 L340 76 M363 32 L388 76" />
      </g>
    </svg>

    <!-- evening glow on the horizon -->
    <div class="glow" />

    <!-- gulls -->
    <svg class="gulls" viewBox="0 0 120 40">
      <g fill="none" stroke="#e9eef7" stroke-width="2" stroke-linecap="round" opacity=".75">
        <path d="M10 22 q6 -8 12 0 q6 -8 12 0" />
        <path d="M60 10 q5 -7 10 0 q5 -7 10 0" />
        <path d="M86 28 q4 -6 8 0 q4 -6 8 0" />
      </g>
    </svg>

    <!-- back wave + foam -->
    <svg class="layer l1" viewBox="0 0 2880 120" preserveAspectRatio="none">
      <path :d="area(70, 30)" fill="#4a7fc0" />
      <path :d="line(70, 30)" fill="none" stroke="#fff" stroke-opacity=".55" stroke-width="3" />
    </svg>

    <!-- caravel -->
    <div class="ship">
      <svg viewBox="0 0 96 90">
        <g class="rock">
          <line x1="44" y1="6" x2="44" y2="62" stroke="#5a3118" stroke-width="2.5" />
          <line x1="72" y1="20" x2="72" y2="62" stroke="#5a3118" stroke-width="2" />
          <path d="M22 10 Q44 22 66 10 V50 Q44 58 22 50Z" fill="#fff7e6" />
          <path d="M60 24 Q72 30 84 24 V50 Q72 56 60 50Z" fill="#fff1d6" />
          <path d="M41 24 h6 v22 h-6z M33 31 h22 v6 h-22z" fill="#c8302e" />
          <path d="M44 6 l12 3 l-12 3z" fill="#1d6b4f" />
          <path d="M6 58 H92 Q86 78 66 82 H32 Q12 78 6 58Z" fill="#7a3f23" />
          <path d="M8 64 H90" stroke="#f2b632" stroke-width="2.5" />
        </g>
      </svg>
    </div>

    <!-- middle wave + foam -->
    <svg class="layer l2" viewBox="0 0 2880 120" preserveAspectRatio="none">
      <path :d="area(88, 34)" fill="#2f568f" />
      <path :d="line(88, 34)" fill="none" stroke="#fff" stroke-opacity=".32" stroke-width="3" />
    </svg>

    <!-- front wave = next section background -->
    <svg class="layer l3" viewBox="0 0 2880 120" preserveAspectRatio="none">
      <path :d="area(104, 26)" :fill="bg" />
    </svg>
  </div>
</template>

<style scoped>
.wave {
  position: absolute;
  left: 0;
  right: 0;
  top: -1px;
  height: var(--wave-h);
  transform: translateY(-100%);
  overflow: hidden;
  pointer-events: none;
}
.skyline {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  opacity: 1;
}
.glow {
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, transparent 20%, rgba(242, 166, 93, 0.26) 75%, transparent 100%);
}
.gulls {
  position: absolute;
  top: 6%;
  left: 62%;
  width: clamp(60px, 7vw, 110px);
  animation: glide 9s ease-in-out infinite;
}
.layer {
  position: absolute;
  left: 0;
  bottom: -1px;
  width: 200%;
  height: 100%;
}
.l1 {
  animation: slide 26s linear infinite;
}
.l2 {
  animation: slide 18s linear infinite reverse;
}
.l3 {
  animation: slide 12s linear infinite;
}
.ship {
  position: absolute;
  bottom: 33%;
  left: 0;
  width: clamp(48px, 5.5vw, 84px);
  animation: cruise 70s linear infinite;
}
.ship svg {
  display: block;
  width: 100%;
}
.rock {
  animation: rock 5s ease-in-out infinite;
  transform-origin: 50% 90%;
  transform-box: fill-box;
}
@keyframes slide {
  to {
    transform: translateX(-50%);
  }
}
@keyframes cruise {
  from {
    left: -8%;
  }
  to {
    left: 104%;
  }
}
@keyframes rock {
  50% {
    transform: rotate(3deg) translateY(2px);
  }
}
@keyframes glide {
  50% {
    transform: translate(18px, -8px);
  }
}
</style>
