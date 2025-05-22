


import NotFound from "@/components/404";
import dynamic from "next/dynamic";

export const metadata = {
  title: `404 Not Found | ${appName}`,
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
      <NotFound />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
