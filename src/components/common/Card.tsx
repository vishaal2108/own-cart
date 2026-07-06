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
  const baseStyles = "rounded-owncart transition-all duration-200 relative overflow-hidden";

  const variants = {
    default:
      "bg-owncart-paper border border-owncart-line shadow-sm",
    highlight:
      "bg-owncart-forest text-white shadow-md border border-owncart-forest",
    glass:
      "bg-owncart-paper border border-owncart-line shadow-sm hover:shadow-md",
    interactive:
      "bg-owncart-paper border border-owncart-line hover:border-owncart-forest/30 shadow-sm hover:shadow-md hover:-translate-y-1 cursor-pointer",
    pricing:
      "bg-white/[0.04] border border-white/12 text-white",
    "pricing-highlight":
      "bg-owncart-forest border border-owncart-mango text-white shadow-[0_30px_60px_-20px_rgba(0,0,0,0.5)] lg:-translate-y-3 z-10",
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
