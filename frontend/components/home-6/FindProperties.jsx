'use client';
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useGetLocationsQuery } from "../../features/location/locationsApi";
import { loadLocations } from "../../features/location/locationsSlice";
import { addLocation } from "../../features/properties/propertiesSlice";
import { useRouter } from "next/navigation";

const FindProperties = () => {
  const router = useRouter()

  const { data: locationData, isSuccess: isSuccessLocation } =
    useGetLocationsQuery({ subscribe: false });

  const dispatch = useDispatch();

  useEffect(() => {
    if (isSuccessLocation) {
      dispatch(loadLocations(locationData));
    }
    return () => {};
  }, [locationData]);

  return (
    <>
      {locationData?.data?.map((item) => (
        <div className="col-sm-6 col-md-6 col-lg-4 col-xl-4" key={item?.id}>
          <a
            className="property_city_home6"
            onClick={(e) => {
              dispatch(addLocation(item?.id));
              e.preventDefault();
              router.push("/find");
            }}
          >
            <div className="thumb">
              {item?.attributes?.image?.data && (
                <img
                  className="img-fluid w100"
                  src={
                    item?.attributes?.image?.data?.attributes?.url
                  }
                  alt={
                    item?.attributes?.image?.data?.attributes?.alternativeText
                  }
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
