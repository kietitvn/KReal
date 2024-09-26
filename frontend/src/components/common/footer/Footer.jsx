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
            Chúng tôi đang định hình lại cách bạn mua, bán và cho thuê. Bây giờ
            dễ dàng hơn để đến một nơi bạn yêu thích. Vì vậy, chúng ta hãy làm
            điều này, cùng nhau.
          </p>
        </div>
      </div>
      {/* End .col */}

      <div className="col-sm-6 col-md-6 col-lg-3 col-xl-3">
        <div className="footer_qlink_widget">
          <h4>Đường dẫn</h4>
          <ul className="list-unstyled">
            <li>
              <Link href="/">
                <a>Về chúng tôi</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a>Terms & Conditions</a>
              </Link>
            </li>
            {/* <li>
              <Link href="/">
                <a>User’s Guide</a>
              </Link>
            </li> */}
            <li>
              <Link href="/">
                <a>Hỗ trợ</a>
              </Link>
            </li>
            {/* <li>
              <Link href="/">
                <a>Press Info</a>
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
              <a href="mailto:Nhadatquan08@gmail.com">Nhadatquan08@gmail.com</a>
            </li>
            {/* <li>
              <a href="#">Collins Street West, Victoria</a>
            </li>
            <li>
              <a href="#">8007, Australia.</a>
            </li> */}
            <li>
              <a href="tel:+84582006633">0937.12.14.61</a>
            </li>
            {/* <li>
              <a href="tel:+4733378901">+1 246-345-0695</a>
            </li> */}
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
          <h4>Đăng ký</h4>
          <SubscribeForm />
        </div>
      </div>
    </>
  );
};

export default Footer;
