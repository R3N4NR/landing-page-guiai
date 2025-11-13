interface NavMenuProps {
    navigate: (path: string) => void;
}

export default function NavMenu({ navigate }: NavMenuProps) {
    const menus = [
        { label: "Início", path: "/" },
        { label: "Eventos", path: "/eventos" },
        { label: "Restaurantes", path: "/restaurantes" },
        { label: "Contato", path: "/contato" },
    ];

    return (
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
    );
}
