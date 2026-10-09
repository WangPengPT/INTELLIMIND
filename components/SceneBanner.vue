<script setup lang="ts">
// Golden hour over the Tagus: Lisbon's hills and castle, the Padrão dos Descobrimentos,
// Belém tower, and a caravel sailing into the sun. Full-bleed, no frame — it melts into the page.

const t = useContent()
const r1 = (n: number) => Math.round(n * 10) / 10
const rand = (seed: number) => {
  const x = Math.sin(seed * 9301 + 49297) * 233280
  return Math.round((x - Math.floor(x)) * 1000) / 1000
}

const HORIZON = 575

// Soft, rolling ridge line closed at the horizon.
const ridge = (base: number, amp: number, seed: number, from = 0, to = 1600) => {
  let d = `M${from} ${HORIZON + 6}`
  for (let x = from; x <= to; x += 20) {
    const y =
      base -
      amp *
        (0.5 * Math.sin(x / 210 + seed) + 0.3 * Math.sin(x / 95 + seed * 2.3) + 0.2 * Math.sin(x / 400 + seed * 0.7) + 0.5)
    d += ` L${x} ${r1(y)}`
  }
  return d + ` L${to} ${HORIZON + 6} Z`
}
const farHills = ridge(498, 46, 1)
const midHills = ridge(522, 40, 4)
const nearHills = ridge(548, 30, 7)

// Lisbon hillside (left)
// A complete hill: it rises from the shore at the left edge to a summit (the castle) and slopes down to the river.
const smooth = (t: number) => {
  const c = Math.min(Math.max(t, 0), 1)
  return c * c * (3 - 2 * c)
}
const hillY = (x: number) =>
  x < 190 ? 575 - 187 * smooth((x + 40) / 230) : 388 + 200 * Math.pow(Math.min(x - 190, 510) / 510, 1.45)
const hillPath = (() => {
  let d = `M-60 ${HORIZON + 40} L-60 ${r1(hillY(-60))}`
  for (let x = -60; x <= 700; x += 20) d += ` L${x} ${r1(hillY(x))}`
  return d + ` C740 ${r1(hillY(700))} 760 ${HORIZON} 800 ${HORIZON + 40} Z`
})()

const wall = ['#ffe6bd', '#f8cd9c', '#f4ad8f', '#ea918a', '#fdf1d3']
const houses = (() => {
  const out: { x: number; y: number; w: number; h: number; c: string; o: number }[] = []
  for (let row = 0; row < 5; row++) {
    let x = row * 16 - 30
    let i = row * 100 + 3
    while (x < 700) {
      const w = 22 + rand(i) * 18
      const h = 22 + rand(i + 1) * 22
      out.push({
        x: r1(x),
        y: r1(hillY(x + w / 2) + row * 26 - h + 18),
        w: r1(w),
        h: r1(h),
        c: wall[Math.floor(rand(i + 2) * wall.length)],
        o: 1 - row * 0.03
      })
      x += w + 2 + rand(i + 3) * 4
      i += 4
    }
  }
  return out
})()

const castleY = r1(hillY(195)) - 44

// Sparkles on the water, widening toward the viewer
const sparkles = Array.from({ length: 34 }, (_, i) => {
  const t = i / 33
  const spread = 40 + t * 260
  return {
    x: r1(1040 + (rand(i + 11) - 0.5) * spread * 2),
    y: r1(HORIZON + 14 + t * 230),
    w: r1(10 + rand(i + 5) * 40 * (0.4 + t)),
    d: r1(rand(i + 2) * 4)
  }
})

// Floating golden motes
const motes = Array.from({ length: 22 }, (_, i) => ({
  x: r1(rand(i + 31) * 1600),
  y: r1(300 + rand(i + 41) * 360),
  r: r1(1.4 + rand(i + 51) * 2.4),
  d: r1(rand(i + 61) * 8)
}))

// Light rays from the sun
const rays = Array.from({ length: 9 }, (_, i) => {
  const a = -Math.PI + (i + 0.5) * (Math.PI / 9)
  const a2 = a + 0.06
  const R = 1500
  return `1040,520 ${r1(1040 + Math.cos(a) * R)},${r1(520 + Math.sin(a) * R)} ${r1(1040 + Math.cos(a2) * R)},${r1(520 + Math.sin(a2) * R)}`
})
</script>

