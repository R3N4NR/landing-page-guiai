import { useNavigate } from "react-router-dom";
import Header from "../components/Basics/Header/Header";
import ContactForm from "../components/Forms/ContactForm";
import Footer from "../components/Basics/Footer";

export default function ContactPage() {
    const navigate = useNavigate()
    return (
        <><div className="min-h-screen bg-[#0E0637] text-white flex flex-col items-center py-16 px-6">

            <button onClick={() => navigate("/")}> <img src="/logo-alt.png" alt="Logo Guiaí" className="w-[200px] h-[200px]" /></button>

            <div className="w-full max-w-md bg-gradient-to-br from-[#4B33D9] to-[#6A4CFF] p-8 rounded-2xl shadow-[0_0_25px_rgba(75,51,217,0.6)] mb-10 text-center">
                <h1 className="text-3xl font-bold mb-2">Fale Conosco</h1>
                <p className="text-gray-300 text-sm">
                    Tem dúvidas, sugestões ou precisa de ajuda? Envie sua mensagem abaixo.
                </p>
            </div>

            <ContactForm />

        </div><Footer /></>
    );
}
