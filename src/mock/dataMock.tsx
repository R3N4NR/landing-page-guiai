import { 
  AlertTriangle, Lightbulb, ThumbsUp, 
  Navigation, Route, Trophy, 
  Clock, MapPin, HandCoins, Users, 
  Rocket, Globe2, Globe, Info 
} from "lucide-react";
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
