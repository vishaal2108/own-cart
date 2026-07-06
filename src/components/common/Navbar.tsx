import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { navLinks } from "../../data/navigation";
import { Button } from "./Button";
import { Menu, X } from "lucide-react";
import owncartLogo from "../../assets/owncart-logo.png";
import { cn } from "../../utils/cn";

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[rgba(255,255,255,0.80)] backdrop-blur-[18px] border-b border-[rgba(0,0,0,0.05)] transition-all duration-300">
      <div className="max-w-[1180px] mx-auto px-7">
        <div className="flex items-center justify-between h-[68px]">
          {/* Brand Logo */}
          <Link to="/" className="flex items-center group py-1">
            <img
              src={owncartLogo}
              alt="OwnCart"
              className="h-9 sm:h-10 md:h-11 w-auto object-contain mix-blend-multiply transition-transform duration-200 group-hover:scale-105 select-none"
              style={{
                mixBlendMode: "multiply",
              }}
            />
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.href}
                to={link.href}
                className={({ isActive }) =>
                  cn(
                    "font-sans font-semibold text-[15px] transition-colors",
                    isActive
                      ? "text-owncart-primary"
                      : "text-owncart-text hover:text-owncart-heading"
                  )
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          {/* Desktop CTA Action */}
          <div className="hidden md:flex items-center gap-2.5">
            <Button href="/pricing" variant="primary" size="md">
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
            <NavLink
              key={link.href}
              to={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className={({ isActive }) =>
                cn(
                  "font-sans font-semibold text-base py-2 border-b border-owncart-border/60 transition-colors",
                  isActive
                    ? "text-owncart-primary"
                    : "text-owncart-text hover:text-owncart-heading"
                )
              }
            >
              {link.label}
            </NavLink>
          ))}
          <div className="pt-3">
            <Button
              href="/pricing"
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
