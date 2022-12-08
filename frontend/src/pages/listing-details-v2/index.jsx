import dynamic from "next/dynamic";
import Seo from "../../components/common/seo";
import ListingDetailsV2 from "../../components/listing-details-v2";

const index = () => {
  return (
    <>
      <Seo pageTitle="Listing Single – Details V2" />
      <ListingDetailsV2 />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
