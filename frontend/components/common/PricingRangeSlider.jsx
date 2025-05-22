'use client';
import InputRange from "react-input-range";
import { useDispatch, useSelector } from "react-redux";
import { addPrice } from "../../features/properties/propertiesSlice";
import { priceRange } from "../../utils/const";
import { doctien } from "../../utils/currency";

const RangeSlider = () => {
  const dispath = useDispatch();
  const { status, price } = useSelector((state) => state.properties);

  const priceLimit = status === "Bán" ? priceRange.sell : priceRange.rent;
  return (
    <div className="nft__filter-price tp-range-slider tp-range-slider-dark mb-20">
      <div className="nft__filter-price-inner d-flex align-items-center justify-content-between">
        <span>{doctien(price.min)}</span>
        <span>{doctien(price.max)}</span>
      </div>

      <InputRange
        formatLabel={(value) => ``}
        minValue={priceLimit.min}
        maxValue={priceLimit.max}
        step={priceLimit.step}
        value={price}
        onChange={(value) => dispath(addPrice(value))}
      />

      <div className="slider-styled inside-slider" id="nft-slider"></div>
    </div>
  );
};

export default RangeSlider;
