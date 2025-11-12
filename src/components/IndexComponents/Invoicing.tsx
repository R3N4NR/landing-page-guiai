import {projections} from '../../mock/dataMock'
export default function Invoicing() {

    return (
        <section className="py-24 px-6 bg-gray-50 text-center">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-[#4B33D9]">
                    Projeções de Faturamento
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-center">
                    {projections.map((item) => (
                        <div
                            key={item.label}
                            className="p-6 rounded-xl bg-white border-2 border-[#4B33D9] text-[#4B33D9] hover:scale-105 transition relative overflow-hidden shadow-lg hover:shadow-[#4B33D980]"
                        >



                            <div className="relative z-10 ">
                                <h3 className="text-xl font-semibold mb-2">{item.label}</h3>
                                <p className="text-3xl font-bold">{item.value}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
