import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { selectLocations } from "../../features/location/locationsSlice";
import { addLocation } from "../../features/properties/propertiesSlice";

const FindProperties = () => {
  const locationData = useSelector(selectLocations);
  const dispatch = useDispatch();
  const route = useRouter();

  return (
    <>
      {locationData?.locations?.data?.map((item) => (
        <div className="col-sm-6 col-md-6 col-lg-4 col-xl-4" key={item?.id}>
          <a
            className="property_city_home6"
            onClick={(e) => {
              dispatch(addLocation(item?.id));
              e.preventDefault();
              route.push("/find");
            }}
          >
            <div className="thumb">
              {item?.attributes?.image?.data && (
                <img
                  className="img-fluid w100"
                  src={item?.attributes?.image?.data?.attributes?.formats?.small?.url}
                  alt={item?.attributes?.image?.data?.attributes?.alternativeText}
                />
              )}
            </div>
            <div className="details">
              <h4>{item?.attributes?.name}</h4>
              <p>{item?.attributes?.products?.data?.length} BĐS</p>
            </div>
          </a>
        </div>
      ))}
    </>
  );
};

export default FindProperties;
