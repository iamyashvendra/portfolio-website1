import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import './main.css';
import Navbar from './components/Navbar';
import Hero from './components/hero';
import Slider from './components/Slider';
import About from './components/About';
import Project from './components/Project';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Team from './components/Team';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Project />
      <Team />
      <Slider />
      <Contact />
      <Footer />
    </>
  );
}

export default App;