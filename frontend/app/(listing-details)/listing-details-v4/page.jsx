import dynamic from "next/dynamic";
import ListingDetailsV4 from "@/components/listing-details-v4";

export const metadata = {
  title: 'Listing Single – Details V4 || FindHouse - Real Estate React Template',
  description:
    'FindHouse - Real Estate React Template',
}

const index = () => {
  return (
    <>
      <ListingDetailsV4 />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
