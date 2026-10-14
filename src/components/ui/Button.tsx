import React from "react";
import Link from "next/link";
import { IconArrowStart } from "./Icons";

export type ButtonVariant = "primary" | "ghost" | "whatsapp" | "outline-white";

interface ButtonBaseProps {
  variant?: ButtonVariant;
  size?: "sm" | "md" | "lg";
  icon?: React.ReactNode;
  showArrow?: boolean;
  className?: string;
  children: React.ReactNode;
}

type ButtonAsButton = ButtonBaseProps &
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined;
  };

type ButtonAsLink = ButtonBaseProps & {
  href: string;
  target?: string;
  rel?: string;
};

type ButtonProps = ButtonAsButton | ButtonAsLink;

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "md",
  icon,
  showArrow = false,
  className = "",
  children,
  ...rest
}) => {
  const baseStyles =
    "inline-flex items-center justify-center font-semibold rounded-full transition-all duration-200 select-none cursor-pointer focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-secondary focus-visible:ring-offset-2";

  const sizeStyles = {
    sm: "px-4 py-2 text-sm min-h-[40px] gap-2",
    md: "px-6 py-3 text-base min-h-[48px] gap-2.5",
    lg: "px-8 py-3.5 text-lg min-h-[52px] gap-3",
  };

  const variantStyles = {
    primary:
      "bg-primary text-white hover:bg-primary-hover shadow-cta active:scale-[0.98]",
    ghost:
      "bg-transparent text-brand-text border-2 border-brand-text hover:bg-brand-text hover:text-brand-bg active:scale-[0.98]",
    whatsapp:
      "bg-[#25D366] text-white hover:bg-[#1EBE5D] shadow-cta active:scale-[0.98]",
    "outline-white":
      "bg-transparent text-white border-2 border-white/80 hover:bg-white hover:text-brand-text active:scale-[0.98]",
  };

  const combinedClasses = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`;

  const content = (
    <>
      {icon && <span className="shrink-0">{icon}</span>}
      <span>{children}</span>
      {showArrow && (
        <IconArrowStart
          size={size === "lg" ? 20 : 18}
          color="currentColor"
          className="shrink-0 transition-transform group-hover:-translate-x-1"
        />
      )}
    </>
  );

  if ("href" in rest && rest.href) {
    const isExternal = rest.href.startsWith("http") || rest.href.startsWith("tel:") || rest.href.startsWith("mailto:");
    if (isExternal) {
      return (
        <a
          href={rest.href}
          target={rest.target || "_blank"}
          rel={rest.rel || "noopener noreferrer"}
          className={combinedClasses}
        >
          {content}
        </a>
      );
    }
    return (
      <Link href={rest.href} className={combinedClasses}>
        {content}
      </Link>
    );
  }

  const { href, ...buttonProps } = rest as ButtonAsButton;
  return (
    <button className={combinedClasses} {...buttonProps}>
      {content}
    </button>
  );
};
