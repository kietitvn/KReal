import Link from "next/link";
import blogs from "../../data/blogs";

const Blogs = () => {
  return (
    <>
      {blogs.slice(0, 3).map((item) => (
        <div className="col-md-6 col-lg-4 col-xl-4" key={item.id}>
          <div className="for_blog feat_property">
            <div className="thumb">
              <Link href={`/blog-details/${item.id}`}>
                <a>
                  <img className="img-whp" src={item.img} alt="bh1.jpg" />
                </a>
              </Link>
            </div>
            <div className="details">
              <div className="tc_content">
                <p className="text-thm">{item.postMeta}</p>
                <h4>
                  <Link href={`/blog-details/${item.id}`}>
                    <a>{item.title}</a>
                  </Link>
                </h4>
              </div>
              <div className="fp_footer">
                <ul className="fp_meta float-start mb0">
                  <li className="list-inline-item">
                    <Link href="/agent-v2">
                      <a>
                        <img src={item.posterAvatar} alt="pposter1.png" />
                      </a>
                    </Link>
                  </li>
                  <li className="list-inline-item">
                    <Link href="/agent-v2">
                      <a>{item.posterName}</a>
                    </Link>
                  </li>
                </ul>
                <a className="fp_pdate float-end" href="#">
                  {item.postedDate}
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Blogs;
