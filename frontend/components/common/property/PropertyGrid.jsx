import PropertyCard from "./PropertyCard";

const PropertyGrid = ({ 
  properties, 
  colClasses = "col-md-6 col-lg-4", 
  variant = "", 
  showFooter = true,
  detailsPath = "listing-details-v1"
}) => {
  return (
    <>
      {properties.map((property) => (
        <div className={colClasses} key={property.id}>
          <div className="item">
            <PropertyCard 
              property={property} 
              variant={variant} 
              showFooter={showFooter}
              detailsPath={detailsPath}
            />
          </div>
        </div>
      ))}
    </>
  );
};

export default PropertyGrid;