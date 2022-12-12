import Image from "next/image";
import Link from "next/link";
import Slider from "react-slick";
import properties from "../../data/properties";
import { useGetProductsQuery } from "../../features/products/productsApi";
import { doctien } from "../../utils/currency";

const FeaturedProperties = () => {
  const settings = {
    dots: false,
    arrows: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: false,
    speed: 1200,

    responsive: [
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
        },
      },

      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 520,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const { data, isLoading, error } = useGetProductsQuery();
  console.log("useGetProductsQuery", data);
  return (
    data && (
      <>
        <Slider {...settings} arrows={true}>
          {data.data.map((item) => {
            const detail = item.attributes;
            return (
              <div className="item" key={item.id}>
                <div className="properti_city home6">
                  <div className="thumb">
                    <picture>
                      <source
                        srcSet={
                          process.env.baseUrl + detail.cover.data.attributes.url
                        }
                        type="image/webp"
                      />
                      <img
                        className="img-whp"
                        src={
                          process.env.baseUrl + detail.cover.data.attributes.url
                        }
                        alt={detail.cover.data.attributes.alternativeText}
                      />
                    </picture>
                    <div className="thmb_cntnt">
                      <ul className="tag mb0">
                        <li className="list-inline-item">
                          <a href="#">{detail.status}</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  {/* End .thumb */}

                  <div className="overlay">
                    <div className="details">
                      <Link href={`/listing-details-v2/${item.id}`}>
                        <a className="fp_price">
                          {doctien(detail.price)}
                          <small>/tháng</small>
                        </a>
                      </Link>
                      <h4>
                        <Link href={`/listing-details-v2/${item.id}`}>
                          <a>{detail.name}</a>
                        </Link>
                      </h4>
                      <ul className="prop_details mb0">
                        {detail.feature_ids.data.map((val, i) => (
                          <li className="list-inline-item" key={i}>
                            <a href="#">{val.attributes.name}</a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </Slider>
      </>
    )
  );
};

export default FeaturedProperties;
