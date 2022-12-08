import dynamic from "next/dynamic";
import Seo from "../components/common/seo";
import HomeMain from "../components/home-6";

const index = () => {
  return (
    <>
      <Seo pageTitle="Home-1" />
      <HomeMain />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
