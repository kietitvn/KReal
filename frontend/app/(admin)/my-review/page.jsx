import dynamic from "next/dynamic";
import MyReview from "@/components/dashboard/my-review";

export const metadata = {
  title: 'My Review || FindHouse - Real Estate React Template',
  description:
    'FindHouse - Real Estate React Template',
}

const index = () => {
  return (
    <>
      <MyReview />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
