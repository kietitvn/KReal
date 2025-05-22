import dynamic from "next/dynamic";
import Gallery from "@/components/gallery";

export const metadata = {
  title: 'Gallery || FindHouse - Real Estate React Template',
  description:
    'FindHouse - Real Estate React Template',
}

const index = () => {
  return (
    <>
      <Gallery />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
