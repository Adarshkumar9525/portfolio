import React, { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text, Float, RoundedBox } from '@react-three/drei';
import * as THREE from 'three';

const skillsList = [
  { name: "React 19", color: "#61DAFB", pos: [-2.2, 0.8, 0.5] },
  { name: "Next.js", color: "#ffffff", pos: [-1.2, 1.6, -0.4] },
  { name: "Node.js", color: "#68A063", pos: [1.2, 1.5, -0.3] },
  { name: "Express.js", color: "#e2e8f0", pos: [2.3, 0.7, 0.4] },
  { name: "MongoDB", color: "#47A248", pos: [-2.4, -0.6, -0.2] },
  { name: "Tailwind CSS", color: "#38BDF8", pos: [-1.0, -1.4, 0.6] },
  { name: "REST APIs", color: "#06B6D4", pos: [1.1, -1.3, 0.5] },
  { name: "Docker", color: "#2496ED", pos: [2.3, -0.6, -0.3] },
  { name: "Vite", color: "#646CFF", pos: [0, 0, 0.8] },
  { name: "Git", color: "#F05032", pos: [0, 2.1, -0.8] },
  { name: "SQL", color: "#4479A1", pos: [0, -2.1, -0.6] },
];

function SkillChip({ skill, index }) {
  const [hovered, setHovered] = useState(false);
  const chipRef = useRef();

  useFrame((state) => {
    if (!chipRef.current) return;
    const t = state.clock.elapsedTime + index * 0.5;
    chipRef.current.position.y = skill.pos[1] + Math.sin(t) * 0.12;
  });

  return (
    <group
      ref={chipRef}
      position={skill.pos}
      onPointerOver={(e) => { e.stopPropagation(); setHovered(true); }}
      onPointerOut={() => setHovered(false)}
      scale={hovered ? 1.15 : 1}
    >
      <Float speed={3} rotationIntensity={0.2} floatIntensity={0.3}>
        <RoundedBox args={[1.1, 0.42, 0.08]} radius={0.06} smoothness={3}>
          <meshPhysicalMaterial
            color={hovered ? "#0f172a" : "#0a0f1d"}
            emissive={skill.color}
            emissiveIntensity={hovered ? 0.6 : 0.2}
            roughness={0.2}
            metalness={0.8}
            clearcoat={1}
          />
        </RoundedBox>

        <Text
          position={[0, 0, 0.05]}
          fontSize={0.11}
          color={hovered ? "#ffffff" : skill.color}
          anchorX="center"
          anchorY="middle"
          font="https://fonts.gstatic.com/s/inter/v13/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZ9hjp-Ek-_eeA.woff"
        >
          {skill.name}
        </Text>
      </Float>
    </group>
  );
}

export default function OrbitingSkills3D() {
  const groupRef = useRef();

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.25) * 0.15;
    }
  });

  return (
    <group ref={groupRef} position={[-2.8, -15.5, 0]}>
      {skillsList.map((skill, idx) => (
        <SkillChip key={skill.name} skill={skill} index={idx} />
      ))}
    </group>
  );
}
