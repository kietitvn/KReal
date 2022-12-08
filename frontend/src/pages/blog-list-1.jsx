import dynamic from "next/dynamic";
import Seo from "../components/common/seo";
import BlogV1 from "../components/blog-list-1";

const index = () => {
  return (
    <>
      <Seo pageTitle="Blog List 1" />
      <BlogV1 />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
