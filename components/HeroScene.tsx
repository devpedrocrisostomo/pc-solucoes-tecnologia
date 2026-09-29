'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Stars } from '@react-three/drei';
import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

function Core() {
  const group = useRef<THREE.Group>(null);
  useFrame((state, delta) => {
    if (!group.current) return;
    group.current.rotation.y += delta * 0.18;
    group.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.35) * 0.12;
  });

  return (
    <Float speed={1.2} rotationIntensity={0.35} floatIntensity={0.7}>
      <group ref={group}>
        <mesh>
          <torusKnotGeometry args={[1.25, 0.32, 150, 24]} />
          <meshStandardMaterial color="#0c1221" metalness={0.9} roughness={0.2} emissive="#061c3e" emissiveIntensity={1.4} />
        </mesh>
        <mesh scale={1.18}>
          <torusGeometry args={[1.65, 0.025, 16, 120]} />
          <meshBasicMaterial color="#1fa2ff" />
        </mesh>
        <mesh rotation={[Math.PI / 2.4, 0.2, 0.3]} scale={0.96}>
          <torusGeometry args={[1.8, 0.018, 16, 120]} />
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
    const update = () => setAnimate(!motion.matches && !small.matches);
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
        <Stars radius={30} depth={18} count={650} factor={2} saturation={0} fade speed={0.35} />
        <Core />
      </Canvas> : <div className="scene-fallback"><span>PC</span></div>}
    </div>
  );
}
