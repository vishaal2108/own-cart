import React from "react";
import { stepsData } from "../../data/steps";
import { Badge } from "../common/Badge";

export const HowItWorksSection: React.FC = () => {
  return (
    <section id="how" className="py-20 md:py-[100px] bg-owncart-paper border-y border-owncart-line relative">
      <div className="max-w-[1180px] mx-auto px-7">
        {/* Section Header */}
        <div className="text-center max-w-[720px] mx-auto mb-12 flex flex-col items-center">
          <Badge variant="eyebrow" center>
            From idea to open shop
          </Badge>
          <h2 className="font-serif text-[28px] sm:text-[36px] md:text-[42px] font-semibold text-owncart-ink tracking-tight leading-[1.15] mb-3">
            Three steps.{" "}
            <span className="text-owncart-clay">
              One afternoon.
            </span>
          </h2>
          <p className="text-[16px] sm:text-[18px] text-owncart-ink/75 m-0">
            No technical hurdles or verification delays. You can go from zero to taking orders today.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
          {stepsData.map((stepItem) => (
            <div
              key={stepItem.step}
              className="text-left bg-owncart-cream/50 p-7 rounded-owncart border border-owncart-line/40 hover:border-owncart-forest/30 transition-all group"
            >
              <div className="font-serif text-[38px] font-semibold text-owncart-sage mb-3.5 leading-none">
                {stepItem.step}
              </div>
              <h3 className="font-serif text-[20px] font-semibold text-owncart-ink mb-2.5 group-hover:text-owncart-forest transition-colors">
                {stepItem.title}
              </h3>
              <p className="text-[14.5px] text-owncart-ink/70 leading-[1.6] m-0">
                {stepItem.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
