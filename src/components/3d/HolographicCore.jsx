import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const HolographicCore = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const width = container.clientWidth || 320;
    const height = container.clientHeight || 320;

    // 1. Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.z = 7;

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance'
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // 2. Central 3D Group
    const coreGroup = new THREE.Group();
    scene.add(coreGroup);

    // Inner Glowing Core (Icosahedron Solid with Glow)
    const innerGeo = new THREE.IcosahedronGeometry(1.2, 1);
    const innerMat = new THREE.MeshPhysicalMaterial({
      color: 0x00d4ff,
      emissive: 0x6366f1,
      emissiveIntensity: 0.6,
      roughness: 0.1,
      metalness: 0.8,
      wireframe: false,
      transparent: true,
      opacity: 0.85
    });
    const innerMesh = new THREE.Mesh(innerGeo, innerMat);
    coreGroup.add(innerMesh);

    // Outer Wireframe Lattice
    const wireGeo = new THREE.IcosahedronGeometry(1.65, 1);
    const wireMat = new THREE.MeshBasicMaterial({
      color: 0xa855f7,
      wireframe: true,
      transparent: true,
      opacity: 0.65
    });
    const wireMesh = new THREE.Mesh(wireGeo, wireMat);
    coreGroup.add(wireMesh);

    // Outer Gyroscope Rings (2 tilted rings)
    const ringGeo1 = new THREE.TorusGeometry(2.1, 0.02, 16, 100);
    const ringMat1 = new THREE.MeshBasicMaterial({ color: 0x38bdf8, transparent: true, opacity: 0.7 });
    const ring1 = new THREE.Mesh(ringGeo1, ringMat1);
    ring1.rotation.x = Math.PI / 3;
    coreGroup.add(ring1);

    const ringGeo2 = new THREE.TorusGeometry(2.35, 0.015, 16, 100);
    const ringMat2 = new THREE.MeshBasicMaterial({ color: 0xec4899, transparent: true, opacity: 0.5 });
    const ring2 = new THREE.Mesh(ringGeo2, ringMat2);
    ring2.rotation.y = Math.PI / 4;
    ring2.rotation.x = -Math.PI / 6;
    coreGroup.add(ring2);

    // Surrounding Ambient Particle Swarm
    const particleCount = 120;
    const particleGeo = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount; i++) {
      const radius = 2.4 + Math.random() * 1.6;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos((Math.random() * 2) - 1);

      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = radius * Math.cos(phi);

      // Alternating cyan and violet particle aura
      if (i % 2 === 0) {
        colors[i * 3] = 0.0;     // R
        colors[i * 3 + 1] = 0.83; // G
        colors[i * 3 + 2] = 1.0;  // B
      } else {
        colors[i * 3] = 0.75;    // R
        colors[i * 3 + 1] = 0.35; // G
        colors[i * 3 + 2] = 0.98; // B
      }
    }

    particleGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    particleGeo.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const particleMat = new THREE.PointsMaterial({
      size: 0.06,
      vertexColors: true,
      transparent: true,
      opacity: 0.85
    });
    const particles = new THREE.Points(particleGeo, particleMat);
    coreGroup.add(particles);

    // 3. Lighting
    const pointLight = new THREE.PointLight(0x00f0ff, 2, 50);
    pointLight.position.set(2, 3, 4);
    scene.add(pointLight);

    const purpleLight = new THREE.PointLight(0xc084fc, 2, 50);
    purpleLight.position.set(-3, -2, 3);
    scene.add(purpleLight);

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    // 4. Mouse Tracking & Smooth Lerping
    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;
    let boostSpin = 0;

    const prefersReducedMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const handleMouseMove = (event) => {
      // Calculate normalized mouse coordinates (-1 to 1) relative to window
      const normX = (event.clientX / window.innerWidth) * 2 - 1;
      const normY = -(event.clientY / window.innerHeight) * 2 + 1;

      targetX = normY * 0.85;
      targetY = normX * 0.85;
    };

    const handleClick = () => {
      if (!prefersReducedMotion) {
        boostSpin = 0.35;
      }
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    container.addEventListener('click', handleClick);

    // 5. Animation Loop with Visibility Change Pause
    let animId;
    let isPaused = false;
    let clock = new THREE.Clock();

    const animate = () => {
      if (isPaused) return;
      animId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Lerp mouse target rotation
      currentX += (targetX - currentX) * 0.05;
      currentY += (targetY - currentY) * 0.05;

      if (!prefersReducedMotion) {
        // Base auto rotation + mouse tilt + boost decay
        boostSpin *= 0.94;
        coreGroup.rotation.x = currentX + Math.sin(elapsedTime * 0.8) * 0.1;
        coreGroup.rotation.y = currentY + elapsedTime * 0.35 + boostSpin;

        // Individual mesh micro-motions
        wireMesh.rotation.y = -elapsedTime * 0.45;
        wireMesh.rotation.z = elapsedTime * 0.2;
        ring1.rotation.z = elapsedTime * 0.5;
        ring2.rotation.z = -elapsedTime * 0.4;
        particles.rotation.y = elapsedTime * 0.1;

        // Pulsing scale
        const pulse = 1 + Math.sin(elapsedTime * 2) * 0.03;
        innerMesh.scale.set(pulse, pulse, pulse);
      } else {
        coreGroup.rotation.x = currentX;
        coreGroup.rotation.y = currentY;
      }

      renderer.render(scene, camera);
    };

    const handleVisibilityChange = () => {
      if (document.hidden) {
        isPaused = true;
        if (animId) cancelAnimationFrame(animId);
      } else {
        isPaused = false;
        animId = requestAnimationFrame(animate);
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    animate();

    // 6. Resize Handler with dimension guards
    const handleResize = () => {
      if (!container) return;
      const newW = container.clientWidth;
      const newH = container.clientHeight;
      if (!newW || !newH) return;
      camera.aspect = newW / newH;
      camera.updateProjectionMatrix();
      renderer.setSize(newW, newH);
    };

    window.addEventListener('resize', handleResize);

    // 7. Cleanup
    return () => {
      if (animId) cancelAnimationFrame(animId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      container.removeEventListener('click', handleClick);

      innerGeo.dispose();
      innerMat.dispose();
      wireGeo.dispose();
      wireMat.dispose();
      ringGeo1.dispose();
      ringMat1.dispose();
      ringGeo2.dispose();
      ringMat2.dispose();
      particleGeo.dispose();
      particleMat.dispose();
      renderer.dispose();

      if (renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div className="relative flex items-center justify-center cursor-pointer select-none group">
      {/* 3D Canvas Viewport */}
      <div
        ref={mountRef}
        className="w-64 h-64 md:w-80 md:h-80 transition-transform duration-500 group-hover:scale-105"
        title="Interactive 3D Core - Follows your cursor & click to spin!"
      />

      {/* Ambient Radial Neon Glow Backdrop */}
      <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/20 via-indigo-500/20 to-purple-500/20 blur-3xl -z-10 rounded-full opacity-60 pointer-events-none group-hover:opacity-90 transition-opacity duration-500" />

      {/* Floating Status Pill */}
      <div className="absolute -bottom-1 px-3 py-1 bg-vscode-bg/90 backdrop-blur-md border border-vscode-accent/40 rounded-full text-[11px] font-mono text-vscode-accent flex items-center gap-1.5 shadow-lg pointer-events-none">
        <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping inline-block" />
        <span>3D CORE ACTIVE • MOUSE REACTIVE</span>
      </div>
    </div>
  );
};

export default React.memo(HolographicCore);
