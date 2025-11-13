interface LogoProps {
    onClick: () => void;
}

export default function Logo({ onClick }: LogoProps) {
    return (
        <div className="flex justify-start items-center">
            <img
                src="/logo-alt.png"
                alt="Logo Guiaí"
                className="m-5 w-28 md:w-36 cursor-pointer transition-transform duration-300 hover:scale-110"
                onClick={onClick}
            />
        </div>
    );
}
