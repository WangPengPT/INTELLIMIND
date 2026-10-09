export type Lang = 'en' | 'pt'

const content = {
  en: {
    nav: { what: 'What we make', work: 'Work', studio: 'Studio', contact: 'Contact' },
    hero: {
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
        { kind: 'Game', name: 'Saudade', text: 'A gentle exploration game about a lighthouse keeper and the sea that remembers.' },
        { kind: 'Web App', name: 'Fio', text: 'A collaborative canvas where teams weave ideas together, thread by thread.' },
        { kind: 'AI Tool', name: 'Farol', text: 'An AI companion that lights the way through your documents and daily work.' }
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
      send: 'Send message'
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
    nav: { what: 'O que fazemos', work: 'Projetos', studio: 'Estúdio', contact: 'Contacto' },
    hero: {
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
        { kind: 'Jogo', name: 'Saudade', text: 'Um jogo de exploração sereno sobre um faroleiro e o mar que se lembra de tudo.' },
        { kind: 'App Web', name: 'Fio', text: 'Uma tela colaborativa onde equipas tecem ideias, fio a fio.' },
        { kind: 'Ferramenta IA', name: 'Farol', text: 'Um companheiro de IA que ilumina o caminho pelos teus documentos e tarefas.' }
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
      send: 'Enviar mensagem'
    },
    footer: {
      cols: [
        { h: 'Criamos', l: ['Jogos', 'Aplicações Web', 'Ferramentas de IA'] },
        { h: 'Estúdio', l: ['Sobre Nós', 'Projetos', 'Contacto'] }
      ],
      made: 'Feito com amor em Portugal',
      rights: 'Todos os direitos reservados.'
    }
  }
} as const

export const useLang = () => useState<Lang>('lang', () => 'en')

export const useContent = () => {
  const lang = useLang()
  return computed(() => content[lang.value])
}
