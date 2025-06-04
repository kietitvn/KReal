'use client';
import { useSelector } from "react-redux";
import { priceRange } from "../../../utils/const";
import { doctien } from "../../../utils/currency";

const BreadCrumb2 = () => {
  const {
    status,
    keyword,
    location,
    propertyType,
    price,
    bathrooms,
    bedrooms,
    amenities,
  } = useSelector((state) => state.properties);
  let filtering = "";// `[${status}]`;
  if (keyword != "") {
    filtering += " [Keyword: " + keyword + "]";
  }
  // if (propertyType != "") {
  //   filtering += propertyType;
  // }
  // if (location != "") {
  //   filtering += location;
  // }
  if (bathrooms != "") {
    filtering += " [P.tắm: " + bathrooms + "]";
  }
  if (bedrooms != "") {
    filtering += " [P.ngủ: " + bedrooms + "]";
  }
  // if (amenities.length > 0) {
  //   filtering += " Tiện ích: " + amenities.toString();
  // }
  if (status === "Bán" && (price?.min != priceRange.sell.min || price?.max != priceRange.sell.max)) {
    filtering +=
      " [Tài chính: " + doctien(price?.min) + "-" + doctien(price?.max) + "]";
  }
  else if (status === "Thuê" && (price?.min != priceRange.rent.min || price?.max != priceRange.rent.max)) {
    filtering +=
      " [Tài chính: " + doctien(price?.min) + "-" + doctien(price?.max) + "]";
  }

  return <>
    <h4 className="breadcrumb_title">Hãy cho chúng tôi biết bạn đang tìm gì – chúng tôi lắng nghe!</h4>
    <h4 className="breadcrumb_filter">{filtering}</h4>
  </>

};

export default BreadCrumb2;
