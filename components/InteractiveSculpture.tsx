'use client';

import dynamic from 'next/dynamic';
import { Component, useEffect, useRef, useState, type ReactNode } from 'react';
import { Pause, Play } from 'lucide-react';
const Scene = dynamic(() => import('./HeroScene').then(module => module.HeroScene), { ssr: false, loading: () => <StaticSculpture/> });
function StaticSculpture() {
  return <div className="static-sculpture"><i/><i/><i/><span/></div>;
}
class SceneBoundary extends Component<{ children: ReactNode }, { failed: boolean }> {
  state = { failed: false };
  static getDerivedStateFromError() { return { failed: true }; }
  render() { return this.state.failed ? <StaticSculpture/> : this.props.children; }
}
export function InteractiveSculpture() {
  const root = useRef<HTMLDivElement>(null);
  const [supported, setSupported] = useState(false);
  const [reduce, setReduce] = useState(true);
  const [visible, setVisible] = useState(true);
  const [tabVisible, setTabVisible] = useState(true);
  const [paused, setPaused] = useState(false);
  useEffect(() => {
    const motion = matchMedia('(prefers-reduced-motion: reduce)');
    const update = () => setReduce(motion.matches);
    update(); motion.addEventListener('change', update);
    try {
      const gl = document.createElement('canvas').getContext('webgl2');
      setSupported(Boolean(gl)); gl?.getExtension('WEBGL_lose_context')?.loseContext();
    } catch { setSupported(false); }
    const observer = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting), { threshold: .05 });
    if (root.current) observer.observe(root.current);
    const visibility = () => setTabVisible(!document.hidden);
    document.addEventListener('visibilitychange', visibility);
    return () => { observer.disconnect(); motion.removeEventListener('change', update); document.removeEventListener('visibilitychange', visibility); };
  }, []);
  return <div ref={root} className="sculpture-stage">
    <div className="sculpture-grid" aria-hidden="true"/>
    <div className="hero-scene" aria-hidden="true">{supported && !reduce ? <SceneBoundary><Scene running={visible && tabVisible && !paused}/></SceneBoundary> : <StaticSculpture/>}</div>
    <span className="scene-label">SOFTWARE / IA / DADOS</span>
    {supported && !reduce && <button className="scene-toggle" type="button" onClick={() => setPaused(value => !value)} aria-label={paused ? 'Retomar animação 3D' : 'Pausar animação 3D'}>{paused ? <Play size={14}/> : <Pause size={14}/>}<span>{paused ? 'Retomar' : 'Pausar'}</span></button>}
  </div>;
}
