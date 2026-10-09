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
        </div>
        <dl class="values">
          <div v-for="v in t.about.values" :key="v.t">
            <dt>{{ v.t }}</dt>
            <dd>{{ v.d }}</dd>
          </div>
        </dl>
      </div>

      <div v-reveal="150" class="crew" aria-hidden="true">
        <svg viewBox="0 0 880 700">
          <defs>
            <!-- sticker cut-out: cream outline around the whole group, no background -->
            <filter id="cut" x="-6%" y="-6%" width="112%" height="112%">
              <feMorphology in="SourceAlpha" operator="dilate" radius="7" result="grow" />
              <feFlood flood-color="#f4efe0" result="cream" />
              <feComposite in="cream" in2="grow" operator="in" result="outline" />
              <feMerge result="stk"><feMergeNode in="outline" /><feMergeNode in="SourceGraphic" /></feMerge>
              <feDropShadow in="stk" dx="0" dy="10" stdDeviation="10" flood-color="#000" flood-opacity=".35" />
            </filter>
            <clipPath id="nav-body"><rect x="100" y="480" width="100" height="96" rx="30" /></clipPath>
          </defs>

          <!-- sparkles -->
          <g fill="#f4efe0">
            <path class="twk" d="M70 250 l8 20 20 8 -20 8 -8 20 -8 -20 -20 -8 20 -8z" />
            <path class="twk t2" d="M820 300 l6 14 14 6 -14 6 -6 14 -6 -14 -14 -6 14 -6z" />
            <path class="twk t3" d="M720 150 l7 16 16 7 -16 7 -7 16 -7 -16 -16 -7 16 -7z" />
            <path class="twk t2" d="M210 110 l5 12 12 5 -12 5 -5 12 -5 -12 -12 -5 12 -5z" />
          </g>

          <!-- ground shadows -->
          <g fill="#000" opacity=".28">
            <ellipse cx="150" cy="626" rx="62" ry="9" /><ellipse cx="420" cy="626" rx="78" ry="10" />
            <ellipse cx="620" cy="626" rx="74" ry="9" /><ellipse cx="780" cy="626" rx="70" ry="9" />
            <ellipse cx="400" cy="624" rx="130" ry="9" />
          </g>

          <g filter="url(#cut)">
            <!-- Galo de Barcelos, in the back -->
            <g transform="translate(228 168) scale(2.45)">
              <g class="bob b2">
                <path d="M40 150 Q10 110 30 70 Q45 40 70 50 Q74 30 92 28 Q108 30 108 46 L124 44 L112 56 Q114 80 100 100 Q120 90 142 60 Q140 120 110 150Z" fill="#14264a" />
                <path d="M72 50 q-10 -22 4 -34 q2 14 12 14 q4 -16 18 -16 q-2 16 -6 20z" fill="#c8302e" />
                <path d="M108 46 L126 52 L108 58Z" fill="#f2b632" />
                <path d="M104 60 q6 14 -2 24 q-8 -8 -4 -22z" fill="#c8302e" />
                <g class="blink"><circle cx="96" cy="44" r="4.4" fill="#fff7e6" /><circle cx="97" cy="44" r="2" fill="#14264a" /></g>
                <circle cx="101" cy="54" r="4" fill="#f08a8a" opacity=".7" />
                <g fill="#c8302e"><circle cx="64" cy="90" r="6" /><circle cx="80" cy="112" r="6" /><circle cx="52" cy="118" r="5" /></g>
                <g fill="#f2b632"><circle cx="86" cy="86" r="4" /><circle cx="68" cy="130" r="4" /><circle cx="100" cy="124" r="4" /></g>
                <g fill="#1d6b4f"><circle cx="40" cy="92" r="4" /><circle cx="96" cy="108" r="4" /></g>
                <path d="M60 150 V176 M86 150 V176 M50 178 H72 M76 178 H98" stroke="#14264a" stroke-width="6" stroke-linecap="round" />
              </g>
            </g>

            <!-- navigator kid -->
            <g class="bob b1">
              <rect x="122" y="566" width="18" height="48" rx="8" fill="#14264a" />
              <rect x="160" y="566" width="18" height="48" rx="8" fill="#14264a" />
              <ellipse cx="131" cy="616" rx="17" ry="8" fill="#8a4b2a" /><ellipse cx="169" cy="616" rx="17" ry="8" fill="#8a4b2a" />
              <rect x="84" y="488" width="16" height="64" rx="8" fill="#f2c9a0" class="wave" />
              <rect x="100" y="480" width="100" height="96" rx="30" fill="#fbf4e6" />
              <g clip-path="url(#nav-body)" fill="#2f6fcf"><rect x="100" y="498" width="100" height="10" /><rect x="100" y="522" width="100" height="10" /><rect x="100" y="546" width="100" height="10" /></g>
              <g transform="rotate(-58 208 494)"><rect x="200" y="486" width="16" height="58" rx="8" fill="#f2c9a0" /></g>
              <g transform="translate(246 446) rotate(-36)"><rect x="-8" y="-40" width="20" height="70" rx="5" fill="#c9922e" /><rect x="-10" y="-46" width="24" height="12" rx="4" fill="#e8b54a" /><rect x="-8" y="-4" width="20" height="6" fill="#8a5d18" /></g>
              <circle cx="150" cy="432" r="52" fill="#f2c9a0" />
              <path d="M98 420 A52 52 0 0 1 202 420Z" fill="#14264a" />
              <rect x="98" y="410" width="104" height="11" fill="#f2b632" />
              <circle cx="150" cy="392" r="10" fill="#fff" /><path d="M147 384 h6 v16 h-6z M142 389 h16 v6 h-16z" fill="#c8302e" />
              <g class="blink"><ellipse cx="133" cy="440" rx="5.5" ry="7" fill="#14264a" /><ellipse cx="167" cy="440" rx="5.5" ry="7" fill="#14264a" /></g>
              <circle cx="120" cy="454" r="7.5" fill="#f08a8a" opacity=".55" /><circle cx="180" cy="454" r="7.5" fill="#f08a8a" opacity=".55" />
              <path d="M138 456 Q150 468 162 456" stroke="#14264a" stroke-width="3.4" fill="none" stroke-linecap="round" />
            </g>

            <!-- robot -->
            <g class="bob b3">
              <rect x="392" y="574" width="18" height="40" rx="7" fill="#7b8bb0" /><rect x="432" y="574" width="18" height="40" rx="7" fill="#7b8bb0" />
              <ellipse cx="401" cy="616" rx="19" ry="8" fill="#2a3a66" /><ellipse cx="441" cy="616" rx="19" ry="8" fill="#2a3a66" />
              <rect x="334" y="488" width="18" height="72" rx="9" fill="#7b8bb0" class="wave w2" />
              <g transform="rotate(8 497 496)"><rect x="488" y="494" width="18" height="64" rx="9" fill="#7b8bb0" /></g>
              <rect x="356" y="478" width="128" height="104" rx="26" fill="#2f6fcf" />
              <rect x="364" y="486" width="22" height="88" rx="11" fill="#5b92e6" opacity=".6" />
              <rect x="394" y="506" width="52" height="52" rx="8" fill="#fbf4e6" />
              <g transform="translate(420 532)" fill="#1d4f9f">
                <path d="M0 -20 Q6 -8 0 -2 Q-6 -8 0 -20Z" /><path d="M0 -20 Q6 -8 0 -2 Q-6 -8 0 -20Z" transform="rotate(90)" /><path d="M0 -20 Q6 -8 0 -2 Q-6 -8 0 -20Z" transform="rotate(180)" /><path d="M0 -20 Q6 -8 0 -2 Q-6 -8 0 -20Z" transform="rotate(270)" />
                <circle r="4" fill="#f2b632" />
              </g>
              <circle cx="362" cy="428" r="9" fill="#7b8bb0" /><circle cx="478" cy="428" r="9" fill="#7b8bb0" />
              <rect x="362" y="382" width="116" height="94" rx="30" fill="#eef2fa" />
              <rect x="374" y="400" width="92" height="56" rx="24" fill="#14264a" />
              <g class="blink"><rect x="392" y="416" width="14" height="22" rx="7" fill="#7df0ff" /><rect x="434" y="416" width="14" height="22" rx="7" fill="#7df0ff" /></g>
              <path d="M408 446 Q420 456 432 446" stroke="#7df0ff" stroke-width="4" fill="none" stroke-linecap="round" />
              <line x1="420" y1="382" x2="420" y2="354" stroke="#7b8bb0" stroke-width="5" stroke-linecap="round" />
              <circle cx="420" cy="346" r="11" fill="#f2b632" class="pulse" />
            </g>

            <!-- pastel de nata -->
            <g class="bob b4">
              <rect x="598" y="604" width="11" height="12" rx="4" fill="#8a4b2a" /><rect x="632" y="604" width="11" height="12" rx="4" fill="#8a4b2a" />
              <ellipse cx="548" cy="568" rx="10" ry="22" fill="#e0a45a" class="wave w3" />
              <ellipse cx="692" cy="568" rx="10" ry="22" fill="#e0a45a" transform="rotate(-14 692 560)" />
              <path d="M556 540 H684 L672 606 Q620 620 568 606Z" fill="#e0a45a" />
              <g stroke="#c98a42" stroke-width="3" stroke-linecap="round"><path d="M580 548 L584 604" /><path d="M600 548 L602 610" /><path d="M620 548 L620 612" /><path d="M640 548 L638 610" /><path d="M660 548 L656 604" /></g>
              <ellipse cx="620" cy="540" rx="66" ry="28" fill="#f5d98a" />
              <g fill="#c2622a" opacity=".85"><ellipse cx="595" cy="536" rx="10" ry="5" /><ellipse cx="632" cy="529" rx="12" ry="5" /><ellipse cx="652" cy="545" rx="8" ry="4" /></g>
              <ellipse cx="620" cy="540" rx="66" ry="28" fill="none" stroke="#e8b56a" stroke-width="7" />
              <g class="blink"><circle cx="600" cy="578" r="5.5" fill="#5a2c1a" /><circle cx="640" cy="578" r="5.5" fill="#5a2c1a" /></g>
              <circle cx="588" cy="592" r="7" fill="#f08a8a" opacity=".6" /><circle cx="652" cy="592" r="7" fill="#f08a8a" opacity=".6" />
              <path d="M608 592 Q620 604 632 592" stroke="#5a2c1a" stroke-width="3.4" fill="none" stroke-linecap="round" />
            </g>

            <!-- Eléctrico 28 -->
            <g class="bob b5">
              <path d="M780 466 V436 M752 436 H808" stroke="#14264a" stroke-width="5" stroke-linecap="round" fill="none" />
              <rect x="720" y="470" width="120" height="142" rx="22" fill="#f2b632" />
              <rect x="724" y="464" width="112" height="16" rx="8" fill="#ffd868" />
              <rect x="734" y="490" width="92" height="64" rx="14" fill="#2a3a66" />
              <g class="blink"><circle cx="762" cy="516" r="9" fill="#fff" /><circle cx="798" cy="516" r="9" fill="#fff" /><circle cx="764" cy="518" r="4.4" fill="#14264a" /><circle cx="800" cy="518" r="4.4" fill="#14264a" /></g>
              <path d="M768 538 Q780 549 792 538" stroke="#fff" stroke-width="3.4" fill="none" stroke-linecap="round" />
              <circle cx="744" cy="580" r="9" fill="#fff7e6" /><circle cx="816" cy="580" r="9" fill="#fff7e6" />
              <circle cx="780" cy="578" r="13" fill="#fbf4e6" /><text x="780" y="583" font-size="13" font-weight="700" text-anchor="middle" fill="#14264a" font-family="Outfit, sans-serif">28</text>
              <rect x="720" y="594" width="120" height="8" fill="#fff7e6" opacity=".7" />
              <circle cx="750" cy="614" r="12" fill="#14264a" /><circle cx="810" cy="614" r="12" fill="#14264a" />
            </g>
          </g>

          <!-- steam -->
          <g fill="none" stroke="#f4efe0" stroke-width="4" stroke-linecap="round" opacity=".6" class="steam">
            <path d="M596 490 q-10 -16 0 -30 t0 -28" /><path d="M630 486 q-10 -16 0 -30 t0 -28" />
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
.crew {
  width: 100%;
  max-width: 680px;
  justify-self: end;
}
.crew svg {
  display: block;
  width: 100%;
  height: auto;
  overflow: visible;
}
.bob {
  animation: bob 3.6s ease-in-out infinite;
  transform-box: fill-box;
  transform-origin: 50% 100%;
}
.b2 {
  animation-delay: -0.9s;
  animation-duration: 4.4s;
}
.b3 {
  animation-delay: -1.8s;
}
.b4 {
  animation-delay: -2.4s;
  animation-duration: 3.2s;
}
.b5 {
  animation-delay: -0.5s;
  animation-duration: 4s;
}
.wave {
  animation: wave 1.6s ease-in-out infinite alternate;
  transform-box: fill-box;
  transform-origin: 50% 8%;
}
.w2 {
  animation-delay: -0.6s;
}
.w3 {
  animation-delay: -1s;
}
.blink {
  animation: blink 5s infinite;
  transform-box: fill-box;
  transform-origin: 50% 50%;
}
.pulse {
  animation: pulse 2s ease-in-out infinite;
  transform-box: fill-box;
  transform-origin: center;
}
.twk {
  animation: twk 3s ease-in-out infinite;
  transform-box: fill-box;
  transform-origin: center;
}
.t2 {
  animation-delay: -1s;
}
.t3 {
  animation-delay: -2s;
}
.steam {
  animation: steam 4s ease-in-out infinite;
}
@keyframes bob {
  50% {
    transform: translateY(-9px) scale(1.012, 0.99);
  }
}
@keyframes wave {
  from {
    transform: rotate(-26deg);
  }
  to {
    transform: rotate(20deg);
  }
}
@keyframes blink {
  0%,
  92%,
  100% {
    transform: scaleY(1);
  }
  96% {
    transform: scaleY(0.1);
  }
}
@keyframes pulse {
  50% {
    transform: scale(1.3);
    opacity: 0.7;
  }
}
@keyframes twk {
  50% {
    transform: scale(0.5) rotate(40deg);
    opacity: 0.4;
  }
}
@keyframes steam {
  50% {
    transform: translateY(-10px);
    opacity: 0.2;
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
