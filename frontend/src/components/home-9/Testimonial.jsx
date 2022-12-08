import testimonials from "../../data/testimonial";
import Slider from "react-slick";

const Testimonial = () => {
  const settings = {
    dots: true,
    arrow: false,
    speed: 1200,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: false,
  };

  return (
    <>
      <Slider {...settings} arrows={false}>
        {testimonials.slice(0, 4).map((item) => (
          <div className="item" key={item.id}>
            <div className="testimonial_post">
              <div className="details">
                <div className="icon text-thm">
                  <span className="fa fa-quote-left"></span>
                </div>
                <p>{item.text}</p>
              </div>

              <div className="thumb">
                <img src={item.img} alt="1.jpg" />
                <h4 className="title">
                  {item.name} <br />
                  <small className="text-thm">{item.designation}</small>
                </h4>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </>
  );
};

export default Testimonial;
