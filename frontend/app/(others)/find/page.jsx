import dynamic from "next/dynamic";
import GridV1 from "../../../components/listing-grid/grid-v1";
import { appName } from "@/utils/const";

export const metadata = {
  title: `Tìm Kiếm | ${appName}`,
  description:
    'Mua bán cho thuê ký gửi dịch vụ đăng bộ nhà đất chung cư căn hộ',
  keywords: 'mua bán,cho thuê,ký gửi,dịch vụ đăng bộ,nhà đất,chung cư,căn hộ',
  openGraph: {
    url: "https://www.batdongsan-hcm.com/",
    images: [
      { url: '@/public/images/header-logo2.png', width: 50, height: 50, type: 'image/png' }
    ]
  }
}
const index = () => {
  return (
    <>
      <GridV1 />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
