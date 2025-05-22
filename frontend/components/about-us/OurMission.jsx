import Image from "next/image";
import PopupVideo from "../common/PopupVideo";

const OurMission = () => {
  // const missionContent = [
  //   {
  //     id: 1,
  //     icon: "flaticon-user",
  //     number: "80,123",
  //     meta: "Customers to date",
  //   },
  //   {
  //     id: 2,
  //     icon: "flaticon-home",
  //     number: "$74 Billion",
  //     meta: "In home sales",
  //   },
  //   {
  //     id: 3,
  //     icon: "flaticon-transfer",
  //     number: "$468 Million",
  //     meta: "In Savings",
  //   },
  // ];

  return (
    <>
      <div className="col-lg-8 col-xl-7">
        <div className="about_content">
          <p>
            <b>NHÀ PHỐ 139</b> là đơn vị chuyên nghiệp trong lĩnh vực <b>mua bán, ký gửi, cho thuê và tư vấn pháp lý bất động sản</b>, đặc biệt tập trung vào nhà phố, căn hộ và nhà đất tại TP.HCM.
            <br></br>Chúng tôi không chỉ kết nối người bán và người mua – mà kết nối <b>giấc mơ an cư với thực tế</b>, bằng sự <b>tận tâm, minh bạch và hiểu biết sâu sắc về thị trường</b>.
          </p>

          <h2>Sứ mệnh</h2>
          <p>
            Đồng hành cùng khách hàng trong từng bước giao dịch, từ tư vấn đến pháp lý – để mỗi thương vụ không chỉ thành công, mà còn <b>an toàn, dễ dàng và trọn vẹn</b>.
          </p>

          <h2>Tầm nhìn</h2>
          <p>
            Trở thành <b>thương hiệu bất động sản nhà phố uy tín hàng đầu tại TP.HCM</b>, nơi khách hàng luôn tìm thấy <b>niềm tin – sự an tâm – và giá trị thực</b>.
          </p>

          <h2>Giá trị cốt lõi</h2>
          <li><b>Tận tâm</b> trong từng quy trình, từng sản phẩm.</li>
          <li><b>Có tầm</b> trong chiến lược, thị trường và định hướng phát triển.</li>
          <li><b>Minh bạch</b> trong thông tin – rõ ràng trong pháp lý – chuẩn xác trong giao dịch.</li>
          <li><b>Đồng hành</b> lâu dài cùng khách hàng, không chỉ đến khi giao dịch kết thúc, mà cả sau đó.</li>

          {/* <ul className="ab_counting">
            {missionContent.map((item) => (
              <li className="list-inline-item" key={item.id}>
                <div className="about_counting">
                  <div className="icon">
                    <span className={`${item.icon}`}></span>
                  </div>
                  <div className="details">
                    <h3>{item.number}</h3>
                    <p>{item.meta}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul> */}
          {/* End .ab_counting */}
        </div>
      </div>
      {/* End .col */}

      <div className="col-lg-4 col-xl-5">
        <div className="about_thumb">
          <Image
            width={461}
            height={509}
            priority
            className="img-fluid w100 cover"
            src="/assets/images/about/1.jpg"
            alt="1.jpg"
          />
          <PopupVideo />
        </div>
      </div>
    </>
  );
};

export default OurMission;
