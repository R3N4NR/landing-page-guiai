import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Button from "../components/Basics/Button";
import Header from "../components/Basics/Header/Header";
import QRCodeModal from "../components/Modals/QRCodeModal";
import { supabase } from "../lib/supabaseClient";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface CouponWithEvent {
    id: string;
    code: string;
    event: {
        id: string;
        title: string;
        date: string;
        location: string;
    };
}

export default function HomePage() {
    const navigate = useNavigate();
    const [user, setUser] = useState<any>(null);
    const [coupons, setCoupons] = useState<CouponWithEvent[]>([]);
    const [selectedTicket, setSelectedTicket] = useState<CouponWithEvent | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const initialize = async () => {
            setLoading(true);

            try {
                // 1️⃣ Buscar usuário
                const { data: authData, error: authError } = await supabase.auth.getUser();
                if (authError) {
                    toast.error(`Erro ao obter usuário: ${authError.message}`);
                    setLoading(false);
                    return;
                }

                if (!authData.user) {
                    toast.info("Faça login para ver seus cupons.");
                    setLoading(false);
                    return;
                }

                setUser(authData.user);

                // 2️⃣ Buscar cupons do usuário
                const { data: couponData, error: couponError } = await supabase
                    .from("coupons")
                    .select("id, code, event:events(id, title, date, location)")
                    .eq("user_id", authData.user.id);

                if (couponError) {
                    toast.error(`Erro ao buscar cupons: ${couponError.message}`);
                    setLoading(false);
                    return;
                }

                if (!couponData || couponData.length === 0) {
                    toast.info("Você ainda não possui cupons resgatados.");
                }

                const formattedCoupons: CouponWithEvent[] = (couponData || []).map((coupon: any) => {
                    const eventObj = Array.isArray(coupon.event) ? coupon.event[0] : coupon.event;
                    return {
                        ...coupon,
                        event: eventObj || { id: "", title: "Evento não encontrado", date: "", location: "" },
                    };
                });

                setCoupons(formattedCoupons);
            } catch (err: any) {
                toast.error(`Erro inesperado: ${err.message || err}`);
            } finally {
                setLoading(false);
            }
        };

        initialize();
    }, []);

    const handleViewEvent = (eventId: string) => {
        navigate(`/evento/${eventId}?pegarCupom=true`);
    };

    if (loading) return <div className="min-h-screen text-white">Carregando...</div>;
    if (!user) return <div className="min-h-screen text-white">Faça login para ver seus cupons</div>;

    return (
        <div className="min-h-screen bg-[#0E0637] text-white flex flex-col">
            <Header />

            <main className="flex flex-col items-center w-full px-4 py-16">
                <section className="text-center max-w-4xl w-full mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">
                        Bem-vindo, <span className="text-[#6A4CFF]">{user?.user_metadata?.name}</span>!
                    </h1>
                    <p className="text-gray-300">
                        Aqui estão seus bilhetes para os eventos que você vai participar:
                    </p>
                </section>

                <section className="flex flex-col gap-6 sm:gap-10 w-full max-w-3xl">
                    {coupons.length === 0 ? (
                        <p className="text-center text-gray-400">Nenhum cupom disponível no momento.</p>
                    ) : (
                        coupons.map((coupon) => (
                            <div
                                key={coupon.id}
                                className="p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-[#4B33D9] to-[#6A4CFF]
                                    shadow-[0_0_25px_rgba(75,51,217,0.4)] hover:shadow-[0_0_40px_rgba(75,51,217,0.8)]
                                    transition transform hover:scale-[1.02]
                                    flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-6 w-full"
                            >
                                <div className="text-left w-full sm:w-2/3">
                                    <h2 className="text-2xl sm:text-3xl font-bold">{coupon.event?.title}</h2>
                                    <p className="text-sm sm:text-base text-gray-300 mt-1">{coupon.event?.location}</p>
                                </div>

                                <div className="flex flex-col sm:flex-row items-start sm:items-center sm:justify-end gap-3 sm:gap-4 mt-4 sm:mt-0 w-full sm:w-auto">
                                    <p className="text-xl sm:text-2xl font-semibold text-[#05F2AF]">{coupon.event?.date}</p>
                                    <div className="flex gap-2 sm:gap-3 flex-wrap">
                                        <Button
                                            onClick={() => coupon?.event?.id && handleViewEvent(coupon?.event?.id)}
                                            disabled={!coupon.event?.id}
                                        >
                                            Ver detalhes
                                        </Button>
                                        <Button
                                            variant="outline"
                                            onClick={() => setSelectedTicket(coupon)}
                                        >
                                            Ver QR Code
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        ))
                    )}
                </section>
            </main>

            {selectedTicket && (
                <QRCodeModal
                    ticket={selectedTicket}
                    userId={user.id}
                    onClose={() => setSelectedTicket(null)}
                />
            )}
        </div>
    );
}
