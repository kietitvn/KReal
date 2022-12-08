import dynamic from "next/dynamic";
import Seo from "../../components/common/seo";
import AgentV2 from "../../components/agent-view/agent-v2";

const index = () => {
  return (
    <>
      <Seo pageTitle="Simple Listing – Agent V2" />
      <AgentV2 />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
