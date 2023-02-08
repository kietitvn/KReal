import Link from "next/link";
import { useEffect, useState } from "react";
import HeaderMenuContent from "./HeaderMenuContent";

const Header = () => {
  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 95) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeBackground);
  }, []);

  return (
    <header
      className={`header-nav menu_style_home_one style2 navbar-scrolltofixed stricky main-menu  ${
        navbar ? "stricky-fixed " : ""
      }`}
    >
      <div className="d-flex align-items-center flex-wrap home6-nav">
        {/* <!-- Menu Toggle btn--> */}
        <Link href="/">
          <a className="navbar_brand float-start dn-smd">
            <img
              className="logo1 img-fluid"
              src="/assets/images/header-logo2.png"
              alt="header-logo2.png"
            />
            <img
              className="logo2 img-fluid"
              src="/assets/images/header-logo2.png"
              alt="header-logo2.png"
            />
            <span>KReal</span>
          </a>
        </Link>
        {/* site logo brand */}

        <nav className="ms-auto">
          <HeaderMenuContent />
        </nav>
        {/* End .navbar */}
      </div>
    </header>
    // {/* <!-- /.theme-main-menu --> */}
  );
};

export default Header;
