import { useEffect, useState } from "react";
import HeaderSection from "../components/LearnMoreComponents/HeaderSection";
import InfoCardCarousel from "../components/LearnMoreComponents/InfoCardCarousel";
import ImpactBenefits from "../components/LearnMoreComponents/ImpactBenefits";
import RecognitionAchievements from "../components/LearnMoreComponents/RecognitionAchievments";
import FuturePlans from "../components/LearnMoreComponents/FuturePlans";
import JoinUs from "../components/LearnMoreComponents/JoinUs";
import Footer from "../components/Basics/Footer";
import MobileInfoCarousel from "../components/LearnMoreComponents/CarouselMobile";
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
