import { featuredCreator } from "../../mock/dataMock";

interface Props {
    onShowVideo: () => void;
}

export default function FeaturedCreatorSection({ onShowVideo }: Props) {
    return (
        <section className="py-24 px-8 bg-[#0E0637] text-center flex flex-col items-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                Criador em Destaque
            </h2>
            <p className="text-gray-300 mb-10 max-w-md">
                Conheça o rosto por trás das nossas experiências exclusivas.
            </p>

            <div
                className="flex flex-col items-center cursor-pointer hover:opacity-90 transition"
                onClick={onShowVideo}
            >
                <img
                    src={featuredCreator.avatar}
                    alt={featuredCreator.name}
                    className="w-48 h-48 md:w-56 md:h-56 rounded-full object-cover border-4 border-[#6A4CFF] shadow-xl mb-4"
                />
                <h3 className="text-2xl font-semibold text-white">
                    {featuredCreator.name}
                </h3>
                <p className="text-purple-400 mb-3">{featuredCreator.handle}</p>
                <p className="text-gray-300 max-w-sm">{featuredCreator.bio}</p>
            </div>
        </section>
    );
}
