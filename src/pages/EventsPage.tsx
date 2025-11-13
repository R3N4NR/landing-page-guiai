import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../lib/supabaseClient";
import { EventsInterface } from "../types/EventsInterface";
import Header from "../components/Basics/Header/Header";
import { FeaturedCreatorSection, OfficialEventsSection, PartnerRestaurantsSection, TouristSpotsSection } from "../components/Sections/EventsPage";
import DemoEventsSection from "../components/EventsComponents/EventsListSection";
import CreatorVideoModal from "../components/Modals/CreatorVideoModal";
import EventDetailsModal from "../components/EventsComponents/EventsDetailsModal";
import LoginModal from "../components/Modals/LoginModal";
import { toast } from "react-toastify";



export default function EventsPage() {
    const navigate = useNavigate();

    const [events, setEvents] = useState<EventsInterface[]>([]);
    const [selectedEvent, setSelectedEvent] = useState<EventsInterface | null>(null);
    const [showLogin, setShowLogin] = useState(false);
    const [loading, setLoading] = useState(true);
    const [showCreatorVideo, setShowCreatorVideo] = useState(false);

    useEffect(() => {
        const fetchEvents = async () => {
            const { data, error } = await supabase
                .from("events")
                .select("*")
                .order("date", { ascending: true });

            if (error)  toast.error("Erro ao buscar evento")
            else setEvents(data || []);
            setLoading(false);
        };
        fetchEvents();
    }, []);

    return (
        <div className="min-h-screen bg-[#0E0637] text-white relative">
            <Header />

            <OfficialEventsSection
                events={events}
                loading={loading}
                onSelectEvent={setSelectedEvent}
            />

            <PartnerRestaurantsSection />
            <FeaturedCreatorSection onShowVideo={() => setShowCreatorVideo(true)} />
            <TouristSpotsSection onSelectSpot={(id) => navigate(`/local/${id}`)} />
            <DemoEventsSection onSelectEvent={setSelectedEvent} />

            <footer className="bg-[#0E0637] py-8 text-center text-gray-400 text-sm">
                <p>© {new Date().getFullYear()} Gourmeet — Todos os direitos reservados.</p>
            </footer>

            {showCreatorVideo && (
                <CreatorVideoModal onClose={() => setShowCreatorVideo(false)} />
            )}

            {selectedEvent && !showLogin && (
                <EventDetailsModal
                    event={selectedEvent}
                    onClose={() => setSelectedEvent(null)}
                    onParticipate={() => setShowLogin(true)}
                />
            )}

            {showLogin && (
                <LoginModal
                    event={selectedEvent}
                    onClose={() => {
                        setShowLogin(false);
                        setSelectedEvent(null);
                    }}
                />
            )}
        </div>
    );
}
