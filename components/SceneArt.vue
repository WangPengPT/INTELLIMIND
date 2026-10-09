<script setup lang="ts">
defineProps<{ kind: 'games' | 'web' | 'ai' }>()

const r1 = (n: number) => Math.round(n * 10) / 10
const stars = Array.from({ length: 40 }, (_, i) => {
  const s = (k: number) => {
    const x = Math.sin((i + 1) * k) * 10000
    return x - Math.floor(x)
  }
  return { x: r1(s(12.9) * 1600), y: r1(s(78.2) * 360), r: r1(0.8 + s(3.7) * 1.8) }
})

const nodes = [
  [260, 420], [420, 250], [610, 330], [760, 170], [930, 290], [1090, 150], [1250, 270],
  [1400, 190], [1180, 420], [880, 450], [560, 470], [380, 540]
]
const links = [[0,1],[1,2],[2,3],[3,4],[4,5],[5,6],[6,7],[4,8],[2,10],[9,4],[8,9],[10,11],[0,11],[2,9],[6,8]]
</script>

<template>
  <svg viewBox="0 0 1600 700" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
    <!-- GAMES: lighthouse at dusk -->
    <g v-if="kind === 'games'">
      <defs>
        <linearGradient id="g-sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stop-color="#241a58" />
          <stop offset=".55" stop-color="#b9507c" />
          <stop offset="1" stop-color="#f7a65d" />
        </linearGradient>
        <radialGradient id="g-moon">
          <stop offset="0" stop-color="#ffe3a8" stop-opacity=".9" />
          <stop offset="1" stop-color="#ffe3a8" stop-opacity="0" />
        </radialGradient>
        <linearGradient id="g-sea" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stop-color="#7a3f78" />
          <stop offset="1" stop-color="#1a1238" />
        </linearGradient>
      </defs>
      <rect width="1600" height="700" fill="url(#g-sky)" />
      <circle v-for="(s, i) in stars" :key="i" :cx="s.x" :cy="s.y" :r="s.r" fill="#fff" class="twinkle" :style="{ animationDelay: (i % 7) * 0.4 + 's' }" />
      <circle cx="1180" cy="400" r="300" fill="url(#g-moon)" />
      <circle cx="1180" cy="400" r="86" fill="#ffe3a8" />
      <rect y="440" width="1600" height="260" fill="url(#g-sea)" />
      <path d="M0 500 q100 -14 200 0 t200 0 t200 0 t200 0 t200 0 t200 0 t200 0 t200 0" fill="none" stroke="#ffd2a0" stroke-opacity=".35" stroke-width="3" class="shimmer" />
      <ellipse cx="1180" cy="500" rx="120" ry="7" fill="#ffe3a8" opacity=".5" />
      <!-- beam -->
      <polygon points="300,250 1500,150 1500,360" fill="#ffe9a8" class="beam" />
      <!-- cliff -->
      <path d="M0 700 V470 Q120 400 260 410 Q380 420 460 520 Q520 600 640 700Z" fill="#150f30" />
      <g transform="translate(240 250)">
        <path d="M-30 170 L-18 30 H18 L30 170Z" fill="#f6efe2" />
        <path d="M-26 120 H26 L24 90 H-24Z M-21 60 H21 L19 36 H-19Z" fill="#c8302e" />
        <rect x="-24" y="12" width="48" height="20" fill="#2b2250" />
        <rect x="-14" y="14" width="28" height="16" fill="#ffe9a8" class="lamp" />
        <path d="M-30 12 L0 -16 L30 12Z" fill="#c8302e" />
      </g>
      <!-- ship silhouette -->
      <g transform="translate(760 392)"><g class="bob" fill="#120c2a">
        <path d="M0 70 H110 Q100 96 76 100 H34 Q10 96 0 70Z" />
        <rect x="52" y="0" width="3" height="70" />
        <path d="M26 6 Q54 18 82 6 V54 Q54 64 26 54Z" fill="#2b2250" />
      </g></g>
    </g>

    <!-- WEB: azulejo-blue world with floating windows -->
    <g v-else-if="kind === 'web'">
      <defs>
        <linearGradient id="w-bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stop-color="#173f86" />
          <stop offset="1" stop-color="#3b86d4" />
        </linearGradient>
        <pattern id="w-tile" width="100" height="100" patternUnits="userSpaceOnUse">
          <g fill="none" stroke="#fff" stroke-opacity=".16" stroke-width="2">
            <path d="M50 10 Q60 35 50 50 Q40 35 50 10Z M90 50 Q65 60 50 50 Q65 40 90 50Z M50 90 Q40 65 50 50 Q60 65 50 90Z M10 50 Q35 40 50 50 Q35 60 10 50Z" />
            <circle cx="50" cy="50" r="6" />
            <rect x="1" y="1" width="98" height="98" />
          </g>
        </pattern>
      </defs>
      <rect width="1600" height="700" fill="url(#w-bg)" />
      <rect width="1600" height="700" fill="url(#w-tile)" />
      <g class="float f1">
        <rect x="190" y="130" width="470" height="300" rx="16" fill="#fbf4e6" />
        <rect x="190" y="130" width="470" height="46" rx="16" fill="#e8dcc2" />
        <circle cx="220" cy="153" r="7" fill="#c8302e" /><circle cx="244" cy="153" r="7" fill="#f2b632" /><circle cx="268" cy="153" r="7" fill="#1d6b4f" />
        <rect x="220" y="206" width="170" height="170" rx="12" fill="#2f6fcf" />
        <rect x="414" y="210" width="210" height="16" rx="8" fill="#b9c6dc" />
        <rect x="414" y="246" width="190" height="16" rx="8" fill="#b9c6dc" />
        <rect x="414" y="282" width="140" height="16" rx="8" fill="#b9c6dc" />
        <rect x="414" y="330" width="110" height="40" rx="20" fill="#f2b632" />
      </g>
      <g class="float f2">
        <rect x="760" y="80" width="380" height="250" rx="16" fill="#fff" />
        <rect x="760" y="80" width="380" height="40" rx="16" fill="#e7edf7" />
        <rect x="790" y="150" width="320" height="22" rx="11" fill="#cfd9ea" />
        <rect x="790" y="190" width="250" height="22" rx="11" fill="#cfd9ea" />
        <g fill="#2f6fcf"><rect x="790" y="240" width="60" height="60" rx="10" /><rect x="866" y="262" width="60" height="38" rx="10" opacity=".7" /><rect x="942" y="226" width="60" height="74" rx="10" opacity=".5" /></g>
      </g>
      <g class="float f3">
        <rect x="1060" y="300" width="340" height="230" rx="16" fill="#fbf4e6" />
        <rect x="1060" y="300" width="340" height="38" rx="16" fill="#e8dcc2" />
        <circle cx="1230" cy="430" r="52" fill="none" stroke="#d9633b" stroke-width="14" />
        <path d="M1230 430 L1230 378 A52 52 0 0 1 1275 456Z" fill="#d9633b" />
      </g>
      <!-- rooftops -->
      <path d="M0 700 V610 H60 V580 L90 560 L120 580 V620 H200 V590 H260 V630 H340 V600 L380 575 L420 600 V640 H520 V610 H600 V650 H700 V620 H780 V590 L820 565 L860 590 V630 H960 V600 H1040 V640 H1140 V610 L1180 585 L1220 610 V650 H1320 V620 H1400 V600 H1480 V640 H1600 V700Z" fill="#0f2a5c" />
      <g transform="translate(0 618)"><g class="tramx"><rect width="92" height="40" rx="9" fill="#f2b632" /><rect x="8" y="9" width="16" height="13" rx="2" fill="#fff7e6" /><rect x="32" y="9" width="16" height="13" rx="2" fill="#fff7e6" /><rect x="56" y="9" width="16" height="13" rx="2" fill="#fff7e6" /></g></g>
    </g>

    <!-- AI: constellation over a night sea -->
    <g v-else>
      <defs>
        <linearGradient id="a-bg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stop-color="#04181a" />
          <stop offset=".7" stop-color="#0f4a45" />
          <stop offset="1" stop-color="#1d6b4f" />
        </linearGradient>
        <radialGradient id="a-glow">
          <stop offset="0" stop-color="#ffe9a0" stop-opacity=".9" />
          <stop offset="1" stop-color="#ffe9a0" stop-opacity="0" />
        </radialGradient>
      </defs>
      <rect width="1600" height="700" fill="url(#a-bg)" />
      <circle v-for="(s, i) in stars" :key="i" :cx="s.x" :cy="s.y + 80" :r="s.r * 0.7" fill="#cfeee0" opacity=".6" />
      <g stroke="#9fe6c8" stroke-opacity=".45" stroke-width="2">
        <line v-for="(l, i) in links" :key="i" :x1="nodes[l[0]][0]" :y1="nodes[l[0]][1]" :x2="nodes[l[1]][0]" :y2="nodes[l[1]][1]" />
      </g>
      <g v-for="(n, i) in nodes" :key="i">
        <circle :cx="n[0]" :cy="n[1]" r="34" fill="url(#a-glow)" class="pulse" :style="{ animationDelay: (i % 6) * 0.5 + 's' }" />
        <circle :cx="n[0]" :cy="n[1]" :r="i === 3 || i === 9 ? 11 : 7" :fill="i % 3 === 0 ? '#ffe9a0' : '#bff3dc'" />
      </g>
      <path d="M0 600 q100 -14 200 0 t200 0 t200 0 t200 0 t200 0 t200 0 t200 0 t200 0 V700 H0Z" fill="#0b3a34" opacity=".8" />
      <path d="M0 650 q100 -14 200 0 t200 0 t200 0 t200 0 t200 0 t200 0 t200 0 t200 0 V700 H0Z" fill="#06231f" />
    </g>
  </svg>
