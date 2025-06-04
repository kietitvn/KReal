import GlobalHeroFilter from "../common/GlobalHeroFilter";
import PopupVideo from "../common/PopupVideo";

const Hero = () => {
  return (
    <section className="home-three bg-img3 mt85 md-mt0">
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <div className="home3_home_content">
              <h1>Your Property, Our Priority.</h1>
              <h4>
                From as low as $10 per day with limited time offer discounts
              </h4>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="home3_home_content">
              <PopupVideo />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <GlobalHeroFilter className="home3" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
