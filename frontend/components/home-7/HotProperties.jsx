import properties from "../../data/properties";
import { PropertyGrid } from "../common/property";

const HotProperties = () => {
  const hotProperties = properties.slice(1, 3);
  
  return (
    <PropertyGrid 
      properties={hotProperties} 
      colClasses="col-md-6 col-lg-4"
      variant="home7 style2"
      showFooter={false}
      detailsPath="listing-details-v2"
    />
  );
};

export default HotProperties;
