import { motion } from "framer-motion";

export default function LandingPage() {
  return (
    <div className="font-sans text-white bg-white">

      {/* Hero */}
      <section className="relative h-screen flex flex-col justify-center items-center text-center px-6" style={{ color: "#F2E205" }}>
        <img src="/logo.png" alt="Logo Guiaí" className="mb-6 w-40 md:w-48" />
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Bem-vindo ao <span>Guiaí</span>
        </h1>
        <p className="text-lg md:text-2xl mb-6 max-w-2xl text-gray-800">
          Conectando pessoas, lugares e experiências com confiança.
        </p>

        <div className="flex gap-4 justify-center">
          <button
            className="px-6 py-3 rounded-lg font-semibold transition"
            style={{ backgroundColor: "#F2E205", color: "#4B33D9" }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "#4B33D9";
              e.currentTarget.style.color = "#F2E205";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "#F2E205";
              e.currentTarget.style.color = "#4B33D9";
            }}
          >
            Saiba Mais
          </button>

          <button
            className="px-6 py-3 rounded-lg font-semibold border transition"
            style={{ borderColor: "#F2E205", color: "#F2E205" }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "#4B33D9";
              e.currentTarget.style.color = "#F2E205";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "transparent";
              e.currentTarget.style.color = "#F2E205";
            }}
          >
            Entre em Contato
          </button>
        </div>
      </section>

      {/* Seção Como Surgiu */}
      <section className="py-24 px-6" style={{ backgroundColor: "#4B33D9" }}>
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12" style={{ color: "#F2E205" }}>
            Como Surgiu
          </h2>
          <p className="text-lg md:text-xl text-white">
            Nossa startup nasceu da vontade de resolver a centralização da informação do turismo e experiência do turista usando inovação tecnológica.
            Tudo começou no Startup Weekend Pelotas com uma equipe dedicada e com visão de futuro.
            Fomos o 1º lugar nesse evento, o que nos levou a continuar a construção dessa Startup.
          </p>
        </div>
      </section>

      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12" style={{ color: "#F2E205" }}>
            Qual Problema Nosso Produto Resolve?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-center">
            {[
              {
                title: "O Problema",
                text: "Muitos turistas enfrentam dificuldades com a centralização e confiabilidade nas informações de locais turísticos e estabelecimentos. Isso gera frustração e atrapalha a experiência do usuário.",
              },
              {
                title: "Nossa Solução",
                text: "O Guiaí centraliza todas as informações turísticas em um só lugar de forma confiável, permitindo que os próprios usuários contribuam para a qualidade dos dados.",
              },
              {
                title: "Por que Usar o Guiaí?",
                text: "Com planos de desconto e bônus por participação na comunidade, entregamos uma experiência única, confiável e participativa.",
              },
            ].map((card) => (
              <div key={card.title} className="p-6 rounded-xl transition hover:scale-105" style={{ backgroundColor: "#4B33D9" }} >
                <h3 className="text-xl font-semibold mb-4" style={{ color: "#F2E205" }}>{card.title}</h3>
                <p className="text-white">{card.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Time */}
      <section className="py-24 px-6" style={{ backgroundColor: "#4B33D9" }}>
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12" style={{ color: "#F2E205" }}>
            Nosso Time
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 justify-center">
            {[
              { name: "Renan Ramalho", role: "CEO" },
              { name: "Lucas Jores", role: "COO" },
              { name: "Alessandro Carvalho", role: "CTO" },
              { name: "Gioconda Alfaro", role: "CBO" },
              { name: "Helena Araújo", role: "CHRO" },
              { name: "Joelise Amaral", role: "CMO" },
              { name: "Zamira Fiss", role: "CPO" },
            ].map((member) => (
              <div key={member.name} className="flex flex-col items-center text-center">
                <img
                  src=""
                  alt={member.name}
                  className="w-40 h-40 rounded-full mb-4 object-cover border-4"
                  style={{ borderColor: "#F2E205" }}
                />
                <h3 className="font-semibold text-xl" style={{ color: "#F2E205" }}>{member.name}</h3>
                <p className="text-white">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Objetivo */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12" style={{ color: "#F2E205" }}>
            Nosso Objetivo
          </h2>
          <p className="text-lg md:text-xl text-gray-900">
            Conectar pessoas ao turismo e à cultura, contribuindo para o reconhecimento da cultura regional.
          </p>
        </div>
      </section>

      {/* Eventos */}
      <section className="py-24 px-6" style={{ backgroundColor: "#4B33D9" }}>
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12" style={{ color: "#F2E205" }}>
            Eventos Futuros
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-center">
            {[{ title: "Próximo evento aqui", date: "Sem data" },
            { title: "Próximo evento aqui", date: "Sem data" }]
              .map((event) => (
                <div key={event.title} className="bg-white/10 p-6 rounded-xl text-center transition hover:scale-105">
                  <h3 className="text-xl font-semibold mb-2" style={{ color: "#F2E205" }}>{event.title}</h3>
                  <p className="text-white">{event.date}</p>
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* Faturamento */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12" style={{ color: "#F2E205" }}>
            Projeções de Faturamento
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-center" style={{ color: "#F2E205" }}>
            {[{ label: "2026", value: "R$ 30K" },
            { label: "2027", value: "R$ 200K" },
            { label: "2028", value: "R$ 1M" }]
              .map((item) => (
                <div key={item.label} className="p-6 rounded-xl transition hover:scale-105" style={{ backgroundColor: "#4B33D9" }}>
                  <h3 className="text-xl font-semibold mb-2" style={{ color: "#F2E205" }}>{item.label}</h3>
                  <p className="text-2xl md:text-3xl font-bold ">{item.value}</p>
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 text-center text-white/70" style={{ backgroundColor: "#4B33D9" }}>
        © {new Date().getFullYear()} Guiaí. Todos os direitos reservados.
      </footer>
    </div>
  );
}
