import dynamic from "next/dynamic";
import Seo from "../../components/common/seo";
import ListingDetailsV3 from "../../components/listing-details-v3";

const index = () => {
  return (
    <>
      <Seo pageTitle="Listing Single – Details V3" />
      <ListingDetailsV3 />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
