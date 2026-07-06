import React from "react";
import { testimonialsData } from "../../data/testimonials";
import { Badge } from "../common/Badge";
import { Card } from "../common/Card";
import { Star, MapPin } from "lucide-react";

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-24 md:py-[100px] relative overflow-hidden bg-[var(--surface-alt)] border-y border-owncart-border">
      <div className="max-w-[1180px] mx-auto px-7">
        {/* Section Header */}
        <div className="text-center max-w-[720px] mx-auto mb-12 flex flex-col items-center">
          <Badge variant="eyebrow" center>
            Sellers, not case studies
          </Badge>
          <h2 className="font-serif text-[28px] sm:text-[36px] md:text-[42px] font-semibold text-owncart-heading tracking-tight leading-[1.15] mb-3">
            Shops that started the same way{" "}
            <span className="text-transparent bg-clip-text bg-brand-gradient">
              you&apos;re about to.
            </span>
          </h2>
          <p className="text-[16px] sm:text-[18px] text-owncart-text m-0">
            Hear from real small business owners who switched from scrolling chats to running structured storefronts.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {testimonialsData.map((t) => (
            <Card
              key={t.id}
              variant="default"
              className="flex flex-col justify-between p-7 group hover:border-owncart-secondary transition-all duration-200"
            >
              <div>
                <div className="flex items-center gap-1 text-[var(--gold)] mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[var(--gold)] text-[var(--gold)]" />
                  ))}
                </div>
                <p className="font-serif text-[17px] text-owncart-heading leading-[1.5] m-0 mb-[18px] font-normal">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>

              <div className="pt-4 border-t border-owncart-border flex items-center justify-between">
                <div>
                  <h4 className="font-serif font-bold text-[15px] text-owncart-heading m-0">
                    {t.author}
                  </h4>
                  <p className="text-[12px] font-bold text-owncart-secondary m-0 mt-0.5">
                    {t.business}
                  </p>
                </div>
                <div className="flex items-center gap-1 text-[12px] font-semibold text-owncart-text bg-[var(--surface-alt)] px-2.5 py-1 rounded-full border border-[var(--border-active)]">
                  <MapPin className="w-3 h-3 text-owncart-primary shrink-0" />
                  <span>{t.location}</span>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
