import { v4 as uuidv4, v4 } from 'uuid';
import {
  AlertTriangle, Lightbulb, ThumbsUp,
  Navigation, Route, Trophy,
  Clock, MapPin, HandCoins, Users,
  Rocket, Globe2, Globe, Info
} from "lucide-react";
import { EventsInterface } from "../types/EventsInterface";
import { RestaurantInterface } from '../types/Restaurants';
export const eventsToParticipate = [
  { title: "Próximo evento aqui", date: "Sem data" },
  { title: "Próximo evento aqui", date: "Sem data" },
];

// src/data/content.ts


// 🔹 Cards da seção de destaque (home)
export const highlightCards = (navigate: (path: string) => void) => [
  {
    title: "Artigos e Insights",
    description: "Explore conteúdos sobre inovação, turismo e experiências exclusivas.",
    action: "Ler artigos",
    onClick: () => navigate("/artigos"),
    gradient: "from-[#6A4CFF] to-[#4B33D9]",
    glow: "shadow-[0_0_12px_rgba(75,51,217,0.6)]",
  },
  {
    title: "Próximos Eventos",
    description: "Confira as datas, locais e garanta sua participação nas próximas edições.",
    action: "Ver eventos",
    onClick: () => navigate("/eventos"),
    gradient: "from-[#6A4CFF] to-[#4B33D9]",
    glow: "shadow-[0_0_12px_rgba(75,51,217,0.6)]",
  },
  {
    title: "Desconto Especial",
    description: "Garanta o passe e receba 20% de desconto em cada um!",
    action: "Aproveitar oferta",
    onClick: () => navigate("/promocao"),
    gradient: "from-[#6A4CFF] to-[#4B33D9]",
    glow: "shadow-[0_0_12px_rgba(75,51,217,0.6)]",
  },
];

// 🔹 Projeções de crescimento
export const projections = [
  { label: "2026", value: "R$ 30K" },
  { label: "2027", value: "R$ 200K" },
  { label: "2028", value: "R$ 1M" },
];

// 🔹 Membros da equipe
export const members = [
  { name: "Renan Ramalho", role: "CEO" },
  { name: "Lucas Jores", role: "COO" },
  { name: "Alessandro Carvalho", role: "CTO" },
  { name: "Gioconda Alfaro", role: "CBO" },
  { name: "Helena Araújo", role: "CHRO" },
  { name: "Joelise Amaral", role: "CMO" },
  { name: "Zamira Fiss", role: "CPO" },
];

// 🔹 Cards de problema e solução
export const problemCards = [
  {
    title: "O Problema",
    text: "Muitos turistas enfrentam dificuldades com a centralização e confiabilidade nas informações de locais turísticos e estabelecimentos.",
    icon: <AlertTriangle size={48} className="text-[#4B33D9] mb-4" />,
  },
  {
    title: "Nossa Solução",
    text: "O Guiaí centraliza todas as informações turísticas em um só lugar de forma confiável, permitindo que os próprios usuários contribuam para a qualidade dos dados.",
    icon: <Lightbulb size={48} className="text-[#4B33D9] mb-4" />,
  },
  {
    title: "Por que Usar o Guiaí?",
    text: "Com planos de desconto e bônus por participação na comunidade, entregamos uma experiência única, confiável e participativa.",
    icon: <ThumbsUp size={48} className="text-[#4B33D9] mb-4" />,
  },
];

// 🔹 Funcionalidades / Planos
export const plans = [
  {
    icon: <Navigation size={40} className="text-[#4B33D9]" />,
    title: "Mapas Interativos",
    text: "Descubra atrações próximas e navegue com facilidade por experiências locais.",
  },
  {
    icon: <Route size={40} className="text-[#4B33D9]" />,
    title: "Roteiros Personalizados",
    text: "Monte sua própria jornada com base em seus interesses e tempo disponível.",
  },
  {
    icon: <Trophy size={40} className="text-[#4B33D9]" />,
    title: "Gamificação e Recompensas",
    text: "Ganhe pontos, conquiste badges e receba benefícios exclusivos ao participar.",
  },
];

// 🔹 Impacto do projeto
export const impactCards = [
  { icon: <Clock size={40} className="text-[#4B33D9] mb-4" />, title: "Agilidade", text: "Redução do tempo de busca por informações confiáveis." },
  { icon: <MapPin size={40} className="text-[#4B33D9] mb-4" />, title: "Turismo Regional", text: "Fortalecimento do turismo e da identidade local." },
  { icon: <HandCoins size={40} className="text-[#4B33D9] mb-4" />, title: "Economia Local", text: "Incentivo aos pequenos empreendedores e negócios da região." },
  { icon: <Users size={40} className="text-[#4B33D9] mb-4" />, title: "Engajamento", text: "Comunidade ativa com contribuições e recompensas." },
];

