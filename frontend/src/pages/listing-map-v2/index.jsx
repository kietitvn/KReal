import dynamic from "next/dynamic";
import Seo from "../../components/common/seo";
import ListingMapV2 from "../../components/listing-half-map/listing-map-v2";

const index = () => {
  return (
    <>
      <Seo pageTitle="Listing - Map V2" />
      <ListingMapV2 />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
