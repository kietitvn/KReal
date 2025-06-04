'use client'; // Add this at the top of the file
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { resetFilter } from "../../features/properties/propertiesSlice";
import CopyrightFooter from "../common/footer/CopyrightFooter";
import Footer from "../common/footer/Footer";
import MobileMenu from "../common/header/MobileMenu";
import PopupSignInUp from "../common/PopupSignInUp";
import FeaturedProperties from "./FeaturedProperties";
import FindProperties from "./FindProperties";
import Header from "./Header";
import Hero from "./Hero";
import LookingItem from "./LookingItem";

const Index = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const onClickHandle = (e) => {
    dispatch(resetFilter());
    e.preventDefault();
    router.push("/find");
  }
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
                <h2>Những bất động sản tiện nghi, đáng sống</h2>
                <p>Được tuyển chọn kỹ lưỡng bởi đội ngũ tận tâm của chúng tôi{" "}
                  <div className="float-end">
                    <button className="btn" onClick={onClickHandle}>Xem tất cả</button>
                    <span className="flaticon-next"></span>
                  </div>
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
      {/* <section className="you-looking-for">
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
      </section> */}

      {/* <!-- Property Cities --> */}
      <section id="property-city" className="property-city mt30">
        <div className="container">
          <div className="row features_row">
            <LookingItem />
          </div>

          <div className="row">
            <div className="col-lg-6 offset-lg-3">
              <div className="main-title text-center mb0">
                <h3>Tìm bất động sản theo phường – Quận 8</h3>
              </div>
              <div className="main-title">
                <p>
                Quận 8 là quận nội thành ven đô, nằm ở phía Tây Nam TP.HCM, với diện tích khoảng <b>1.917 ha</b>, trong đó hơn <b>200 ha</b> vẫn là đất nông nghiệp.
                </p>
                <p>
                  Khu vực này nổi bật với <b>hệ thống 23 kênh rạch</b> đan xen, tạo lợi thế cho giao thông đường thủy và phát triển kho bãi, cảng vận.
                </p>
                <p>
                  Quận 8 còn sở hữu <b>46 cây cầu lớn nhỏ</b>, bao gồm những cây cầu nổi bật như <b>Chữ Y, Nhị Thiên Đường và Nguyễn Tri Phương</b>, góp phần kết nối giao thông linh hoạt trong toàn khu vực.
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
      {/* <section className="modern-apertment pt100 pb90">
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
      </section> */}

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
      {/* <section className="our-blog bb1 pb30">
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
      </section> */}

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

export default Index;