// 🔹 Reconhecimentos
export const recognitionCards = [
  { icon: <Trophy size={40} className="text-[#4B33D9] mb-4" />, title: "1º lugar", text: "Startup Weekend Pelotas" },
  { icon: <Rocket size={40} className="text-[#4B33D9] mb-4" />, title: "Programas de Aceleração", text: "Participação em iniciativas para startups inovadoras" },
  { icon: <Globe2 size={40} className="text-[#4B33D9] mb-4" />, title: "Parcerias Locais", text: "Secretarias de turismo e empreendedores regionais" },
];

// 🔹 Eventos
export const events = [
  {
    title: "Encontro de Inovação X",
    date: "23 de Novembro, 2025",
    location: "Café Joaquina - Pelotas",
    description:
      "Um encontro exclusivo para mentes inovadoras! Conecte-se com líderes em tecnologia, turismo e experiências criativas. Compartilhe ideias, descubra novas oportunidades e amplie seu networking.",
    short: "Conecte-se com líderes em tecnologia, turismo e inovação.",
    image: "/coffe-2.jpg",
    code: "evento-x",
  },
  {
    title: "Experiência Inovadora Y",
    date: "24 de Novembro, 2025",
    location: "Café Arlequim - Pelotas",
    description:
      "Mergulhe em um ambiente repleto de criatividade e colaboração. O evento Y traz workshops, painéis e apresentações de startups que estão transformando o mercado de turismo e inovação.",
    short: "Networking, ideias e oportunidades em um ambiente criativo.",
    image: "/coffe-1.jpeg",
    code: "evento-y",
  },
];

// 🔹 Informações institucionais
export const infoCards = [
  { title: "Nossa História", text: "O Guiaí nasceu para revolucionar o turismo, conectando pessoas, lugares e experiências através da tecnologia.", icon: <Globe size={40} className="text-[#4B33D9]" /> },
  { title: "Missão", text: "Conectar turistas e comunidades locais, promovendo o turismo sustentável e cultural.", icon: <Rocket size={40} className="text-[#4B33D9]" /> },
  { title: "Valores", text: "Confiança, colaboração, inovação e valorização da cultura regional.", icon: <Users size={40} className="text-[#4B33D9]" /> },
  { title: "Visão", text: "Ser referência nacional em experiências turísticas autênticas e colaborativas.", icon: <Info size={40} className="text-[#4B33D9]" /> },
];
export const mockLocations = [
  {
    id: "castelo-imperador",
    name: "Castelo do Imperador",
    image:
      "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=800&q=60",
    description:
      "Um dos pontos turísticos mais icônicos, com visitas guiadas e experiência imersiva na história do império.",
  },
  {
    id: "museu-arte",
    name: "Museu da Arte Antiga",
    image:
      "https://images.unsplash.com/photo-1529429611273-4f0b3e0cfd3b?auto=format&fit=crop&w=800&q=60",
    description:
      "Coleção única de arte clássica, exposições temporárias e visitas guiadas exclusivas.",
  },
  {
    id: "parque-real",
    name: "Parque Real",
    image:
      "https://images.unsplash.com/photo-1543340900-1bf87b6b2c6b?auto=format&fit=crop&w=800&q=60",
    description:
      "Jardins históricos com lagos, esculturas e passeios guiados com especialistas em botânica.",
  },
  {
    id: "mirante-sol",
    name: "Mirante do Sol",
    image:
      "https://images.unsplash.com/photo-1533055640609-24b498cdf2ef?auto=format&fit=crop&w=800&q=60",
    description:
      "Vista panorâmica da cidade com trilhas, cafeterias e tours fotográficos ao entardecer.",
  },
];
export const featuredCreator = {
  id: "creator1",
  name: "Ana Lima",
  handle: "@ana.lifestyle",
  avatar:
    "https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=600&q=80",
  videoUrl: "https://www.instagram.com/reel/Cs5bkdFGJj1/embed", // exemplo de vídeo embed do Instagram
  bio: "Criadora de conteúdo de lifestyle e gastronomia. Parceira oficial dos eventos Gourmeet.",
};
export const mockRestaurants: RestaurantInterface[] = [
  {
    id: v4(),
    name: "Bistrô do Sabor",
    location: "Centro - São Paulo, SP",
    image: "https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&w=800&q=60",
    description: "Culinária contemporânea com toque brasileiro e ambiente acolhedor.",
  },
  {
    id: v4(),
    name: "La Tavola Italiana",
    location: "Jardins - São Paulo, SP",
    image: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=800&q=60",
    description: "Autêntica cozinha italiana com massas artesanais e vinhos selecionados.",
  },
  {
    id: v4(),
    name: "Sushi Garden",
    location: "Moema - São Paulo, SP",
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=60",
    description: "Experiência japonesa premium com ingredientes frescos e ambiente zen.",
  },
  {
    id: v4(),
    name: "Churrascaria do Chef",
    location: "Pinheiros - São Paulo, SP",
    image: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=800&q=60",
    description: "Carnes nobres preparadas no ponto ideal, com buffet completo.",
  },
];

