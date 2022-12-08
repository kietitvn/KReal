import Link from "next/link";
import findProperties from "../../data/findProperties";

const FindProperties = () => {
  return (
    <>
      {findProperties.slice(9, 14).map((item) => (
        <div className="col-sm-6 col-md-4 col-lg-4 col-xl" key={item.id}>
          <Link href="/listing-grid-v3">
            <a className="properti_city d-block">
              <div className="thumb">
                <img className="img-fluid w100" src={item.img} alt="pc1.jpg" />
              </div>
              <div className="overlay">
                <div className="details">
                  <h4>{item.name}</h4>
                  <p>{item.number} Properties</p>
                </div>
              </div>
            </a>
          </Link>
        </div>
      ))}
    </>
  );
};

export default FindProperties;
