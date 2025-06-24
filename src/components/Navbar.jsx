// const Navbar = () => {
//     return (
//         <>
//             <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
//                 <div className="container position-relative">
//                     <a className="navbar-brand" href="#">Kya Bolti Public</a>
//                     {/* Centered h1 */}
//                     <h1
//                         className="position-absolute start-50 translate-middle-x m-0 hide-yashvendra"
//                         style={{ left: '50%', transform: 'translateX(-50%)', fontWeight: 'bold', fontSize: '40px', color: 'white' }}
//                     >
//                         Yashvendra
//                     </h1>
//                     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
//                         <span className="navbar-toggler-icon"></span>
//                     </button>
//                     <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
//                         <ul className="navbar-nav">
//                             <li className="nav-item"><a className="nav-link" href="#about">About</a></li>
//                             <li className="nav-item"><a className="nav-link" href="#skills">Skills</a></li>
//                             <li className="nav-item"><a className="nav-link" href="#projects">Projects</a></li>
//                             <li className="nav-item"><a className="nav-link" href="#contact">Contact</a></li>
//                         </ul>
//                     </div>
//                 </div>
//             </nav>
//         </>
//     )
// }
// export default Navbar;

const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top shadow">
                {/* <nav class="navbar navbar-expand-lg navbar-dark bg-dark sticky-top"> */}
                <div className="container">
                    <a className="navbar-brand fw-bold" href="#">
                        Kya Bolti Public
                    </a>
                    <h1
                        className="hide-yashvendra m-0 position-absolute top-50 start-50 translate-middle text-white fw-bold"
                        style={{ fontSize: '2rem', zIndex: 1 }}
                    >
                        Yashvendra
                    </h1>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <a className="nav-link" href="#about">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#Team">Team</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#projects">Projects</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#contact">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;