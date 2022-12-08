import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Gallery, Item } from "react-photoswipe-gallery";
import "photoswipe/dist/photoswipe.css";
import CopyrightFooter from "../../components/common/footer/CopyrightFooter";
import Footer from "../../components/common/footer/Footer";
import Header from "../../components/common/header/DefaultHeader";
import MobileMenu from "../../components/common/header/MobileMenu";
import PopupSignInUp from "../../components/common/PopupSignInUp";
import properties from "../../data/properties";
import DetailsContent from "../../components/listing-details-v1/DetailsContent";
import Sidebar from "../../components/listing-details-v1/Sidebar";

const ListingDynamicDetailsV2 = () => {
  const router = useRouter();
  const [property, setProperty] = useState({});
  const id = router.query.id;

  useEffect(() => {
    if (!id) <h1>Loading...</h1>;
    else setProperty(properties?.find((item) => item.id == id));

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
      <section className="single_page_listing_style p0 mt85 md-mt0">
        <div className="container-fluid p0">
          <Gallery>
            <div className="row g-0" key={property?.id}>
              <div className="col-md-6 col-lg-6 ">
                <div className="row g-0">
                  <div className="col-lg-12 ">
                    <div className="spls_style_one pr1 1px position-relative">
                      <Item
                        original={property?.img}
                        thumbnail={property?.img}
                        width={752}
                        height={450}
                      >
                        {({ ref, open }) => (
                          <>
                            <div className="single_property_title position-static">
                              <div
                                className="upload_btn popup-img"
                                ref={ref}
                                onClick={open}
                              >
                                <span className="flaticon-photo-camera"></span>{" "}
                                View Photos
                              </div>
                            </div>
                            <img
                              className="img-fluid w100 cover lds-2"
                              src={property.img}
                              alt={property.img}
                            />
                          </>
                        )}
                      </Item>
                    </div>
                  </div>
                </div>
              </div>
              {/* End .col */}

              <div className="col-md-6 col-lg-6 position-relative">
                <div className="row g-0 gx-0">
                  {property?.imgList2?.map((val, i) => (
                    <div className="col-6 col-lg-6 " key={i}>
                      <div className="spls_style_one">
                        <Item
                          original={val}
                          thumbnail={val}
                          width={752}
                          height={450}
                        >
                          {({ ref, open }) => (
                            <div role="button" ref={ref} onClick={open}>
                              <img
                                className="img-fluid w100"
                                src={val}
                                alt={val}
                              />
                            </div>
                          )}
                        </Item>
                      </div>
                    </div>
                  ))}
                </div>
                {/* End .row */}

                <div className="single_property_social_share">
                  <div className="spss style2 mt10 text-right tal-400">
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
                </div>
                {/* End .single_property_social_share */}
              </div>
              {/* End .col */}
            </div>
          </Gallery>
        </div>
      </section>

      {/* <!-- Agent Single Grid View --> */}
      <section className="our-agent-single bgc-f7 pb30-991">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-lg-8">
              <div className="listing_single_description2 mt30-767 mb30-767">
                <div className="single_property_title">
                  <h2>{property?.title}</h2>
                  <p>{property?.location}</p>
                </div>
                <div className="single_property_social_share style2 static-title">
                  <div className="price">
                    <h2>
                      ${property.price}
                      <small>/mo</small>
                    </h2>
                  </div>
                </div>
              </div>
              {/* End .listing_single_description2 */}

              <DetailsContent />
            </div>
            {/* End details content .col-lg-8 */}

            <div className="col-lg-4 col-xl-4">
              <Sidebar />
            </div>
            {/* End sidebar content .col-lg-4 */}
          </div>
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

export default ListingDynamicDetailsV2;
