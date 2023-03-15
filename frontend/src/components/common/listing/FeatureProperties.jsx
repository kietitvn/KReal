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
  const data = dataProduct?.products.data?.filter(
    (item) => item?.attributes?.feature_ids?.data?.length > 0
  );
  return (
    <>
      {data && (
        <Slider {...settings} arrows={false}>
          {data.slice(0, 5).map((item) => {
            const imageUrl = item?.attributes?.imageUrl?.split(";");
            return (
              <div className="item" key={item?.id}>
                <div className="feat_property home7">
                  <div className="thumb">
                    {imageUrl && imageUrl.length > 0 ? (
                      <img className="img-whp" src={imageUrl[0]} />
                    ) : (
                      <img
                        className="img-whp"
                        src={
                          item?.attributes?.cover?.data?.attributes?.formats
                            ?.small?.url
                        }
                        alt={
                          item?.attributes?.cover?.data?.attributes
                            ?.alternativeText
                        }
                      />
                    )}

                    <div className="thmb_cntnt">
                      <ul className="tag mb0">
                        {item?.attributes?.feature_ids?.data?.length > 0 && (
                          <li className="list-inline-item">
                            <a href="#">Tiện ích</a>
                          </li>
                        )}
                        <li className="list-inline-item">
                          <a href="#">{item?.attributes?.status}</a>
                        </li>
                      </ul>

                      <a className="fp_price">
                        {doctien(item?.attributes?.price)}
                        <small>
                          {item?.attributes?.status === "Bán" ? "" : "/tháng"}
                        </small>
                      </a>

                      <h4 className="posr color-white">
                        {item?.attributes?.name}
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </Slider>
      )}
    </>
  );
};

export default FeatureProperties;
