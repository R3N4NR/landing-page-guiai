import Button from "./Button";
import { EventsInterface } from "../../types/EventsInterface"

interface Props {
    event: EventsInterface;
    onDetails: () => void;
}

export default function EventCard({ event, onDetails }: Props) {
    return (
        <div className="p-8 rounded-2xl bg-gradient-to-br from-[#4B33D9] to-[#6A4CFF]
            shadow-[0_0_25px_rgba(75,51,217,0.4)] hover:shadow-[0_0_40px_rgba(75,51,217,0.8)]
            transition transform hover:scale-105">
            <h2 className="text-3xl font-bold mb-3">{event.title}</h2>
            <p className="text-sm mb-1 text-gray-200">{event.date}</p>
            <p className="text-sm mb-4 text-gray-200">{event.location}</p>
            <p className="text-base mb-6 text-gray-100">{event.short}</p>
            <Button onClick={onDetails}>Ver detalhes</Button>
        </div>
    );
}
