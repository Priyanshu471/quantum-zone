"use client";
import { cn } from "@/lib/utils";
import Logo from "./logo";
import { useScrollTop } from "@/hooks/use-scroll-top";
import { marketingLinks } from "@/lib/menu";
// import Link from "next/link";
import { Link } from "react-scroll";
import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import MobileNavbar from "@/components/mobile-navbar";

const Navbar = () => {
  const scrolled = useScrollTop();
  const [isMobile, setIsMobile] = useState<boolean>(false);
  useEffect(() => {
    if (window.innerWidth < 600) {
      setIsMobile(true);
    }
  }, []);
  return (
    <div
      className={cn(
        "z-50 bg-transparent dark:bg-black-2 fixed top-0 flex justify-between items-center w-full p-6 backdrop-blur-sm drop-shadow-sm",
        scrolled && " shadow border-b border-stroke dark:border-strokedark"
      )}
    >
      <Logo />
      {!isMobile && (
        <div className="flex transition-all gap-x-4">
          {marketingLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href.split("#")[1]}
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              className="text-black-2 font-medium cursor-pointer p-2 flex justify-center items-center gap-x-2 rounded-md transition-all duration-300 hover:bg-primary drop-shadow-sm hover:backdrop-blur-sm hover:text-white dark:text-primary dark:hover:text-whiten dark:hover:bg-primarydark/60"
            >
              {link.icon && <link.icon className="h-4 w-4 mb-1" />}
              {link.name}
            </Link>
          ))}
        </div>
      )}
      <div className="flex justify-center items-center gap-x-4">
        <Button variant={"default"}>Log in</Button>
        <Button variant={"secondary"}>Sign up</Button>

        <ModeToggle />
      </div>
      {isMobile && (
        <div>
          <MobileNavbar />
        </div>
      )}
    </div>
  );
};

export default Navbar;
