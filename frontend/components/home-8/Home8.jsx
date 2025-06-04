import MobileMenu from "../common/header/MobileMenu";
import Header from "./Header";
import FeaturedProperties from "./FeaturedProperties";
import FindProperties from "./FindProperties";
import Footer from "../common/footer/Footer";
import CopyrightFooter from "../common/footer/CopyrightFooter";
import ComfortPlace from "./ComfortPlace";
import Partners from "../common/Partners";
import Testimonials from "./Testimonials";
import HeroSlider from "./HeroSlider";
import PopupSignInUp from "../common/PopupSignInUp";
import Image from "next/image";

const Home8 = () => {
  return (
    <>
      {/* <!-- Main Header Nav --> */}
      <Header />

      {/* <!--  Mobile Menu --> */}
      <MobileMenu />

      {/* <!-- Modal --> */}
      <PopupSignInUp />

      {/* <!-- 4th Home Slider --> */}
      <section className="p0">
        <div className="container-fluid p0">
          <div className="home8-slider">
            <div className="bs_carousel ">
              <HeroSlider />
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Property Cities --> */}
      <section id="property-city" className="property-city pb30 bb1">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 offset-lg-3">
              <div className="main-title text-center">
                <h2>Find Properties in These Cities</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </div>
          </div>
          {/* End .row */}

          <div className="row">
            <FindProperties />
          </div>
          {/* End .row */}
        </div>
      </section>

      {/* <!-- Feature Properties --> */}
      <section id="feature-property" className="property-city pb30 bb1">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 offset-lg-3">
              <div className="main-title text-center mb40">
                <h2>Featured Properties</h2>
                <p>Handpicked properties by our team.</p>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="feature_property_slider gutter-x15">
                <FeaturedProperties />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Find Comfort Place --> */}
      <section id="comfort-place" className="comfort-place pb30 bb1">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 offset-lg-3">
              <div className="main-title text-center">
                <h2>Find a Place That Fits Your Comfort</h2>
                <p>
                  Explore the greates places in the city. You won’t be
                  disappointed.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <ComfortPlace />
          </div>
        </div>
      </section>

      {/* <!-- Home Design --> */}
      <section className="home-two p0">
        <div className="container-fluid p0">
          <div className="home_two_map">
            <div className="gmap_canvas pe-none">
              <iframe
                title="map"
                className="gmap_iframe"
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d193309.02147838814!2d-74.53513266718751!3d40.79602810000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1663993365939!5m2!1sen!2sbd"
              ></iframe>
              <Image
                width={32}
                height={50}
                className="location-finder"
                src="/assets/images/location.png"
                alt="location"
              />
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Our Testimonials --> */}
      <section id="our-testimonials" className="our-testimonials">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 offset-lg-3">
              <div className="main-title text-center">
                <h2 className="mt0">What Our Users Say</h2>
                <p>
                  Discover how Listable can you help you find everything you
                  want.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-8 offset-lg-2 col-xl-6 offset-xl-3">
              <div className="testimonialsec slick-custom-as-nav">
                <Testimonials />
              </div>
            </div>
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

      {/* <!-- Our Footer --> */}
      <section className="footer_one home3">
        <div className="container">
          <div className="row">
            <Footer />
          </div>
        </div>
      </section>

      {/* <!-- Our Footer Bottom Area --> */}
      <section className="footer_middle_area home3 pt30 pb30">
        <div className="container">
          <CopyrightFooter />
        </div>
      </section>
    </>
  );
};

export default Home8;
