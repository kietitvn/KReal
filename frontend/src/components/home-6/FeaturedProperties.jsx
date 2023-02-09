import Link from "next/link";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Slider from "react-slick";
import { useGetProductsQuery } from "../../features/products/productsApi";
import { loadProducts } from "../../features/products/productsSlice";
import { pollingInterval } from "../../utils/const";
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

  const { data, isLoading, error } = useGetProductsQuery("Products", {
    pollingInterval: pollingInterval,
  });
  const dispatch = useDispatch();

  useEffect(() => {
    if (!isLoading) {
      dispatch(loadProducts(data));
    }
    return () => {};
  }, [data]);

  return (
    data && (
      <>
        <Slider {...settings} arrows={true}>
          {data.data.map((item) => {
            const detail = item.attributes;
            return (
              <Link href={`/listing-details-v1/${item.id}`} key={item.id}>
                <div className="item">
                  <div className="properti_city home6">
                    <div className="thumb">
                      <picture>
                        <source
                          srcSet={
                            process.env.baseUrl +
                            detail.cover.data.attributes.url
                          }
                          type="image/webp"
                        />
                        <img
                          className="img-whp"
                          src={
                            process.env.baseUrl +
                            detail.cover.data.attributes.url
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
                        <a className="fp_price">
                          {doctien(detail.price)}
                          <small>
                            {detail.status === "Bán" ? "" : "/tháng"}
                          </small>
                        </a>
                        <h4>
                          <a>{detail.name}</a>
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
              </Link>
            );
          })}
        </Slider>
      </>
    )
  );
};

export default FeaturedProperties;
