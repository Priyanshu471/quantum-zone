import { cn } from "@/lib/utils";
import Image from "next/image";
const companies = [
  "/apple.svg",
  "/samsung.svg",
  "/hp.svg",
  "/xiaomi.svg",
  "/jbl.svg",
  "/vivo.svg",
  "/dell.svg",
];
const Heroes = () => {
  return (
    <div className="">
      {companies.map((icon, i) => (
        <Image
          key={i}
          src={icon}
          alt="companies logo"
          width={60}
          height={60}
          className={cn(
            "rounded-full bg-white border border-whiten p-2 object-contain absolute shadow shadow-primarylight/50 dark:bg-white/80",
            i === 0 && "left-24 top-32",
            i === 1 && "right-52 bottom-64",
            i === 2 && "bottom-52 left-52 py-0 -rotate-45",
            i === 3 && "-top-12 -rotate-12 right-36",
            i === 4 && "bottom-[40%] left-1/2 rotate-[24deg]",
            i === 5 && "right-24 top-24",
            i === 6 && "left-[20%] -top-12 -rotate-45"
          )}
        />
      ))}
    </div>
  );
};

export default Heroes;
