'use client'

import Image from "next/image";
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

  // Array of image paths
  const imagePaths = [
    "/assets/images/property/lsslider1.jpg",
    "/assets/images/property/lsslider2.jpg",
    "/assets/images/property/lsslider3.jpg",
    "/assets/images/property/lsslider1.jpg",
    "/assets/images/property/lsslider2.jpg",
  ];

  return (
    <>
      <Slider {...settings} arrows={true}>
        {imagePaths.map((imagePath, index) => (
          <div className="item" key={index}>
            <Image
              width={515}
              height={435}
              className="img-fluid w-100 h-100 cover"
              src={imagePath}
              alt={`lsslider${index + 1}.jpg`}
            />
          </div>
        ))}
      </Slider>
    </>
  );
};

export default SliderGallery;
