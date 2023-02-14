import Link from "next/link";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectProducts } from "../../../features/products/productsSlice";
import { addLength } from "../../../features/properties/propertiesSlice";
import { doctien } from "../../../utils/currency";

const FeaturedItem = () => {
  const productData = useSelector(selectProducts);
  const {
    keyword,
    location,
    status,
    propertyType,
    price,
    bathrooms,
    bedrooms,
    garages,
    yearBuilt,
    area,
    amenities,
  } = useSelector((state) => state.properties);

  const { statusType, featured, isGridOrList } = useSelector(
    (state) => state.filter
  );

  const dispatch = useDispatch();

  // keyword filter
  const keywordHandler = (item) =>
    item?.attributes?.name?.toLowerCase().includes(keyword?.toLowerCase());

  // location handler
  const locationHandler = (item) => {
    if (location === "") return true;
    return item?.attributes?.location?.data?.id == location;
  };

  // status handler
  const statusHandler = (item) => {
    return item?.attributes?.status === status;
  };

  // properties handler
  const categoryHandler = (item) => {
    if (propertyType === "") return true;
    return item?.attributes?.categoryID?.data?.id == propertyType; //?.find((item) => item.id === propertyType);
  };
  // price handler
  const priceHandler = (item) =>
    item?.attributes?.price < price?.max &&
    item?.attributes?.price > price?.min;

  // bathroom handler
  const bathroomHandler = (item) => {
    if (bathrooms !== "") {
      return item?.attributes?.bathRoom == bathrooms;
    }
    return true;
  };

  // bedroom handler
  const bedroomHandler = (item) => {
    if (bedrooms !== "") {
      return item?.attributes?.bedRoom == bedrooms;
    }
    return true;
  };

  // featured handler
  const featuredHandler = (item) => {
    if (amenities.length !== 0) {
      const arrFeatureOfProduct = item?.attributes?.feature_ids?.data?.map(
        (f) => {
          return f.id.toString();
        }
      );

      return amenities.some((r) => arrFeatureOfProduct.includes(r));
    }
    return true;
  };

  // garages handler
  const garagesHandler = (item) =>
    garages !== ""
      ? item.garages?.toLowerCase().includes(garages.toLowerCase())
      : true;

  // built years handler
  const builtYearsHandler = (item) =>
    yearBuilt !== "" ? item?.built == yearBuilt : true;

  // area handler
  const areaHandler = (item) => {
    if (area.min !== 0 && area.max !== 0) {
      if (area.min !== "" && area.max !== "") {
        return (
          parseInt(item.itemDetails[2].number) > area.min &&
          parseInt(item.itemDetails[2].number) < area.max
        );
      }
    }
    return true;
  };

  // advanced option handler
  const advanceHandler = (item) => {
    if (amenities.length !== 0) {
      return amenities.find((item2) =>
        item2.includes(item.feature_ids.data.toLowerCase())
      );
    }
    return true;
  };

  // status filter
  const statusTypeHandler = (a, b) => {
    if (statusType === "recent") {
      return a.created_at + b.created_at;
    } else if (statusType === "old") {
      return a.created_at - b.created_at;
    } else if (statusType === "") {
      return a.created_at + b.created_at;
    }
  };

  // status handler
  let content = productData?.products?.data
    ?.slice(0, 10)
    ?.filter(keywordHandler)
    ?.filter(locationHandler)
    ?.filter(statusHandler)
    ?.filter(categoryHandler)
    ?.filter(priceHandler)
    ?.filter(bathroomHandler)
    ?.filter(bedroomHandler)

    //?.filter(advanceHandler)
    // ?.sort(statusTypeHandler)
    ?.filter(featuredHandler)
    .map((item) => (
      <Link href={`/details/${item?.attributes.slug}`} key={item?.id}>
        <div
          className={`${
            isGridOrList ? "col-12 feature-list" : "col-md-6 col-lg-6"
          } `}
          key={item?.id}
        >
          <div
            className={`feat_property home7 style4 ${
              isGridOrList ? "d-flex align-items-center" : undefined
            }`}
          >
            <div className="thumb">
              <img
                className="img-whp"
                src={item?.attributes?.cover?.data?.attributes?.formats?.thumbnail?.url}
                alt={item?.attributes?.cover?.data?.attributes?.alternativeText}
              />
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
                <a className="fp_price">
                  {doctien(item?.attributes?.price)}
                  <small>
                    {item?.attributes?.status === "Bán" ? "" : "/tháng"}
                  </small>
                </a>
              </div>
            </div>
            <div className="details">
              <div className="tc_content">
                <p className="text-thm">
                  {item?.attributes?.categoryID?.data?.attributes?.name}
                </p>
                <h4>
                  <Link href={`/details/${item?.attributes.slug}`}>
                    <a>{item?.attributes?.name}</a>
                  </Link>
                </h4>
                <p>
                  <span className="flaticon-placeholder"></span>
                  {item?.attributes?.location?.data?.attributes?.name}
                </p>

                <ul className="prop_details mb0">
                  <li className="list-inline-item">
                    Phòng ngủ: {item?.attributes?.bedRoom}
                  </li>
                  <li className="list-inline-item">
                    Phòng tắm: {item?.attributes?.bathRoom}
                  </li>
                </ul>

                <ul className="prop_details mb0">
                  {item?.attributes?.feature_ids?.data?.map((val, i) => (
                    <li className="list-inline-item" key={i}>
                      {val.attributes.name}
                    </li>
                  ))}
                </ul>
              </div>
              {/* End .tc_content */}

              {/* <div className="fp_footer">
              <ul className="fp_meta float-start mb0">
                <li className="list-inline-item">
                  <Link href="/agent-v2">
                    <a>
                      <img src={item.posterAvatar} alt="pposter1.png" />
                    </a>
                  </Link>
                </li>
                <li className="list-inline-item">
                  <Link href="/agent-v2">
                    <a>{item.posterName}</a>
                  </Link>
                </li>
              </ul>
              <div className="fp_pdate float-end">{item.postedYear}</div>
            </div> */}
              {/* End .fp_footer */}
            </div>
          </div>
        </div>
      </Link>
    ));

  // add length of filter items
  useEffect(() => {
    dispatch(addLength(content?.length));
  }, [dispatch, addLength, content]);

  return <>{content}</>;
};

export default FeaturedItem;
