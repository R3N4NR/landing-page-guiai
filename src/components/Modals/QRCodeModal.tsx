import QRCode from "react-qr-code";
import Modal from "./Modal";

export default function QRCodeModal({ ticket, userId, onClose }: any) {
    const code = `${userId}-${ticket.code}`;

    return (
        <Modal onClose={onClose}>
            <h2 className="text-2xl font-bold mb-6 text-center">{ticket.title}</h2>
            <div className="flex justify-center mb-6">
                <QRCode value={code} bgColor="#1B0B70" fgColor="#ffffff" size={200} />
            </div>
            <p className="text-center text-gray-300 mb-4">Código do ingresso:</p>
            <p className="text-center text-[#05F2AF] font-mono text-lg font-semibold">
                {code}
            </p>
        </Modal>
    );
}
