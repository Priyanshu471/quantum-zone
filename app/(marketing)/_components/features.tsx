import MarketingCard from "@/components/marketing-card";
import { featureCards } from "@/lib/data";
import { Dot } from "lucide-react";
import Image from "next/image";

const Features = () => {
  return (
    <div id="features" className="scroll-m-8  border-b shadow-sm">
      <h1 className="text-2xl md:text-4xl font-medium text-center">
        Top Features of this app
      </h1>
      <div className="grid md:grid-cols-3 gap-x-8 p-8 grid-cols-1 gap-y-4">
        {featureCards.map((card, i) => (
          <MarketingCard
            key={i}
            headline={card.headline}
            description={card.description}
          >
            {card.icon && <card.icon className="h-6 w-6" />}
          </MarketingCard>
        ))}
      </div>
      <h1 className="text-2xl md:text-3xl font-medium text-center">
        Interactive comment section
      </h1>
      <div className="px-12 py-8 flex  flex-col md:flex-row justify-between gap-y-4">
        <div className="md:w-[30%] w-full m-auto relative">
          <p className="hidden md:block text-2xl p-1.5 px-1 rounded-md bg-primary/90 text-white mb-1 dark:bg-primarydark">
            An interactive comment section is
          </p>
          <p className=" hidden md:block text-2xl p-1.5 px-1 rounded-md bg-primary/90 text-white w-4/5 dark:bg-primarydark">
            added to each product page
          </p>
          <p className="md:hidden text-xl mb-1">
            An interactive comment section is added to each product page
          </p>

          <span className="md:text-lg block">
            <Dot className="h-8 w-8 inline-block" />
            Users can share their opinion
          </span>
          <span className="md:text-lg block">
            <Dot className="h-8 w-8 inline-block" />
            Users can resolve any doubt
          </span>
          <span className="md:text-lg block">
            <Dot className="h-8 w-8 inline-block" />
            Users can reply to reviews
          </span>
        </div>
        <Image
          src={"/comment-section.svg"}
          alt="comment section"
          width={680}
          height={350}
          className="border border-whiten rounded-xl shadow-lg dark:hidden"
        />
        <Image
          src={"/comment-section-dark.svg"}
          alt="comment section"
          width={680}
          height={350}
          className="border border-strokedark rounded-xl shadow-lg hidden dark:block"
        />
      </div>
    </div>
  );
};

export default Features;
