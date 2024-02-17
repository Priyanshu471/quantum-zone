"use client";
import React from "react";
import { Boxes } from "@/components/ui/background-boxes";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { Button } from "@/components/ui/button";
const companies = [
  "/apple.svg",
  "/samsung.svg",
  "/hp.svg",
  "/xiaomi.svg",
  "/vivo.svg",
  "/dell.svg",
];
const trendings = ["Phones", "Laptops", "Earphones", "Smartwatches"];

export function HomeSection() {
  return (
    <div className="h-[30rem] relative w-full overflow-hidden bg-whiter dark:bg-black-2 flex flex-col items-center justify-center rounded-lg ">
      <div className="absolute inset-0 w-full h-full bg-whiter dark:bg-black-2 z-20 dark:text-neutral-300 text-black-2 [mask-image:radial-gradient(transparent,white)] pointer-events-none " />

      <Boxes />
      <div className="flex items-center gap-x-4 gap-y-2 justify-center mb-12 md:flex-row flex-col z-20">
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
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold relative md:leading-normal leading-snug  mb-0 md:mb-5">
        The Best Place To
        <br /> Find Your <br className="md:hidden" />{" "}
        <span className="bg-primary/80  rounded-lg py-0 px-4 dark:bg-primarydark text-whiter">
          Perfect
        </span>{" "}
        Gadget{" "}
      </h1>
      <h3 className="text-base sm:text-xl md:text-2xl font-medium my-4 z-20">
        Elevate Your Tech Experience.
      </h3>
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
      <div className="mt-2 text-black-2 dark:text-neutral-300">
        <p className="text-center mt-2  relative z-20 md:text-base text-sm">
          Our <b className="text-primary/80">200+ reviews</b> are here to help
          you make the right decision for your next purchase. <br />
        </p>
        <p className="text-center mt-0  relative z-20 md:text-base text-sm">
          <b className="text-primary/80">Find the best</b> and the most reliable
          products from the top brands by using our diverse filters.
        </p>
      </div>
    </div>
  );
}
