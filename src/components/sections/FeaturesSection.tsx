import React from "react";
import { featuresData } from "../../data/features";
import { Badge } from "../common/Badge";
import { Card } from "../common/Card";
import { Link2, CreditCard, Layers, LayoutDashboard, Share2, Sparkles, Check } from "lucide-react";
import { cn } from "../../utils/cn";

export const FeaturesSection: React.FC = () => {
  const getFeatureIcon = (id: string, isBig: boolean | undefined) => {
    const iconClass = cn("w-5 h-5", isBig ? "text-white" : "text-owncart-secondary");
    switch (id) {
      case "custom-link":
        return <Link2 className={iconClass} />;
      case "real-checkout":
        return <CreditCard className={iconClass} />;
      case "live-inventory":
        return <Layers className={iconClass} />;
      case "unified-orders":
        return <LayoutDashboard className={iconClass} />;
      case "omnichannel-share":
        return <Share2 className={iconClass} />;
      default:
        return <Sparkles className={iconClass} />;
    }
  };

  return (
    <section id="features" className="pt-1 sm:pt-2 md:pt-2 pb-8 md:pb-10 relative overflow-hidden bg-white">
      <div className="max-w-[1180px] mx-auto px-7 w-full">
        {/* Section Header */}
        <div className="text-center max-w-[720px] mx-auto mb-3 sm:mb-4 md:mb-4 flex flex-col items-center">
          <Badge variant="eyebrow" center className="mb-1">
            What you get
          </Badge>
          <h2 className="font-serif text-[24px] sm:text-[28px] md:text-[32px] font-semibold text-owncart-heading tracking-tight leading-[1.15] mb-1">
            Everything a shop needs.{" "}
            <span className="text-transparent bg-clip-text bg-brand-gradient">
              Nothing it doesn&apos;t.
            </span>
          </h2>
          <p className="text-[14px] sm:text-[15px] text-owncart-text m-0">
            Designed for speed, simplicity, and conversion. No complex dashboards or developer menus.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3.5 md:gap-4">
          {featuresData.map((feature) => {
            const isBig = feature.isBig;
            const isWide = feature.isWide;

            return (
              <Card
                key={feature.id}
                variant={isBig ? "highlight" : "interactive"}
                className={cn(
                  "flex flex-col justify-between h-full group p-5 sm:p-6 md:p-6",
                  isBig && "md:col-span-2 lg:col-span-2",
                  isWide && "md:col-span-2 lg:col-span-2"
                )}
              >
                <div>
                  <div
                    className={cn(
                      "w-10 h-10 rounded-xl flex items-center justify-center mb-3.5 transition-transform group-hover:scale-105 shadow-sm",
                      isBig
                        ? "bg-white/15 border border-white/25"
                        : "bg-[var(--surface-alt)] border border-[var(--border-active)]"
                    )}
                  >
                    {getFeatureIcon(feature.id, isBig)}
                  </div>
                  <h3
                    className={cn(
                      "font-serif text-[18px] sm:text-[19px] font-semibold mb-1.5 transition-colors",
                      isBig ? "text-white" : "text-owncart-heading group-hover:text-owncart-secondary"
                    )}
                  >
                    {feature.title}
                  </h3>
                  <p
                    className={cn(
                      "text-[13.5px] sm:text-[14px] leading-[1.5] m-0",
                      isBig ? "text-white/85" : "text-owncart-text"
                    )}
                  >
                    {feature.description}
                  </p>
                </div>

                {/* Custom Link Mini Preview Box */}
                {feature.miniUrl && (
                  <div className="mt-3 p-2 px-3 rounded-[8px] bg-white/15 border border-dashed border-white/30 font-mono text-[12px] text-white flex items-center justify-between">
                    <span className="truncate">
                      {feature.miniUrl.base}
                      <b className="font-bold underline decoration-white">
                        {feature.miniUrl.bold}
                      </b>
                    </span>
                    <span className="text-[10.5px] bg-white text-owncart-accent px-2 py-0.5 rounded font-sans font-bold shrink-0 ml-2 shadow-xs">
                      Live ✨
                    </span>
                  </div>
                )}

                {/* Chips Row */}
                {feature.chips && (
                  <div className="mt-3.5 flex flex-wrap gap-2 pt-0.5">
                    {feature.chips.map((chip) => (
                      <span key={chip} className="inline-flex items-center gap-1.5 text-[12px] text-owncart-heading bg-[var(--surface-alt)] border border-[var(--border-active)] px-3 py-1 rounded-full font-bold shadow-xs">
                        <Check className="w-3.5 h-3.5 text-owncart-primary shrink-0" />
                        <span>{chip}</span>
                      </span>
                    ))}
                  </div>
                )}
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
