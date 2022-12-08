import dynamic from "next/dynamic";
import Seo from "../../components/common/seo";
import MySavedSearch from "../../components/dashboard/my-saved-search";

const index = () => {
  return (
    <>
      <Seo pageTitle="My Saved Search" />
      <MySavedSearch />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
