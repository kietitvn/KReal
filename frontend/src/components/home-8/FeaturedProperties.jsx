import Link from "next/link";
import Slider from "react-slick";
import properties from "../../data/properties";

const FeaturedProperties = () => {
  const settings = {
    dots: true,
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: false,
    speed: 1200,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 4,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 3,
        },
      },
    ],
  };

  return (
    <>
      <Slider {...settings} arrows={false}>
        {properties.slice(0, 12).map((item) => (
          <div className="item" key={item.id}>
            <div className="feat_property">
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
                <div className="fp_footer">
                  <ul className="fp_meta float-start mb0">
                    <li className="list-inline-item">
                      <a href="#">
                        <img src={item.posterAvatar} alt="pposter1.png" />
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a href="#">{item.posterName}</a>
                    </li>
                  </ul>
                  <div className="fp_pdate float-end">{item.postedYear}</div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </>
  );
};

export default FeaturedProperties;
