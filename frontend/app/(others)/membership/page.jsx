import dynamic from "next/dynamic";
import Membership from "@/components/membership";

export const metadata = {
  title: 'Membership || FindHouse - Real Estate React Template',
  description:
    'FindHouse - Real Estate React Template',
}

const index = () => {
  return (
    <>
      <Membership />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
