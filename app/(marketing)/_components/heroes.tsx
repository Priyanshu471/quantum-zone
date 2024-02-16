import { cn } from "@/lib/utils";
import Image from "next/image";
const companies = [
  "/apple.svg",
  "/samsung.svg",
  "/hp.svg",
  "/xiaomi.svg",
  "/vivo.svg",
  "/dell.svg",
];
const Heroes = () => {
  return (
    <>
      <div className="grid grid-cols-3 gap-x-12 gap-y-4 md:block ">
        {companies.map((icon, i) => (
          <Image
            key={i}
            src={icon}
            alt="companies logo"
            width={60}
            height={60}
            className={cn(
              "rounded-full bg-white border border-whiten p-2 object-contain md:absolute shadow-primarylight/50 dark:shadow-primaryslate dark:bg-white/80",
              i === 0 && "left-1/4 top-32 md:scale-[.80] md:shadow-md",
              i === 1 && "right-[15%] bottom-64 ",
              i === 2 &&
                "bottom-1/2 left-52 py-0 -rotate-45 md:scale-125 md:shadow-xl",
              i === 3 && "-top-12 -rotate-12 right-1/4 md:shadow-md",
              i === 4 && "right-[12%] top-24 md:scale-75 md:shadow",
              i === 5 &&
                "left-[20%] -top-12 -rotate-45 md:scale-110 md:shadow-lg"
            )}
          />
        ))}
      </div>
      <p className="md:text-base text-sm">
        Our <b>200+ reviews</b> are here to help you make the right decision for
        your next purchase. <br />
      </p>
      <p className="md:-mt-8 -mt-4 md:text-base text-sm">
        <b>Find the best</b> and the most reliable products from the top brands
        by using our diverse filters.
      </p>
    </>
  );
};

export default Heroes;
