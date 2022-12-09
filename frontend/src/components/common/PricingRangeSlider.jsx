import { useEffect } from "react";
import { useState } from "react";
import InputRange from "react-input-range";
import { useDispatch } from "react-redux";
import { addPrice } from "../../features/properties/propertiesSlice";
import { priceRange } from "../../utils/const";
import { doctien } from "../../utils/currency";

const RangeSlider = () => {
  const [price, setPrice] = useState({
    value: { min: priceRange.sell.min, max: priceRange.sell.max },
  });
  const dispath = useDispatch();

  const handleOnChange = (value) => {
    setPrice({ value });
  };

  // price add to state
  useEffect(() => {
    dispath(
      addPrice({
        min: price.value.min,
        max: price.value.max,
      })
    );
  }, [dispath, price, addPrice]);

  return (
    <div className="nft__filter-price tp-range-slider tp-range-slider-dark mb-20">
      <div className="nft__filter-price-inner d-flex align-items-center justify-content-between">
        <span>{doctien(price.value.min)}</span>
        <span>{doctien(price.value.max)}</span>
      </div>

      <InputRange
        formatLabel={(value) => ``}
        minValue={priceRange.sell.min}
        maxValue={priceRange.sell.max}
        step={priceRange.sell.step}
        value={price.value}
        onChange={(value) => handleOnChange(value)}
      />

      <div className="slider-styled inside-slider" id="nft-slider"></div>
    </div>
  );
};

export default RangeSlider;
