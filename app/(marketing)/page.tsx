import { ModeToggle } from "@/components/mode-toggle";
import Heading from "./_components/heading";
import Heroes from "./_components/heroes";
import Footer from "./_components/footer";
import Search from "./_components/search";

export default function Home() {
  return (
    <div className="min-h-full flex flex-col dark:bg-black-2 bg-whiter">
      <div className=" relative flex flex-col items-center justify-center md:justify-start text-center gap-y-8 flex-1 px-6 pb-10 dark:bg-black-2 bg-whiter">
        <Heading />
        <Heroes />
      </div>
      {/* <Search /> */}
      <Footer />
    </div>
  );
}
