import { useSelector } from "react-redux";
import { selectCategories } from "../../features/categories/categoriesSlice";

const LookingItem = () => {
  const categoriesData = useSelector(selectCategories);
  return (
    <>
      {categoriesData.categories.data.map((item) => (
        <div className="col-sm-6 col-lg-3 col-xl-3 p0" key={item.id}>
          <div className="why_chose_us home6">
            <div className="icon">
              <span className={item.attributes.image.data}></span>
            </div>
            <div className="details">
              <h4>{item.attributes.name}</h4>
              <p>{item.attributes.description}</p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default LookingItem;
