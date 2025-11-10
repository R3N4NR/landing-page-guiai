import { motion } from "framer-motion";
import { Pause, Play, X, Info, Globe, Users, Rocket, Globe2, Trophy, HandCoins, MapPin, Clock, Route, Navigation, Mail, Handshake } from "lucide-react";
import React, { useRef, useState, useEffect, MouseEvent } from "react";

interface InfoCard {
    title: string;
    text: string;
    icon: React.ReactNode;
}

const plans = [
    {
        icon: <Navigation size={40} className="text-[#F2E205]" />,
        title: "Mapas Interativos",
        text: "Descubra atrações próximas e navegue com facilidade por experiências locais.",
    },
    {
        icon: <Route size={40} className="text-[#F2E205]" />,
        title: "Roteiros Personalizados",
        text: "Monte sua própria jornada com base em seus interesses e tempo disponível.",
    },
    {
        icon: <Trophy size={40} className="text-[#F2E205]" />,
        title: "Gamificação e Recompensas",
        text: "Ganhe pontos, conquiste badges e receba benefícios exclusivos ao participar.",
    },
];
const infoCards: InfoCard[] = [
    {
        title: "Nossa História",
        text: "O Guiaí nasceu para revolucionar o turismo, conectando pessoas, lugares e experiências através da tecnologia.",
        icon: <Globe size={40} className="text-[#F2E205]" />,
    },
    {
        title: "Missão",
        text: "Conectar turistas e comunidades locais, promovendo o turismo sustentável e cultural.",
        icon: <Rocket size={40} className="text-[#F2E205]" />,
    },
    {
        title: "Valores",
        text: "Confiança, colaboração, inovação e valorização da cultura regional.",
        icon: <Users size={40} className="text-[#F2E205]" />,
    },
    {
        title: "Visão",
        text: "Ser referência nacional em experiências turísticas autênticas e colaborativas.",
        icon: <Info size={40} className="text-[#F2E205]" />,
    },
];

