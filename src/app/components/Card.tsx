import { LucideIcon } from "lucide-react";

interface CardProps {
  icon?: LucideIcon;
  title: string;
  children: React.ReactNode;
  className?: string;
}

export function Card({ icon: Icon, title, children, className = "" }: CardProps) {
  return (
    <div className={`bg-white rounded-lg p-8 border border-[#E0E0E0] shadow-sm hover:shadow-md transition-shadow ${className}`}>
      {Icon && (
        <div className="w-12 h-12 bg-[#A5D6A7] rounded-full flex items-center justify-center mb-4">
          <Icon className="text-[#2E7D32]" size={24} />
        </div>
      )}
      <h3 className="text-xl font-['Montserrat'] text-[#212121] mb-4">{title}</h3>
      <div className="font-['Inter'] text-[#9E9E9E]">{children}</div>
    </div>
  );
}
