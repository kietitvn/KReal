import properties from "../../data/properties";
import { PropertyGrid } from "../common/property";

const FeaturedProperties = () => {
  const featuredProperties = properties.slice(21, 27);
  
  return (
    <PropertyGrid 
      properties={featuredProperties} 
      colClasses="col-md-6 col-lg-4"
      detailsPath="listing-details-v1"
    />
  );
};

export default FeaturedProperties;
