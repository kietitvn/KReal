import Link from "next/link";

const CopyrightFooter = () => {
  // const menuItems = [
  //   { id: 1, name: "Home", routeLink: "/" },
  //   { id: 2, name: "Listing", routeLink: "/listing-grid-v3" },
  //   { id: 3, name: "Property", routeLink: "/listing-grid-v4" },
  //   { id: 4, name: "About Us", routeLink: "/about-us" },
  //   { id: 5, name: "Blog", routeLink: "/blog-list-3" },
  //   { id: 6, name: "Contact", routeLink: "/contact" },
  // ];
  const menuItems = [
    { id: 1, name: "Trang chủ", routeLink: "/" },
    // { id: 2, name: "Listing", routeLink: "/" },
    // { id: 3, name: "Property", routeLink: "/" },
    { id: 4, name: "Về chúng tôi", routeLink: "/" },
    { id: 5, name: "Bài viết", routeLink: "/" },
    { id: 6, name: "Liên hệ", routeLink: "/" },
  ];

  return (
    <div className="row">
      <div className="col-lg-6 col-xl-6">
        <div className="footer_menu_widget">
          <ul>
            {menuItems.map((item) => (
              <li className="list-inline-item" key={item.id}>
                <Link href={item.routeLink}>
                  <a>{item.name}</a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {/* End .col */}

      <div className="col-lg-6 col-xl-6">
        <div className="copyright-widget text-end">
          <p>
            &copy; {new Date().getFullYear()} by KReal. Đã đăng ký Bản quyền.
          </p>
        </div>
      </div>
      {/* End .col */}
    </div>
  );
};

export default CopyrightFooter;
