import { mockLocations } from "../../mock/dataMock";

interface Props {
    onSelectSpot: (id: string) => void;
}

export default function TouristSpotsSection({ onSelectSpot }: Props) {
    return (
        <section className="py-20 px-8 bg-[#1B0B70] text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white">
                Pontos Turísticos
            </h2>
            <p className="text-gray-300 mb-10 max-w-2xl mx-auto">
                Explore locais únicos e descubra passeios oferecidos por guias
                especializados.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-7xl mx-auto">
                {mockLocations.map((loc) => (
                    <div
                        key={loc.id}
                        className="relative cursor-pointer group rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition-all"
                        onClick={() => onSelectSpot(loc.id)}
                    >
                        <img
                            src={loc.image}
                            alt={loc.name}
                            className="w-full h-56 object-cover opacity-90 group-hover:opacity-100 transition"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0E0637]/80 via-transparent to-transparent flex items-end justify-center">
                            <h3 className="text-white text-xl font-bold mb-4">{loc.name}</h3>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
