import dynamic from "next/dynamic";
import HomeMain from "@/components/home-3/Home3";

export const metadata = {
  title: 'Home-3 || FindHouse - Real Estate React Template',
  description:
    'FindHouse - Real Estate React Template',
}

const index = () => {
  return (
    <>
     
      <HomeMain />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
