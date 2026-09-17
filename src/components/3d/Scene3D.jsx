import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Sparkles } from '@react-three/drei';
import CameraRig from './CameraRig';
import DraggableHeroObject from './DraggableHeroObject';
import AboutTerminal3D from './AboutTerminal3D';
import OrbitingSkills3D from './OrbitingSkills3D';
import ExperienceRail3D from './ExperienceRail3D';
import ProjectCards3D from './ProjectCards3D';
import EnvironmentReveal3D from './EnvironmentReveal3D';
import Loader3D from './Loader3D';

export default function Scene3D({ activeSection }) {
  return (
    <div className="fixed inset-0 z-0 pointer-events-auto overflow-hidden">
      <Suspense fallback={<Loader3D />}>
        <Canvas
          camera={{ position: [0, 0, 4.5], fov: 45 }}
          gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
          dpr={[1, 2]}
        >
          {/* Ambient & Directional Lighting */}
          <ambientLight intensity={0.6} />
          
          {/* Cyan Key Light */}
          <directionalLight position={[5, 8, 5]} intensity={1.8} color="#38bdf8" />
          
          {/* Teal Fill Light */}
          <directionalLight position={[-5, -4, -3]} intensity={1.2} color="#2dd4bf" />
          
          {/* Blue Rim Backlight */}
          <pointLight position={[0, 4, -4]} intensity={2} color="#3b82f6" />
          
          {/* Dynamic Scroll Camera Rig */}
          <CameraRig />

          {/* 1. Hero 3D Draggable Glass Dev Setup */}
          <DraggableHeroObject activeSection={activeSection} />

          {/* 2. About 3D Holographic Terminal Screen */}
          <AboutTerminal3D />

          {/* 3. Skills 3D Orbiting Interactive Chips */}
          <OrbitingSkills3D />

          {/* 4. Experience 3D Glowing Timeline Rail */}
          <ExperienceRail3D />

          {/* 5. Projects 3D Rotating Glass Cards */}
          <ProjectCards3D />

          {/* 6. Outro Reveal Studio Floor & Sculptures */}
          <EnvironmentReveal3D />

          {/* Ambient Cyber Sparkles */}
          <Sparkles count={80} scale={20} size={2.5} speed={0.4} opacity={0.4} color="#06b6d4" />
          <Sparkles count={40} scale={15} size={3.0} speed={0.6} opacity={0.3} color="#3b82f6" />
        </Canvas>
      </Suspense>
    </div>
  );
}
