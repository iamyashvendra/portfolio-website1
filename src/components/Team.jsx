import bhaiya from '../assets/bhaiya.jpg';
import team1 from '../assets/yashvendra.jpg';
import team2 from '../assets/sparsh.jpg';
import team3 from '../assets/garvit.jpg';
import team4 from '../assets/ankit.jpg';
import team5 from '../assets/yuvi-2.jpg';
import team6 from '../assets/default.jpg';
import team7 from '../assets/default.jpg';
import team8 from '../assets/default.jpg';

const teamMembers = [
  {
    name: "Yashvendra Singh Jadaun",
    role: "Front-End Developer",
    img: team1,
  },
  {
    name: "Sparsh Singhal",
    role: "Front-End Developer",
    img: team2,
  },
  {
    name: "Garvit Soni",
    role: "Front-End Developer",
    img: team3,
  },
  {
    name: "Ankit Verma",
    role: "Front-End Developer",
    img: team4,
  },
  {
    name: "Yuvraj Singh Rajput",
    role: "Front-End Developer",
    img: team5,
  },
  {
    name: "Harshit Pal Jadaun",
    role: "Front-End Developer",
    img: team6,
  },
  {
    name: "Diksha",
    role: "Front-End Developer",
    img: team7,
  },
  {
    name: "Raksha",
    role: "Front-End Developer",
    img: team8,
  },
];

function Team() {
  return (
    <div className="container-fluid py-5 text-center" style={{ backgroundColor: '#212529', color: '#fff' }}>
      {/* Mentor Section */}
      <h2 className="mb-4" style={{ color: '#00bfff' }}>Our Mentor</h2>
      <div className="d-flex justify-content-center mb-5">
        <div className="card shadow team-card bg-dark text-white w-25">
          <div className="card-body">
            <img
              src={bhaiya}
              className="rounded-circle mb-3"
              alt="Mentor"
              width="100"
              height="100"
            />
            <h5 className="text-info">Ashutosh Jain</h5>
            <p className="text-muted mb-0">Senior Developer</p>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <h2 className="mb-4" style={{ color: '#00bfff' }}>Meet Our Team</h2>
      <div className="container">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
          {teamMembers.map(function (member, index) {
            return (
              <div className="col" key={index}>
                <div className="card shadow team-card bg-dark text-white h-100">
                  <div className="card-body text-center">
                    <img
                      src={member.img}
                      className="rounded-circle mb-3"
                      alt={member.name}
                      width="100"
                      height="100"
                    />
                    <h6 className="text-info">{member.name}</h6>
                    <p className="text-muted mb-0">{member.role}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Team;
