const PropertyFeatures = (props) => {
  return (
    <>
      {props?.features?.data.map((item) => (
        <div className="col-sm-6 col-md-6 col-lg-4" key={item.id}>
          <ul className="order_list list-inline-item">
            <li>
              <span className="flaticon-tick"></span>
              {item.attributes.name}
            </li>
          </ul>
        </div>
      ))}
    </>
  );
};

export default PropertyFeatures;
