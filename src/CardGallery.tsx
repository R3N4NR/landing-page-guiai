import { motion } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Pause, Play, X } from "lucide-react";

const images = [
  "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=600&h=900&fit=crop",
  "https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?w=600&h=900&fit=crop",
  "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=600&h=900&fit=crop",
  "https://images.unsplash.com/photo-1531256379411-7f96b143a6d8?w=600&h=900&fit=crop",
  "https://images.unsplash.com/photo-1531891437562-4301cf35b7e0?w=600&h=900&fit=crop",
  "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=600&h=900&fit=crop",
];

export default function CardGallery() {
  const [isDragging, setIsDragging] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [activeImage, setActiveImage] = useState<string | null>(null);

  const startX = useRef(0);
  const startAngle = useRef(0);
  const angleRef = useRef(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const radius = 400;

  // Rotação automática usando requestAnimationFrame direto
  useEffect(() => {
    let animationFrame: number;

    const rotate = () => {
      if (!isDragging && !isPaused && !activeImage) {
        angleRef.current = (angleRef.current + 0.3) % 360;
        if (carouselRef.current) {
          carouselRef.current.style.transform = `rotateY(${angleRef.current}deg)`;
        }
      }
      animationFrame = requestAnimationFrame(rotate);
    };

    rotate();
    return () => cancelAnimationFrame(animationFrame);
  }, [isDragging, isPaused, activeImage]);

  // Drag handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    if (activeImage) return;
    setIsDragging(true);
    startX.current = e.clientX;
    startAngle.current = angleRef.current;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || activeImage) return;
    const delta = e.clientX - startX.current;
    angleRef.current = startAngle.current + delta * 0.5;
    if (carouselRef.current) {
      carouselRef.current.style.transform = `rotateY(${angleRef.current}deg)`;
    }
  };

  const handleMouseUp = () => setIsDragging(false);
  const togglePause = () => setIsPaused((prev) => !prev);

  return (
    <div
      className="flex justify-center items-center h-screen w-full overflow-hidden select-none relative"
      style={{
        perspective: 1200,
        background: "radial-gradient(circle at 50% 50%, #0a0a10 0%, #030308 100%)",
        cursor: activeImage ? "default" : isDragging ? "grabbing" : "grab",
        flexDirection: "column",
      }}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
    >
      {/* Botão Pause / Play */}
      <button
        onClick={togglePause}
        className="absolute top-6 right-6 bg-white/10 backdrop-blur-md hover:bg-white/20 text-white p-3 rounded-full transition-all shadow-lg z-50"
      >
        {isPaused ? <Play size={20} /> : <Pause size={20} />}
      </button>

      {/* Fundo borrado quando um card é aberto */}
      {activeImage && (
        <motion.div
          className="absolute inset-0 backdrop-blur-2xl bg-black/50 z-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        />
      )}

      {/* Carrossel 3D */}
      <div
        ref={carouselRef}
        className="relative w-[600px] h-[600px] transform-gpu"
        style={{
          transformStyle: "preserve-3d",
          filter: activeImage ? "blur(4px)" : "none",
          transition: "filter 0.3s ease",
        }}
      >
        {images.map((src, i) => {
          const step = 360 / images.length;
          const rot = i * step;

          return (
            <div
              key={i}
              onClick={() => setActiveImage(src)}
              className="absolute left-1/2 top-1/2 w-64 h-96 rounded-3xl overflow-hidden shadow-2xl transform-gpu cursor-pointer transition-transform duration-300 hover:scale-105"
              style={{
                transformStyle: "preserve-3d",
                backfaceVisibility: "hidden",
                willChange: "transform",
                transform: `rotateY(${rot}deg) translateZ(${radius}px) translate(-50%, -50%)`,
              }}
            >
              <img
                src={src}
                alt=""
                className="w-full h-full object-cover rounded-3xl"
                draggable="false"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/40 rounded-3xl" />
            </div>
          );
        })}
      </div>

      {/* Card ampliado */}
      {activeImage && (
        <motion.div
          className="absolute z-30 flex items-center justify-center"
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="relative w-[500px] h-[700px] rounded-3xl overflow-hidden shadow-2xl">
            <img
              src={activeImage}
              alt=""
              className="w-full h-full object-cover rounded-3xl"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50 rounded-3xl" />

            {/* Botão fechar */}
            <button
              onClick={() => setActiveImage(null)}
              className="absolute top-4 right-4 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition"
            >
              <X size={20} />
            </button>
          </div>
        </motion.div>
      )}
    </div>
  );
}
