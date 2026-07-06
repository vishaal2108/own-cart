import React, { useState } from "react";
import { navLinks } from "../../data/navigation";
import { Button } from "./Button";
import { ShoppingBag, Menu, X } from "lucide-react";
import { cn } from "../../utils/cn";

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[rgba(255,255,255,0.80)] backdrop-blur-[18px] border-b border-[rgba(0,0,0,0.05)] transition-all duration-300">
      <div className="max-w-[1180px] mx-auto px-7">
        <div className="flex items-center justify-between h-[68px]">
          {/* Brand Logo */}
          <a href="#top" className="flex items-center gap-2 group">
            <div className="w-[36px] h-[36px] rounded-[10px] bg-brand-gradient text-white flex items-center justify-center font-bold text-lg shadow-sm group-hover:scale-105 transition-transform">
              <ShoppingBag className="w-5 h-5 stroke-[2.5]" />
            </div>
            <span className="font-serif text-[22px] font-semibold text-owncart-heading tracking-tight">
              Owncart
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-sans font-semibold text-[15px] text-owncart-text hover:text-owncart-heading transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA Action */}
          <div className="hidden md:flex items-center gap-2.5">
            <Button href="#start" variant="primary" size="md">
              Launch Your Store
            </Button>
          </div>

          {/* Mobile Burger Toggle */}
          <button
            type="button"
            className="md:hidden p-2.5 rounded-xl text-owncart-heading hover:bg-owncart-border/50 transition-colors focus:outline-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle mobile menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div
        className={cn(
          "md:hidden overflow-hidden transition-all duration-300 ease-in-out bg-white border-b border-[rgba(0,0,0,0.05)]",
          mobileMenuOpen ? "max-h-80 opacity-100 py-5 px-7" : "max-h-0 opacity-0 py-0 px-7"
        )}
      >
        <div className="flex flex-col gap-3">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="font-sans font-semibold text-base text-owncart-text hover:text-owncart-heading py-2 border-b border-owncart-border/60"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-3">
            <Button
              href="#start"
              variant="primary"
              block
              onClick={() => setMobileMenuOpen(false)}
            >
              Launch Your Store
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};
