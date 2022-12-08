import Slider from "react-slick";

const HeroSlider = () => {
  const settings = {
    dots: false,
    arrows: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 2000,
  };

  return (
    <>
      <Slider {...settings} arrows={true}>
        <div className="slide slide-one image-5"></div>
        <div className="slide slide-one image-4"></div>
        <div className="slide slide-one image-1"></div>
      </Slider>
    </>
  );
};

export default HeroSlider;
