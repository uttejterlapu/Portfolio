import React from 'react';
import NavBar from './pages/components/NavBar';
import Home from './pages/Home';
import About from './pages/About';
import Internship from './pages/Internship';
import Skills from './pages/Skills';
import Projects from './pages/Projects'; 
import Footer from './pages/Footer';
import Certificates from './pages/Certificates';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Home />
      <About />
      <Skills />
      <Internship />
      <Projects />
      <Certificates />
      <Footer />
    </div>
  );
}

export default App;
