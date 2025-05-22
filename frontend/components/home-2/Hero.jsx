import GlobalFilter from "../common/GlobalFilter";
import FeaturedProperties from "../home/FeaturedProperties";

const Hero = () => {
  return (
    <section id="feature-property" className="latest-property">
      <div className="container">
        <div className="row featured_row">
          <div className="col-lg-12">
            <GlobalFilter className="mt20" />
          </div>
        </div>
      </div>
      {/* End .container */}

      <div className="container ovh">
        <div className="row">
          <div className="col-lg-6 offset-lg-3">
            <div className="main-title text-center mb40">
              <h2>Latest For Sale</h2>
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
  );
};

export default Hero;
