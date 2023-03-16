import { useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
const PropertyDescriptions = (props) => {
  const [click, setClick] = useState(true);
  const handleClick = () => setClick(!click);
  return (
    <>
      <p>
        <ReactMarkdown remarkPlugins={[remarkGfm]}>
          {props?.description}
        </ReactMarkdown>
      </p>
      {/* <p className={click ? "gpara second_para white_goverlay mt10 mb10" : ""}>
        <ReactMarkdown remarkPlugins={[remarkGfm]}>
          {props?.description?.substring(0, 1000)}
        </ReactMarkdown>
      </p>
      <div className="collapse" id="collapseExample">
        <div className="card card-body">
          <p className="mt10 mb10">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
              {props?.description?.substring(1000, props?.description?.length)}
            </ReactMarkdown>
          </p>
        </div>
      </div> */}
      {/* <p className="overlay_close">
        <a
          className="text-thm fz14"
          data-bs-toggle="collapse"
          href="#collapseExample"
          role="button"
          aria-expanded="false"
          aria-controls="collapseExample"
          onClick={handleClick}
        >
          Show More <span className="flaticon-download-1 fz12"></span>
        </a>
      </p> */}
    </>
  );
};

export default PropertyDescriptions;
