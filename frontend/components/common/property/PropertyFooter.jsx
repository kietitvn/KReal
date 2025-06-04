import Link from "next/link";
import Image from "next/image";

const PropertyFooter = ({ property, linkToAgent = true }) => {
  return (
    <div className="fp_footer">
      <ul className="fp_meta float-start mb0">
        <li className="list-inline-item">
          {linkToAgent ? (
            <Link href="/agent-v2">
              <Image
                width={40}
                height={40}
                src={property.posterAvatar}
                alt="agent avatar"
              />
            </Link>
          ) : (
            <a href="#">
              <Image
                width={40}
                height={40}
                src={property.posterAvatar}
                alt="agent avatar"
              />
            </a>
          )}
        </li>
        <li className="list-inline-item">
          {linkToAgent ? (
            <Link href="/agent-v2">{property.posterName}</Link>
          ) : (
            <a href="#">{property.posterName}</a>
          )}
        </li>
      </ul>
      <div className="fp_pdate float-end">{property.postedYear}</div>
    </div>
  );
};

export default PropertyFooter;