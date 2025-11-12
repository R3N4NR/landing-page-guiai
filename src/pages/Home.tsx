import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { supabase } from "../lib/supabaseClient"; // caso queira buscar eventos reais
import Button from "../components/Basics/Button";
import Header from "../components/Basics/Header";
import QRCodeModal from "../components/Modals/QRCodeModal";

interface EventType {
    id: string;
    code: string;
    title: string;
    location: string;
    date: string;
    short: string;
}

interface UserType {
    id: string;
    name: string;
    email: string;
    tickets: string[]; // array de event_id
}

export default function HomePage() {
    const navigate = useNavigate();
    const [events, setEvents] = useState<EventType[]>([]);
    const [user, setUser] = useState<UserType | null>(null);
    const [selectedEvent, setSelectedEvent] = useState<EventType | null>(null);

    // Simular login do usuário (ou pegar do Supabase Auth)
    useEffect(() => {
        const fetchUserAndEvents = async () => {
            const { data: authUser } = await supabase.auth.getUser();
            if (!authUser.user) return navigate("/login");

            // Aqui você poderia buscar eventos e tickets reais
            const { data: eventsData } = await supabase.from("events").select("*");
            const { data: ticketsData } = await supabase
                .from("coupons")
                .select("event_id")
                .eq("user_id", authUser.user.id);

            setUser({
                id: authUser.user.id,
                name: authUser.user.user_metadata.name || "Usuário",
                email: authUser.user.email || "",
                tickets: ticketsData ? ticketsData.map((t: any) => t.event_id) : [],
            });

            setEvents(eventsData || []);
        };

        fetchUserAndEvents();
    }, [navigate]);

    if (!user) {
        return (
            <div className="min-h-screen bg-[#0E0637] text-white flex items-center justify-center">
                Carregando...
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-[#0E0637] text-white relative">
            <Header />

            <section className="py-20 px-8 text-center">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                    Bem-vindo, <span className="text-[#6A4CFF]">{user.name}</span>!
                </h1>
                <p className="text-gray-300 mb-12">
                    Aqui estão os eventos disponíveis para você:
                </p>

                <div className="flex flex-col gap-10 max-w-3xl mx-auto">
                    {events.map((event) => {
                        const hasTicket = user.tickets.includes(event.id);
                        return (
                            <div
                                key={event.id}
                                className="p-8 rounded-2xl bg-gradient-to-r from-[#4B33D9] to-[#6A4CFF] 
                shadow-[0_0_25px_rgba(75,51,217,0.4)] hover:shadow-[0_0_40px_rgba(75,51,217,0.8)]
                transition transform hover:scale-[1.02] flex flex-col sm:flex-row justify-between items-center gap-6"
                            >
                                <div className="text-left">
                                    <h2 className="text-3xl font-bold">{event.title}</h2>
                                    <p className="text-sm text-gray-300">{event.location}</p>
                                    <p className="text-gray-300">{event.date}</p>
                                    <p className="text-gray-300 mt-2">{event.short}</p>
                                </div>

                                <div className="flex flex-col items-center sm:items-end gap-3">
                                    <Button onClick={() => navigate(`/evento/${event.code}`)}>
                                        Ver detalhes
                                    </Button>
                                    {hasTicket ? (
                                        <Button
                                            variant="outline"
                                            onClick={() => setSelectedEvent(event)}
                                        >
                                            Ver cupom
                                        </Button>
                                    ) : (
                                        <Button
                                            variant="outline"
                                            onClick={() =>
                                                navigate(`/evento/${event.code}?pegarCupom=true`)
                                            }
                                        >
                                            Pegar cupom
                                        </Button>
                                    )}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </section>

            {selectedEvent && (
                <QRCodeModal
                    ticket={selectedEvent}
                    userId={user.id}
                    onClose={() => setSelectedEvent(null)}
                />
            )}
        </div>
    );
}
