import { useNavigate } from "react-router-dom";

export default function Header() {
    const navigate = useNavigate();

    return (
        <header className="z-20 mb-8 flex justify-start">
            <img
                src="/logo-alt.png"
                alt="Logo Guiaí"
                className="m-5 w-28 md:w-36 cursor-pointer transition-transform duration-300 hover:scale-110"
                onClick={() => navigate("/")}
            />
        </header>
    );
}
