import Link from "next/link";
import Slider from "react-slick";
import agentsTeam from "../../data/agents";

const Team = () => {
  const settings = {
    dots: false,
    arrows: true,
    slidesToShow: 4,
    slidesToScroll: 3,
    autoplay: false,
    speed: 1200,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 520,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 3,
        },
      },
    ],
  };

  return (
    <Slider {...settings} arrows={true}>
      {agentsTeam.slice(0, 6).map((item) => (
        <div className="item" key={item.id}>
          <div className="team_member home4">
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
              <p>{item.type}</p>
            </div>
            {/* End .details */}
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default Team;
