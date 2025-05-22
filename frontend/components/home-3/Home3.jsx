import MobileMenu from "../common/header/MobileMenu";
import Header from "./Header";
import GlobalHeroFilter from "../common/GlobalHeroFilter";
import PopupVideo from "../common/PopupVideo";
import FeaturedProperties from "./FeaturedProperties";
import FindProperties from "./FindProperties";
import BestProperties from "./BestProperties";
import AgentsTeam from "./AgentsTeam";
import Footer from "../common/footer/Footer";
import CopyrightFooter from "../common/footer/CopyrightFooter";
import PopupSignInUp from "../common/PopupSignInUp";
import Hero from "./Hero";

const Home3 = () => {
  return (
    <>
      {/* <!-- Main Header Nav --> */}
      <Header />

      {/* <!--  Mobile Menu --> */}
      <MobileMenu />

      {/* <!-- Modal --> */}
      <PopupSignInUp />

      {/* <!-- Home Design --> */}
      <Hero />

      {/* <!-- Feature Properties --> */}
      <section id="feature-property" className="feature-property mt80 pb50">
        <div className="row">
          <div className="col-lg-12">
            <div className="main-title mb40">
              <h2>Featured Properties</h2>
              <p>
                Handpicked properties by our team.{" "}
                <a className="float-end" href="#">
                  View All <span className="flaticon-next"></span>
                </a>
              </p>
            </div>
          </div>
          <div className="col-lg-12">
            <div className="feature_property_home3_slider gutter-x15">
              <FeaturedProperties />
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Property Cities --> */}
      <section id="property-city" className="property-city pt0 pb30">
        <div className="row">
          <div className="col-lg-12">
            <div className="main-title">
              <h2>Find Properties in These Cities</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
                <a className="float-end" href="#">
                  View All <span className="flaticon-next"></span>
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <FindProperties />
        </div>
      </section>

      {/* <!-- Property Search --> */}
      <section id="property-search" className="property-search bg-img4">
        <div className="row">
          <div className="col-lg-6 offset-lg-3">
            <div className="search_smart_property text-center">
              <h2>Find Smarter, From Anywhere</h2>
              <p>
                Power your search with our Resideo real estate platform, for
                timely listings and a seamless experience.
              </p>
              <button className="btn ssp_btn">Find Now</button>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Property Cities --> */}
      <section id="best-property" className="best-property pt100 pb0">
        <div className="row">
          <div className="col-lg-12">
            <div className="main-title">
              <h2>Best Property Value</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
                <a className="float-end" href="#">
                  View All <span className="flaticon-next"></span>
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <BestProperties />
        </div>
      </section>

      {/* <!-- Our Agents --> */}
      <section id="our-agents" className="our-agents pt40 pb30">
        <div className="row">
          <div className="col-lg-12">
            <div className="main-title">
              <h2>Our Agents</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
                <a className="float-end" href="#">
                  View All <span className="flaticon-next"></span>
                </a>
              </p>
            </div>
          </div>
        </div>
        {/* End .row */}

        <div className="row">
          <AgentsTeam />
        </div>
        {/* End .row */}
      </section>

      {/* <!-- Our Footer --> */}
      <section className="footer_one home3">
        <div className="container-fluid">
          <div className="row">
            <Footer />
          </div>
        </div>
      </section>

      {/* <!-- Our Footer Bottom Area --> */}
      <section className="footer_middle_area home3 pt30 pb30">
        <div className="container-fluid">
          <CopyrightFooter />
        </div>
      </section>
    </>
  );
};

export default Home3;
