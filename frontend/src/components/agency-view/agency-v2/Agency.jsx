import Link from "next/link";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import agencyContent from "../../../data/agency";
import { addAgentItemLength } from "../../../features/agent/agentSlice";

const Agency = () => {
    const { listen } = useSelector((state) => state.agent) || {};
    const dispath = useDispatch();

    let content = agencyContent
        .slice(0, 6)
        .filter((item) =>
            item.noOfListings.toLowerCase().includes(listen.toLowerCase())
        )
        .map((item) => (
            <div className="col-lg-12" key={item.id}>
                <div className="feat_property list agency">
                    <div className="thumb">
                        <Link href={`/agency-details/${item.id}`}>
                            <a className="d-block mx-auto text-center">
                                <img
                                    className="img-fluid"
                                    src={item.img}
                                    alt="bh1.jpg"
                                />
                            </a>
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
                                <Link href={`/agency-details/${item.id}`}>
                                    <a>{item.name}</a>
                                </Link>
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
                                            <i
                                                className={`fa ${social.icon}`}
                                            ></i>
                                        </a>
                                    </li>
                                ))}
                            </ul>
                            <div className="fp_pdate float-end text-thm">
                                <Link href={`/agency-details/${item.id}`}>
                                    <a className="text-thm">
                                        View My Listings{" "}
                                        <i className="fa fa-angle-right"></i>
                                    </a>
                                </Link>
                            </div>
                        </div>
                        {/* End .fp_footer */}
                    </div>
                </div>
            </div>
        ));

    useEffect(() => {
        dispath(addAgentItemLength(content.length));
    }, [dispath, addAgentItemLength, content]);
    return <>{content}</>;
};

export default Agency;
