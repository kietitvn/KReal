import Link from "next/link";

const TermsCondions = () => {
  const termsContent = [
    {
      id: 1,
      title: "Chấp nhận điều khoản",
      text: [`Bằng việc truy cập và sử dụng website/dịch vụ của NHÀ PHỐ 139, bạn đồng ý bị ràng buộc bởi các điều khoản và điều kiện dưới đây. Nếu bạn không đồng ý, vui lòng không sử dụng dịch vụ.`],
    },
    {
      id: 2,
      title: "Phạm vi dịch vụ",
      text: [
        `NHÀ PHỐ 139 cung cấp các dịch vụ liên quan đến:`,
        `Mua bán, ký gửi và cho thuê bất động sản`,
        `Tư vấn pháp lý, đăng bộ, chuyển nhượng`,
        `Cập nhật thông tin thị trường và hỗ trợ khách hàng cá nhân/doanh nghiệp`,
        `Chúng tôi không chịu trách nhiệm pháp lý cho các giao dịch diễn ra ngoài hệ thống hoặc không được xác nhận qua kênh chính thức.`
      ]
    },
    {
      id: 3,
      title: "Trách nhiệm của người dùng",
      text: [
        `Người dùng có trách nhiệm:`,
        `Cung cấp thông tin trung thực, chính xác khi sử dụng dịch vụ`,
        `Không đăng tải nội dung vi phạm pháp luật, trái đạo đức, hoặc làm ảnh hưởng đến uy tín của NHÀ PHỐ 139`,
        `Tuân thủ các quy định pháp luật hiện hành liên quan đến giao dịch bất động sản`
      ]
    },
    {
      id: 4,
      title: "Thông tin tài sản và pháp lý",
      text: [
        `Chúng tôi nỗ lực kiểm duyệt và xác minh thông tin bất động sản đăng tải. Tuy nhiên, người dùng cần kiểm tra kỹ lưỡng các yếu tố pháp lý trước khi giao dịch chính thức. NHÀ PHỐ 139 không chịu trách nhiệm cho thiệt hại phát sinh do thông tin không chính xác do bên thứ ba cung cấp.`,
      ]
    },
    {
      id: 5,
      title: "Bảo mật thông tin",
      text: [
        `Thông tin cá nhân của người dùng được chúng tôi bảo vệ nghiêm ngặt theo chính sách bảo mật riêng. Chúng tôi không chia sẻ thông tin cho bên thứ ba nếu không có sự đồng ý của bạn, trừ khi pháp luật yêu cầu.`,
      ]
    },
    {
      id: 6,
      title: "Quyền sở hữu nội dung",
      text: [
        `Tất cả nội dung trên website (văn bản, hình ảnh, dữ liệu, thiết kế) thuộc quyền sở hữu của NHÀ PHỐ 139. Việc sao chép, sử dụng lại mà không được sự đồng ý bằng văn bản là vi phạm bản quyền.`,
      ]
    },
    {
      id: 7,
      title: "Thay đổi điều khoản",
      text: [
        `NHÀ PHỐ 139 có quyền thay đổi các điều khoản này bất kỳ lúc nào. Phiên bản cập nhật sẽ được đăng tải trên website và có hiệu lực ngay khi công bố.`,
      ]
    },
    {
      id: 8,
      title: "Liên hệ",
      text: [
        `Mọi thắc mắc hoặc yêu cầu liên quan đến Điều khoản & Điều kiện, vui lòng liên hệ:`,
        `Hotline: 0937121461`
      ]
    }
  ];

  // const navigationList = [
  //   { id: 1, routeLink: "#", name: "Welcome Text" },
  //   { id: 2, routeLink: "#", name: "Our Terms" },
  //   { id: 3, routeLink: "#", name: "Conditions" },
  //   { id: 4, routeLink: "#", name: "Your Privacy" },
  //   { id: 5, routeLink: "#", name: "Informations We Collect" },
  // ];

  return (
    <div className="row">
      <div className="col-lg-8 col-xl-8">
        <div className="terms_condition_grid">
          {termsContent.map((item) => (
            <section className="scroll-margin-top: 80px" id={item.id} key={item.id}>
              <h4>{`${item.id}. ${item.title}`}</h4>
              <ol>
                {item.text.map((textItem) => (
                  <li key={textItem}>{textItem}</li>
                ))}
              </ol>
            </section>
          ))}
          <h4>Bằng việc tiếp tục sử dụng dịch vụ, bạn đồng ý với toàn bộ điều khoản nêu trên</h4>
        </div>
      </div>
      {/* End .col */}

      <div className="col-lg-4 col-xl-4">
        <div className="terms_condition_widget">
          <h4 className="title">Navigation</h4>
          <div className="widget_list">
            <ul className="list_details">
              {termsContent.map((item) => (
                <li key={item.id}>
                  <Link href={`#${item.id}`}>
                    <i className="fa fa-caret-right mr10"></i>
                    {`${item.id}. ${item.title}`}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsCondions;
