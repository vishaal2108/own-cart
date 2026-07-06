import React from "react";
import { cn } from "../../utils/cn";

export interface CardProps {
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "highlight" | "glass" | "interactive" | "pricing" | "pricing-highlight";
  padding?: "none" | "sm" | "md" | "lg";
}

export const Card: React.FC<CardProps> = ({
  children,
  className,
  variant = "default",
  padding = "lg",
}) => {
  const baseStyles = "rounded-owncart transition-all duration-300 relative overflow-hidden";

  const variants = {
    default:
      "bg-owncart-surface border border-owncart-border shadow-sm hover:bg-owncart-surface-hover hover:border-owncart-border-active",
    highlight:
      "bg-brand-gradient text-white shadow-lg border border-owncart-secondary",
    glass:
      "bg-white/80 backdrop-blur-md border border-owncart-border shadow-sm hover:shadow-md",
    interactive:
      "bg-owncart-surface border border-owncart-border hover:bg-owncart-surface-hover hover:border-owncart-secondary shadow-sm hover:shadow-md hover:-translate-y-1 cursor-pointer",
    pricing:
      "bg-owncart-surface border border-owncart-border text-owncart-heading shadow-sm hover:border-owncart-border-active hover:shadow-md",
    "pricing-highlight":
      "bg-[var(--surface-alt)] border-2 border-[var(--secondary)] text-[var(--heading)] shadow-[var(--shadow-lg)] lg:-translate-y-3 z-10",
  };

  const paddings = {
    none: "",
    sm: "p-5",
    md: "p-7",
    lg: "p-7 sm:p-8",
  };

  return (
    <div className={cn(baseStyles, variants[variant], paddings[padding], className)}>
      {children}
    </div>
  );
};
