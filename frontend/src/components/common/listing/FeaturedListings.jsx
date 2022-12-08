import Link from "next/link";
import featureContent from "../../../data/properties";

const FeaturedListings = () => {
  return (
    <>
      {featureContent.slice(27, 30).map((item) => (
        <div className="media d-flex" key={item.id}>
          <Link href={`/listing-details-v1/${item.id}`}>
            <a>
              <img
                className="align-self-start me-3"
                src={item.img}
                alt="featured listing image"
              />
            </a>
          </Link>

          <div className="media-body">
            <h5 className="mt-0 post_title">
              <Link href={`/listing-details-v1/${item.id}`}>
                <a>{item.title}</a>
              </Link>
            </h5>
            <Link href={`/listing-details-v1/${item.id}`}>
              <a>
                {" "}
                ${item.price}/<small>/mo</small>
              </a>
            </Link>

            <ul className="mb0">
              {item.itemDetails.map((val, i) => (
                <li key={i} className="list-inline-item">
                  {val.name}:{val.number} &nbsp;
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </>
  );
};

export default FeaturedListings;
