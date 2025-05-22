import dynamic from "next/dynamic";
import ListingDetailsV3 from "@/components/listing-details-v3";

export const metadata = {
  title: 'Listing Single – Details V3 || FindHouse - Real Estate React Template',
  description:
    'FindHouse - Real Estate React Template',
}

const index = () => {
  return (
    <>
      <ListingDetailsV3 />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
