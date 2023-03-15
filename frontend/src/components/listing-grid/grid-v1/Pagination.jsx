import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useGetProductsQuery } from "../../../features/products/productsApi";
import {
  loadProducts,
  selectProducts,
} from "../../../features/products/productsSlice";

const Pagination = () => {
  const dispatch = useDispatch();
  const productData = useSelector(selectProducts);
  const pagination = productData?.products?.meta?.pagination;

  const [pageSelected, setpageSelected] = useState(pagination?.page);

  const { data: dataProduct, isSuccess } = useGetProductsQuery({
    page: pageSelected,
  });

  const listPage = [];
  for (let index = 1; index <= pagination?.pageCount; index++) {
    listPage.push(index);
  }

  useEffect(() => {
    if (isSuccess) {
      dispatch(loadProducts(dataProduct));
    }
    return () => {};
  }, [dataProduct]);

  const pageHandle = (element) => {
    setpageSelected(element);
  };

  const pageNext = () => {
    setpageSelected(pageSelected + 1);
  };

  const pagePrev = () => {
    setpageSelected(pageSelected - 1);
  };

  return (
    <ul className="page_navigation">
      <li className={`page-item ${pageSelected == 1 && "disabled"}`}>
        <a
          className="page-link"
          href="#"
          onClick={() => pagePrev()}
          //tabIndex="-1"
          aria-disabled={pageSelected == 1 ? "true" : "false"}
        >
          <span className="flaticon-left-arrow"></span>
        </a>
      </li>

      {listPage.map((element) => {
        return (
          <li
            className={`page-item ${element == pageSelected && "active"}`}
            key={element}
          >
            <a
              className="page-link"
              href="#"
              onClick={() => pageHandle(element)}
            >
              {element}
            </a>
          </li>
        );
      })}

      <li
        className={`page-item ${
          pageSelected == pagination?.pageCount && "disabled"
        }`}
      >
        <a
          className="page-link"
          href="#"
          onClick={() => pageNext()}
          aria-disabled={pageSelected == pagination?.pageCount ? "true" : "false"}
        >
          <span className="flaticon-right-arrow"></span>
        </a>
      </li>
    </ul>
  );
};

export default Pagination;
