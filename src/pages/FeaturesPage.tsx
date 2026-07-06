import React from "react";
import { FeaturesSection } from "../components/sections/FeaturesSection";
import { StripSection } from "../components/sections/StripSection";
import { CtaSection } from "../components/sections/CtaSection";

export const FeaturesPage: React.FC = () => {
  return (
    <>
      <div className="pt-6">
        <FeaturesSection />
      </div>
      <StripSection />
      <CtaSection />
    </>
  );
};
