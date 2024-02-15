"use client";
import { cn } from "@/lib/utils";
import Logo from "./logo";
import { useScrollTop } from "@/hooks/use-scroll-top";
import { marketingLinks } from "@/lib/menu";
import Link from "next/link";
import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const scrolled = useScrollTop();
  return (
    <div
      className={cn(
        "z-50 bg-transparent dark:bg-black-2 fixed top-0 flex justify-between items-center w-full p-6 backdrop-blur-sm drop-shadow-sm",
        scrolled && " shadow border-b border-stroke dark:border-strokedark"
      )}
    >
      <Logo />
      <div className="flex transition-all gap-x-4">
        {marketingLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="text-black-2 font-medium cursor-pointer  p-2 flex justify-center items-center gap-x-2 rounded-md transition-all duration-300 hover:bg-primary drop-shadow-sm hover:backdrop-blur-sm hover:text-white dark:text-primary dark:hover:text-whiten dark:hover:bg-primarydark/60"
          >
            {link.icon && <link.icon className="h-4 w-4" />}
            {link.name}
          </Link>
        ))}
      </div>
      <div className="flex justify-center items-center gap-x-4">
        <Button variant={"default"}>Log in</Button>
        <Button variant={"secondary"}>Sign up</Button>

        <ModeToggle />
      </div>
    </div>
  );
};

export default Navbar;
