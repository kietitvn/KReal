import dynamic from "next/dynamic";
import GridV2 from "@/components/listing-grid/grid-v2";

export const metadata = {
  title: 'Simple Listing – Grid V2 || FindHouse - Real Estate React Template',
  description:
    'FindHouse - Real Estate React Template',
}

const index = () => {
  return (
    <>
      <GridV2 />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
