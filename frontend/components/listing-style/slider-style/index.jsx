import Pagination from "../../common/blog/Pagination";
import CopyrightFooter from "../../common/footer/CopyrightFooter";
import Footer from "../../common/footer/Footer";
import GlobalHeroFilter from "../../common/GlobalHeroFilter";
import Header from "../../common/header/DefaultHeader";
import MobileMenu from "../../common/header/MobileMenu";
import FilterTopBar from "../../common/listing/FilterTopBar";
import GridListButton from "../../common/listing/GridListButton";
import ShowFilter from "../../common/listing/ShowFilter";
import SidebarListing3 from "../../common/listing/SidebarListing3";
import PopupSignInUp from "../../common/PopupSignInUp";
import BreadCrumb from "./BreadCrumb2";
import FeaturedItem from "./FeaturedItem";
import HeroSlider from "./HeroSlider";

const index = () => {
  return (
    <>
      {/* <!-- Main Header Nav --> */}
      <Header />

      {/* <!--  Mobile Menu --> */}
      <MobileMenu />

      {/* <!-- Modal --> */}
      <PopupSignInUp />

      {/* <!-- 6th Home Design --> */}
      <section className="home-listing-slider hight-fx p0">
        <div className="container-fluid p0">
          <div className="row">
            <div className="col-lg-12">
              <div className="main-banner-wrapper">
                <div className="banner-style-one arrow-style-2">
                  <HeroSlider />
                </div>
              </div>
              {/* <!-- /.main-banner-wrapper --> */}
            </div>
          </div>
        </div>
        {/* End .container-fluid */}

        <div className="container home_iconbox_container listing-slider-style">
          <div className="row posr">
            <div className="col-lg-12">
              <div className="home_content listing slider_style">
                <div className="home-text home6 text-center">
                  <h2 className="fz50 color-white">
                    Welcome, Make Yourself at Home
                  </h2>
                  <p className="fz18 color-white">
                    Parallax banner with background image.
                  </p>
                </div>
                {/* End home-text */}
                <GlobalHeroFilter className="mt40" />
              </div>
            </div>
          </div>
        </div>
        {/* End container */}
      </section>

      {/* <!-- Listing Grid View --> */}
      <section className="our-listing bgc-f7 pb30-991 mt85 md-mt0 ">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <BreadCrumb />
            </div>
            {/* End .col */}

            <div className="col-lg-6 position-relative">
              <div className="listing_list_style mb20-xsd tal-991">
                <GridListButton />
              </div>
              {/* End list grid */}

              <div className="dn db-991 mt30 mb0">
                <ShowFilter />
              </div>
              {/* ENd button for mobile sidebar show  */}
            </div>
            {/* End .col filter grid list */}
          </div>
          {/* End Page Breadcrumb and Grid,List and filter Button */}

          <div className="row">
            <div className="col-md-12 col-lg-8">
              <div className="grid_list_search_result ">
                <div className="row align-items-center">
                  <FilterTopBar />
                </div>
              </div>
              {/* End .row */}

              <div className="row">
                <FeaturedItem />
              </div>
              {/* End .row */}

              <div className="row">
                <div className="col-lg-12 mt20">
                  <div className="mbp_pagination">
                    <Pagination />
                  </div>
                </div>
                {/* End paginaion .col */}
              </div>
              {/* End .row */}
            </div>
            {/* End  .col */}

            <div className="col-lg-4 col-xl-4">
              <div className="sidebar-listing-wrapper">
                <SidebarListing3 />
              </div>
              {/* End SidebarListing */}

              <div
                className="offcanvas offcanvas-start offcanvas-listing-sidebar"
                tabIndex="-1"
                id="sidebarListing"
              >
                <div className="offcanvas-header">
                  <h5 className="offcanvas-title">Advanced Search</h5>
                  <button
                    type="button"
                    className="btn-close text-reset"
                    data-bs-dismiss="offcanvas"
                    aria-label="Close"
                  ></button>
                </div>
                {/* End .offcanvas-heade */}

                <div className="offcanvas-body">
                  <SidebarListing3 />
                </div>
              </div>
              {/* End mobile sidebar listing  */}
            </div>
            {/* End sidebar conent */}
          </div>
          {/* End .row */}
        </div>
      </section>

      {/* <!-- Our Footer --> */}
      <section className="footer_one">
        <div className="container">
          <div className="row">
            <Footer />
          </div>
        </div>
      </section>

      {/* <!-- Our Footer Bottom Area --> */}
      <section className="footer_middle_area pt40 pb40">
        <div className="container">
          <CopyrightFooter />
        </div>
      </section>
    </>
  );
};

export default index;
