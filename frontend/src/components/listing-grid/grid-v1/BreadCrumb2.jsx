import { useSelector } from "react-redux";
import { priceRange } from "../../../utils/const";
import { doctien } from "../../../utils/currency";

const BreadCrumb2 = () => {
  const {
    keyword,
    location,
    status,
    propertyType,
    price,
    bathrooms,
    bedrooms,
    amenities,
  } = useSelector((state) => state.properties);
  let filtering = "";
  if (keyword != "") {
    filtering += "[Keyword: " + keyword + "]";
  }
  // if (propertyType != "") {
  //   filtering += propertyType;
  // }
  // if (location != "") {
  //   filtering += location;
  // }
  if (bathrooms != "") {
    filtering += "[P.tắm: " + bathrooms + "]";
  }
  if (bedrooms != "") {
    filtering += "[P.ngủ: " + bedrooms + "]";
  }
  // if (amenities.length > 0) {
  //   filtering += " Tiện ích: " + amenities.toString();
  // }
  if (price?.min != priceRange.sell.min || price?.max != priceRange.sell.max) {
    filtering +=
      "[Tài chính: " + doctien(price?.min) + "-" + doctien(price?.max) + "]";
  }
  return filtering != "" ? (
    <h4 className="breadcrumb_title">{filtering}</h4>
  ) : (
    <h4 className="breadcrumb_title">Chúng tôi đang lắng nghe bạn!</h4>
  );
};

export default BreadCrumb2;
