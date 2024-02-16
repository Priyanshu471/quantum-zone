import Logo from "@/app/(marketing)/_components/logo";
import { Button } from "@/components/ui/button";
import { Link } from "react-scroll";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { marketingLinks } from "@/lib/menu";
import { Menu, MenuIcon } from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";

export default function MobileNavbar() {
  return (
    <>
      <Sheet>
        <SheetTrigger>
          <MenuIcon className="text-muted-foreground ml-2 h-6 w-6 text-primary dark:text-whiter" />
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle className="ml-4 flex items-center gap-x-2 text-xl">
              <Logo />
              <p>Quantum Zone</p>
            </SheetTitle>
            <div className="w-full border-b-2 "></div>
          </SheetHeader>
          <SheetDescription>
            <div className="px-2 pt-2 pb-3 space-y-1 bg-background ">
              {marketingLinks.map((link, i) => (
                <SheetClose key={i} asChild>
                  <Link
                    to={link.href.split("#")[1]}
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={1200}
                    key={i}
                    // href={link.hash}
                    className={cn(
                      "text-black-2 text-xl font-medium cursor-pointer p-4  w-full flex justify-start items-center gap-x-2 rounded-md transition-all duration-300 hover:bg-primary  hover:text-white dark:text-primarytext dark:hover:text-whiten dark:hover:bg-primarydark/60"
                    )}
                    onClick={() => {}}
                  >
                    {link.icon && <link.icon className="h-6 w-6 mb-1" />}
                    {link.name}
                  </Link>
                </SheetClose>
              ))}
            </div>
          </SheetDescription>
          <div className="w-full border-b-2 mb-5"></div>

          <SheetDescription>
            {/* <ContactDetails isNavbar /> */}
          </SheetDescription>
        </SheetContent>
      </Sheet>
    </>
  );
}
