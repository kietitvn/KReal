import dynamic from "next/dynamic";
import Compare from "@/components/compare";

export const metadata = {
  title: 'Compare || FindHouse - Real Estate React Template',
  description:
    'FindHouse - Real Estate React Template',
}

const index = () => {
  return (
    <>
      <Compare />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
