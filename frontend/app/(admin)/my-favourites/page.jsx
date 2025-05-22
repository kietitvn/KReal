import dynamic from "next/dynamic";
import MyFavourites from "@/components/dashboard/my-favourites";

export const metadata = {
  title: 'My Favourites || FindHouse - Real Estate React Template',
  description:
    'FindHouse - Real Estate React Template',
}


const index = () => {
  return (
    <>
      <MyFavourites />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
