import { useDispatch, useSelector } from "react-redux";
import { addPrice, addStatus } from "../../features/properties/propertiesSlice";
import { priceRange } from "../../utils/const";
import GlobalFilter from "./GlobalFilter";

const GlobalHeroFilter = ({ className = "" }) => {
  const dispatch = useDispatch();
  const { status } = useSelector(
    (state) => state.properties
  );
  return (
    <div className={`home_adv_srch_opt ${className}`}>
      <ul className="nav nav-pills" id="pills-tab" role="tablist">
        <li className="nav-item">
          <a
            className={`nav-link ${status === "Bán" && "active"}`}
            id="pills-home-tab"
            data-bs-toggle="pill"
            href="#pills-home"
            role="tab"
            aria-controls="pills-home"
            aria-selected={status === "Bán"}
            onClick={() => {
              dispatch(addStatus("Bán"));
              dispatch(addPrice(priceRange.sell));
            }}
          >
            Bán
          </a>
        </li>

        <li className="nav-item">
          <a
            className={`nav-link ${status === "Thuê" && "active"}`}
            id="pills-profile-tab"
            data-bs-toggle="pill"
            href="#pills-profile"
            role="tab"
            aria-controls="pills-profile"
            aria-selected={status === "Thuê"}
            onClick={() => {
              dispatch(addStatus("Thuê"));
              dispatch(addPrice(priceRange.rent));
            }}
          >
            Thuê
          </a>
        </li>
      </ul>
      {/* End nav-pills */}

      <div className="tab-content home1_adsrchfrm" id="pills-tabContent">
        <div
          className="tab-pane fade show active"
          id="pills-home"
          role="tabpanel"
          aria-labelledby="pills-home-tab"
        >
          <GlobalFilter />
        </div>
        <div
          className="tab-pane fade"
          id="pills-profile"
          role="tabpanel"
          aria-labelledby="pills-profile-tab"
        >
          <GlobalFilter />
        </div>
      </div>
    </div>
  );
};

export default GlobalHeroFilter;
