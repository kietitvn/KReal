import dynamic from "next/dynamic";
import HomeMain from "@/components/home-5";

export const metadata = {
  title: 'Home-5 || FindHouse - Real Estate React Template',
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
