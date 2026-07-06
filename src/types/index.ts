export interface NavItem {
  label: string;
  href: string;
  isButton?: boolean;
  variant?: 'primary' | 'ghost';
}

export interface Product {
  id: string;
  name: string;
  price: number;
  gradient: string;
}

export interface FeatureItem {
  id: string;
  title: string;
  description: string;
  isBig?: boolean;
  isWide?: boolean;
  miniUrl?: {
    base: string;
    bold: string;
  };
  chips?: string[];
}

export interface StepItem {
  step: number;
  title: string;
  description: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  business: string;
  location: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  price: {
    monthly: number;
    annual: number;
    forever?: boolean;
  };
  period: string;
  description: string;
  features: string[];
  isPopular?: boolean;
  buttonText: string;
  buttonVariant: 'primary' | 'ghost';
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface FooterColumn {
  title: string;
  links: { label: string; href: string }[];
}
