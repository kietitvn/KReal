'use client'
import HomeMain from "@/components/home-6";
import dynamic from "next/dynamic";

const Index = () => {
  return (
    <>
      <HomeMain />
    </>
  );
};

export default dynamic(() => Promise.resolve(Index), { ssr: false });
