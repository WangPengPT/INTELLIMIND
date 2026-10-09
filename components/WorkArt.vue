<script setup lang="ts">
defineProps<{ kind: 'game' | 'web' | 'ai' }>()

const r1 = (n: number) => Math.round(n * 10) / 10
const rand = (seed: number) => {
  const x = Math.sin(seed * 9301 + 49297) * 233280
  return Math.round((x - Math.floor(x)) * 1000) / 1000
}
const stars = Array.from({ length: 30 }, (_, i) => ({
  x: r1(rand(i + 1) * 800),
  y: r1(rand(i + 51) * 200),
  r: r1(0.7 + rand(i + 91) * 1.4)
}))
const grid = Array.from({ length: 150 }, (_, i) => ({
  x: (i % 15) * 56 + 14,
  y: Math.floor(i / 15) * 52 + 48,
  c: 'abcdefghijklmnopqrstuvwxyz'[Math.floor(rand(i + 301) * 26)]
}))
const bulbs = Array.from({ length: 12 }, (_, i) => ({
  x: 30 + i * 66,
  y: r1(34 + Math.sin(i * 0.9) * 10 + (i % 2) * 4)
}))
</script>

<template>
  <svg viewBox="0 0 800 500" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
    <defs>
      <filter id="wa-soft" x="-30%" y="-30%" width="160%" height="160%"><feGaussianBlur stdDeviation="14" /></filter>
    </defs>

    <!-- Muralha: word tower defense, pure black & white typography -->
    <g v-if="kind === 'game'" font-family="'Courier New', ui-monospace, monospace">
      <rect width="800" height="500" fill="#f6efe0" />
      <circle cx="700" cy="110" r="210" fill="#f2b632" opacity=".2" />
      <circle cx="110" cy="430" r="230" fill="#2f6fcf" opacity=".13" />
      <circle cx="420" cy="480" r="160" fill="#d9633b" opacity=".12" />
      <!-- faint letter grid -->
      <g fill="#141414" opacity=".1" font-size="18" font-weight="700">
        <text v-for="(g, i) in grid" :key="i" :x="g.x" :y="g.y">{{ g.c }}</text>
      </g>

      <!-- path of dots -->
      <path d="M-20 380 C120 380 160 300 300 310 S470 410 560 350 S690 270 770 300" fill="none" stroke="#8a4b2a" stroke-width="3" stroke-dasharray="1 15" stroke-linecap="round" opacity=".75" />
      <path d="M-20 380 C120 380 160 300 300 310 S470 410 560 350 S690 270 770 300" fill="none" stroke="#d9633b" stroke-width="44" opacity=".14" stroke-linecap="round" />

      <!-- the keep: a wall made of letters -->
      <g transform="translate(680 190)" fill="none" stroke="#141414" stroke-width="3" stroke-linejoin="round">
        <path d="M0 110 V30 H80 V110Z" fill="#f2b632" fill-opacity=".3" stroke="none" />
        <path d="M0 110 V30 H16 V14 H32 V30 H48 V14 H64 V30 H80 V110Z" />
        <path d="M30 110 V74 A10 10 0 0 1 50 74 V110" />
        <path d="M40 14 V-14 L68 -6 L40 2" fill="#c8302e" stroke="#c8302e" />
      </g>
      <text x="718" y="222" font-size="14" font-weight="700" fill="#1d6b4f" text-anchor="middle">HP 12</text>

      <!-- letter towers -->
      <g font-size="44" font-weight="700" text-anchor="middle" fill="#141414">
        <g class="tw1">
          <rect x="176" y="236" width="64" height="64" rx="6" fill="none" stroke="#141414" stroke-width="3.5" />
          <rect x="184" y="244" width="48" height="48" rx="3" fill="#1d4f9f" />
          <text x="208" y="282" fill="#f3f1ea">A</text>
        </g>
        <g class="tw2">
          <rect x="420" y="332" width="64" height="64" rx="6" fill="none" stroke="#141414" stroke-width="3.5" />
          <rect x="428" y="340" width="48" height="48" rx="3" fill="#d9633b" />
          <text x="452" y="378" fill="#f3f1ea">W</text>
        </g>
        <g class="tw1">
          <rect x="560" y="252" width="64" height="64" rx="6" fill="none" stroke="#141414" stroke-width="3.5" />
          <rect x="568" y="260" width="48" height="48" rx="3" fill="#1d6b4f" />
          <text x="592" y="298" fill="#f3f1ea">Z</text>
        </g>
      </g>
      <g fill="none" stroke-width="2.5" stroke-dasharray="3 7" opacity=".6"><circle cx="208" cy="268" r="92" stroke="#1d4f9f" /><circle cx="452" cy="364" r="92" stroke="#d9633b" /><circle cx="592" cy="284" r="92" stroke="#1d6b4f" /></g>

      <!-- typed shots -->
      <g font-size="26" font-weight="700" fill="#141414">
        <text class="shot" x="246" y="270" fill="#1d4f9f">a</text>
        <text class="shot s2" x="490" y="350" fill="#d9633b">w</text>
        <text class="shot s3" x="520" y="346" fill="#d9633b">e</text>
        <text class="shot s2" x="630" y="270" fill="#1d6b4f">z</text>
      </g>

      <!-- enemies: words that must be typed -->
      <g font-size="22" font-weight="700">
        <g class="foe" transform="translate(40 390)">
          <rect x="-8" y="-26" width="86" height="38" rx="19" fill="#c8302e" fill-opacity=".14" stroke="#c8302e" stroke-width="3" />
          <text x="35" y="0" text-anchor="middle" fill="#c8302e">bug</text>
        </g>
        <g class="foe f2" transform="translate(300 352)">
          <rect x="-8" y="-26" width="96" height="38" rx="19" fill="#7a3fa0" fill-opacity=".14" stroke="#7a3fa0" stroke-width="3" />
          <text x="40" y="0" text-anchor="middle" fill="#7a3fa0">typo</text>
        </g>
        <g class="foe f3" transform="translate(150 330)">
          <rect x="-8" y="-26" width="86" height="38" rx="19" fill="#f2b632" />
          <text x="35" y="0" text-anchor="middle" fill="#141414">lag</text>
        </g>
      </g>
      <text x="26" y="40" font-size="16" font-weight="700" fill="#141414" opacity=".8">&gt; wave 03   score 1280_</text>
      <rect class="cursor" x="236" y="26" width="9" height="16" fill="#d9633b" />
    </g>

    <!-- Tasca: a refined restaurant website -->
    <g v-else-if="kind === 'web'">
      <defs>
        <linearGradient id="wt-bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stop-color="#2b1a1e" />
          <stop offset="1" stop-color="#0f0a0c" />
        </linearGradient>
        <radialGradient id="wt-warm" cx="560" cy="250" r="260" gradientUnits="userSpaceOnUse">
          <stop offset="0" stop-color="#d98a4a" stop-opacity=".55" />
          <stop offset="1" stop-color="#d98a4a" stop-opacity="0" />
        </radialGradient>
        <linearGradient id="wt-plate" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stop-color="#fffaf0" />
          <stop offset="1" stop-color="#d9cdb8" />
        </linearGradient>
        <linearGradient id="wt-fish" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stop-color="#e8eef2" />
          <stop offset=".5" stop-color="#9fb2c0" />
          <stop offset="1" stop-color="#6d8294" />
        </linearGradient>
        <pattern id="wt-tile" width="28" height="28" patternUnits="userSpaceOnUse">
          <rect width="28" height="28" fill="#13294f" />
          <path d="M14 3 Q17 10 14 13 Q11 10 14 3Z M25 14 Q18 17 15 14 Q18 11 25 14Z M14 25 Q11 18 14 15 Q17 18 14 25Z M3 14 Q10 11 13 14 Q10 17 3 14Z" fill="#c9b68a" />
        </pattern>
        <clipPath id="wt-page"><rect x="56" y="62" width="688" height="420" rx="6" /></clipPath>
      </defs>
      <rect width="800" height="500" fill="#161012" />
      <circle cx="560" cy="250" r="300" fill="url(#wt-warm)" />

      <!-- browser frame -->
      <rect x="44" y="30" width="712" height="470" rx="16" fill="#241a1c" />
      <rect x="44" y="30" width="712" height="32" rx="16" fill="#2f2326" />
      <circle cx="68" cy="46" r="5" fill="#c8605a" /><circle cx="86" cy="46" r="5" fill="#d9a74a" /><circle cx="104" cy="46" r="5" fill="#5a9a6e" />
      <rect x="270" y="38" width="260" height="16" rx="8" fill="#1a1214" />
      <text x="400" y="50" font-size="10" fill="#a8968a" text-anchor="middle" font-family="Outfit, sans-serif">tasca.pt</text>

      <g clip-path="url(#wt-page)">
        <rect x="56" y="62" width="688" height="420" fill="url(#wt-bg)" />
        <circle cx="560" cy="270" r="250" fill="url(#wt-warm)" />

        <!-- nav -->
        <text x="84" y="96" font-size="24" fill="#e6c57a" font-family="Georgia, 'Times New Roman', serif" font-style="italic" letter-spacing="1">Tasca</text>
        <g font-size="11" fill="#d8c8b4" font-family="Outfit, sans-serif" letter-spacing="1.6">
          <text x="400" y="94">EMENTA</text><text x="468" y="94">RESERVAS</text><text x="548" y="94">A CASA</text><text x="610" y="94">CONTACTO</text>
        </g>
        <path d="M84 112 H716" stroke="#e6c57a" stroke-opacity=".25" />

        <!-- hero copy -->
        <text x="84" y="158" font-size="10" fill="#e6c57a" font-family="Outfit, sans-serif" letter-spacing="3">COZINHA PORTUGUESA · LISBOA</text>
        <text x="84" y="206" font-size="40" fill="#faf1e0" font-family="Georgia, 'Times New Roman', serif">Sabores que</text>
        <text x="84" y="250" font-size="40" fill="#faf1e0" font-family="Georgia, 'Times New Roman', serif" font-style="italic">contam histórias</text>
        <g fill="#a8968a"><rect x="84" y="272" width="250" height="6" rx="3" /><rect x="84" y="288" width="200" height="6" rx="3" /></g>
        <rect x="84" y="316" width="130" height="36" rx="18" fill="#e6c57a" />
        <text x="149" y="339" font-size="12" font-weight="700" fill="#2b1a1e" text-anchor="middle" font-family="Outfit, sans-serif" letter-spacing="1">RESERVAR MESA</text>
        <rect x="226" y="316" width="104" height="36" rx="18" fill="none" stroke="#e6c57a" stroke-opacity=".7" stroke-width="1.5" />
        <text x="278" y="339" font-size="12" fill="#e6c57a" text-anchor="middle" font-family="Outfit, sans-serif" letter-spacing="1">VER EMENTA</text>

        <!-- the plate -->
        <g transform="translate(560 262)">
          <ellipse cx="6" cy="132" rx="150" ry="14" fill="#000" opacity=".35" />
          <circle r="140" fill="url(#wt-plate)" />
          <circle r="116" fill="none" stroke="#c9bba3" stroke-width="2" />
          <circle r="96" fill="#f7efe0" />
          <!-- potatoes and herbs -->
          <g fill="#e9c779"><ellipse cx="-44" cy="52" rx="20" ry="14" /><ellipse cx="-14" cy="62" rx="18" ry="12" /><ellipse cx="22" cy="56" rx="20" ry="13" /><ellipse cx="54" cy="42" rx="17" ry="12" /></g>
          <g fill="#7ba05a"><circle cx="-30" cy="46" r="3" /><circle cx="6" cy="58" r="3" /><circle cx="40" cy="48" r="3" /><circle cx="-8" cy="70" r="3" /></g>
          <!-- three grilled sardines -->
          <g class="fish">
            <g transform="translate(-6 -48) rotate(-14)">
              <path d="M-86 0 Q-30 -26 40 -12 Q76 -4 92 -20 L92 20 Q76 4 40 12 Q-30 26 -86 0Z" fill="url(#wt-fish)" />
              <g stroke="#3d4e5c" stroke-opacity=".45" stroke-width="2"><path d="M-40 -14 V14 M-18 -16 V16 M4 -15 V15 M26 -12 V12 M48 -9 V9" /></g>
              <circle cx="-62" cy="-3" r="4" fill="#14264a" />
            </g>
            <g transform="translate(-4 -6) rotate(-6)">
              <path d="M-86 0 Q-30 -26 40 -12 Q76 -4 92 -20 L92 20 Q76 4 40 12 Q-30 26 -86 0Z" fill="url(#wt-fish)" />
              <g stroke="#3d4e5c" stroke-opacity=".45" stroke-width="2"><path d="M-40 -14 V14 M-18 -16 V16 M4 -15 V15 M26 -12 V12 M48 -9 V9" /></g>
              <circle cx="-62" cy="-3" r="4" fill="#14264a" />
            </g>
          </g>
          <!-- lemon -->
          <g transform="translate(78 -62)"><path d="M0 0 A30 30 0 0 1 30 30 Z" fill="#f6d04a" /><path d="M0 0 A30 30 0 0 1 30 30 Z" fill="none" stroke="#e6b72a" stroke-width="3" /><g stroke="#fff3b0" stroke-width="2"><path d="M4 4 L22 22 M10 3 L26 14 M3 10 L14 26" /></g></g>
          <!-- steam -->
          <g class="stm" fill="none" stroke="#faf1e0" stroke-opacity=".5" stroke-width="3" stroke-linecap="round">
            <path d="M-40 -110 q-14 -22 0 -40 t0 -36" /><path d="M10 -118 q-14 -22 0 -40 t0 -36" /><path d="M60 -108 q-14 -22 0 -40 t0 -36" />
          </g>
        </g>

        <!-- azulejo strip -->
        <rect x="56" y="396" width="688" height="22" fill="url(#wt-tile)" />
        <rect x="56" y="396" width="688" height="2.5" fill="#e6c57a" />
        <rect x="56" y="415.5" width="688" height="2.5" fill="#e6c57a" />

        <!-- menu strip -->
        <g font-family="Georgia, 'Times New Roman', serif">
          <g fill="#faf1e0" font-size="13"><text x="84" y="448">Arroz de Marisco</text><text x="290" y="448">Bacalhau à Brás</text><text x="486" y="448">Pastel de Nata</text></g>
          <g fill="#e6c57a" font-size="13" text-anchor="end"><text x="252" y="448">18</text><text x="450" y="448">16</text><text x="706" y="448">3</text></g>
          <g stroke="#e6c57a" stroke-opacity=".35" stroke-dasharray="2 4"><path d="M196 445 H242" /><path d="M384 445 H440" /><path d="M590 445 H694" /></g>
        </g>
      </g>
    </g>

    <!-- Esboço: AI page builder -->
    <g v-else>
      <defs>
        <linearGradient id="wb-bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stop-color="#0b1740" />
          <stop offset="1" stop-color="#1d3f8f" />
        </linearGradient>
        <linearGradient id="wb-hero" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stop-color="#ffb07a" />
          <stop offset="1" stop-color="#e9657e" />
        </linearGradient>
        <radialGradient id="wb-glow" cx="400" cy="250" r="360" gradientUnits="userSpaceOnUse">
          <stop offset="0" stop-color="#7df0ff" stop-opacity=".28" />
          <stop offset="1" stop-color="#7df0ff" stop-opacity="0" />
        </radialGradient>
      </defs>
      <rect width="800" height="500" fill="url(#wb-bg)" />
      <rect width="800" height="500" fill="url(#wb-glow)" />
      <g fill="#fff"><circle v-for="(s, i) in stars" :key="i" :cx="s.x" :cy="s.y * 1.6" :r="s.r * 0.7" opacity=".5" /></g>

      <!-- prompt -->
      <g>
        <rect x="150" y="34" width="500" height="64" rx="32" fill="#fff" fill-opacity=".14" stroke="#fff" stroke-opacity=".6" stroke-width="2.5" />
        <path d="M184 66 l5 -14 5 14 14 5 -14 5 -5 14 -5 -14 -14 -5z" fill="#ffd27a" class="twk" />
        <text x="226" y="74" font-size="22" fill="#fff" font-weight="500" font-family="Outfit, sans-serif">a cozy site for my bakery</text>
        <rect class="cursor" x="468" y="52" width="3" height="28" rx="1.5" fill="#7df0ff" />
        <circle cx="612" cy="66" r="20" fill="#7df0ff" />
        <path d="M604 66 H620 M614 59 l7 7 -7 7" stroke="#0b1740" stroke-width="3.4" fill="none" stroke-linecap="round" stroke-linejoin="round" />
      </g>
      <!-- generation beam -->
      <g fill="none" stroke="#7df0ff" stroke-width="3" stroke-linecap="round" stroke-dasharray="2 14" class="thr">
        <path d="M400 100 V140" /><path d="M300 100 C300 120 230 120 230 150" opacity=".6" /><path d="M500 100 C500 120 570 120 570 150" opacity=".6" />
      </g>

      <!-- the page being written -->
      <rect x="130" y="140" width="540" height="330" rx="20" fill="#fbf4e6" />
      <rect x="130" y="140" width="540" height="40" rx="20" fill="#e8dcc2" />
      <circle cx="160" cy="160" r="6" fill="#c8302e" /><circle cx="180" cy="160" r="6" fill="#f2b632" /><circle cx="200" cy="160" r="6" fill="#1d6b4f" />
      <rect x="240" y="150" width="260" height="20" rx="10" fill="#fff" opacity=".8" />
      <!-- nav -->
      <g fill="#14264a" opacity=".7"><rect x="156" y="198" width="70" height="12" rx="6" /><rect x="520" y="198" width="30" height="12" rx="6" /><rect x="562" y="198" width="30" height="12" rx="6" /><rect x="604" y="198" width="40" height="12" rx="6" /></g>
      <!-- hero (filled) -->
      <rect x="156" y="226" width="488" height="124" rx="14" fill="url(#wb-hero)" />
      <rect x="182" y="256" width="190" height="20" rx="10" fill="#fff" opacity=".95" />
      <rect x="182" y="286" width="140" height="12" rx="6" fill="#fff" opacity=".7" />
      <rect x="182" y="314" width="84" height="22" rx="11" fill="#14264a" />
      <circle cx="540" cy="288" r="40" fill="#ffe0a8" /><path d="M510 300 q30 -50 60 0z" fill="#d9633b" />
      <!-- cards: two done, one still wireframe -->
      <rect x="156" y="372" width="150" height="76" rx="12" fill="#cfe0f7" /><rect x="170" y="386" width="70" height="10" rx="5" fill="#1d4f9f" /><rect x="170" y="406" width="110" height="8" rx="4" fill="#1d4f9f" opacity=".5" />
      <rect x="326" y="372" width="150" height="76" rx="12" fill="#ffe0c2" /><rect x="340" y="386" width="70" height="10" rx="5" fill="#d9633b" /><rect x="340" y="406" width="110" height="8" rx="4" fill="#d9633b" opacity=".5" />
      <rect class="draft" x="496" y="372" width="148" height="76" rx="12" fill="none" stroke="#1d4f9f" stroke-width="3" stroke-dasharray="8 8" />
      <path class="twk" d="M570 410 l4 -11 4 11 11 4 -11 4 -4 11 -4 -11 -11 -4z" fill="#f2b632" />
      <!-- cursor -->
      <path d="M590 330 l0 34 8 -8 7 16 7 -3 -7 -16 11 0z" fill="#14264a" stroke="#fff" stroke-width="2" stroke-linejoin="round" class="ptr" />
    </g>
  </svg>
