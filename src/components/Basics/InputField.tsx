import React from "react";

interface InputFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
    className?: string;
}

export default function InputField({
    type = "text",
    placeholder,
    value,
    onChange,
    name,
    required = true,
    className = "",
    ...rest
}: InputFieldProps) {
    return (
        <input
            type={type}
            placeholder={placeholder}
            value={value}
            name={name}
            onChange={onChange}
            required={required}
            className={`p-3 rounded-lg bg-transparent border border-[#4B33D9] text-white placeholder-gray-400 focus:outline-none focus:border-[#6A4CFF] ${className}`}
            {...rest}
        />
    );
}
