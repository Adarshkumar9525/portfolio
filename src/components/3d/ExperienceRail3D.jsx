import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float, Text, RoundedBox } from '@react-three/drei';

export default function ExperienceRail3D() {
  const groupRef = useRef();

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.position.z = Math.sin(state.clock.elapsedTime * 0.8) * 0.1;
    }
  });

  return (
    <group ref={groupRef} position={[2.6, -23.5, 0]}>
      {/* Central Rail Column */}
      <mesh position={[0, 0, -0.5]}>
        <cylinderGeometry args={[0.02, 0.02, 6, 16]} />
        <meshStandardMaterial color="#06b6d4" emissive="#06b6d4" emissiveIntensity={0.8} />
      </mesh>

      {/* Node 1: CoreGen */}
      <Float speed={2} floatIntensity={0.3}>
        <group position={[0, 1.2, 0]}>
          <RoundedBox args={[2.8, 1.2, 0.08]} radius={0.05} smoothness={3}>
            <meshPhysicalMaterial color="#0b1329" roughness={0.2} metalness={0.8} clearcoat={1} />
          </RoundedBox>
          <Text position={[-1.2, 0.35, 0.05]} fontSize={0.11} color="#38bdf8" anchorX="left" anchorY="top">
            COREGEN // 3 Mos
          </Text>
          <Text position={[-1.2, 0.1, 0.05]} fontSize={0.08} color="#94a3b8" anchorX="left" anchorY="top">
            {`• MERN Full Stack Web Components\n• Optimized MongoDB Indexing\n• Dynamic Data Pipelines & Agile`}
          </Text>
        </group>
      </Float>

      {/* Node 2: cartED */}
      <Float speed={2.5} floatIntensity={0.3}>
        <group position={[0, -1.2, 0]}>
          <RoundedBox args={[2.8, 1.2, 0.08]} radius={0.05} smoothness={3}>
            <meshPhysicalMaterial color="#0b1329" roughness={0.2} metalness={0.8} clearcoat={1} />
          </RoundedBox>
          <Text position={[-1.2, 0.35, 0.05]} fontSize={0.11} color="#2dd4bf" anchorX="left" anchorY="top">
            cartED // 1 Mo
          </Text>
          <Text position={[-1.2, 0.1, 0.05]} fontSize={0.08} color="#94a3b8" anchorX="left" anchorY="top">
            {`• Modular React UI Component Architecture\n• RBAC REST APIs\n• Cloud Deployments on Render`}
          </Text>
        </group>
      </Float>
    </group>
  );
}
