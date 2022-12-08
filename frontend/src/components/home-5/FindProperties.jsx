import Link from "next/link";
import findProperties from "../../data/findProperties";

const FindProperties = () => {
  return (
    <>
      {findProperties.slice(0, 4).map((item) => (
        <div className={`col-lg-4 ${item.column}`} key={item.id}>
          <Link href="/listing-grid-v5">
            <a className="properti_city home5 d-block">
              <div className="thumb">
                <img className="img-fluid w100" src={item.img} alt="pc1.jpg" />
              </div>
              <div className="overlay">
                <div className="details">
                  <div className="left">
                    <h4>{item.name}</h4>
                  </div>
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
