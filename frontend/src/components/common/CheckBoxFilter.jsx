import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useGetFeaturesQuery } from "../../features/feature/featuresApi";
import { loadFeatures } from "../../features/feature/featuresSlice";
import { pollingInterval } from "../../utils/const";

const CheckBoxFilter = () => {
  const { data, isLoading } = useGetFeaturesQuery("Feature", {
    pollingInterval: pollingInterval,
  });
  const dispatch = useDispatch();
  useEffect(() => {
    if (!isLoading) {
      dispatch(loadFeatures(data));
    }
    return () => {};
  }, [data]);

  // const data1 = 0,
  //   data2 = 0,
  //   data3 = 0,
  //   data4 = 0,
  //   data5 = 0;

  // if (data && data.data.length() > 3) {
  //   data2 = data.data.slice(3, 3);
  // }
  // if (data && data.data.length() > 3) {
  //   data3 = data.data.slice(3, 3);
  // }
  // if (data && data.data.length() > 3) {
  //   data4 = data.data.slice(3, 3);
  // }
  // if (data && data.data.length() > 3) {
  //   data5 = data.data.slice(3, 3);
  // }

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
                      id="customCheck1"
                    />
                    <label className="form-check-label" htmlFor="customCheck1">
                      {item.attributes.name}
                    </label>
                  </div>
                </li>
              </ul>
            </li>
          ))}
      </ul>
      {/* <div className="col-xxs-6 col-sm col-lg col-xl">
        <ul className="ui_kit_checkbox selectable-list">
          <li>
            <div className="form-check custom-checkbox">
              <input
                type="checkbox"
                className="form-check-input"
                id="customCheck1"
              />
              <label className="form-check-label" htmlFor="customCheck1">
                Air Conditioning 1
              </label>
            </div>
          </li>
          

          <li>
            <div className="form-check custom-checkbox">
              <input
                type="checkbox"
                className="form-check-input"
                id="customCheck2"
              />
              <label className="form-check-label" htmlFor="customCheck2">
                Lawn
              </label>
            </div>
          </li>
          

          <li>
            <div className="form-check custom-checkbox">
              <input
                type="checkbox"
                className="form-check-input"
                id="customCheck3"
              />
              <label className="form-check-label" htmlFor="customCheck3">
                Swimming Pool
              </label>
            </div>
          </li>
          
        </ul>
      </div> */}

      {/* <div className="col-xs-6 col-sm col-lg col-xl">
        <ul className="ui_kit_checkbox selectable-list">
          <li>
            <div className="form-check custom-checkbox">
              <input
                type="checkbox"
                className="form-check-input"
                id="customCheck4"
              />
              <label className="form-check-label" htmlFor="customCheck4">
                Barbeque
              </label>
            </div>
          </li>
          

          <li>
            <div className="form-check custom-checkbox">
              <input
                type="checkbox"
                className="form-check-input"
                id="customCheck5"
              />
              <label className="form-check-label" htmlFor="customCheck5">
                Microwave
              </label>
            </div>
          </li>
          

          <li>
            <div className="form-check custom-checkbox">
              <input
                type="checkbox"
                className="form-check-input"
                id="customCheck6"
              />
              <label className="form-check-label" htmlFor="customCheck6">
                TV Cable
              </label>
            </div>
          </li>
          
        </ul>
      </div>
      

      <div className="col-xs-6 col-sm col-lg col-xl">
        <ul className="ui_kit_checkbox selectable-list">
          <li>
            <div className="form-check custom-checkbox">
              <input
                type="checkbox"
                className="form-check-input"
                id="customCheck7"
              />
              <label className="form-check-label" htmlFor="customCheck7">
                Dryer
              </label>
            </div>
          </li>
          

          <li>
            <div className="form-check custom-checkbox">
              <input
                type="checkbox"
                className="form-check-input"
                id="customCheck8"
              />
              <label className="form-check-label" htmlFor="customCheck8">
                Outdoor Shower
              </label>
            </div>
          </li>
          

          <li>
            <div className="form-check custom-checkbox">
              <input
                type="checkbox"
                className="form-check-input"
                id="customCheck9"
              />
              <label className="form-check-label" htmlFor="customCheck9">
                Washer
              </label>
            </div>
          </li>
          
        </ul>
      </div>
      

      <div className="col-xxs-6 col-sm col-lg col-xl">
        <ul className="ui_kit_checkbox selectable-list">
          <li>
            <div className="form-check custom-checkbox">
              <input
                type="checkbox"
                className="form-check-input"
                id="customCheck10"
              />
              <label className="form-check-label" htmlFor="customCheck10">
                Gym
              </label>
            </div>
          </li>
          

          <li>
            <div className="form-check custom-checkbox">
              <input
                type="checkbox"
                className="form-check-input"
                id="customCheck11"
              />
              <label className="form-check-label" htmlFor="customCheck11">
                Refrigerator
              </label>
            </div>
          </li>
          

          <li>
            <div className="form-check custom-checkbox">
              <input
                type="checkbox"
                className="form-check-input"
                id="customCheck12"
              />
              <label className="form-check-label" htmlFor="customCheck12">
                WiFi
              </label>
            </div>
          </li>
          
        </ul>
      </div>
      

      <div className="col-xxs-6 col-sm col-lg col-xl">
        <ul className="ui_kit_checkbox selectable-list">
          <li>
            <div className="form-check custom-checkbox">
              <input
                type="checkbox"
                className="form-check-input"
                id="customCheck13"
              />
              <label className="form-check-label" htmlFor="customCheck13">
                Laundry
              </label>
            </div>
          </li>
          

          <li>
            <div className="form-check custom-checkbox">
              <input
                type="checkbox"
                className="form-check-input"
                id="customCheck14"
              />
              <label className="form-check-label" htmlFor="customCheck14">
                Sauna
              </label>
            </div>
          </li>
          

          <li>
            <div className="form-check custom-checkbox">
              <input
                type="checkbox"
                className="form-check-input"
                id="customCheck15"
              />
              <label className="form-check-label" htmlFor="customCheck15">
                Window Coverings
              </label>
            </div>
          </li>
          
        </ul>
      </div> */}
    </>
  );
};

export default CheckBoxFilter;
