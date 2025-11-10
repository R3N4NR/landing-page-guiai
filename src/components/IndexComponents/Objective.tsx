import { Target } from "lucide-react";

export default function Objectiv() {
    return (
        <section className="py-24 px-2 bg-gray-50 text-center text-gray-900">
            <div className="max-w-4xl mx-auto p-10 rounded-2xl shadow-md border border-[#4B33D9]/20 bg-white">
                <Target size={56} className="text-[#4B33D9] mx-auto mb-6" />
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#4B33D9]">Nosso Objetivo</h2>
                <p className="text-lg md:text-xl text-gray-700">
                    Conectar pessoas ao turismo e à cultura, contribuindo para o reconhecimento da cultura regional.
                </p>
            </div>
        </section>
    );
}
