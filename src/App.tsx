import React from "react";
import { MainLayout } from "./layouts/MainLayout";
import { HeroSection } from "./components/sections/HeroSection";
import { StripSection } from "./components/sections/StripSection";
import { FeaturesSection } from "./components/sections/FeaturesSection";
import { HowItWorksSection } from "./components/sections/HowItWorksSection";
import { TestimonialsSection } from "./components/sections/TestimonialsSection";
import { PricingSection } from "./components/sections/PricingSection";
import { FaqSection } from "./components/sections/FaqSection";
import { CtaSection } from "./components/sections/CtaSection";

export const App: React.FC = () => {
  return (
    <MainLayout>
      <HeroSection />
      <StripSection />
      <FeaturesSection />
      <HowItWorksSection />
      <TestimonialsSection />
      <PricingSection />
      <FaqSection />
      <CtaSection />
    </MainLayout>
  );
};

export default App;
