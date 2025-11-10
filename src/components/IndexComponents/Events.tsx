export default function Eventos() {
    const events = [
        { title: "Próximo evento aqui", date: "Sem data" },
        { title: "Próximo evento aqui", date: "Sem data" },
    ];

    return (
        <section className="py-24 px-6 bg-[#4B33D9] text-center">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-[#F2E205]">Eventos Futuros</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-center">
                    {events.map((event) => (
                        <div
                            key={event.title}
                            className="bg-white/10 p-6 rounded-xl hover:scale-105 transition"
                        >
                            <h3 className="text-xl font-semibold mb-2 text-[#F2E205]">{event.title}</h3>
                            <p className="text-white">{event.date}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
