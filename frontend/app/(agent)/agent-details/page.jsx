import dynamic from "next/dynamic";
import AgentDetails from "@/components/agent-details";

export const metadata = {
  title: 'Agent Details || FindHouse - Real Estate React Template',
  description:
    'FindHouse - Real Estate React Template',
}

const index = () => {
  return (
    <>
      <AgentDetails />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
