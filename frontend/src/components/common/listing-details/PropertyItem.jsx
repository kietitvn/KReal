const PropertyItem = (props) => {
  return (
    <ul className="mb0">
      <li className="list-inline-item">
        <a href="#">{props?.attributes?.categoryID?.data?.attributes?.name}</a>
      </li>
      <li className="list-inline-item">
        <a href="#">{`Pháp lý: ${props?.attributes?.legal}`}</a>
      </li>
      <li className="list-inline-item">
        <a href="#">{`Hướng: ${props?.attributes?.direction}`}</a>
      </li>
      <li className="list-inline-item">
        <a href="#">{`Phòng ngủ: ${props?.attributes?.bedRoom}`}</a>
      </li>
      <li className="list-inline-item">
        <a href="#">{`Phòng tắm: ${props?.attributes?.bathRoom}`}</a>
      </li>
    </ul>
  );
};

export default PropertyItem;
