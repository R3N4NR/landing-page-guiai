import { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import { supabase } from "../../../lib/supabaseClient";
import DropdownMenu from "./DropdownMenu";



interface UserMenuProps {
    user: any;
    setUser: (u: any) => void;
    navigate: (path: string) => void;
}

export default function UserMenu({ user, setUser, navigate }: UserMenuProps) {
    const [menuOpen, setMenuOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
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

    const getUserInitial = () => {
        const nome = user?.user_metadata?.name || user?.email || "";
        return nome.charAt(0).toUpperCase();
    };

    return (
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
                    {user.user_metadata?.avatar_url ? (
                        <img
                            src={user.user_metadata.avatar_url}
                            alt="avatar"
                            className="w-10 h-10 rounded-full border-2 border-purple-500 object-cover"
                        />
                    ) : (
                        <div className="w-10 h-10 rounded-full border-2 border-purple-500 bg-purple-600 flex items-center justify-center text-white font-bold">
                            {getUserInitial()}
                        </div>
                    )}
                    <ChevronDown
                        className={`text-white w-5 h-5 transition-transform ${menuOpen ? "rotate-180" : ""}`}
                    />
                </div>
            )}

            {menuOpen && user && (
                <DropdownMenu
                    navigate={navigate}
                    onLogout={handleLogout}
                    onClose={() => setMenuOpen(false)}
                />
            )}
        </div>
    );
}
