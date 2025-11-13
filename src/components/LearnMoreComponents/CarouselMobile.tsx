import React from "react";
import Slider from "react-slick";

interface InfoCard {
    title: string;
    text: string;
    icon: React.ReactNode;
}

export default function MobileInfoCarousel({ cards }: { cards: InfoCard[] }) {
    const settings = {
        dots: true,
        infinite: true,
        speed: 600,
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
    };

    return (
        <div className="md:hidden px-4 py-12 bg-gray-50 text-gray-900">
            <h2 className="text-2xl font-bold mb-6 text-center text-[#4B33D9]">
                Como o Guiaí Funciona
            </h2>

            <Slider {...settings}>
                {cards.map((card, index) => (
                    <div key={index} className="px-2">
                        <div className="bg-white rounded-2xl p-6 shadow-lg flex flex-col items-center text-center">
                            {card.icon}
                            <h3 className="text-xl font-bold mt-4 mb-2 text-[#4B33D9]">{card.title}</h3>
                            <p className="text-gray-700 text-sm">{card.text}</p>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
}
