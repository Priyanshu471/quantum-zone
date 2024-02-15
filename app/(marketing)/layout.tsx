import Navbar from "./_components/navbar";

const LandingLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full dark:bg-black-2 bg-whiter">
      <Navbar />
      <main className="h-full pt-36 dark:bg-black-2 bg-whiter">{children}</main>
    </div>
  );
};
export default LandingLayout;
