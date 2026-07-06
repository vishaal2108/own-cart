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
    <section id="pricing" className="py-[80px] pb-[110px] bg-owncart-forest-dark text-white relative">
      <div className="max-w-[1180px] mx-auto px-7">
        {/* Section Header */}
        <div className="text-center max-w-[720px] mx-auto mb-12 flex flex-col items-center">
          <span className="text-[13px] uppercase tracking-[0.14em] text-owncart-mango font-bold mb-3.5">
            Pricing
          </span>
          <h2 className="font-serif text-[28px] sm:text-[36px] md:text-[42px] font-semibold text-white tracking-tight leading-[1.15] mb-3">
            Start free.{" "}
            <span className="text-owncart-mango">
              Pay when you&apos;re actually selling.
            </span>
          </h2>
          <p className="text-[16px] sm:text-[18px] text-white/70 m-0">
            No hidden fees, no transaction commissions. Choose the plan that fits your growth.
          </p>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center gap-3 pt-6">
            <span
              className={cn(
                "text-[14px] font-semibold transition-colors cursor-pointer",
                !isAnnual ? "text-white" : "text-white/50"
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
              className="w-14 h-7 rounded-full bg-white/15 border border-white/25 p-1 relative transition-colors flex items-center cursor-pointer focus:outline-none focus:ring-2 focus:ring-owncart-mango"
            >
              <div
                className={cn(
                  "w-5 h-5 rounded-full bg-owncart-mango shadow-md transition-transform duration-200",
                  isAnnual ? "translate-x-7 bg-owncart-clay" : "translate-x-0"
                )}
              />
            </button>
            <span
              className={cn(
                "text-[14px] font-semibold transition-colors flex items-center gap-1.5 cursor-pointer",
                isAnnual ? "text-white" : "text-white/50"
              )}
              onClick={() => setIsAnnual(true)}
            >
              <span>Annual billing</span>
              <Badge variant="discount">Save 20%</Badge>
            </span>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-[22px] items-stretch pt-6">
          {pricingPlans.map((plan) => {
            const isHighlighted = plan.isPopular;
            const priceVal = isAnnual ? plan.price.annual : plan.price.monthly;

            return (
              <Card
                key={plan.id}
                variant={isHighlighted ? "pricing-highlight" : "pricing"}
                className={cn(
                  "flex flex-col justify-between p-8 relative transition-all duration-200",
                  isHighlighted ? "z-10" : "z-0 hover:-translate-y-1"
                )}
              >
                <div>
                  {/* Popular Tag */}
                  {isHighlighted && (
                    <p className="text-[12px] font-bold text-owncart-mango uppercase tracking-[0.06em] m-0 mb-2">
                      ★ Most sellers pick this
                    </p>
                  )}

                  <h3 className="font-serif text-[20px] font-semibold text-white m-0 mb-1.5">
                    {plan.name}
                  </h3>

                  {/* Price Display */}
                  <div className="font-serif text-[38px] text-white font-normal m-0 mb-1.5 flex items-baseline gap-1">
                    <span>
                      {plan.price.forever ? "₹0" : formatCurrency(priceVal)}
                    </span>
                    <span className="text-[14px] font-normal text-white/55 font-sans">
                      {plan.period}
                    </span>
                  </div>
                  <p className="text-[13.5px] text-white/60 m-0 mb-5 pb-4 border-b border-white/10">
                    {plan.description}
                  </p>

                  {/* Feature Checklist */}
                  <ul className="flex flex-col m-0 mb-6 p-0 list-none">
                    {plan.features.map((feature) => (
                      <li
                        key={feature}
                        className="text-[14px] py-2 pl-[22px] relative text-white/85 border-b border-white/10 last:border-b-0 flex items-center"
                      >
                        <span className="absolute left-0 text-owncart-mango font-bold text-base">
                          ✓
                        </span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action CTA */}
                <div className="mt-6 pt-2">
                  {plan.buttonVariant === "ghost" ? (
                    <a
                      href="#start"
                      className="inline-flex items-center justify-center font-bold text-[15px] py-[13px] px-6 rounded-full border border-white/25 text-white hover:border-white transition-all w-full text-center"
                    >
                      {plan.buttonText}
                    </a>
                  ) : (
                    <Button
                      href="#start"
                      variant="primary"
                      size="md"
                      block
                      className={isHighlighted ? "bg-owncart-mango text-owncart-forest-dark hover:bg-owncart-mango/90 shadow-none" : ""}
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
