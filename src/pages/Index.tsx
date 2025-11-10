import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { AlertTriangle, Lightbulb, Target, ThumbsUp } from "lucide-react";

export default function Index() {
    const navigate = useNavigate();

    return (
        <div className="font-sans text-white bg-white">

            {/* Hero */}
            <section
                className="relative h-screen flex flex-col justify-center items-center text-center px-6 overflow-hidden"
                style={{
                    color: "#F2E205",
                    background: "radial-gradient(circle at 50% 30%, #4B33D9 0%, #1B0B70 100%)",
                }}
            >
                <img src="/logo-alt.png" alt="Logo Guiaí" className="mb-6 w-64 md:w-80 drop-shadow-lg" />
                <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-xl">
                    Bem-vindo ao <span>Guiaí</span>
                </h1>
                <p className="text-lg md:text-2xl mb-6 max-w-2xl text-gray-100 drop-shadow-md">
                    Conectando pessoas, lugares e experiências com confiança.
                </p>

                <div className="flex gap-4 justify-center">
                    <button
                        className="px-6 py-3 rounded-lg font-semibold transition duration-300 shadow-md"
                        style={{ backgroundColor: "#F2E205", color: "#4B33D9" }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.backgroundColor = "#4B33D9";
                            e.currentTarget.style.color = "#F2E205";
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.backgroundColor = "#F2E205";
                            e.currentTarget.style.color = "#4B33D9";
                        }}
                        onClick={() => navigate("/saiba-mais")}
                    >
                        Saiba Mais
                    </button>

                    <button
                        className="px-6 py-3 rounded-lg font-semibold border transition duration-300"
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

            {/* Como Surgiu */}
            <section className="py-24 px-6 bg-[#4B33D9]">
                <div className="max-w-5xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-8 text-[#F2E205]">Como Surgiu</h2>
                    <p className="text-lg md:text-xl text-white leading-relaxed">
                        Nossa startup nasceu da vontade de resolver a centralização da informação do turismo e experiência do turista usando inovação tecnológica.
                        Tudo começou no Startup Weekend Pelotas com uma equipe dedicada e com visão de futuro.
                        Fomos o 1º lugar nesse evento, o que nos levou a continuar a construção dessa Startup.
                    </p>
                </div>
            </section>

            {/* Problema / Solução */}
            <section className="py-24 px-6 bg-gray-50">
                <div className="max-w-6xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-12 text-[#4B33D9]">
                        Qual Problema Nosso Produto Resolve?
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-center">
                        {[
                            {
                                title: "O Problema",
                                text: "Muitos turistas enfrentam dificuldades com a centralização e confiabilidade nas informações de locais turísticos e estabelecimentos.",
                                icon: <AlertTriangle size={48} className="text-[#F2E205] mb-4" />,
                            },
                            {
                                title: "Nossa Solução",
                                text: "O Guiaí centraliza todas as informações turísticas em um só lugar de forma confiável, permitindo que os próprios usuários contribuam para a qualidade dos dados.",
                                icon: <Lightbulb size={48} className="text-[#F2E205] mb-4" />,
                            },
                            {
                                title: "Por que Usar o Guiaí?",
                                text: "Com planos de desconto e bônus por participação na comunidade, entregamos uma experiência única, confiável e participativa.",
                                icon: <ThumbsUp size={48} className="text-[#F2E205] mb-4" />,
                            },
                        ].map((card) => (
                            <motion.div
                                key={card.title}
                                className="p-8 rounded-2xl bg-[#4B33D9] text-white shadow-lg hover:shadow-[#F2E205]/40 transition-transform"
                                whileHover={{ y: -5 }}
                            >
                                <div className="flex flex-col items-center">
                                    {card.icon}
                                    <h3 className="text-xl font-semibold mb-3 text-[#F2E205]">{card.title}</h3>
                                    <p className="text-white/90">{card.text}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Time */}
            <section className="py-24 px-6 bg-[#4B33D9]">
                <div className="max-w-6xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-12 text-[#F2E205]">Nosso Time</h2>

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
                            <motion.div
                                key={member.name}
                                className="flex flex-col items-center text-center p-4 rounded-2xl bg-white/10 backdrop-blur-sm transition hover:scale-105"
                                whileHover={{ y: -5 }}
                            >
                                <div className="w-40 h-40 mb-4 rounded-full border-4 border-[#F2E205] bg-gray-300 object-cover shadow-md" />
                                <h3 className="font-semibold text-xl text-[#F2E205]">{member.name}</h3>
                                <p className="text-white">{member.role}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Objetivo */}
            <section className="py-24 px-2 bg-gray-50 text-center text-gray-900">
                <div className="max-w-4xl mx-auto p-10 rounded-2xl shadow-md border border-[#4B33D9]/20 bg-white">
                    <Target size={56} className="text-[#4B33D9] mx-auto mb-6" />
                    <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#4B33D9]">Nosso Objetivo</h2>
                    <p className="text-lg md:text-xl text-gray-700">
                        Conectar pessoas ao turismo e à cultura, contribuindo para o reconhecimento da cultura regional.
                    </p>
                </div>
            </section>

            {/* Eventos */}
            <section className="py-24 px-6 bg-[#4B33D9] text-center">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold mb-12 text-[#F2E205]">Eventos Futuros</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-center">
                        {[{ title: "Próximo evento aqui", date: "Sem data" },
                        { title: "Próximo evento aqui", date: "Sem data" }].map((event) => (
                            <div
                                key={event.title}
                                className="bg-white/10 p-6 rounded-xl hover:scale-105 transition"
                            >
                                <h3 className="text-xl font-semibold mb-2 text-[#F2E205]">{event.title}</h3>
                                <p className="text-white">{event.date}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Faturamento */}
            <section className="py-24 px-6 bg-gray-50 text-center">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold mb-12 text-[#4B33D9]">
                        Projeções de Faturamento
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-center">
                        {[{ label: "2026", value: "R$ 30K" },
                        { label: "2027", value: "R$ 200K" },
                        { label: "2028", value: "R$ 1M" }].map((item) => (
                            <div
                                key={item.label}
                                className="p-6 rounded-xl bg-[#4B33D9] text-[#F2E205] hover:scale-105 transition shadow-lg hover:shadow-[#F2E205]/40"
                            >
                                <h3 className="text-xl font-semibold mb-2">{item.label}</h3>
                                <p className="text-3xl font-bold">{item.value}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-12 px-6 text-center text-white/70 bg-[#4B33D9]">
                © {new Date().getFullYear()} Guiaí. Todos os direitos reservados.
            </footer>
        </div>
    );
}
