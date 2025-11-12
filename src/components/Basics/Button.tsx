interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "outline";
    children: React.ReactNode;
}

export default function Button({ variant = "primary", children, ...props }: ButtonProps) {
    const base =
        "px-6 py-2 rounded-lg font-semibold transition-all duration-300";

    const variants = {
        primary: `${base} bg-white text-[#0E0637] hover:bg-[#4B33D9] hover:text-white`,
        outline: `${base} border border-white text-white hover:bg-white hover:text-[#0E0637]`,
    };

    return <button className={variants[variant]} {...props}>{children}</button>;
}
