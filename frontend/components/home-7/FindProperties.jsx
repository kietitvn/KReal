import findProperties from "../../data/findProperties";
import { PropertyCityGrid } from "../common/property";

const FindProperties = () => {
  const cities = findProperties.slice(0, 4);
  
  return (
    <PropertyCityGrid cities={cities} />
  );
};

export default FindProperties;
