import dynamic from "next/dynamic";
import Service from "@/components/service";

export const metadata = {
  title: 'Service || FindHouse - Real Estate React Template',
  description:
    'FindHouse - Real Estate React Template',
}

const index = () => {
  return (
    <>
      <Service />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
