export default function Events() {
    const events = [
        { title: "Próximo evento aqui", date: "Sem data" },
        { title: "Próximo evento aqui", date: "Sem data" },
    ];

    return (
        <section className="py-24 px-6 bg-[#4B33D9] text-center">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-[#F2E205]">Eventos Futuros</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-center">
                    {events.map((event, i) => (
                        <div
                            key={i}
                            className="relative bg-white/10 backdrop-blur-md rounded-2xl p-8 flex flex-col items-center shadow-lg border border-white/10 transition-transform duration-300 hover:scale-105 hover:shadow-[#F2E205]/40"
                        >
                            {/* efeito luminescente radial */}
                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,#F2E20520_0%,transparent_70%)] opacity-50 rounded-2xl" />

                            <div className="relative z-10 text-center">
                                <h3 className="text-xl font-semibold mb-2 text-white">{event.title}</h3>
                                <p className="text-white/90">{event.date}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
