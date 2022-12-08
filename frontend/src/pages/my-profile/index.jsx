import dynamic from "next/dynamic";
import Seo from "../../components/common/seo";
import MyProfile from "../../components/dashboard/my-profile";

const index = () => {
  return (
    <>
      <Seo pageTitle="My Profile" />
      <MyProfile />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
