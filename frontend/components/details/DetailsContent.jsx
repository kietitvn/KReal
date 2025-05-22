import PropertyDescriptions from "../common/listing-details/PropertyDescriptions";
import PropertyFeatures from "../common/listing-details/PropertyFeatures";
import PropertyItem from "../common/listing-details/PropertyItem";

const DetailsContent = (props) => {
  return (
    <>
      <div className="listing_single_description">
        <div className="lsd_list">
          <PropertyItem {...props} />
        </div>
        {/* End .lsd_list */}

        <h4 className="mb30">Mô tả</h4>
        <PropertyDescriptions description={props?.attributes?.description} />
      </div>
      {/* End .listing_single_description */}

      {/* <div className="additional_details">
        <div className="row">
          <div className="col-lg-12">
            <h4 className="mb15">Chi tiết</h4>
          </div>
          <PropertyDetails {...props}/>
        </div>
      </div> */}
      {/* End .additional_details */}

      {/* <div className="additional_details">
        <div className="row">
          <div className="col-lg-12">
            <h4 className="mb15">Additional details</h4>
          </div>
          <AdditionalDetails />
        </div>
      </div> */}
      {/* End .additional_details */}

      {/* <div className="property_attachment_area">
        <h4 className="mb30">Property Attachments</h4>
        <div className="iba_container style2">
          <Attachments />
        </div>
      </div> */}
      {/* End .property_attachment_area */}

      {props?.attributes?.feature_ids.data.length > 0 && (
        <div className="application_statics mt30">
          <div className="row">
            <div className="col-lg-12">
              <h4 className="mb10">Tiện ích</h4>
            </div>
            {/* End .col */}

            <PropertyFeatures features={props?.attributes?.feature_ids} />
          </div>
        </div>
      )}
      {/* End .feature_area */}

      {/* <div className="application_statics mt30">
        <h4 className="mb30">
          Vị trí
          <small className="float-end">
            1421 San Pedro St, Los Angeles, CA 90015
          </small>
        </h4>
        <div className="property_video p0">
          <PropertyLocation />
        </div>
      </div> */}
      {/* End .location_area */}

      {/* <div className="application_statics mt30">
        <h4 className="mb30">Floor plans</h4>
        <div className="faq_according style2">
          <FloorPlans />
        </div>
      </div> */}
      {/* End .floor_plane */}

      {/* <div className="shop_single_tab_content style2 mt30">
        <PropertyVideo />
      </div> */}
      {/* End property-video  */}

      {/* <div className="walkscore_area mt30">
        <WalkScore />
      </div> */}
      {/* End walkscore_area */}

      {/* <div className="whats_nearby mt30">
        <h4 className="mb10">What&apos;s Nearby</h4>
        <WhatsNearby />
      </div> */}
      {/* End what's nearby area */}

      {/* <div className="product_single_content">
        <div className="mbp_pagination_comments mt30">
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
      </div> */}
      {/* End review and comment area area */}
    </>
  );
};

export default DetailsContent;
