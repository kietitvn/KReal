'use client'
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useGetFeaturesQuery } from "../../features/feature/featuresApi";
import { loadFeatures } from "../../features/feature/featuresSlice";
import { addAmenities } from "../../features/properties/propertiesSlice";

const CheckBoxFilter = () => {
  const { data, isLoading } = useGetFeaturesQuery({subscribe: false});
  const dispatch = useDispatch();
  useEffect(() => {
    if (!isLoading) {
      dispatch(loadFeatures(data));
    }
    return () => {};
  }, [data]);

  const { amenities } = useSelector((state) => state.properties);

  // add advanced
  const advancedHandler = (id) => {
    const data = getAdvanced.map((feature) => {
      if (feature.id === id) {
        if (feature.isChecked) {
          feature.isChecked = false;
        } else {
          feature.isChecked = true;
        }
      }
      return feature;
    });

    setAdvanced(data);
  };

  return (
    <>
      <ul className="ab_counting">
        {data &&
          data.data.map((item) => (
            <li className="list-inline-item" key={item.id}>
              <ul className="ui_kit_checkbox selectable-list">
                <li className="center">
                  <div className="form-check custom-checkbox">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id={item.id}
                      value={item.id}
                      checked={amenities.find((id) => id == item.id)}
                      onChange={(e) => dispatch(addAmenities(e.target.value))}
                      // onClick={() => advancedHandler(item.id)}
                    />
                    <label className="form-check-label" htmlFor={item.id}>
                      {item.attributes.name}
                    </label>
                  </div>
                </li>
              </ul>
            </li>
          ))}
      </ul>
    </>
  );
};

export default CheckBoxFilter;
