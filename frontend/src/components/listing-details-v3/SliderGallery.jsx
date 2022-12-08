import Slider from "react-slick";

const SliderGallery = () => {
  const settings = {
    dots: false,
    arrows: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 1500,

    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <>
      <Slider {...settings} arrows={true}>
        <div className="item">
          <img
            className="img-fluid"
            src="/assets/images/property/lsslider1.jpg"
            alt="lsslider1.jpg"
          />
        </div>
        <div className="item">
          <img
            className="img-fluid"
            src="/assets/images/property/lsslider2.jpg"
            alt="lsslider2.jpg"
          />
        </div>
        <div className="item">
          <img
            className="img-fluid"
            src="/assets/images/property/lsslider3.jpg"
            alt="lsslider3.jpg"
          />
        </div>
        <div className="item">
          <img
            className="img-fluid"
            src="/assets/images/property/lsslider1.jpg"
            alt="lsslider1.jpg"
          />
        </div>
        <div className="item">
          <img
            className="img-fluid"
            src="/assets/images/property/lsslider2.jpg"
            alt="lsslider2.jpg"
          />
        </div>
      </Slider>
    </>
  );
};

export default SliderGallery;
