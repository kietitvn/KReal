import CopyrightFooter from "../common/footer/CopyrightFooter";
import Footer from "../common/footer/Footer";
import Header from "../common/header/DefaultHeader";
import MobileMenu from "../common/header/MobileMenu";
import PopupSignInUp from "../common/PopupSignInUp";
import DetailsContent from "./DetailsContent";
import Sidebar from "./Sidebar";
import SliderGallery from "./SliderGallery";

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
      <section className="listing-title-area mt85 pb0 md-mt0">
        <div className="container pb50">
          <div className="row">
            <div className="col-lg-7 col-xl-8">
              <div className="single_property_title ">
                <h2>Luxury Family Home</h2>
                <p>1421 San Pedro St, Los Angeles, CA 90015</p>
              </div>
            </div>
            <div className="col-lg-5 col-xl-4">
              <div className=" mt20">
                <div className="spss float-start fn-400 mb20">
                  <ul className="mb0">
                    <li className="list-inline-item">
                      <a href="#">
                        <span className="flaticon-transfer-1"></span>
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a href="#">
                        <span className="flaticon-heart"></span>
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a href="#">
                        <span className="flaticon-share"></span>
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a href="#">
                        <span className="flaticon-printer"></span>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="price text-end tal-400">
                  <h2>
                    $13,000<small>/mo</small>
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End .container */}

        <div className="container-fluid p0">
          <div className="row">
            <div className="col-lg-12 p0">
              <div className="listing_single_property_slider arrow-style-2 arrow-white">
                <SliderGallery />
              </div>
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
