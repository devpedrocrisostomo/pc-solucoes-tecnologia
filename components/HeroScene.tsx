'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Environment, Lightformer } from '@react-three/drei';
import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

function Core() {
  const group = useRef<THREE.Group>(null);
  useFrame((state, delta) => {
    if (!group.current) return;
    group.current.rotation.y += delta * 0.12;
    group.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.35) * 0.12;
  });

  return (
    <Float speed={0.9} rotationIntensity={0.12} floatIntensity={0.35}>
      <group ref={group}>
        <mesh>
          <torusKnotGeometry args={[1.08, 0.28, 180, 32]} />
          <meshPhysicalMaterial color="#7194b8" metalness={1} roughness={0.19} clearcoat={1} clearcoatRoughness={0.12} />
        </mesh>
        <mesh rotation={[0.45, 0.2, -0.25]}>
          <torusGeometry args={[1.75, 0.014, 12, 120]} />
          <meshBasicMaterial color="#1fa2ff" />
        </mesh>
        <mesh rotation={[Math.PI / 2.4, 0.2, 0.3]} scale={0.96}>
          <torusGeometry args={[1.9, 0.012, 12, 120]} />
          <meshBasicMaterial color="#6c4cff" />
        </mesh>
      </group>
    </Float>
  );
}

export function HeroScene() {
  const [animate, setAnimate] = useState(false);
  useEffect(() => {
    const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
    const small = window.matchMedia('(max-width: 760px)');
    // Keep the existing static visual when the browser cannot render WebGL.
    let supportsWebGL = false;
    try {
      const canvas = document.createElement('canvas');
      const context = canvas.getContext('webgl2');
      supportsWebGL = Boolean(context);
      context?.getExtension('WEBGL_lose_context')?.loseContext();
    } catch {
      supportsWebGL = false;
    }
    const update = () => setAnimate(supportsWebGL && !motion.matches && !small.matches);
    update();
    motion.addEventListener('change', update);
    small.addEventListener('change', update);
    return () => { motion.removeEventListener('change', update); small.removeEventListener('change', update); };
  }, []);
  return (
    <div className="hero-scene" aria-hidden="true">
      {animate ? <Canvas camera={{ position: [0, 0, 5.2], fov: 42 }} dpr={[1, 1.5]} gl={{ antialias: true, powerPreference: 'high-performance' }}>
        <ambientLight intensity={0.55} />
        <pointLight position={[4, 3, 4]} intensity={20} color="#168cff" />
        <pointLight position={[-4, -2, 2]} intensity={12} color="#6748ff" />
        <Environment resolution={128}>
          <Lightformer intensity={4} position={[0, 3, 3]} scale={[6, 2, 1]} color="#e0eeff" />
          <Lightformer intensity={5} position={[-3, 0, 2]} rotation={[0, Math.PI / 3, 0]} scale={[2, 5, 1]} color="#168cff" />
          <Lightformer intensity={3} position={[3, -1, 1]} rotation={[0, -Math.PI / 3, 0]} scale={[2, 4, 1]} color="#8665ff" />
        </Environment>
        <Core />
      </Canvas> : <div className="scene-fallback"><span>PC</span></div>}
    </div>
  );
}
