import Link from "next/link";
import blogContent from "../../data/blogs";

const Blog = () => {
  return (
    <>
      {blogContent.slice(0, 6).map((item) => (
        <div className="col-lg-6" key={item.id}>
          <div className="for_blog feat_property">
            <div className="thumb">
              <Link href={`/blog-details/${item.id}`}>
                <a>
                  <img className="img-whp" src={item.img} alt={item.img} />
                </a>
              </Link>
              <div className="blog_tag">{item.postMeta}</div>
            </div>
            {/* End .thumb */}

            <div className="details">
              <div className="tc_content">
                <h4 className="mb15">
                  <Link href={`/blog-details/${item.id}`}>
                    <a>{item.title}</a>
                  </Link>
                </h4>
                <ul className="bpg_meta mb10">
                  <li className="list-inline-item">
                    <a href="#">
                      <i className="flaticon-calendar"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#">{item.postedDate}</a>
                  </li>
                </ul>
                <p>{item.postDescriptions.slice(0, 65)}</p>
              </div>
              {/* End .tc_content */}

              <div className="fp_footer">
                <ul className="fp_meta float-start mb0">
                  <li className="list-inline-item">
                    <a href="#">
                      <img src={item.posterAvatar} alt={item.posterAvatar} />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#">{item.posterName}</a>
                  </li>
                </ul>
                <a className="fp_pdate float-end text-thm" href="#">
                  Read More <span className="flaticon-next"></span>
                </a>
              </div>
              {/* End fb_footer */}
            </div>
            {/* End .thumb */}
          </div>
        </div>
      ))}
    </>
  );
};

export default Blog;
