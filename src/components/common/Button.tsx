import React, { type ButtonHTMLAttributes } from "react";
import { cn } from "../../utils/cn";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost" | "outline" | "text";
  size?: "sm" | "md" | "lg";
  block?: boolean;
  href?: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "md",
  block = false,
  href,
  icon,
  children,
  className,
  ...props
}) => {
  const baseStyles =
    "inline-flex items-center justify-center font-bold rounded-full transition-all duration-200 active:scale-95 focus:outline-none focus:ring-2 focus:ring-owncart-forest/50 disabled:opacity-50 disabled:pointer-events-none";

  const variants = {
    primary:
      "bg-owncart-forest text-white hover:bg-owncart-forest-dark hover:-translate-y-0.5 shadow-lg shadow-owncart-forest/20 hover:shadow-xl hover:shadow-owncart-forest/30",
    secondary:
      "bg-owncart-clay text-white hover:bg-owncart-clay/90 shadow-lg shadow-owncart-clay/20",
    ghost:
      "bg-transparent text-owncart-ink border border-owncart-line hover:border-owncart-forest hover:-translate-y-0.5",
    outline:
      "border-2 border-owncart-forest text-owncart-forest hover:bg-owncart-forest/10",
    text: "text-owncart-forest hover:underline underline-offset-4 px-0",
  };

  const sizes = {
    sm: "text-xs px-4 py-2 gap-1.5",
    md: "text-[15px] px-6 py-[13px] gap-2",
    lg: "text-base px-8 py-4 gap-2.5",
  };

  const combinedClassName = cn(
    baseStyles,
    variants[variant],
    variant !== "text" && sizes[size],
    block && "w-full",
    className
  );

  if (href) {
    return (
      <a href={href} className={combinedClassName}>
        {icon && <span className="shrink-0">{icon}</span>}
        {children}
      </a>
    );
  }

  return (
    <button className={combinedClassName} {...props}>
      {icon && <span className="shrink-0">{icon}</span>}
      {children}
    </button>
  );
};
