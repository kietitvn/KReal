import CopyrightFooter from "../common/footer/CopyrightFooter";
import Footer from "../common/footer/Footer";
import Header from "../common/header/DefaultHeader";
import MobileMenu from "../common/header/MobileMenu";
import PopupSignInUp from "../common/PopupSignInUp";
import DetailsContent from "./DetailsContent";
import Sidebar from "./Sidebar";
import SliderGalleryContent from "./SliderGalleryContent";
import StickyHeading from "./StickyHeading";

const index = () => {
  return (
    <>
      {/* <!-- Main Header Nav --> */}
      <Header />

      {/* <!--  Mobile Menu --> */}
      <MobileMenu />

      {/* <!-- Modal --> */}
      <PopupSignInUp />

      {/* <!-- Listing Single Property --> */}
      <div className="home10-mainslider mt85 md-mt0">
        <div className="container-fluid p0">
          <div className="row">
            <div className="col-lg-12">
              <div className="main-banner-wrapper listing-single-4 home10 banner-style-one arrow-style-2">
                <SliderGalleryContent />
              </div>
            </div>
          </div>
        </div>
        {/* End .container-fluid */}

        <div className="position-relative">
          <div className="container">
            <div className="row listing_single_row style2">
              <div className="col-md-7 col-lg-7 col-xl-8">
                <div className="single_property_title multicolor_style mt30-767">
                  <h2>Luxury Family Home</h2>
                  <p>1421 San Pedro St, Los Angeles, CA 90015</p>
                </div>
              </div>
              <div className="col-md-5 col-lg-5 col-xl-4">
                <div className="multicolor_style text-end tal-767">
                  <div className="price">
                    <h2 className="text-white">
                      $13,000<small className="text-white">/mo</small>
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End .container-fluid */}
      </div>

      <section className="sticky_heading h60 p0">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <StickyHeading />
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Agent Single Grid View --> */}
      <section className="our-agent-single bgc-f7 pb30-991">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-lg-8">
              <DetailsContent />
            </div>
            {/* End details content .col-lg-8 */}

            <div className="col-lg-4 col-xl-4">
              <Sidebar />
            </div>
            {/* End sidebar content .col-lg-4 */}
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
