import Link from "next/link";
import agentsTeam from "../../data/agents";

const AgentsTeam = () => {
  return (
    <>
      {agentsTeam.slice(0, 6).map((item) => (
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
    </>
  );
};

export default AgentsTeam;
