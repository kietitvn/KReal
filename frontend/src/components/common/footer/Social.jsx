const Social = ({ showPhone = true }) => {
  // const socialContent = [
  //   { id: 1, liveLink: "https://www.facebook.com/", icon: "fa-facebook" },
  // ];
  return (
    <>
      {/* {socialContent.map((item) => (
        <li className="list-inline-item" key={item.id}>
          <a href={item.liveLink} target="_blank" rel="noopener noreferrer">
            <i className={`fa ${item.icon}`}></i>
          </a>
        </li>
      ))} */}
      {showPhone && (
        <li className="list-inline-item">
          <a href="tel:0582006633">0582.00.66.33</a>
        </li>
      )}
      <li className="list-inline-item">
        <a
          href={"https://www.facebook.com/muabannhaquan08"}
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
    </>
  );
};

export default Social;
