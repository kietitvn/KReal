import dynamic from "next/dynamic";
import Seo from "../components/common/seo";
import Terms from "../components/terms-conditions";

const index = () => {
  return (
    <>
      <Seo pageTitle="Terms & Conditions" />
      <Terms />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
