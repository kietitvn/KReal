
'use client'

import Link from "next/link";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addAgentItemLength } from "../../../features/agent/agentSlice";
import agents from "../../../data/agents";
import Image from "next/image";

const Team = () => {
  const { name, category, city, listen } =
    useSelector((state) => state.agent) || {};
  const dispatch = useDispatch();

  // name
  const nameHandler = (item) =>
    item.name.toLowerCase().includes(name.toLowerCase());

  // category
  const categoryHandler = (item) =>
    item.type.toLowerCase().includes(category.toLowerCase());

  // city
  const cityHandler = (item) =>
    item.city.toLowerCase().includes(city.toLowerCase());

  let content = agents
    .slice(7, 16)
    .filter(nameHandler)
    .filter(categoryHandler)
    .filter(cityHandler)
    .filter((item) =>
      item.noOfListings.toLowerCase().includes(listen.toLowerCase())
    )
    .map((item) => (
      <div className="col-md-6 col-lg-6" key={item.id}>
        <div className="feat_property home7 agent">
          <div className="thumb">
            <Link href={`/agent-details/${item.id}`}>
              <Image
                width={342}
                height={262}
                className="img-whp w-100 h-100 cover"
                src={item.img}
                alt="bh1.jpg"
              />
            </Link>
            <div className="thmb_cntnt">
              <ul className="tag mb0">
                <li className="list-inline-item dn"></li>
                <li className="list-inline-item">
                  <a href="#">{item.noOfListings} Listings</a>
                </li>
              </ul>
            </div>
          </div>
          {/* End .thumb */}

          <div className="details">
            <div className="tc_content">
              <h4>
                <Link href={`/agent-details/${item.id}`}>{item.name}</Link>
              </h4>
              <p className="text-thm">{item.type}</p>
              <ul className="prop_details mb0">
                <li>
                  <a href="#">Office: {item.office}</a>
                </li>
                <li>
                  <a href="#">Mobile: {item.mobile}</a>
                </li>
                <li>
                  <a href="#">Fax: {item.fax}</a>
                </li>
                <li>
                  <a href="#">Email: {item.email}</a>
                </li>
              </ul>
            </div>
            {/* End .tc_content */}

            <div className="fp_footer">
              <ul className="fp_meta float-start mb0">
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
              <div className="fp_pdate float-end ">
                <Link href={`/agent-details/${item.id}`} className="text-thm">
                  View My Listings <i className="fa fa-angle-right"></i>
                </Link>
              </div>
            </div>
            {/* End .fp_footer */}
          </div>
        </div>
      </div>
    ));

  // agent item length
  useEffect(() => {
    dispatch(addAgentItemLength(content.length));
  }, [dispatch, content]);

  return <>{content}</>;
};

export default Team;
