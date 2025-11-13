// src/pages/LoginPage.tsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Basics/Header/Header";
import LoginForm from "../components/Forms/LoginForm";
import { EventsInterface } from "../types/EventsInterface";

export default function LoginPage() {
    const navigate = useNavigate();
    const [errorMessage, setErrorMessage] = useState<string | null>(null);

    const handleLoginSuccess = () => {

        navigate("/inicio");
    };

    const selectedEvent: EventsInterface | undefined = undefined;

    return (
        <div className="min-h-screen bg-[#0E0637] text-white flex flex-col items-center py-16 px-6">

            <button onClick={() => navigate("/")}><img src="/logo-alt.png" alt="" className="w-[200px] h-[200px]" /></button>

            <div className="w-full max-w-md bg-gradient-to-br from-[#4B33D9] to-[#6A4CFF] p-8 rounded-2xl shadow-[0_0_25px_rgba(75,51,217,0.6)] mb-10 text-center">
                <h1 className="text-3xl font-bold mb-2">Login</h1>
                <p className="text-gray-300 text-sm">
                    Faça login para acessar seus eventos e cupons
                </p>
            </div>

            {errorMessage && (
                <div className="mb-4 p-3 rounded bg-red-600 text-white text-center">
                    {errorMessage}
                </div>
            )}

            <div className="w-full max-w-md bg-[#1B0B70] p-8 rounded-2xl shadow-[0_0_20px_rgba(75,51,217,0.6)]">
                <LoginForm onSuccess={handleLoginSuccess} selectedEvent={selectedEvent} />
            </div>
        </div>
    );
}
