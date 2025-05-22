'use client';
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useGetProductsQuery } from "../../../features/products/productsApi";
import {
  loadProducts,
  selectProducts,
} from "../../../features/products/productsSlice";
const qs = require("qs");

const Pagination = () => {
  const dispatch = useDispatch();
  const productData = useSelector(selectProducts);
  const pagination = productData?.products?.meta?.pagination;
  const pageCount = pagination ? pagination.pageCount : 1;
  const [pageSelected, setpageSelected] = useState(1);
  const {
    keyword,
    location,
    status,
    propertyType,
    price,
    bathrooms,
    bedrooms,
    amenities,
  } = useSelector((state) => state.properties);

  //////////////////////////////////////////////////////////////////////////////////////////
  const query = qs.stringify(
    {
      filters: {
        $and: [
          { status: { $eq: status } },
          { price: { $between: [price?.min, price?.max] } },
          location ? { location: { id: { $eq: location } } } : null,
          propertyType ? { categoryID: { id: { $eq: propertyType } } } : null,
          bathrooms ? { bathRoom: { $eq: bathrooms } } : null,
          bedrooms ? { bedRoom: { $eq: bedrooms } } : null,
          amenities.length > 0
            ? { feature_ids: { id: { $in: amenities } } }
            : null,
        ],
        $or: [
          keyword ? { name: { $containsi: keyword } } : null,
          keyword ? { description: { $containsi: keyword } } : null,
        ],
      },
    },
    {
      encodeValuesOnly: true,
      skipNulls: true,
    }
  );

  const { data: dataProduct, isSuccess } = useGetProductsQuery({
    page: pageSelected,
    filters: query,
  });
  //////////////////////////////////////////////////////////////////////////////////////////

  useEffect(() => {
    if (isSuccess) {
      dispatch(loadProducts(dataProduct));
      if (pageSelected > dataProduct?.meta?.pagination?.pageCount) {
        setpageSelected(1);
      }
    }
    return () => {};
  }, [dataProduct]);

  useEffect(() => {
    setpageSelected(1);
  }, [query]);

  const pageHandle = (element) => {
    setpageSelected(element);
  };

  const pageNext = () => {
    setpageSelected(Number(pageSelected) + 1);
  };

  const pagePrev = () => {
    setpageSelected(Number(pageSelected) - 1);
  };

  //////////////////////////////////////////////////////////////////////////////////////////

  let listPageLeft2 = [];
  let listPageLeft = [];
  let listPageCenter = [];
  let listPageRight = [];
  let listPageRight2 = [];

  if (pageCount <= 7) {
    listPageLeft2 = [];
    listPageLeft = [];
    listPageCenter = [];
    for (let index = 1; index <= pageCount; index++) {
      listPageCenter.push(index.toString());
    }
    listPageRight = [];
    listPageRight2 = [];
  } else if (Number(pageSelected) <= 3) {
    listPageLeft2 = [];
    listPageLeft = [];
    for (let index = 1; index <= 4; index++) {
      listPageLeft.push(index.toString());
    }
    listPageCenter = ["..."];
    listPageRight = [pageCount.toString()];
    listPageRight2 = [];
  } else if (Number(pageSelected) >= pageCount - 3) {
    listPageLeft2 = [];
    listPageLeft = ["1"];
    listPageCenter = ["..."];
    listPageRight = [];
    for (let index = pageCount - 4; index <= pageCount; index++) {
      listPageRight.push(index.toString());
    }
    listPageRight2 = [];
  } else {
    listPageLeft2 = ["1"];
    listPageLeft = ["..."];
    listPageCenter = [
      (Number(pageSelected) - 1).toString(),
      pageSelected.toString(),
      (Number(pageSelected) + 1).toString(),
    ];
    listPageRight = ["..."];
    listPageRight2 = [pageCount.toString()];
  }

  const listPage = listPageLeft2.concat(
    listPageLeft,
    listPageCenter,
    listPageRight,
    listPageRight2
  );

  return (
    pageCount > 1 && (
      <ul className="page_navigation">
        <li className={`page-item ${Number(pageSelected) == 1 && "disabled"}`}>
          <a
            className="page-link"
            href="#"
            onClick={() => pagePrev()}
            //tabIndex="-1"
            aria-disabled={Number(pageSelected) == 1 ? "true" : "false"}
          >
            <span className="flaticon-left-arrow"></span>
          </a>
        </li>

        {listPage.length > 0 &&
          listPage.map((element, i) => {
            return (
              <li
                className={`page-item 
              ${element == Number(pageSelected) && "active"} 
              ${element == "..." && "disabled"}              
              `}
                key={element + i}
              >
                <a
                  className="page-link"
                  href="#"
                  onClick={() => pageHandle(element)}
                  aria-disabled={element == "..." ? "true" : "false"}
                >
                  {element}
                </a>
              </li>
            );
          })}

        <li
          className={`page-item ${
            Number(pageSelected) == pageCount && "disabled"
          }`}
        >
          <a
            className="page-link"
            href="#"
            onClick={() => pageNext()}
            aria-disabled={Number(pageSelected) == pageCount ? "true" : "false"}
          >
            <span className="flaticon-right-arrow"></span>
          </a>
        </li>
      </ul>
    )
  );
};

export default Pagination;
