import dynamic from "next/dynamic";
import AgencyV2 from "@/components/agency-view/agency-v2";

export const metadata = {
  title: 'Simple Listing – AgencyV2 || FindHouse - Real Estate React Template',
  description:
    'FindHouse - Real Estate React Template',
}

const index = () => {
  return (
    <>
      <AgencyV2 />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
