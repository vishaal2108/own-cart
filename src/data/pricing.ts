import type { PricingPlan } from "../types";

export const pricingPlans: PricingPlan[] = [
  {
    id: "starter",
    name: "Starter",
    price: {
      monthly: 0,
      annual: 0,
      forever: true,
    },
    period: "/forever",
    description: "For testing the water.",
    features: [
      "Up to 20 products",
      "Owncart subdomain",
      "UPI & COD checkout",
      "Basic order dashboard",
    ],
    buttonText: "Start free",
    buttonVariant: "ghost",
  },
  {
    id: "growth",
    name: "Growth",
    price: {
      monthly: 399,
      annual: 319,
    },
    period: "/month",
    description: "For a shop that's actually running.",
    features: [
      "Unlimited products",
      "Custom domain",
      "Cards, UPI & COD",
      "Delivery zones & rates",
      "Abandoned cart recovery",
    ],
    isPopular: true,
    buttonText: "Start 14-day trial",
    buttonVariant: "primary",
  },
  {
    id: "scale",
    name: "Scale",
    price: {
      monthly: 999,
      annual: 799,
    },
    period: "/month",
    description: "For teams and multiple shops.",
    features: [
      "Everything in Growth",
      "Multiple staff logins",
      "Advanced analytics",
      "Priority support",
    ],
    buttonText: "Start free",
    buttonVariant: "ghost",
  },
];
