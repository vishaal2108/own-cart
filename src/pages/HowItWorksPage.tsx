import React from "react";
import { HowItWorksSection } from "../components/sections/HowItWorksSection";
import { TestimonialsSection } from "../components/sections/TestimonialsSection";
import { CtaSection } from "../components/sections/CtaSection";

export const HowItWorksPage: React.FC = () => {
  return (
    <>
      <div className="pt-6">
        <HowItWorksSection />
      </div>
      <TestimonialsSection />
      <CtaSection />
    </>
  );
};
