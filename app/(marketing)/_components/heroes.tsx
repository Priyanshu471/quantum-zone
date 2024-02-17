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
              i === 0 && "left-1/4 top-16 md:scale-[.80] md:shadow-md",
              i === 1 && "right-1/4 bottom-32 ",
              i === 2 &&
                "bottom-1/2 left-52 py-0 -rotate-45 md:scale-125 md:shadow-xl",
              i === 3 && "top-12 -rotate-12 right-[20%] md:shadow-md",
              i === 4 && "right-[12%] top-40 md:scale-75 md:shadow",
              i === 5 &&
                "left-[20%] bottom-8 -rotate-45 md:scale-110 md:shadow-lg"
            )}
          />
        ))}
      </div>
    </>
  );
};

export default Heroes;
