import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Star } from "lucide-react";
import { supabase } from "../lib/supabaseClient";

export default function ReviewPage() {
    const { code } = useParams();
    const navigate = useNavigate();

    const [coupon, setCoupon] = useState<any>(null);
    const [rating, setRating] = useState<number>(0);
    const [comment, setComment] = useState("");
    const [submitted, setSubmitted] = useState(false);

    useEffect(() => {
        const fetchCoupon = async () => {
            const { data } = await supabase.from("coupons").select("*").eq("code", code).single();
            setCoupon(data);
        };
        fetchCoupon();
    }, [code]);

    const handleSubmit = async () => {
        if (!rating) return alert("Dê uma nota antes de enviar!");
        await supabase
            .from("coupons")
            .update({ rating, comment })
            .eq("code", code);
        setSubmitted(true);
    };

    if (submitted)
        return (
            <div className="min-h-screen bg-[#0E0637] text-white flex flex-col items-center justify-center">
                <h1 className="text-3xl font-bold mb-4">✨ Obrigado pela sua avaliação!</h1>
                <p className="text-gray-300">Sua opinião ajuda a melhorar os próximos eventos 💜</p>
                <button
                    onClick={() => navigate("/")}
                    className="mt-6 px-6 py-3 bg-[#6A4CFF] rounded-lg hover:bg-[#4B33D9] transition font-semibold"
                >
                    Voltar para início
                </button>
            </div>
        );

    return (
        <div className="min-h-screen bg-[#0E0637] text-white flex flex-col items-center justify-center px-6">
            <h1 className="text-3xl font-bold mb-4">Avaliar {coupon?.event}</h1>
            <p className="text-gray-400 mb-8 text-center max-w-md">
                Como foi sua experiência neste evento? Dê uma nota e deixe seu comentário.
            </p>

            {/* ⭐ Rating */}
            <div className="flex gap-2 mb-6">
                {[1, 2, 3, 4, 5].map((i) => (
                    <Star
                        key={i}
                        size={40}
                        className={`cursor-pointer transition ${i <= rating ? "text-[#F2E205] fill-[#F2E205]" : "text-gray-500"
                            }`}
                        onClick={() => setRating(i)}
                    />
                ))}
            </div>

            <textarea
                placeholder="Deixe seu comentário..."
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                className="w-full max-w-md p-3 rounded-lg bg-[#1B0B70] border border-[#4B33D9] text-white 
                   focus:outline-none focus:ring-2 focus:ring-[#6A4CFF] mb-6"
                rows={4}
            />

            <button
                onClick={handleSubmit}
                className="px-8 py-3 bg-[#6A4CFF] rounded-lg hover:bg-[#4B33D9] transition font-semibold"
            >
                Enviar avaliação
            </button>
        </div>
    );
}
