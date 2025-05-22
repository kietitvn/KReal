import dynamic from "next/dynamic";
import Login from "@/components/login";

export const metadata = {
  title: 'Login || FindHouse - Real Estate React Template',
  description:
    'FindHouse - Real Estate React Template',
}

const index = () => {
  return (
    <>
      <Login />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
