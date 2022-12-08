import Link from "next/link";
import findProperties from "../../data/findProperties";

const FindProperties = () => {
  return (
    <>
      {findProperties.slice(14, 20).map((item) => (
        <div className="col-sm-6 col-lg-4 col-xl-4" key={item.id}>
          <Link href="/listing-grid-v4">
            <a className="properti_city style2 d-block">
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
