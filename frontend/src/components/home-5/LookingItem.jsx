import Link from "next/link";
import find from "../../data/find";

const LookingItem = () => {
  return (
    <>
      {find.map((item) => (
        <li className="list-inline-item" key={item.id}>
          <div className="icon_home5">
            <div className="icon">
              <Link href="/listing-grid-v1">
                <a>
                  <span className={item.icon}></span>
                  <p>{item.title}</p>
                </a>
              </Link>
            </div>
          </div>
        </li>
      ))}
    </>
  );
};

export default LookingItem;
