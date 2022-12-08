import dynamic from "next/dynamic";
import Seo from "../../components/common/seo";
import ListingDetailsV4 from "../../components/listing-details-v4";

const index = () => {
  return (
    <>
      <Seo pageTitle="Listing Single – Details V4" />
      <ListingDetailsV4 />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
