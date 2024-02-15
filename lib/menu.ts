import {
  Contact,
  HandCoins,
  Home,
  LucideIcon,
  UserRoundSearch,
} from "lucide-react";

type Link = {
  name: string;
  href: string;
  icon?: LucideIcon;
};
export const marketingLinks: Link[] = [
  { name: "Home", href: "/", icon: Home },
  { name: "Features", href: "/features", icon: HandCoins },
  { name: "About", href: "/about", icon: UserRoundSearch },
  { name: "Contact", href: "/contact", icon: Contact },
];
