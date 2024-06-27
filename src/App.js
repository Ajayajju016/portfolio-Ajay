import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certificates from './components/Certificates';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App" id='home'>
      <Navbar />
      <div className="content">
        <div className="about-skills-container">
          <About />
          <Skills />
        </div>
        <Certificates />
        <Projects />
        <Contact />
      </div>
      <Footer />
    </div>
  );
}

export default App;
