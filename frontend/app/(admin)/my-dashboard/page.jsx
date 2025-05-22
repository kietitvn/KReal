import dynamic from "next/dynamic";
import MyDashboard from "@/components/dashboard/my-dashboard";

export const metadata = {
  title: 'Dashboard || FindHouse - Real Estate React Template',
  description:
    'FindHouse - Real Estate React Template',
}


const index = () => {
  return (
    <>
      <MyDashboard />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
