import React from "react";
import { stepsData } from "../../data/steps";
import { Badge } from "../common/Badge";

export const HowItWorksSection: React.FC = () => {
  return (
    <section id="how" className="py-20 md:py-[100px] bg-[var(--surface-alt)] border-y border-owncart-border relative">
      <div className="max-w-[1180px] mx-auto px-7">
        {/* Section Header */}
        <div className="text-center max-w-[720px] mx-auto mb-12 flex flex-col items-center">
          <Badge variant="eyebrow" center>
            From idea to open shop
          </Badge>
          <h2 className="font-serif text-[28px] sm:text-[36px] md:text-[42px] font-semibold text-owncart-heading tracking-tight leading-[1.15] mb-3">
            Three steps.{" "}
            <span className="text-transparent bg-clip-text bg-brand-gradient">
              One afternoon.
            </span>
          </h2>
          <p className="text-[16px] sm:text-[18px] text-owncart-text m-0">
            No technical hurdles or verification delays. You can go from zero to taking orders today.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
          {stepsData.map((stepItem) => (
            <div
              key={stepItem.step}
              className="text-left bg-white p-8 rounded-owncart border border-owncart-border hover:border-owncart-border-active hover:shadow-md transition-all group"
            >
              <div className="font-serif text-[42px] font-extrabold text-transparent bg-clip-text bg-brand-gradient mb-3 leading-none">
                {stepItem.step}
              </div>
              <h3 className="font-serif text-[20px] font-semibold text-owncart-heading mb-2.5 group-hover:text-owncart-secondary transition-colors">
                {stepItem.title}
              </h3>
              <p className="text-[14.5px] text-owncart-text leading-[1.6] m-0">
                {stepItem.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
