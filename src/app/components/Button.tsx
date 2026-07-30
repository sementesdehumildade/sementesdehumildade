interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline";
  onClick?: () => void;
  className?: string;
}

export function Button({ children, variant = "primary", onClick, className = "" }: ButtonProps) {
  const baseStyles = "px-8 py-3 rounded-lg font-['Inter'] transition-all duration-300 inline-block text-center";
  
  const variantStyles = {
    primary: "bg-[#4CAF50] text-white hover:bg-[#2E7D32] shadow-md hover:shadow-lg",
    secondary: "bg-[#90CAF9] text-white hover:bg-[#64B5F6] shadow-md hover:shadow-lg",
    outline: "border-2 border-[#4CAF50] text-[#4CAF50] hover:bg-[#4CAF50] hover:text-white"
  };

  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
    >
      {children}
    </button>
  );
}
