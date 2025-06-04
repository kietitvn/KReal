import Link from "next/link";
import Image from "next/image";
import PropertyTags from "./PropertyTags";
import PropertyIcons from "./PropertyIcons";
import PropertyDetails from "./PropertyDetails";
import PropertyFooter from "./PropertyFooter";

const PropertyCard = ({ 
  property, 
  variant = "", 
  showFooter = true,
  detailsPath = "listing-details-v1"
}) => {
  return (
    <div className={`feat_property ${variant}`}>
      <div className="thumb">
        <Image
          width={343}
          height={220}
          className="img-whp w-100 h-100 cover"
          src={property.img}
          alt="property image"
        />
        <div className="thmb_cntnt">
          <PropertyTags tags={property.saleTag} />
          <PropertyIcons />

          <Link
            href={`/${detailsPath}/${property.id}`}
            className="fp_price"
          >
            ${property.price}
            <small>/mo</small>
          </Link>
        </div>
      </div>

      <div className="details">
        <PropertyDetails property={property} detailsPath={detailsPath} />
        
        {showFooter && <PropertyFooter property={property} />}
      </div>
    </div>
  );
};

export default PropertyCard;