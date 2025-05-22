'use client'

import Link from "next/link";
import Slider from "react-slick";
import Image from "next/image";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useGetProductsQuery } from "../../features/products/productsApi";
import { loadProductsFeatured } from "../../features/products/productsSlice";
import { doctien } from "../../utils/currency";
const qs = require("qs");

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

  const query = qs.stringify(
    {
      filters: {
        feature_ids: {
          id: {
            $gte: 1,
          },
        },
      },
    },
    {
      encodeValuesOnly: true,
    }
  );

  const { data: dataProduct, isSuccess } = useGetProductsQuery({
    filters: query,
  });
  const dispatch = useDispatch();

  useEffect(() => {
    if (isSuccess) {
      dispatch(loadProductsFeatured(dataProduct));
    }
    return () => { };
  }, [dataProduct]);

  const data = dataProduct?.data?.filter(
    (item) => item?.attributes?.feature_ids?.data?.length > 0
  );
  return (
    <>
      <Slider {...settings} arrows={true}>
        {data && data.map((item) => {
          const detail = item?.attributes;
          const imageUrl = detail?.imageUrl?.split(";");
          return (
            <Link href={`/${item?.attributes.slug}?id=${item?.id}`} key={item?.id}>
              <div className="item" key={item.id}>
                <div className="properti_city home6">
                  <div className="thumb">
                    {imageUrl && imageUrl.length > 0 ?
                      <Image
                        width={367}
                        height={370}
                        className="img-whp"
                        src={imageUrl[0]}
                        alt="image.jpg"
                      />
                      : <Image
                        width={367}
                        height={370}
                        className="img-whp"
                        src={
                          detail?.cover?.data?.attributes?.formats
                            ?.small?.url
                        }
                        alt={
                          detail?.cover?.data?.attributes?.alternativeText
                        }
                      />}

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
          )
        })}
      </Slider>
    </>
  );
};

export default FeaturedProperties;
