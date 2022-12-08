import Link from "next/link";
import Slider from "react-slick";

const HeroSlider = () => {
  const settings = {
    dots: true,
    arrow: false,
    speed: 1200,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
  };

  const sliderContent = [
    {
      id: 1,
      bgImage: "slidebg-1",
      title: "Find Your Dream Home",
      subTitle: "From as low as $10 per day with limited time offer discounts",
      propertyList: [
        {
          id: 1,
          img: "assets/images/property/fp1.jpg",
          price: "1300",
          type: "Apartment",
          title: "Luxurious Apartment",
          location: `1421 San Pedro
          St, Los Angeles, CA 90015`,
          saleTag: ["Featured", "For Sale"],
          itemDetails: [
            { name: "Beds", number: "4" },
            { name: "Baths", number: "2" },
            { name: "SqFt", number: "5280" },
          ],
          posterAvatar: "assets/images/property/pposter1.png",
          posterName: "Ali Tufan",
          postedYear: "1 year ago",
        },
      ],
    },
    {
      id: 2,
      bgImage: "slidebg-1",
      title: "Your Property, Our Priority.",
      subTitle: "From as low as $10 per day with limited time offer discounts",
      propertyList: [
        {
          id: 2,
          img: "assets/images/property/fp2.jpg",
          price: "1300",
          type: "Villa",
          title: "Renovated Apartment",
          location: `1421 San Pedro
          St, Los Angeles, CA 90015`,
          saleTag: ["Featured", "For Rent"],
          itemDetails: [
            { name: "Beds", number: "4" },
            { name: "Baths", number: "2" },
            { name: "SqFt", number: "5280" },
          ],
          posterAvatar: "assets/images/property/pposter1.png",
          posterName: "Ali Tufan",
          postedYear: "1 year ago",
        },
      ],
    },
    {
      id: 3,
      bgImage: "slidebg-1",
      title: "Find Your Dream Home",
      subTitle: "From as low as $10 per day with limited time offer discounts",
      propertyList: [
        {
          id: 3,
          img: "assets/images/property/fp3.jpg",
          price: "1300",
          type: "Single Family Home",
          title: "Luxurious Apartment",
          location: `1421 San Pedro
          St, Los Angeles, CA 90015`,
          saleTag: ["Featured", "For Rent"],
          itemDetails: [
            { name: "Beds", number: "4" },
            { name: "Baths", number: "2" },
            { name: "SqFt", number: "5280" },
          ],
          posterAvatar: "assets/images/property/pposter1.png",
          posterName: "Ali Tufan",
          postedYear: "1 year ago",
        },
      ],
    },
  ];

  return (
    <Slider {...settings} arrows={false}>
      {sliderContent.map((singleItem) => (
        <div
          className={`bs_carousel_bg ${singleItem.bgImage} vh-100`}
          key={singleItem.id}
        >
          <div className="carousel-slide ">
            <div className="bs-caption">
              <div className="container">
                <div className="row align-items-center">
                  <div className="col-md-7 col-lg-8">
                    <div className="main_title">{singleItem.title}</div>
                    <p className="parag">{singleItem.subTitle}</p>
                    <Link href="/listing-grid-v4">
                      <a className="btn-booking mt-4">Book Now</a>
                    </Link>
                  </div>

                  <div className="col-md-5 col-lg-4">
                    {singleItem.propertyList.map((item) => (
                      <div className="item" key={item.id}>
                        <div className="feat_property home8">
                          <div className="details">
                            <div className="tc_content">
                              <ul className="tag ">
                                {item.saleTag.map((val, i) => (
                                  <li className="list-inline-item" key={i}>
                                    <a href="#">{val}</a>
                                  </li>
                                ))}
                              </ul>
                              <p className="text-thm">{item.type}</p>
                              <h4>
                                <Link href={`/listing-details-v2/${item.id}`}>
                                  <a>{item.title}</a>
                                </Link>
                              </h4>
                              <p>
                                <span className="flaticon-placeholder"></span>
                                {item.location}
                              </p>

                              <ul className="prop_details ">
                                {item.itemDetails.map((val, i) => (
                                  <li className="list-inline-item" key={i}>
                                    <a href="#">
                                      {val.name}: {val.number}
                                    </a>
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
                            <div className="fp_footer">
                              <ul className="fp_meta float-start mb0">
                                <li className="list-inline-item">
                                  <Link href="/agent-v2">
                                    <a>
                                      <img
                                        src={item.posterAvatar}
                                        alt="pposter1.png"
                                      />
                                    </a>
                                  </Link>
                                </li>
                                <li className="list-inline-item">
                                  <Link href="/agent-v2">
                                    <a>{item.posterName}</a>
                                  </Link>
                                </li>
                              </ul>
                              <div className="fp_pdate float-end">
                                {item.postedYear}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              {/* End .container */}
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default HeroSlider;
