import Link from "next/link";
import findProperties from "../../data/findProperties";
import Image from "next/image";

const FindProperties = () => {
  return (
    <>
      {findProperties.slice(20, 24).map((item) => (
        <div className="col-sm-6 col-lg-4 col-xl" key={item.id}>
          <Link
            href="/listing-grid-v2"
            className="properti_city_home8 text-center d-block"
          >
            <div className="thumb">
              <Image
                width={150}
                height={150}
                className="cover w-100 h-100"
                src={item.img}
                alt="pc1.jpg"
              />
            </div>

            <div className="details">
              <h4>{item.name}</h4>
              <p>{item.number} Properties</p>
            </div>
          </Link>
        </div>
      ))}
    </>
  );
};

export default FindProperties;
