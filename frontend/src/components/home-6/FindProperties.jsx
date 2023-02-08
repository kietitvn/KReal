import Link from "next/link";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import findProperties from "../../data/findProperties";
import { useGetLocationsQuery } from "../../features/location/locationsApi";
import { loadLocations } from "../../features/location/locationsSlice";
import { pollingInterval } from "../../utils/const";

const FindProperties = () => {
  const { data, isLoading } = useGetLocationsQuery("Location", {
    pollingInterval: pollingInterval,
  });

  console.log("dataLocation", data);

  const dispatch = useDispatch();
  useEffect(() => {
    if (!isLoading) {
      dispatch(loadLocations(data));
    }
    return () => {};
  }, [data]);

  return (
    <>
      {data.data.map((item) => (
        <div className="col-sm-6 col-md-6 col-lg-4 col-xl-4" key={item.id}>
          <Link href="/listing-list-v1">
            <a className="property_city_home6">
              <div className="thumb">
                {item?.attributes?.image?.data && (
                  <img
                    className="img-fluid w100"
                    src={
                      process.env.baseUrl +
                      item.attributes.image.data.attributes.url
                    }
                    alt={item.attributes.image.data.attributes.alternativeText}
                  />
                )}
              </div>
              <div className="details">
                <h4>{item.attributes.name}</h4>
                <p>{item.attributes.products.data.length} BĐS</p>
              </div>
            </a>
          </Link>
        </div>
      ))}
    </>
  );
};

export default FindProperties;
