import dynamic from "next/dynamic";
import GridV3 from "@/components/listing-grid/grid-v3";

export const metadata = {
  title: 'Simple Listing – Grid V3 || FindHouse - Real Estate React Template',
  description:
    'FindHouse - Real Estate React Template',
}

const index = () => {
  return (
    <>
      <GridV3 />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
