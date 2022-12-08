const Form = () => {
  return (
    <form className="contact_form" action="#">
      <div className="row">
        <div className="col-md-6">
          <div className="form-group">
            <input
              id="form_name"
              name="form_name"
              className="form-control"
              required="required"
              type="text"
              placeholder="Name"
            />
          </div>
        </div>
        {/* End .col */}

        <div className="col-md-6">
          <div className="form-group">
            <input
              id="form_email"
              name="form_email"
              className="form-control required email"
              required="required"
              type="email"
              placeholder="Email"
            />
          </div>
        </div>
        {/* End .col */}

        <div className="col-md-6">
          <div className="form-group">
            <input
              id="form_phone"
              name="form_phone"
              className="form-control required phone"
              required="required"
              type="phone"
              placeholder="Phone"
            />
          </div>
        </div>
        {/* End .col */}

        <div className="col-md-6">
          <div className="form-group">
            <input
              id="form_subject"
              name="form_subject"
              className="form-control required"
              required="required"
              type="text"
              placeholder="Subject"
            />
          </div>
        </div>
        {/* End .col */}

        <div className="col-sm-12">
          <div className="form-group">
            <textarea
              id="form_message"
              name="form_message"
              className="form-control required"
              rows="8"
              required="required"
              placeholder="Your Message"
            ></textarea>
          </div>
          {/* End .col */}

          <div className="form-group mb0">
            <button type="submit" className="btn btn-lg btn-thm">
              Send Message
            </button>
          </div>
          {/* End button submit */}
        </div>
      </div>
    </form>
  );
};

export default Form;
