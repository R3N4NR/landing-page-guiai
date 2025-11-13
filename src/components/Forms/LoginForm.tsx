import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../Basics/Button";
import InputField from "../Basics/InputField"; // nosso input genérico
import { EventsInterface } from "../../types/EventsInterface";
import { supabase } from "../../lib/supabaseClient";

interface Props {
    onSuccess: () => void;
    selectedEvent?: EventsInterface;
}

export default function LoginForm({ onSuccess, selectedEvent }: Props) {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setErrorMessage(null);

        try {
            const { data, error } = await supabase.auth.signInWithPassword({
                email,
                password,
            });

            if (error) {
                setErrorMessage(error.message);
                return;
            }

            // Login bem-sucedido
            onSuccess();
            navigate("/inicio");
        } catch (err: unknown) {
            if (err instanceof Error) setErrorMessage(err.message);
            else setErrorMessage("Erro desconhecido");
        } finally {
            setLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            {errorMessage && (
                <div className="mb-2 p-2 text-center rounded bg-red-600 text-white">
                    {errorMessage}
                </div>
            )}

            <InputField
                type="email"
                placeholder="Seu e-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <InputField
                type="password"
                placeholder="Sua senha"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />

            <Button type="submit" disabled={loading}>
                {loading ? "Entrando..." : "Entrar"}
            </Button>

            <p className="text-gray-300 text-center mt-6 text-sm">
                Ainda não tem conta?{" "}
                <span
                    className="text-[#6A4CFF] cursor-pointer hover:underline"
                    onClick={() => {
                        if (selectedEvent) {
                            navigate(`/cadastro?evento=${selectedEvent.code}`);
                        } else {
                            navigate("/cadastro");
                        }
                    }}
                >
                    Cadastre-se
                </span>
            </p>
        </form>
    );
}
