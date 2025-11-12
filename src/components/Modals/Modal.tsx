import { X } from "lucide-react";

interface ModalProps {
    children: React.ReactNode;
    onClose: () => void;
}

export default function Modal({ children, onClose }: ModalProps) {
    return (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex justify-center items-center z-50">
            <div className="bg-[#1B0B70] text-white p-8 rounded-2xl max-w-md w-[90%] relative shadow-[0_0_25px_rgba(106,76,255,0.8)] animate-fadeIn">
                <button
                    className="absolute top-4 right-4 text-gray-300 hover:text-white text-2xl"
                    onClick={onClose}
                >
                    <X size={28} />
                </button>
                {children}
            </div>
        </div>
    );
}
