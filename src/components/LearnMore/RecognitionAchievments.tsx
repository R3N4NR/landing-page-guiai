import { Trophy, Rocket, Globe2 } from "lucide-react";

const recognitionCards = [
    { icon: <Trophy size={40} className="text-[#4B33D9] mb-4" />, title: "1º lugar", text: "Startup Weekend Pelotas" },
    { icon: <Rocket size={40} className="text-[#4B33D9] mb-4" />, title: "Programas de Aceleração", text: "Participação em iniciativas para startups inovadoras" },
    { icon: <Globe2 size={40} className="text-[#4B33D9] mb-4" />, title: "Parcerias Locais", text: "Secretarias de turismo e empreendedores regionais" },
];

export default function RecognitionAchievements() {
    return (
        <section className="py-20 px-6 bg-gray-100 text-center text-gray-900">
            <h2 className="text-3xl md:text-4xl font-bold mb-12" style={{ color: "#4B33D9" }}>
                Reconhecimento e Conquistas
            </h2>

            <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                {recognitionCards.map((item, i) => (
                    <div
                        key={i}
                        className="relative bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center justify-center border border-[#4B33D9]/10 transition-transform duration-300 hover:scale-105 hover:shadow-[#4B33D9]/40"
                    >
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,#4B33D920_0%,transparent_70%)] opacity-80 rounded-2xl" />
                        <div className="relative z-10 flex flex-col items-center text-center">
                            {item.icon}
                            <h3 className="text-xl font-semibold mb-2 text-[#4B33D9]">{item.title}</h3>
                            <p className="text-gray-700">{item.text}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
