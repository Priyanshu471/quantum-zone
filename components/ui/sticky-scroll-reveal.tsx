"use client";
import React, { useRef } from "react";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { motion } from "framer-motion";
import { Dot } from "lucide-react";
import { featureCards } from "@/lib/data";
import Image from "next/image";

const content = featureCards;
export const StickyScroll = () => {
  const [activeCard, setActiveCard] = React.useState(0);
  const ref = useRef<any>(null);
  const { scrollYProgress } = useScroll({
    container: ref,
    offset: ["start start", "end start"],
    smooth: 1,
    layoutEffect: true,
  });
  const cardLength = content.length;

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const cardsBreakpoints = content.map((_, index) => index / cardLength);
    cardsBreakpoints.forEach((breakpoint, index) => {
      if (latest > breakpoint - 0.2 && latest <= breakpoint) {
        setActiveCard(() => index);
      }
    });
  });

  const linearGradients = [
    "linear-gradient(to bottom right, var(--cyan-500), var(--emerald-500))",
    "linear-gradient(to bottom right, var(--pink-500), var(--indigo-500))",
    "linear-gradient(to bottom right, var(--orange-500), var(--yellow-500))",
  ];
  const images = [
    "/tailored-selection.png",
    "/insights-demo.png",
    "/smart-spending.png",
    "/comment-section.png",
  ];
  return (
    <motion.div
      className="h-[35rem] overflow-y-auto flex justify-around relative space-x-10 rounded-md p-10 px-24 hide-scrollbar bg-whiter dark:bg-black-2 border-t border-stroke dark:border-strokedark"
      ref={ref}
    >
      <div className="relative flex items-start px-4">
        <div className="max-w-2xl text-black-2 dark:text-whiten">
          {content.map((item, index) => (
            <div key={item.title + index} className="my-16">
              <motion.h2
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
                className=" text-xl md:text-3xl flex items-center gap-x-2 "
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-meta-2 dark:bg-meta-4">
                  {item.icon && <item.icon className="h-6 w-6" />}
                </span>
                {item.title}
              </motion.h2>
              <motion.div
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
                className="max-w-sm mt-10"
              >
                {item.description.map((desc, i) => (
                  <p
                    key={i}
                    className="mb-2 text-sm md:text-xl  flex items-center"
                  >
                    <Dot className="h-8 w-8 mr-2 text-primary dark:text-primarytext" />
                    {desc}
                  </p>
                ))}
              </motion.div>
            </div>
          ))}
          <div className="h-40" />
        </div>
      </div>
      <motion.div
        animate={{
          backgroundImage: "url()",
        }}
        className="hidden lg:block rounded-lg sticky top-0 overflow-hidden border border-stroke dark:border-strokedark shadow-md dark:shadow-graydark"
      >
        <Image
          src={images[activeCard]}
          alt="feature"
          objectFit="cover"
          className="rounded-lg transition-opacity duration-300"
          width={500}
          height={340}
        />
      </motion.div>
    </motion.div>
  );
};

{
  /* <div className="w-full overflow-hidden">
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
</div> */
}
