import React from "react";
import { featuresData } from "../../data/features";
import { Badge } from "../common/Badge";
import { Card } from "../common/Card";
import { Link2, CreditCard, Layers, LayoutDashboard, Share2, Sparkles, Check } from "lucide-react";
import { cn } from "../../utils/cn";

export const FeaturesSection: React.FC = () => {
  const getFeatureIcon = (id: string, isBig: boolean | undefined) => {
    const iconClass = cn("w-6 h-6", isBig ? "text-owncart-mango" : "text-owncart-forest");
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
    <section id="features" className="py-24 md:py-[100px] relative overflow-hidden">
      <div className="max-w-[1180px] mx-auto px-7">
        {/* Section Header */}
        <div className="text-center max-w-[720px] mx-auto mb-12 flex flex-col items-center">
          <Badge variant="eyebrow" center>
            What you get
          </Badge>
          <h2 className="font-serif text-[28px] sm:text-[36px] md:text-[42px] font-semibold text-owncart-ink tracking-tight leading-[1.15] mb-3">
            Everything a shop needs.{" "}
            <span className="text-owncart-clay">
              Nothing it doesn&apos;t.
            </span>
          </h2>
          <p className="text-[16px] sm:text-[18px] text-owncart-ink/75 m-0">
            Designed for speed, simplicity, and conversion. No complex dashboards or developer menus.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[18px]">
          {featuresData.map((feature) => {
            const isBig = feature.isBig;
            const isWide = feature.isWide;

            return (
              <Card
                key={feature.id}
                variant={isBig ? "highlight" : "interactive"}
                className={cn(
                  "flex flex-col justify-between h-full group p-[28px]",
                  isBig && "md:col-span-2 lg:col-span-2",
                  isWide && "md:col-span-2 lg:col-span-2"
                )}
              >
                <div>
                  <div
                    className={cn(
                      "w-12 h-12 rounded-2xl flex items-center justify-center mb-6 transition-transform group-hover:scale-105",
                      isBig
                        ? "bg-white/10 border border-white/20"
                        : "bg-owncart-cream border border-owncart-line/60"
                    )}
                  >
                    {getFeatureIcon(feature.id, isBig)}
                  </div>
                  <h3
                    className={cn(
                      "font-serif text-[19px] font-semibold mb-2.5 transition-colors",
                      isBig ? "text-white" : "text-owncart-ink group-hover:text-owncart-forest"
                    )}
                  >
                    {feature.title}
                  </h3>
                  <p
                    className={cn(
                      "text-[14.5px] leading-[1.55] m-0",
                      isBig ? "text-white/75" : "text-owncart-ink/70"
                    )}
                  >
                    {feature.description}
                  </p>
                </div>

                {/* Custom Link Mini Preview Box */}
                {feature.miniUrl && (
                  <div className="mt-[18px] p-2.5 px-3.5 rounded-[10px] bg-white/10 border border-dashed border-white/30 font-mono text-[13px] text-owncart-mango flex items-center justify-between">
                    <span className="truncate">
                      {feature.miniUrl.base}
                      <b className="font-bold underline decoration-owncart-mango">
                        {feature.miniUrl.bold}
                      </b>
                    </span>
                    <span className="text-[11px] bg-owncart-mango/20 text-owncart-mango px-2 py-0.5 rounded font-sans font-bold shrink-0 ml-2">
                      Live ✨
                    </span>
                  </div>
                )}

                {/* Chips Row */}
                {feature.chips && (
                  <div className="mt-4 flex flex-wrap gap-2 pt-2">
                    {feature.chips.map((chip) => (
                      <span key={chip} className="inline-flex items-center gap-1 text-[12.5px] text-owncart-forest bg-owncart-cream border border-owncart-line px-3 py-[7px] rounded-full font-bold shadow-xs">
                        <Check className="w-3.5 h-3.5 text-owncart-sage shrink-0" />
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
