import MobileMenu from "../common/header/MobileMenu";
import Header from "../common/header/DefaultHeader";
import FeaturedProperties from "../home/FeaturedProperties";
import WhyChoose from "../common/WhyChoose";
import FindProperties from "./FindProperties";
import BestProperties from "./BestProperties";
import Blogs from "../common/Blogs";
import Partners from "../common/Partners";
import CallToAction from "../common/CallToAction";
import Footer from "../common/footer/Footer";
import CopyrightFooter from "../common/footer/CopyrightFooter";
import PopupSignInUp from "../common/PopupSignInUp";
import Hero from "./Hero";

const index = () => {
  return (
    <>
      {/* <!-- Main Header Nav --> */}
      <Header />

      {/* <!--  Mobile Menu --> */}
      <MobileMenu />

      {/* <!-- Modal --> */}
      <PopupSignInUp />

      {/* <!-- Map --> */}
      <section className="home-two p0 mt85 md-mt0">
        <div className="home_two_map">
          <div className="gmap_canvas">
            <iframe
              title="map"
              className="gmap_iframe"
              src="https://www.google.com/maps/d/embed?mid=1tJl0-uRax4AKBfbh1eLPLX5WzOk&hl=en&ehbc=2E312F"
            ></iframe>
          </div>
        </div>
      </section>

      {/* <!-- Latest Properties For Sell --> */}
      <Hero />

      {/* <!-- Latest Properties For Rent --> */}
      <section className="latest-property">
        <div className="container ovh">
          <div className="row">
            <div className="col-lg-6 offset-lg-3">
              <div className="main-title text-center mb40">
                <h2>Latest For Rent</h2>
                <p>Handpicked properties by our team.</p>
              </div>
            </div>
            {/* End .col */}

            <div className="col-lg-12">
              <div className="feature_property_slider gutter-x15">
                <FeaturedProperties />
              </div>
            </div>
            {/* End .col */}
          </div>
          {/* End .row */}
        </div>
        {/* End .container .ovh */}
      </section>

      {/* <!-- Why Chose Us --> */}
      <section id="why-chose" className="whychose_us bgc-f7 pb30">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 offset-lg-3">
              <div className="main-title text-center">
                <h2>Why Choose Us</h2>
                <p>We provide full service at every step.</p>
              </div>
            </div>
          </div>
          <div className="row">
            <WhyChoose />
          </div>
        </div>
      </section>

      {/* <!-- Property Cities --> */}
      <section id="property-city" className="property-city pb30">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 offset-lg-3">
              <div className="main-title text-center">
                <h2>Find Properties in These Cities</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </div>
          </div>
          <div className="row">
            <FindProperties />
          </div>
        </div>
      </section>

      {/* <!-- Property Cities --> */}
      <section id="best-property" className="best-property bgc-thm">
        <div className="container ovh">
          <div className="row">
            <div className="col-lg-6 offset-lg-3">
              <div className="main-title text-center">
                <h2 className="color-white">Best Property Value</h2>
                <p className="color-white">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>
            </div>
          </div>
          {/* End .row */}

          <div className="row">
            <div className="col-lg-12">
              <div className="best_property_slider gutter-x15">
                <BestProperties />
              </div>
            </div>
          </div>
          {/* End .row */}
        </div>
        {/* End .container */}
      </section>

      {/* <!-- Our Blog --> */}
      <section className="our-blog bgc-f7 pb30">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 offset-lg-3">
              <div className="main-title text-center">
                <h2>Articles & Tips</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </div>
          </div>
          <div className="row">
            <Blogs />
          </div>
        </div>
      </section>

      {/* <!-- Our Partners --> */}
      <section id="our-partners" className="our-partners">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 offset-lg-3">
              <div className="main-title text-center">
                <h2>Our Partners</h2>
                <p>We only work with the best companies around the globe</p>
              </div>
            </div>
          </div>
          <div className="row">
            <Partners />
          </div>
        </div>
      </section>

      {/* <!-- Start Call to Action --> */}
      <section className="start-partners bgc-thm pt50 pb50">
        <div className="container">
          <CallToAction />
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
