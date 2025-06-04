import Image from "next/image";
import GlobalFilter from "../common/GlobalFilter";
import LookingItem from "./LookingItem";

const Hero = () => {
  return (
    <section className="home-one home5-overlay home5_bgi5 parallax">
      <div className="container">
        <div className="row posr">
          <div className="col-lg-7">
            <div className="home_content home5">
              <div className="home-text home5">
                <h2 className="fz55">Find Your Dream Home</h2>
                <p className="discounts_para fz18 color-white">
                  From as low as $10 per day with limited time offer discounts.
                </p>
                <h4>What are you looking for?</h4>
                <ul className="mb0">
                  <LookingItem />
                </ul>
              </div>
            </div>
          </div>
          {/* End .col */}

          <div className="col-lg-5">
            <div className="home_content home5 style2">
              <GlobalFilter className=" home5_advanced_search_form d-block " />
            </div>
          </div>
          {/* End .col */}
        </div>
      </div>
      {/* End .container */}

      <div className="mouse_scroll">
        <a href="#property-city">
          <div className="icon">
            <h4>Scroll Down</h4>
            <p>to discover more</p>
          </div>
          <div className="thumb">
            <Image
              width={21}
              height={35}
              src="/assets/images/resource/mouse.png"
              alt="mouse.png"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
