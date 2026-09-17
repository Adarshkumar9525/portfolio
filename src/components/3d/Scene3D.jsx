import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

export default function Scene3D({ activeSection }) {
  const mountRef = useRef(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    let animationFrameId;
    const width = container.clientWidth || window.innerWidth;
    const height = container.clientHeight || window.innerHeight;

    // 1. Scene & Camera Setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 0, 5.2);

    // 2. WebGL Renderer
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance'
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;
    container.appendChild(renderer.domElement);

    // 3. Lighting Setup
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.7);
    scene.add(ambientLight);

    const cyanKeyLight = new THREE.DirectionalLight(0x38bdf8, 2.5);
    cyanKeyLight.position.set(5, 8, 6);
    scene.add(cyanKeyLight);

    const tealFillLight = new THREE.DirectionalLight(0x2dd4bf, 1.8);
    tealFillLight.position.set(-6, -4, -3);
    scene.add(tealFillLight);

    const blueRimLight = new THREE.PointLight(0x3b82f6, 3, 20);
    blueRimLight.position.set(0, 4, -4);
    scene.add(blueRimLight);

    // 4. HERO 3D OBJECT: Stylized Glass Dev Workstation & Monolith
    const heroGroup = new THREE.Group();
    scene.add(heroGroup);

    // 4a. Base Laptop Deck (Dark metallic cyber chassis)
    const baseGeo = new THREE.BoxGeometry(2.6, 0.1, 1.8);
    const baseMat = new THREE.MeshPhysicalMaterial({
      color: 0x090e1a,
      metalness: 0.85,
      roughness: 0.2,
      clearcoat: 1,
      clearcoatRoughness: 0.1
    });
    const baseMesh = new THREE.Mesh(baseGeo, baseMat);
    baseMesh.position.set(0, -0.6, 0);
    heroGroup.add(baseMesh);

    // Illuminated Keyboard Bed
    const kbGeo = new THREE.BoxGeometry(2.3, 0.02, 1.0);
    const kbMat = new THREE.MeshStandardMaterial({
      color: 0x0284c7,
      emissive: 0x0369a1,
      emissiveIntensity: 0.8,
      roughness: 0.3
    });
    const kbMesh = new THREE.Mesh(kbGeo, kbMat);
    kbMesh.position.set(0, -0.54, 0.15);
    heroGroup.add(kbMesh);

    // Floating Glass Trackpad
    const padGeo = new THREE.BoxGeometry(0.8, 0.02, 0.45);
    const padMat = new THREE.MeshPhysicalMaterial({
      color: 0x38bdf8,
      transmission: 0.8,
      opacity: 0.9,
      transparent: true,
      roughness: 0.1,
      ior: 1.5
    });
    const padMesh = new THREE.Mesh(padGeo, padMat);
    padMesh.position.set(0, -0.54, -0.55);
    heroGroup.add(padMesh);

    // 4b. Display Screen Group (Hinged backward at 20 degrees)
    const screenGroup = new THREE.Group();
    screenGroup.position.set(0, 0.3, -0.85);
    screenGroup.rotation.x = -0.3;
    heroGroup.add(screenGroup);

    // Screen Bezel
    const screenFrameGeo = new THREE.BoxGeometry(2.6, 1.7, 0.08);
    const screenFrameMesh = new THREE.Mesh(screenFrameGeo, baseMat);
    screenGroup.add(screenFrameMesh);

    // OLED Screen Surface
    const screenSurfaceGeo = new THREE.PlaneGeometry(2.46, 1.56);
    const screenSurfaceMat = new THREE.MeshBasicMaterial({ color: 0x040812 });
    const screenSurfaceMesh = new THREE.Mesh(screenSurfaceGeo, screenSurfaceMat);
    screenSurfaceMesh.position.set(0, 0, 0.042);
    screenGroup.add(screenSurfaceMesh);

    // Refractive Glass Shield (MeshPhysicalMaterial with transmission)
    const glassShieldGeo = new THREE.PlaneGeometry(2.46, 1.56);
    const glassShieldMat = new THREE.MeshPhysicalMaterial({
      color: 0xe0f7fa,
      transmission: 0.92,
      opacity: 1,
      transparent: true,
      roughness: 0.06,
      ior: 1.52,
      thickness: 0.4,
      reflectivity: 0.9
    });
    const glassShieldMesh = new THREE.Mesh(glassShieldGeo, glassShieldMat);
    glassShieldMesh.position.set(0, 0, 0.048);
    screenGroup.add(glassShieldMesh);

    // Canvas Texture for Dynamic Code Screen UI
    const codeCanvas = document.createElement('canvas');
    codeCanvas.width = 512;
    codeCanvas.height = 320;
    const ctx = codeCanvas.getContext('2d');
    
    // Draw Terminal Header & Code lines
    ctx.fillStyle = '#0f172a';
    ctx.fillRect(0, 0, 512, 36);
    
    ctx.fillStyle = '#ef4444';
    ctx.beginPath(); ctx.arc(20, 18, 6, 0, Math.PI * 2); ctx.fill();
    ctx.fillStyle = '#f59e0b';
    ctx.beginPath(); ctx.arc(38, 18, 6, 0, Math.PI * 2); ctx.fill();
    ctx.fillStyle = '#10b981';
    ctx.beginPath(); ctx.arc(56, 18, 6, 0, Math.PI * 2); ctx.fill();

    ctx.font = 'bold 16px "Fira Code", monospace';
    ctx.fillStyle = '#38bdf8';
    ctx.fillText('const engineer = {', 20, 75);
    ctx.fillText('  name: "Adarsh Kumar",', 20, 105);
    ctx.fillText('  role: "Full Stack (MERN)",', 20, 135);
    ctx.fillText('  stack: ["React", "Node", "MongoDB"]', 20, 165);
    ctx.fillText('};', 20, 195);

    ctx.fillStyle = '#2dd4bf';
    ctx.fillText('> Cloud SaaS Deployed // 100 Seats', 20, 240);
    ctx.fillText('> Brotli Compression: -80% JSON', 20, 270);
    ctx.fillText('> Status: READY FOR IMPACT 🟢', 20, 300);

    const codeTexture = new THREE.CanvasTexture(codeCanvas);
    const codeScreenGeo = new THREE.PlaneGeometry(2.38, 1.48);
    const codeScreenMat = new THREE.MeshBasicMaterial({
      map: codeTexture,
      transparent: true,
      opacity: 0.95
    });
    const codeScreenMesh = new THREE.Mesh(codeScreenGeo, codeScreenMat);
    codeScreenMesh.position.set(0, 0, 0.052);
    screenGroup.add(codeScreenMesh);

    // 4c. Orbiting Holographic Torus Gyro Ring
    const torusGeo = new THREE.TorusGeometry(2.1, 0.02, 16, 64);
    const torusMat = new THREE.MeshStandardMaterial({
      color: 0x06b6d4,
      emissive: 0x22d3ee,
      emissiveIntensity: 1.2,
      transparent: true,
      opacity: 0.7
    });
    const torusMesh = new THREE.Mesh(torusGeo, torusMat);
    torusMesh.rotation.set(Math.PI / 4, 0, Math.PI / 6);
    heroGroup.add(torusMesh);

    // 5. SECTION 2 OBJECT: About Holographic 3D Screen
    const aboutGroup = new THREE.Group();
    aboutGroup.position.set(3.2, -7.5, -0.5);
    aboutGroup.rotation.set(0.05, 0.35, 0);
    scene.add(aboutGroup);

    const aboutFrameGeo = new THREE.BoxGeometry(3.0, 2.2, 0.08);
    const aboutFrameMesh = new THREE.Mesh(aboutFrameGeo, baseMat);
    aboutGroup.add(aboutFrameMesh);

    const aboutGlassMesh = new THREE.Mesh(new THREE.PlaneGeometry(2.88, 2.08), glassShieldMat);
    aboutGlassMesh.position.set(0, 0, 0.045);
    aboutGroup.add(aboutGlassMesh);

    const aboutCanvas = document.createElement('canvas');
    aboutCanvas.width = 512;
    aboutCanvas.height = 360;
    const actx = aboutCanvas.getContext('2d');
    actx.fillStyle = '#0a0f1d';
    actx.fillRect(0, 0, 512, 360);
    actx.font = 'bold 20px "Fira Code", monospace';
    actx.fillStyle = '#38bdf8';
    actx.fillText('SYSTEM PROFILE // ADARSH KUMAR', 24, 45);
    actx.font = '16px "Fira Code", monospace';
    actx.fillStyle = '#2dd4bf';
    actx.fillText('• B.Tech CSE, Haridwar University', 24, 90);
    actx.fillText('• Core MERN & Cloud Architecture', 24, 125);
    actx.fillText('• Meta Front-End Certified', 24, 160);
    actx.fillText('• IBM AI Professional Certified', 24, 195);
    actx.fillStyle = '#94a3b8';
    actx.fillText('• RESTful APIs & RBAC Middleware', 24, 245);
    actx.fillText('• Scalable MongoDB Indexing', 24, 280);
    actx.fillText('• Clean Architecture & Agile Sprint', 24, 315);

    const aboutTexture = new THREE.CanvasTexture(aboutCanvas);
    const aboutScreenMesh = new THREE.Mesh(
      new THREE.PlaneGeometry(2.8, 1.95),
      new THREE.MeshBasicMaterial({ map: aboutTexture, transparent: true })
    );
    aboutScreenMesh.position.set(0, 0, 0.05);
    aboutGroup.add(aboutScreenMesh);

    // 6. SECTION 3 OBJECTS: 3D Orbiting Skills Matrix
    const skillsGroup = new THREE.Group();
    skillsGroup.position.set(-2.8, -15.5, 0);
    scene.add(skillsGroup);

    const skillsData = [
      { name: 'React 19', color: 0x61dafb, x: -1.8, y: 0.8, z: 0.4 },
      { name: 'Next.js', color: 0xffffff, x: -0.8, y: 1.5, z: -0.3 },
      { name: 'Node.js', color: 0x68a063, x: 1.0, y: 1.4, z: -0.2 },
      { name: 'Express.js', color: 0xe2e8f0, x: 2.0, y: 0.6, z: 0.4 },
      { name: 'MongoDB', color: 0x47a248, x: -2.0, y: -0.6, z: -0.2 },
      { name: 'Tailwind', color: 0x38bdf8, x: -0.8, y: -1.3, z: 0.5 },
      { name: 'REST APIs', color: 0x06b6d4, x: 1.0, y: -1.2, z: 0.4 },
      { name: 'Docker', color: 0x2496ed, x: 2.0, y: -0.5, z: -0.3 },
      { name: 'Vite', color: 0x646cff, x: 0, y: 0, z: 0.8 }
    ];

    const skillChips = [];
    skillsData.forEach((s) => {
      const chipCanvas = document.createElement('canvas');
      chipCanvas.width = 256;
      chipCanvas.height = 96;
      const sctx = chipCanvas.getContext('2d');
      sctx.fillStyle = '#0f172a';
      sctx.roundRect(4, 4, 248, 88, 16);
      sctx.fill();
      sctx.lineWidth = 4;
      sctx.strokeStyle = '#' + s.color.toString(16).padStart(6, '0');
      sctx.stroke();
      sctx.font = 'bold 24px "Inter", sans-serif';
      sctx.fillStyle = '#ffffff';
      sctx.textAlign = 'center';
      sctx.fillText(s.name, 128, 56);

      const chipTex = new THREE.CanvasTexture(chipCanvas);
      const chipGeo = new THREE.PlaneGeometry(1.2, 0.45);
      const chipMat = new THREE.MeshBasicMaterial({ map: chipTex, transparent: true });
      const chipMesh = new THREE.Mesh(chipGeo, chipMat);
      chipMesh.position.set(s.x, s.y, s.z);
      skillsGroup.add(chipMesh);
      skillChips.push({ mesh: chipMesh, basePos: new THREE.Vector3(s.x, s.y, s.z) });
    });

    // 7. SECTION 4 OBJECTS: 3D Experience Vertical Rail
    const expGroup = new THREE.Group();
    expGroup.position.set(2.6, -23.5, 0);
    scene.add(expGroup);

    const railGeo = new THREE.CylinderGeometry(0.02, 0.02, 6, 16);
    const railMat = new THREE.MeshStandardMaterial({
      color: 0x06b6d4,
      emissive: 0x06b6d4,
      emissiveIntensity: 0.9
    });
    const railMesh = new THREE.Mesh(railGeo, railMat);
    expGroup.add(railMesh);

    // 8. SECTION 5 OBJECTS: 3D Rotating Glass Project Panels
    const projGroup = new THREE.Group();
    projGroup.position.set(0, -32.5, -0.5);
    scene.add(projGroup);

    const projectsData = [
      { title: "Mishra Library ERP", tag: "Enterprise SaaS", stat: "80% JSON Compressed", x: -2.4, rotY: 0.3 },
      { title: "AI Doctor System", tag: "Gemini AI + MERN", stat: "Smart Medical Triage", x: 0, rotY: 0 },
      { title: "Job Portal Engine", tag: "Vite + Clerk OAuth", stat: "High-Efficiency Indexing", x: 2.4, rotY: -0.3 }
    ];

    projectsData.forEach((p) => {
      const pGroup = new THREE.Group();
      pGroup.position.set(p.x, 0, 0);
      pGroup.rotation.y = p.rotY;

      const pBoxMesh = new THREE.Mesh(new THREE.BoxGeometry(1.9, 2.6, 0.08), baseMat);
      pGroup.add(pBoxMesh);

      const pGlassMesh = new THREE.Mesh(new THREE.PlaneGeometry(1.8, 2.5), glassShieldMat);
      pGlassMesh.position.set(0, 0, 0.045);
      pGroup.add(pGlassMesh);

      const pCanvas = document.createElement('canvas');
      pCanvas.width = 384;
      pCanvas.height = 512;
      const pctx = pCanvas.getContext('2d');
      pctx.fillStyle = '#090e1a';
      pctx.fillRect(0, 0, 384, 512);

      pctx.font = 'bold 16px "Fira Code", monospace';
      pctx.fillStyle = '#06b6d4';
      pctx.fillText(p.tag, 24, 40);

      pctx.font = 'bold 24px "Inter", sans-serif';
      pctx.fillStyle = '#ffffff';
      pctx.fillText(p.title, 24, 85);

      pctx.font = '16px "Inter", sans-serif';
      pctx.fillStyle = '#94a3b8';
      pctx.fillText('• Scalable Production MERN', 24, 140);
      pctx.fillText('• 70% Initial Bundle Cut', 24, 175);
      pctx.fillText('• Automated Cloud Pipelines', 24, 210);

      pctx.font = 'bold 18px "Fira Code", monospace';
      pctx.fillStyle = '#2dd4bf';
      pctx.fillText(p.stat, 24, 300);

      const pTex = new THREE.CanvasTexture(pCanvas);
      const pMesh = new THREE.Mesh(new THREE.PlaneGeometry(1.75, 2.4), new THREE.MeshBasicMaterial({ map: pTex, transparent: true }));
      pMesh.position.set(0, 0, 0.05);
      pGroup.add(pMesh);

      projGroup.add(pGroup);
    });

    // 9. SECTION 6 OBJECT: Outro Studio Environment Reveal Grid
    const outroGroup = new THREE.Group();
    outroGroup.position.set(0, -41, -4);
    scene.add(outroGroup);

    const gridHelper = new THREE.GridHelper(30, 30, 0x06b6d4, 0x1e293b);
    gridHelper.position.set(0, -2, 0);
    outroGroup.add(gridHelper);

    // 10. Ambient Cyber Starfield Particles
    const particleCount = 180;
    const particleGeo = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount * 3; i += 3) {
      particlePositions[i] = (Math.random() - 0.5) * 20;
      particlePositions[i + 1] = (Math.random() - 0.5) * 50 - 20;
      particlePositions[i + 2] = (Math.random() - 0.5) * 15;
    }
    particleGeo.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));
    const particleMat = new THREE.PointsMaterial({
      color: 0x38bdf8,
      size: 0.06,
      transparent: true,
      opacity: 0.6
    });
    const particles = new THREE.Points(particleGeo, particleMat);
    scene.add(particles);

    // ==========================================
    // 11. DRAGGABLE & THROWABLE SPRING PHYSICS
    // ==========================================
    let isDragging = false;
    let mouseX = 0, mouseY = 0;
    const heroPos = { x: 0, y: 0, z: 0 };
    const heroTarget = { x: 0, y: 0, z: 0 };
    const heroVelocity = { x: 0, y: 0 };
    let lastPointerX = 0, lastPointerY = 0, lastPointerTime = 0;

    const onPointerDown = (e) => {
      // Only drag if clicking in hero section (scrollY < 400)
      if (window.scrollY < 400) {
        isDragging = true;
        lastPointerX = e.clientX;
        lastPointerY = e.clientY;
        lastPointerTime = performance.now();
        document.body.style.cursor = 'grabbing';
      }
    };

    const onPointerMove = (e) => {
      mouseX = (e.clientX / window.innerWidth) * 2 - 1;
      mouseY = -(e.clientY / window.innerHeight) * 2 + 1;

      if (isDragging) {
        const now = performance.now();
        const dt = Math.max((now - lastPointerTime) / 1000, 0.001);
        const dx = (e.clientX - lastPointerX) / (window.innerWidth * 0.5);
        const dy = -(e.clientY - lastPointerY) / (window.innerHeight * 0.5);

        heroVelocity.x = dx / dt;
        heroVelocity.y = dy / dt;

        heroTarget.x = mouseX * 2.5;
        heroTarget.y = mouseY * 1.8;

        lastPointerX = e.clientX;
        lastPointerY = e.clientY;
        lastPointerTime = now;
      }
    };

    const onPointerUp = () => {
      if (isDragging) {
        isDragging = false;
        document.body.style.cursor = 'auto';
        // Target returns smoothly to rest origin
        heroTarget.x = 0;
        heroTarget.y = 0;
      }
    };

    window.addEventListener('pointerdown', onPointerDown);
    window.addEventListener('pointermove', onPointerMove);
    window.addEventListener('pointerup', onPointerUp);

    // ==========================================
    // 12. SCROLL CAMERA CHOREOGRAPHY
    // ==========================================
    const cameraWaypoints = [
      { scroll: 0.00, pos: [0, 0, 5.2], look: [0, 0, 0] },
      { scroll: 0.18, pos: [0.6, -7.5, 4.4], look: [2.5, -7.5, 0] },
      { scroll: 0.38, pos: [-0.6, -15.5, 5.2], look: [-2.2, -15.5, 0] },
      { scroll: 0.58, pos: [0.7, -23.5, 4.8], look: [2.0, -23.5, 0] },
      { scroll: 0.78, pos: [0, -32.5, 5.4], look: [0, -32.5, 0] },
      { scroll: 1.00, pos: [0, -39.5, 11.5], look: [0, -41.0, 0] }
    ];

    let currentCamPos = new THREE.Vector3(0, 0, 5.2);
    let currentCamLook = new THREE.Vector3(0, 0, 0);

    // 13. Animation Render Loop (60fps)
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Compute scroll percentage [0..1]
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const p = maxScroll > 0 ? Math.min(Math.max(window.scrollY / maxScroll, 0), 1) : 0;

      // Find camera waypoint segment
      let idx = 0;
      for (let i = 0; i < cameraWaypoints.length - 1; i++) {
        if (p >= cameraWaypoints[i].scroll && p <= cameraWaypoints[i + 1].scroll) {
          idx = i;
          break;
        }
      }

      const startWP = cameraWaypoints[idx];
      const endWP = cameraWaypoints[Math.min(idx + 1, cameraWaypoints.length - 1)];
      const span = endWP.scroll - startWP.scroll || 1;
      const factor = Math.min(Math.max((p - startWP.scroll) / span, 0), 1);
      const ease = factor < 0.5 ? 4 * factor * factor * factor : 1 - Math.pow(-2 * factor + 2, 3) / 2;

      const targetX = THREE.MathUtils.lerp(startWP.pos[0], endWP.pos[0], ease) + mouseX * 0.15;
      const targetY = THREE.MathUtils.lerp(startWP.pos[1], endWP.pos[1], ease) + mouseY * 0.1;
      const targetZ = THREE.MathUtils.lerp(startWP.pos[2], endWP.pos[2], ease);

      const lookX = THREE.MathUtils.lerp(startWP.look[0], endWP.look[0], ease);
      const lookY = THREE.MathUtils.lerp(startWP.look[1], endWP.look[1], ease);
      const lookZ = THREE.MathUtils.lerp(startWP.look[2], endWP.look[2], ease);

      currentCamPos.x = THREE.MathUtils.lerp(currentCamPos.x, targetX, 0.08);
      currentCamPos.y = THREE.MathUtils.lerp(currentCamPos.y, targetY, 0.08);
      currentCamPos.z = THREE.MathUtils.lerp(currentCamPos.z, targetZ, 0.08);

      currentCamLook.x = THREE.MathUtils.lerp(currentCamLook.x, lookX, 0.08);
      currentCamLook.y = THREE.MathUtils.lerp(currentCamLook.y, lookY, 0.08);
      currentCamLook.z = THREE.MathUtils.lerp(currentCamLook.z, lookZ, 0.08);

      camera.position.copy(currentCamPos);
      camera.lookAt(currentCamLook);

      // Hero object spring physics & idle float
      if (isDragging) {
        heroPos.x = THREE.MathUtils.lerp(heroPos.x, heroTarget.x, 0.25);
        heroPos.y = THREE.MathUtils.lerp(heroPos.y, heroTarget.y, 0.25);
      } else {
        heroVelocity.x *= 0.92;
        heroVelocity.y *= 0.92;
        heroTarget.x += heroVelocity.x * 0.02;
        heroTarget.y += heroVelocity.y * 0.02;

        heroPos.x = THREE.MathUtils.lerp(heroPos.x, heroTarget.x, 0.08);
        heroPos.y = THREE.MathUtils.lerp(heroPos.y, heroTarget.y + Math.sin(elapsedTime * 2) * 0.06, 0.08);
      }

      heroGroup.position.set(heroPos.x, heroPos.y, heroPos.z);
      heroGroup.rotation.y = -0.25 + mouseX * 0.4;
      heroGroup.rotation.x = 0.15 - mouseY * 0.3;

      // Rotate Gyro ring
      torusMesh.rotation.z = elapsedTime * 0.8;

      // Animate Skill Chips float
      skillChips.forEach((chip, i) => {
        chip.mesh.position.y = chip.basePos.y + Math.sin(elapsedTime * 2 + i) * 0.08;
      });

      // Animate About Group floating
      aboutGroup.position.y = -7.5 + Math.sin(elapsedTime * 1.5) * 0.08;

      // Animate Outro grid glow
      gridHelper.rotation.y = elapsedTime * 0.05;

      renderer.render(scene, camera);
    };

    animate();
    setLoaded(true);

    // Resize handler
    const handleResize = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('pointerdown', onPointerDown);
      window.removeEventListener('pointermove', onPointerMove);
      window.removeEventListener('pointerup', onPointerUp);
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="fixed inset-0 z-0 pointer-events-auto overflow-hidden transition-opacity duration-700"
      style={{ opacity: loaded ? 1 : 0 }}
    />
  );
}
