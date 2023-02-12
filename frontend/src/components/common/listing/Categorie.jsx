import { useSelector } from "react-redux";
import { selectCategories } from "../../../features/categories/categoriesSlice";

const Categorie = () => {
  const dataCategory = useSelector(selectCategories);
  return (
    <>
      {dataCategory?.categories?.data?.map((item) => (
        <li key={item?.id}>
          <a href="#">
            <i className="fa fa-caret-right mr10"/>{item?.attributes?.name}

            <span className="float-end">
              {item?.attributes?.products?.data.length} BĐS
            </span>
          </a>
        </li>
      ))}
    </>
  );
};

export default Categorie;
