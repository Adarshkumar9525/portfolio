import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float, Text, RoundedBox, MeshTransmissionMaterial } from '@react-three/drei';
import * as THREE from 'three';

export default function AboutTerminal3D() {
  const meshRef = useRef();

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = THREE.MathUtils.lerp(
        meshRef.current.rotation.y,
        0.3 + Math.sin(state.clock.elapsedTime * 0.5) * 0.05,
        0.05
      );
    }
  });

  return (
    <group ref={meshRef} position={[3.2, -7.5, -1]} rotation={[0.05, 0.3, 0]}>
      <Float speed={2} rotationIntensity={0.2} floatIntensity={0.4}>
        
        {/* Holographic Frame */}
        <RoundedBox args={[3.2, 2.4, 0.1]} radius={0.08} smoothness={4}>
          <meshPhysicalMaterial
            color="#080e1a"
            roughness={0.15}
            metalness={0.8}
            clearcoat={1}
          />
        </RoundedBox>

        {/* Refractive Screen Glass */}
        <mesh position={[0, 0, 0.06]}>
          <planeGeometry args={[3.0, 2.2]} />
          <MeshTransmissionMaterial
            samples={6}
            transmission={0.85}
            roughness={0.1}
            thickness={0.2}
            ior={1.4}
            color="#a5f3fc"
          />
        </mesh>

        {/* Floating holographic content */}
        <group position={[0, 0, 0.08]}>
          {/* Header */}
          <Text
            position={[-1.3, 0.85, 0]}
            fontSize={0.11}
            color="#38bdf8"
            anchorX="left"
            anchorY="top"
          >
            SYSTEM PROFILE // ADARSH KUMAR
          </Text>

          <Text
            position={[-1.3, 0.55, 0]}
            fontSize={0.08}
            color="#2dd4bf"
            anchorX="left"
            anchorY="top"
          >
            {`> B.Tech CSE @ Haridwar Univ\n> Specialization: Full Stack MERN\n> Architect: Scalable REST & Microservices\n> Certifications: Meta UI + IBM AI`}
          </Text>

          <Text
            position={[-1.3, -0.25, 0]}
            fontSize={0.075}
            color="#94a3b8"
            anchorX="left"
            anchorY="top"
          >
            {`• MongoDB Atlas Query Optimization\n• Express REST API with RBAC\n• React 19 Component Architecture\n• 80% JSON Brotli Compression`}
          </Text>
        </group>

        {/* Surrounding Energy Ring */}
        <mesh rotation={[Math.PI / 2, 0, 0]} position={[0, -1.3, 0]}>
          <torusGeometry args={[1.8, 0.015, 16, 64]} />
          <meshStandardMaterial color="#06b6d4" emissive="#06b6d4" emissiveIntensity={1} />
        </mesh>

      </Float>
    </group>
  );
}
