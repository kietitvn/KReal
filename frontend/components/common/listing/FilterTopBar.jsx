'use client';
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addFeatured,
  addStatusType,
} from "../../../features/filter/filterSlice";

const FilterTopBar = () => {
  const { products } = useSelector((state) => state.products);
  const { statusType, featured } = useSelector((state) => state.filter);
  const [getStatus, setStatus] = useState(statusType);
  const [getFeatured, setFeatured] = useState(featured);

  const dispatch = useDispatch();

  // add status
  useEffect(() => {
    dispatch(addStatusType(getStatus));
  }, [dispatch, addStatusType, getStatus]);

  // add featured
  useEffect(() => {
    dispatch(addFeatured(getFeatured));
  }, [dispatch, addFeatured, getFeatured]);

  // clear filter
  useEffect(() => {
    statusType === "" && setStatus("");
    featured === "" && setFeatured("");
  }, [statusType, setStatus, featured, setFeatured]);

  return (
    <>
      {/* <div className="col-sm-12 col-md-4 col-lg-4 col-xl-5"> */}
        <div className="left_area tac-xsd">
            {products?.meta?.pagination?.total !== 0 ? (
              <span className="text-success">
                {products?.meta?.pagination?.total} gợi ý nhà đất đang chờ bạn khám phá.
              </span>
            ) : (
              <span className="text-danger">
                Chưa có kết quả phù hợp.<br></br>Bạn có thể thay đổi tiêu chí để mở rộng phạm vi tìm kiếm.
              </span>
            )}
        </div>
      {/* </div> */}
      {/* End .col */}

      {/* <div className="col-sm-12 col-md-8 col-lg-8 col-xl-7">
        <div className="right_area text-end tac-xsd">
          <ul>
            <li className="list-inline-item">
              <span className="stts">Status:</span>
              <select
                className="selectpicker show-tick"
                onChange={(e) => setStatus(e.target.value)}
                value={getStatus}
              >
                <option value="">All Status</option>
                <option value="old">Old</option>
                <option value="recent">Recent</option>
              </select>
            </li>
            <li className="list-inline-item">
              <span className="shrtby">Sort by:</span>
              <select
                className="selectpicker show-tick"
                onChange={(e) => setFeatured(e.target.value)}
                value={getFeatured}
              >
                <option value="">Featured All</option>
                <option value="sale">Sale</option>
                <option value="rent">Rent</option>
              </select>
            </li>
          </ul>
        </div>
      </div> */}
      {/* End .col */}
    </>
  );
};

export default FilterTopBar;
