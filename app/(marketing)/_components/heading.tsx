import { Button } from "@/components/ui/button";
import Image from "next/image";
const trendings = ["Phones", "Laptops", "Earphones", "Smartwatches"];
const Heading = () => {
  return (
    <div className="max-w-4xl space-y-5 p-5 border border-white rounded-lg backdrop-blur-sm shadow-lg shadow-primary/20 dark:border-strokedark">
      <div className="flex items-center gap-x-4 justify-center mb-12">
        <h3>Trending Categories</h3>
        <div className="flex gap-x-2">
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
            className=" text-primary dark:text-whiten"
            size={"xs"}
          >
            View all
          </Button>
        </div>
      </div>
      <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold relative">
        The Best Place To
        <br /> Find Your{" "}
        <span className="bg-primary/80 text-whiter rounded-lg py-0 px-4 dark:bg-primarydark">
          Perfect
        </span>{" "}
        Gadget{" "}
        <Image
          src="/circuit-logo.png"
          alt="logo"
          width={55}
          height={55}
          className="inline-block mb-2 rounded-lg p-1  bg-primary/60 dark:bg-primarydark/60"
        />
      </h1>
      <h3 className="text-base sm:text-xl md:text-2xl font-medium">
        Elevate Your Tech Experience.
      </h3>
    </div>
  );
};

export default Heading;
