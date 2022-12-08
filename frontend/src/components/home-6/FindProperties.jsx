import Link from "next/link";
import findProperties from "../../data/findProperties";

const FindProperties = () => {
  return (
    <>
      {findProperties.slice(14, 20).map((item) => (
        <div className="col-sm-6 col-md-6 col-lg-4 col-xl-4" key={item.id}>
          <Link href="/listing-list-v1">
            <a className="property_city_home6">
              <div className="thumb">
                <img className="img-fluid w100" src={item.img} alt="pc1.jpg" />
              </div>
              <div className="details">
                <h4>{item.name}</h4>
                <p>{item.number} Properties</p>
              </div>
            </a>
          </Link>
        </div>
      ))}
    </>
  );
};

export default FindProperties;
