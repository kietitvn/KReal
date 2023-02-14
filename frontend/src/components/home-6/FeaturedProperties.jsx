import Link from "next/link";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Slider from "react-slick";
import { useGetProductsQuery } from "../../features/products/productsApi";
import { loadProducts } from "../../features/products/productsSlice";
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

  const { data: dataProduct, isSuccess } = useGetProductsQuery();
  const dispatch = useDispatch();

  useEffect(() => {
    if (isSuccess) {
      dispatch(loadProducts(dataProduct));
    }
    return () => {};
  }, [dataProduct]);

  const data = dataProduct?.data?.filter(
    (item) => item?.attributes?.feature_ids?.data?.length > 0
  );

  return (
    data && (
      <>
        <Slider {...settings} arrows={true}>
          {data.map((item) => {
            const detail = item?.attributes;
            return (
              <Link
                href={`/details/${item?.attributes.slug}`}
                key={item?.id}
              >
                <div className="item">
                  <div className="properti_city home6">
                    <div className="thumb">
                      <picture>
                        <source
                          srcSet={detail?.cover?.data?.attributes?.url}
                          type="image/webp"
                        />
                        <img
                          className="img-whp"
                          src={detail?.cover?.data?.attributes?.formats?.thumbnail?.url}
                          alt={detail?.cover?.data?.attributes?.alternativeText}
                        />
                      </picture>
                      <div className="thmb_cntnt">
                        <ul className="tag mb0">
                          {detail?.feature_ids?.data?.length > 0 && (
                            <li className="list-inline-item">
                              <a href="#">Tiện ích</a>
                            </li>
                          )}
                          <li className="list-inline-item">
                            <a href="#">{detail?.status}</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    {/* End .thumb */}

                    <div className="overlay">
                      <div className="details">
                        <a className="fp_price">
                          {doctien(detail?.price)}
                          <small>
                            {detail?.status === "Bán" ? "" : "/tháng"}
                          </small>
                        </a>
                        <h4>
                          <a>{detail?.name}</a>
                        </h4>
                        <ul className="prop_details mb0">
                          {detail?.feature_ids?.data?.map((val, i) => (
                            <li className="list-inline-item" key={i}>
                              <a href="#">{val?.attributes?.name}</a>
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
