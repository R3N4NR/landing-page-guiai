
import Button from "../Basics/Button";
import { EventsInterface } from "../../types/EventsInterface";
import Modal from "../Modals/ModalBase";

interface Props {
    event: EventsInterface;
    onClose: () => void;
    onParticipate: () => void;
}

export default function EventDetailsModal({ event, onClose, onParticipate }: Props) {
    return (
        <Modal onClose={onClose}>
            <h2 className="text-3xl font-bold mb-2">{event.title}</h2>
            <p className="text-sm mb-1 text-gray-300">{event.date}</p>
            <p className="text-sm mb-4 text-gray-300">{event.location}</p>

            {event.image && (
                <img src={event.image} alt={event.title} className="w-full rounded-xl mb-4 shadow-lg" />
            )}

            <p className="text-gray-100 mb-6">{event.description}</p>
            <Button onClick={onParticipate}>Quero participar</Button>
        </Modal>
    );
}
