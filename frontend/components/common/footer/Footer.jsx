import Link from "next/link";
import Social from "./Social";
import SubscribeForm from "./SubscribeForm";

const Footer = () => {
  return (
    <>
      <div className="col-sm-6 col-md-6 col-lg-3 col-xl-3 pr0 pl0">
        <div className="footer_about_widget">
          <h4>Thông tin trang</h4>
          <p>
            Chúng tôi đang định hình lại cách bạn <b>mua, bán và cho thuê</b> bất động sản – theo hướng <b>dễ dàng hơn, minh bạch hơn và đáng tin cậy hơn</b>.
          </p>
          <p>
            Mỗi sản phẩm đều được <b>tuyển chọn kỹ lưỡng</b>, pháp lý rõ ràng, dịch vụ tận tâm.
          </p>
          <p>
            Dù bạn là người mua nhà đầu tiên hay nhà đầu tư kinh nghiệm, chúng tôi đồng hành cùng bạn đến nơi <b>an cư đáng sống</b>.
          </p>
        </div>
      </div>
      {/* End .col */}

      <div className="col-sm-6 col-md-6 col-lg-3 col-xl-3">
        <div className="footer_qlink_widget">
          <h4>Đường dẫn</h4>
          <ul className="list-unstyled">
            <li>
              <Link href="/about-us">Về chúng tôi</Link>
            </li>
            <li>
              <Link href="/terms-conditions">Điều khoản & Điều kiện</Link>
            </li>
            {/* <li>
              <Link href="/">
                <a>User’s Guide
              </Link>
            </li> */}
            {/* <li>
              <Link href="/">Hỗ trợ</Link>
            </li> */}
            {/* <li>
              <Link href="/">
                <a>Press Info
              </Link>
            </li> */}
          </ul>
        </div>
      </div>
      {/* End .col */}

      <div className="col-sm-6 col-md-6 col-lg-3 col-xl-3">
        <div className="footer_contact_widget">
          <h4>Liên hệ</h4>
          <ul className="list-unstyled">
            <li>
              <a href="tel:+84937121461">0937.12.14.61 (Ms.Kiều)</a>
            </li>
            <li>
              <a href="tel:+84908727618">0908.72.76.18 (Mr.Lộc)</a>
            </li>    
          </ul>
        </div>
      </div>
      {/* End .col */}

      <div className="col-sm-6 col-md-6 col-lg-3 col-xl-3">
        <div className="footer_social_widget">
          <h4>Theo dõi</h4>
          <ul className="mb30">
            <Social showPhone={false} />
          </ul>
          {/* <h4>Đăng ký</h4>
          <SubscribeForm /> */}
        </div>
      </div>
    </>
  );
};

export default Footer;
