import g2 from '../assets/g2.jpg';
import g1 from '../assets/g1.jpg';
import g3 from '../assets/g3.png';
import flag from '../assets/logo-png3.jpg';
import bhaiya from '../assets/bhaiya-2.jpg';
import yashvendra from '../assets/logo.jpg';
import garvit from '../assets/garvit.jpg';
import sparsh from '../assets/sparsh.jpg';
import yuvi from '../assets/yuvi-2.jpg';


const Slider = () => {
    const images = [g2, g1, g3, flag, bhaiya, yashvendra, garvit, sparsh, yuvi];

    return (
        <div className="container my-5 " style={{ backgroundColor: '#212529'}}>
            <h2 className="text-center text-info mb-4">Our Team Gallery</h2>

            <div
                id="teamCarousel"
                className="carousel slide"
                data-bs-ride="carousel"
                data-bs-interval="2500"
            >
                <div className="carousel-inner">
                    {images.map((img, index) => (
                        <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={index}>
                            <div className="d-flex justify-content-center">
                                <img
                                    src={img}
                                    className="d-block rounded shadow img-fluid"
                                    alt={`Team ${index + 1}`}
                                    style={{
                                        maxWidth: 'auto',
                                        maxHeight: '500px',
                                        objectFit: 'cover',
                                    }}
                                />
                            </div>
                        </div>
                    ))}
                </div>

                <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target="#teamCarousel"
                    data-bs-slide="prev"
                >
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                </button>
                <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target="#teamCarousel"
                    data-bs-slide="next"
                >
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                </button>
            </div>
        </div>
    );
};

export default Slider;