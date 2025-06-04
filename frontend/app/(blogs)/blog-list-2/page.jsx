import dynamic from "next/dynamic";
import BlogV2 from "@/components/blog-list-2";

export const metadata = {
  title: 'Blog List 2 || FindHouse - Real Estate React Template',
  description:
    'FindHouse - Real Estate React Template',
}

const index = () => {
  return (
    <>
      <BlogV2 />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
