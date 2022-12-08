import { useState } from "react";
import Slider from "react-slick";
import testimonial from "../../data/testimonial";

export default function SlickAsNav() {
  const [nav1, setNav1] = useState();
  const [nav2, setNav2] = useState();

  var settings = {
    slidesToShow: 5,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "0px",
    autoplay: false,
  };

  const imgItem = ["5", "3", "4", "6", "7", "4"];

  return (
    <>
      <Slider
        {...settings}
        asNavFor={nav1}
        ref={(slider2) => setNav2(slider2)}
        swipeToSlide={true}
        focusOnSelect={true}
        arrows={false}
      >
        {imgItem.map((item, i) => (
          <div className="item" key={i}>
            <img src={`/assets/images/testimonial/${item}.png`} alt="feature" />
          </div>
        ))}
      </Slider>
      {/* Top Image slide */}

      <Slider
        asNavFor={nav2}
        ref={(slider1) => setNav1(slider1)}
        autoplay={true}
        arrows={false}
        className="tes-for"
      >
        {testimonial.slice(6, 12).map((item) => (
          <div className="testimonial_item" key={item.id}>
            <div className="details">
              <h4>{item.name}</h4>
              <span className="small text-thm">{item.designation}</span>
              <p>{item.text}</p>
              <p className="mt25">{item.feedback}</p>
            </div>
          </div>
        ))}
      </Slider>
      {/* Bottom text slide */}
    </>
  );
}
