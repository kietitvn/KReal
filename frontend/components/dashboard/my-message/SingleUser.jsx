import Image from "next/image";

const SingleUser = () => {
  const singleUserConent = [
    {
      id: 1,
      img: "/assets/images/team/s1.jpg",
      name: "Vincent Porter",
      meta: `I'm going to office.`,
      unreadMessage: "2",
      unreadMessageClass: "m_notif",
      status: "online",
    },
    {
      id: 2,
      img: "/assets/images/team/s2.jpg",
      name: "Vincent Porter",
      meta: `I'm going to office.`,
      unreadMessage: "2",
      unreadMessageClass: "m_notif",
      status: "away",
    },
    {
      id: 3,
      img: "/assets/images/team/s3.jpg",
      name: "Vincent Porter",
      meta: `I'm going to office.`,
      unreadMessage: "",
      unreadMessageClass: "",
      status: "online",
    },
    {
      id: 4,
      img: "/assets/images/team/s4.jpg",
      name: "Vincent Porter",
      meta: `I'm going to office.`,
      unreadMessage: "",
      unreadMessageClass: "",
      status: "away",
    },
    {
      id: 5,
      img: "/assets/images/team/s5.jpg",
      name: "Vincent Porter",
      meta: `I'm going to office.`,
      unreadMessage: "",
      unreadMessageClass: "",
      status: "busy",
    },
    {
      id: 6,
      img: "/assets/images/team/s6.jpg",
      name: "Vincent Porter",
      meta: `I'm going to office.`,
      unreadMessage: "",
      unreadMessageClass: "",
      status: "online",
    },
    {
      id: 7,
      img: "/assets/images/team/s7.jpg",
      name: "Vincent Porter",
      meta: `I'm going to office.`,
      unreadMessage: "",
      unreadMessageClass: "",
      status: "busy",
    },
    {
      id: 8,
      img: "/assets/images/team/s8.jpg",
      name: "Vincent Porter",
      meta: `I'm going to office.`,
      unreadMessage: "",
      unreadMessageClass: "",
      status: "online",
    },
  ];
  return (
    <>
      {singleUserConent.map((user) => (
        <li className="contact" key={user.id}>
          <a href="#">
            <div className="wrap">
              <span className={`contact-status ${user.status}`}></span>
              <Image
                width={50}
                height={50}
                className="img-fluid"
                src={user.img}
                alt="s1.jpg"
              />
              <div className="meta">
                <h5 className="name">{user.name}</h5>
                <p className="preview">{user.meta}</p>
              </div>
              <div className={user.unreadMessageClass}>
                {user.unreadMessage}
              </div>
            </div>
          </a>
        </li>
      ))}
    </>
  );
};

export default SingleUser;
