import React from 'react';
import { Float } from '@react-three/drei';

export default function EnvironmentReveal3D() {
  return (
    <group position={[0, -42, -5]}>
      {/* Studio Cyber Floor Grid */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -3, 0]}>
        <planeGeometry args={[30, 30]} />
        <meshStandardMaterial
          color="#060913"
          roughness={0.3}
          metalness={0.8}
        />
      </mesh>

      {/* Grid line accent */}
      <gridHelper args={[30, 30, '#06b6d4', '#1e293b']} position={[0, -2.98, 0]} />

      {/* Floating Outro Holographic Sculptures */}
      <Float speed={2} floatIntensity={0.6}>
        <group position={[-5, 2, 0]}>
          <mesh>
            <octahedronGeometry args={[1.2, 0]} />
            <meshStandardMaterial color="#06b6d4" wireframe />
          </mesh>
        </group>
      </Float>

      <Float speed={2.5} floatIntensity={0.6}>
        <group position={[5, 2, 0]}>
          <mesh>
            <icosahedronGeometry args={[1.4, 0]} />
            <meshStandardMaterial color="#3b82f6" wireframe />
          </mesh>
        </group>
      </Float>
    </group>
  );
}
