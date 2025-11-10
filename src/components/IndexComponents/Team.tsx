import { motion } from "framer-motion";

const members = [
    { name: "Renan Ramalho", role: "CEO" },
    { name: "Lucas Jores", role: "COO" },
    { name: "Alessandro Carvalho", role: "CTO" },
    { name: "Gioconda Alfaro", role: "CBO" },
    { name: "Helena Araújo", role: "CHRO" },
    { name: "Joelise Amaral", role: "CMO" },
    { name: "Zamira Fiss", role: "CPO" },
];

export default function Team() {
    return (
        <section className="py-24 px-6 bg-[#4B33D9]">
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-[#F2E205]">Nosso Time</h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 justify-center">
                    {members.map((member) => (
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
    );
}
