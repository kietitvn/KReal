import dynamic from "next/dynamic";
import Seo from "../../components/common/seo";
import ListingMapV1 from "../../components/listing-half-map/listing-map-v1";

const index = () => {
  return (
    <>
      <Seo pageTitle="Listing - Map V1" />
      <ListingMapV1 />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
