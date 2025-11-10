import { motion } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Pause, Play, X, Info, Globe, Users, Rocket } from "lucide-react";

const infoCards = [
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

export default function CardGallery() {
  const [isDragging, setIsDragging] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [activeCard, setActiveCard] = useState<number | null>(null);
  const [radius, setRadius] = useState(400);

  const startX = useRef(0);
  const startAngle = useRef(0);
  const angleRef = useRef(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  // 🔹 Responsividade do raio
  useEffect(() => {
    const updateRadius = () => {
      if (window.innerWidth < 640) setRadius(180);
      else if (window.innerWidth < 1024) setRadius(300);
      else setRadius(400);
    };
    updateRadius();
    window.addEventListener("resize", updateRadius);
    return () => window.removeEventListener("resize", updateRadius);
  }, []);

  // 🔹 Rotação automática
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

  // 🔹 Arrastar com mouse/touch
  const startDrag = (clientX: number) => {
    if (activeCard !== null) return;
    setIsDragging(true);
    startX.current = clientX;
    startAngle.current = angleRef.current;
  };

  const moveDrag = (clientX: number) => {
    if (!isDragging || activeCard !== null) return;
    const delta = clientX - startX.current;
    angleRef.current = startAngle.current + delta * 0.5;
    if (carouselRef.current) {
      carouselRef.current.style.transform = `rotateY(${angleRef.current}deg)`;
    }
  };

  const endDrag = () => setIsDragging(false);
  const togglePause = () => setIsPaused((prev) => !prev);

  return (
    <div
      className="flex justify-center items-center h-screen w-full overflow-hidden select-none relative"
      style={{
        perspective: 1200,
        background: "radial-gradient(circle at 50% 50%, #0a0a10 0%, #030308 100%)",
        cursor: activeCard ? "default" : isDragging ? "grabbing" : "grab",
        flexDirection: "column",
      }}
      onMouseDown={(e) => startDrag(e.clientX)}
      onMouseMove={(e) => moveDrag(e.clientX)}
      onMouseUp={endDrag}
      onMouseLeave={endDrag}
      onTouchStart={(e) => startDrag(e.touches[0].clientX)}
      onTouchMove={(e) => moveDrag(e.touches[0].clientX)}
      onTouchEnd={endDrag}
    >
      {/* 🔹 Botão Pause / Play */}
      <button
        onClick={togglePause}
        className="absolute top-6 right-6 bg-white/10 backdrop-blur-md hover:bg-white/20 text-white p-3 rounded-full transition-all shadow-lg z-50"
      >
        {isPaused ? <Play size={20} /> : <Pause size={20} />}
      </button>

      {/* 🔹 Anel luminoso girando */}
      <div className="absolute w-[700px] h-[700px] rounded-full border-4 border-[#F2E205]/20 animate-spin-slow" />

      {/* 🔹 Fundo borrado quando um card é aberto */}
      {activeCard !== null && (
        <motion.div
          className="absolute inset-0 backdrop-blur-2xl bg-black/50 z-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        />
      )}

      {/* 🔹 Carrossel 3D */}
      <div
        ref={carouselRef}
        className="relative w-[90vw] max-w-[600px] h-[70vh] max-h-[600px] transform-gpu"
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
            <motion.div
              key={i}
              onClick={() => setActiveCard(i)}
              whileHover={{ rotateX: 5, rotateY: -5, scale: 1.05 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="absolute left-1/2 top-1/2 w-56 sm:w-60 md:w-64 h-80 sm:h-88 md:h-96 rounded-3xl overflow-hidden shadow-2xl transform-gpu cursor-pointer flex flex-col items-center justify-center text-center p-4 sm:p-6 card-3d"
              style={{
                transform: `rotateY(${rot}deg) translateZ(${radius}px) translate(-50%, -50%)`,
                backgroundColor: "#4B33D9",
              }}
            >
              {/* Reflexo sutil */}
              <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent pointer-events-none rounded-3xl" />

              {card.icon}
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold mt-4 mb-2 text-[#F2E205]">
                {card.title}
              </h3>
              <p className="text-white text-xs sm:text-sm md:text-base">{card.text}</p>
            </motion.div>
          );
        })}
      </div>

      {/* 🔹 Card ampliado */}
      {activeCard !== null && (
        <motion.div
          className="absolute z-30 flex items-center justify-center px-4"
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <motion.div
            className="relative w-full max-w-[500px] h-auto rounded-3xl p-6 sm:p-8 flex flex-col items-center text-center shadow-2xl"
            style={{ backgroundColor: "#4B33D9" }}
            animate={{
              boxShadow: ["0 0 0px #F2E205", "0 0 25px #F2E205"],
            }}
            transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
          >
            {infoCards[activeCard].icon}
            <h2 className="text-2xl sm:text-3xl font-bold mt-4 mb-4 text-[#F2E205]">
              {infoCards[activeCard].title}
            </h2>
            <p className="text-white text-base sm:text-lg">{infoCards[activeCard].text}</p>

            <button
              onClick={() => setActiveCard(null)}
              className="absolute top-4 right-4 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition"
            >
              <X size={20} />
            </button>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}
