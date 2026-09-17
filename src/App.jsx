import React, { Suspense, lazy } from 'react';
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
import { use3DMode } from './hooks/use3DMode';
import { useActiveSection } from './hooks/useActiveSection';

const Scene3D = lazy(() => import('./components/3d/Scene3D'));

const sectionIds = ['hero', 'about', 'skills', 'experience', 'projects', 'education', 'contact'];

export default function App() {
  const { theme, toggleTheme } = useTheme();
  const { is3DMode, toggle3DMode } = use3DMode();
  const activeSection = useActiveSection(sectionIds, 150);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#0a0d14] text-slate-800 dark:text-slate-200 transition-colors duration-300 relative overflow-x-hidden">
      
      {/* 3D WebGL Canvas Layer */}
      {is3DMode && (
        <Suspense fallback={null}>
          <Scene3D activeSection={activeSection} />
        </Suspense>
      )}

      {/* Navigation */}
      <Navbar 
        activeSection={activeSection} 
        theme={theme} 
        toggleTheme={toggleTheme}
        is3DMode={is3DMode}
        toggle3DMode={toggle3DMode}
      />

      {/* Main DOM Layer */}
      <main className="relative z-10 pointer-events-auto">
        <Hero is3DMode={is3DMode} />
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
