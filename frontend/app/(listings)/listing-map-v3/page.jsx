import dynamic from "next/dynamic";
import ListingMapV3 from "@/components/listing-half-map/listing-map-v3";

export const metadata = {
  title: 'Listing - Map V3 || FindHouse - Real Estate React Template',
  description:
    'FindHouse - Real Estate React Template',
}

const index = () => {
  return (
    <>
      <ListingMapV3 />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
