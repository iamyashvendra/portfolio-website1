import project1 from '../assets/p1.png';
import project2 from '../assets/p2.png';
import project3 from '../assets/p3.png';
import project4 from '../assets/p4.png';
import project5 from '../assets/p5.png';
import project6 from '../assets/p6.png';

const Projects = () => {
    return (
        <section className="bg-dark text-light py-5" id="projects">
            <div className="container">
                <h2 className="text-center mb-5 fw-bold">
                    Latest <span className="text-info">Projects</span>
                </h2>
                <div className="row g-4">
                    {/* Project Card 1 */}
                    <div className="col-md-4">
                        <div className="project-card position-relative overflow-hidden rounded-4">
                            <img src={project1} className="img-fluid rounded-4" alt="Project 1" />
                            <div className="overlay d-flex flex-column justify-content-center align-items-center text-center">
                                <h5 className="fw-bold">Phone Pe</h5>
                                <p className="mb-2">Online Payment App Phonepe</p>
                                <a
                                    href="src\project-url\Phone Pay\home.html"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-white fs-3"
                                >
                                    <i className="bi bi-box-arrow-up-right"></i>
                                </a>

                            </div>
                        </div>
                    </div>

                    {/* Project Card 2 */}
                    <div className="col-md-4">
                        <div className="project-card position-relative overflow-hidden rounded-4">
                            <img src={project2} className="img-fluid rounded-4" alt="Project 2" />
                            <div className="overlay d-flex flex-column justify-content-center align-items-center text-center">
                                <h5 className="fw-bold">Crypto</h5>
                                <p className="mb-2">Crypto based Website</p>
                                <a
                                    href="src\project-url\Cryptop\index.html"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-white fs-3"
                                >
                                    <i className="bi bi-box-arrow-up-right"></i>
                                </a>

                            </div>
                        </div>
                    </div>

                    {/* Project Card 3 */}
                    <div className="col-md-4">
                        <div className="project-card position-relative overflow-hidden rounded-4">
                            <img src={project3} className="img-fluid rounded-4" alt="Project 3" />
                            <div className="overlay d-flex flex-column justify-content-center align-items-center text-center">
                                <h5 className="fw-bold">Lugx Gaming</h5>
                                <p className="mb-2">Responsive layout with hover effect</p>
                                <a
                                    href="src\project-url\Lugx-gaming-Media queary\index.html"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-white fs-3"
                                >
                                    <i className="bi bi-box-arrow-up-right"></i>
                                </a>

                            </div>
                        </div>
                    </div>

                    {/* Project Card 4 */}
                    <div className="col-md-4">
                        <div className="project-card position-relative overflow-hidden rounded-4">
                            <img src={project4} className="img-fluid rounded-4" alt="Project 4" />
                            <div className="overlay d-flex flex-column justify-content-center align-items-center text-center">
                                <h5 className="fw-bold">Potify Player</h5>
                                <p className="mb-2">Music Player</p>
                                <a
                                    href="src\project-url\Potify-mini-Music-Player-20250515T062215Z-1-001\Potify-mini-Music-Player\welcome.html"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-white fs-3"
                                >
                                    <i className="bi bi-box-arrow-up-right"></i>
                                </a>

                            </div>
                        </div>
                    </div>

                    {/* Project Card 5 */}
                    <div className="col-md-4">
                        <div className="project-card position-relative overflow-hidden rounded-4">
                            <img src={project5} className="img-fluid rounded-4" alt="Project 5" />
                            <div className="overlay d-flex flex-column justify-content-center align-items-center text-center">
                                <h5 className="fw-bold">Coffee</h5>
                                <p className="mb-2">Coffee Website</p>
                                <a
                                    href="src\project-url\coffee page\page.html"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-white fs-3"
                                >
                                    <i className="bi bi-box-arrow-up-right"></i>
                                </a>

                            </div>
                        </div>
                    </div>

                    {/* Project Card 6 */}
                    <div className="col-md-4">
                        <div className="project-card position-relative overflow-hidden rounded-4">
                            <img src={project6} className="img-fluid rounded-4" alt="Project 6" />
                            <div className="overlay d-flex flex-column justify-content-center align-items-center text-center">
                                <h5 className="fw-bold">one8</h5>
                                <p className="mb-2">one8 Virat Kohli Brand</p>
                                <a
                                    href="src/project-url/One8-main/One8-main/index.html"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-white fs-3"
                                >
                                    <i className="bi bi-box-arrow-up-right"></i>
                                </a>

                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Projects;