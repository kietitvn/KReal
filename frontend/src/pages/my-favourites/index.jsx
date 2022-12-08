import dynamic from "next/dynamic";
import Seo from "../../components/common/seo";
import MyFavourites from "../../components/dashboard/my-favourites";

const index = () => {
  return (
    <>
      <Seo pageTitle="My Favourites" />
      <MyFavourites />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
