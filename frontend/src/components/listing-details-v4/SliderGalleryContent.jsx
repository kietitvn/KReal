import Slider from "react-slick";

const SliderGalleryContent = () => {
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
        <div className="slide slide-one image-4"></div>
        <div className="slide slide-one image-2"></div>
        <div className="slide slide-one image-4"></div>
      </Slider>
    </>
  );
};

export default SliderGalleryContent;
