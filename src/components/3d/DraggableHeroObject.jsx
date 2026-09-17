import React, { useRef, useState, useEffect } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { MeshTransmissionMaterial, Float, Text, RoundedBox } from '@react-three/drei';
import * as THREE from 'three';

export default function DraggableHeroObject({ activeSection }) {
  const groupRef = useRef();
  const screenTextRef = useRef();
  const { viewport, mouse } = useThree();

  // Spring & Drag physics state
  const isDragging = useRef(false);
  const dragPlane = useRef(new THREE.Plane(new THREE.Vector3(0, 0, 1), 0));
  const planeIntersect = useRef(new THREE.Vector3());
  const raycaster = useRef(new THREE.Raycaster());

  const currentPos = useRef(new THREE.Vector3(0, 0, 0));
  const targetPos = useRef(new THREE.Vector3(0, 0, 0));
  const currentRot = useRef(new THREE.Euler(0.15, -0.25, 0));
  const targetRot = useRef(new THREE.Euler(0.15, -0.25, 0));
  const velocity = useRef(new THREE.Vector3(0, 0, 0));
  const lastMousePos = useRef({ x: 0, y: 0, time: 0 });

  const [hovered, setHovered] = useState(false);

  // Handle pointer down (grab)
  const handlePointerDown = (e) => {
    e.stopPropagation();
    isDragging.current = true;
    lastMousePos.current = { x: e.clientX, y: e.clientY, time: performance.now() };
    document.body.style.cursor = 'grabbing';
  };

  // Global pointer up to release grab / throw
  useEffect(() => {
    const handleGlobalPointerUp = () => {
      if (isDragging.current) {
        isDragging.current = false;
        document.body.style.cursor = 'auto';
        // Target returns to origin (0, 0, 0)
        targetPos.current.set(0, 0, 0);
        targetRot.current.set(0.15, -0.25, 0);
      }
    };

    window.addEventListener('pointerup', handleGlobalPointerUp);
    return () => window.removeEventListener('pointerup', handleGlobalPointerUp);
  }, []);

  useFrame((state, delta) => {
    if (!groupRef.current) return;

    if (isDragging.current) {
      // Map 2D pointer to 3D world plane
      const pointerVec = new THREE.Vector2(state.pointer.x, state.pointer.y);
      state.raycaster.setFromCamera(pointerVec, state.camera);
      state.raycaster.ray.intersectPlane(dragPlane.current, planeIntersect.current);

      if (planeIntersect.current) {
        // Compute delta velocity for spring throw
        const now = performance.now();
        const dt = Math.max(now - lastMousePos.current.time, 1) / 1000;
        velocity.current.set(
          (planeIntersect.current.x - currentPos.current.x) / dt,
          (planeIntersect.current.y - currentPos.current.y) / dt,
          0
        );

        targetPos.current.copy(planeIntersect.current);
        targetRot.current.set(
          -pointerVec.y * 0.8,
          pointerVec.x * 0.8,
          -pointerVec.x * 0.3
        );
      }
    } else {
      // Apply momentum decay & spring return to home
      velocity.current.multiplyScalar(0.92);
      targetPos.current.addScaledVector(velocity.current, delta * 0.2);

      // Smooth parallax tilt when idle
      const parallaxX = state.pointer.x * 0.4;
      const parallaxY = state.pointer.y * 0.3;
      targetRot.current.set(
        0.15 - parallaxY,
        -0.25 + parallaxX,
        parallaxX * -0.15
      );
    }

    // Spring interpolation (lerp)
    currentPos.current.lerp(targetPos.current, isDragging.current ? 0.25 : 0.08);
    groupRef.current.position.copy(currentPos.current);

    groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, targetRot.current.x, 0.1);
    groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, targetRot.current.y, 0.1);
    groupRef.current.rotation.z = THREE.MathUtils.lerp(groupRef.current.rotation.z, targetRot.current.z, 0.1);

    // Subtle breathing pulse for screen text
    if (screenTextRef.current) {
      screenTextRef.current.position.z = 0.06 + Math.sin(state.clock.elapsedTime * 3) * 0.005;
    }
  });

  return (
    <group
      ref={groupRef}
      position={[0, 0, 0]}
      onPointerDown={handlePointerDown}
      onPointerOver={() => {
        setHovered(true);
        if (!isDragging.current) document.body.style.cursor = 'grab';
      }}
      onPointerOut={() => {
        setHovered(false);
        if (!isDragging.current) document.body.style.cursor = 'auto';
      }}
    >
      {/* Outer Floating Wrapper */}
      <Float speed={2.5} rotationIntensity={0.3} floatIntensity={0.6}>
        
        {/* === MAIN DEV SETUP: 3D SLIM CYBER WORKSTATION === */}

        {/* 1. Base / Keyboard Deck */}
        <RoundedBox args={[2.8, 0.12, 1.9]} radius={0.05} smoothness={4} position={[0, -0.6, 0]}>
          <meshPhysicalMaterial
            color="#0b1120"
            roughness={0.2}
            metalness={0.85}
            clearcoat={0.9}
            clearcoatRoughness={0.1}
          />
        </RoundedBox>

        {/* Illuminated Keyboard Track */}
        <RoundedBox args={[2.4, 0.02, 1.1]} radius={0.02} smoothness={2} position={[0, -0.53, 0.15]}>
          <meshStandardMaterial
            color="#0369a1"
            emissive="#0284c7"
            emissiveIntensity={hovered ? 0.9 : 0.4}
            roughness={0.3}
          />
        </RoundedBox>

        {/* Floating Glass Trackpad */}
        <RoundedBox args={[0.9, 0.02, 0.5]} radius={0.02} smoothness={2} position={[0, -0.53, -0.6]}>
          <meshPhysicalMaterial
            color="#38bdf8"
            roughness={0.1}
            metalness={0.1}
            transmission={0.8}
            thickness={0.2}
          />
        </RoundedBox>

        {/* 2. Glass Display Screen Frame (Tilted Hinge) */}
        <group position={[0, 0.35, -0.9]} rotation={[-0.3, 0, 0]}>
          
          {/* Bezel */}
          <RoundedBox args={[2.8, 1.8, 0.08]} radius={0.06} smoothness={4} position={[0, 0, 0]}>
            <meshPhysicalMaterial
              color="#070d18"
              roughness={0.15}
              metalness={0.9}
            />
          </RoundedBox>

          {/* OLED Screen Surface */}
          <mesh position={[0, 0, 0.045]}>
            <planeGeometry args={[2.64, 1.64]} />
            <meshBasicMaterial color="#050a14" />
          </mesh>

          {/* Ultra-Premium Glass Refraction Shield */}
          <mesh position={[0, 0, 0.052]}>
            <planeGeometry args={[2.64, 1.64]} />
            <MeshTransmissionMaterial
              backside
              samples={8}
              resolution={512}
              transmission={0.92}
              roughness={0.08}
              thickness={0.35}
              ior={1.48}
              chromaticAberration={0.08}
              anisotropy={0.2}
              distortion={0.05}
              distortionScale={0.2}
              temporalDistortion={0.1}
              color="#e0f7fa"
            />
          </mesh>

          {/* Glowing Code / Terminal UI on Screen */}
          <group ref={screenTextRef} position={[0, 0, 0.06]}>
            {/* Terminal Header Bar */}
            <mesh position={[0, 0.65, 0]}>
              <planeGeometry args={[2.4, 0.15]} />
              <meshBasicMaterial color="#0f172a" />
            </mesh>
            
            {/* Window control dots */}
            <mesh position={[-1.05, 0.65, 0.001]}>
              <circleGeometry args={[0.03, 16]} />
              <meshBasicMaterial color="#ef4444" />
            </mesh>
            <mesh position={[-0.95, 0.65, 0.001]}>
              <circleGeometry args={[0.03, 16]} />
              <meshBasicMaterial color="#f59e0b" />
            </mesh>
            <mesh position={[-0.85, 0.65, 0.001]}>
              <circleGeometry args={[0.03, 16]} />
              <meshBasicMaterial color="#10b981" />
            </mesh>

            {/* Code lines */}
            <Text
              position={[-1.15, 0.42, 0]}
              fontSize={0.075}
              color="#38bdf8"
              anchorX="left"
              anchorY="top"
              font="https://fonts.gstatic.com/s/firacode/v22/uU9eCBsR6Z2vfE9aq3bL0fxyUs4tcw4W_D1sJV37Nv7g.woff"
            >
              {`const engineer = {\n  name: "Adarsh Kumar",\n  role: "Full Stack (MERN)",\n  stack: ["React", "Node", "MongoDB"]\n};`}
            </Text>

            <Text
              position={[-1.15, -0.05, 0]}
              fontSize={0.07}
              color="#2dd4bf"
              anchorX="left"
              anchorY="top"
              font="https://fonts.gstatic.com/s/firacode/v22/uU9eCBsR6Z2vfE9aq3bL0fxyUs4tcw4W_D1sJV37Nv7g.woff"
            >
              {`> Deploying scalable cloud SaaS...\n> Gzip/Brotli payload: -80%\n> Bundle Split: -70% JS\n> Status: READY 🟢`}
            </Text>
          </group>

        </group>

        {/* 3. Orbiting Holographic Gyro Ring */}
        <group rotation={[Math.PI / 4, 0, Math.PI / 6]}>
          <mesh>
            <torusGeometry args={[2.2, 0.02, 16, 64]} />
            <meshStandardMaterial
              color="#06b6d4"
              emissive="#22d3ee"
              emissiveIntensity={hovered ? 1.5 : 0.8}
              transparent
              opacity={0.7}
            />
          </mesh>
        </group>

        {/* Drag Hint Tooltip */}
        <group position={[0, -1.1, 0]}>
          <Text
            fontSize={0.09}
            color="#38bdf8"
            anchorX="center"
            anchorY="middle"
          >
            {isDragging.current ? "✦ Throw to release" : "✦ Grab & Drag Hero Setup"}
          </Text>
        </group>

      </Float>
    </group>
  );
}
