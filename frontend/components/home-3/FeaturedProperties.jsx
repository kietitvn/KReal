'use client'

import properties from "../../data/properties";
import { PropertySlider } from "../common/property";

const FeaturedProperties = () => {
  const featuredProperties = properties.slice(0, 12);
  
  const settings = {
    dots: false,
    arrows: true,
    slidesToShow: 4,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 520,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <PropertySlider 
      properties={featuredProperties} 
      settings={settings}
      variant="home3"
      showFooter={false}
      detailsPath="listing-details-v1"
    />
  );
};

export default FeaturedProperties;
