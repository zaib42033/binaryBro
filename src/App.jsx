import ParticalesBg from "./componenets/ParticalesBg";
import About from "./sections/About";
import Education from "./sections/Education";
import Contact from "./sections/Contact";
import Home from "./sections/Home/Home";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";
import Testimonials from "./sections/Testimonials";
import Footer from "./sections/Footer";
import IntroAnimation from "./componenets/IntroAnimations";

const App = () => {
  return (
    <div>

      <IntroAnimation />


      <section id="home">
        <Home />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="skills">
        <Skills />
      </section>

      <section id="education">
        <Education />
      </section>

      <section id="projects">
        <Projects />
      </section>

      <section id="testimonials">
        <Testimonials />
      </section>

      <section id="contact">
        <Contact />
      </section>

      <section id="footer">
        <Footer />
      </section>
    </div>
  );
}

export default App
