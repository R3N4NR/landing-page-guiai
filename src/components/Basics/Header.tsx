import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { ChevronDown, LogOut, User, CalendarDays } from "lucide-react";
import { supabase } from "../../lib/supabaseClient";

export default function Header() {
    const navigate = useNavigate();
    const [user, setUser] = useState<any>(null);
    const [menuOpen, setMenuOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const getUser = async () => {
            const { data } = await supabase.auth.getUser();
            setUser(data?.user || null);
        };
        getUser();

        const handleClickOutside = (e: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
                setMenuOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const handleLogout = async () => {
        await supabase.auth.signOut();
        setUser(null);
        navigate("/");
    };

    const menus = [
        { label: "Início", path: "/" },
        { label: "Eventos", path: "/eventos" },
        { label: "Restaurantes", path: "/restaurantes" },
        { label: "Contato", path: "/contato" },
    ];

    return (
        <header className="z-20 mb-8 flex items-center justify-around px-5">
            {/* Logo — exatamente como estava */}
            <div className="flex justify-start items-center">
                <img
                    src="/logo-alt.png"
                    alt="Logo Guiaí"
                    className="m-5 w-28 md:w-36 cursor-pointer transition-transform duration-300 hover:scale-110"
                    onClick={() => navigate("/")}
                />
            </div>

            {/* Navbar central */}
            <nav className="hidden md:flex gap-8">
                {menus.map((menu) => (
                    <button
                        key={menu.path}
                        onClick={() => navigate(menu.path)}
                        className="text-gray-200 hover:text-purple-400 transition text-lg font-medium"
                    >
                        {menu.label}
                    </button>
                ))}
            </nav>

            {/* Login / Avatar */}
            <div className="relative" ref={dropdownRef}>
                {!user ? (
                    <button
                        onClick={() => navigate("/login")}
                        className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-xl font-medium transition"
                    >
                        Entrar
                    </button>
                ) : (
                    <div
                        className="flex items-center gap-2 cursor-pointer"
                        onClick={() => setMenuOpen((prev) => !prev)}
                    >
                        <img
                            src={user.user_metadata?.avatar_url || "/default-avatar.png"}
                            alt="avatar"
                            className="w-10 h-10 rounded-full border-2 border-purple-500 object-cover"
                        />
                        <ChevronDown
                            className={`text-white w-5 h-5 transition-transform ${menuOpen ? "rotate-180" : ""
                                }`}
                        />
                    </div>
                )}

                {menuOpen && user && (
                    <div className="absolute right-0 mt-3 bg-white rounded-xl shadow-xl w-48 text-gray-700 overflow-hidden animate-fadeIn">
                        <button
                            onClick={() => {
                                navigate("/perfil");
                                setMenuOpen(false);
                            }}
                            className="w-full flex items-center gap-2 px-4 py-3 hover:bg-gray-100"
                        >
                            <User className="w-4 h-4" /> Meu Perfil
                        </button>
                        <button
                            onClick={() => {
                                navigate("/meus-eventos");
                                setMenuOpen(false);
                            }}
                            className="w-full flex items-center gap-2 px-4 py-3 hover:bg-gray-100"
                        >
                            <CalendarDays className="w-4 h-4" /> Meus Eventos
                        </button>
                        <button
                            onClick={handleLogout}
                            className="w-full flex items-center gap-2 px-4 py-3 text-red-500 hover:bg-gray-100"
                        >
                            <LogOut className="w-4 h-4" /> Sair
                        </button>
                    </div>
                )}
            </div>
        </header>
    );
}