<template>
  <section class="banner">
    <div class="frame">
      <svg
        viewBox="0 0 1600 850"
        preserveAspectRatio="xMidYMid slice"
        role="img"
        :aria-label="t.a11y.banner"
      >
        <defs>
          <linearGradient id="bn-sky" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stop-color="#172a55" />
            <stop offset=".3" stop-color="#3d5a9e" />
            <stop offset=".5" stop-color="#9a86b8" />
            <stop offset=".66" stop-color="#f0a9a0" />
            <stop offset=".8" stop-color="#f9cf94" />
            <stop offset="1" stop-color="#ffe3a3" />
          </linearGradient>
          <radialGradient id="bn-glow" cx="1040" cy="520" r="620" gradientUnits="userSpaceOnUse">
            <stop offset="0" stop-color="#fff4c8" stop-opacity=".95" />
            <stop offset=".25" stop-color="#ffd890" stop-opacity=".55" />
            <stop offset="1" stop-color="#ffb070" stop-opacity="0" />
          </radialGradient>
          <linearGradient id="bn-water" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stop-color="#f3c48c" />
            <stop offset=".1" stop-color="#b79bc0" />
            <stop offset=".32" stop-color="#4a66ab" />
            <stop offset="1" stop-color="#14275a" />
          </linearGradient>
          <linearGradient id="bn-lisbon" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stop-color="#8a6f78" />
            <stop offset="1" stop-color="#3a3658" />
          </linearGradient>
          <linearGradient id="bn-cloud" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stop-color="#fff" stop-opacity=".9" />
            <stop offset="1" stop-color="#ffd6c0" stop-opacity=".55" />
          </linearGradient>
          <linearGradient id="bn-sail" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0" stop-color="#f7c993" />
            <stop offset=".6" stop-color="#fff2d4" />
            <stop offset="1" stop-color="#fffaf0" />
          </linearGradient>
          <linearGradient id="bn-mist" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stop-color="#ffd9b0" stop-opacity="0" />
            <stop offset="1" stop-color="#ffd9b0" stop-opacity=".35" />
          </linearGradient>
          <g id="bn-cloudshape">
            <ellipse cx="0" cy="0" rx="150" ry="22" />
            <ellipse cx="-60" cy="-14" rx="70" ry="22" />
            <ellipse cx="50" cy="-20" rx="90" ry="26" />
          </g>
          <g id="bn-pine">
            <path d="M-5 0 Q-4 -80 -10 -150 L10 -150 Q4 -80 5 0Z" />
            <ellipse cx="0" cy="-158" rx="92" ry="26" />
            <ellipse cx="-44" cy="-146" rx="52" ry="18" />
            <ellipse cx="46" cy="-148" rx="56" ry="19" />
            <ellipse cx="4" cy="-182" rx="58" ry="20" />
          </g>
        </defs>

        <rect width="1600" height="850" fill="url(#bn-sky)" />
        <rect width="1600" height="850" fill="url(#bn-glow)" />

        <g class="rays" fill="#fff4c8">
          <polygon v-for="(p, i) in rays" :key="i" :points="p" opacity=".07" />
        </g>

        <g class="sun">
          <circle cx="1040" cy="520" r="150" fill="#fff2c0" opacity=".25" />
          <circle cx="1040" cy="520" r="110" fill="#fff2c0" opacity=".35" />
          <circle cx="1040" cy="520" r="76" fill="#fff6d2" />
        </g>

        <g class="d1">
          <g transform="translate(300 170) scale(1.3)" fill="url(#bn-cloud)" opacity=".55"><use href="#bn-cloudshape" class="cl a" /></g>
          <g transform="translate(1250 120) scale(1.1)" fill="url(#bn-cloud)" opacity=".5"><use href="#bn-cloudshape" class="cl b" /></g>
        </g>
        <g class="d2">
          <g transform="translate(760 300) scale(1.5)" fill="url(#bn-cloud)" opacity=".75"><use href="#bn-cloudshape" class="cl c" /></g>
          <g transform="translate(1420 360) scale(1.2)" fill="url(#bn-cloud)" opacity=".8"><use href="#bn-cloudshape" class="cl a" /></g>
          <g transform="translate(120 400)" fill="url(#bn-cloud)" opacity=".8"><use href="#bn-cloudshape" class="cl b" /></g>
        </g>

        <g class="d2">
          <g class="gulls" fill="none" stroke="#fff6e6" stroke-width="3" stroke-linecap="round" opacity=".9">
            <path d="M1160 250 q12 -14 24 0 q12 -14 24 0" />
            <path d="M1218 282 q9 -10 18 0 q9 -10 18 0" />
            <path d="M1120 288 q8 -9 16 0 q8 -9 16 0" />
            <path d="M1260 238 q7 -8 14 0 q7 -8 14 0" />
            <path d="M1190 318 q6 -7 12 0 q6 -7 12 0" />
          </g>
        </g>

        <g class="d2">
          <path :d="farHills" fill="#8a8cc2" opacity=".6" />
          <path :d="midHills" fill="#6a76ae" opacity=".78" />
          <path :d="nearHills" fill="#4d5d98" opacity=".9" />
        </g>

        <!-- Belém tower & Padrão dos Descobrimentos -->
        <g class="d3">
          <g transform="translate(1440 520)" fill="#f2dcc0">
            <rect x="0" y="34" width="52" height="30" />
            <rect x="8" y="2" width="36" height="34" />
            <path d="M5 2 h6 v-7 h6 v7 h6 v-7 h6 v7 h6 v-7 h6 v7 h3 v5 h-39z" />
            <path d="M18 -5 a8 8 0 0 1 16 0z" fill="#d57a58" />
          </g>
          <ellipse cx="1245" cy="574" rx="88" ry="10" fill="#4d5d98" />
          <g transform="translate(1190 0)">
            <path d="M0 574 V548 H18 V512 H36 V474 H54 V440 L92 408 V574Z" fill="#f4ddc0" />
            <path d="M54 440 L92 408 V574 H66 V470Z" fill="#d8b894" />
            <path d="M92 408 V398 M86 403 H98" stroke="#f4ddc0" stroke-width="3" />
          </g>
        </g>

        <rect y="575" width="1600" height="275" fill="url(#bn-water)" />
        <g>
          <rect
            v-for="(s, i) in sparkles"
            :key="i"
            class="sp"
            :x="s.x"
            :y="s.y"
            :width="s.w"
            height="2.6"
            rx="1.3"
            fill="#fff4cc"
            :style="{ animationDelay: s.d + 's' }"
          />
        </g>

        <!-- Lisbon -->
        <g class="d3">
          <path :d="hillPath" fill="url(#bn-lisbon)" />
          <g :transform="`translate(96 ${castleY})`" fill="#ecd0a8">
            <rect x="-6" y="46" width="202" height="60" fill="#b98f6c" />
            <rect x="0" y="12" width="190" height="34" />
            <rect v-for="n in 12" :key="n" :x="2 + (n - 1) * 16" y="6" width="9" height="8" />
            <rect x="-6" y="-14" width="30" height="60" />
            <rect x="78" y="-4" width="26" height="50" />
            <rect x="166" y="-20" width="30" height="66" />
            <rect v-for="n in 3" :key="'a' + n" :x="-6 + (n - 1) * 11" y="-21" width="8" height="8" />
            <rect v-for="n in 3" :key="'b' + n" :x="166 + (n - 1) * 11" y="-27" width="8" height="8" />
            <path d="M-6 46 H196 V52 H-6Z" fill="#c9a37c" />
          </g>
          <g v-for="(h, i) in houses" :key="i" :opacity="h.o">
            <rect :x="h.x" :y="h.y" :width="h.w" :height="h.h" :fill="h.c" />
            <polygon
              :points="`${h.x - 2},${h.y} ${h.x + h.w / 2},${h.y - 11} ${h.x + h.w + 2},${h.y}`"
              fill="#b8503a"
            />
            <rect :x="h.x + h.w / 2 - 3" :y="h.y + h.h * 0.35" width="6" height="9" rx="1" fill="#26427f" opacity=".7" />
          </g>
        </g>

        <!-- caravel, backlit -->
        <g transform="translate(790 430)">
          <g class="ship">
            <g transform="translate(0 232) scale(1 -0.45)" opacity=".28">
              <path d="M-6 112 L246 112 Q232 164 174 176 L66 176 Q14 164 -6 112Z" fill="#241c40" />
            </g>
            <line x1="90" y1="-34" x2="90" y2="124" stroke="#3d2214" stroke-width="5" />
            <line x1="172" y1="-6" x2="172" y2="124" stroke="#3d2214" stroke-width="4" />
            <path d="M90 -34 l36 8 l-36 8z" fill="#1d6b4f" />
            <path d="M172 -6 l26 6 l-26 6z" fill="#c8302e" />
            <path d="M48 -12 Q90 8 132 -12 L132 92 Q90 108 48 92Z" fill="url(#bn-sail)" />
            <path d="M143 12 Q172 26 201 12 L201 94 Q172 108 143 94Z" fill="url(#bn-sail)" />
            <g fill="#b8302e">
              <rect x="83" y="26" width="14" height="46" />
              <rect x="66" y="42" width="48" height="14" />
              <rect x="167" y="40" width="10" height="34" />
              <rect x="155" y="52" width="34" height="10" />
            </g>
            <path d="M-6 112 L246 112 Q232 164 174 176 L66 176 Q14 164 -6 112Z" fill="#5a2c1a" />
            <path d="M-2 124 L242 124" stroke="#f2b632" stroke-width="5" />
            <path d="M-6 112 L-24 96 L-6 100Z" fill="#5a2c1a" />
          </g>
        </g>
        <g class="wake" fill="none" stroke="#fff4cc" stroke-width="2.2" stroke-linecap="round" opacity=".5">
          <path d="M770 612 q30 6 60 0 t70 0 t80 0" />
          <path d="M740 626 q36 7 72 0 t84 0" opacity=".6" />
        </g>

        <g fill="#ffe7a8">
          <circle v-for="(m, i) in motes" :key="i" class="mote" :cx="m.x" :cy="m.y" :r="m.r" :style="{ animationDelay: m.d + 's' }" />
        </g>

        <rect y="500" width="1600" height="350" fill="url(#bn-mist)" />

        <!-- foreground silhouettes: umbrella pines on the shore -->
        <g class="d4" fill="#1c1d2c">
          <path d="M0 850 V716 Q130 672 270 712 T470 790 Q520 822 610 850Z" />
          <use href="#bn-pine" x="150" y="700" />
          <path d="M1600 850 V752 Q1500 712 1380 748 T1160 818 Q1100 836 1030 850Z" />
          <g transform="translate(1480 742) scale(.72)"><use href="#bn-pine" /></g>
        </g>
      </svg>
    </div>
  </section>
