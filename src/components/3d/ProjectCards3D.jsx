import React, { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text, RoundedBox, Float, MeshTransmissionMaterial } from '@react-three/drei';
import * as THREE from 'three';

const projects3D = [
  {
    title: "Mishra Library ERP",
    badge: "Enterprise SaaS",
    color: "#06b6d4",
    stat: "80% JSON Compressed",
    pos: [-2.2, 0, 0.6],
    rot: [0, 0.3, 0]
  },
  {
    title: "AI Doctor Appointment",
    badge: "Gemini AI + MERN",
    color: "#3b82f6",
    stat: "Smart Triage & RBAC",
    pos: [0, 0, 0],
    rot: [0, 0, 0]
  },
  {
    title: "Job Portal Engine",
    badge: "Vite + Clerk OAuth",
    color: "#14b8a6",
    stat: "High-Efficiency Indexing",
    pos: [2.2, 0, 0.6],
    rot: [0, -0.3, 0]
  }
];

function ProjectPanel({ project, index }) {
  const [hovered, setHovered] = useState(false);
  const panelRef = useRef();

  useFrame((state) => {
    if (!panelRef.current) return;
    const t = state.clock.elapsedTime + index;
    panelRef.current.position.y = Math.sin(t * 1.5) * 0.08;
  });

  return (
    <group
      ref={panelRef}
      position={project.pos}
      rotation={project.rot}
      onPointerOver={(e) => { e.stopPropagation(); setHovered(true); }}
      onPointerOut={() => setHovered(false)}
      scale={hovered ? 1.08 : 1}
    >
      <Float speed={2} rotationIntensity={0.2} floatIntensity={0.3}>
        <RoundedBox args={[2.0, 2.8, 0.08]} radius={0.06} smoothness={3}>
          <meshPhysicalMaterial
            color="#080e1b"
            roughness={0.15}
            metalness={0.85}
            clearcoat={1}
          />
        </RoundedBox>

        {/* Refraction Glass Layer */}
        <mesh position={[0, 0, 0.05]}>
          <planeGeometry args={[1.88, 2.68]} />
          <MeshTransmissionMaterial
            samples={6}
            transmission={0.8}
            roughness={0.12}
            thickness={0.15}
            color="#e0f2fe"
          />
        </mesh>

        {/* Text Details */}
        <group position={[0, 0, 0.08]}>
          <Text position={[-0.8, 1.1, 0]} fontSize={0.08} color={project.color} anchorX="left" anchorY="top">
            {project.badge}
          </Text>

          <Text position={[-0.8, 0.85, 0]} fontSize={0.12} color="#f8fafc" anchorX="left" anchorY="top" maxWidth={1.6}>
            {project.title}
          </Text>

          <Text position={[-0.8, 0.2, 0]} fontSize={0.075} color="#94a3b8" anchorX="left" anchorY="top">
            {`• Production architecture\n• Optimized payload\n• 60fps animations`}
          </Text>

          <Text position={[-0.8, -0.75, 0]} fontSize={0.08} color="#2dd4bf" anchorX="left" anchorY="top">
            {project.stat}
          </Text>
        </group>
      </Float>
    </group>
  );
}

export default function ProjectCards3D() {
  return (
    <group position={[0, -32.5, -1]}>
      {projects3D.map((p, idx) => (
        <ProjectPanel key={p.title} project={p} index={idx} />
      ))}
    </group>
  );
}
