import type { FeatureItem } from "../types";

export const featuresData: FeatureItem[] = [
  {
    id: "custom-link",
    title: "Your store, your link",
    description:
      "owncart.shop/yourbrand — clean, shareable, and yours. Add a custom domain whenever you're ready.",
    isBig: true,
    miniUrl: {
      base: "owncart.shop/",
      bold: "meenakshisilks",
    },
  },
  {
    id: "real-checkout",
    title: "Real checkout",
    description:
      "UPI, cards, and cash on delivery, built in. No third-party cart, no redirects.",
  },
  {
    id: "live-inventory",
    title: "Inventory that keeps up",
    description:
      "Stock counts update the moment an order comes in, across every device you sell from.",
  },
  {
    id: "unified-orders",
    title: "Orders in one place",
    description:
      "Every order, payment, and delivery status lands in a single dashboard — no more scrolling chats.",
  },
  {
    id: "omnichannel-share",
    title: "Share it anywhere",
    description:
      "Send your storefront in a WhatsApp status, an Instagram bio, or a QR code on your shop counter. It works the same everywhere.",
    isWide: true,
    chips: [
      "WhatsApp catalog",
      "Instagram bio link",
      "Printable QR",
      "Google search",
    ],
  },
];
