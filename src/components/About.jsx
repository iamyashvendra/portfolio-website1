import profile from '../assets/logo-png3.jpg';

const About = () => {
  return (
    <section className="bg-dark text-light py-5" id="about">
      <div className="container">
        <div className="row align-items-center flex-column flex-lg-row">

          {/* Left: Image */}
          <div className="col-lg-5 text-center mb-4 mb-lg-0">
            <div
              className="p-2"
              style={{
                border: '3px solid #4dabf7',
                borderRadius: '15px',
                display: 'inline-block',
                width: 'auto'
              }}
            >
              <img
                src={profile}
                alt="About"
                className="img-fluid rounded size"
                // style={{ Width: '60%', height: 'auto' }}
              />
            </div>
          </div>

          {/* Right: Content */}
          <div className="col-lg-6 text-center text-lg-start right-shift-lg">

            <h2 className="fw-bold mb-2">
              About <span style={{ color: '#4dabf7' }}>Me</span>
            </h2>
            <h5 className="mb-3 fw-semibold">Frontend Developer</h5>
            <p className="mb-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque eius velit molestias soluta distinctio corrupti officia aliquam quos eos amet. Earum aperiam nesciunt doloremque a quod, dolorum ad minima, consequuntur vitae temporibus eos.
            </p>
            <a href="#!" className="btn btn-outline-info btn-lg px-4 rounded-pill shadow-sm">
              Read more
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;