</template>

<style scoped>
svg {
  display: block;
  width: 100%;
  height: 100%;
}
.twinkle {
  animation: tw 3.4s ease-in-out infinite;
}
.beam {
  opacity: 0.16;
  animation: beam 6s ease-in-out infinite;
}
.lamp {
  animation: beam 3s ease-in-out infinite;
}
.shimmer {
  animation: sh 6s ease-in-out infinite alternate;
}
.bob {
  animation: bobs 6s ease-in-out infinite;
}
.float {
  animation: fl 7s ease-in-out infinite;
}
.f2 {
  animation-delay: -2s;
  animation-duration: 8s;
}
.f3 {
  animation-delay: -4s;
  animation-duration: 9s;
}
.tramx {
  animation: trx 18s linear infinite;
}
.pulse {
  animation: pu 4s ease-in-out infinite;
  transform-box: fill-box;
  transform-origin: center;
}
@keyframes tw {
  50% {
    opacity: 0.25;
  }
}
@keyframes beam {
  50% {
    opacity: 0.32;
  }
}
@keyframes sh {
  to {
    transform: translateX(-60px);
  }
}
@keyframes bobs {
  50% {
    transform: translateY(8px) rotate(1.5deg);
  }
}
@keyframes fl {
  50% {
    transform: translateY(-16px);
  }
}
@keyframes trx {
  from {
    transform: translateX(-120px);
  }
  to {
    transform: translateX(1700px);
  }
}
@keyframes pu {
  50% {
    transform: scale(1.5);
    opacity: 0.5;
  }
}
</style>
