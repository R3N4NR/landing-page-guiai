import { plans } from "../../mock/dataMock";

export default function FuturePlans() {
    return (
        <section className="py-20 px-6 relative overflow-hidden" style={{ backgroundColor: "#4B33D9" }}>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,#6C4EFF_0%,transparent_40%)] opacity-40" />

            <div className="max-w-6xl mx-auto text-center relative z-10">
                <h2 className="text-3xl md:text-4xl font-bold mb-8 drop-shadow-lg" style={{ color: "#F2E205" }}>
                    Nossos Planos para o Futuro
                </h2>

                <p className="text-lg text-white max-w-3xl mx-auto mb-12">
                    Em breve, o Guiaí expandirá suas funcionalidades, incluindo:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {plans.map((plan, i) => (
                        <div
                            key={i}
                            className="bg-white/10 backdrop-blur-md rounded-2xl p-8 shadow-lg border border-white/10 hover:scale-105 transition-transform duration-300 hover:shadow-[#F2E205]/40"
                        >
                            <div className="flex justify-center mb-4">{plan.icon}</div>
                            <h3 className="text-xl font-semibold mb-2 text-[#F2E205]">{plan.title}</h3>
                            <p className="text-white text-sm md:text-base">{plan.text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
