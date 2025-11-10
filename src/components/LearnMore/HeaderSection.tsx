import React from "react";

export default function HeaderSection() {
    return (
        <section
            className="relative h-[60vh] flex flex-col justify-center items-center text-center px-6"
            style={{ backgroundColor: "#4B33D9", color: "#F2E205" }}
        >
            <h1 className="text-5xl font-bold mb-4">Saiba Mais sobre o Guiaí</h1>
            <p className="text-lg max-w-2xl text-white/90">
                Entenda como o Guiaí transforma o turismo regional em uma experiência colaborativa e autêntica.
            </p>
            <a
                href="/"
                className="inline-flex items-center gap-2 px-8 py-3 mt-10 rounded-xl font-semibold text-lg text-white bg-[#4B33D9] hover:bg-[#F2E205] hover:text-[#4B33D9] transition-all duration-300 hover:scale-105 shadow-md hover:shadow-[#4B33D9]/30"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="w-6 h-6"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
                Voltar para o início
            </a>
        </section>
    );
}
