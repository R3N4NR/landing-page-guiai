import { motion } from "framer-motion";
import { impactCards as cards } from "../../mock/dataMock";

export default function TroubleShooting() {


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
                            className="p-8 rounded-2xl bg-white border border-[#4B33D9] text-[#4B33D9] shadow-lg transition-transform hover:shadow-[#4B33D980]"
                            whileHover={{ y: -5 }}
                        >
                            <div className="flex flex-col items-center text-center">
                                {card.icon}
                                <h3 className="text-xl font-semibold mb-3">{card.title}</h3>
                                <p className="text-[#4B33D9]/90">{card.text}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
