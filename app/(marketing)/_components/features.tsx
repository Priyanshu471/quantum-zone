import MarketingCard from "@/components/marketing-card";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
import { featureCards, productSections } from "@/lib/data";
import { Dot } from "lucide-react";
import Image from "next/image";

const Features = () => {
  return (
    <div
      id="features"
      className=" hide-scrollbar scroll-m-8 border-b shadow-sm"
    >
      <h1 className="text-2xl md:text-4xl font-medium text-center mb-8">
        Top Features
      </h1>
      <StickyScroll />
    </div>
  );
};

export default Features;
