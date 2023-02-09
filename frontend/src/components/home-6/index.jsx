import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useGetCategoriesQuery } from "../../features/categories/categoriesApi";
import { loadCategories } from "../../features/categories/categoriesSlice";
import { useGetLocationsQuery } from "../../features/location/locationsApi";
import { loadLocations } from "../../features/location/locationsSlice";
import { pollingInterval } from "../../utils/const";
import Blogs from "../common/Blogs";
import CopyrightFooter from "../common/footer/CopyrightFooter";
import Footer from "../common/footer/Footer";
import MobileMenu from "../common/header/MobileMenu";
import PopupSignInUp from "../common/PopupSignInUp";
import FeaturedProperties from "./FeaturedProperties";
import FindProperties from "./FindProperties";
import Header from "./Header";
import Hero from "./Hero";
import LookingItem from "./LookingItem";

const index = () => {
  const { data, isSuccess } = useGetCategoriesQuery("Category", {
    pollingInterval: pollingInterval,
  });

  const {
    data: dataLocation,
    isSuccess: isSuccessLocation,
  } = useGetLocationsQuery("Location", {
    pollingInterval: pollingInterval,
  });

  const dispatch = useDispatch();

  if (isSuccess) {
    dispatch(loadCategories(data));
  }

  if (isSuccessLocation) {
    dispatch(loadLocations(dataLocation));
  }

  // useEffect(() => {
  //   if (!isLoading) {
  //     dispatch(loadCategories(data));
  //   }

  //   if (!isLoadingLocation) {
  //     dispatch(loadLocations(dataLocation));
  //   }
  //   return () => {};
  // }, [data || dataLocation]);

  return (
    <>
      {/* <!-- Main Header Nav --> */}
      <Header />

      {/* <!--  Mobile Menu --> */}
      <MobileMenu />

      {/* <!-- Modal --> */}
      <PopupSignInUp />

      {/* <!-- 6th Home Design --> */}
      <Hero />

      {/* <!-- Feature Properties --> */}
      <section id="feature-property" className="feature-property-home6">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="main-title mb40">
                <h2>Những BĐS có nhiều tiện ích</h2>
                <p>
                  BĐS được lựa chọn cẩn thận bởi đội ngũ của chúng tôi.
                  <a className="float-end" href="/listing-grid-v1">
                    Danh sách <span className="flaticon-next"></span>
                  </a>
                </p>
              </div>
            </div>
            {/* End .col */}
          </div>
          {/* End .row */}
        </div>
        {/* End .container */}
        <div className="feature_property_home6_slider ">
          <div className="container ml--xxl-0">
            <div className="gutter-x15">
              <FeaturedProperties />
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Whatare you looking for --> */}
      <section className="you-looking-for">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 offset-lg-3">
              <div className="main-title text-center mb30">
                <h2>Bạn đang tìm loại BĐS nào?</h2>
                <p>Chúng tôi cung cấp mọi loại hình BĐS.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Property Cities --> */}
      <section id="property-city" className="property-city pb30">
        <div className="container">
          <div className="row features_row">
            <LookingItem />
          </div>

          <div className="row">
            <div className="col-lg-6 offset-lg-3">
              <div className="main-title text-center">
                <h2>Tìm BĐS theo phường ở quận 8</h2>
                <p>
                  Quận 8 là một quận nội thành, nhưng là quận nội thành ven đô
                  nằm về phía Tây nam của Thành phố Hồ Chí Minh có diện tích tự
                  nhiên 1.917 ha, hiện nay diện tích đất nông nghiệp còn hơn 200
                  ha. Bị chia cắt bởi 23 kênh rạch dọc ngang, thuận tiện cho
                  giao thông đường thủy, có hệ thống bến cảng và kho tàng vào
                  loại lớn nhất Thành phố hình thành từ đầu thế kỷ XX và 46
                  chiếc cầu lớn nhỏ, trong đó có những cây cầu lớn như cầu Chữ
                  Y, Nhị Thiên Đường, cầu Nguyễn Tri Phương.
                </p>
              </div>
            </div>
          </div>
          {/* End .row */}

          <div className="row">
            <FindProperties />
          </div>
          {/* End .row */}
        </div>
      </section>

      {/* <!-- Modern Apertment --> */}
      <section className="modern-apertment pt100 pb90">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="modern_apertment mt30">
                <h2 className="title">Modern Apartment</h2>
                <h4 className="subtitle">$79 at night</h4>
                <p>
                  I am text block. Click edit button to change this text. Lorem
                  ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
                <a className="btn booking_btn btn-thm" href="#">
                  Book Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Our Agents --> */}
      {/* <section id="our-agents" className="our-agents pt40 pb15">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="main-title">
                <h2>Our Agents</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
                  <a className="float-end" href="#">
                    View All <span className="flaticon-next"></span>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="our_agents_home6_slider ">
          <div className="container ml--xxl-0">
            <div className="gutter-x15">
              <AgentsTeam />
            </div>
          </div>
        </div>
      </section> */}

      {/* <!-- Our Blog --> */}
      <section className="our-blog bb1 pb30">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 offset-lg-3">
              <div className="main-title text-center">
                <h2>Articles & Tips</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </div>
          </div>
          <div className="row">
            <Blogs />
          </div>
        </div>
      </section>

      {/* <!-- Our Partners --> */}
      {/* <section id="our-partners" className="our-partners">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 offset-lg-3">
              <div className="main-title text-center">
                <h2>Our Partners</h2>
                <p>We only work with the best companies around the globe</p>
              </div>
            </div>
          </div>
          <div className="row">
            <Partners />
          </div>
        </div>
      </section> */}

      {/* <!-- Our Footer --> */}
      <section className="footer_one home6 bgc-f7">
        <div className="container">
          <div className="row">
            <Footer />
          </div>
        </div>
      </section>

      {/* <!-- Our Footer Bottom Area --> */}
      <section className="footer_middle_area home6 pt30 pb30">
        <div className="container">
          <CopyrightFooter />
        </div>
      </section>
    </>
  );
};

export default index;
