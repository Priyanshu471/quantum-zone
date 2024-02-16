import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row items-center justify-between w-full p-6 bg-background z-50 dark:bg-black-2 bg-whiter">
      <p className="text-muted-foreground text-sm md:w-1/2 w-full text-center md:text-start">
        © 2024 Quantum Zone. All rights reserved.
      </p>
      <div className="md:ml-auto w-full justify-between md:justify-end flex items-center gap-x-2 text-muted-foreground">
        <Button variant="ghost" size="sm">
          Privacy Policy
        </Button>
        <Button variant="ghost" size="sm">
          Terms & Conditions
        </Button>
      </div>
    </div>
  );
};

export default Footer;
