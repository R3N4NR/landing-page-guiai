import { useState } from "react";
import { toast } from "react-toastify";
import InputField from "../Basics/InputField";
import Button from "../Basics/Button";
import { useNavigate } from "react-router-dom";


export default function ContactForm() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!formData.name || !formData.email || !formData.message) {
            toast.warning("Por favor, preencha todos os campos!");
            return;
        }

        setLoading(true);
        try {

            await new Promise((r) => setTimeout(r, 1500));
            toast.success("Mensagem enviada com sucesso! ");
            navigate("/")
            setFormData({ name: "", email: "", message: "" });
        } catch {
            toast.error("Erro ao enviar mensagem.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="w-full max-w-md bg-[#1B0B70] p-8 rounded-2xl shadow-[0_0_20px_rgba(75,51,217,0.6)] flex flex-col gap-4"
        >
            <div>
                <label htmlFor="name" className="block text-gray-200 mb-1">
                    Nome
                </label>
                <InputField
                    id="name"
                    name="name"
                    placeholder="Seu nome"
                    value={formData.name}
                    onChange={handleChange}
                    style={{
                        width: "100%"
                    }}
                />
            </div>

            <div>
                <label htmlFor="email" className="block text-gray-200 mb-1">
                    E-mail
                </label>
                <InputField
                    type="email"
                    id="email"
                    name="email"
                    placeholder="seu@email.com"
                    value={formData.email}
                    onChange={handleChange}
                    style={{
                        width: "100%"
                    }}
                />
            </div>

            <div>
                <label htmlFor="message" className="block text-gray-200 mb-1">
                    Mensagem
                </label>
                <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Digite sua mensagem..."
                    className="w-full px-4 py-2 rounded-lg bg-[#0E0637] text-white border border-[#4B33D9] focus:outline-none focus:ring-2 focus:ring-[#6A4CFF]"
                />
            </div>

            <Button type="submit" disabled={loading}>
                {loading ? "Enviando..." : "Enviar Mensagem"}
            </Button>
        </form>
    );
}
