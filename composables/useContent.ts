export type Lang = 'en' | 'pt' | 'es' | 'fr' | 'de' | 'it' | 'nl' | 'pl' | 'zh' | 'tw'

export const LANGS: { code: Lang; label: string; short: string; html: string }[] = [
  { code: 'en', label: 'English', short: 'EN', html: 'en' },
  { code: 'pt', label: 'Português', short: 'PT', html: 'pt' },
  { code: 'es', label: 'Español', short: 'ES', html: 'es' },
  { code: 'fr', label: 'Français', short: 'FR', html: 'fr' },
  { code: 'de', label: 'Deutsch', short: 'DE', html: 'de' },
  { code: 'it', label: 'Italiano', short: 'IT', html: 'it' },
  { code: 'nl', label: 'Nederlands', short: 'NL', html: 'nl' },
  { code: 'pl', label: 'Polski', short: 'PL', html: 'pl' },
  { code: 'zh', label: '简体中文', short: '简', html: 'zh-Hans' },
  { code: 'tw', label: '繁體中文', short: '繁', html: 'zh-Hant' }
]

const detect = (tag: string): Lang => {
  const l = tag.toLowerCase()
  if (l.startsWith('pt')) return 'pt'
  if (l.startsWith('es')) return 'es'
  if (l.startsWith('fr')) return 'fr'
  if (l.startsWith('de')) return 'de'
  if (l.startsWith('it')) return 'it'
  if (l.startsWith('nl')) return 'nl'
  if (l.startsWith('pl')) return 'pl'
  if (l.startsWith('zh')) return /tw|hk|mo|hant/.test(l) ? 'tw' : 'zh'
  return 'en'
}

