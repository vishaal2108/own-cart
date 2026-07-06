import React from "react";
import { PricingSection } from "../components/sections/PricingSection";
import { FaqSection } from "../components/sections/FaqSection";
import { CtaSection } from "../components/sections/CtaSection";

export const PricingPage: React.FC = () => {
  return (
    <>
      <div className="pt-6">
        <PricingSection />
      </div>
      <FaqSection />
      <CtaSection />
    </>
  );
};
