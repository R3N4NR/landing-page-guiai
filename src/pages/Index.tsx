
import Eventos from "../components/IndexComponents/Events";
import Footer from "../components/Basics/Footer";
import Hero from "../components/IndexComponents/Hero";
import HighlightsSection from "../components/IndexComponents/HighlightSection";
import Invoicing from "../components/IndexComponents/Invoicing";
import Objectiv from "../components/IndexComponents/Objective";
import Presentation from "../components/IndexComponents/Presentation";
import Team from "../components/IndexComponents/Team";
import TroubleShooting from "../components/IndexComponents/TroubleShooting";



export default function Index() {

    return (
        <div className="font-sans text-white bg-white">
            <Hero />
            <HighlightsSection />
            <Presentation />
            <TroubleShooting />
            <Team />
            <Objectiv />
            <Eventos />
            <Invoicing />
            <Footer />
        </div>
    );
}
