import { Button } from "@/components/ui/button";
import Image from "next/image";
const trendings = ["Phones", "Laptops", "Earphones", "Smartwatches"];
const Heading = () => {
  return (
    <div className="z-10 max-w-sm md:max-w-4xl space-y-5 p-5 rounded-lg backdrop-blur-sm">
      <div className="flex items-center gap-x-4 gap-y-2 justify-center mb-12 md:flex-row flex-col">
        <h3 className="underline md:no-underline underline-offset-4">
          Trending Categories
        </h3>
        <div className="flex md:gap-x-2 gap-x-1">
          {trendings.map((trend, index) => (
            <Button
              key={index}
              variant={"link"}
              className="bg-primarylight/50 text-primary dark:text-whiten dark:bg-primarydark/60"
              size={"xs"}
            >
              {trend}
            </Button>
          ))}
          <Button
            variant={"link"}
            className=" text-primary dark:text-whiten "
            size={"xs"}
          >
            View all
          </Button>
        </div>
      </div>
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold relative md:leading-normal leading-snug">
        The Best Place To
        <br /> Find Your <br className="md:hidden" />{" "}
        <span className="bg-primary/80 text-whiter rounded-lg py-0 px-4 dark:bg-primarydark">
          Perfect
        </span>{" "}
        Gadget{" "}
      </h1>
      <h3 className="text-base sm:text-xl md:text-2xl font-medium">
        Elevate Your Tech Experience.
      </h3>
    </div>
  );
};

export default Heading;
