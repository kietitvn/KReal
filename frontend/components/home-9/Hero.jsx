import SearchBox from "./SearchBox";

const Hero = () => {
  return (
    <section className="home-nine">
      <div className="container">
        <div className="row posr">
          <div className="col-lg-8 offset-lg-2">
            <div className="home_content home7">
              <div className="home-text text-center">
                <h2 className="fz55">Discover your place to live</h2>
                <p className="fz18 color-white">Get started in few clicks.</p>
              </div>
              {/* End .home-text */}

              <div className="home_adv_srch_opt home9">
                <SearchBox />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
