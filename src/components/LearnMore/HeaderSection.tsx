import React from "react";

export default function HeaderSection() {
    return (
        <section
            className="relative h-[60vh] md:h-[60vh] flex flex-col justify-center items-center text-center px-6 bg-white overflow-hidden"
        >
            {/* Glow roxo orgânico atrás da logo */}
            <div className="absolute inset-0 flex justify-center items-start pt-12 pointer-events-none">
                <div
                    className="w-[500px] h-[500px] md:w-[600px] md:h-[400px]"
                    style={{
                        background:
                            "radial-gradient(ellipse at center, rgba(75,51,217,0.4) 0%, rgba(75,51,217,0.05) 70%, transparent 100%)",
                        filter: "blur(100px)",
                        transform: "translateY(-50px) rotate(-15deg)",
                    }}
                />
            </div>

            {/* Conteúdo */}
            <img
                src="/logo.png"
                alt="Logo Guiaí"
                className="mb-6 w-48 md:w-100 sm:w-64 relative z-10 drop-shadow-lg"
            />
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 relative z-10 text-[#4B33D9] drop-shadow-xl">
                Saiba Mais sobre o Guiaí
            </h1>
            <p className="text-sm sm:text-base md:text-lg max-w-xs sm:max-w-md md:max-w-2xl relative z-10 text-gray-700 drop-shadow-md">
                Entenda como o Guiaí transforma o turismo regional em uma experiência colaborativa e autêntica.
            </p>

            <a
                href="/"
                className="relative z-10 inline-flex items-center gap-2 px-6 sm:px-8 py-2 sm:py-3 mt-6 sm:mt-10 rounded-xl font-semibold text-sm sm:text-lg text-[#4B33D9] bg-white hover:text-white hover:bg-[#4B33D9] transition-all duration-300 hover:scale-105 shadow-md hover:shadow-[#4B33D9]/30"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="w-5 h-5 sm:w-6 sm:h-6"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
                Voltar para o início
            </a>
        </section>
    );
}
