import logo from '../assets/logoc.jpg';

const Hero = () => {
  return (
    <section className="bg-dark text-light py-5" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center' }}>
      <div className="container">
        <div className="row align-items-center">

          <div className="col-lg-6 text-center text-lg-start">
            <h1 className="display-3 fw-bold">Hi, I'm a {/*Full-Stack*/} Chhota-mota Developer</h1>
            <p className="lead my-4">
              I design and build modern web applications using React, Node.js, MongoDB, and more. My passion is crafting scalable solutions that solve real-world problems.
            </p>

            <div className="mb-4">
              <a href="https://www.facebook.com/profile.php?id=61574549258687&mibextid=ZbWKwL" className="text-light fs-3 me-3 social-icon" target="_blank" rel="noopener noreferrer">
                <i className="bi bi-facebook"></i>
              </a>
              <a href="https://x.com/iamyashvendra" className="text-light fs-3 me-3 social-icon" target="_blank" rel="noopener noreferrer">
                <i className="bi bi-twitter-x"></i>
              </a>
              <a href="https://www.instagram.com/iamyashvendra" className="text-light fs-3 me-3 social-icon" target="_blank" rel="noopener noreferrer">
                <i className="bi bi-instagram"></i>
              </a>
              <a href="https://github.com/iamyashvendra" className="text-light fs-3 me-3 social-icon" target="_blank" rel="noopener noreferrer">
                <i className="bi bi-github"></i>
              </a>
              <a href="https://www.youtube.com/@Crateryash" className="text-light fs-3 social-icon" target="_blank" rel="noopener noreferrer">
                <i className="bi bi-youtube"></i>
              </a>
            </div>

            <a href="#projects" className="btn btn-primary btn-lg me-3">
              See Projects
            </a>
            <a href="#contact" className="btn btn-outline-light btn-lg">
              Contact Me
            </a>
          </div>

          <div className="col-lg-6 text-center mt-4 mt-lg-0">
            <img
              src={logo}
              alt="Developer Illustration"
              className="img-fluid rounded home-img"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;