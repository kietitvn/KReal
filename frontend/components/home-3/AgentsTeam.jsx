import Link from "next/link";
import agentsTeam from "../../data/agents";
import Image from "next/image";

const AgentsTeam = () => {
  return (
    <>
      {agentsTeam.slice(0, 6).map((item) => (
        <div className="col-sm-6 col-md-4 col-lg-4 col-xl-2" key={item.id}>
          <div className="our_agent">
            <div className="thumb">
              <Image
                width={228}
                height={285}
                className="img-fluid w100 h-100 cover"
                src={item.img}
                alt="5.jpg"
              />
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
                <Link href={`/agent-details/${item.id}`}>{item.name}</Link>
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
