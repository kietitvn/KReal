import Link from "next/link";
import Slider from "react-slick";
import agentsTeam from "../../data/agents";

const AgentsTeam = () => {
  const settings = {
    dots: false,
    arrows: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: false,
    speed: 1200,
    responsive: [
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
        },
      },

      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 520,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <>
      <Slider {...settings} arrows={true}>
        {agentsTeam.slice(0, 7).map((item) => (
          <div className="col-sm-6 col-md-4 col-lg-4 col-xl-2" key={item.id}>
            <div className="our_agent">
              <div className="thumb">
                <img className="img-fluid w100" src={item.img} alt="5.jpg" />
                <div className="overylay">
                  <ul className="social_icon">
                    {item.socialList.map((social, i) => (
                      <li className="list-inline-item" key={i}>
                        <a
                          href={social.liveLink}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <i className={`fa ${social.icon}`}></i>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              {/* End .thumb */}

              <div className="details">
                <h4>
                  <Link href={`/agent-details/${item.id}`}>
                    <a>{item.name}</a>
                  </Link>
                </h4>
                <p>
                  {item.type}
                  <a className="float-end" href="#">
                    {item.ratings} <i className="fa fa-star color-golden"></i>
                  </a>
                </p>
              </div>
              {/* End .details */}
            </div>
          </div>
        ))}
      </Slider>
    </>
  );
};

export default AgentsTeam;
