import dynamic from "next/dynamic";
import Seo from "../components/common/seo";
import Login from "../components/login";

const index = () => {
  return (
    <>
      <Seo pageTitle="Login" />
      <Login />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
