import Link from "next/link";
import Slider from "react-slick";

const HeroSlider = () => {
  const settings = {
    dots: false,
    arrow: true,
    speed: 1200,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
  };
  const sliderContent = [
    {
      id: 1,
      bgImage: "slidebg-4",
      price: "13000",
      title: "Gorgeous Villa Bay View",
      itemDetails: [
        { name: "Beds", number: "4" },
        { name: "Baths", number: "2" },
        { name: "SqFt", number: "5280" },
      ],
    },
    {
      id: 2,
      bgImage: "slidebg-5",
      price: "12000",
      title: "Luxury Family Home",
      itemDetails: [
        { name: "Beds", number: "4" },
        { name: "Baths", number: "2" },
        { name: "SqFt", number: "5280" },
      ],
    },
    {
      id: 3,
      bgImage: "slidebg-6",
      price: "15000",
      title: "Single Family Villa View",
      itemDetails: [
        { name: "Beds", number: "4" },
        { name: "Baths", number: "2" },
        { name: "SqFt", number: "5280" },
      ],
    },
  ];

  return (
    <Slider {...settings} arrows={true}>
      {sliderContent.map((item) => (
        <div
          className={`slide slide-one d-flex align-items-center ${item.bgImage}`}
          style={{ height: "620px" }}
          key={item.id}
        >
          <div className="container">
            <div className="home-content position-relative text-center p0">
              <h2 className="banner_top_title">
                ${item.price}
                <small>/mo</small>
              </h2>
              <h3 className="banner-title">{item.title}</h3>
              <ul className="prop_details ">
                {item.itemDetails.map((val, i) => (
                  <li className="list-inline-item" key={i}>
                    <a href="#">
                      {val.name}: {val.number}
                    </a>
                  </li>
                ))}
              </ul>
              <div className="active">
                <Link href="/listing-grid-v5">
                  <a className="banner-btn">Book Now</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default HeroSlider;
