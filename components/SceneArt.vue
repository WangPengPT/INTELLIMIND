<script setup lang="ts">
defineProps<{ kind: 'games' | 'web' | 'ai' }>()

const r1 = (n: number) => Math.round(n * 10) / 10
const rand = (seed: number) => {
  const x = Math.sin(seed * 9301 + 49297) * 233280
  return Math.round((x - Math.floor(x)) * 1000) / 1000
}

const stars = Array.from({ length: 70 }, (_, i) => ({
  x: r1(rand(i + 1) * 1600),
  y: r1(rand(i + 101) * 560),
  r: r1(0.8 + rand(i + 201) * 2),
  d: r1(rand(i + 301) * 5)
}))

// ridge line closed at the given base
const ridge = (base: number, amp: number, seed: number, bottom: number) => {
  let d = `M0 ${bottom}`
  for (let x = 0; x <= 1600; x += 20) {
    const y =
      base -
      amp * (0.5 * Math.sin(x / 230 + seed) + 0.3 * Math.sin(x / 90 + seed * 2.1) + 0.2 * Math.sin(x / 420 + seed) + 0.5)
    d += ` L${x} ${r1(y)}`
  }
  return d + ` L1600 ${bottom} Z`
}
const gMount = ridge(640, 60, 2, 700)

// moon-road sparkles
const road = Array.from({ length: 26 }, (_, i) => {
  const t = i / 25
  return {
    x: r1(1130 + (rand(i + 7) - 0.5) * (30 + t * 220)),
    y: r1(690 + t * 270),
    w: r1(14 + rand(i + 9) * 50 * (0.4 + t)),
    d: r1(rand(i + 4) * 4)
  }
})

// sky lanterns
const lanterns = Array.from({ length: 9 }, (_, i) => ({
  x: r1(500 + rand(i + 21) * 900),
  y: r1(520 + rand(i + 31) * 300),
  s: r1(0.7 + rand(i + 41) * 0.8),
  d: r1(rand(i + 51) * 12)
}))

// AI: a faint neural network behind the prompt
const net = Array.from({ length: 34 }, (_, i) => ({
  x: r1(60 + rand(i + 201) * 1480),
  y: r1(40 + rand(i + 251) * 920),
  r: r1(2 + rand(i + 301) * 3.2)
}))
const netLinks = (() => {
  const out: { x1: number; y1: number; x2: number; y2: number }[] = []
  for (let i = 0; i < net.length; i++)
    for (let j = i + 1; j < net.length; j++) {
      const d = Math.hypot(net[i].x - net[j].x, net[i].y - net[j].y)
      if (d < 250) out.push({ x1: net[i].x, y1: net[i].y, x2: net[j].x, y2: net[j].y })
    }
  return out
})()

// AI: nodes inside the head — the "mind"
const brain: [number, number][] = [
  [190, 170], [250, 120], [320, 130], [380, 180], [150, 240], [215, 225], [285, 205], [350, 245],
  [410, 260], [175, 310], [240, 295], [305, 290], [370, 320], [225, 365], [295, 370], [345, 395]
]
const brainLinks = (() => {
  const out: [number, number][] = []
  for (let i = 0; i < brain.length; i++)
    for (let j = i + 1; j < brain.length; j++)
      if (Math.hypot(brain[i][0] - brain[j][0], brain[i][1] - brain[j][1]) < 88) out.push([i, j])
  return out
})()

// Web: floating azulejo tiles
const tiles = [
  { x: 180, y: 190, s: 1.15, r: -12, o: 1, c: 'a' },
  { x: 430, y: 120, s: 0.8, r: 14, o: 0.9, c: 'b' },
  { x: 640, y: 300, s: 1.4, r: 6, o: 1, c: 'c' },
  { x: 930, y: 150, s: 0.95, r: -18, o: 0.95, c: 'a' },
  { x: 1380, y: 220, s: 1.2, r: 16, o: 1, c: 'b' },
  { x: 1190, y: 430, s: 0.75, r: -8, o: 0.85, c: 'c' },
  { x: 90, y: 470, s: 0.7, r: 20, o: 0.8, c: 'b' },
  { x: 880, y: 470, s: 0.6, r: -22, o: 0.75, c: 'a' }
]
const roofs = (() => {
  const out: { x: number; w: number; h: number }[] = []
  let x = -10
  let i = 5
  while (x < 1620) {
    const w = Math.round(46 + rand(i) * 64)
    const h = Math.round(70 + rand(i + 1) * 170)
    out.push({ x, w, h })
    x += w + 4
    i += 2
  }
  return out
})()
const winds = roofs.flatMap((r, i) => {
  const out: { x: number; y: number; on: boolean }[] = []
  for (let cx = r.x + 10; cx < r.x + r.w - 14; cx += 20)
    for (let cy = 1000 - r.h + 26; cy < 970; cy += 30)
      out.push({ x: cx, y: cy, on: rand(i * 31 + cx + cy) > 0.62 })
  return out
})
</script>

