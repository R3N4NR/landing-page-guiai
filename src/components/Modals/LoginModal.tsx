import Modal from "./ModalBase";
import LoginForm from "../Forms/LoginForm";
import { useNavigate } from "react-router-dom";
import { EventsInterface } from "../../types/EventsInterface";

interface Props {
    event: EventsInterface | null;
    onClose: () => void;
}

export default function LoginModal({ event, onClose }: Props) {
    const navigate = useNavigate();

    return (
        <Modal onClose={onClose}>
            <LoginForm
                selectedEvent={event || undefined}
                onSuccess={() => {
                    const eventCode = event?.code;
                    onClose();
                    navigate(eventCode ? `/cadastro?evento=${eventCode}` : "/cadastro");
                }}
            />
        </Modal>
    );
}
