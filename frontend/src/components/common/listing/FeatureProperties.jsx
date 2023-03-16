import featureProContent from "../../../data/properties";
import Slider from "react-slick";
import { useSelector } from "react-redux";
import { selectProducts } from "../../../features/products/productsSlice";
import { doctien } from "../../../utils/currency";
import Link from "next/link";

const FeatureProperties = () => {
  const settings = {
    dots: true,
    arrows: false,
    fade: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    speed: 1000,
  };
  const dataProduct = useSelector(selectProducts);
  const data = dataProduct?.productsFeatured?.data?.filter(
    (item) => item?.attributes?.feature_ids?.data?.length > 0
  );
  return (
    <>
      {data && (
        <Slider {...settings} arrows={false}>
          {data.map((item) => {
            const detail = item?.attributes;
            const imageUrl = detail?.imageUrl?.split(";");
            return (
              <Link href={`/details/${item?.attributes.slug}`} key={item?.id}>
                <div className="item">
                  <div className="properti_city home6">
                    <div className="thumb">
                      {imageUrl && imageUrl.length > 0 ? (
                        <picture>
                          <source srcSet={imageUrl[0]} type="image/webp" />
                          <img className="img-whp" src={imageUrl[0]} />
                        </picture>
                      ) : (
                        <picture>
                          <source
                            srcSet={detail?.cover?.data?.attributes?.url}
                            type="image/webp"
                          />
                          <img
                            className="img-whp"
                            src={
                              detail?.cover?.data?.attributes?.formats
                                ?.thumbnail?.url
                            }
                            alt={
                              detail?.cover?.data?.attributes?.alternativeText
                            }
                          />
                        </picture>
                      )}
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
      )}
    </>
  );
};

export default FeatureProperties;
