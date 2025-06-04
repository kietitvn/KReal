import dynamic from "next/dynamic";
import SignUp from "@/components/register";

export const metadata = {
  title: 'SignUp || FindHouse - Real Estate React Template',
  description:
    'FindHouse - Real Estate React Template',
}

const index = () => {
  return (
    <>
      <SignUp />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
