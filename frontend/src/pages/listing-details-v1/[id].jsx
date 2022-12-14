import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Gallery, Item } from "react-photoswipe-gallery";
import "photoswipe/dist/photoswipe.css";
import CopyrightFooter from "../../components/common/footer/CopyrightFooter";
import Footer from "../../components/common/footer/Footer";
import Header from "../../components/common/header/DefaultHeader";
import MobileMenu from "../../components/common/header/MobileMenu";
import PopupSignInUp from "../../components/common/PopupSignInUp";
import DetailsContent from "../../components/listing-details-v1/DetailsContent";
import Sidebar from "../../components/listing-details-v1/Sidebar";
import { useSelector, useStore } from "react-redux";
import properties from "../../data/properties";
import { selectProducts } from "../../features/products/productsSlice";
import { doctien } from "../../utils/currency";

const ListingDynamicDetailsV1 = () => {
  const router = useRouter();
  const [product, setProduct] = useState({});
  const id = router.query.id;
  console.log("product:", product);
  const productData = useSelector(selectProducts);
  useEffect(() => {
    if (!id) <h1>Loading...</h1>;
    else {
      const product = productData?.products?.data?.find((f) => f.id == id);
      setProduct(product);
    }
    return () => {};
  }, [id]);

  return (
    <>
      {/* <!-- Main Header Nav --> */}
      <Header />

      {/* <!--  Mobile Menu --> */}
      <MobileMenu />

      {/* <!-- Modal --> */}
      <PopupSignInUp />

      {/* <!-- Listing Single Property --> */}
      <section className="listing-title-area mt85 md-mt0">
        <div className="container">
          <Gallery>
            <div className="row mb30">
              <div className="col-lg-7 col-xl-8">
                <div className="single_property_title mt30-767">
                  <h2>{product?.attributes?.name}</h2>
                  <p>{`${product?.attributes?.location?.address}, ${product?.attributes?.location?.ward}, ${product?.attributes?.location?.district}, ${product?.attributes?.location?.province}`}</p>
                </div>
              </div>
              <div className="col-lg-5 col-xl-4">
                <div className="single_property_social_share position-static transform-none">
                  <div className="price float-start fn-400">
                    <h2>
                      {doctien(product?.attributes?.price)}
                      <small>
                        {product?.attributes?.status === "Bán" ? "" : "/tháng"}
                      </small>
                    </h2>
                  </div>

                  <div className="spss style2 mt20 text-end tal-400">
                    <ul className="mb0">
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
                      <li className="list-inline-item">
                        <a href="#">
                          <span className="flaticon-share"></span>
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a href="#">
                          <span className="flaticon-printer"></span>
                        </a>
                      </li>
                    </ul>
                  </div>
                  {/* End activity and social sharing */}
                </div>
              </div>
            </div>
            {/* End .row */}

            <div className="row">
              <div className="col-sm-7 col-lg-8">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="spls_style_two mb30-520">
                      <Item
                        original={
                          process.env.baseUrl +
                          product?.attributes?.cover?.data?.attributes?.url
                        }
                        thumbnail={
                          process.env.baseUrl +
                          product?.attributes?.cover?.data?.attributes?.url
                        }
                        width={752}
                        height={450}
                      >
                        {({ ref, open }) => (
                          <div role="button" ref={ref} onClick={open}>
                            <img
                              className="img-fluid w100 cover lds-1"
                              src={
                                process.env.baseUrl +
                                product?.attributes?.cover?.data?.attributes
                                  ?.url
                              }
                              alt={
                                product?.attributes?.cover?.data?.attributes
                                  ?.alternativeText
                              }
                            />
                          </div>
                        )}
                      </Item>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-sm-5 col-lg-4">
                <div className="row">
                  {product?.attributes?.image?.data.map((val, i) => (
                    <div className="col-6" key={i}>
                      <div className="spls_style_two img-gallery-box mb24">
                        <Item
                          original={process.env.baseUrl + val.attributes?.url}
                          thumbnail={process.env.baseUrl + val.attributes?.url}
                          width={752}
                          height={450}
                        >
                          {({ ref, open }) => (
                            <div role="button" ref={ref} onClick={open}>
                              <img
                                className="img-fluid w100"
                                src={process.env.baseUrl + val.attributes?.url}
                                alt={val.attributes?.alternativeText}
                              />
                            </div>
                          )}
                        </Item>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            {/* End .row */}
          </Gallery>
        </div>
      </section>

      {/* <!-- Agent Single Grid View --> */}
      <section className="our-agent-single bgc-f7 pb30-991">
        <div className="container">
          {/* <div className="row"> */}
          {/* <div className="col-md-12 col-lg-8"> */}
          <DetailsContent {...product} />
          {/* </div> */}
          {/* End details content .col-lg-8 */}

          {/* <div className="col-lg-4 col-xl-4">
              <Sidebar />
            </div> */}
          {/* End sidebar content .col-lg-4 */}
          {/* </div> */}
          {/* End .row */}
        </div>
      </section>

      {/* <!-- Our Footer --> */}
      <section className="footer_one">
        <div className="container">
          <div className="row">
            <Footer />
          </div>
        </div>
      </section>

      {/* <!-- Our Footer Bottom Area --> */}
      <section className="footer_middle_area pt40 pb40">
        <div className="container">
          <CopyrightFooter />
        </div>
      </section>
    </>
  );
};

export default ListingDynamicDetailsV1;
