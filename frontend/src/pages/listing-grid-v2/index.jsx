import dynamic from "next/dynamic";
import Seo from "../../components/common/seo";
import GridV2 from "../../components/listing-grid/grid-v2";

const index = () => {
  return (
    <>
      <Seo pageTitle="Simple Listing – Grid V2" />
      <GridV2 />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
