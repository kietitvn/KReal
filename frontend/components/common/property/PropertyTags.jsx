const PropertyTags = ({ tags }) => {
  return (
    <ul className="tag mb0">
      {tags.map((tag, i) => (
        <li className="list-inline-item" key={i}>
          <a href="#">{tag}</a>
        </li>
      ))}
    </ul>
  );
};

export default PropertyTags;