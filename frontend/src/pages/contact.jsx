import dynamic from "next/dynamic";
import Seo from "../components/common/seo";
import Contact from "../components/contact";

const index = () => {
  return (
    <>
      <Seo pageTitle="Contact" />
      <Contact />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
