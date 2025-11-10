import { Clock, MapPin, HandCoins, Users } from "lucide-react";

const impactCards = [
    { icon: <Clock size={40} className="text-[#F2E205] mb-4" />, title: "Agilidade", text: "Redução do tempo de busca por informações confiáveis." },
    { icon: <MapPin size={40} className="text-[#F2E205] mb-4" />, title: "Turismo Regional", text: "Fortalecimento do turismo e da identidade local." },
    { icon: <HandCoins size={40} className="text-[#F2E205] mb-4" />, title: "Economia Local", text: "Incentivo aos pequenos empreendedores e negócios da região." },
    { icon: <Users size={40} className="text-[#F2E205] mb-4" />, title: "Engajamento", text: "Comunidade ativa com contribuições e recompensas." },
];

export default function ImpactBenefits() {
    return (
        <section className="py-20 px-6" style={{ backgroundColor: "#4B33D9" }}>
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-12" style={{ color: "#F2E205" }}>
                    Impacto e Benefícios
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-16">
                    {impactCards.map((item, i) => (
                        <div
                            key={i}
                            className="relative bg-white/10 backdrop-blur-md rounded-2xl p-8 flex flex-col items-center shadow-lg border border-white/10 transition-transform duration-300 hover:scale-105 hover:shadow-[#F2E205]/40"
                        >
                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,#F2E20520_0%,transparent_70%)] opacity-50 rounded-2xl" />
                            <div className="relative z-10 flex flex-col items-center text-center">
                                {item.icon}
                                <h3 className="text-xl font-semibold mb-2 text-white">{item.title}</h3>
                                <p className="text-white/90 text-sm">{item.text}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 max-w-xl mx-auto shadow-lg">
                    <p className="italic text-lg mb-4 text-white">
                        “Desde que nosso restaurante entrou no Guiaí, vimos um aumento de turistas e novos clientes.
                        A plataforma realmente conecta as pessoas à cultura local!”
                    </p>
                    <p className="font-semibold" style={{ color: "#F2E205" }}>
                        — Restaurante Sabor da Serra
                    </p>
                </div>
            </div>
        </section>
    );
}
