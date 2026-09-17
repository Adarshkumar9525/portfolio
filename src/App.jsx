import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import EducationCerts from './components/EducationCerts';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { useTheme } from './hooks/useTheme';
import { useActiveSection } from './hooks/useActiveSection';

const sectionIds = ['hero', 'about', 'skills', 'experience', 'projects', 'education', 'contact'];

export default function App() {
  const { theme, toggleTheme, isDark } = useTheme();
  const activeSection = useActiveSection(sectionIds, 150);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#0a0d14] text-slate-800 dark:text-slate-200 transition-colors duration-300">
      <Navbar 
        activeSection={activeSection} 
        theme={theme} 
        toggleTheme={toggleTheme} 
      />

      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <EducationCerts />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
