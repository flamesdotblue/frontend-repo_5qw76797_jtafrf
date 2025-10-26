import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import SkillsContact from './components/SkillsContact';

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Hero with interactive 3D Spline */}
      <Hero />

      {/* Content sections */}
      <About />
      <Projects />
      <SkillsContact />

      {/* Simple footer */}
      <footer className="border-t bg-white">
        <div className="container mx-auto px-6 py-8 text-sm text-gray-600 flex flex-col md:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} Aria Patel. All rights reserved.</p>
          <nav className="flex items-center gap-4">
            <a href="#home" className="hover:text-gray-900">Home</a>
            <a href="#about" className="hover:text-gray-900">About</a>
            <a href="#projects" className="hover:text-gray-900">Projects</a>
            <a href="#skills" className="hover:text-gray-900">Skills & Contact</a>
          </nav>
        </div>
      </footer>
    </div>
  );
}

export default App;
