import Link from "next/link";

import properties from "../../../data/properties";

const FavouritProducts = () => {
  let content = properties?.slice(0, 4)?.map((item) => (
    <div className="feat_property list favorite_page" key={item.id}>
      <div className="thumb">
        <img className="img-whp cover" src={item.img} alt="fp1.jpg" />
        <div className="thmb_cntnt">
          <ul className="tag mb0">
            <li className="list-inline-item">
              <a href="#">For Rent</a>
            </li>
          </ul>
        </div>
      </div>
      {/* End .thumb */}

      <div className="details">
        <div className="tc_content">
          <h4>
            {" "}
            <Link href={`/listing-details-v1/${item.id}`}>
              <a>{item.title}</a>
            </Link>
          </h4>
          <p>
            <span className="flaticon-placeholder"></span> {item.location}
          </p>
          <a className="fp_price text-thm" href="#">
            ${item.price}
            <small>/mo</small>
          </a>
        </div>
      </div>
      {/* End details */}

      <ul className="view_edit_delete_list mb0 mt35">
        <li
          className="list-inline-item"
          data-toggle="tooltip"
          data-placement="top"
          title="Delete"
        >
          <a href="#">
            <span className="flaticon-garbage"></span>
          </a>
        </li>
      </ul>
      {/* view_edit_delete_list */}
    </div>
  ));

  return <>{content}</>;
};

export default FavouritProducts;
