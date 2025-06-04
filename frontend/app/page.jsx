import Wrapper from "@/components/layout/Wrapper";
import HomeMain from './(homes)/home-6/page';
import { appName } from "@/utils/const";

export const metadata = {
  title: `Mua bán Ký gửi-Nhà đất Căn hộ-Pháp lý Đăng bộ | ${appName}`,
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

export default function Home() {
  return (
    < Wrapper >
      <HomeMain />
    </Wrapper >
  )
}
