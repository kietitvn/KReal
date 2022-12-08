import dynamic from "next/dynamic";
import Seo from "../../components/common/seo";
import ListingDetailsV1 from "../../components/listing-details-v1";

const index = () => {
  return (
    <>
      <Seo pageTitle="Listing Single – Details V1" />
      <ListingDetailsV1 />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
