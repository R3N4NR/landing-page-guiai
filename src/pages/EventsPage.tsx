import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { supabase } from "../lib/supabaseClient";
import { EventsInterface } from "../types/EventsInterface";
import Header from "../components/Basics/Header";
import EventCard from "../components/Basics/EventCards";
import Modal from "../components/Modals/Modal";
import Button from "../components/Basics/Button";
import LoginForm from "../components/Forms/LoginForm";




export default function EventsPage() {
    const navigate = useNavigate();
    const [events, setEvents] = useState<EventsInterface[]>([]);
    const [selectedEvent, setSelectedEvent] = useState<EventsInterface | null>(null);
    const [showLogin, setShowLogin] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchEvents = async () => {
            const { data, error } = await supabase
                .from("events")
                .select("*")
                .order("date", { ascending: true });

            if (error) {
                console.error("Erro ao buscar eventos:", error);
            } else {
                setEvents(data || []);
            }
            setLoading(false);
        };

        fetchEvents();
    }, []);

    return (
        <div className="min-h-screen bg-[#0E0637] text-white relative">
            <Header />

            <section className="py-24 px-8 text-center">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">Próximos Eventos</h1>
                <p className="text-gray-300 max-w-2xl mx-auto mb-12">
                    Escolha o evento que deseja participar e veja os detalhes antes de garantir seu cupom.
                </p>

                {loading ? (
                    <p className="text-gray-400">Carregando eventos...</p>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
                        {events.map((event, i) => (
                            <EventCard
                                key={event.id}
                                event={event}
                                onDetails={() => setSelectedEvent(event)}
                            />
                        ))}
                    </div>
                )}

                <div className="mt-16 bg-[#1B0B70] p-8 rounded-2xl max-w-3xl mx-auto shadow-[0_0_20px_rgba(75,51,217,0.6)]">
                    <h3 className="text-2xl font-bold mb-3">💜 Promoção Especial</h3>
                    <p className="text-gray-200">
                        Participe dos dois eventos e ganhe{" "}
                        <span className="font-bold text-[#05F2AF]">20% de desconto</span> em cada um!
                    </p>
                </div>
            </section>


            {selectedEvent && !showLogin && (
                <Modal onClose={() => setSelectedEvent(null)}>
                    <h2 className="text-3xl font-bold mb-2">{selectedEvent.title}</h2>
                    <p className="text-sm mb-1 text-gray-300">{selectedEvent.date}</p>
                    <p className="text-sm mb-4 text-gray-300">{selectedEvent.location}</p>
                    {selectedEvent.image && (
                        <img
                            src={selectedEvent.image}
                            className="w-full rounded-xl mb-4 shadow-lg"
                        />
                    )}
                    <p className="text-gray-100 mb-6">{selectedEvent.description}</p>
                    <Button onClick={() => setShowLogin(true)}>Quero participar</Button>
                </Modal>
            )}


            {showLogin && (
                <Modal
                    onClose={() => {
                        setShowLogin(false);
                        setSelectedEvent(null);
                    }}
                >
                    <LoginForm
                        selectedEvent={selectedEvent || undefined} // <--- passa como prop
                        onSuccess={() => {
                            const eventCode = selectedEvent?.code;
                            setShowLogin(false);
                            setSelectedEvent(null);
                            if (eventCode) navigate(`/cadastro?evento=${eventCode}`);
                            else navigate("/cadastro");
                        }}
                    />
                </Modal>
            )}
        </div>
    );
}
