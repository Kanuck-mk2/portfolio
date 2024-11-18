import { Analytics } from "@vercel/analytics/react"


import Hero from './components/Hero';
import Sidenav from './components/Sidenav';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import About from './components/About';
import Footer from './components/Footer';

function App(): JSX.Element {
  return (
    <>
      <Sidenav />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
      <Analytics />
    </>
  );
}

export default App;
