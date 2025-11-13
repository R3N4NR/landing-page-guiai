import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../../../lib/supabaseClient";
import Logo from "./Logo";
import NavMenu from "./NavMenu";
import UserMenu from "./UserMenu";


export default function Header() {
    const navigate = useNavigate();
    const [user, setUser] = useState<any>(null);

    useEffect(() => {
        const getUser = async () => {
            const { data } = await supabase.auth.getUser();
            setUser(data?.user || null);
        };
        getUser();
    }, []);

    return (
        <header className="z-20 mb-8 flex items-center justify-around px-5">
            <Logo onClick={() => navigate("/")} />
            <NavMenu navigate={navigate} />
            <UserMenu user={user} setUser={setUser} navigate={navigate} />
        </header>
    );
}
