import React from "react";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "yellow" | "cyan" | "purple" | "green" | "pink" | "default";
  icon?: React.ReactNode;
  className?: string;
}

const variantStyles = {
  yellow: "bg-[#FEF7D9] text-[#604818] border-[#F0DC8A]",
  cyan: "bg-[#E4F8FA] text-[#2C384D] border-[#83DDE6]",
  purple: "bg-[#EFE7FD] text-[#4A2B75] border-[#D1B8FB]",
  green: "bg-[#F2F9DF] text-[#3C5A0C] border-[#B1DD30]",
  pink: "bg-[#FDE3EC] text-[#921B48] border-[#F6598B]",
  default: "bg-white text-brand-text border-brand-border",
};

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = "default",
  icon,
  className = "",
}) => {
  return (
    <span
      className={`inline-flex items-center gap-2 px-3.5 py-1 text-sm font-semibold rounded-full border leading-relaxed select-none ${variantStyles[variant]} ${className}`}
    >
      {icon && <span className="shrink-0">{icon}</span>}
      {children}
    </span>
  );
};
