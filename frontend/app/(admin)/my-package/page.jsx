import dynamic from "next/dynamic";
import MyPackage from "@/components/dashboard/my-package";

export const metadata = {
  title: 'My Package || FindHouse - Real Estate React Template',
  description:
    'FindHouse - Real Estate React Template',
}

const index = () => {
  return (
    <>
      <MyPackage />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
