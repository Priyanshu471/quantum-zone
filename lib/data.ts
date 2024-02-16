import { Filter, LucideIcon, TextSearch, Wallet } from "lucide-react";

type FeatureCards = {
  headline: string;
  description: string[];
  icon?: LucideIcon;
};
export const featureCards = [
  {
    headline: "Tailored Selections",
    description: [
      "Customized Filters",
      "Easy Navigation",
      "Find by Brand or Specs",
      "Personalized Results",
    ],
    icon: Filter,
  },
  {
    headline: "Comprehensive Insights & Demos",
    description: [
      "User Reviews",
      "Video Demos",
      "Unbiased Assessments",
      "User Experiences",
    ],
    icon: TextSearch,
  },
  {
    headline: "Smart Spending",
    description: [
      "Compare Prices",
      "Find Discounts",
      "Budget-Friendly Gadgets",
      "Best Value for Money",
    ],
    icon: Wallet,
  },
];
