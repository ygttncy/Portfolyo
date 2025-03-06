import './App.css';
import Contact from './sections/Contact/Contact';
import Footer from './sections/Footer/Footer';
import Hero from './sections/Hero/Hero';
import Projects from './sections/Projects/Projects';
import Skills from './sections/Skills/Skills';
import Certificates from './sections/Certificates/Certificates';

function App() {
  return (
    <>
      <Hero />
      <Projects />
      <Skills />
      <Certificates />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