<template>
  <svg viewBox="0 0 1600 1000" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
    <defs>
      <filter id="sa-blur" x="-30%" y="-30%" width="160%" height="160%"><feGaussianBlur stdDeviation="34" /></filter>
      <filter id="sa-soft" x="-30%" y="-30%" width="160%" height="160%"><feGaussianBlur stdDeviation="8" /></filter>
    </defs>

    <!-- ================= GAMES: Saudade, moonlit lighthouse ================= -->
    <g v-if="kind === 'games'">
      <defs>
        <linearGradient id="g-sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stop-color="#0e1640" />
          <stop offset=".42" stop-color="#43296f" />
          <stop offset=".68" stop-color="#c0527c" />
          <stop offset="1" stop-color="#ffb46e" />
        </linearGradient>
        <radialGradient id="g-halo" cx="1130" cy="330" r="460" gradientUnits="userSpaceOnUse">
          <stop offset="0" stop-color="#ffe9c0" stop-opacity=".8" />
          <stop offset=".4" stop-color="#ffb1a0" stop-opacity=".25" />
          <stop offset="1" stop-color="#ffb1a0" stop-opacity="0" />
        </radialGradient>
        <linearGradient id="g-sea" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stop-color="#b86a9a" />
          <stop offset=".25" stop-color="#5b3b82" />
          <stop offset="1" stop-color="#150f34" />
        </linearGradient>
        <linearGradient id="g-beam" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stop-color="#fff0b8" stop-opacity=".6" />
          <stop offset="1" stop-color="#fff0b8" stop-opacity="0" />
        </linearGradient>
      </defs>
      <rect width="1600" height="1000" fill="url(#g-sky)" />
      <g fill="#fff">
        <circle v-for="(s, i) in stars" :key="i" class="tw" :cx="s.x" :cy="s.y" :r="s.r" :style="{ animationDelay: s.d + 's' }" />
      </g>
      <!-- aurora ribbons -->
      <g filter="url(#sa-blur)" class="aur">
        <path d="M-100 230 C300 80 600 330 1000 160 S1500 200 1700 120 V260 C1400 330 1000 260 640 400 S100 330 -100 400Z" fill="#59e0c4" opacity=".22" />
        <path d="M-100 330 C300 260 700 420 1100 280 S1500 340 1700 280 V380 C1400 440 1000 400 600 500 S100 440 -100 500Z" fill="#ff7aa8" opacity=".18" />
      </g>
      <circle cx="1130" cy="330" r="460" fill="url(#g-halo)" />
      <circle cx="1130" cy="330" r="118" fill="#fff0cf" />
      <g fill="#e8cfae" opacity=".5"><circle cx="1100" cy="300" r="22" /><circle cx="1160" cy="360" r="15" /><circle cx="1085" cy="365" r="10" /></g>

      <!-- lanterns drifting up -->
      <g>
        <g v-for="(l, i) in lanterns" :key="i" :transform="`translate(${l.x} ${l.y}) scale(${l.s})`">
          <g class="lan" :style="{ animationDelay: l.d * -1 + 's' }">
            <ellipse rx="22" ry="30" fill="#ffd27a" opacity=".95" />
            <ellipse rx="40" ry="50" fill="#ffd27a" opacity=".18" />
            <rect x="-9" y="26" width="18" height="6" rx="2" fill="#a24a2a" />
          </g>
        </g>
      </g>

      <path :d="gMount" fill="#3a2564" opacity=".8" />
      <rect y="640" width="1600" height="360" fill="url(#g-sea)" />
      <!-- moon road -->
      <ellipse cx="1130" cy="720" rx="150" ry="16" fill="#ffe6bb" opacity=".45" filter="url(#sa-soft)" />
      <g fill="#ffeccd">
        <rect v-for="(s, i) in road" :key="i" class="sp" :x="s.x" :y="s.y" :width="s.w" height="3.4" rx="1.7" :style="{ animationDelay: s.d + 's' }" />
      </g>

      <!-- far caravel, moonlit -->
      <g transform="translate(720 600)">
        <g class="bob">
          <path d="M0 52 H120 Q108 78 84 82 H36 Q10 78 0 52Z" fill="#1a1138" />
          <rect x="58" y="-8" width="3" height="60" fill="#1a1138" />
          <path d="M30 0 Q60 14 90 0 V40 Q60 50 30 40Z" fill="#ffe6c4" opacity=".85" />
          <path d="M54 12 h12 v20 h-12z M46 18 h28 v8 h-28z" fill="#c8302e" opacity=".8" transform="scale(.5) translate(60 14)" />
        </g>
      </g>

      <!-- cliff + lighthouse -->
      <path d="M0 1000 V560 Q90 500 220 520 Q330 536 400 640 Q470 760 620 880 Q700 940 760 1000Z" fill="#150e30" />
      <path d="M0 1000 V680 Q120 640 260 700 Q380 760 520 880 Q600 950 640 1000Z" fill="#0f0a24" />
      <g fill="#150e30">
        <path d="M60 540 q-4 -26 -10 -30 q8 8 12 26z M90 530 q0 -30 -6 -38 q10 10 10 36z M130 526 q4 -22 12 -26 q-6 10 -6 28z M360 590 q-4 -22 -10 -28 q8 6 12 24z" />
      </g>
      <g transform="translate(290 190)">
        <polygon points="40,70 1300,-60 1300,200" fill="url(#g-beam)" class="beam" />
        <path d="M-52 340 L-30 60 H30 L52 340Z" fill="#f6efe2" />
        <path d="M-47 270 H47 L44 220 H-44Z M-38 160 H38 L34 112 H-34Z" fill="#c8302e" />
        <rect x="-36" y="26" width="72" height="38" fill="#2a2150" />
        <rect x="-24" y="30" width="48" height="30" fill="#ffe9a8" class="lamp" />
        <path d="M-46 28 L0 -26 L46 28Z" fill="#c8302e" />
        <rect x="-2" y="-46" width="4" height="22" fill="#c8302e" />
        <circle cx="0" cy="45" r="70" fill="#ffe9a8" opacity=".25" class="lamp" />
      </g>
      <!-- keeper -->
      <g transform="translate(420 626)" fill="#0c0820">
        <circle cx="0" cy="-30" r="7" /><path d="M-8 -22 H8 L12 12 H-12Z" />
        <circle cx="22" cy="-8" r="5" fill="#ffd27a" class="lamp" /><path d="M10 -16 L22 -10" stroke="#0c0820" stroke-width="3" />
      </g>
      <!-- surf -->
      <g fill="none" stroke="#fff" stroke-opacity=".5" stroke-width="3" stroke-linecap="round" class="surf">
        <path d="M680 900 q40 -14 80 0 t90 0 t100 0" />
        <path d="M820 950 q50 -16 100 0 t110 0 t120 0" opacity=".6" />
        <path d="M1000 860 q40 -12 80 0 t90 0" opacity=".4" />
      </g>
    </g>

    <!-- ================= WEB: azulejo tiles over a Lisbon night ================= -->
    <g v-else-if="kind === 'web'">
      <defs>
        <linearGradient id="w-sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stop-color="#14205c" />
          <stop offset=".5" stop-color="#2d62b8" />
          <stop offset=".85" stop-color="#e9a58e" />
          <stop offset="1" stop-color="#ffcf94" />
        </linearGradient>
        <pattern id="w-tile" width="110" height="110" patternUnits="userSpaceOnUse">
          <rect width="110" height="110" fill="#1d4f9f" />
          <g fill="#f4f1e8">
            <path d="M55 12 Q64 36 55 52 Q46 36 55 12Z M98 55 Q74 64 58 55 Q74 46 98 55Z M55 98 Q46 74 55 58 Q64 74 55 98Z M12 55 Q36 46 52 55 Q36 64 12 55Z" />
          </g>
          <circle cx="55" cy="55" r="6" fill="#f2b632" />
          <path d="M0 0 H18 A18 18 0 0 1 0 18Z M110 0 V18 A18 18 0 0 1 92 0Z M0 110 V92 A18 18 0 0 1 18 110Z M110 110 H92 A18 18 0 0 1 110 92Z" fill="#f4f1e8" opacity=".85" />
        </pattern>
        <radialGradient id="w-glow" cx="1180" cy="360" r="520" gradientUnits="userSpaceOnUse">
          <stop offset="0" stop-color="#9ec5ff" stop-opacity=".6" />
          <stop offset="1" stop-color="#9ec5ff" stop-opacity="0" />
        </radialGradient>
        <g id="w-tileshape">
          <rect x="-60" y="-60" width="120" height="120" rx="14" fill="#fbf4e6" />
          <rect x="-54" y="-54" width="108" height="108" rx="10" fill="#1d4f9f" />
          <g fill="#f4f1e8">
            <path d="M0 -42 Q9 -20 0 -6 Q-9 -20 0 -42Z M42 0 Q20 9 6 0 Q20 -9 42 0Z M0 42 Q-9 20 0 6 Q9 20 0 42Z M-42 0 Q-20 -9 -6 0 Q-20 9 -42 0Z" />
          </g>
          <circle r="6" fill="#f2b632" />
        </g>
      </defs>
      <rect width="1600" height="1000" fill="url(#w-sky)" />
      <circle cx="1180" cy="360" r="520" fill="url(#w-glow)" />
      <!-- azulejo moon -->
      <g class="moon">
        <circle cx="1180" cy="360" r="236" fill="#f2b632" opacity=".9" />
        <circle cx="1180" cy="360" r="218" fill="url(#w-tile)" />
        <circle cx="1180" cy="360" r="218" fill="none" stroke="#fbf4e6" stroke-width="6" />
      </g>
      <g fill="#fff"><circle v-for="(s, i) in stars.slice(0, 30)" :key="i" class="tw" :cx="s.x" :cy="s.y * 0.7" :r="s.r * 0.8" :style="{ animationDelay: s.d + 's' }" /></g>

      <!-- threads between tiles -->
      <g fill="none" stroke="#fbf4e6" stroke-opacity=".4" stroke-width="2.5" stroke-dasharray="3 10" stroke-linecap="round" class="thr">
        <path d="M180 190 C300 80 360 170 430 120 S560 260 640 300" />
        <path d="M640 300 C760 330 840 120 930 150 S1060 380 1190 430" />
        <path d="M930 150 C1100 80 1260 120 1380 220" />
        <path d="M90 470 C300 520 560 420 640 300" />
        <path d="M880 470 C1000 520 1100 430 1190 430" />
      </g>
      <!-- floating tiles -->
      <g v-for="(t, i) in tiles" :key="i" :transform="`translate(${t.x} ${t.y}) rotate(${t.r}) scale(${t.s})`" :opacity="t.o">
        <g class="fl" :style="{ animationDelay: i * -1.3 + 's', animationDuration: 6 + (i % 3) * 1.6 + 's' }">
          <use href="#w-tileshape" />
        </g>
      </g>
      <!-- glass panels: the "web" -->
      <g class="fl" style="animation-duration: 9s; animation-delay: -3s">
        <rect x="360" y="400" width="360" height="226" rx="22" fill="#fff" fill-opacity=".14" stroke="#fff" stroke-opacity=".5" stroke-width="2" />
        <rect x="360" y="400" width="360" height="40" rx="22" fill="#fff" fill-opacity=".18" />
        <circle cx="390" cy="420" r="6" fill="#ffd27a" /><circle cx="410" cy="420" r="6" fill="#fff" fill-opacity=".6" /><circle cx="430" cy="420" r="6" fill="#fff" fill-opacity=".6" />
        <rect x="388" y="466" width="150" height="14" rx="7" fill="#fff" fill-opacity=".55" />
        <rect x="388" y="492" width="220" height="14" rx="7" fill="#fff" fill-opacity=".35" />
        <rect x="388" y="518" width="110" height="14" rx="7" fill="#fff" fill-opacity=".35" />
        <rect x="388" y="556" width="96" height="36" rx="18" fill="#f2b632" />
      </g>
      <g class="fl" style="animation-duration: 10s; animation-delay: -6s">
        <rect x="1000" y="520" width="300" height="190" rx="22" fill="#fff" fill-opacity=".12" stroke="#fff" stroke-opacity=".45" stroke-width="2" />
        <circle cx="1080" cy="615" r="46" fill="none" stroke="#fbf4e6" stroke-opacity=".8" stroke-width="12" />
        <path d="M1080 615 L1080 569 A46 46 0 0 1 1120 638Z" fill="#f2b632" />
        <rect x="1150" y="580" width="110" height="12" rx="6" fill="#fff" fill-opacity=".5" />
        <rect x="1150" y="606" width="80" height="12" rx="6" fill="#fff" fill-opacity=".35" />
        <rect x="1150" y="632" width="100" height="12" rx="6" fill="#fff" fill-opacity=".35" />
      </g>

      <!-- rooftops -->
      <g fill="#0e1744">
        <rect v-for="(r, i) in roofs" :key="i" :x="r.x" :y="1000 - r.h" :width="r.w" :height="r.h + 4" />
        <polygon v-for="(r, i) in roofs" :key="'p' + i" :points="`${r.x - 4},${1000 - r.h} ${r.x + r.w / 2},${1000 - r.h - 26} ${r.x + r.w + 4},${1000 - r.h}`" />
      </g>
      <g>
        <rect v-for="(w, i) in winds" :key="i" :x="w.x" :y="w.y" width="9" height="14" rx="1.5" :fill="w.on ? '#ffd27a' : '#1c2a66'" :opacity="w.on ? 0.95 : 0.7" />
      </g>
      <!-- tram on its wire -->
      <path d="M0 880 L1600 880" stroke="#0e1744" stroke-width="3" />
      <g transform="translate(0 836)"><g class="tram">
        <path d="M40 -22 L40 8" stroke="#0e1744" stroke-width="3" />
        <path d="M20 -24 H60" stroke="#0e1744" stroke-width="3" />
        <rect y="8" width="140" height="56" rx="12" fill="#f2b632" />
        <rect x="12" y="18" width="24" height="22" rx="3" fill="#fff7e6" /><rect x="46" y="18" width="24" height="22" rx="3" fill="#fff7e6" /><rect x="80" y="18" width="24" height="22" rx="3" fill="#fff7e6" /><rect x="114" y="18" width="16" height="22" rx="3" fill="#fff7e6" />
        <rect y="46" width="140" height="5" fill="#fff7e6" opacity=".7" />
        <circle cx="30" cy="68" r="8" fill="#1a1a1a" /><circle cx="110" cy="68" r="8" fill="#1a1a1a" />
      </g></g>
    </g>

    <!-- ================= AI: a mind that thinks and helps ================= -->
    <g v-else>
      <defs>
        <linearGradient id="a-paper" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stop-color="#f8f0e0" />
          <stop offset="1" stop-color="#efdfc2" />
        </linearGradient>
        <linearGradient id="a-head" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stop-color="#2f6fcf" />
          <stop offset="1" stop-color="#173d86" />
        </linearGradient>
        <radialGradient id="a-glow" cx="250" cy="250" r="220" gradientUnits="userSpaceOnUse">
          <stop offset="0" stop-color="#ffe9a0" stop-opacity=".85" />
          <stop offset="1" stop-color="#ffe9a0" stop-opacity="0" />
        </radialGradient>
        <pattern id="a-tile" width="100" height="100" patternUnits="userSpaceOnUse">
          <rect width="100" height="100" fill="#1d4f9f" />
          <path d="M50 10 Q58 32 50 46 Q42 32 50 10Z M90 50 Q68 58 54 50 Q68 42 90 50Z M50 90 Q42 68 50 54 Q58 68 50 90Z M10 50 Q32 42 46 50 Q32 58 10 50Z" fill="#f4f1e8" />
          <circle cx="50" cy="50" r="6" fill="#f2b632" />
        </pattern>
        <filter id="a-chip" x="-30%" y="-30%" width="160%" height="170%">
          <feDropShadow dx="0" dy="16" stdDeviation="14" flood-color="#5a3a1a" flood-opacity=".25" />
        </filter>
      </defs>
      <rect width="1600" height="1000" fill="url(#a-paper)" />
      <circle cx="1540" cy="70" r="210" fill="url(#a-tile)" opacity=".16" />
      <circle cx="40" cy="950" r="190" fill="url(#a-tile)" opacity=".12" />

      <!-- faint network across the page -->
      <g stroke="#1d4f9f" stroke-opacity=".12" stroke-width="2">
        <line v-for="(l, i) in netLinks" :key="i" :x1="l.x1" :y1="l.y1" :x2="l.x2" :y2="l.y2" />
      </g>
      <g fill="#1d4f9f"><circle v-for="(n, i) in net" :key="i" :cx="n.x" :cy="n.y" :r="n.r" opacity=".22" /></g>

      <!-- thought streams from the mind to the tools -->
      <g fill="none" stroke="#1d4f9f" stroke-width="4" stroke-linecap="round" stroke-dasharray="2 14" class="thr" opacity=".75">
        <path d="M470 400 C700 380 840 300 970 300" />
        <path d="M470 400 C760 330 1020 230 1200 240" />
        <path d="M470 400 C760 470 1060 480 1240 500" />
        <path d="M470 400 C640 560 840 640 990 650" />
      </g>

      <!-- the head -->
      <g transform="translate(120 170) scale(1.25)">
        <circle cx="250" cy="250" r="260" fill="url(#a-glow)" />
        <path d="M130 600 C110 520 60 440 70 330 C80 200 160 80 290 70 C390 62 450 130 450 220 C450 250 462 275 478 305 C486 320 476 332 460 334 C466 346 466 360 456 368 C462 380 456 394 444 398 C448 420 440 446 410 458 C392 466 386 486 384 520 L372 600 Z" fill="url(#a-head)" />
        <!-- ear -->
        <path d="M168 300 q-26 4 -20 34 q8 22 30 18" fill="none" stroke="#8fb4f2" stroke-width="5" stroke-linecap="round" opacity=".7" />
        <!-- the network inside -->
        <g stroke="#ffe9a0" stroke-opacity=".6" stroke-width="3">
          <line v-for="(l, i) in brainLinks" :key="i" :x1="brain[l[0]][0]" :y1="brain[l[0]][1]" :x2="brain[l[1]][0]" :y2="brain[l[1]][1]" />
        </g>
        <g fill="#fff">
          <circle v-for="(n, i) in brain" :key="i" :cx="n[0]" :cy="n[1]" :r="i % 5 === 0 ? 11 : 8" />
        </g>
        <g fill="#f2b632">
          <circle v-for="i in [2, 7, 11, 14]" :key="'g' + i" class="pu" :cx="brain[i][0]" :cy="brain[i][1]" r="13" :style="{ animationDelay: i * -0.3 + 's' }" />
        </g>
        <path d="M330 220 l9 24 24 9 -24 9 -9 24 -9 -24 -24 -9 24 -9z" fill="#fff" opacity=".0" />
      </g>

      <!-- tools it can use -->
      <g filter="url(#a-chip)">
        <!-- chat -->
        <g class="fl" style="animation-duration: 8s">
          <circle cx="1040" cy="300" r="86" fill="#fff" />
          <path d="M1000 274 h80 a14 14 0 0 1 14 14 v34 a14 14 0 0 1 -14 14 h-36 l-22 20 v-20 h-22 a14 14 0 0 1 -14 -14 v-34 a14 14 0 0 1 14 -14z" fill="#2f6fcf" />
          <g fill="#fff"><circle cx="1020" cy="305" r="6" /><circle cx="1040" cy="305" r="6" /><circle cx="1060" cy="305" r="6" /></g>
        </g>
        <!-- code -->
        <g class="fl" style="animation-duration: 9s; animation-delay: -3s">
          <circle cx="1290" cy="240" r="86" fill="#fff" />
          <circle cx="1290" cy="240" r="58" fill="#1d6b4f" />
          <text x="1290" y="254" font-size="40" font-weight="700" fill="#fff" text-anchor="middle" font-family="'Courier New', ui-monospace, monospace">&lt;/&gt;</text>
        </g>
        <!-- image -->
        <g class="fl" style="animation-duration: 7.5s; animation-delay: -2s">
          <circle cx="1330" cy="500" r="86" fill="#fff" />
          <rect x="1288" y="466" width="84" height="68" rx="12" fill="#ffe0c2" />
          <circle cx="1348" cy="487" r="10" fill="#d9633b" />
          <path d="M1288 526 l24 -28 18 18 14 -14 28 24 v10 a12 12 0 0 1 -12 12 h-60 a12 12 0 0 1 -12 -12z" fill="#d9633b" />
        </g>
        <!-- idea -->
        <g class="fl" style="animation-duration: 8.5s; animation-delay: -5s">
          <circle cx="1090" cy="650" r="86" fill="#fff" />
          <path d="M1090 604 l10 30 30 10 -30 10 -10 30 -10 -30 -30 -10 30 -10z" fill="#f2b632" />
          <path d="M1130 614 l4 11 11 4 -11 4 -4 11 -4 -11 -11 -4 11 -4z" fill="#e9657e" />
        </g>
      </g>
      <g font-family="Outfit, sans-serif" font-size="28" font-weight="600" fill="#14264a" text-anchor="middle">
        <text x="1040" y="430">Chat</text><text x="1290" y="368">Code</text><text x="1330" y="628">Image</text><text x="1090" y="778">Ideas</text>
      </g>
    </g>
  </svg>
