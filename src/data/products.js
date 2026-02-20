// ─────────────────────────────────────────────────────
//  src/data/products.js
//  ⚠️  EDITE AQUI para adicionar produtos ou mudar textos
//
//  Para adicionar produto: copie um objeto, mude o id,
//  e adicione as fotos no array "photos".
// ─────────────────────────────────────────────────────

// ── Número do WhatsApp (somente números, com DDI) ──────
export const WHATSAPP_NUMBER = '5521998011249'

// ── Mensagem padrão do botão flutuante ────────────────
export const WHATSAPP_DEFAULT_MESSAGE =
  'Olá! Vi o site e gostaria de solicitar um orçamento!'

// ── Produtos ───────────────────────────────────────────
const products = [
  {
    id: 'bolos',
    emoji: '🎂',
    title: 'Topos de Bolo',
    description:
      'Topos personalizados para tornar seu bolo ainda mais especial. Disponível em diversos temas, cores e formatos.',
    tags: ['Aniversário', 'Casamento', 'Infantil'],
    whatsappMessage: 'Olá! Gostaria de um orçamento para Topo de Bolo personalizado 🎂',
    photos: [
      { name: 'Topo Princesa',    subtitle: 'Tema Infantil – Circo Rosa', emoji: '🎂', colorIndex: 1 },
      { name: 'Topo Floral',      subtitle: 'Casamento Delicado',         emoji: '🌸', colorIndex: 2 },
      { name: 'Topo com Nome',    subtitle: 'Com nome e data',            emoji: '✨', colorIndex: 3 },
      { name: 'Topo Unicórnio',   subtitle: 'Festa Mágica',               emoji: '🦄', colorIndex: 4 },
      { name: 'Topo Borboleta',   subtitle: 'Jardim Encantado',           emoji: '🦋', colorIndex: 5 },
      { name: 'Topo Balões',      subtitle: 'Festa Colorida',             emoji: '🎈', colorIndex: 6 },
    ],
  },
  {
    id: 'natal',
    emoji: '🎄',
    title: 'Bolinhas de Natal',
    description:
      'Bolinhas de Natal únicas com nomes, datas e ilustrações personalizadas. O presente perfeito para a família.',
    tags: ['Natal', 'Presente', 'Família'],
    whatsappMessage: 'Olá! Gostaria de um orçamento para Bolinhas de Natal personalizadas 🎄',
    photos: [
      { name: 'Bolinha Família',  subtitle: 'Com nomes dos membros',  emoji: '🎄', colorIndex: 2 },
      { name: 'Bolinha Pet',      subtitle: 'Com o nome do bichinho', emoji: '🐾', colorIndex: 1 },
      { name: 'Bolinha Casal',    subtitle: 'Natal especial a dois',  emoji: '❤️', colorIndex: 4 },
      { name: 'Bolinha Bebê',     subtitle: 'Primeiro Natal',         emoji: '👶', colorIndex: 3 },
      { name: 'Kit Família',      subtitle: 'Conjunto com 4 peças',   emoji: '🎁', colorIndex: 5 },
      { name: 'Bolinha Kids',     subtitle: 'Personagem favorito',    emoji: '⭐', colorIndex: 6 },
    ],
  },
  {
    id: 'pascoa',
    emoji: '🐣',
    title: 'Capas de Chocolate Páscoa',
    description:
      'Embalagens criativas para ovos de Páscoa com personagens, temas e mensagens à sua escolha.',
    tags: ['Páscoa', 'Chocolate', 'Criativo'],
    whatsappMessage: 'Olá! Gostaria de um orçamento para Capas de Chocolate de Páscoa 🐣',
    photos: [
      { name: 'Capa Coelhinho',   subtitle: 'Clássico da Páscoa',         emoji: '🐰', colorIndex: 3 },
      { name: 'Capa Princesa',    subtitle: 'Tema Princesa',               emoji: '👑', colorIndex: 1 },
      { name: 'Capa Dinossauro',  subtitle: 'Para aventureiros',           emoji: '🦕', colorIndex: 5 },
      { name: 'Capa Floresta',    subtitle: 'Animais da floresta',         emoji: '🌿', colorIndex: 4 },
      { name: 'Capa com Foto',    subtitle: 'Foto e nome personalizados',  emoji: '📸', colorIndex: 2 },
      { name: 'Capa Aquarela',    subtitle: 'Arte delicada',               emoji: '🎨', colorIndex: 6 },
    ],
  },
  {
    id: 'agendas',
    emoji: '📔',
    title: 'Agendas Personalizadas',
    description:
      'Agendas com capa e conteúdo totalmente personalizados para uso pessoal, corporativo ou como brinde.',
    tags: ['Corporativo', 'Brinde', 'Planejamento'],
    whatsappMessage: 'Olá! Gostaria de um orçamento para Agenda personalizada 📔',
    photos: [
      { name: 'Agenda Floral',      subtitle: 'Capa aquarela delicada', emoji: '📔', colorIndex: 4 },
      { name: 'Agenda Corporativa', subtitle: 'Logo da empresa',        emoji: '💼', colorIndex: 2 },
      { name: 'Agenda Minimalista', subtitle: 'Clean e elegante',       emoji: '✏️', colorIndex: 1 },
      { name: 'Agenda Kids',        subtitle: 'Para crianças',          emoji: '🎒', colorIndex: 6 },
      { name: 'Agenda Viagem',      subtitle: 'Diário de aventuras',    emoji: '✈️', colorIndex: 5 },
      { name: 'Agenda Fitness',     subtitle: 'Metas e treinos',        emoji: '💪', colorIndex: 3 },
    ],
  },
]

export const TESTIMONIALS = [
  {
    id: 1,
    stars: '⭐⭐⭐⭐⭐',
    text: 'O topo de bolo ficou incrível! Muito melhor do que eu imaginava. Super recomendo!',
    author: 'Ana Paula',
  },
  {
    id: 2,
    stars: '⭐⭐⭐⭐⭐',
    text: 'Encomendei agendas para todo o escritório. Profissionalismo e qualidade impecáveis.',
    author: 'Marcos Vinicius',
  },
  {
    id: 3,
    stars: '⭐⭐⭐⭐⭐',
    text: 'As bolinhas de Natal ficaram lindíssimas! A família toda adorou o presente personalizado.',
    author: 'Juliana Costa',
  },
]

export const HOW_IT_WORKS = [
  { number: '01', title: 'Fale conosco',  description: 'Entre em contato pelo WhatsApp e nos conte o que você precisa.' },
  { number: '02', title: 'Personalizamos', description: 'Nossa equipe cria um design exclusivo para o seu pedido.' },
  { number: '03', title: 'Aprovação',     description: 'Você aprova a arte antes de darmos início à produção.' },
  { number: '04', title: 'Entregamos',    description: 'Seu pedido chega com segurança e no prazo combinado.' },
]

export default products
