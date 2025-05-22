'use client';
import { useRouter } from "next/navigation";
import { useSelector, useDispatch } from "react-redux";
import { selectCategories } from "../../features/categories/categoriesSlice";
import { selectLocations } from "../../features/location/locationsSlice";
import {
  addKeyword,
  addPropertyType,
  addLocation,
} from "../../features/properties/propertiesSlice";
import CheckBoxFilter from "./CheckBoxFilter";
import GlobalSelectBox from "./GlobalSelectBox";
import PricingRangeSlider from "./PricingRangeSlider";

const GlobalFilter = ({ className = "" }) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const categoriesData = useSelector(selectCategories);
  const locationData = useSelector(selectLocations);
  // submit handler
  const submitHandler = () => {
    router.push("/find");
  };

  const { keyword, location, propertyType } = useSelector(
    (state) => state.properties
  );

  return (
    <div className={`home1-advnc-search ${className}`}>
      <ul className="h1ads_1st_list mb0">
        <li className="list-inline-item">
          <div className="form-group">
            <input
              value={keyword}
              type="text"
              className="form-control"
              placeholder="Từ khóa..."
              onChange={(e) => dispatch(addKeyword(e.target.value))}
            />
          </div>
        </li>
        {/* End li */}

        <li className="list-inline-item">
          <div className="search_option_two">
            <div className="candidate_revew_select">
              <select
                className="selectpicker w100 form-select show-tick"
                onChange={(e) => dispatch(addPropertyType(e.target.value))}
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
        <li className="list-inline-item">
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
        {/* <li className="list-inline-item">
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Vị trí"
              onChange={(e) => dispatch(addLocation(e.target.value))}
            />
            <label>
              <span className="flaticon-maps-and-flags"></span>
            </label>
          </div>
        </li> */}
        {/* End li */}

        <li className="list-inline-item">
          <div className="small_dropdown2">
            <div
              id="prncgs"
              className="btn dd_btn"
              data-bs-toggle="dropdown"
              data-bs-auto-close="outside"
              aria-expanded="false"
            >
              <span>Tài chính</span>
              <label htmlFor="InputEmail2">
                <span className="fa fa-angle-down"></span>
              </label>
            </div>
            <div className="dd_content2 dropdown-menu">
              <div className="pricing_acontent">
                <PricingRangeSlider />
              </div>
            </div>
          </div>
        </li>
        {/* End li */}

        <li className="custome_fields_520 list-inline-item">
          <div className="navbered">
            <div className="mega-dropdown ">
              <span
                className="dropbtn"
                data-bs-toggle="dropdown"
                data-bs-auto-close="outside"
                aria-expanded="false"
              >
                Thêm <i className="flaticon-more pl10 flr-520"></i>
              </span>

              <div className="dropdown-content dropdown-menu ">
                <div className="row p15">
                  <div className="col-lg-12">
                    <h4 className="text-thm3 mb-4">Tiện ích</h4>
                  </div>

                  <CheckBoxFilter />
                </div>
                {/* End .row */}

                <div className="row p15 pt0-xsd">
                  <div className="col-lg-12 col-xl-12">
                    <ul className="apeartment_area_list mb0">
                      <GlobalSelectBox />
                    </ul>
                  </div>
                </div>
                {/* End .row */}
              </div>
              {/* End .dropdown-menu */}
            </div>
          </div>
        </li>
        {/* End li */}

        <li className="list-inline-item">
          <div className="search_option_button">
            <button
              onClick={submitHandler}
              type="submit"
              className="btn btn-thm"
            >
              Tìm
            </button>
          </div>
        </li>
        {/* End li */}
      </ul>
    </div>
  );
};

export default GlobalFilter;
