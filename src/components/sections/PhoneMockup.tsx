import React from "react";
import { demoStore } from "../../data/demoStore";
import { formatCurrency } from "../../utils/currency";
import { CheckCircle2, Truck } from "lucide-react";

export const PhoneMockup: React.FC = () => {
  return (
    <div className="relative w-[265px] sm:w-[275px] mx-auto select-none py-4">
      {/* Floating Notification Card 1 */}
      <div className="absolute top-[12%] -left-[14%] sm:-left-[20%] z-20 bg-owncart-paper px-3 py-2 rounded-xl shadow-owncart border border-owncart-line flex items-center gap-2 animate-float-slow text-[11.5px] sm:text-[12px] font-bold text-owncart-ink whitespace-nowrap">
        <div className="w-4 h-4 rounded-full bg-owncart-forest text-owncart-mango flex items-center justify-center shrink-0">
          <CheckCircle2 className="w-3 h-3" />
        </div>
        <span>₹1,850 via UPI</span>
      </div>

      {/* Floating Notification Card 2 */}
      <div className="absolute bottom-[8%] -right-[10%] sm:-right-[16%] z-20 bg-owncart-paper px-3 py-2 rounded-xl shadow-owncart border border-owncart-line flex items-center gap-2 animate-float-delayed text-[11.5px] sm:text-[12px] font-bold text-owncart-ink whitespace-nowrap">
        <div className="w-4 h-4 rounded-full bg-owncart-clay text-white flex items-center justify-center shrink-0">
          <Truck className="w-3 h-3" />
        </div>
        <span>Order #4092 shipped</span>
      </div>

      {/* Outer Phone Shell */}
      <div className="bg-owncart-forest-dark rounded-[34px] p-3 shadow-owncart relative z-10 border-[2.5px] border-owncart-forest">
        {/* Phone Speaker / Camera Notch */}
        <div className="w-[60px] h-[5px] bg-white/15 rounded-full mx-auto mb-2" />

        {/* Inner Screen */}
        <div className="bg-owncart-paper rounded-[22px] p-3.5 text-owncart-ink">
          {/* Store Header Row */}
          <div className="flex items-center gap-2 mb-2.5">
            <div className="w-[34px] h-[34px] rounded-full bg-owncart-mango flex items-center justify-center font-bold text-base text-owncart-forest-dark shrink-0">
              {demoStore.avatar}
            </div>
            <div className="overflow-hidden">
              <h3 className="font-serif font-semibold text-[14px] leading-tight text-owncart-ink">
                {demoStore.name}
              </h3>
              <p className="text-[10.5px] text-owncart-ink/60 mt-0.5">
                {demoStore.subtitle}
              </p>
            </div>
          </div>

          {/* Promotional Banner */}
          <div className="bg-owncart-sage text-white text-[11px] font-bold py-1.5 px-2.5 rounded-[8px] mb-3 text-center shadow-xs leading-snug">
            {demoStore.banner}
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-2 gap-2 mb-3">
            {demoStore.products.map((product) => (
              <div
                key={product.id}
                className="bg-owncart-cream rounded-lg p-2 flex flex-col justify-between border border-owncart-line/40"
              >
                <div className="w-full aspect-[1/0.8] rounded-md bg-gradient-to-br from-owncart-forest/10 to-owncart-mango/20 flex items-center justify-center text-owncart-forest font-bold text-xs mb-1 overflow-hidden">
                  <div className="w-7 h-7 rounded-full bg-white/80 shadow-xs flex items-center justify-center font-serif font-bold text-owncart-forest text-[10px]">
                    {product.name.charAt(0)}
                  </div>
                </div>
                <div>
                  <h4 className="text-[11px] font-bold text-owncart-ink leading-tight">
                    {product.name}
                  </h4>
                  <p className="text-[10.5px] text-owncart-clay font-bold mt-0.5">
                    {formatCurrency(product.price)}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Sticky Checkout Bar */}
          <div className="bg-owncart-forest text-white py-2 px-3 rounded-lg text-[12px] font-bold flex items-center justify-between shadow-sm">
            <span>{demoStore.cartCount} items</span>
            <span className="text-owncart-mango">
              {formatCurrency(demoStore.cartTotal)} →
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
