import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Basics/Header";
import Button from "../components/Basics/Button";
import QRCodeModal from "../components/Modals/QRCodeModal";
import { Star } from "lucide-react";
import { supabase } from "../lib/supabaseClient";
import { User } from "@supabase/supabase-js";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export default function EventOverviewPage() {
    const { id } = useParams(); // ID do evento na URL
    const [evento, setEvento] = useState<any>(null);
    const [user, setUser] = useState<User | null>(null);
    const [selectedCoupon, setSelectedCoupon] = useState<any | null>(null);
    const [alreadyHasCoupon, setAlreadyHasCoupon] = useState(false);
    const [showRewardModal, setShowRewardModal] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const initialize = async () => {
            if (!id) return;
            setLoading(true);

            try {
                // 1️⃣ Buscar usuário logado
                const { data: authData, error: authError } = await supabase.auth.getUser();
                if (authError) {
                    console.error("Erro ao obter usuário:", authError.message);
                } else if (authData.user) {
                    setUser(authData.user);
                }

                // 2️⃣ Buscar evento pelo ID
                const { data: eventData, error: eventError } = await supabase
                    .from("events")
                    .select("*")
                    .eq("id", id)
                    .maybeSingle(); // evita erro se não existir

                if (eventError) {
                    console.error("Erro ao buscar evento:", eventError.message);
                } else if (!eventData) {
                    console.warn("Evento não encontrado");
                } else {
                    setEvento(eventData);
                }

                // 3️⃣ Verificar se o usuário já tem cupom para este evento
                if (authData.user && eventData) {
                    const { data: couponData, error: couponError } = await supabase
                        .from("coupons")
                        .select("*")
                        .eq("user_id", authData.user.id)
                        .eq("event_id", eventData.id)
                        .maybeSingle();

                    if (couponError) {
                        console.error("Erro ao buscar cupom:", couponError.message);
                    } else if (couponData) {
                        setAlreadyHasCoupon(true);
                        // ❌ Não definir selectedCoupon aqui para não abrir o modal automaticamente
                    }
                }
            } catch (err) {
                console.error("Erro desconhecido:", err);
            } finally {
                setLoading(false);
            }
        };

        initialize();
    }, [id]);

    if (loading) return <div className="min-h-screen text-white">Carregando...</div>;
    if (!evento) return <div className="min-h-screen text-white">Evento não encontrado</div>;
    if (!user) return <div className="min-h-screen text-white">Faça login para ver o evento</div>;

    const generateCouponCode = () => Math.random().toString(36).substring(2, 10).toUpperCase();

    const handlePegarCupom = async () => {
        if (!user || !evento) return;

        if (alreadyHasCoupon) {
            toast.info("Você já pegou o cupom deste evento!");
            return;
        }

        try {
            const code = generateCouponCode();
            const { data, error } = await supabase
                .from("coupons")
                .insert({ user_id: user.id, event_id: evento.id, code })
                .select()
                .maybeSingle();

            if (error) {
                console.error("Erro ao criar cupom:", error.message);
                toast.error("Erro ao gerar cupom!");
                return;
            }

            setSelectedCoupon(data); // abrir modal apenas após gerar cupom
            setAlreadyHasCoupon(true);
            setShowRewardModal(true);
            toast.success("🎉 Cupom gerado com sucesso!");
        } catch (err) {
            console.error("Erro ao pegar cupom:", err);
            toast.error("Erro desconhecido ao pegar cupom");
        }
    };

    return (
        <div className="min-h-screen bg-[#0E0637] text-white flex flex-col items-center py-16 px-6">
            <Header />

            <div className="w-full max-w-lg bg-gradient-to-br from-[#4B33D9] to-[#6A4CFF] p-8 rounded-2xl shadow-[0_0_25px_rgba(75,51,217,0.6)] mb-10 text-center">
                <h1 className="text-3xl font-bold mb-2">{evento.title}</h1>
                <p className="text-sm text-gray-200">{evento.date}</p>
                <p className="text-sm text-gray-300 mb-4">{evento.location}</p>
                <p className="text-gray-100">{evento.description}</p>
            </div>

            <Button
                onClick={handlePegarCupom}
                disabled={alreadyHasCoupon}
                className={`bg-[#6A4CFF] text-white hover:bg-[#4B33D9] px-6 py-3 rounded-lg ${alreadyHasCoupon ? "opacity-50 cursor-not-allowed" : ""}`}
            >
                {alreadyHasCoupon ? "Cupom já resgatado" : "Pegar Cupom"}
            </Button>

            {/* Modal QR Code */}
            {selectedCoupon && (
                <QRCodeModal ticket={selectedCoupon} userId={user.id} onClose={() => setSelectedCoupon(null)} />
            )}

            {/* Modal de recompensa */}
            {showRewardModal && (
                <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
                    <div className="bg-[#1B0B70] p-8 rounded-2xl max-w-sm text-center shadow-lg">
                        <Star size={50} className="mx-auto text-yellow-400 mb-4" />
                        <h2 className="text-2xl font-bold mb-2">🎉 Bom passeio!</h2>
                        <p className="text-gray-300 mb-6">
                            Você ganhou um cupom para usar no evento e garantir desconto!
                        </p>
                        <Button
                            onClick={() => setShowRewardModal(false)}
                            className="bg-[#6A4CFF] text-white hover:bg-[#4B33D9] px-6 py-3 rounded-lg"
                        >
                            Fechar
                        </Button>
                    </div>
                </div>
            )}
        </div>
    );
}
