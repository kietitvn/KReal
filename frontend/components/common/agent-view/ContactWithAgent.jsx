const ContactWithAgent = () => {
  return (
    <form action="#">
      <ul className="sasw_list mb0">
        <li className="search_area">
          <div className="form-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Your Name"
              required
            />
          </div>
        </li>
        {/* End li */}
        <li className="search_area">
          <div className="form-group mb-3">
            <input
              type="number"
              className="form-control"
              placeholder="Phone"
              required
            />
          </div>
        </li>{" "}
        {/* End li */}
        <li className="search_area">
          <div className="form-group mb-3">
            <input
              type="email"
              className="form-control"
              placeholder="Email"
              required
            />
          </div>
        </li>{" "}
        {/* End li */}
        <li className="search_area">
          <div className="form-group mb-3">
            <textarea
              id="form_message"
              name="form_message"
              className="form-control "
              rows="5"
              required
              placeholder="Your Message"
            ></textarea>
          </div>
        </li>{" "}
        {/* End li */}
        <li>
          <div className="search_option_button">
            <button type="submit" className="btn btn-block btn-thm w-100">
              Search
            </button>
          </div>
        </li>{" "}
        {/* End li */}
      </ul>
    </form>
  );
};

export default ContactWithAgent;
