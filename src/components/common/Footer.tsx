import React from "react";
import { footerColumns } from "../../data/navigation";
import { ShoppingBag, Heart, MessageCircle, ArrowUpRight } from "lucide-react";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-owncart-forest-dark border-t border-owncart-line pt-16 pb-8 text-white/70 relative overflow-hidden">
      <div className="max-w-[1180px] mx-auto px-7 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
          {/* Brand Info */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <a href="#top" className="flex items-center gap-2 w-fit group">
              <div className="w-[34px] h-[34px] rounded-[10px] bg-owncart-forest text-owncart-mango flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform">
                <ShoppingBag className="w-5 h-5 stroke-[2.5]" />
              </div>
              <span className="font-serif text-[22px] font-semibold tracking-tight text-white group-hover:text-owncart-mango transition-colors">
                Owncart
              </span>
            </a>
            <p className="text-sm text-white/70 leading-relaxed max-w-xs">
              The easiest way to open a real online store — built for sellers in Tamil Nadu and beyond. Turn your catalog into a production-level storefront in minutes.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/70 hover:text-owncart-mango hover:bg-white/10 hover:border-white/20 transition-all"
                aria-label="Instagram"
              >
                <svg className="w-4 h-4 fill-none stroke-current stroke-2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/70 hover:text-owncart-mango hover:bg-white/10 hover:border-white/20 transition-all"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/70 hover:text-owncart-mango hover:bg-white/10 hover:border-white/20 transition-all"
                aria-label="Twitter / X"
              >
                <svg className="w-4 h-4 fill-none stroke-current stroke-2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Navigation Columns */}
          {footerColumns.map((col) => (
            <div key={col.title} className="flex flex-col gap-3.5">
              <h4 className="text-[13px] font-bold text-white/40 tracking-[0.08em] uppercase">
                {col.title}
              </h4>
              <ul className="flex flex-col gap-2">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-[14px] text-white/75 hover:text-owncart-mango inline-flex items-center gap-1 transition-colors group py-1"
                    >
                      <span>{link.label}</span>
                      <ArrowUpRight className="w-3.5 h-3.5 opacity-0 -translate-y-0.5 translate-x-0.5 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[13px] text-white/50">
          <p>© {new Date().getFullYear()} Owncart. Made for sellers, not spreadsheets.</p>
          <p className="flex items-center gap-1">
            <span>Crafted with</span>
            <Heart className="w-3.5 h-3.5 text-owncart-clay fill-owncart-clay animate-pulse" />
            <span>for small businesses worldwide.</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
