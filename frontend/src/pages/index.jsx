import dynamic from "next/dynamic";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import HomeMain from "../components/home-6";
import { loadGlobal } from "../features/global/globalSlice";
import { useGetGlobalQuery } from "../features/global/globalApi";
import Seo from "../components/common/seo";

const Index = () => {
  const { data, isSuccess } = useGetGlobalQuery();

  const dispatch = useDispatch();

  useEffect(() => {
    if (isSuccess) {
      dispatch(loadGlobal(data));
    }
    return () => {};
  }, [data]);
  
  return (
    <>
      <Seo
        seo={data?.data?.attributes?.DefaultSeo}
        font={
          "https://fonts.googleapis.com/css?family=Nunito:400,400i,500,600,700&display=swap"
        }
      />
      <HomeMain />
    </>
  );
};

export default dynamic(() => Promise.resolve(Index), { ssr: false });
