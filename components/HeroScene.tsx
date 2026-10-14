'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { Environment, Lightformer, RoundedBox } from '@react-three/drei';
import { useRef } from 'react';
import type { Group } from 'three';

function Sculpture({ running }: { running: boolean }) {
  const group = useRef<Group>(null);
  useFrame((state, delta) => {
    if (!group.current || !running) return;
    group.current.rotation.y += Math.min(delta, .05) * .13;
    group.current.rotation.x = Math.sin(state.clock.elapsedTime * .25) * .12 + state.pointer.y * .08;
    group.current.position.y = Math.sin(state.clock.elapsedTime * .65) * .09;
  });
  return <group ref={group} rotation={[.15, .25, -.2]}>
    {[0, 1, 2].map(i => <group key={i} rotation={[i * Math.PI / 3, i * Math.PI / 3, 0]}>
      <mesh><torusGeometry args={[1.35, .19, 20, 96]}/><meshPhysicalMaterial color={i === 1 ? '#d7f975' : '#bdc5bf'} metalness={i === 1 ? .45 : 1} roughness={.2} clearcoat={1}/></mesh>
    </group>)}
    <RoundedBox args={[.72, .72, .72]} radius={.13} smoothness={4} rotation={[.4, .4, .3]}><meshPhysicalMaterial color="#d7f975" metalness={.5} roughness={.18}/></RoundedBox>
  </group>;
}
export function HeroScene({ running }: { running: boolean }) {
  return <Canvas camera={{ position: [0, 0, 5.9], fov: 42 }} dpr={[1, 1.5]} frameloop={running ? 'always' : 'demand'} gl={{ antialias: true, powerPreference: 'low-power', alpha: true }}>
    <ambientLight intensity={.6}/><directionalLight position={[3, 4, 5]} intensity={2}/>
    <Environment resolution={128} frames={1}>
      <Lightformer intensity={5} position={[0, 4, 3]} scale={[6, 2, 1]} color="#ffffff"/>
      <Lightformer intensity={3} position={[-4, 0, 2]} rotation={[0, Math.PI / 3, 0]} scale={[2, 6, 1]} color="#d7f975"/>
      <Lightformer intensity={4} position={[4, -2, 1]} rotation={[0, -Math.PI / 3, 0]} scale={[3, 5, 1]} color="#a1b8a7"/>
    </Environment>
    <Sculpture running={running}/>
  </Canvas>;
}
