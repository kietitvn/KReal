import Link from "next/link";
import findProperties from "../../data/findProperties";
import Image from "next/image";

const FindProperties = () => {
  return (
    <>
      {findProperties.slice(9, 14).map((item) => (
        <div className="col-sm-6 col-md-4 col-lg-4 col-xl" key={item.id}>
          <Link href="/listing-grid-v3" className="properti_city d-block">
            <div className="thumb">
              <Image
                width={279}
                height={329}
                className="img-fluid w100 h-100 cover"
                src={item.img}
                alt="pc1.jpg"
              />
            </div>
            <div className="overlay">
              <div className="details">
                <h4>{item.name}</h4>
                <p>{item.number} Properties</p>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </>
  );
};

export default FindProperties;
