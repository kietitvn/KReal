import dynamic from "next/dynamic";
import Seo from "../../components/common/seo";
import GridV4 from "../../components/listing-grid/grid-v4";

const index = () => {
  return (
    <>
      <Seo pageTitle="Simple Listing – Grid V4" />
      <GridV4 />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
