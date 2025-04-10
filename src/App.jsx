import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import AboutMe from './pages/Aboutme'
import Personal from './pages/Personal'
import Projects from './pages/Projects'
import Skills from './pages/Skills'
import Contact from './pages/Contact';
import Footer from './pages/Footer';

function App() {
  useEffect(() => {
    AOS.init({ duration: 600, once: false, mirror: false   });
  }, []);

  return (
    <div>
      <Personal/>
      <AboutMe/>
      <Skills />
      <Projects/>
      <Contact />
      <Footer/>
    </div>
  )
}

export default App
