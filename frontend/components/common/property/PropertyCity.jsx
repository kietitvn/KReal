import Link from "next/link";
import Image from "next/image";

const PropertyCity = ({ city, linkPath = "/listing-grid-v1" }) => {
  return (
    <Link href={linkPath} className="properti_city d-block">
      <div className="thumb">
        <Image
          width={652}
          height={352}
          className="img-fluid w100 h-100 cover"
          src={city.img}
          alt="city image"
        />
      </div>
      <div className="overlay">
        <div className="details">
          <h4>{city.name}</h4>
          <p>{city.number} Properties</p>
        </div>
      </div>
    </Link>
  );
};

export default PropertyCity;