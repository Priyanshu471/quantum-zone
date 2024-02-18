"use client";
import { useLoader } from "@/hooks/use-loader";
import Navbar from "./_components/navbar";
import { useEffect } from "react";
import Loader from "@/components/Loader/loader";

const LandingLayout = ({ children }: { children: React.ReactNode }) => {
  const { loading, setLoading } = useLoader();
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3200);
    // setLoading(false);
  }, [loading, setLoading]);
  if (loading) return <Loader />;
  return (
    <div className="h-full dark:bg-black-2 bg-whiter">
      <Navbar />
      <main className="h-full pt-36 dark:bg-black-2 bg-whiter">{children}</main>
    </div>
  );
};
export default LandingLayout;
