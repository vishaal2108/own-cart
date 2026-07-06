import React, { useState } from "react";
import { pricingPlans } from "../../data/pricing";
import { Badge } from "../common/Badge";
import { Card } from "../common/Card";
import { Button } from "../common/Button";
import { formatCurrency } from "../../utils/currency";
import { cn } from "../../utils/cn";

export const PricingSection: React.FC = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  return (
    <section id="pricing" className="pt-1 sm:pt-2 md:pt-2 pb-8 md:pb-10 bg-white text-owncart-heading relative">
      <div className="max-w-[1180px] mx-auto px-7 w-full">
        {/* Section Header */}
        <div className="text-center max-w-[720px] mx-auto mb-3 sm:mb-4 md:mb-4 flex flex-col items-center">
          <Badge variant="eyebrow" center className="mb-1">
            Pricing
          </Badge>
          <h2 className="font-serif text-[24px] sm:text-[28px] md:text-[32px] font-semibold text-owncart-heading tracking-tight leading-[1.15] mb-1">
            Start free.{" "}
            <span className="text-transparent bg-clip-text bg-brand-gradient font-bold">
              Pay when you&apos;re actually selling.
            </span>
          </h2>
          <p className="text-[14px] sm:text-[15px] text-owncart-text m-0">
            No hidden fees, no transaction commissions. Choose the plan that fits your growth.
          </p>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center gap-3 pt-2.5">
            <span
              className={cn(
                "text-[13.5px] sm:text-[14px] font-semibold transition-colors cursor-pointer",
                !isAnnual ? "text-owncart-heading" : "text-owncart-muted"
              )}
              onClick={() => setIsAnnual(false)}
            >
              Monthly billing
            </span>
            <button
              type="button"
              role="switch"
              aria-checked={isAnnual}
              onClick={() => setIsAnnual(!isAnnual)}
              className="w-12 h-6 sm:w-14 sm:h-7 rounded-full bg-owncart-border border border-owncart-border-active p-1 relative transition-colors flex items-center cursor-pointer focus:outline-none focus:ring-2 focus:ring-owncart-secondary"
            >
              <div
                className={cn(
                  "w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-owncart-secondary shadow-md transition-transform duration-200",
                  isAnnual ? "translate-x-6 sm:translate-x-7 bg-owncart-accent" : "translate-x-0"
                )}
              />
            </button>
            <span
              className={cn(
                "text-[13.5px] sm:text-[14px] font-semibold transition-colors flex items-center gap-1.5 cursor-pointer",
                isAnnual ? "text-owncart-heading" : "text-owncart-muted"
              )}
              onClick={() => setIsAnnual(true)}
            >
              <span>Annual billing</span>
              <Badge variant="discount">Save 20%</Badge>
            </span>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-5 items-stretch">
          {pricingPlans.map((plan) => {
            const isHighlighted = plan.isPopular;
            const priceVal = isAnnual ? plan.price.annual : plan.price.monthly;

            return (
              <Card
                key={plan.id}
                variant={isHighlighted ? "pricing-highlight" : "pricing"}
                className={cn(
                  "flex flex-col justify-between p-6 sm:p-7 relative transition-all duration-200",
                  isHighlighted ? "z-10" : "z-0 hover:-translate-y-1"
                )}
              >
                <div>
                  {/* Popular Tag */}
                  {isHighlighted && (
                    <span className="inline-block text-[10.5px] font-bold text-white bg-owncart-secondary px-3 py-0.5 rounded-full uppercase tracking-[0.08em] mb-3 shadow-sm">
                      ★ Most sellers pick this
                    </span>
                  )}

                  <h3 className="font-serif text-[20px] sm:text-[21px] font-semibold text-owncart-heading m-0 mb-1">
                    {plan.name}
                  </h3>

                  {/* Price Display */}
                  <div className="font-serif text-[32px] sm:text-[34px] text-owncart-heading font-bold m-0 mb-1 flex items-baseline gap-1">
                    <span>
                      {plan.price.forever ? "₹0" : formatCurrency(priceVal)}
                    </span>
                    <span className="text-[13px] font-normal text-owncart-muted font-sans">
                      {plan.period}
                    </span>
                  </div>
                  <p className="text-[13.5px] text-owncart-text m-0 mb-4 pb-3 border-b border-owncart-border">
                    {plan.description}
                  </p>

                  {/* Feature Checklist */}
                  <ul className="flex flex-col m-0 mb-4 p-0 list-none gap-0.5">
                    {plan.features.map((feature) => (
                      <li
                        key={feature}
                        className="text-[13px] sm:text-[13.5px] py-1.5 pl-[22px] relative text-owncart-text border-b border-owncart-border/40 last:border-b-0 flex items-center"
                      >
                        <span className="absolute left-0 text-owncart-secondary font-bold text-base">
                          ✓
                        </span>
                        <span className="font-medium">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action CTA */}
                <div className="mt-4 pt-1">
                  {plan.buttonVariant === "ghost" ? (
                    <a
                      href="#start"
                      className="inline-flex items-center justify-center font-bold text-[14.5px] py-[11px] px-6 rounded-full border-2 border-owncart-border text-owncart-heading hover:border-owncart-secondary hover:bg-owncart-surface-hover transition-all w-full text-center shadow-xs"
                    >
                      {plan.buttonText}
                    </a>
                  ) : (
                    <Button
                      href="#start"
                      variant="primary"
                      size="md"
                      block
                      className={isHighlighted ? "bg-brand-gradient text-white shadow-glow hover:shadow-lg" : ""}
                    >
                      {plan.buttonText}
                    </Button>
                  )}
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
