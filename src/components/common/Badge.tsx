import React from "react";
import { cn } from "../../utils/cn";

export interface BadgeProps {
  children: React.ReactNode;
  variant?: "eyebrow" | "chip" | "discount" | "success";
  className?: string;
  center?: boolean;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = "eyebrow",
  className,
  center = false,
}) => {
  const baseStyles = "inline-flex items-center font-bold transition-all duration-200";

  const variants = {
    eyebrow:
      "text-[13px] uppercase tracking-[0.14em] text-owncart-secondary mb-3.5",
    chip:
      "text-[12.5px] text-owncart-accent bg-owncart-surface-alt border border-owncart-border-active px-3.5 py-1.5 rounded-full shadow-xs",
    discount:
      "text-xs text-white bg-owncart-secondary px-2.5 py-0.5 rounded-md font-extrabold uppercase tracking-wider shadow-sm",
    success:
      "text-xs text-white bg-owncart-primary px-3 py-1 rounded-lg shadow-sm",
  };

  return (
    <span
      className={cn(
        baseStyles,
        variants[variant],
        center && "mx-auto block w-fit text-center",
        className
      )}
    >
      {children}
    </span>
  );
};
