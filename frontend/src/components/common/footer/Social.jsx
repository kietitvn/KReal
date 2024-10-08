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
        <li className="list-inline-item">
          <a href="tel:0937121461">0937.12.14.61</a>
        </li>
      )}
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
          href={"https://zalo.me/0937121461"}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="https://img.icons8.com/cute-clipart/48/null/zalo.png" />
        </a>
      </li>
    </div>
  );
};

export default Social;
