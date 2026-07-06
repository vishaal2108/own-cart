import React from "react";
import { MessageCircle, Store, Wrench } from "lucide-react";

export const StripSection: React.FC = () => {
  const instagramSvg = (
    <svg
      className="w-4 h-4 text-owncart-clay fill-none stroke-current stroke-2"
      viewBox="0 0 24 24"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );

  const channels = [
    { label: "Instagram DMs", icon: instagramSvg },
    { label: "WhatsApp orders", icon: <MessageCircle className="w-4 h-4 text-owncart-sage" /> },
    { label: "Local markets", icon: <Store className="w-4 h-4 text-owncart-mango" /> },
    { label: "Small workshops", icon: <Wrench className="w-4 h-4 text-owncart-forest" /> },
  ];

  return (
    <section className="py-3.5 sm:py-4 bg-owncart-paper border-y border-owncart-line relative z-10">
      <div className="max-w-[1180px] mx-auto px-7">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-6 text-center md:text-left">
          <p className="text-[13px] font-bold uppercase tracking-[0.08em] text-owncart-ink/55 shrink-0 m-0">
            Built for sellers on
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6">
            {channels.map((ch, idx) => (
              <React.Fragment key={ch.label}>
                <div className="flex items-center gap-2 bg-owncart-cream border border-owncart-line/60 px-3.5 py-1.5 rounded-xl shadow-xs hover:border-owncart-forest/30 transition-all cursor-default">
                  {ch.icon}
                  <span className="text-[13.5px] font-semibold text-owncart-forest tracking-wide">
                    {ch.label}
                  </span>
                </div>
                {idx < channels.length - 1 && (
                  <span className="hidden sm:inline text-owncart-ink/25 font-bold">·</span>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
