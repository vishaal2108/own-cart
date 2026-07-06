import React from "react";
import { Button } from "../common/Button";
import { ArrowRight } from "lucide-react";

export const CtaSection: React.FC = () => {
  return (
    <section id="start" className="bg-owncart-mango py-[90px] text-center relative overflow-hidden">
      <div className="max-w-[1180px] mx-auto px-7 relative z-10">
        <div className="max-w-[680px] mx-auto flex flex-col items-center">
          <h2 className="font-serif text-[28px] sm:text-[36px] md:text-[42px] font-semibold text-owncart-forest-dark tracking-tight leading-[1.15] m-0 mb-[14px]">
            Your first order is closer than you think.
          </h2>

          <p className="text-[16px] text-owncart-forest-dark/75 m-0 mb-[30px] max-w-lg">
            Set up your storefront today — no card required to start, and no code ever needed.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 w-full sm:w-auto">
            <Button
              href="#"
              variant="primary"
              size="lg"
              className="bg-owncart-forest-dark text-white hover:bg-owncart-forest-dark/90 shadow-xl shadow-owncart-forest-dark/20 w-full sm:w-auto"
            >
              <span>Create your store — free</span>
              <ArrowRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
