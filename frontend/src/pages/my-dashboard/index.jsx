import dynamic from "next/dynamic";
import Seo from "../../components/common/seo";
import MyDashboard from "../../components/dashboard/my-dashboard";

const index = () => {
  return (
    <>
      <Seo pageTitle="Dashboard" />
      <MyDashboard />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
