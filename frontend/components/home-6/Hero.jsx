import GlobalHeroFilter from "../common/GlobalHeroFilter";

const Hero = () => {
  return (
    <section className="home-six home6-overlay">
      <div className="container">
        <div className="row posr">
          <div className="col-lg-12">
            <div className="home_content home6">
              <div className="home-text home6 text-center">
                <h1 className="fz55">Mua nhà căn hộ, ký gửi nhà to</h1>
                <h1 className="fz55">139 hỗ trợ, pháp lý khỏi lo</h1>
              </div>
              <GlobalHeroFilter className="home6" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
