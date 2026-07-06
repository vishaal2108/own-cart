import type { Product } from "../types";

export interface DemoStoreData {
  name: string;
  avatar: string;
  subtitle: string;
  banner: string;
  cartCount: number;
  cartTotal: number;
  products: Product[];
  notifications: string[];
}

export const demoStore: DemoStoreData = {
  name: "Meenakshi Silks",
  avatar: "🥭",
  subtitle: "42 products · Madurai",
  banner: "Diwali collection is live ✨",
  cartCount: 3,
  cartTotal: 6740,
  products: [
    {
      id: "p1",
      name: "Kanjivaram Saree",
      price: 4200,
      gradient: "from-[#F4A340] to-[#E85D4C]",
    },
    {
      id: "p2",
      name: "Cotton Dupatta",
      price: 690,
      gradient: "from-[#8AA399] to-[#2E4034]",
    },
    {
      id: "p3",
      name: "Bridal Blouse",
      price: 1850,
      gradient: "from-[#E85D4C] to-[#F4A340]",
    },
    {
      id: "p4",
      name: "Silk Stole",
      price: 990,
      gradient: "from-[#2E4034] to-[#8AA399]",
    },
  ],
  notifications: [
    "✅ Payment received — ₹1,850",
    "📦 Order #1042 shipped",
  ],
};
