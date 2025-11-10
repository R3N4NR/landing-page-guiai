import { motion } from "framer-motion";
import { AlertTriangle, Lightbulb, ThumbsUp } from "lucide-react";

export default function TroubleShooting() {
    const cards = [
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
    ];

    return (
        <section className="py-24 px-6 bg-gray-50">
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-[#4B33D9]">
                    Qual Problema Nosso Produto Resolve?
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-center">
                    {cards.map((card) => (
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
    );
}