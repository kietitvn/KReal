import dynamic from "next/dynamic";
import MapHeader from "@/components/listing-style/map-header";

export const metadata = {
  title: 'Listing - Map Header || FindHouse - Real Estate React Template',
  description:
    'FindHouse - Real Estate React Template',
}

const index = () => {
  return (
    <>
      <MapHeader />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
