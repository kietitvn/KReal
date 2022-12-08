import Team from "../agent-view/agent-v2/Team";
import Comments from "../blog-details/Comments";
import Ratings from "../blog-details/Ratings";
import ReviewBox from "../blog-details/ReviewBox";
import DescriptionsText from "./DescriptionsText";
import Listings from "./Listings";

const TabDetailsContent = () => {
  return (
    <>
      <ul className="nav nav-tabs" id="myTab" role="tablist">
        <li className="nav-item">
          <a
            className="nav-link active"
            data-bs-toggle="tab"
            href="#description"
            role="tab"
            aria-controls="description"
            aria-selected="true"
          >
            Description
          </a>
        </li>
        {/* End Description tab */}

        <li className="nav-item">
          <a
            className="nav-link"
            data-bs-toggle="tab"
            href="#listing"
            role="tab"
            aria-controls="listing"
            aria-selected="false"
          >
            Listing
          </a>
        </li>
        {/* End Listing tab */}

        <li className="nav-item">
          <a
            className="nav-link"
            data-bs-toggle="tab"
            href="#agetns"
            role="tab"
            aria-controls="listing"
            aria-selected="false"
          >
            Agents
          </a>
        </li>
        {/* End Listing tab */}

        <li className="nav-item">
          <a
            className="nav-link"
            data-bs-toggle="tab"
            href="#review"
            role="tab"
            aria-controls="review"
            aria-selected="false"
          >
            Reviews
          </a>
        </li>
        {/* End Reviews tab */}
      </ul>
      {/* End .nav nav-tabs */}

      <div className="tab-content" id="myTabContent2">
        <div
          className="tab-pane fade show active"
          id="description"
          role="tabpanel"
        >
          <div className="product_single_content">
            <div className="mbp_pagination_comments">
              <div className="mbp_first media">
                <div className="media-body agent-desc">
                  <DescriptionsText />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Description details content*/}

        <div
          className="tab-pane fade row pl15 pl0-1199 pr15 pr0-1199"
          id="listing"
          role="tabpanel"
        >
          <Listings />
        </div>
        {/* End Listing details content*/}

        <div
          className="tab-pane fade row pl15 pl0-1199 pr15 pr0-1199"
          id="agetns"
          role="tabpanel"
        >
          <div className="row  mt30">
            <Team />
          </div>
        </div>
        {/* End Listing details content*/}

        <div className="tab-pane fade" id="review" role="tabpanel">
          <div className="product_single_content">
            <div className="mbp_pagination_comments">
              <div className="total_review">
                <h4>896 Reviews</h4>
                <ul className="review_star_list mb0 pl10">
                  <Ratings />
                </ul>
                <a className="tr_outoff pl10" href="#">
                  ( 4.5 out of 5 )
                </a>
                <a className="write_review float-end fn-xsd" href="#">
                  Write a Review
                </a>
              </div>
              {/* End .total_review */}
              <Comments />
              <div className="custom_hr"></div>

              <div className="mbp_comment_form style2">
                <h4>Write a Review</h4>
                <ul className="review_star">
                  <li className="list-inline-item">
                    <span className="sspd_review">
                      <ul>
                        <Ratings />
                      </ul>
                    </span>
                  </li>
                  <li className="list-inline-item pr15">
                    <p>Your Rating & Review</p>
                  </li>
                </ul>
                <ReviewBox />
              </div>
            </div>
          </div>
        </div>
        {/* End Reviews details content*/}
      </div>
      {/* End tab-content */}
    </>
  );
};

export default TabDetailsContent;
