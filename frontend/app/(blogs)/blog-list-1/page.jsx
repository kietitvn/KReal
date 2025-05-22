import dynamic from "next/dynamic";
import BlogV1 from "@/components/blog-list-1";

export const metadata = {
  title: 'Blog List 1 || FindHouse - Real Estate React Template',
  description:
    'FindHouse - Real Estate React Template',
}

const index = () => {
  return (
    <>
      <BlogV1 />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
