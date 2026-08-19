import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { portfolioData } from './data/portfolioData';
import './App.css';

function App() {
  return (
    <div className="portfolio-app">
      {/* Header & Sticky Navigation */}
      <Navbar personal={portfolioData.personal} />

      {/* Main Content Sections */}
      <main>
        <Hero
          personal={portfolioData.personal}
          stats={portfolioData.stats}
        />
        <About
          personal={portfolioData.personal}
          about={portfolioData.about}
        />
        <Skills skills={portfolioData.skills} />
        <Projects projects={portfolioData.projects} />
        <Contact
          personal={portfolioData.personal}
          emailjsConfig={portfolioData.emailjs}
        />
      </main>

      {/* Footer */}
      <Footer personal={portfolioData.personal} />
    </div>
  );
}

export default App;
