import { User, CalendarDays, LogOut } from "lucide-react";

interface DropdownMenuProps {
    navigate: (path: string) => void;
    onLogout: () => void;
    onClose: () => void;
}

export default function DropdownMenu({ navigate, onLogout, onClose }: DropdownMenuProps) {
    return (
        <div className="absolute right-0 mt-3 bg-white rounded-xl shadow-xl w-48 text-gray-700 overflow-hidden animate-fadeIn">
            <button
                onClick={() => {
                    navigate("/perfil");
                    onClose();
                }}
                className="w-full flex items-center gap-2 px-4 py-3 hover:bg-gray-100"
            >
                <User className="w-4 h-4" /> Meu Perfil
            </button>
            <button
                onClick={() => {
                    navigate("/meus-eventos");
                    onClose();
                }}
                className="w-full flex items-center gap-2 px-4 py-3 hover:bg-gray-100"
            >
                <CalendarDays className="w-4 h-4" /> Meus Eventos
            </button>
            <button
                onClick={onLogout}
                className="w-full flex items-center gap-2 px-4 py-3 text-red-500 hover:bg-gray-100"
            >
                <LogOut className="w-4 h-4" /> Sair
            </button>
        </div>
    );
}
