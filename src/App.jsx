
import { useEffect } from 'react';

import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Focus from './components/Focus.jsx';
import Projects from './components/Projects.jsx';
import About from './components/About.jsx';
import Toolkit from './components/Toolkit.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';

function App() {
  useEffect(() => {
    const elements = document.querySelectorAll(
      '.focus-section, .projects-section, .about-section, .toolkit-section, .contact-section'
    );

    elements.forEach((element) => {
      element.classList.add('reveal-on-scroll');
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Focus />
        <Projects />
        <About />
        <Toolkit />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
