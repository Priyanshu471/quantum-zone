import Image from "next/image";
import { Inter, Poppins, Roboto, Rubik } from "next/font/google";

import { cn } from "@/lib/utils";

const font = Rubik({
  subsets: ["hebrew"],
  weight: ["400", "500", "600"],
});

const Logo = () => {
  return (
    <div className="flex items-center gap-x-2 hover:bg-whiter/20 p-0.5 rounded-sm px-1 cursor-pointer">
      <Image
        src="/marketing-logo2.png"
        width={35}
        height={35}
        alt="logo"
        className="rounded-full  "
      />
      <p
        className={cn(
          "hidden md:block font-semibold text-lg text-primarydark dark:text-primarytext",
          font.className
        )}
      >
        Quantum Zone
      </p>
    </div>
  );
};
export default Logo;
