import dynamic from "next/dynamic";
import ListingMapV4 from "@/components/listing-half-map/listing-map-v4";

export const metadata = {
  title: 'Listing - Map V4 || FindHouse - Real Estate React Template',
  description:
    'FindHouse - Real Estate React Template',
}

const index = () => {
  return (
    <>
      <ListingMapV4 />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
