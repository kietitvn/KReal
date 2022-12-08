import Link from "next/link";
import { useEffect, useState } from "react";
import HeaderMenuContent from "../common/header/HeaderMenuContent";

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
      className={`header-nav menu_style_home_one style2 style3 navbar-scrolltofixed stricky main-menu  ${
        navbar ? "stricky-fixed " : ""
      }`}
    >
      <div className="container-fluid p0">
        {/* <!-- Ace Responsive Menu --> */}

        <div className="d-flex align-items-center flex-wrap home6-nav">
          <Link href="/">
            <a className="navbar_brand float-start dn-smd">
              <img
                className="logo1 img-fluid"
                src="/assets/images/header-logo2.png"
                alt="header-logo.png"
              />
              <img
                className="logo2 img-fluid"
                src="/assets/images/header-logo2.png"
                alt="header-logo2.png"
              />
              <span>FindHouse</span>
            </a>
          </Link>
          {/* site logo brand */}

          <div className="ht_left_widget float-left">
            <ul>
              <li className="list-inline-item dn-1440">
                <div className="ht_search_widget">
                  <div className="header_search_widget">
                    <form className="form-inline mailchimp_form d-flex flex-row align-items-center flex-wrap">
                      <input
                        type="text"
                        className="form-control"
                        id="inlineFormInputName2"
                        placeholder="What are you looking for?"
                      />
                      <button type="submit" className="btn btn-primary">
                        <span className="flaticon-magnifying-glass"></span>
                      </button>
                    </form>
                  </div>
                </div>
              </li>
            </ul>
          </div>

          <nav className="ms-auto">
            <HeaderMenuContent />
          </nav>
          {/* End .navbar */}
        </div>
      </div>
    </header>
    // {/* <!-- /.theme-main-menu --> */}
  );
};

export default Header;
