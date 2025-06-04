import Link from "next/link";

const PropertyDetails = ({ property, detailsPath = "listing-details-v1" }) => {
  return (
    <div className="tc_content">
      <p className="text-thm">{property.type}</p>
      <h4>
        <Link href={`/${detailsPath}/${property.id}`}>
          {property.title}
        </Link>
      </h4>
      <p>
        <span className="flaticon-placeholder"></span>
        {property.location}
      </p>

      <ul className="prop_details mb0">
        {property.itemDetails.map((detail, i) => (
          <li className="list-inline-item" key={i}>
            <a href="#">
              {detail.name}: {detail.number}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PropertyDetails;