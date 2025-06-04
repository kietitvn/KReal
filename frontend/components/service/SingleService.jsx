import Image from "next/image";
import serviceContent from "../../data/service";

const SingleService = () => {
  return (
    <>
      {serviceContent.map((item) => (
        <div className="col-sm-6 col-md-6 col-lg-4" key={item.id}>
          <div className="service_grid">
            <div className="thumb">
              <Image
                width={342}
                height={232}
                className="img-fluid w100 h-100 cover"
                src={item.img}
                alt={item.img}
              />
            </div>
            <div className="details">
              <h4>{item.title}</h4>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default SingleService;
