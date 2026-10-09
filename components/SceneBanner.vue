<script setup lang="ts">
// Deterministic pseudo-random, rounded so SSR and client render identical markup.
const rand = (seed: number) => {
  const x = Math.sin(seed * 9301 + 49297) * 233280
  return Math.round((x - Math.floor(x)) * 1000) / 1000
}
const r1 = (n: number) => Math.round(n * 10) / 10

const wall = ['#fff4e0', '#f6d9a8', '#f2b9a0', '#e9a07e', '#fbe7b6']
const hillY = (x: number) => 600 + 150 * Math.pow(Math.min(x, 760) / 760, 1.5)

const hillPath = (() => {
  let d = 'M0 900 L0 ' + r1(hillY(0))
  for (let x = 0; x <= 760; x += 20) d += ` L${x} ${r1(hillY(x))}`
  return d + ` C820 ${r1(hillY(760))} 850 850 900 900 Z`
})()

const houses = (() => {
  const out: { x: number; y: number; w: number; h: number; c: string }[] = []
  for (let row = 0; row < 4; row++) {
    let x = row * 14 - 10
    let i = row * 100
    while (x < 720) {
      const w = 22 + rand(i) * 16
      const h = 22 + rand(i + 1) * 20
      out.push({
        x: r1(x),
        y: r1(hillY(x + w / 2) + row * 30 - h + 14),
        w: r1(w),
        h: r1(h),
        c: wall[Math.floor(rand(i + 2) * wall.length)]
      })
      x += w + 2 + rand(i + 3) * 4
      i += 4
    }
  }
  return out
})()

const wave = (y: number, amp: number) => {
  let d = `M0 ${y}`
  for (let i = 0; i < 10; i++) d += ` q100 ${-amp} 200 0 t200 0`
  return d + ' V900 H0 Z'
}
</script>

