import dynamic from "next/dynamic";
import Seo from "../../components/common/seo";
import AgencyV1 from "../../components/agency-view/agency-v1";

const index = () => {
  return (
    <>
      <Seo pageTitle="Simple Listing – AgencyV1" />
      <AgencyV1 />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