const content = {
  en: {
    meta: {
      title: 'INTELLIMIND — Games, Web Apps & AI Tools from Portugal',
      description: 'A Portuguese studio creating games, web apps and AI tools that feel timeless, warm and human.'
    },
    a11y: {
      main: 'Main',
      language: 'Language',
      menu: 'Menu',
      banner: "Golden hour over the Tagus: a caravel sails toward the sun past Lisbon's hills"
    },
    nav: { what: 'What we make', work: 'Work', studio: 'Studio', contact: 'Contact' },
    hero: {
      hello: 'Olá, we are',
      statement:
        '*INTELLIMIND* is a *Portuguese* studio creating *games*, *web apps* and *AI tools* that feel timeless, warm and *human*.'
    },
    explore: {
      title: "Let's Explore",
      lead: 'Like the navigators who once left our shores, we keep charting new waters. See what we build and how it can bring us closer together.',
      cta: 'Our Work',
      cta2: 'About Us',
      more: 'Learn More',
      items: [
        {
          key: 'games',
          name: 'Games',
          text: 'Warm, emotional, beautifully strange worlds for PC, console and mobile — games people remember long after the credits.'
        },
        {
          key: 'web',
          name: 'Web Apps',
          text: 'Fast, accessible and genuinely pleasant to use. From product sites to full platforms, built for the open web.'
        },
        {
          key: 'ai',
          name: 'AI Tools',
          text: 'Assistants, automations and creative tools that quietly do the heavy lifting — with a human always in the loop.'
        }
      ]
    },
    work: {
      title: 'Voyages in Progress',
      more: 'More',
      status: 'In development',
      items: [
        { kind: 'Game', name: 'Muralha', text: 'A word tower-defense game: type to fire, spell to build, and hold the wall against waves of bugs.' },
        { kind: 'Website', name: 'Tasca', text: 'A warm, fast homepage for a neighbourhood restaurant — menu, bookings and the smell of fresh bread.' },
        { kind: 'AI Tool', name: 'Esboço', text: 'An AI web-page builder: describe a site in plain words and get layout, copy and code in seconds.' }
      ]
    },
    about: {
      title: 'Together, We Set Sail',
      p1: 'In the 15th century, small ships left Portugal to find out what lay beyond the edge of the map. We like to think that spirit never left.',
      p2: 'We are a small, independent team that blends engineering with art — caring about craft, kindness in design, and technology that feels human.',
      cta: 'Work with us',
      cta2: 'Meet the team',
      values: [
        { t: 'Curiosity', d: 'We follow questions into the unknown.' },
        { t: 'Craft', d: 'Like an azulejo, every detail is hand-placed.' },
        { t: 'Warmth', d: 'Technology should feel like sunlight, not glare.' }
      ]
    },
    contact: {
      title: 'Have a voyage in mind?',
      lead: 'Tell us about your game, your product or your idea. We read every message — usually with a coffee and a pastel de nata.',
      name: 'Your name',
      email: 'Your email',
      message: 'What are you dreaming up?',
      send: 'Send message',
      subject: 'Hello from'
    },
    footer: {
      cols: [
        { h: 'Make', l: ['Games', 'Web Apps', 'AI Tools'] },
        { h: 'Studio', l: ['About Us', 'Work', 'Contact'] }
      ],
      made: 'Made with love in Portugal',
      rights: 'All Rights Reserved.'
    }
  },
  pt: {
    meta: {
      title: 'INTELLIMIND — Jogos, Aplicações Web e Ferramentas de IA feitos em Portugal',
      description: 'Um estúdio português que cria jogos, aplicações web e ferramentas de IA intemporais, calorosas e humanas.'
    },
    a11y: {
      main: 'Principal',
      language: 'Idioma',
      menu: 'Menu',
      banner: 'Hora dourada sobre o Tejo: uma caravela navega rumo ao sol, junto às colinas de Lisboa'
    },
    nav: { what: 'O que fazemos', work: 'Projetos', studio: 'Estúdio', contact: 'Contacto' },
    hero: {
      hello: 'Olá, somos a',
      statement:
        'A *INTELLIMIND* é um estúdio *português* que cria *jogos*, *aplicações web* e *ferramentas de IA* intemporais, calorosas e *humanas*.'
    },
    explore: {
      title: 'Vamos Explorar',
      lead: 'Como os navegadores que partiram das nossas costas, continuamos a traçar novas rotas. Descobre o que criamos e como nos pode aproximar.',
      cta: 'Os Nossos Projetos',
      cta2: 'Sobre Nós',
      more: 'Saber Mais',
      items: [
        {
          key: 'games',
          name: 'Jogos',
          text: 'Mundos calorosos, emotivos e belamente estranhos para PC, consola e telemóvel — jogos que ficam na memória.'
        },
        {
          key: 'web',
          name: 'Aplicações Web',
          text: 'Rápidas, acessíveis e agradáveis de usar. De sites de produto a plataformas completas, feitas para a web aberta.'
        },
        {
          key: 'ai',
          name: 'Ferramentas de IA',
          text: 'Assistentes, automações e ferramentas criativas que fazem o trabalho pesado em silêncio — sempre com uma pessoa ao leme.'
        }
      ]
    },
    work: {
      title: 'Viagens em Curso',
      more: 'Mais',
      status: 'Em desenvolvimento',
      items: [
        { kind: 'Jogo', name: 'Muralha', text: 'Um jogo de defesa de torres com palavras: escreve para disparar, soletra para construir e defende a muralha de vagas de bugs.' },
        { kind: 'Website', name: 'Tasca', text: 'Uma página calorosa e rápida para um restaurante de bairro — ementa, reservas e cheiro a pão fresco.' },
        { kind: 'Ferramenta IA', name: 'Esboço', text: 'Um criador de páginas web com IA: descreve o site por palavras e recebe layout, texto e código em segundos.' }
      ]
    },
    about: {
      title: 'Juntos, Fazemo-nos ao Mar',
      p1: 'No século XV, pequenos navios partiram de Portugal para descobrir o que existia além do fim do mapa. Gostamos de pensar que esse espírito nunca nos deixou.',
      p2: 'Somos uma equipa pequena e independente que junta engenharia e arte — com cuidado no ofício, gentileza no design e tecnologia que se sente humana.',
      cta: 'Trabalha connosco',
      cta2: 'Conhece a equipa',
      values: [
        { t: 'Curiosidade', d: 'Seguimos perguntas até ao desconhecido.' },
        { t: 'Ofício', d: 'Como um azulejo, cada detalhe é colocado à mão.' },
        { t: 'Calor', d: 'A tecnologia deve parecer sol, não encandeamento.' }
      ]
    },
    contact: {
      title: 'Tens uma viagem em mente?',
      lead: 'Conta-nos o teu jogo, produto ou ideia. Lemos todas as mensagens — normalmente com um café e um pastel de nata.',
      name: 'O teu nome',
      email: 'O teu email',
      message: 'O que estás a sonhar?',
      send: 'Enviar mensagem',
      subject: 'Olá de'
    },
    footer: {
      cols: [
        { h: 'Criamos', l: ['Jogos', 'Aplicações Web', 'Ferramentas de IA'] },
        { h: 'Estúdio', l: ['Sobre Nós', 'Projetos', 'Contacto'] }
      ],
      made: 'Feito com amor em Portugal',
      rights: 'Todos os direitos reservados.'
    }
  },
  es: {
    "meta": {
      "title": "INTELLIMIND — Juegos, aplicaciones web y herramientas de IA desde Portugal",
      "description": "Un estudio portugués que crea juegos, aplicaciones web y herramientas de IA atemporales, cálidas y humanas."
    },
    "a11y": {
      "main": "Principal",
      "language": "Idioma",
      "menu": "Menú",
      "banner": "Hora dorada sobre el Tajo: una carabela navega hacia el sol junto a las colinas de Lisboa"
    },
    "nav": {
      "what": "Qué hacemos",
      "work": "Proyectos",
      "studio": "Estudio",
      "contact": "Contacto"
    },
    "hero": {
      "hello": "Hola, somos",
      "statement": "*INTELLIMIND* es un estudio *portugués* que crea *juegos*, *aplicaciones web* y *herramientas de IA* atemporales, cálidas y *humanas*."
    },
    "explore": {
      "title": "Exploremos",
      "lead": "Como los navegantes que un día salieron de nuestras costas, seguimos trazando nuevas rutas. Descubre lo que creamos y cómo puede acercarnos.",
      "cta": "Nuestros proyectos",
      "cta2": "Sobre nosotros",
      "more": "Saber más",
      "items": [
        {
          "key": "games",
          "name": "Juegos",
          "text": "Mundos cálidos, emotivos y bellamente extraños para PC, consola y móvil: juegos que se recuerdan mucho después de los créditos."
        },
        {
          "key": "web",
          "name": "Aplicaciones web",
          "text": "Rápidas, accesibles y realmente agradables de usar. De sitios de producto a plataformas completas, hechas para la web abierta."
        },
        {
          "key": "ai",
          "name": "Herramientas de IA",
          "text": "Asistentes, automatizaciones y herramientas creativas que hacen el trabajo pesado en silencio, siempre con una persona al mando."
        }
      ]
    },
    "work": {
      "title": "Viajes en curso",
      "more": "Más",
      "status": "En desarrollo",
      "items": [
        {
          "kind": "Juego",
          "name": "Muralha",
          "text": "Un juego de defensa de torres con palabras: escribe para disparar, deletrea para construir y defiende la muralla de oleadas de bugs."
        },
        {
          "kind": "Sitio web",
          "name": "Tasca",
          "text": "Una web cálida y rápida para un restaurante de barrio: carta, reservas y olor a pan recién hecho."
        },
        {
          "kind": "Herramienta de IA",
          "name": "Esboço",
          "text": "Un creador de páginas web con IA: describe el sitio con palabras y obtén diseño, textos y código en segundos."
        }
      ]
    },
    "about": {
      "title": "Juntos, zarpamos",
      "p1": "En el siglo XV, pequeños barcos partieron de Portugal para descubrir qué había más allá del borde del mapa. Nos gusta pensar que ese espíritu nunca se fue.",
      "p2": "Somos un equipo pequeño e independiente que une ingeniería y arte: cuidamos el oficio, la amabilidad en el diseño y una tecnología que se siente humana.",
      "cta": "Trabaja con nosotros",
      "cta2": "Conoce al equipo",
      "values": [
        {
          "t": "Curiosidad",
          "d": "Seguimos las preguntas hacia lo desconocido."
        },
        {
          "t": "Oficio",
          "d": "Como un azulejo, cada detalle se coloca a mano."
        },
        {
          "t": "Calidez",
          "d": "La tecnología debe sentirse como la luz del sol, no como un deslumbramiento."
        }
      ]
    },
    "contact": {
      "title": "¿Tienes un viaje en mente?",
      "lead": "Cuéntanos tu juego, producto o idea. Leemos cada mensaje, normalmente con un café y un pastel de nata.",
      "name": "Tu nombre",
      "email": "Tu correo",
      "message": "¿Qué estás soñando?",
      "send": "Enviar mensaje",
      "subject": "Hola de"
    },
    "footer": {
      "cols": [
        {
          "h": "Creamos",
          "l": [
            "Juegos",
            "Aplicaciones web",
            "Herramientas de IA"
          ]
        },
        {
          "h": "Estudio",
          "l": [
            "Sobre nosotros",
            "Proyectos",
            "Contacto"
          ]
        }
      ],
      "made": "Hecho con cariño en Portugal",
      "rights": "Todos los derechos reservados."
    }
  },
  fr: {
    "meta": {
      "title": "INTELLIMIND — Jeux, applications web et outils d’IA depuis le Portugal",
      "description": "Un studio portugais qui crée des jeux, des applications web et des outils d’IA intemporels, chaleureux et humains."
    },
    "a11y": {
      "main": "Principal",
      "language": "Langue",
      "menu": "Menu",
      "banner": "Heure dorée sur le Tage : une caravelle navigue vers le soleil devant les collines de Lisbonne"
    },
    "nav": {
      "what": "Ce que nous faisons",
      "work": "Projets",
      "studio": "Studio",
      "contact": "Contact"
    },
    "hero": {
      "hello": "Olá, nous sommes",
      "statement": "*INTELLIMIND* est un studio *portugais* qui crée des *jeux*, des *applications web* et des *outils d’IA* intemporels, chaleureux et *humains*."
    },
    "explore": {
      "title": "Explorons",
      "lead": "Comme les navigateurs qui quittaient jadis nos côtes, nous continuons de tracer de nouvelles routes. Découvrez ce que nous créons et comment cela peut nous rapprocher.",
      "cta": "Nos projets",
      "cta2": "À propos",
      "more": "En savoir plus",
      "items": [
        {
          "key": "games",
          "name": "Jeux",
          "text": "Des mondes chaleureux, émouvants et merveilleusement étranges pour PC, console et mobile — des jeux dont on se souvient longtemps après le générique."
        },
        {
          "key": "web",
          "name": "Applications web",
          "text": "Rapides, accessibles et vraiment agréables à utiliser. Des sites vitrines aux plateformes complètes, conçues pour le web ouvert."
        },
        {
          "key": "ai",
          "name": "Outils d’IA",
          "text": "Assistants, automatisations et outils créatifs qui font le gros du travail en silence — toujours avec un humain aux commandes."
        }
      ]
    },
    "work": {
      "title": "Voyages en cours",
      "more": "Plus",
      "status": "En développement",
      "items": [
        {
          "kind": "Jeu",
          "name": "Muralha",
          "text": "Un jeu de tower defense avec des mots : tapez pour tirer, épelez pour construire et défendez la muraille contre des vagues de bugs."
        },
        {
          "kind": "Site web",
          "name": "Tasca",
          "text": "Un site chaleureux et rapide pour un restaurant de quartier — carte, réservations et odeur de pain frais."
        },
        {
          "kind": "Outil d’IA",
          "name": "Esboço",
          "text": "Un créateur de pages web par IA : décrivez le site en quelques mots et obtenez mise en page, textes et code en quelques secondes."
        }
      ]
    },
    "about": {
      "title": "Ensemble, nous prenons la mer",
      "p1": "Au XVe siècle, de petits navires quittèrent le Portugal pour découvrir ce qu’il y avait au-delà du bord de la carte. Nous aimons penser que cet esprit ne nous a jamais quittés.",
      "p2": "Nous sommes une petite équipe indépendante qui allie ingénierie et art — attachée au savoir-faire, à la bienveillance du design et à une technologie qui paraît humaine.",
      "cta": "Travaillez avec nous",
      "cta2": "Rencontrer l’équipe",
      "values": [
        {
          "t": "Curiosité",
          "d": "Nous suivons les questions jusqu’à l’inconnu."
        },
        {
          "t": "Savoir-faire",
          "d": "Comme un azulejo, chaque détail est posé à la main."
        },
        {
          "t": "Chaleur",
          "d": "La technologie doit ressembler au soleil, pas à l’éblouissement."
        }
      ]
    },
    "contact": {
      "title": "Un voyage en tête ?",
      "lead": "Parlez-nous de votre jeu, produit ou idée. Nous lisons chaque message — généralement avec un café et un pastel de nata.",
      "name": "Votre nom",
      "email": "Votre e-mail",
      "message": "À quoi rêvez-vous ?",
      "send": "Envoyer le message",
      "subject": "Bonjour de"
    },
    "footer": {
      "cols": [
        {
          "h": "Nous créons",
          "l": [
            "Jeux",
            "Applications web",
            "Outils d’IA"
          ]
        },
        {
          "h": "Studio",
          "l": [
            "À propos",
            "Projets",
            "Contact"
          ]
        }
      ],
      "made": "Fait avec amour au Portugal",
      "rights": "Tous droits réservés."
    }
  },
  de: {
    "meta": {
      "title": "INTELLIMIND — Spiele, Web-Apps und KI-Tools aus Portugal",
      "description": "Ein portugiesisches Studio, das zeitlose, warme und menschliche Spiele, Web-Apps und KI-Tools entwickelt."
    },
    "a11y": {
      "main": "Hauptnavigation",
      "language": "Sprache",
      "menu": "Menü",
      "banner": "Goldene Stunde über dem Tejo: Eine Karavelle segelt der Sonne entgegen, vorbei an Lissabons Hügeln"
    },
    "nav": {
      "what": "Was wir machen",
      "work": "Projekte",
      "studio": "Studio",
      "contact": "Kontakt"
    },
    "hero": {
      "hello": "Olá, wir sind",
      "statement": "*INTELLIMIND* ist ein *portugiesisches* Studio, das *Spiele*, *Web-Apps* und *KI-Tools* entwickelt – zeitlos, warm und *menschlich*."
    },
    "explore": {
      "title": "Lasst uns entdecken",
      "lead": "Wie die Seefahrer, die einst unsere Küsten verließen, zeichnen wir immer neue Routen. Entdecken Sie, was wir bauen und wie es uns näherbringen kann.",
      "cta": "Unsere Projekte",
      "cta2": "Über uns",
      "more": "Mehr erfahren",
      "items": [
        {
          "key": "games",
          "name": "Spiele",
          "text": "Warme, berührende, wunderbar seltsame Welten für PC, Konsole und Mobilgeräte – Spiele, an die man sich noch lange nach dem Abspann erinnert."
        },
        {
          "key": "web",
          "name": "Web-Apps",
          "text": "Schnell, barrierefrei und wirklich angenehm zu bedienen. Von Produktseiten bis zu vollständigen Plattformen – gebaut für das offene Web."
        },
        {
          "key": "ai",
          "name": "KI-Tools",
          "text": "Assistenten, Automatisierungen und kreative Werkzeuge, die still die Schwerarbeit erledigen – stets mit einem Menschen am Steuer."
        }
      ]
    },
    "work": {
      "title": "Reisen in Arbeit",
      "more": "Mehr",
      "status": "In Entwicklung",
      "items": [
        {
          "kind": "Spiel",
          "name": "Muralha",
          "text": "Ein Tower-Defense-Spiel mit Wörtern: tippen zum Schießen, buchstabieren zum Bauen und die Mauer gegen Wellen von Bugs halten."
        },
        {
          "kind": "Website",
          "name": "Tasca",
          "text": "Eine warme, schnelle Website für ein Stadtteilrestaurant – Speisekarte, Reservierungen und der Duft von frischem Brot."
        },
        {
          "kind": "KI-Tool",
          "name": "Esboço",
          "text": "Ein KI-Webseiten-Builder: Beschreiben Sie die Seite in einfachen Worten und erhalten Sie Layout, Texte und Code in Sekunden."
        }
      ]
    },
    "about": {
      "title": "Gemeinsam in See stechen",
      "p1": "Im 15. Jahrhundert verließen kleine Schiffe Portugal, um zu entdecken, was jenseits des Kartenrandes liegt. Wir glauben, dass dieser Geist nie verschwunden ist.",
      "p2": "Wir sind ein kleines, unabhängiges Team, das Technik und Kunst verbindet – mit Liebe zum Handwerk, Freundlichkeit im Design und Technologie, die sich menschlich anfühlt.",
      "cta": "Mit uns arbeiten",
      "cta2": "Das Team kennenlernen",
      "values": [
        {
          "t": "Neugier",
          "d": "Wir folgen Fragen ins Unbekannte."
        },
        {
          "t": "Handwerk",
          "d": "Wie ein Azulejo wird jedes Detail von Hand gesetzt."
        },
        {
          "t": "Wärme",
          "d": "Technologie soll sich wie Sonnenlicht anfühlen, nicht wie Blendung."
        }
      ]
    },
    "contact": {
      "title": "Eine Reise im Sinn?",
      "lead": "Erzählen Sie uns von Ihrem Spiel, Produkt oder Ihrer Idee. Wir lesen jede Nachricht – meist mit einem Kaffee und einem Pastel de Nata.",
      "name": "Ihr Name",
      "email": "Ihre E-Mail",
      "message": "Wovon träumen Sie?",
      "send": "Nachricht senden",
      "subject": "Hallo von"
    },
    "footer": {
      "cols": [
        {
          "h": "Wir machen",
          "l": [
            "Spiele",
            "Web-Apps",
            "KI-Tools"
          ]
        },
        {
          "h": "Studio",
          "l": [
            "Über uns",
            "Projekte",
            "Kontakt"
          ]
        }
      ],
      "made": "Mit Liebe in Portugal gemacht",
      "rights": "Alle Rechte vorbehalten."
    }
  },
  zh: {
    "meta": {
      "title": "INTELLIMIND — 来自葡萄牙的游戏、网页应用与 AI 工具",
      "description": "一家葡萄牙工作室，开发永恒、温暖、充满人情味的游戏、网页应用和 AI 工具。"
    },
    "a11y": {
      "main": "主导航",
      "language": "语言",
      "menu": "菜单",
      "banner": "特茹河上的黄金时刻：一艘卡拉维尔帆船驶向太阳，掠过里斯本的山丘"
    },
    "nav": {
      "what": "我们的业务",
      "work": "项目",
      "studio": "工作室",
      "contact": "联系我们"
    },
    "hero": {
      "hello": "你好，我们是",
      "statement": "*INTELLIMIND* 是一家*葡萄牙*工作室，开发*游戏*、*网页应用*和 *AI 工具*，让作品永恒、温暖、充满*人情味*。"
    },
    "explore": {
      "title": "一起探索",
      "lead": "就像曾经从我们海岸启航的航海家，我们不断开辟新的航路。看看我们在做什么，以及它如何让彼此靠得更近。",
      "cta": "我们的作品",
      "cta2": "关于我们",
      "more": "了解更多",
      "items": [
        {
          "key": "games",
          "name": "游戏",
          "text": "温暖、动人、美得奇妙的世界，面向电脑、主机和手机——让人在片尾字幕之后依然记得的游戏。"
        },
        {
          "key": "web",
          "name": "网页应用",
          "text": "快速、无障碍、用起来真正舒服。从产品官网到完整平台，为开放的网络而建。"
        },
        {
          "key": "ai",
          "name": "AI 工具",
          "text": "助手、自动化与创意工具，默默承担繁重的工作——始终由人来掌舵。"
        }
      ]
    },
    "work": {
      "title": "航行中的项目",
      "more": "更多",
      "status": "开发中",
      "items": [
        {
          "kind": "游戏",
          "name": "Muralha",
          "text": "一款文字塔防游戏：打字开火，拼写建造，在一波波 bug 的进攻中守住城墙。"
        },
        {
          "kind": "网站",
          "name": "Tasca",
          "text": "一个温暖、快速的社区餐厅主页——菜单、订座，还有刚出炉面包的香气。"
        },
        {
          "kind": "AI 工具",
          "name": "Esboço",
          "text": "一款 AI 网页制作工具：用简单的话描述网站，几秒钟得到版式、文案和代码。"
        }
      ]
    },
    "about": {
      "title": "携手启航",
      "p1": "十五世纪，小小的船只从葡萄牙出发，去探寻地图边缘之外的世界。我们愿相信，这种精神从未离开。",
      "p2": "我们是一支小而独立的团队，把工程与艺术融为一体——在意手艺，在意设计里的善意，也在意有人情味的技术。",
      "cta": "与我们合作",
      "cta2": "认识团队",
      "values": [
        {
          "t": "好奇心",
          "d": "我们循着问题走向未知。"
        },
        {
          "t": "手艺",
          "d": "就像一块瓷砖画，每个细节都由手工放置。"
        },
        {
          "t": "温暖",
          "d": "技术应当像阳光，而不是刺眼的强光。"
        }
      ]
    },
    "contact": {
      "title": "心中有一次远航？",
      "lead": "告诉我们你的游戏、产品或想法。我们会认真阅读每一条消息——通常伴着咖啡和一块葡式蛋挞。",
      "name": "你的姓名",
      "email": "你的邮箱",
      "message": "你在构想什么？",
      "send": "发送消息",
      "subject": "来自"
    },
    "footer": {
      "cols": [
        {
          "h": "我们制作",
          "l": [
            "游戏",
            "网页应用",
            "AI 工具"
          ]
        },
        {
          "h": "工作室",
          "l": [
            "关于我们",
            "项目",
            "联系我们"
          ]
        }
      ],
      "made": "在葡萄牙用心制作",
      "rights": "保留所有权利。"
    }
  },
  tw: {
    "meta": {
      "title": "INTELLIMIND — 來自葡萄牙的遊戲、網頁應用與 AI 工具",
      "description": "一家葡萄牙工作室，開發永恆、溫暖、充滿人情味的遊戲、網頁應用與 AI 工具。"
    },
    "a11y": {
      "main": "主導覽",
      "language": "語言",
      "menu": "選單",
      "banner": "特茹河上的黃金時刻：一艘卡拉維爾帆船駛向太陽，掠過里斯本的山丘"
    },
    "nav": {
      "what": "我們的業務",
      "work": "專案",
      "studio": "工作室",
      "contact": "聯絡我們"
    },
    "hero": {
      "hello": "你好，我們是",
      "statement": "*INTELLIMIND* 是一家*葡萄牙*工作室，開發*遊戲*、*網頁應用*與 *AI 工具*，讓作品永恆、溫暖、充滿*人情味*。"
    },
    "explore": {
      "title": "一起探索",
      "lead": "就像曾經從我們海岸啟航的航海家，我們不斷開闢新的航路。看看我們在做什麼，以及它如何讓彼此靠得更近。",
      "cta": "我們的作品",
      "cta2": "關於我們",
      "more": "瞭解更多",
      "items": [
        {
          "key": "games",
          "name": "遊戲",
          "text": "溫暖、動人、美得奇妙的世界，適用於電腦、主機與手機——讓人在片尾字幕之後依然記得的遊戲。"
        },
        {
          "key": "web",
          "name": "網頁應用",
          "text": "快速、無障礙、用起來真正舒服。從產品官網到完整平台，為開放的網路而建。"
        },
        {
          "key": "ai",
          "name": "AI 工具",
          "text": "助手、自動化與創意工具，默默承擔繁重的工作——始終由人來掌舵。"
        }
      ]
    },
    "work": {
      "title": "航行中的專案",
      "more": "更多",
      "status": "開發中",
      "items": [
        {
          "kind": "遊戲",
          "name": "Muralha",
          "text": "一款文字塔防遊戲：打字開火，拼寫建造，在一波波 bug 的進攻中守住城牆。"
        },
        {
          "kind": "網站",
          "name": "Tasca",
          "text": "一個溫暖、快速的社區餐廳首頁——菜單、訂位，還有剛出爐麵包的香氣。"
        },
        {
          "kind": "AI 工具",
          "name": "Esboço",
          "text": "一款 AI 網頁製作工具：用簡單的話描述網站，幾秒鐘得到版面、文案與程式碼。"
        }
      ]
    },
    "about": {
      "title": "攜手啟航",
      "p1": "十五世紀，小小的船隻從葡萄牙出發，去探尋地圖邊緣之外的世界。我們願相信，這種精神從未離開。",
      "p2": "我們是一支小而獨立的團隊，把工程與藝術融為一體——在意手藝，在意設計裡的善意，也在意有人情味的技術。",
      "cta": "與我們合作",
      "cta2": "認識團隊",
      "values": [
        {
          "t": "好奇心",
          "d": "我們循著問題走向未知。"
        },
        {
          "t": "手藝",
          "d": "就像一塊瓷磚畫，每個細節都由手工放置。"
        },
        {
          "t": "溫暖",
          "d": "技術應當像陽光，而不是刺眼的強光。"
        }
      ]
    },
    "contact": {
      "title": "心中有一次遠航？",
      "lead": "告訴我們你的遊戲、產品或想法。我們會認真閱讀每一則訊息——通常伴著咖啡和一塊葡式蛋塔。",
      "name": "你的姓名",
      "email": "你的信箱",
      "message": "你在構想什麼？",
      "send": "傳送訊息",
      "subject": "來自"
    },
    "footer": {
      "cols": [
        {
          "h": "我們製作",
          "l": [
            "遊戲",
            "網頁應用",
            "AI 工具"
          ]
        },
        {
          "h": "工作室",
          "l": [
            "關於我們",
            "專案",
            "聯絡我們"
          ]
        }
      ],
      "made": "在葡萄牙用心製作",
      "rights": "保留所有權利。"
    }
  },
  it: {
    "meta": {
      "title": "INTELLIMIND — Giochi, app web e strumenti di IA dal Portogallo",
      "description": "Uno studio portoghese che crea giochi, app web e strumenti di IA senza tempo, caldi e umani."
    },
    "a11y": {
      "main": "Principale",
      "language": "Lingua",
      "menu": "Menu",
      "banner": "Ora dorata sul Tago: una caravella naviga verso il sole davanti alle colline di Lisbona"
    },
    "nav": {
      "what": "Cosa facciamo",
      "work": "Progetti",
      "studio": "Studio",
      "contact": "Contatti"
    },
    "hero": {
      "hello": "Olá, siamo",
      "statement": "*INTELLIMIND* è uno studio *portoghese* che crea *giochi*, *app web* e *strumenti di IA* senza tempo, caldi e *umani*."
    },
    "explore": {
      "title": "Esploriamo",
      "lead": "Come i navigatori che un tempo lasciarono le nostre coste, continuiamo a tracciare nuove rotte. Scopri cosa costruiamo e come può avvicinarci.",
      "cta": "I nostri progetti",
      "cta2": "Chi siamo",
      "more": "Scopri di più",
      "items": [
        {
          "key": "games",
          "name": "Giochi",
          "text": "Mondi caldi, emozionanti e splendidamente strani per PC, console e mobile: giochi che si ricordano ben oltre i titoli di coda."
        },
        {
          "key": "web",
          "name": "App web",
          "text": "Veloci, accessibili e davvero piacevoli da usare. Dai siti di prodotto alle piattaforme complete, costruite per il web aperto."
        },
        {
          "key": "ai",
          "name": "Strumenti di IA",
          "text": "Assistenti, automazioni e strumenti creativi che fanno il lavoro pesante in silenzio, sempre con una persona al timone."
        }
      ]
    },
    "work": {
      "title": "Viaggi in corso",
      "more": "Altro",
      "status": "In sviluppo",
      "items": [
        {
          "kind": "Gioco",
          "name": "Muralha",
          "text": "Un tower defense di parole: scrivi per sparare, componi per costruire e difendi le mura da ondate di bug."
        },
        {
          "kind": "Sito web",
          "name": "Tasca",
          "text": "Un sito caldo e veloce per un ristorante di quartiere: menu, prenotazioni e profumo di pane fresco."
        },
        {
          "kind": "Strumento di IA",
          "name": "Esboço",
          "text": "Un creatore di pagine web con IA: descrivi il sito a parole e ottieni layout, testi e codice in pochi secondi."
        }
      ]
    },
    "about": {
      "title": "Insieme, salpiamo",
      "p1": "Nel XV secolo piccole navi lasciarono il Portogallo per scoprire cosa c’era oltre il bordo della mappa. Ci piace pensare che quello spirito non se ne sia mai andato.",
      "p2": "Siamo un piccolo team indipendente che unisce ingegneria e arte: ci importano il mestiere, la gentilezza nel design e una tecnologia che sembri umana.",
      "cta": "Lavora con noi",
      "cta2": "Conosci il team",
      "values": [
        {
          "t": "Curiosità",
          "d": "Seguiamo le domande verso l’ignoto."
        },
        {
          "t": "Mestiere",
          "d": "Come un azulejo, ogni dettaglio è posato a mano."
        },
        {
          "t": "Calore",
          "d": "La tecnologia dovrebbe somigliare alla luce del sole, non all’abbagliamento."
        }
      ]
    },
    "contact": {
      "title": "Hai un viaggio in mente?",
      "lead": "Raccontaci il tuo gioco, prodotto o idea. Leggiamo ogni messaggio, di solito con un caffè e un pastel de nata.",
      "name": "Il tuo nome",
      "email": "La tua email",
      "message": "Cosa stai sognando?",
      "send": "Invia messaggio",
      "subject": "Ciao da"
    },
    "footer": {
      "cols": [
        {
          "h": "Creiamo",
          "l": [
            "Giochi",
            "App web",
            "Strumenti di IA"
          ]
        },
        {
          "h": "Studio",
          "l": [
            "Chi siamo",
            "Progetti",
            "Contatti"
          ]
        }
      ],
      "made": "Fatto con amore in Portogallo",
      "rights": "Tutti i diritti riservati."
    }
  },
  nl: {
    "meta": {
      "title": "INTELLIMIND — Games, webapps en AI-tools uit Portugal",
      "description": "Een Portugese studio die tijdloze, warme en menselijke games, webapps en AI-tools maakt."
    },
    "a11y": {
      "main": "Hoofdnavigatie",
      "language": "Taal",
      "menu": "Menu",
      "banner": "Gouden uur boven de Taag: een karveel vaart op de zon af langs de heuvels van Lissabon"
    },
    "nav": {
      "what": "Wat we maken",
      "work": "Projecten",
      "studio": "Studio",
      "contact": "Contact"
    },
    "hero": {
      "hello": "Olá, wij zijn",
      "statement": "*INTELLIMIND* is een *Portugese* studio die *games*, *webapps* en *AI-tools* maakt die tijdloos, warm en *menselijk* aanvoelen."
    },
    "explore": {
      "title": "Laten we ontdekken",
      "lead": "Net als de zeevaarders die ooit onze kusten verlieten, blijven we nieuwe routes uitzetten. Ontdek wat we bouwen en hoe het ons dichter bij elkaar kan brengen.",
      "cta": "Ons werk",
      "cta2": "Over ons",
      "more": "Meer weten",
      "items": [
        {
          "key": "games",
          "name": "Games",
          "text": "Warme, ontroerende, prachtig vreemde werelden voor pc, console en mobiel: games die je nog lang na de aftiteling bijblijven."
        },
        {
          "key": "web",
          "name": "Webapps",
          "text": "Snel, toegankelijk en echt prettig in gebruik. Van productsites tot complete platforms, gebouwd voor het open web."
        },
        {
          "key": "ai",
          "name": "AI-tools",
          "text": "Assistenten, automatiseringen en creatieve tools die stilletjes het zware werk doen, altijd met een mens aan het roer."
        }
      ]
    },
    "work": {
      "title": "Reizen onderweg",
      "more": "Meer",
      "status": "In ontwikkeling",
      "items": [
        {
          "kind": "Game",
          "name": "Muralha",
          "text": "Een tower-defensegame met woorden: typ om te schieten, spel om te bouwen en verdedig de muur tegen golven bugs."
        },
        {
          "kind": "Website",
          "name": "Tasca",
          "text": "Een warme, snelle website voor een buurtrestaurant: menu, reserveringen en de geur van vers brood."
        },
        {
          "kind": "AI-tool",
          "name": "Esboço",
          "text": "Een AI-webpaginabouwer: beschrijf de site in gewone woorden en krijg binnen seconden lay-out, teksten en code."
        }
      ]
    },
    "about": {
      "title": "Samen zetten we koers",
      "p1": "In de 15e eeuw verlieten kleine schepen Portugal om te ontdekken wat voorbij de rand van de kaart lag. We denken graag dat die geest nooit is verdwenen.",
      "p2": "Wij zijn een klein, onafhankelijk team dat techniek en kunst combineert: we geven om vakmanschap, vriendelijkheid in ontwerp en technologie die menselijk voelt.",
      "cta": "Werk met ons",
      "cta2": "Maak kennis met het team",
      "values": [
        {
          "t": "Nieuwsgierigheid",
          "d": "We volgen vragen het onbekende in."
        },
        {
          "t": "Vakmanschap",
          "d": "Als een azulejo wordt elk detail met de hand geplaatst."
        },
        {
          "t": "Warmte",
          "d": "Technologie hoort aan te voelen als zonlicht, niet als verblinding."
        }
      ]
    },
    "contact": {
      "title": "Een reis in gedachten?",
      "lead": "Vertel ons over je game, product of idee. We lezen elk bericht, meestal met een koffie en een pastel de nata.",
      "name": "Je naam",
      "email": "Je e-mail",
      "message": "Waar droom je van?",
      "send": "Bericht versturen",
      "subject": "Hallo van"
    },
    "footer": {
      "cols": [
        {
          "h": "Wat we maken",
          "l": [
            "Games",
            "Webapps",
            "AI-tools"
          ]
        },
        {
          "h": "Studio",
          "l": [
            "Over ons",
            "Projecten",
            "Contact"
          ]
        }
      ],
      "made": "Met liefde gemaakt in Portugal",
      "rights": "Alle rechten voorbehouden."
    }
  },
  pl: {
    "meta": {
      "title": "INTELLIMIND — Gry, aplikacje webowe i narzędzia AI z Portugalii",
      "description": "Portugalskie studio tworzące ponadczasowe, ciepłe i ludzkie gry, aplikacje webowe oraz narzędzia AI."
    },
    "a11y": {
      "main": "Nawigacja główna",
      "language": "Język",
      "menu": "Menu",
      "banner": "Złota godzina nad Tagiem: karawela płynie ku słońcu obok lizbońskich wzgórz"
    },
    "nav": {
      "what": "Co robimy",
      "work": "Projekty",
      "studio": "Studio",
      "contact": "Kontakt"
    },
    "hero": {
      "hello": "Olá, jesteśmy",
      "statement": "*INTELLIMIND* to *portugalskie* studio tworzące *gry*, *aplikacje webowe* i *narzędzia AI*, które są ponadczasowe, ciepłe i *ludzkie*."
    },
    "explore": {
      "title": "Odkrywajmy",
      "lead": "Jak żeglarze, którzy kiedyś opuszczali nasze brzegi, wciąż wytyczamy nowe szlaki. Zobacz, co budujemy i jak może nas to zbliżyć.",
      "cta": "Nasze projekty",
      "cta2": "O nas",
      "more": "Dowiedz się więcej",
      "items": [
        {
          "key": "games",
          "name": "Gry",
          "text": "Ciepłe, wzruszające, pięknie dziwne światy na PC, konsole i telefony – gry, które pamięta się długo po napisach końcowych."
        },
        {
          "key": "web",
          "name": "Aplikacje webowe",
          "text": "Szybkie, dostępne i naprawdę przyjemne w użyciu. Od stron produktowych po pełne platformy, stworzone dla otwartego internetu."
        },
        {
          "key": "ai",
          "name": "Narzędzia AI",
          "text": "Asystenci, automatyzacje i narzędzia kreatywne, które po cichu wykonują ciężką pracę – zawsze z człowiekiem za sterem."
        }
      ]
    },
    "work": {
      "title": "Rejsy w toku",
      "more": "Więcej",
      "status": "W produkcji",
      "items": [
        {
          "kind": "Gra",
          "name": "Muralha",
          "text": "Gra tower defense ze słowami: pisz, by strzelać, układaj słowa, by budować, i broń muru przed falami bugów."
        },
        {
          "kind": "Strona www",
          "name": "Tasca",
          "text": "Ciepła, szybka strona dla osiedlowej restauracji – menu, rezerwacje i zapach świeżego chleba."
        },
        {
          "kind": "Narzędzie AI",
          "name": "Esboço",
          "text": "Kreator stron www z AI: opisz stronę prostymi słowami i w kilka sekund dostań układ, teksty i kod."
        }
      ]
    },
    "about": {
      "title": "Razem wypływamy",
      "p1": "W XV wieku małe statki wypłynęły z Portugalii, by sprawdzić, co leży za krawędzią mapy. Lubimy myśleć, że ten duch nigdy nie zniknął.",
      "p2": "Jesteśmy małym, niezależnym zespołem łączącym inżynierię ze sztuką – dbamy o rzemiosło, życzliwość w projektowaniu i technologię, która jest ludzka.",
      "cta": "Pracuj z nami",
      "cta2": "Poznaj zespół",
      "values": [
        {
          "t": "Ciekawość",
          "d": "Podążamy za pytaniami w nieznane."
        },
        {
          "t": "Rzemiosło",
          "d": "Jak azulejo – każdy szczegół jest układany ręcznie."
        },
        {
          "t": "Ciepło",
          "d": "Technologia powinna przypominać światło słoneczne, nie oślepiać."
        }
      ]
    },
    "contact": {
      "title": "Masz w głowie rejs?",
      "lead": "Opowiedz nam o swojej grze, produkcie lub pomyśle. Czytamy każdą wiadomość – zwykle przy kawie i pastel de nata.",
      "name": "Twoje imię",
      "email": "Twój e-mail",
      "message": "O czym marzysz?",
      "send": "Wyślij wiadomość",
      "subject": "Cześć od"
    },
    "footer": {
      "cols": [
        {
          "h": "Tworzymy",
          "l": [
            "Gry",
            "Aplikacje webowe",
            "Narzędzia AI"
          ]
        },
        {
          "h": "Studio",
          "l": [
            "O nas",
            "Projekty",
            "Kontakt"
          ]
        }
      ],
      "made": "Zrobione z miłością w Portugalii",
      "rights": "Wszelkie prawa zastrzeżone."
    }
  }
} as const

export const useLang = () => {
  const cookie = useCookie<Lang>('lang', { maxAge: 60 * 60 * 24 * 365, sameSite: 'lax' })
  const lang = useState<Lang>('lang', () => {
    if (cookie.value && LANGS.some((l) => l.code === cookie.value)) return cookie.value
    // first visit: follow the browser language
    const header = import.meta.server
      ? (useRequestHeaders(['accept-language'])['accept-language'] ?? '').split(',')[0] ?? ''
      : navigator.language
    return detect(header)
  })
  watch(lang, (v) => (cookie.value = v))
  return lang
}

export const useContent = () => {
  const lang = useLang()
  return computed(() => content[lang.value])
}
