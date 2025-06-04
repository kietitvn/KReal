import Link from "next/link";
import comfortPlace from "../../data/comfortPlace";

const ComfortPlace = () => {
  return (
    <>
      {comfortPlace.map((item) => (
        <div className="col-sm-6 col-lg-3" key={item.id}>
          <Link
            href="/listing-grid-v5"
            className="icon_hvr_img_box image-1 d-block"
            style={{
              backgroundImage: `url(${item.bgImg})`,
            }}
          >
            <div className="overlay">
              <div className="icon">
                <span className={item.icon}></span>
              </div>
              <div className="details">
                <h4>{item.name}</h4>
                <p>{item.number} Listings</p>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </>
  );
};

export default ComfortPlace;
