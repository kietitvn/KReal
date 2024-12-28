const Social = ({ showPhone = true }) => {
  // const socialContent = [
  //   { id: 1, liveLink: "https://www.facebook.com/", icon: "fa-facebook" },
  // ];
  return (
    <div>
      {/* {socialContent.map((item) => (
        <li className="list-inline-item" key={item.id}>
          <a href={item.liveLink} target="_blank" rel="noopener noreferrer">
            <i className={`fa ${item.icon}`}></i>
          </a>
        </li>
      ))} */}
      {showPhone && (
        <>
          <div>
            <li className="list-inline-item">
              <a href="tel:+84937121461">0937.12.14.61 (Ms.Kiều)</a>
            </li>
          </div>
          <div>
            <li className="list-inline-item">
              <a href="tel:+84908727618">0908.72.76.18 (Mr.Lộc)</a>
            </li>
          </div>
        </>
      )}
      {!showPhone && (
        <div>
          <li className="list-inline-item">
            <a
              href={"https://www.facebook.com/kelli.nguyen88"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="https://img.icons8.com/cute-clipart/48/null/facebook-new.png" />
            </a>
          </li>
          <li className="list-inline-item">
            <a
              href={"https://zalo.me/0582006633"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="https://img.icons8.com/cute-clipart/48/null/zalo.png" />
            </a>
          </li>
        </div>
      )}
    </div>
  );
};

export default Social;
