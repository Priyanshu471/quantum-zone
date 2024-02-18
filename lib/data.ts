import {
  Filter,
  LucideIcon,
  MessagesSquare,
  TextSearch,
  Wallet,
} from "lucide-react";

export interface FeatureCards {
  title: string;
  description: string[];
  icon?: LucideIcon;
}
export const featureCards: FeatureCards[] = [
  {
    title: "Tailored Selections",
    description: [
      "Customized Filters",
      "Easy Navigation",
      "Find by Brand or Specs",
      "Personalized Results",
    ],
    icon: Filter,
  },
  {
    title: "Comprehensive Insights & Demos",
    description: [
      "User Reviews",
      "Video Demos",
      "Unbiased Assessments",
      "User Experiences",
    ],
    icon: TextSearch,
  },
  {
    title: "Smart Spending",
    description: [
      "Compare Prices",
      "Find Discounts",
      "Budget-Friendly Gadgets",
      "Best Value for Money",
    ],
    icon: Wallet,
  },
  {
    title: "Interactive Comment Section",
    description: [
      "Users can share their opinion",
      "Users can resolve any doubt",
      "Users can reply to reviews",
    ],
    icon: MessagesSquare,
  },
];
export const productSections: string[] = [
  "Users can share their opinion",
  "Users can resolve any doubt",
  "Users can reply to reviews",
  //   "Users can rate products",
  //   "Users can report bugs",
];