</template>

<style scoped>
.banner {
  position: relative;
  margin-top: -40px;
}
.frame {
  position: relative;
  width: 100%;
  aspect-ratio: 1600 / 850;
  min-height: 420px;
  max-height: 92vh;
  overflow: hidden;
  /* no box: the picture melts into the page background at every edge */
  -webkit-mask-image: linear-gradient(180deg, transparent 0, #000 18%, #000 94%, transparent 100%),
    linear-gradient(90deg, transparent 0, #000 6%, #000 94%, transparent 100%);
  -webkit-mask-composite: source-in;
  mask-image: linear-gradient(180deg, transparent 0, #000 18%, #000 94%, transparent 100%),
    linear-gradient(90deg, transparent 0, #000 6%, #000 94%, transparent 100%);
  mask-composite: intersect;
}
svg {
  display: block;
  width: 100%;
  height: 100%;
}
.sun {
  animation: pulse 9s ease-in-out infinite;
  transform-origin: 1040px 520px;
}
.rays {
  animation: rays 12s ease-in-out infinite;
  transform-origin: 1040px 520px;
}
.cl {
  animation: drift 70s linear infinite alternate;
}
.cl.b {
  animation-duration: 95s;
  animation-direction: alternate-reverse;
}
.cl.c {
  animation-duration: 85s;
}
.gulls {
  animation: bob 6s ease-in-out infinite;
}
.sp {
  animation: tw 3.2s ease-in-out infinite;
}
.ship {
  animation: sail 8s ease-in-out infinite;
  transform-origin: 120px 140px;
  transform-box: fill-box;
}
.wake {
  animation: wake 8s ease-in-out infinite;
}
.mote {
  animation: float 10s ease-in-out infinite;
  opacity: 0;
}
@keyframes pulse {
  50% {
    transform: scale(1.05);
  }
}
@keyframes rays {
  50% {
    transform: rotate(3deg);
    opacity: 0.7;
  }
}
@keyframes drift {
  to {
    transform: translateX(110px);
  }
}
@keyframes bob {
  50% {
    transform: translate(14px, -10px);
  }
}
@keyframes tw {
  0%,
  100% {
    opacity: 0.15;
  }
  50% {
    opacity: 0.85;
  }
}
@keyframes sail {
  0%,
  100% {
    transform: translateY(0) rotate(-1.2deg);
  }
  50% {
    transform: translateY(7px) rotate(1.2deg);
  }
}
@keyframes wake {
  50% {
    transform: translateX(-12px);
    opacity: 0.25;
  }
}
@keyframes float {
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  30%,
  70% {
    opacity: 0.8;
  }
  100% {
    opacity: 0;
    transform: translateY(-70px);
  }
}
@media (max-width: 700px) {
  .frame {
    aspect-ratio: 4 / 4.2;
  }
  .rays,
  .mote,
  .gulls {
    animation: none;
  }
  .mote {
    display: none;
  }
}
</style>
