import dynamic from "next/dynamic";
import Seo from "../components/common/seo";
import BlogV2 from "../components/blog-list-2";

const index = () => {
  return (
    <>
      <Seo pageTitle="Blog List 2" />
      <BlogV2 />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
