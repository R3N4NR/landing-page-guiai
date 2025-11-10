import { Handshake, Mail } from "lucide-react";

export default function JoinUs() {
    return (
        <section className="py-20 px-6 text-center text-gray-900 bg-gray-100">
            <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: "#4B33D9" }}>
                Junte-se a Nós
            </h2>
            <p className="text-lg mb-10 max-w-2xl mx-auto text-gray-700">
                Quer fazer parte dessa jornada? Cadastre-se para receber novidades ou torne-se um parceiro do Guiaí!
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                <div className="relative text-[#4B33D9] rounded-2xl p-10 shadow-md transition-all duration-300 hover:scale-105 flex flex-col items-center justify-center cursor-pointer overflow-hidden">
                    <Handshake size={48} className="mb-4 text-[#4B33D9]" />
                    <h3 className="text-2xl font-bold mb-3">Quero ser parceiro</h3>
                    <p className="text-base text-[#4B33D9]/90 mb-4">
                        Cadastre seu negócio e conecte-se com turistas e comunidades locais.
                    </p>
                    <button className="mt-2 px-6 py-3 rounded-xl font-semibold text-[#4B33D9] border-2 border-[#4B33D9] bg-white/60 hover:bg-[#4B33D9] hover:text-white transition-all duration-300">
                        Cadastrar agora
                    </button>
                    <div className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(circle_at_50%_0%,#fff6_0%,transparent_70%)]" />
                </div>

                <div className="relative text-[#4B33D9] rounded-2xl p-10 shadow-md transition-all duration-300 hover:scale-105 flex flex-col items-center justify-center cursor-pointer overflow-hidden">
                    <Mail size={48} className="mb-4 text-[#4B33D9]" />
                    <h3 className="text-2xl font-bold mb-3">Receber novidades</h3>
                    <p className="text-base text-gray-700 mb-4">
                        Fique por dentro das atualizações e descubra o futuro do turismo digital.
                    </p>
                    <button className="mt-2 px-6 py-3 rounded-xl font-semibold text-[#4B33D9] border-2 border-[#4B33D9] hover:bg-[#4B33D9] hover:text-white transition-all duration-300">
                        Inscrever-se
                    </button>
                    <div className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(circle_at_50%_0%,#ffffff22_0%,transparent_70%)]" />
                </div>
            </div>
        </section>
    );
}
