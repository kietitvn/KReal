import { useDispatch, useSelector } from "react-redux";
import { selectCategories } from "../../../features/categories/categoriesSlice";
import { selectFeatures } from "../../../features/feature/featuresSlice";
import { selectLocations } from "../../../features/location/locationsSlice";
import {
  addAmenities,
  addBathrooms,
  addBedrooms,
  addKeyword,
  addLocation,
  addPrice,
  addPropertyType,
  addStatus,
  resetAmenities,
} from "../../../features/properties/propertiesSlice";
import { bathRoom, bedRoom, priceRange } from "../../../utils/const";
import PricingRangeSlider from "../../common/PricingRangeSlider";

const FilteringItem = () => {
  const {
    keyword,
    location,
    status,
    propertyType,
    bathrooms,
    bedrooms,
    amenities,
  } = useSelector((state) => state.properties);

  const categoriesData = useSelector(selectCategories);
  const locationData = useSelector(selectLocations);
  const featureData = useSelector(selectFeatures);

  const dispatch = useDispatch();
  // clear filter
  const clearAllFilters = () => {
    dispatch(addStatus("Bán"));
    dispatch(addKeyword(""));
    dispatch(addLocation(""));
    dispatch(addPropertyType(""));
    dispatch(addBathrooms(""));
    dispatch(addBedrooms(""));
    dispatch(resetAmenities());
    dispatch(addPrice(priceRange.sell));
  };

  return (
    <ul className="sasw_list mb0">
      <li>
        <div className="search_option_two">
          <div className="candidate_revew_select">
            <select
              onChange={(e) => {
                dispatch(addStatus(e.target.value));
                if (e.target.value === "Bán") {
                  dispatch(addPrice(priceRange.sell));
                } else {
                  dispatch(addPrice(priceRange.rent));
                }
              }}
              className="selectpicker w100 show-tick form-select"
              value={status}
            >
              <option value="Bán">Bán</option>
              <option value="Thuê">Thuê</option>
            </select>
          </div>
        </div>
      </li>

      <li className="search_area">
        <div className="form-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Từ khóa"
            value={keyword}
            onChange={(e) => dispatch(addKeyword(e.target.value))}
          />
          <label>
            <span className="flaticon-magnifying-glass"></span>
          </label>
        </div>
      </li>
      {/* End li */}

      <li className="search_area">
        <div className="search_option_two">
          <div className="candidate_revew_select">
            <select
              className="selectpicker w100 form-select show-tick"
              onChange={(e) => dispatch(addLocation(e.target.value))}
              value={location}
            >
              <option value="">Chọn khu vực</option>
              {locationData?.locations?.data?.map((item) => (
                <option value={item.id} key={item.id}>
                  {item.attributes.name}
                </option>
              ))}
            </select>
          </div>
        </div>
      </li>
      {/* End li */}

      <li>
        <div className="search_option_two">
          <div className="candidate_revew_select">
            <select
              onChange={(e) => dispatch(addPropertyType(e.target.value))}
              className="selectpicker w100 show-tick form-select"
              value={propertyType}
            >
              <option value="">Chọn loại BĐS</option>
              {categoriesData?.categories?.data?.map((item) => (
                <option value={item.id} key={item.id}>
                  {item.attributes.name}
                </option>
              ))}
            </select>
          </div>
        </div>
      </li>
      {/* End li */}

      <li>
        <div className="small_dropdown2">
          <div
            id="prncgs2"
            className="btn dd_btn"
            data-bs-toggle="dropdown"
            data-bs-auto-close="outside"
            aria-expanded="false"
          >
            <span>Tài chính</span>
            <label htmlFor="prncgs2">
              <span className="fa fa-angle-down"></span>
            </label>
          </div>
          <div className="dd_content2 style2 dropdown-menu">
            <div className="pricing_acontent ">
              <PricingRangeSlider />
            </div>
          </div>
        </div>
      </li>
      {/* End li */}

      <li>
        <div className="search_option_two">
          <div className="candidate_revew_select">
            <select
              onChange={(e) => dispatch(addBathrooms(e.target.value))}
              className="selectpicker w100 show-tick form-select"
              value={bathrooms}
            >
              <option value="">Chọn phòng tắm</option>
              {bathRoom.map((item) => (
                <option value={item} key={item}>
                  {item}
                </option>
              ))}
            </select>
          </div>
        </div>
      </li>
      {/* End li */}

      <li>
        <div className="search_option_two">
          <div className="candidate_revew_select">
            <select
              onChange={(e) => dispatch(addBedrooms(e.target.value))}
              className="selectpicker w100 show-tick form-select"
              value={bedrooms}
            >
              <option value="">Chọn phòng ngủ</option>
              {bedRoom.map((item) => (
                <option value={item} key={item}>
                  {item}
                </option>
              ))}
            </select>
          </div>
        </div>
      </li>
      {/* End li */}

      {/* <li>
        <div className="search_option_two">
          <div className="candidate_revew_select">
            <select
              onChange={(e) => setGarages(e.target.value)}
              className="selectpicker w100 show-tick form-select"
              value={getGarages}
            >
              <option value="">Garages</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
              <option value="other">Others</option>
            </select>
          </div>
        </div>
      </li> */}
      {/* End li */}

      {/* <li>
        <div className="search_option_two">
          <div className="candidate_revew_select">
            <select
              onChange={(e) => setBuiltYear(e.target.value)}
              className="selectpicker w100 show-tick form-select"
              value={getBuiltYear}
            >
              <option value="">Year built</option>
              <option value="2013">2013</option>
              <option value="2014">2014</option>
              <option value="2015">2015</option>
              <option value="2016">2016</option>
              <option value="2017">2017</option>
              <option value="2018">2018</option>
              <option value="2019">2019</option>
              <option value="2020">2020</option>
            </select>
          </div>
        </div>
      </li> */}
      {/* End li */}

      {/* <li className="min_area list-inline-item">
        <div className="form-group mb-4">
          <input
            type="number"
            className="form-control"
            id="exampleInputName2"
            placeholder="Min Area"
            value={getAreaMin}
            onChange={(e) => setAreaMin(e.target.value)}
          />
        </div>
      </li> */}
      {/* End li */}

      {/* <li className="max_area list-inline-item">
        <div className="form-group mb-4">
          <input
            type="number"
            className="form-control"
            id="exampleInputName3"
            placeholder="Max Area"
            value={getAreaMax}
            onChange={(e) => setAreaMax(e.target.value)}
          />
        </div>
      </li> */}
      {/* End li */}

      <li>
        <div id="accordion" className="panel-group">
          <div className="panel">
            <div className="panel-heading">
              <h4 className="panel-title">
                <a
                  href="#panelBodyRating"
                  className="accordion-toggle link"
                  data-bs-toggle="collapse"
                  data-bs-parent="#accordion"
                >
                  <i className="flaticon-more"></i> Thêm tiện ích
                </a>
              </h4>
            </div>

            <div id="panelBodyRating" className="panel-collapse collapse">
              <div className="panel-body row">
                <div className="col-lg-12">
                  <ul className="ui_kit_checkbox selectable-list fn-400">
                    {featureData?.features?.data?.map((feature) => (
                      <li key={feature.id}>
                        <div className="form-check custom-checkbox">
                          <input
                            type="checkbox"
                            className="form-check-input"
                            id={feature.id}
                            value={feature.id}
                            checked={amenities.find((id) => id == feature.id)}
                            onChange={(e) =>
                              dispatch(addAmenities(e.target.value))
                            }
                            //onClick={() => advancedHandler(feature.id)}
                          />
                          <label
                            className="form-check-label"
                            htmlFor={feature.id}
                          >
                            {feature.attributes.name}
                          </label>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </li>
      {/* End li */}

      <li>
        <div className="search_option_button">
          <button
            onClick={clearAllFilters}
            type="button"
            className="btn btn-block btn-thm w-100"
          >
            Xóa lọc
          </button>
        </div>
      </li>
      {/* End li */}
    </ul>
  );
};

export default FilteringItem;
