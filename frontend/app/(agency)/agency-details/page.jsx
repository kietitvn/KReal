import dynamic from "next/dynamic";
import AgencyDetails from "@/components/agency-details";

export const metadata = {
  title: 'Agency Details || FindHouse - Real Estate React Template',
  description:
    'FindHouse - Real Estate React Template',
}

const index = () => {
  return (
    <>
      <AgencyDetails />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