<template>
  <section class="banner wrap">
    <div class="frame">
      <svg
        viewBox="0 330 1600 570"
        preserveAspectRatio="xMidYMid slice"
        role="img"
        aria-label="A caravel sailing past a sunlit Lisbon hillside"
      >
        <defs>
          <linearGradient id="b-sky" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stop-color="#6fa8dc" />
            <stop offset=".5" stop-color="#bcd9ee" />
            <stop offset=".8" stop-color="#fbe0bd" />
            <stop offset="1" stop-color="#f9c08d" />
          </linearGradient>
          <radialGradient id="b-glow">
            <stop offset="0" stop-color="#fff3b0" stop-opacity=".95" />
            <stop offset=".4" stop-color="#ffd978" stop-opacity=".45" />
            <stop offset="1" stop-color="#ffd978" stop-opacity="0" />
          </radialGradient>
          <linearGradient id="b-sea" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stop-color="#4c9bd3" />
            <stop offset="1" stop-color="#173e7a" />
          </linearGradient>
          <linearGradient id="b-hill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stop-color="#8aa55a" />
            <stop offset="1" stop-color="#4f7a4a" />
          </linearGradient>
          <g id="b-cloud">
            <ellipse cx="60" cy="40" rx="60" ry="22" />
            <ellipse cx="110" cy="28" rx="44" ry="26" />
            <ellipse cx="30" cy="30" rx="30" ry="20" />
          </g>
        </defs>

        <rect y="330" width="1600" height="570" fill="url(#b-sky)" />

        <g class="sun">
          <circle cx="1130" cy="600" r="400" fill="url(#b-glow)" />
          <circle cx="1130" cy="600" r="90" fill="#ffe27a" />
        </g>

        <g fill="#fff" opacity=".85">
          <g transform="translate(180 400)"><use href="#b-cloud" class="cloud c1" /></g>
          <g transform="translate(780 380) scale(1.3)"><use href="#b-cloud" class="cloud c2" /></g>
          <g transform="translate(1250 470)"><use href="#b-cloud" class="cloud c3" /></g>
        </g>

        <g class="gulls" fill="none" stroke="#fff" stroke-width="3" stroke-linecap="round">
          <path d="M980 470 q10 -12 20 0 q10 -12 20 0" />
          <path d="M1040 510 q8 -9 16 0 q8 -9 16 0" />
          <path d="M940 530 q7 -8 14 0 q7 -8 14 0" />
        </g>

        <!-- Belém-style tower on the horizon -->
        <g transform="translate(1390 560)" fill="#f3e4c8">
          <rect x="0" y="40" width="70" height="40" />
          <rect x="10" y="0" width="50" height="44" />
          <path d="M8 0 h6 v-8 h6 v8 h6 v-8 h6 v8 h6 v-8 h6 v8 h6 v-8 h6 v8 h2 v6 h-60z" />
          <path d="M24 -8 a11 11 0 0 1 22 0z" fill="#d9633b" />
          <rect x="26" y="12" width="6" height="14" rx="3" fill="#b9a27a" />
          <rect x="38" y="12" width="6" height="14" rx="3" fill="#b9a27a" />
        </g>

        <rect y="630" width="1600" height="270" fill="url(#b-sea)" />
        <ellipse cx="1130" cy="680" rx="140" ry="9" fill="#ffe9a0" opacity=".55" />
        <ellipse cx="1130" cy="710" rx="90" ry="6" fill="#ffe9a0" opacity=".4" />
        <path class="w w1" :d="wave(690, 14)" fill="#2d73b3" opacity=".55" />
        <path class="w w2" :d="wave(750, 18)" fill="#245f9f" opacity=".7" />

        <!-- caravel with the cross of the Order of Christ -->
        <g transform="translate(880 500)">
          <g class="ship">
            <line x1="90" y1="-34" x2="90" y2="124" stroke="#5a3118" stroke-width="5" />
            <line x1="172" y1="-6" x2="172" y2="124" stroke="#5a3118" stroke-width="4" />
            <path d="M90 -34 l36 8 l-36 8z" fill="#1d6b4f" />
            <path d="M172 -6 l26 6 l-26 6z" fill="#c8302e" />
            <path d="M48 -12 Q90 8 132 -12 L132 92 Q90 108 48 92Z" fill="#fff7e6" />
            <path d="M143 12 Q172 26 201 12 L201 94 Q172 108 143 94Z" fill="#fff1d6" />
            <g fill="#c8302e">
              <rect x="83" y="26" width="14" height="46" />
              <rect x="66" y="42" width="48" height="14" />
              <rect x="167" y="40" width="10" height="34" />
              <rect x="155" y="52" width="34" height="10" />
            </g>
            <path d="M-6 112 L246 112 Q232 164 174 176 L66 176 Q14 164 -6 112Z" fill="#7a3f23" />
            <path d="M-2 124 L242 124" stroke="#f2b632" stroke-width="5" />
            <path d="M-6 112 L-24 96 L-6 100Z" fill="#7a3f23" />
            <circle cx="60" cy="146" r="6" fill="#f3d9a2" />
            <circle cx="100" cy="146" r="6" fill="#f3d9a2" />
            <circle cx="140" cy="146" r="6" fill="#f3d9a2" />
          </g>
        </g>

        <path :d="hillPath" fill="url(#b-hill)" />
        <g v-for="(h, i) in houses" :key="i">
          <rect :x="h.x" :y="h.y" :width="h.w" :height="h.h" :fill="h.c" />
          <polygon
            :points="`${h.x - 2},${h.y} ${h.x + h.w / 2},${h.y - 11} ${h.x + h.w + 2},${h.y}`"
            fill="#c9573a"
          />
          <rect :x="h.x + h.w / 2 - 3" :y="h.y + h.h * 0.35" width="6" height="9" rx="1" fill="#1f4e9c" opacity=".75" />
        </g>

        <!-- yellow Lisbon tram -->
        <g transform="translate(120 740)">
          <g class="tram">
            <rect width="86" height="40" rx="9" fill="#f2b632" />
            <rect x="8" y="9" width="16" height="14" rx="2" fill="#fff7e6" />
            <rect x="30" y="9" width="16" height="14" rx="2" fill="#fff7e6" />
            <rect x="52" y="9" width="16" height="14" rx="2" fill="#fff7e6" />
            <rect y="28" width="86" height="4" fill="#fff7e6" opacity=".7" />
            <circle cx="20" cy="42" r="6" fill="#14264a" />
            <circle cx="66" cy="42" r="6" fill="#14264a" />
          </g>
        </g>
      </svg>
    </div>
  </section>
</template>

<style scoped>
.banner {
  width: min(1480px, 100% - 48px);
}
.frame {
  border-radius: 14px;
  overflow: hidden;
  aspect-ratio: 1600 / 570;
  min-height: 300px;
  box-shadow: 0 30px 80px rgba(0, 0, 0, 0.45);
}
svg {
  display: block;
  width: 100%;
  height: 100%;
}
.sun {
  animation: pulse 8s ease-in-out infinite;
  transform-origin: 1130px 600px;
}
.cloud {
  animation: drift 60s linear infinite alternate;
}
.c2 {
  animation-duration: 90s;
}
.c3 {
  animation-duration: 75s;
}
.gulls {
  animation: bob 5s ease-in-out infinite;
}
.w {
  animation: flow 18s linear infinite;
}
.w2 {
  animation-duration: 11s;
  animation-direction: reverse;
}
.ship {
  animation: sail 7s ease-in-out infinite;
  transform-origin: 120px 140px;
  transform-box: fill-box;
}
.tram {
  animation: tram 14s ease-in-out infinite alternate;
}
@keyframes pulse {
  50% {
    transform: scale(1.04);
  }
}
@keyframes drift {
  to {
    transform: translateX(120px);
  }
}
@keyframes bob {
  50% {
    transform: translate(14px, -10px);
  }
}
@keyframes flow {
  to {
    transform: translateX(-400px);
  }
}
@keyframes sail {
  0%,
  100% {
    transform: translateY(0) rotate(-1.2deg);
  }
  50% {
    transform: translateY(8px) rotate(1.2deg);
  }
}
@keyframes tram {
  to {
    transform: translateX(90px);
  }
}
</style>