</template>

<style scoped>
svg {
  display: block;
  width: 100%;
  height: 100%;
}
.tw {
  animation: tw 3.6s ease-in-out infinite;
}
.aur {
  animation: aur 18s ease-in-out infinite alternate;
}
.lan {
  animation: lan 16s linear infinite;
}
.lamp {
  animation: lamp 3.4s ease-in-out infinite;
}
.beam {
  animation: beam 6s ease-in-out infinite;
  transform-origin: 40px 70px;
}
.bob {
  animation: bob 6s ease-in-out infinite;
  transform-origin: 60px 60px;
}
.sp {
  animation: tw 3.2s ease-in-out infinite;
}
.surf {
  animation: surf 7s ease-in-out infinite alternate;
}
.fl {
  animation: fl 7s ease-in-out infinite;
}
.moon {
  animation: moon 90s linear infinite;
  transform-origin: 1180px 360px;
}
.thr {
  animation: thr 3s linear infinite;
}
.tram {
  animation: tram 22s linear infinite;
}
.pu {
  animation: pu 4s ease-in-out infinite;
  transform-box: fill-box;
  transform-origin: center;
}
.pl {
  animation: pl 5s ease-in-out infinite;
}
.breathe {
  animation: breathe 9s ease-in-out infinite;
  transform-origin: 800px 1000px;
}
.cursor {
  animation: cur 1s steps(2) infinite;
}
.rot1 {
  animation: spin 60s linear infinite;
}
.rot2 {
  animation: spin 80s linear infinite reverse;
}
.rot3 {
  animation: spin 24s linear infinite;
}
.orb {
  animation: spin 30s linear infinite;
}
.dot {
  animation: dot 1.6s ease-in-out infinite;
}
.d2 {
  animation-delay: 0.25s;
}
.d3 {
  animation-delay: 0.5s;
}
.shoot {
  animation: shoot 9s ease-in infinite;
  opacity: 0;
}
@keyframes tw {
  50% {
    opacity: 0.2;
  }
}
@keyframes aur {
  to {
    transform: translateX(80px) translateY(14px);
  }
}
@keyframes lan {
  from {
    transform: translateY(40px);
    opacity: 0;
  }
  15%,
  80% {
    opacity: 1;
  }
  to {
    transform: translateY(-420px);
    opacity: 0;
  }
}
@keyframes lamp {
  50% {
    opacity: 0.55;
  }
}
@keyframes beam {
  50% {
    transform: rotate(-1.6deg);
    opacity: 0.75;
  }
}
@keyframes bob {
  50% {
    transform: translateY(6px) rotate(1.4deg);
  }
}
@keyframes surf {
  to {
    transform: translateX(-26px);
  }
}
@keyframes fl {
  50% {
    transform: translateY(-14px);
  }
}
@keyframes moon {
  to {
    transform: rotate(360deg);
  }
}
@keyframes thr {
  to {
    stroke-dashoffset: -26;
  }
}
@keyframes tram {
  from {
    transform: translateX(-200px);
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
@keyframes breathe {
  50% {
    transform: scale(1.04);
  }
}
@keyframes cur {
  50% {
    opacity: 0;
  }
}
@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
@keyframes dot {
  50% {
    opacity: 0.2;
    transform: translateY(-4px);
  }
}
@keyframes shoot {
  0%,
  70% {
    opacity: 0;
    transform: translate(60px, -30px);
  }
  75% {
    opacity: 1;
  }
  100% {
    opacity: 0;
    transform: translate(-160px, 70px);
  }
}
@keyframes pl {
  50% {
    opacity: 0.1;
    transform: translateY(-10px);
  }
}
</style>
