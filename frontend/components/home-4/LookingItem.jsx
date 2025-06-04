import find from "../../data/find";

const LookingItem = () => {
  return (
    <>
      {find.map((item) => (
        <li className="list-inline-item" key={item.id}>
          <div className="icon">
            <span className={item.icon}></span>
            <p>{item.title}</p>
          </div>
        </li>
      ))}
    </>
  );
};

export default LookingItem;
