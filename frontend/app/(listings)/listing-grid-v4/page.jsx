import dynamic from "next/dynamic";
import GridV4 from "@/components/listing-grid/grid-v4";

export const metadata = {
  title: 'Simple Listing – Grid V4 || FindHouse - Real Estate React Template',
  description:
    'FindHouse - Real Estate React Template',
}

const index = () => {
  return (
    <>
      <GridV4 />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
