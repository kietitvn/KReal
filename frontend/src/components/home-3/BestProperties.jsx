import Link from "next/link";
import properties from "../../data/properties";

const BestProperties = () => {
  return (
    <>
      {properties.slice(12, 15).map((item) => (
        <div className="col-sm-6 col-lg-4" key={item.id}>
          <div className="item">
            <div className="feat_property home3">
              <div className="thumb">
                <img className="img-whp" src={item.img} alt="fp1.jpg" />
                <div className="thmb_cntnt">
                  <ul className="tag mb0">
                    {item.saleTag.map((val, i) => (
                      <li className="list-inline-item" key={i}>
                        <a href="#">{val}</a>
                      </li>
                    ))}
                  </ul>
                  <ul className="icon mb0">
                    <li className="list-inline-item">
                      <a href="#">
                        <span className="flaticon-transfer-1"></span>
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a href="#">
                        <span className="flaticon-heart"></span>
                      </a>
                    </li>
                  </ul>

                  <Link href={`/listing-details-v1/${item.id}`}>
                    <a className="fp_price">
                      ${item.price}
                      <small>/mo</small>
                    </a>
                  </Link>
                </div>
              </div>

              <div className="details">
                <div className="tc_content">
                  <p className="text-thm">{item.type}</p>
                  <h4>
                    <Link href={`/listing-details-v1/${item.id}`}>
                      <a>{item.title}</a>
                    </Link>
                  </h4>
                  <p>
                    <span className="flaticon-placeholder"></span>
                    {item.location}
                  </p>

                  <ul className="prop_details mb0">
                    {item.itemDetails.map((val, i) => (
                      <li className="list-inline-item" key={i}>
                        <a href="#">
                          {val.name}: {val.number}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default BestProperties;