export default function SaibaMais() {
    const [isDragging, setIsDragging] = useState(false);
    const [isPaused, setIsPaused] = useState(false);
    const [activeCard, setActiveCard] = useState<number | null>(null);

    const startX = useRef<number>(0);
    const startAngle = useRef<number>(0);
    const angleRef = useRef<number>(0);
    const carouselRef = useRef<HTMLDivElement | null>(null);
    const radius = 400;

    // Rotação automática
    useEffect(() => {
        let animationFrame: number;
        const rotate = () => {
            if (!isDragging && !isPaused && activeCard === null) {
                angleRef.current = (angleRef.current + 0.3) % 360;
                if (carouselRef.current) {
                    carouselRef.current.style.transform = `rotateY(${angleRef.current}deg)`;
                }
            }
            animationFrame = requestAnimationFrame(rotate);
        };
        rotate();
        return () => cancelAnimationFrame(animationFrame);
    }, [isDragging, isPaused, activeCard]);

    const handleMouseDown = (e: MouseEvent<HTMLDivElement>) => {
        if (activeCard !== null) return;
        setIsDragging(true);
        startX.current = e.clientX;
        startAngle.current = angleRef.current;
    };

    const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
        if (!isDragging || activeCard !== null) return;
        const delta = e.clientX - startX.current;
        angleRef.current = startAngle.current + delta * 0.5;
        if (carouselRef.current) {
            carouselRef.current.style.transform = `rotateY(${angleRef.current}deg)`;
        }
    };

    const handleMouseUp = () => setIsDragging(false);
    const togglePause = () => setIsPaused((prev) => !prev);

    return (
        <div className="font-sans text-white bg-white">
            {/* Header */}
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
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15 19l-7-7 7-7"
                        />
                    </svg>
                    Voltar para o início
                </a>
            </section>

            {/* Como Funciona + Carrossel */}
            <section className="py-20 px-6 bg-gray-100 text-center text-gray-900">
                <h2 className="text-3xl md:text-4xl font-bold mb-8" style={{ color: "#4B33D9" }}>
                    Como o Guiaí Funciona
                </h2>
                <p className="max-w-3xl mx-auto text-lg mb-12">
                    O Guiaí reúne informações sobre pontos turísticos, restaurantes, eventos e experiências locais.
                    Usuários podem avaliar lugares, deixar comentários e contribuir com novas informações — tornando o turismo mais autêntico e confiável.
                </p>

                {/* Carrossel 3D */}
                <div
                    className="flex justify-center items-center h-[600px] w-full overflow-hidden select-none relative"
                    style={{
                        perspective: 1200,
                        cursor: activeCard ? "default" : isDragging ? "grabbing" : "grab",
                        flexDirection: "column",
                    }}
                    onMouseDown={handleMouseDown}
                    onMouseMove={handleMouseMove}
                    onMouseUp={handleMouseUp}
                    onMouseLeave={handleMouseUp}
                >
                    {/* Botão Pause/Play */}
                    <button
                        onClick={togglePause}
                        className="absolute top-6 right-6 bg-white/10 backdrop-blur-md hover:bg-white/20 text-gray-900 p-3 rounded-full transition-all shadow-lg z-50"
                    >
                        {isPaused ? <Play size={20} /> : <Pause size={20} />}
                    </button>

                    {/* Fundo borrado ao abrir um card */}
                    {activeCard !== null && (
                        <motion.div
                            className="absolute inset-0 backdrop-blur-2xl bg-black/50 z-20"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                        />
                    )}

                    {/* Carrossel */}
                    <div
                        ref={carouselRef}
                        className="relative w-[600px] h-[600px] transform-gpu"
                        style={{
                            transformStyle: "preserve-3d",
                            filter: activeCard !== null ? "blur(4px)" : "none",
                            transition: "filter 0.3s ease",
                        }}
                    >
                        {infoCards.map((card, i) => {
                            const step = 360 / infoCards.length;
                            const rot = i * step;
                            return (
                                <div
                                    key={i}
                                    onClick={() => setActiveCard(i)}
                                    className="absolute left-1/2 top-1/2 w-64 h-96 rounded-3xl overflow-hidden shadow-2xl transform-gpu cursor-pointer transition-transform duration-300 hover:scale-105 flex flex-col items-center justify-center text-center p-6"
                                    style={{
                                        transformStyle: "preserve-3d",
                                        backfaceVisibility: "hidden",
                                        transform: `rotateY(${rot}deg) translateZ(${radius}px) translate(-50%, -50%)`,
                                        backgroundColor: "#4B33D9",
                                    }}
                                >
                                    {card.icon}
                                    <h3 className="text-2xl font-bold mt-4 mb-2" style={{ color: "#F2E205" }}>
                                        {card.title}
                                    </h3>
                                    <p className="text-white text-sm">{card.text}</p>
                                </div>
                            );
                        })}
                    </div>

                    {/* Card expandido */}
                    {activeCard !== null && (
                        <motion.div
                            className="absolute z-30 flex items-center justify-center"
                            initial={{ opacity: 0, scale: 0.7 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.8 }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                        >
                            <div
                                className="relative w-[90vw] md:w-[500px] h-[400px] rounded-3xl p-8 flex flex-col items-center text-center shadow-2xl"
                                style={{ backgroundColor: "#4B33D9" }}
                            >
                                {infoCards[activeCard].icon}
                                <h2 className="text-3xl font-bold mt-4 mb-4" style={{ color: "#F2E205" }}>
                                    {infoCards[activeCard].title}
                                </h2>
                                <p className="text-white text-lg">{infoCards[activeCard].text}</p>
                                <button
                                    onClick={() => setActiveCard(null)}
                                    className="absolute top-4 right-4 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition"
                                >
                                    <X size={20} />
                                </button>
                            </div>
                        </motion.div>
                    )}
                </div>
            </section>

            {/* Impacto e Benefícios */}
            <section className="py-20 px-6" style={{ backgroundColor: "#4B33D9" }}>
                <div className="max-w-6xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-12" style={{ color: "#F2E205" }}>
                        Impacto e Benefícios
                    </h2>

                    {/* Cards de impacto */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-16">
                        {[
                            { icon: <Clock size={40} className="text-[#F2E205] mb-4" />, title: "Agilidade", text: "Redução do tempo de busca por informações confiáveis." },
                            { icon: <MapPin size={40} className="text-[#F2E205] mb-4" />, title: "Turismo Regional", text: "Fortalecimento do turismo e da identidade local." },
                            { icon: <HandCoins size={40} className="text-[#F2E205] mb-4" />, title: "Economia Local", text: "Incentivo aos pequenos empreendedores e negócios da região." },
                            { icon: <Users size={40} className="text-[#F2E205] mb-4" />, title: "Engajamento", text: "Comunidade ativa com contribuições e recompensas." },
                        ].map((item, i) => (
                            <div
                                key={i}
                                className="relative bg-white/10 backdrop-blur-md rounded-2xl p-8 flex flex-col items-center shadow-lg border border-white/10 transition-transform duration-300 hover:scale-105 hover:shadow-[#F2E205]/40"
                            >
                                {/* Efeito de brilho radial interno */}
                                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,#F2E20520_0%,transparent_70%)] opacity-50 rounded-2xl" />
                                <div className="relative z-10 flex flex-col items-center text-center">
                                    {item.icon}
                                    <h3 className="text-xl font-semibold mb-2 text-white">{item.title}</h3>
                                    <p className="text-white/90 text-sm">{item.text}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Depoimento mockado */}
                    <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 max-w-xl mx-auto shadow-lg">
                        <p className="italic text-lg mb-4 text-white">
                            “Desde que nosso restaurante entrou no Guiaí, vimos um aumento de turistas e novos clientes.
                            A plataforma realmente conecta as pessoas à cultura local!”
                        </p>
                        <p className="font-semibold" style={{ color: "#F2E205" }}>
                            — Restaurante Sabor da Serra
                        </p>
                    </div>
                </div>
            </section>

            {/* Reconhecimento e Conquistas */}
            <section className="py-20 px-6 bg-gray-100 text-center text-gray-900">
                <h2
                    className="text-3xl md:text-4xl font-bold mb-12"
                    style={{ color: "#4B33D9" }}
                >
                    Reconhecimento e Conquistas
                </h2>

                <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        { icon: <Trophy size={40} className="text-[#4B33D9] mb-4" />, title: "1º lugar", text: "Startup Weekend Pelotas" },
                        { icon: <Rocket size={40} className="text-[#4B33D9] mb-4" />, title: "Programas de Aceleração", text: "Participação em iniciativas para startups inovadoras" },
                        { icon: <Globe2 size={40} className="text-[#4B33D9] mb-4" />, title: "Parcerias Locais", text: "Secretarias de turismo e empreendedores regionais" },
                    ].map((item, i) => (
                        <div
                            key={i}
                            className="relative bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center justify-center border border-[#4B33D9]/10 transition-transform duration-300 hover:scale-105 hover:shadow-[#4B33D9]/40"
                        >
                            {/* Efeito de brilho roxo interno */}
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

            {/* Nossos Planos para o Futuro */}
            <section className="py-20 px-6 relative overflow-hidden" style={{ backgroundColor: "#4B33D9" }}>
                {/* Efeito de brilho suave no fundo */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,#6C4EFF_0%,transparent_40%)] opacity-40" />

                <div className="max-w-6xl mx-auto text-center relative z-10">
                    <h2
                        className="text-3xl md:text-4xl font-bold mb-8 drop-shadow-lg"
                        style={{ color: "#F2E205" }}
                    >
                        Nossos Planos para o Futuro
                    </h2>

                    <p className="text-lg text-white max-w-3xl mx-auto mb-12">
                        Em breve, o Guiaí expandirá suas funcionalidades, incluindo:
                    </p>

                    {/* Cards dos planos */}
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
            {/* Junte-se a Nós */}
            <section className="py-20 px-6 text-center text-gray-900 bg-gray-100">
                <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: "#4B33D9" }}>
                    Junte-se a Nós
                </h2>
                <p className="text-lg mb-10 max-w-2xl mx-auto text-gray-700">
                    Quer fazer parte dessa jornada? Cadastre-se para receber novidades ou torne-se um parceiro do Guiaí!
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {/* Card 1 - Parceiro */}
                    <div
                        className="relative  text-[#4B33D9] rounded-2xl p-10 shadow-md transition-all duration-300 hover:scale-105 flex flex-col items-center justify-center cursor-pointer overflow-hidden"
                    >
                        <Handshake size={48} className="mb-4 text-[#4B33D9]" />
                        <h3 className="text-2xl font-bold mb-3">Quero ser parceiro</h3>
                        <p className="text-base text-[#4B33D9]/90 mb-4">
                            Cadastre seu negócio e conecte-se com turistas e comunidades locais.
                        </p>

                        <button
                            className="mt-2 px-6 py-3 rounded-xl font-semibold text-[#4B33D9] border-2 border-[#4B33D9] bg-white/60 hover:bg-[#4B33D9] hover:text-white transition-all duration-300"
                        >
                            Cadastrar agora
                        </button>

                        {/* Efeito de brilho no hover */}
                        <div className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(circle_at_50%_0%,#fff6_0%,transparent_70%)]" />
                    </div>

                    {/* Card 2 - Newsletter */}
                    <div
                        className="relative  text-[#4B33D9] rounded-2xl p-10 shadow-md transition-all duration-300 hover:scale-105 flex flex-col items-center justify-center cursor-pointer overflow-hidden"
                    >
                        <Mail size={48} className="mb-4 text-[#4B33D9]" />
                        <h3 className="text-2xl font-bold mb-3">Receber novidades</h3>
                        <p className="text-base text-gray-700 mb-4">
                            Fique por dentro das atualizações e descubra o futuro do turismo digital.
                        </p>

                        <button
                            className="mt-2 px-6 py-3 rounded-xl font-semibold text-[#4B33D9] border-2 border-[#4B33D9] hover:bg-[#4B33D9] hover:text-white transition-all duration-300"
                        >
                            Inscrever-se
                        </button>

                        {/* brilho suave ao hover */}
                        <div className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(circle_at_50%_0%,#ffffff22_0%,transparent_70%)]" />
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-12 px-6 text-center text-white/70" style={{ backgroundColor: "#4B33D9" }}>
                © {new Date().getFullYear()} Guiaí. Todos os direitos reservados.
            </footer>
        </div>
    );
}
