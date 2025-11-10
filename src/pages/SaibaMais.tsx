import { useEffect, useState } from "react";
import { Globe, Rocket, Users, Info } from "lucide-react";
import HeaderSection from "../components/LearnMore/HeaderSection";
import InfoCardCarousel from "../components/LearnMore/InfoCardCarousel";
import ImpactBenefits from "../components/LearnMore/ImpactBenefits";
import RecognitionAchievements from "../components/LearnMore/RecognitionAchievments";
import FuturePlans from "../components/LearnMore/FuturePlans";
import JoinUs from "../components/LearnMore/JoinUs";
import Footer from "../components/IndexComponents/Footer";
import MobileInfoCarousel from "../components/LearnMore/CarouselMobile";

const infoCards = [
    { title: "Nossa História", text: "O Guiaí nasceu para revolucionar o turismo, conectando pessoas, lugares e experiências através da tecnologia.", icon: <Globe size={40} className="text-[#F2E205]" /> },
    { title: "Missão", text: "Conectar turistas e comunidades locais, promovendo o turismo sustentável e cultural.", icon: <Rocket size={40} className="text-[#F2E205]" /> },
    { title: "Valores", text: "Confiança, colaboração, inovação e valorização da cultura regional.", icon: <Users size={40} className="text-[#F2E205]" /> },
    { title: "Visão", text: "Ser referência nacional em experiências turísticas autênticas e colaborativas.", icon: <Info size={40} className="text-[#F2E205]" /> },
];

export default function SaibaMaisPage() {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 768);
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <div className="font-sans text-white bg-white">
            <HeaderSection />
            {isMobile ? (
                <MobileInfoCarousel cards={infoCards} />
            ) : (
                <InfoCardCarousel cards={infoCards} />
            )}
            <ImpactBenefits />
            <RecognitionAchievements />
            <FuturePlans />
            <JoinUs />
            <Footer />
        </div>
    );
}
