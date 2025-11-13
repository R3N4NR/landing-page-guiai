import { useState, useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { supabase } from "../lib/supabaseClient";
import Header from "../components/Basics/Header";
import Button from "../components/Basics/Button";
import InputField from "../components/Basics/InputField"; // input genérico
import { EventsInterface } from "../types/EventsInterface";
import LoginForm from "../components/Forms/LoginForm";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export default function RegisterPage() {
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();
    const [evento, setEvento] = useState<EventsInterface | null>(null);
    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState<string | null>(null);
    const [showLoginButton, setShowLoginButton] = useState(false);
    const [showLoginForm, setShowLoginForm] = useState(false);

    const [formData, setFormData] = useState({
        nome: "",
        email: "",
        telefone: "",
        senha: "",
        confirmarSenha: "",
    });

    // Busca evento pelo code
    useEffect(() => {
        const fetchEvent = async () => {
            const code = searchParams.get("evento");
            if (!code) return;

            const { data, error } = await supabase
                .from("events")
                .select("*")
                .eq("code", code)
                .single();

            if (error) console.error("Erro ao buscar evento:", error.message);
            else setEvento(data || null);
        };

        fetchEvent();
    }, [searchParams]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!evento) return toast.error("Evento inválido.");

        if (formData.senha !== formData.confirmarSenha) {
            setErrorMessage("As senhas não conferem.");
            return;
        }

        setLoading(true);
        setErrorMessage(null);
        setShowLoginButton(false);

        try {
            const { data: signUpData, error: signUpError } = await supabase.auth.signUp({
                email: formData.email,
                password: formData.senha,
                options: {
                    data: {
                        name: formData.nome,
                        telefone: formData.telefone,
                        role: "user",
                        active: true,
                    },
                },
            });

            if (signUpError) {
                if (signUpError.message.includes("already registered")) {
                    setErrorMessage("Usuário já cadastrado!");
                    setShowLoginButton(true);
                } else {
                    setErrorMessage(signUpError.message);
                }
                return;
            }

            const { data: loginData, error: loginError } = await supabase.auth.signInWithPassword({
                email: formData.email,
                password: formData.senha,
            });

            if (loginError) throw loginError;

            toast.success("Cadastro realizado com sucesso!");
            navigate("/inicio");
        } catch (err: unknown) {
            if (err instanceof Error) toast.error(err.message);
            else toast.error("Erro desconhecido");
        } finally {
            setLoading(false);
        }
    };

    if (!evento) {
        return (
            <div className="min-h-screen bg-[#0E0637] text-white flex flex-col items-center justify-center">
                <Header />
                <p className="text-gray-300 text-center">Evento não encontrado.</p>
            </div>
        );
    }

    if (showLoginForm) {
        return (
            <div className="min-h-screen bg-[#0E0637] text-white flex flex-col items-center py-16 px-6">
                <Header />
                <div className="w-full max-w-md">
                    <LoginForm onSuccess={() => navigate("/inicio")} selectedEvent={evento} />
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-[#0E0637] text-white flex flex-col items-center py-16 px-6">
            <Header />

            {/* Toast de erro */}
            {errorMessage && (
                <div className="mb-4 p-3 rounded bg-purple-700 text-white text-center">
                    {errorMessage}
                    {showLoginButton && (
                        <Button
                            className="ml-4 px-4 py-1 bg-[#6A4CFF] text-white rounded hover:bg-[#4B33D9]"
                            onClick={() => setShowLoginForm(true)}
                        >
                            Fazer login
                        </Button>
                    )}
                </div>
            )}

            <div className="w-full max-w-lg bg-gradient-to-br from-[#4B33D9] to-[#6A4CFF] p-8 rounded-2xl shadow-[0_0_25px_rgba(75,51,217,0.6)] mb-10 text-center">
                <h1 className="text-3xl font-bold mb-2">{evento.title}</h1>
                <p className="text-sm text-gray-200">{evento.date}</p>
                <p className="text-sm text-gray-300 mb-4">{evento.location}</p>
                <p className="text-gray-100">{evento.short}</p>
            </div>

            <form
                onSubmit={handleSubmit}
                className="w-full max-w-md bg-[#1B0B70] p-8 rounded-2xl shadow-[0_0_20px_rgba(75,51,217,0.6)]"
            >
                <h2 className="text-2xl font-semibold mb-6 text-center">Faça seu cadastro</h2>

                <div className="flex flex-col gap-4">
                    <InputField
                        name="nome"
                        type="text"
                        placeholder="Seu nome completo"
                        value={formData.nome}
                        onChange={handleChange}
                    />
                    <InputField
                        name="email"
                        type="email"
                        placeholder="Seu e-mail"
                        value={formData.email}
                        onChange={handleChange}
                    />
                    <InputField
                        name="telefone"
                        type="tel"
                        placeholder="Seu telefone"
                        value={formData.telefone}
                        onChange={handleChange}
                    />
                    <InputField
                        name="senha"
                        type="password"
                        placeholder="Senha"
                        value={formData.senha}
                        onChange={handleChange}
                    />
                    <InputField
                        name="confirmarSenha"
                        type="password"
                        placeholder="Confirme sua senha"
                        value={formData.confirmarSenha}
                        onChange={handleChange}
                    />
                </div>

                <Button type="submit" className="mt-6 w-full" disabled={loading}>
                    {loading ? "Registrando..." : "Confirmar presença"}
                </Button>
            </form>
        </div>
    );
}
