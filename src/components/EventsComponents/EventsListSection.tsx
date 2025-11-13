import { useState } from "react";
import { mockEvents } from "../../mock/dataMock";
import { EventsInterface } from "../../types/EventsInterface";

interface Props {
    onSelectEvent: (event: EventsInterface) => void;
}

export default function DemoEventsSection({ onSelectEvent }: Props) {
    const [search, setSearch] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const eventsPerPage = 8;

    const filtered = mockEvents.filter((e) =>
        e.title.toLowerCase().includes(search.toLowerCase())
    );

    const totalPages = Math.ceil(filtered.length / eventsPerPage);
    const startIndex = (currentPage - 1) * eventsPerPage;
    const currentEvents = filtered.slice(startIndex, startIndex + eventsPerPage);

    const next = () => currentPage < totalPages && setCurrentPage((p) => p + 1);
    const prev = () => currentPage > 1 && setCurrentPage((p) => p - 1);

    return (
        <section className="bg-white text-gray-900 py-20 px-8">
            <div className="max-w-7xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-8">
                    Eventos Demonstrativos
                </h2>
                <p className="text-gray-600 mb-10">
                    Eventos de exemplo para visualização e testes da interface.
                </p>

                {/* Filtro */}
                <div className="mb-10">
                    <input
                        type="text"
                        placeholder="Filtrar por nome do evento..."
                        value={search}
                        onChange={(e) => {
                            setSearch(e.target.value);
                            setCurrentPage(1);
                        }}
                        className="w-full md:w-1/2 px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                </div>

                {/* Grid */}
                {currentEvents.length === 0 ? (
                    <p className="text-gray-600">Nenhum evento encontrado.</p>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                        {currentEvents.map((event) => (
                            <div
                                key={event.id}
                                onClick={() => onSelectEvent(event)}
                                className="bg-gray-50 rounded-2xl shadow-md hover:shadow-xl transition-all cursor-pointer overflow-hidden"
                            >
                                {event.image && (
                                    <img
                                        src={event.image}
                                        alt={event.title}
                                        className="h-40 w-full object-cover"
                                    />
                                )}
                                <div className="p-4 text-left">
                                    <h3 className="font-semibold text-lg mb-1">{event.title}</h3>
                                    <p className="text-sm text-gray-600">{event.date}</p>
                                    <p className="text-sm text-gray-600">{event.location}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                {/* Paginação */}
                {filtered.length > eventsPerPage && (
                    <div className="flex justify-center items-center gap-4 mt-12">
                        <button
                            onClick={prev}
                            disabled={currentPage === 1}
                            className={`px-4 py-2 rounded-lg border transition ${currentPage === 1
                                    ? "text-gray-400 border-gray-200 cursor-not-allowed"
                                    : "text-purple-600 border-purple-300 hover:bg-purple-50"
                                }`}
                        >
                            ← Anterior
                        </button>

                        <span className="text-gray-700 font-medium">
                            Página {currentPage} de {totalPages}
                        </span>

                        <button
                            onClick={next}
                            disabled={currentPage === totalPages}
                            className={`px-4 py-2 rounded-lg border transition ${currentPage === totalPages
                                    ? "text-gray-400 border-gray-200 cursor-not-allowed"
                                    : "text-purple-600 border-purple-300 hover:bg-purple-50"
                                }`}
                        >
                            Próxima →
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
}
