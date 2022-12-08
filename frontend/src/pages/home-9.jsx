import dynamic from "next/dynamic";
import Seo from "../components/common/seo";
import Home9 from "../components/home-9";

const index = () => {
  return (
    <>
      <Seo pageTitle="Home-9" />
      <Home9 />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
