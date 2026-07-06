import React, { type ButtonHTMLAttributes } from "react";
import { Link } from "react-router-dom";
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
    "inline-flex items-center justify-center font-bold rounded-full transition-all duration-300 active:scale-95 focus:outline-none focus:ring-2 focus:ring-owncart-accent/50 disabled:opacity-50 disabled:pointer-events-none";

  const variants = {
    primary:
      "bg-brand-gradient hover:bg-brand-gradient-hover text-white hover:-translate-y-0.5 shadow-glow hover:shadow-lg",
    secondary:
      "bg-white text-owncart-secondary border-2 border-owncart-secondary hover:bg-[#FFF0F4] hover:-translate-y-0.5 shadow-sm",
    ghost:
      "bg-white/70 hover:bg-white text-owncart-heading border-2 border-owncart-border hover:border-owncart-secondary hover:-translate-y-0.5 shadow-xs hover:shadow-md",
    outline:
      "border-2 border-owncart-secondary text-owncart-secondary hover:bg-owncart-secondary/10",
    text: "text-owncart-accent hover:underline underline-offset-4 px-0",
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
    if (href.startsWith("/") && !href.startsWith("//")) {
      return (
        <Link to={href} className={combinedClassName}>
          {icon && <span className="shrink-0">{icon}</span>}
          {children}
        </Link>
      );
    }
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
