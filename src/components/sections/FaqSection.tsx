import React, { useState } from "react";
import { faqData } from "../../data/faq";
import { Badge } from "../common/Badge";
import { Plus, Minus, MessageSquare } from "lucide-react";
import { cn } from "../../utils/cn";

export const FaqSection: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>(faqData[0]?.id || null);

  const toggleAccordion = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-24 md:py-[100px] bg-white relative border-y border-owncart-border">
      <div className="max-w-[1180px] mx-auto px-7">
        <div className="grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-12 lg:gap-[60px] items-start">
          {/* Left Intro Column */}
          <div className="flex flex-col gap-4 lg:sticky lg:top-32">
            <Badge variant="eyebrow">FAQ</Badge>
            <h2 className="font-serif text-[28px] sm:text-[36px] md:text-[42px] font-semibold text-owncart-heading tracking-tight leading-[1.15] m-0">
              Before you ask{" "}
              <span className="text-transparent bg-clip-text bg-brand-gradient">
                support
              </span>
            </h2>
            <p className="text-[14.5px] text-owncart-text leading-[1.6] m-0">
              Everything you need to know about setting up your store, getting paid, and managing orders without code.
            </p>

            {/* Support Prompt Box */}
            <div className="p-6 rounded-owncart bg-[var(--surface-alt)] border border-[var(--border-active)] flex items-start gap-4 mt-2 shadow-xs">
              <div className="w-11 h-11 rounded-xl bg-white border border-owncart-border-active text-owncart-accent flex items-center justify-center shrink-0 shadow-sm">
                <MessageSquare className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-serif font-semibold text-[16px] text-owncart-heading m-0">
                  Still stuck?
                </h4>
                <p className="text-[13.5px] text-owncart-text m-0 mt-1">
                  Message our team — a real person replies within minutes.
                </p>
                <a
                  href="#"
                  className="inline-block mt-2.5 text-[13px] font-bold text-owncart-accent hover:underline"
                >
                  Chat with support →
                </a>
              </div>
            </div>
          </div>

          {/* Right Accordion Column */}
          <div className="flex flex-col">
            {faqData.map((item) => {
              const isOpen = openId === item.id;

              return (
                <div
                  key={item.id}
                  className="border-b border-owncart-border py-1 transition-colors rounded-xl hover:bg-[#FFF3F6] px-3 my-1"
                >
                  <button
                    type="button"
                    onClick={() => toggleAccordion(item.id)}
                    className="w-full text-left py-[18px] flex items-center justify-between gap-4 focus:outline-none group"
                    aria-expanded={isOpen}
                  >
                    <span className="font-serif text-[18px] font-semibold text-owncart-heading group-hover:text-owncart-secondary transition-colors">
                      {item.question}
                    </span>
                    <span className="font-sans font-normal text-[22px] text-owncart-accent shrink-0 flex items-center justify-center w-7 h-7">
                      {isOpen ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                    </span>
                  </button>

                  <div
                    className={cn(
                      "transition-all duration-300 ease-in-out overflow-hidden",
                      isOpen ? "max-h-[200px] pb-5 opacity-100" : "max-h-0 pb-0 opacity-0"
                    )}
                  >
                    <p className="text-[14.5px] text-owncart-text leading-[1.6] m-0">
                      {item.answer}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
