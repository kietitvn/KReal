'use client'

import Slider from "react-slick";
import PropertyCard from "./PropertyCard";

const PropertySlider = ({ 
  properties, 
  settings = {}, 
  variant = "", 
  showFooter = true,
  detailsPath = "listing-details-v1"
}) => {
  const defaultSettings = {
    dots: true,
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: false,
    speed: 1200,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const sliderSettings = { ...defaultSettings, ...settings };

  return (
    <Slider {...sliderSettings}>
      {properties.map((property) => (
        <div className="item" key={property.id}>
          <PropertyCard 
            property={property} 
            variant={variant} 
            showFooter={showFooter}
            detailsPath={detailsPath}
          />
        </div>
      ))}
    </Slider>
  );
};

export default PropertySlider;