import { MoveRight } from "lucide-react";

interface MarketingCardProps {
  children: React.ReactNode;
  headline: string;
  description: string[];
}
const MarketingCard = ({
  children,
  headline,
  description,
}: MarketingCardProps) => {
  return (
    <div className="rounded-lg border border-stroke bg-white px-7 py-6 shadow-lg dark:border-strokedark dark:bg-black cursor-pointer">
      <div className="flex items-center gap-x-2">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-meta-2 dark:bg-meta-4">
          {children}
        </div>
        <span className="text-xl font-medium text-primary dark:text-whiter">
          {headline}
        </span>
      </div>

      <div className="mt-4 flex flex-col items-center justify-between">
        <div className="w-full overflow-hidden">
          {description.map((desc, i) => {
            return (
              <p
                key={i}
                className="text-black dark:text-whiten mb-2 text-sm md:text-lg font-medium flex items-center"
              >
                <MoveRight className="h-4 w-4 mr-2 text-primary dark:text-primarytext" />
                {desc}
              </p>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MarketingCard;
