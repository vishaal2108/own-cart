import React from "react";
import { Button } from "../common/Button";
import { Badge } from "../common/Badge";
import { PhoneMockup } from "./PhoneMockup";
import { ArrowRight, CheckCircle, ShieldCheck, Zap } from "lucide-react";

export const HeroSection: React.FC = () => {
  const avatarColors = ["#F4A340", "#E85D4C", "#2E4034", "#8AA399"];

  return (
    <section
      id="top"
      className="relative py-6 sm:py-8 md:py-10 lg:py-12"
    >
      <div className="max-w-[1180px] mx-auto px-6 sm:px-7">
        <div className="grid grid-cols-1 lg:grid-cols-[1.08fr_0.92fr] gap-8 lg:gap-10 items-center">
          {/* Left Column: Copy & Actions */}
          <div className="flex flex-col text-center lg:text-left z-10">
            <div className="flex items-center justify-center lg:justify-start">
              <Badge variant="eyebrow" className="animate-bounce-short !mb-2 sm:!mb-3">
                No code. No developer. No waiting.
              </Badge>
            </div>

            <h1 className="font-serif text-[32px] sm:text-[40px] lg:text-[46px] font-semibold text-owncart-ink tracking-tight leading-[1.1] mb-3.5 sm:mb-4">
              Open a shop the internet{" "}
              <span className="text-owncart-clay underline decoration-owncart-mango/60 decoration-wavy underline-offset-8 inline-block">
                actually visits.
              </span>
            </h1>

            <p className="text-[15.5px] sm:text-[17px] text-owncart-ink/80 font-normal max-w-[490px] mx-auto lg:mx-0 leading-[1.55] mb-6">
              Owncart turns a pile of products and a phone number into a real
              online store — with payments, delivery, and a checkout your
              customers trust. Live in minutes, not sprints.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 mb-6 sm:mb-7">
              <Button href="#start" variant="primary" size="md" className="w-full sm:w-auto px-7 py-3 text-[15px]">
                <span>Create your store — free</span>
                <ArrowRight className="w-4 h-4" />
              </Button>
              <Button href="#demo" variant="ghost" size="md" className="w-full sm:w-auto px-6 py-3 text-[15px]">
                <span>See a live store ↓</span>
              </Button>
            </div>

            {/* Value Props Row */}
            <div className="grid grid-cols-3 gap-2 sm:gap-4 py-3 sm:py-3.5 border-y border-owncart-line/70 max-w-lg mx-auto lg:mx-0 text-left mb-5">
              <div className="flex items-center gap-1.5 text-xs sm:text-[13px] font-bold text-owncart-forest">
                <Zap className="w-4 h-4 text-owncart-mango shrink-0 fill-owncart-mango" />
                <span>Live in 10 mins</span>
              </div>
              <div className="flex items-center gap-1.5 text-xs sm:text-[13px] font-bold text-owncart-forest">
                <ShieldCheck className="w-4 h-4 text-owncart-sage shrink-0" />
                <span>UPI & COD ready</span>
              </div>
              <div className="flex items-center gap-1.5 text-xs sm:text-[13px] font-bold text-owncart-forest">
                <CheckCircle className="w-4 h-4 text-owncart-clay shrink-0" />
                <span>0% commission</span>
              </div>
            </div>

            {/* Social Proof */}
            <div className="flex items-center justify-center lg:justify-start gap-3">
              <div className="flex -space-x-2 overflow-hidden p-0.5">
                {avatarColors.map((color, idx) => (
                  <div
                    key={idx}
                    className="inline-block h-[30px] w-[30px] rounded-full border-[2.5px] border-owncart-cream flex items-center justify-center text-[11px] font-bold text-white shadow-xs"
                    style={{ background: color }}
                  >
                    {["A", "M", "S", "R"][idx]}
                  </div>
                ))}
              </div>
              <p className="text-[13.5px] sm:text-[14px] text-owncart-ink/75 font-medium m-0">
                <strong className="text-owncart-ink font-bold">12,400+</strong> sellers
                already run their shop on Owncart
              </p>
            </div>
          </div>

          {/* Right Column: Live Interactive Phone Preview */}
          <div id="demo" className="flex justify-center relative pt-2 lg:pt-0">
            <PhoneMockup />
          </div>
        </div>
      </div>
    </section>
  );
};
