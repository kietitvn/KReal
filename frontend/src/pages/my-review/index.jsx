import dynamic from "next/dynamic";
import Seo from "../../components/common/seo";
import MyReview from "../../components/dashboard/my-review";

const index = () => {
  return (
    <>
      <Seo pageTitle="My Review" />
      <MyReview />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
