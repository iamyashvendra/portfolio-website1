const Contact = () => (
  <section className="bg-dark text-light py-5" id="contact">
    <div className="container">
      <h2 className="text-center mb-5 fw-bold">
        Contact <span className="text-info">Me</span>
      </h2>
      <form className="row g-3 justify-content-center">
        <div className="col-md-5">
          <input
            type="text"
            className="form-control bg-secondary text-light border-0 rounded-pill px-4 py-3"
            placeholder="Full Name"
          />
        </div>
        <div className="col-md-5">
          <input
            type="email"
            className="form-control bg-secondary text-light border-0 rounded-pill px-4 py-3"
            placeholder="Email Address"
          />
        </div>
        <div className="col-md-5">
          <input
            type="tel"
            className="form-control bg-secondary text-light border-0 rounded-pill px-4 py-3"
            placeholder="Mobile Number"
          />
        </div>
        <div className="col-md-5">
          <input
            type="text"
            className="form-control bg-secondary text-light border-0 rounded-pill px-4 py-3"
            placeholder="Email Subject"
          />
        </div>
        <div className="col-10">
          <textarea
            className="form-control bg-secondary text-light border-0 rounded-4 px-4 py-3"
            rows="8"
            placeholder="Your Message"
          />
        </div>
        <div className="col-10 text-center">
          <button type="submit" className="btn btn-info btn-lg px-5 rounded-pill glow-btn">
            Send Message
          </button>
        </div>
      </form>
    </div>
  </section>
);

export default Contact;