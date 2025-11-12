import { useEffect, useState } from "react";
import HeaderSection from "../components/LearnMore/HeaderSection";
import InfoCardCarousel from "../components/LearnMore/InfoCardCarousel";
import ImpactBenefits from "../components/LearnMore/ImpactBenefits";
import RecognitionAchievements from "../components/LearnMore/RecognitionAchievments";
import FuturePlans from "../components/LearnMore/FuturePlans";
import JoinUs from "../components/LearnMore/JoinUs";
import Footer from "../components/Basics/Footer";
import MobileInfoCarousel from "../components/LearnMore/CarouselMobile";
import { infoCards } from "../mock/dataMock";

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
