import { useNavigate } from "react-router-dom";
import { highlightCards } from "../../mock/dataMock";

export default function HighlightsSection() {
    const navigate = useNavigate();
    const cards = highlightCards(navigate);
    return (
        <section className="py-20 px-8 bg-[#0E0637] text-white text-center relative overflow-hidden">
            <div className="absolute inset-0 opacity-30 blur-3xl bg-gradient-to-tr from-[#4B33D9]/40 via-[#F2E205]/10 to-[#05F2AF]/30 pointer-events-none"></div>

            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-[#FFF] relative z-10">
                Confira os Eventos Promovidos Por Nós
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto relative z-10">
                {cards.map((card, index) => (
                    <div
                        key={index}
                        className={`p-8 rounded-2xl transition transform bg-gradient-to-br ${card.gradient} ${card.glow}
            hover:scale-105 hover:shadow-[0_0_20px_rgba(138,107,255,0.7),0_0_35px_rgba(75,51,217,0.5)] relative overflow-hidden`}
                    >
                        <h3 className="text-2xl font-bold mb-4 text-white relative z-10">
                            {card.title}
                        </h3>
                        <p className="text-base mb-6 text-gray-100 relative z-10">
                            {card.description}
                        </p>

                        <button
                            className="px-6 py-2 rounded-lg font-semibold text-[#4B33D9] bg-white border-2 border-transparent hover:bg-[#4B33D9] hover:text-white hover:border-white transition-all duration-300 shadow-md"
                            onClick={card.onClick}
                        >
                            {card.action}
                        </button>

                    </div>
                ))}
            </div>
        </section>
    );
}
