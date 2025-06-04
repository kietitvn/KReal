import { useDispatch, useSelector } from "react-redux";
import { addBathrooms, addBedrooms } from "../../features/properties/propertiesSlice";
import { bathRoom, bedRoom } from "../../utils/const";

const GlobalSelectBox = () => {
  const { bathrooms, bedrooms } = useSelector((state) => state.properties);
  const dispath = useDispatch();
  return (
    <>
      <li className="list-inline-item">
        <div className="candidate_revew_select">
          <select
            className="selectpicker w100 show-tick form-select"
            onChange={(e) => dispath(addBathrooms(e.target.value))}
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
      </li>
      {/* End li */}

      <li className="list-inline-item">
        <div className="candidate_revew_select">
          <select
            className="selectpicker w100 show-tick form-select"
            onChange={(e) => dispath(addBedrooms(e.target.value))}
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
      </li>

      {/* <li className="list-inline-item">
        <div className="candidate_revew_select">
          <select className="selectpicker w100 show-tick form-select">
            <option>Phòng vệ sinh</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
            <option>6</option>
            <option>7</option>
            <option>8</option>
            <option>9</option>
          </select>
        </div>
      </li> */}
      {/* End li */}

      {/* <li className="list-inline-item">
        <div className="candidate_revew_select">
          <select className="selectpicker w100 show-tick form-select">
            <option>Year built</option>
            <option>2013</option>
            <option>2014</option>
            <option>2015</option>
            <option>2016</option>
            <option>2017</option>
            <option>2018</option>
            <option>2019</option>
            <option>2020</option>
          </select>
        </div>
      </li>

      <li className="list-inline-item">
        <div className="candidate_revew_select">
          <select className="selectpicker w100 show-tick form-select">
            <option>Built-up Area</option>
            <option>Adana</option>
            <option>Ankara</option>
            <option>Antalya</option>
            <option>Bursa</option>
            <option>Bodrum</option>
            <option>Gaziantep</option>
            <option>İstanbul</option>
            <option>İzmir</option>
            <option>Konya</option>
          </select>
        </div>
      </li> */}
    </>
  );
};

export default GlobalSelectBox;
