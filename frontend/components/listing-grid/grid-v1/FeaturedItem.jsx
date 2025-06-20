'use client';
import Image from "next/image";
import Link from "next/link";
import { useSelector } from "react-redux";
import { selectProducts } from "../../../features/products/productsSlice";
import { doctien } from "../../../utils/currency";

const FeaturedItem = () => {
  const productData = useSelector(selectProducts);

  const { statusType, featured, isGridOrList } = useSelector(
    (state) => state.filter
  );
  // status handler
  let content = productData?.products?.data?.map((item) => {
    const imageUrl = item?.attributes?.imageUrl?.split(";");
    return (
      <div
        className={`${isGridOrList ? "col-12 feature-list" : "col-md-6 col-lg-6"
          } `}
        key={item?.id}
      >
        <Link href={`/${item?.attributes?.slug}?id=${item?.id}`}>
          <div
            className={`feat_property home7 style4 ${isGridOrList ? "d-flex align-items-center" : undefined
              }`}
          >
            <div className="thumb" style={{ position: 'relative', width: 342, height: 220 }}>
              {imageUrl && imageUrl.length > 0 ? (
                <Image
                  className="img-whp w-100 h-100 cover"
                  src={imageUrl[0]}
                  // width={342}
                  // height={220}
                  fill
                  style={{ objectFit: 'cover' }}
                />
              ) : (
                <Image
                  className="img-whp w-100 h-100 cover"
                  src={
                    item?.attributes?.cover?.data?.attributes?.formats?.small
                      ?.url
                  }
                  alt={
                    item?.attributes?.cover?.data?.attributes?.alternativeText
                  }
                  // width={342}
                  // height={220}
                  fill
                  style={{ objectFit: 'cover' }}
                />
              )}
              <div className="thmb_cntnt">
                <ul className="tag mb0">
                  {item?.attributes?.feature_ids?.data?.length > 0 && (
                    <li className="list-inline-item">
                      <a href="#">Tiện ích</a>
                    </li>
                  )}
                  <li className="list-inline-item">
                    <a href="#">{item?.attributes?.status}</a>
                  </li>
                </ul>
                <ul className="icon mb0">
                  <li className="list-inline-item">
                    <a href="#">
                      <span className="flaticon-transfer-1"></span>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#">
                      <span className="flaticon-heart"></span>
                    </a>
                  </li>
                </ul>
                <a className="fp_price">
                  {doctien(item?.attributes?.price)}
                  <small>
                    {item?.attributes?.status === "Bán" ? "" : "/tháng"}
                  </small>
                </a>
              </div>
            </div>
            <div className="details">
              <div className="tc_content">
                <p className="text-thm">
                  {item?.attributes?.categoryID?.data?.attributes?.name}
                </p>
                <h4>
                  <Link href={`/${item?.attributes?.slug}?id=${item?.id}`}>
                    {item?.attributes?.name}
                  </Link>
                </h4>
                <p>
                  <span className="flaticon-placeholder"></span>
                  {item?.attributes?.location?.data?.attributes?.name}
                </p>

                <ul className="prop_details mb0">
                  <li className="list-inline-item">
                    Phòng ngủ: {item?.attributes?.bedRoom}
                  </li>
                  <li className="list-inline-item">
                    Phòng tắm: {item?.attributes?.bathRoom}
                  </li>
                </ul>

                <ul className="prop_details mb0">
                  {item?.attributes?.feature_ids?.data?.map((val, i) => (
                    <li className="list-inline-item" key={i}>
                      {val.attributes.name}
                    </li>
                  ))}
                </ul>
              </div>
              {/* End .tc_content */}

              {/* <div className="fp_footer">
              <ul className="fp_meta float-start mb0">
                <li className="list-inline-item">
                  <Link href="/agent-v2">
                    <a>
                      <img src={item.posterAvatar} alt="pposter1.png" />
                    </a>
                  </Link>
                </li>
                <li className="list-inline-item">
                  <Link href="/agent-v2">
                    <a>{item.posterName}</a>
                  </Link>
                </li>
              </ul>
              <div className="fp_pdate float-end">{item.postedYear}</div>
            </div> */}
              {/* End .fp_footer */}
            </div>
          </div>
        </Link>
      </div>
    );
  });

  // add length of filter items
  // useEffect(() => {
  //   dispatch(addLength(content?.length));
  // }, [dispatch, addLength, content]);

  return <>{content}</>;
};

export default FeaturedItem;
