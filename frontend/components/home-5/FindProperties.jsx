import Link from "next/link";
import findProperties from "../../data/findProperties";
import Image from "next/image";

const FindProperties = () => {
  return (
    <>
      {findProperties.slice(0, 4).map((item) => (
        <div className={`col-lg-4 ${item.column}`} key={item.id}>
          <Link href="/listing-grid-v5" className="properti_city home5 d-block">
            <div className="thumb">
              <Image
                width={650}
                height={352}
                className="img-fluid w100 h-100 cover"
                src={item.img}
                alt="pc1.jpg"
              />
            </div>
            <div className="overlay">
              <div className="details">
                <div className="left">
                  <h4>{item.name}</h4>
                </div>
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
