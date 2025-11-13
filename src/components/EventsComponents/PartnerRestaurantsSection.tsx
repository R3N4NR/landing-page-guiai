import { mockRestaurants } from "../../mock/dataMock";

export default function PartnerRestaurantsSection() {
    return (
        <section className="py-20 px-8 bg-[#1B0B70]">
            <div className="max-w-7xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                    Restaurantes Parceiros
                </h2>
                <p className="text-gray-300 mb-12">
                    Locais credenciados onde você pode usar seus cupons de evento.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                    {mockRestaurants.map((rest) => (
                        <div
                            key={rest.id}
                            className="bg-white text-gray-800 rounded-2xl shadow-md hover:shadow-2xl transition-all overflow-hidden border border-purple-200"
                        >
                            <img
                                src={rest.image}
                                alt={rest.name}
                                className="h-40 w-full object-cover"
                            />
                            <div className="p-5 text-left">
                                <h3 className="text-lg font-semibold text-[#6A4CFF] mb-1">
                                    {rest.name}
                                </h3>
                                <p className="text-sm text-gray-500 mb-2">{rest.location}</p>
                                <p className="text-sm text-gray-700 line-clamp-3">
                                    {rest.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
