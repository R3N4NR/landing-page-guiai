Guiaí - Web App

Guiaí é uma plataforma digital voltada para turismo regional, conectando turistas, estabelecimentos e experiências locais de forma colaborativa e autêntica. O projeto oferece funcionalidades como carrosséis informativos, gamificação, mapas interativos e planos de fidelidade.

Sumário

Tecnologias

Estrutura de Componentes

Funcionalidades

Carrosséis

Estilos e UX

Como Rodar

Tecnologias

React 18

TypeScript

TailwindCSS

Framer Motion (animações)

React Slick (carrossel mobile)

Lucide React (ícones)

Estrutura de Componentes

Todos os nomes de componentes estão em inglês. Os textos permanecem em português.

Layout Principal

SaibaMaisPage.tsx: Página principal “Saiba Mais”

HeaderSection – header com logo e glow roxo orgânico

InfoCardCarousel – carrossel 3D de informações (desktop)

MobileInfoCarousel – carrossel simples automático (mobile)

ImpactBenefits – cards de impacto e depoimento

RecognitionAchievements – cards de conquistas e reconhecimento

FuturePlans – planos futuros com cards

JoinUs – chamada para parceiros e newsletter

Footer – rodapé

Cards e Seções

Info Cards

title, text, icon

Desktop: carrossel 3D rotativo

Mobile: slider automático React Slick

Impact Cards

Ícones: Clock, MapPin, HandCoins, Users

Cards com fundo semi-transparente roxo, efeito radial e glow amarelo ao hover

Eventos Futuros & Projeções de Faturamento

Cards com contorno luminescente no hover

Fundo branco, textos em roxo (Projeções)

TroubleShooting

Cards com fundo branco, contorno roxo, textos roxos, hover com glow

Header

Fundo branco

Glow orgânico roxo atrás da logo

Texto principal roxo, link de retorno com hover animado

Funcionalidades

Carrossel Desktop 3D (InfoCardCarousel)

Rotativo automático

Drag com mouse

Pausa e play

Expande card ao clicar

Carrossel Mobile (MobileInfoCarousel)

Slider automático via React Slick

Dots visíveis

Estático em desktop

Gamificação

Pontos e badges (cards de impacto)

Planos Futuros

Cards com glow suave

Expansão futura da plataforma

Responsividade

Layout adaptativo com Tailwind (md:hidden para mobile carrossel)

Carrosséis
Desktop – 3D

InfoCardCarousel com rotação automática

Drag horizontal

Card ativo com blur no fundo

Pausa/Play com botão

Mobile – Slider

MobileInfoCarousel usando React Slick

Autoplay, transições suaves, dots

Cards estilizados conforme desktop, mas simples

Estilos e UX

Paleta de cores

Roxo: #4B33D9

Amarelo: #F2E205

Branco: #FFFFFF

Glow e efeitos

Cards: glow luminoso no hover

Header: glow orgânico roxo atrás da logo

Projeções e eventos: contorno luminescente

Tipografia

Fonte: sans via Tailwind

Pesos e tamanhos variáveis (text-xl, text-3xl, text-5xl)

Botões

Hover animado (cor e background swap)

Sombra e leve crescimento (scale-105)

Como Rodar

Instalar dependências:

npm install


Instalar React Slick e estilos:

npm install react-slick slick-carousel


Rodar aplicação:

npm start


Estrutura de pastas esperada:

src/
 ├─ components/
 │   ├─ LearnMore/
 │   │   ├─ HeaderSection.tsx
 │   │   ├─ InfoCardCarousel.tsx
 │   │   ├─ MobileInfoCarousel.tsx
 │   │   ├─ ImpactBenefits.tsx
 │   │   ├─ RecognitionAchievements.tsx
 │   │   ├─ FuturePlans.tsx
 │   │   └─ JoinUs.tsx
 │   └─ IndexComponents/
 │       └─ Footer.tsx
 └─ pages/
     └─ SaibaMaisPage.tsx