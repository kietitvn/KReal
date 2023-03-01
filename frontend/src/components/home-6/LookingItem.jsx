import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { loadCategories } from "../../features/categories/categoriesSlice";
import { useGetCategoriesQuery } from "../../features/categories/categoriesApi";
import { addPropertyType } from "../../features/properties/propertiesSlice";
import Router from "next/router";

const LookingItem = () => {
  const { data: categoriesData, isSuccess: isSuccessCategory } =
    useGetCategoriesQuery({ subscribe: false });
  const dispatch = useDispatch();

  useEffect(() => {
    if (isSuccessCategory) {
      dispatch(loadCategories(categoriesData));
    }

    return () => {};
  }, [categoriesData]);

  return (
    <>
      {categoriesData?.data?.map((item) => (
        <div className="col-sm-6 col-lg-3 col-xl-3 p0" key={item.id}>
          <a
            onClick={(e) => {
              dispatch(addPropertyType(item?.id));
              e.preventDefault();
              Router.push("/find");
            }}
          >
            <div className="why_chose_us home6">
              <div className="icon">
                <span className={item.attributes.icon}></span>
              </div>
              <div className="details">
                <h4>{item.attributes.name}</h4>
                <p>{item.attributes.description}</p>
              </div>
            </div>
          </a>
        </div>
      ))}
    </>
  );
};

export default LookingItem;
