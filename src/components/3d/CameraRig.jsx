import React, { useRef, useEffect } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

// Waypoints mapped to normalized scroll [0..1]
const cameraWaypoints = [
  // 0. Hero (Close-up on Draggable Hero Dev Object)
  { scroll: 0.00, pos: new THREE.Vector3(0, 0, 4.5), look: new THREE.Vector3(0, 0, 0) },
  // 1. About (Pan & Orbit towards Holographic 3D Terminal Screen)
  { scroll: 0.18, pos: new THREE.Vector3(0.6, -7.5, 4.4), look: new THREE.Vector3(2.5, -7.5, 0) },
  // 2. Skills (Glide to floating 3D orbiting skill chips)
  { scroll: 0.38, pos: new THREE.Vector3(-0.6, -15.5, 5.2), look: new THREE.Vector3(-2.2, -15.5, 0) },
  // 3. Experience (Travel along glowing 3D timeline rail)
  { scroll: 0.58, pos: new THREE.Vector3(0.7, -23.5, 4.8), look: new THREE.Vector3(2.0, -23.5, 0) },
  // 4. Projects (Focus on rotating 3D glass project showcase panels)
  { scroll: 0.78, pos: new THREE.Vector3(0, -32.5, 5.4), look: new THREE.Vector3(0, -32.5, 0) },
  // 5. Outro / Reveal (Dramatic wide camera pull-back showing entire studio scene)
  { scroll: 1.00, pos: new THREE.Vector3(0, -39.5, 11.5), look: new THREE.Vector3(0, -41.0, 0) }
];

export default function CameraRig() {
  const { camera } = useThree();
  const scrollProgress = useRef(0);
  const currentPos = useRef(new THREE.Vector3(0, 0, 4.5));
  const currentLook = useRef(new THREE.Vector3(0, 0, 0));
  const targetPos = useRef(new THREE.Vector3(0, 0, 4.5));
  const targetLook = useRef(new THREE.Vector3(0, 0, 0));

  useEffect(() => {
    const handleScroll = () => {
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (maxScroll > 0) {
        scrollProgress.current = Math.min(Math.max(window.scrollY / maxScroll, 0), 1);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useFrame((state, delta) => {
    const p = scrollProgress.current;

    // Find the current segment in waypoints
    let idx = 0;
    for (let i = 0; i < cameraWaypoints.length - 1; i++) {
      if (p >= cameraWaypoints[i].scroll && p <= cameraWaypoints[i + 1].scroll) {
        idx = i;
        break;
      }
    }

    const startWP = cameraWaypoints[idx];
    const endWP = cameraWaypoints[Math.min(idx + 1, cameraWaypoints.length - 1)];
    const segmentSpan = endWP.scroll - startWP.scroll || 1;
    const segmentFactor = Math.min(Math.max((p - startWP.scroll) / segmentSpan, 0), 1);

    // Smooth cubic easing for camera interpolation
    const ease = segmentFactor < 0.5
      ? 4 * segmentFactor * segmentFactor * segmentFactor
      : 1 - Math.pow(-2 * segmentFactor + 2, 3) / 2;

    targetPos.current.lerpVectors(startWP.pos, endWP.pos, ease);
    targetLook.current.lerpVectors(startWP.look, endWP.look, ease);

    // Parallax sway
    const mouseSwayX = state.pointer.x * 0.2;
    const mouseSwayY = state.pointer.y * 0.15;

    currentPos.current.x = THREE.MathUtils.lerp(currentPos.current.x, targetPos.current.x + mouseSwayX, 0.08);
    currentPos.current.y = THREE.MathUtils.lerp(currentPos.current.y, targetPos.current.y + mouseSwayY, 0.08);
    currentPos.current.z = THREE.MathUtils.lerp(currentPos.current.z, targetPos.current.z, 0.08);

    currentLook.current.lerp(targetLook.current, 0.08);

    camera.position.copy(currentPos.current);
    camera.lookAt(currentLook.current);
  });

  return null;
}
