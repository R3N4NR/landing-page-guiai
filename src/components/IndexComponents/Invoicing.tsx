export default function Invoicing() {
    const projections = [
        { label: "2026", value: "R$ 30K" },
        { label: "2027", value: "R$ 200K" },
        { label: "2028", value: "R$ 1M" },
    ];

    return (
        <section className="py-24 px-6 bg-gray-50 text-center">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-[#4B33D9]">Projeções de Faturamento</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-center">
                    {projections.map((item) => (
                        <div
                            key={item.label}
                            className="p-6 rounded-xl bg-[#4B33D9] text-[#F2E205] hover:scale-105 transition shadow-lg hover:shadow-[#F2E205]/40"
                        >
                            <h3 className="text-xl font-semibold mb-2">{item.label}</h3>
                            <p className="text-3xl font-bold">{item.value}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