export const mockEvents: EventsInterface[] = [
  {
    id: v4(),
    title: "Encontro de Inovação X",
    date: "23 de Novembro, 2025",
    location: "Café Joaquina - Pelotas",
    description:
      "Um encontro exclusivo para mentes inovadoras! Conecte-se com líderes em tecnologia, turismo e experiências criativas. Compartilhe ideias, descubra novas oportunidades e amplie seu networking.",
    short: "Conecte-se com líderes em tecnologia, turismo e inovação.",
    image: "/coffe-2.jpg",
    code: "evento-x",
  },
  {
    id: v4(),
    title: "Experiência Inovadora Y",
    date: "24 de Novembro, 2025",
    location: "Café Arlequim - Pelotas",
    description:
      "Mergulhe em um ambiente repleto de criatividade e colaboração. O evento Y traz workshops, painéis e apresentações de startups que estão transformando o mercado de turismo e inovação.",
    short: "Networking, ideias e oportunidades em um ambiente criativo.",
    image: "/coffe-1.jpeg",
    code: "evento-y",
  },
  {
    id: v4(),
    title: "Festival Criativo Z",
    date: "12 de Dezembro, 2025",
    location: "Espaço Alpha - Pelotas",
    description:
      "Um festival que reúne arte, tecnologia e inovação para inspirar novos projetos e conexões entre empreendedores criativos.",
    short: "Arte, tecnologia e inspiração em um só lugar.",
    image: "/coffe-3.jpg",
    code: "evento-z",
  },
  {
    id: v4(),
    title: "Hackathon SulTech",
    date: "15 de Janeiro, 2026",
    location: "TechHub - Porto Alegre",
    description:
      "Participe do maior hackathon da região sul! Monte sua equipe e crie soluções tecnológicas para desafios reais.",
    short: "Crie soluções inovadoras e concorra a prêmios.",
    image: "/coffe-4.jpg",
    code: "hack-sultech",
  },
  {
    id: v4(),
    title: "Fórum de Empreendedorismo Criativo",
    date: "10 de Fevereiro, 2026",
    location: "Auditório Central - Pelotas",
    description:
      "Um espaço para trocar experiências, aprender com cases de sucesso e fortalecer o ecossistema criativo local.",
    short: "Empreendedorismo e criatividade em pauta.",
    image: "/coffe-5.jpg",
    code: "forum-criativo",
  },
  // --- novos mockados ---
  {
    id: v4(),
    title: "Summit Tech Experience",
    date: "5 de Março, 2026",
    location: "Centro de Inovação - Florianópolis",
    description:
      "Um encontro de líderes em tecnologia e startups para discutir o futuro da inovação e das experiências digitais.",
    short: "Conecte-se com startups e especialistas em tecnologia.",
    image: "/tech-1.jpg",
    code: "summit-tech",
  },
  {
    id: v4(),
    title: "Conferência Turismo Inteligente",
    date: "20 de Março, 2026",
    location: "Hotel Palace - Gramado",
    description:
      "Explore as tendências do turismo inteligente e como a tecnologia está revolucionando a experiência dos viajantes.",
    short: "Turismo, tecnologia e sustentabilidade em um só evento.",
    image: "/travel-1.jpg",
    code: "turismo-inteligente",
  },
  {
    id: v4(),
    title: "Design Thinking Experience",
    date: "10 de Abril, 2026",
    location: "Espaço Criar - São Paulo",
    description:
      "Um workshop intensivo de design thinking para resolver problemas complexos com criatividade e colaboração.",
    short: "Aprenda design thinking com dinâmicas práticas e inspiradoras.",
    image: "/design-1.jpg",
    code: "design-thinking",
  },
  {
    id: v4(),
    title: "Semana da Inovação Acadêmica",
    date: "25 de Abril, 2026",
    location: "Universidade Federal de Pelotas",
    description:
      "Professores, pesquisadores e alunos se reúnem para compartilhar projetos e ideias sobre o futuro da educação.",
    short: "Educação e tecnologia unidas em uma semana de troca e aprendizado.",
    image: "/education-1.jpg",
    code: "inovacao-academica",
  },
  {
    id: v4(),
    title: "Startup Day 2026",
    date: "14 de Maio, 2026",
    location: "Auditório Sebrae - Porto Alegre",
    description:
      "Apresentações, mentorias e oportunidades de investimento para startups em crescimento no sul do país.",
    short: "Um dia inteiro de inovação, networking e negócios.",
    image: "/startup-1.jpg",
    code: "startup-day",
  },
  {
    id: v4(),
    title: "Festival Criativo Digital",
    date: "30 de Maio, 2026",
    location: "CineArt - Curitiba",
    description:
      "Explore o universo das mídias digitais, audiovisual e experiências imersivas com especialistas do setor.",
    short: "Audiovisual e inovação digital em destaque.",
    image: "/digital-1.jpg",
    code: "festival-digital",
  },
  {
    id: v4(),
    title: "Women in Tech Summit",
    date: "12 de Junho, 2026",
    location: "Casa da Inovação - São Paulo",
    description:
      "Um evento dedicado ao protagonismo feminino na tecnologia, com palestras, painéis e mentorias.",
    short: "Mulheres inspirando o futuro da tecnologia.",
    image: "/women-tech.jpg",
    code: "women-tech",
  },
];

