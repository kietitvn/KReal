const SignleChatboxReply = () => {
  const replyContent = [
    {
      id: 1,
      message: `Hello, John!`,
      reply: <></>,
    },
    {
      id: 2,
      message: `simply dummy text of the printing and typesetting industry. Lorem
      Ipsum has been the industry`,
      reply: (
        <>
          <div className="media reply first">
            <div className="media-body text-right">
              <div className="date_time">Today, 10:35</div>
              <p>Are we meeting today?</p>
            </div>
          </div>
        </>
      ),
    },
    {
      id: 3,
      message: `Let's go!`,
      reply: (
        <>
          <div className="media reply">
            <div className="media-body text-right">
              <div className="date_time">Today, 10:35</div>
              <p>The project finally complete! Let{`'`}s go to!</p>
            </div>
          </div>
        </>
      ),
    },
    {
      id: 4,
      message: `simply dummy text of the printing and typesetting industry. Lorem
      Ipsum has been the industry`,
      reply: <></>,
    },
    {
      id: 5,
      message: `Hello, John!`,
      reply: <></>,
    },
    {
      id: 6,
      message: `simply dummy text of the printing and typesetting industry. Lorem
      Ipsum has been the industry`,
      reply: (
        <>
          <div className="media reply first">
            <div className="media-body text-right">
              <div className="date_time">Today, 10:35</div>
              <p>Are we meeting today?</p>
            </div>
          </div>
        </>
      ),
    },
    {
      id: 7,
      message: `Hello, John!`,
      reply: (
        <>
          {" "}
          <div className="media reply">
            <div className="media-body text-right">
              <div className="date_time">Today, 10:35</div>
              <p>The project finally complete! Let{`'`}s go to!</p>
            </div>
          </div>
        </>
      ),
    },
    {
      id: 8,
      message: `simply dummy text of the printing and typesetting industry. Lorem
      Ipsum has been the industry`,
      reply: (
        <>
          <div className="media reply first">
            <div className="media-body text-right">
              <div className="date_time">Today, 10:35</div>
              <p>Are we meeting today?</p>
            </div>
          </div>
        </>
      ),
    },
    {
      id: 9,
      message: `Hello, John!`,
      reply: (
        <>
          {" "}
          <div className="media reply">
            <div className="media-body text-right">
              <div className="date_time">Today, 10:35</div>
              <p>The project finally complete! Let{`'`}s go to!</p>
            </div>
          </div>
        </>
      ),
    },
    {
      id: 10,
      message: ` simply dummy text of the printing and typesetting industry. Lorem
      Ipsum has been the industry`,
      reply: <></>,
    },
  ];

  return (
    <>
      {replyContent.map((user) => (
        <li className="media sent" key={user.id}>
          <span className="contact-status busy"></span>
          <img
            className="img-fluid align-self-start mr-3"
            src="/assets/images/team/s6.jpg"
            alt="s6.jpg"
          />
          <div className="media-body">
            <div className="date_time">Today, 10:51</div>
            <p>{user.message}</p>
          </div>

          {user.reply}
        </li>
      ))}
    </>
  );
};

export default SignleChatboxReply;
