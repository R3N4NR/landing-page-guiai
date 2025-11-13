import { motion } from "framer-motion";
import { Pause, Play, X } from "lucide-react";
import React, { useRef, useState, useEffect, MouseEvent } from "react";

interface InfoCard {
    title: string;
    text: string;
    icon: React.ReactNode;
}

export default function InfoCardCarousel({ cards }: { cards: InfoCard[] }) {
    const [isDragging, setIsDragging] = useState(false);
    const [isPaused, setIsPaused] = useState(false);
    const [activeCard, setActiveCard] = useState<number | null>(null);

    const startX = useRef<number>(0);
    const startAngle = useRef<number>(0);
    const angleRef = useRef<number>(0);
    const carouselRef = useRef<HTMLDivElement | null>(null);
    const radius = 400;

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
        <section className="py-20 px-6 bg-gray-100 text-center text-gray-900">
            <h2 className="text-3xl md:text-4xl font-bold mb-8" style={{ color: "#4B33D9" }}>
                Como o Guiaí Funciona
            </h2>
            <p className="max-w-3xl mx-auto text-lg mb-12">
                O Guiaí reúne informações sobre pontos turísticos, restaurantes, eventos e experiências locais.
                Usuários podem avaliar lugares, deixar comentários e contribuir com novas informações — tornando o turismo mais autêntico e confiável.
            </p>

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
                <button
                    onClick={togglePause}
                    className="absolute top-6 right-6 bg-white/10 backdrop-blur-md hover:bg-white/20 text-gray-900 p-3 rounded-full transition-all shadow-lg z-50"
                >
                    {isPaused ? <Play /> : <Pause />}
                </button>

                {activeCard !== null && (
                    <motion.div
                        className="absolute inset-0 backdrop-blur-2xl bg-black/50 z-20"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    />
                )}

                <div
                    ref={carouselRef}
                    className="relative w-[600px] h-[600px] transform-gpu"
                    style={{
                        transformStyle: "preserve-3d",
                        filter: activeCard !== null ? "blur(4px)" : "none",
                        transition: "filter 0.3s ease",
                    }}
                >
                    {cards.map((card, i) => {
                        const step = 360 / cards.length;
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
                            {cards[activeCard].icon}
                            <h2 className="text-3xl font-bold mt-4 mb-4" style={{ color: "#F2E205" }}>
                                {cards[activeCard].title}
                            </h2>
                            <p className="text-white text-lg">{cards[activeCard].text}</p>
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
    );
}
