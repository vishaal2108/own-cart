import React from "react";
import { HeroSection } from "../components/sections/HeroSection";
import { StripSection } from "../components/sections/StripSection";
import { HowItWorksSection } from "../components/sections/HowItWorksSection";
import { TestimonialsSection } from "../components/sections/TestimonialsSection";
import { CtaSection } from "../components/sections/CtaSection";

export const HomePage: React.FC = () => {
  return (
    <>
      <HeroSection />
      <StripSection />
      <HowItWorksSection />
      <TestimonialsSection />
      <CtaSection />
    </>
  );
};
