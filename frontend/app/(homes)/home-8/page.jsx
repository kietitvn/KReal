import dynamic from "next/dynamic";
import HomeMain from "@/components/home-8/Home8";

export const metadata = {
  title: 'Home-8 || FindHouse - Real Estate React Template',
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
