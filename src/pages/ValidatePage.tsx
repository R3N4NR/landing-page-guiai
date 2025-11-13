import { useState } from "react";
import { Scanner } from "@yudiel/react-qr-scanner";
import { toast } from "react-toastify";

export default function ValidatePage() {
    const [cameraActive, setCameraActive] = useState(false);
    const [manualMode, setManualMode] = useState(false);
    const [manualCode, setManualCode] = useState("");
    const [status, setStatus] = useState<null | "valid" | "invalid" | "used">(null);

    const validateCode = async (code: string) => {

        const mockCodes = ["INOVA-X-123", "INOVA-Y-456"];
        if (mockCodes.includes(code)) {
            setStatus("valid");
        } else {
            setStatus("invalid");
        }
    };

    const handleCameraError = (err: any) => {
        toast.error(`Erro de câmera: ${err?.message || "não foi possível acessar a câmera"}`);
        setCameraActive(false);
        setManualMode(true);
    };

    return (
        <div className="min-h-screen bg-[#0E0637] text-white flex flex-col items-center justify-center px-6">
            <img
                src="/logo-alt.png"
                alt="Logo Guiaí"
                className="w-32 mb-8 cursor-pointer hover:scale-105 transition"
                onClick={() => (window.location.href = "/")}
            />

            <h1 className="text-3xl font-bold mb-6 text-center">Validação de Cupom</h1>

            {!cameraActive && !manualMode && (
                <div className="flex flex-col items-center gap-4">


                    <button
                        onClick={() => setManualMode(true)}
                        className="text-gray-300 underline hover:text-white transition"
                    >
                        Não consegue abrir a câmera? Digite o código manualmente
                    </button>
                </div>
            )}

            {cameraActive && !manualMode && (
                <div className="w-full max-w-sm mt-6">
                    <Scanner
                        onScan={(detected) => {
                            const result = detected?.[0]?.rawValue;
                            if (result) {
                                setCameraActive(false);
                                validateCode(result);
                            }
                        }}
                        onError={handleCameraError}
                        constraints={{ facingMode: "environment" }}

                    />

                    <button
                        onClick={() => {
                            setCameraActive(false);
                            setManualMode(true);
                        }}
                        className="mt-4 text-gray-300 underline hover:text-white transition"
                    >
                        Problemas com a leitura? Digitar código manualmente
                    </button>
                </div>
            )}

            {manualMode && (
                <div className="w-full max-w-md mt-6 text-center">
                    <p className="text-gray-300 mb-4">Digite o código impresso abaixo do QR Code:</p>
                    <input
                        type="text"
                        value={manualCode}
                        onChange={(e) => setManualCode(e.target.value)}
                        placeholder="Ex: INOVA-X-123"
                        className="w-full p-3 rounded-lg bg-[#1B0B70] border border-[#4B33D9] text-white focus:outline-none focus:ring-2 focus:ring-[#6A4CFF]"
                    />
                    <button
                        onClick={() => validateCode(manualCode)}
                        className="mt-4 px-6 py-3 bg-[#6A4CFF] rounded-lg hover:bg-[#4B33D9] transition font-semibold"
                    >
                        Validar código
                    </button>

                    <button
                        onClick={() => {
                            setManualMode(false);
                            setCameraActive(true);
                        }}
                        className="block mx-auto mt-4 text-gray-300 underline hover:text-white transition"
                    >
                        Voltar para leitura com câmera
                    </button>
                </div>
            )}

            {status && (
                <div className="mt-10 p-6 rounded-2xl text-center max-w-md w-full shadow-[0_0_20px_rgba(106,76,255,0.4)]">
                    {status === "valid" && (
                        <p className="text-[#05F2AF] text-xl font-bold">✅ Cupom válido! Pode liberar a entrada.</p>
                    )}
                    {status === "used" && (
                        <p className="text-[#F2E205] text-xl font-bold">⚠️ Cupom já foi utilizado.</p>
                    )}
                    {status === "invalid" && (
                        <p className="text-red-500 text-xl font-bold">❌ Código inválido. Verifique e tente novamente.</p>
                    )}
                </div>
            )}
        </div>
    );
}
