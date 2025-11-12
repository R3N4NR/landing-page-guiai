import { useNavigate } from "react-router-dom";

export default function Hero() {
    const navigate = useNavigate();

    return (
        <section
            className="relative h-screen flex flex-col justify-center items-center text-center px-6 overflow-hidden"
            style={{
                color: "#F2E205",
                background: "radial-gradient(circle at 50% 30%, #4B33D9 0%, #1B0B70 100%)",
            }}
        >
            <img src="/logo-alt.png" alt="Logo Guiaí" className="mb-6 w-64 md:w-80 drop-shadow-lg" />
            <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-xl">
                Bem-vindo ao <span>Guiaí</span>
            </h1>
            <p className="text-lg md:text-2xl mb-6 max-w-2xl text-gray-100 drop-shadow-md">
                Conectando pessoas, lugares e experiências com confiança.
            </p>

            <div className="flex gap-4 justify-center">
                <button
                    className="px-6 py-3 rounded-lg font-semibold transition duration-300 shadow-md"
                    style={{ backgroundColor: "#F2E205", color: "#4B33D9" }}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = "#4B33D9";
                        e.currentTarget.style.color = "#F2E205";
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = "#F2E205";
                        e.currentTarget.style.color = "#4B33D9";
                    }}
                    onClick={() => navigate("/saiba-mais")}
                >
                    Saiba Mais
                </button>

                <button
                    className="px-6 py-3 rounded-lg font-semibold border transition duration-300"
                    style={{ borderColor: "#F2E205", color: "#F2E205" }}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = "#4B33D9";
                        e.currentTarget.style.color = "#F2E205";
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = "transparent";
                        e.currentTarget.style.color = "#F2E205";
                    }}
                >
                    Entre em Contato
                </button>
            </div>

        </section>
    );
}
