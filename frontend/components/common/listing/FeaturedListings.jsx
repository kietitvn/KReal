import Link from "next/link";
import featureContent from "../../../data/properties";
import Image from "next/image";

const FeaturedListings = () => {
  return (
    <>
      {featureContent.slice(27, 30).map((item) => (
        <div className="media d-flex" key={item.id}>
          <Link href={`/${item?.attributes.slug}`}>
            <Image
              width={102}
              height={80}
              className="align-self-start me-3 w-100 h-100 cover"
              src={item.img}
              alt="featured listing image"
            />
          </Link>

          <div className="media-body">
            <h5 className="mt-0 post_title">
              <Link href={`/${item?.attributes.slug}`}>{item.title}</Link>
            </h5>
            <Link href={`/${item?.attributes.slug}`}>
              ${item.price}/<small>/mo</small>
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
