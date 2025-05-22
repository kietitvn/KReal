import PropertyCity from "./PropertyCity";

const PropertyCityGrid = ({ cities, linkPath = "/listing-grid-v1" }) => {
  return (
    <>
      {cities.map((city) => (
        <div className={`col-lg-4 ${city.column}`} key={city.id}>
          <PropertyCity city={city} linkPath={linkPath} />
        </div>
      ))}
    </>
  );
};

export default PropertyCityGrid;