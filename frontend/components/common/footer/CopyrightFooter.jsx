import { appName } from "@/utils/const";
import Link from "next/link";

const CopyrightFooter = () => {
  const menuItems = [
    { id: 1, name: "Trang chủ", routeLink: "/" },
    // { id: 2, name: "Listing", routeLink: "/" },
    // { id: 3, name: "Property", routeLink: "/" },
    { id: 4, name: "Về chúng tôi", routeLink: "/about-us" },
    { id: 5, name: "Điều khoản & Điều kiện", routeLink: "/terms-conditions" },
    // { id: 6, name: "Liên hệ", routeLink: "/" },
  ];

  return (
    <div className="row">
      <div className="col-lg-6 col-xl-6">
        <div className="footer_menu_widget">
          <ul>
            {menuItems.map((item) => (
              <li className="list-inline-item" key={item.id}>
                <Link href={item.routeLink}>{item.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {/* End .col */}

      <div className="col-lg-6 col-xl-6">
        <div className="copyright-widget text-end">
          <p>
            &copy; {new Date().getFullYear()} by {appName}. Đã đăng ký Bản quyền.
          </p>
        </div>
      </div>
      {/* End .col */}
    </div>
  );
};

export default CopyrightFooter;
