import React from "react";
import { FaqSection } from "../components/sections/FaqSection";
import { CtaSection } from "../components/sections/CtaSection";

export const FaqPage: React.FC = () => {
  return (
    <>
      <div className="pt-6">
        <FaqSection />
      </div>
      <CtaSection />
    </>
  );
};
