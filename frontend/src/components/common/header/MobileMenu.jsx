import Link from "next/link";
import Social from "../footer/Social";
import { useEffect, useState } from "react";
import SocialMobile from "../footer/SocialMobile";
import MobileMenuContent from "./MobileMenuContent";

const MobileMenu = () => {
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
      <div className="d-flex align-items-center flex-wrap home6-nav mobile-header">
        <Link href="/">
          <div className="main_logo_home2 float-start">
            <img
              className="logo1 img-fluid"
              src="/assets/images/header-logo2.png"
              alt="header-logo.png"
            />
            <span>KReal</span>
          </div>
        </Link>
        <Social />
      </div>
    </header>
  );
  // return (
  //   // <!-- Main Header Nav For Mobile -->
  //   <div className="stylehome1 h0 mega-menu-wrapper">
  //     <div className="mobile-menu">
  //       {/* <div className="header stylehome1"> */}
  //       <div className="d-flex align-items-center flex-wrap home6-nav">
  //         <Link href="/">
  //           <div className="main_logo_home2 float-start">
  //             <img
  //               className="nav_logo_img img-fluid mt20"
  //               src="/assets/images/header-logo2.png"
  //               alt="header-logo2.png"
  //             />
  //             <span>KReal</span>
  //           </div>
  //         </Link>

  //         <Social />

  //         {/* <SocialMobile /> */}

  //         {/* main_logo_home2 */}

  //         {/* <ul className="menu_bar_home2">
  //           <li className="list-inline-item list_s">
  //             <Link href="/login">
  //               <a>
  //                 <span className="flaticon-user"></span>
  //               </a>
  //             </Link>
  //           </li>
  //           <li
  //             className="list-inline-item"
  //             data-bs-toggle="offcanvas"
  //             data-bs-target="#offcanvasMenu"
  //             aria-controls="offcanvasMenu"
  //           >
  //             <a>
  //               <span></span>
  //             </a>
  //           </li>
  //         </ul> */}
  //         {/* menu_bar_home2 */}
  //       </div>
  //     </div>
  //     {/* <!-- /.mobile-menu --> */}

  //     <div
  //       className="offcanvas offcanvas-start"
  //       tabIndex="-1"
  //       id="offcanvasMenu"
  //       aria-labelledby="offcanvasMenuLabel"
  //       data-bs-scroll="true"
  //     >
  //       <MobileMenuContent />
  //     </div>
  //   </div>
  // );
};

export default MobileMenu;