</template>

<style scoped>
svg {
  display: block;
  width: 100%;
  height: 100%;
}
.tw1 {
  animation: tw 3.2s ease-in-out infinite;
  transform-box: fill-box;
  transform-origin: 50% 100%;
}
.tw2 {
  animation: tw 3.2s ease-in-out infinite -1.2s;
  transform-box: fill-box;
  transform-origin: 50% 100%;
}
.shot {
  animation: shot 2.4s linear infinite;
}
.s2 {
  animation-delay: -0.8s;
}
.s3 {
  animation-delay: -1.6s;
}
.foe {
  animation: foe 4s ease-in-out infinite alternate;
}
.f3 {
  animation-delay: -1s;
}
.f2 {
  animation-delay: -2s;
}
.bulb {
  animation: bulb 2.4s ease-in-out infinite;
}
.stm {
  animation: stm 4s ease-in-out infinite;
}
.thr {
  animation: thr 2s linear infinite;
}
.twk {
  animation: twk 2.6s ease-in-out infinite;
  transform-box: fill-box;
  transform-origin: center;
}
.cursor {
  animation: cur 1s steps(2) infinite;
}
.draft {
  animation: draft 1.4s linear infinite;
}
.ptr {
  animation: ptr 3s ease-in-out infinite;
}
@keyframes tw {
  50% {
    transform: scale(1.05, 0.97);
  }
}
@keyframes shot {
  from {
    transform: translate(0, 0);
    opacity: 1;
  }
  to {
    transform: translate(60px, 30px);
    opacity: 0;
  }
}
@keyframes foe {
  to {
    transform: translate(40px, -10px);
  }
}
@keyframes bulb {
  50% {
    opacity: 0.45;
  }
}
@keyframes stm {
  50% {
    transform: translateY(-8px);
    opacity: 0.4;
  }
}
@keyframes thr {
  to {
    stroke-dashoffset: -32;
  }
}
@keyframes twk {
  50% {
    transform: scale(0.5) rotate(40deg);
    opacity: 0.4;
  }
}
@keyframes cur {
  50% {
    opacity: 0;
  }
}
@keyframes draft {
  to {
    stroke-dashoffset: -32;
  }
}
@keyframes ptr {
  50% {
    transform: translate(-16px, -10px);
  }
}
</style>
