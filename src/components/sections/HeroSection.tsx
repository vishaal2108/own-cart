import React, { useState, useEffect } from "react";
import { Button } from "../common/Button";
import { Badge } from "../common/Badge";
import heroImg from "../../assets/hero.png";
import { ArrowRight, CheckCircle, ShieldCheck, Zap, Sparkles } from "lucide-react";

export const HeroSection: React.FC = () => {
  const avatarColors = ["#FF6557", "#FF4E67", "#F70A6B", "#FF8A72"];
  const fullText =
    "Owncart turns a pile of products and a phone number into a real online store — with payments, delivery, and a checkout your customers trust. Live in minutes, not sprints.";
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayedText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 18);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="top"
      className="relative py-6 sm:py-8 md:py-10 lg:py-12 overflow-hidden"
    >
      {/* Decorative Brand Blobs from color-code.md */}
      <div className="absolute top-10 left-10 w-[350px] h-[350px] rounded-full bg-[rgba(255,101,87,0.18)] blur-[100px] pointer-events-none -z-10 animate-float-slow" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] rounded-full bg-[rgba(247,10,107,0.12)] blur-[100px] pointer-events-none -z-10 animate-float-delayed" />
      <div className="absolute top-1/2 left-1/3 w-[300px] h-[300px] rounded-full bg-[rgba(255,78,103,0.15)] blur-[100px] pointer-events-none -z-10" />

      <div className="max-w-[1180px] mx-auto px-6 sm:px-7">
        <div className="grid grid-cols-1 lg:grid-cols-[1.08fr_0.92fr] gap-8 lg:gap-10 items-center">
          {/* Left Column: Copy & Actions */}
          <div className="flex flex-col text-center lg:text-left z-10">
            <div className="flex items-center justify-center lg:justify-start">
              <Badge variant="eyebrow" className="animate-bounce-short !mb-2 sm:!mb-3">
                No code. No developer. No waiting.
              </Badge>
            </div>

            <h1 className="font-serif text-[32px] sm:text-[40px] lg:text-[46px] font-semibold text-owncart-heading tracking-tight leading-[1.1] mb-3.5 sm:mb-4">
              Open a shop the internet{" "}
              <span className="text-transparent bg-clip-text bg-brand-gradient inline-block font-bold">
                actually visits.
              </span>
            </h1>

            {/* Animated Typing Paragraph with zero layout jump */}
            <div className="relative mb-6 sm:mb-7 max-w-[490px] mx-auto lg:mx-0 text-center lg:text-left">
              {/* Invisible placeholder reserving exact height and width in normal flow */}
              <p className="text-[15.5px] sm:text-[17px] text-transparent select-none pointer-events-none font-normal leading-[1.55] m-0">
                {fullText}
              </p>
              {/* Visible animated typing overlay */}
              <p className="text-[15.5px] sm:text-[17px] text-owncart-text font-normal leading-[1.55] absolute top-0 left-0 right-0 m-0">
                {displayedText}
                <span className="inline-block w-[2.5px] h-[1.1em] bg-owncart-accent ml-1 align-middle animate-pulse rounded-full" />
              </p>
            </div>

            {/* Professional Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 mb-6 sm:mb-7">
              <Button
                href="#start"
                variant="primary"
                size="md"
                className="w-full sm:w-auto px-8 py-3.5 text-[15.5px] font-bold transition-all group"
              >
                <span>Launch Your Store</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
              </Button>
              <Button
                href="#demo"
                variant="ghost"
                size="md"
                className="w-full sm:w-auto px-7 py-3.5 text-[15.5px] font-bold border-2 border-owncart-border hover:border-owncart-secondary bg-white/60 hover:bg-white text-owncart-heading shadow-xs hover:shadow-md hover:-translate-y-0.5 transition-all group flex items-center justify-center gap-2"
              >
                <Sparkles className="w-4 h-4 text-owncart-accent group-hover:rotate-12 transition-transform duration-200 shrink-0" />
                <span>Explore Live Demo</span>
              </Button>
            </div>

            {/* Value Props Row */}
            <div className="grid grid-cols-3 gap-2 sm:gap-4 py-3 sm:py-3.5 border-y border-owncart-border max-w-lg mx-auto lg:mx-0 text-left mb-5">
              <div className="flex items-center gap-1.5 text-xs sm:text-[13px] font-bold text-owncart-heading">
                <Zap className="w-4 h-4 text-owncart-primary shrink-0 fill-owncart-primary" />
                <span>Live in 10 mins</span>
              </div>
              <div className="flex items-center gap-1.5 text-xs sm:text-[13px] font-bold text-owncart-heading">
                <ShieldCheck className="w-4 h-4 text-owncart-secondary shrink-0" />
                <span>UPI & COD ready</span>
              </div>
              <div className="flex items-center gap-1.5 text-xs sm:text-[13px] font-bold text-owncart-heading">
                <CheckCircle className="w-4 h-4 text-owncart-accent shrink-0" />
                <span>0% commission</span>
              </div>
            </div>

            {/* Social Proof */}
            <div className="flex items-center justify-center lg:justify-start gap-3">
              <div className="flex -space-x-2 overflow-hidden p-0.5">
                {avatarColors.map((color, idx) => (
                  <div
                    key={idx}
                    className="inline-block h-[30px] w-[30px] rounded-full border-[2.5px] border-white flex items-center justify-center text-[11px] font-bold text-white shadow-xs"
                    style={{ background: color }}
                  >
                    {["A", "M", "S", "R"][idx]}
                  </div>
                ))}
              </div>
              <p className="text-[13.5px] sm:text-[14px] text-owncart-text font-medium m-0">
                <strong className="text-owncart-heading font-bold">12,400+</strong> sellers
                already run their shop on Owncart
              </p>
            </div>
          </div>

          {/* Right Column: Hero Graphic Preview */}
          <div id="demo" className="flex justify-center items-center relative pt-4 lg:pt-0 overflow-visible">
            <div className="relative w-full max-w-[560px] sm:max-w-[640px] lg:max-w-[700px] flex justify-center">
              <img
                src={heroImg}
                alt="OwnCart Platform Preview"
                className="w-full h-auto max-h-[560px] object-contain mix-blend-multiply transition-all duration-500 hover:scale-105 scale-110 sm:scale-[1.15] lg:scale-[1.2] select-none"
                style={{
                  mixBlendMode: "multiply",
                  filter: "brightness(1.05) contrast(1.02)",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
