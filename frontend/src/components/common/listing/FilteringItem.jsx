import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addFeatured,
  addStatusType,
} from "../../../features/filter/filterSlice";
import {
  addAmenities,
  addAreaMax,
  addAreaMin,
  addBathrooms,
  addBedrooms,
  addGarages,
  addKeyword,
  addLocation,
  addPrice,
  addPropertyType,
  addStatus,
  addYearBuilt,
  resetAmenities,
} from "../../../features/properties/propertiesSlice";
import PricingRangeSlider from "../../common/PricingRangeSlider";
import { v4 as uuidv4 } from "uuid";
import { useRouter } from "next/router";

const FilteringItem = () => {
  const {
    keyword,
    location,
    status,
    propertyType,
    bathrooms,
    bedrooms,
    garages,
    yearBuilt,
    area,
    amenities,
  } = useSelector((state) => state.properties);

  // input state
  const [getKeyword, setKeyword] = useState(keyword);
  const [getLocation, setLocation] = useState(location);
  const [getStatus, setStatus] = useState(status);
  const [getPropertiesType, setPropertiesType] = useState(propertyType);
  const [getBathroom, setBathroom] = useState(bathrooms);
  const [getBedroom, setBedroom] = useState(bedrooms);
  const [getGarages, setGarages] = useState(garages);
  const [getBuiltYear, setBuiltYear] = useState(yearBuilt);
  const [getAreaMin, setAreaMin] = useState(area.min);
  const [getAreaMax, setAreaMax] = useState(area.max);

  // advanced state
  const [getAdvanced, setAdvanced] = useState([
    { id: uuidv4(), name: "Air Conditioning" },
    { id: uuidv4(), name: "Barbeque" },
    { id: uuidv4(), name: "Gym" },
    { id: uuidv4(), name: "Microwave" },
    { id: uuidv4(), name: "TV Cable" },
    { id: uuidv4(), name: "Lawn" },
    { id: uuidv4(), name: "Refrigerator" },
    { id: uuidv4(), name: "Swimming Pool" },
    { id: uuidv4(), name: "WiFi" },
    { id: uuidv4(), name: "Sauna" },
    { id: uuidv4(), name: "Dryer" },
    { id: uuidv4(), name: "Washer" },
    { id: uuidv4(), name: "Laundry" },
    { id: uuidv4(), name: "Outdoor Shower" },
    { id: uuidv4(), name: "Window Coverings" },
  ]);

  const dispath = useDispatch();

  const Router = useRouter();

  // keyword
  useEffect(() => {
    dispath(addKeyword(getKeyword));
  }, [dispath, addKeyword, getKeyword]);

  // location
  useEffect(() => {
    dispath(addLocation(getLocation));
  }, [dispath, addLocation, getLocation]);

  // status
  useEffect(() => {
    dispath(addStatus(getStatus));
  }, [dispath, addStatus, getStatus]);

  // properties type
  useEffect(() => {
    dispath(addPropertyType(getPropertiesType));
  }, [dispath, addPropertyType, getPropertiesType]);

  // bathroom
  useEffect(() => {
    dispath(addBathrooms(getBathroom));
  }, [dispath, addBathrooms, getBathroom]);

  // bedroom
  useEffect(() => {
    dispath(addBedrooms(getBedroom));
  }, [dispath, addBedrooms, getBedroom]);

  // garages
  useEffect(() => {
    dispath(addGarages(getGarages));
  }, [dispath, addGarages, getGarages]);

  // built years
  useEffect(() => {
    dispath(addYearBuilt(getBuiltYear));
  }, [dispath, addYearBuilt, getBuiltYear]);

  // area min
  useEffect(() => {
    dispath(dispath(addAreaMin(getAreaMin)));
  }, [dispath, addAreaMin, getAreaMin]);

  // area max
  useEffect(() => {
    dispath(dispath(addAreaMax(getAreaMax)));
  }, [dispath, addAreaMax, getAreaMax]);

  // clear filter
  const clearHandler = () => {
    clearAllFilters();
  };

  const clearAllFilters = () => {
    setKeyword("");
    setLocation("");
    setStatus("");
    setPropertiesType("");
    dispath(addPrice({ min: 10000, max: 20000 }));
    setBathroom("");
    setBedroom("");
    setBedroom("");
    setGarages("");
    setBuiltYear("");
    setAreaMin("");
    setAreaMax("");
    dispath(resetAmenities());
    dispath(addStatusType(""));
    dispath(addFeatured(""));
    clearAdvanced();
  };

  // clear advanced
  const clearAdvanced = () => {
    const changed = getAdvanced.map((item) => {
      item.isChecked = false;
      return item;
    });
    setAdvanced(changed);
  };

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
    <ul className="sasw_list mb0">
      <li className="search_area">
        <div className="form-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="keyword"
            value={getKeyword}
            onChange={(e) => setKeyword(e.target.value)}
          />
          <label>
            <span className="flaticon-magnifying-glass"></span>
          </label>
        </div>
      </li>
      {/* End li */}

      <li className="search_area">
        <div className="form-group mb-3">
          <input
            type="search"
            className="form-control"
            id="exampleInputEmail"
            placeholder="Location"
            value={getLocation}
            onChange={(e) => setLocation(e.target.value)}
          />
          <label htmlFor="exampleInputEmail">
            <span className="flaticon-maps-and-flags"></span>
          </label>
        </div>
      </li>
      {/* End li */}

      <li>
        <div className="search_option_two">
          <div className="candidate_revew_select">
            <select
              onChange={(e) => setStatus(e.target.value)}
              className="selectpicker w100 show-tick form-select"
              value={getStatus}
            >
              <option value="">Status</option>
              <option value="apartment">Apartment</option>
              <option value="bungalow">Bungalow</option>
              <option value="condo">Condo</option>
              <option value="house">House</option>
              <option value="land">Land</option>
              <option value="single family">Single Family</option>
            </select>
          </div>
        </div>
      </li>
      {/* End li */}

      <li>
        <div className="search_option_two">
          <div className="candidate_revew_select">
            <select
              onChange={(e) => setPropertiesType(e.target.value)}
              className="selectpicker w100 show-tick form-select"
              value={getPropertiesType}
            >
              <option value="">Property Type</option>
              <option value="apartment">Apartment</option>
              <option value="bungalow">Bungalow</option>
              <option value="condo">Condo</option>
              <option value="house">House</option>
              <option value="land">Land</option>
              <option value="single family">Single Family</option>
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
            <span>Price Range</span>
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
              onChange={(e) => setBathroom(e.target.value)}
              className="selectpicker w100 show-tick form-select"
              value={getBathroom}
            >
              <option value="">Bathrooms</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
            </select>
          </div>
        </div>
      </li>
      {/* End li */}

      <li>
        <div className="search_option_two">
          <div className="candidate_revew_select">
            <select
              onChange={(e) => setBedroom(e.target.value)}
              className="selectpicker w100 show-tick form-select"
              value={getBedroom}
            >
              <option value="">Bedrooms</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
            </select>
          </div>
        </div>
      </li>
      {/* End li */}

      <li>
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
      </li>
      {/* End li */}

      <li>
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
      </li>
      {/* End li */}

      <li className="min_area list-inline-item">
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
      </li>
      {/* End li */}

      <li className="max_area list-inline-item">
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
      </li>
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
                  <i className="flaticon-more"></i> Advanced features
                </a>
              </h4>
            </div>
            {/* End .panel-heading */}

            <div id="panelBodyRating" className="panel-collapse collapse">
              <div className="panel-body row">
                <div className="col-lg-12">
                  <ul className="ui_kit_checkbox selectable-list fn-400">
                    {getAdvanced?.map((feature) => (
                      <li key={feature.id}>
                        <div className="form-check custom-checkbox">
                          <input
                            type="checkbox"
                            className="form-check-input"
                            id={feature.id}
                            value={feature.name}
                            checked={feature.isChecked || false}
                            onChange={(e) =>
                              dispath(addAmenities(e.target.value))
                            }
                            onClick={() => advancedHandler(feature.id)}
                          />
                          <label
                            className="form-check-label"
                            htmlFor={feature.id}
                          >
                            {feature.name}
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
            onClick={clearHandler}
            type="button"
            className="btn btn-block btn-thm w-100"
          >
            Clear Filters
          </button>
        </div>
      </li>
      {/* End li */}
    </ul>
  );
};

export default FilteringItem;
