'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Bot, BrainCircuit, Code2, Database, Github, Menu, Network, Sparkles, Workflow, X, ExternalLink, CheckCircle2 } from 'lucide-react';
import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';

const HeroScene = dynamic(() => import('@/components/HeroScene').then(module => module.HeroScene), { ssr: false, loading: () => <div className="hero-scene"><div className="scene-fallback"><span>PC</span></div></div> });

const services = [
  { icon: Code2, title: 'Desenvolvimento de Sistemas', text: 'Sistemas web e aplicações personalizadas alinhadas à operação do negócio.' },
  { icon: BrainCircuit, title: 'Inteligência Artificial', text: 'Agentes de IA, automações inteligentes, RAG e integração com LLMs.' },
  { icon: Workflow, title: 'Automação de Processos', text: 'Integrações, fluxos automatizados e redução de tarefas manuais.' },
  { icon: Database, title: 'Dados & Dashboards', text: 'Indicadores, relatórios e visualizações para decisões mais rápidas.' },
  { icon: Network, title: 'Consultoria em TI', text: 'Diagnóstico, arquitetura e implementação de soluções tecnológicas.' },
];

const projects = [
  { name: 'NexLead AI', tag: 'Em desenvolvimento', desc: 'CRM, automação e inteligência artificial para pequenas empresas.', stack: ['Next.js', 'Supabase', 'IA', 'Automação'] },
  { name: 'SocialFlow', tag: 'Sistema', desc: 'Gestão para assistência social com indicadores, relatórios e acompanhamento operacional.', stack: ['React', 'Node.js', 'PostgreSQL', 'Recharts'] },
  { name: 'JurisFlow', tag: 'LegalTech', desc: 'Gestão digital para escritórios jurídicos, centralizando processos e informações.', stack: ['Next.js', 'Prisma', 'PostgreSQL'] },
  { name: 'HelpDesk Pro', tag: 'Operações', desc: 'Gerenciamento de suporte, chamados e solicitações com foco em eficiência.', stack: ['React', 'Node.js', 'Tailwind'] },
  { name: 'PlotTher', tag: 'Cliente real', desc: 'Projeto comercial completo: UX, desenvolvimento, publicação e domínio.', stack: ['Web', 'UX/UI', 'SEO', 'Deploy'], url: 'https://plotther.com.br' },
];

const contactEmail = 'devpedrocrisostomo@gmail.com';
const contactHref = `mailto:${contactEmail}`;

const reveal = { initial: { opacity: 0, y: 22 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, amount: 0.2 }, transition: { duration: 0.6 } };

export default function Home() {
  const [open, setOpen] = useState(false);
  const [showScene, setShowScene] = useState(false);
  useEffect(() => {
    const compact = window.matchMedia('(max-width: 760px)');
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
    const update = () => setShowScene(!compact.matches && !reduced.matches);
    compact.addEventListener('change', update);
    reduced.addEventListener('change', update);
    update();
    return () => { compact.removeEventListener('change', update); reduced.removeEventListener('change', update); };
  }, []);

  return (
    <main>
      <a className="skip-link" href="#conteudo">Pular para o conteúdo</a>
      <header className="nav-wrap">
        <nav className="nav container">
          <a href="#inicio" className="brand" aria-label="PC Soluções em Tecnologia">
            <span className="brand-mark">PC</span>
            <span><strong>PC SOLUÇÕES</strong><small>EM TECNOLOGIA</small></span>
          </a>
          <div id="navegacao-mobile" className={`nav-links ${open ? 'open' : ''}`}>
            {['Início', 'Serviços', 'Projetos', 'Sobre', 'Experiência', 'Tecnologias', 'Contato'].map((item) => (
              <a key={item} href={item === 'Contato' ? contactHref : `#${item.toLowerCase().replace('í','i').replace('ç','c').replace('ê','e')}`} onClick={() => setOpen(false)}>{item}</a>
            ))}
          </div>
          <a href={contactHref} className="btn btn-small desktop-cta">Fale comigo <ArrowRight size={16}/></a>
          <button className="menu-btn" type="button" onClick={() => setOpen(!open)} aria-label={open ? 'Fechar menu' : 'Abrir menu'} aria-expanded={open} aria-controls="navegacao-mobile">{open ? <X /> : <Menu />}</button>
        </nav>
      </header>

      <section className="hero section" id="inicio"><div id="conteudo" tabIndex={-1} />
        <div className="hero-grid container">
          <motion.div className="hero-copy" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .7 }}>
            <span className="eyebrow">CONSULTORIA EM TECNOLOGIA</span>
            <h1>Tecnologia que transforma <span>negócios.</span></h1>
            <p>A PC Soluções em Tecnologia desenvolve software, automações e soluções com Inteligência Artificial e dados para empresas que querem operar melhor, crescer e inovar.</p>
            <div className="hero-chips">
              <span><Code2 size={16}/> Software</span><span><Bot size={16}/> IA</span><span><Workflow size={16}/> Automação</span><span><Database size={16}/> Dados</span><span><Network size={16}/> Consultoria</span>
            </div>
            <div className="hero-actions"><a href="#projetos" className="btn">Conheça os projetos <ArrowRight size={17}/></a><a href={contactHref} className="btn btn-ghost">Solicite uma consultoria</a></div>
            <div className="stats"><div><strong>5</strong><span>Projetos em destaque</span></div><div><strong>5</strong><span>Frentes de atuação</span></div><div><strong>100%</strong><span>Foco em soluções reais</span></div></div>
          </motion.div>
          <div className="hero-visual">{showScene ? <HeroScene /> : <div className="hero-scene"><div className="scene-fallback" aria-hidden="true"><span>PC</span></div></div>}<div className="hero-logo"><strong>PC</strong><span>SOLUÇÕES</span><small>SOFTWARE • IA • AUTOMAÇÃO • DADOS</small></div></div>
        </div>
      </section>

      <section className="section compact" id="servicos"><div className="container"><div className="services-grid">{services.map(({icon: Icon, title, text}) => <motion.article className="service-card" key={title} {...reveal}><Icon/><h3>{title}</h3><p>{text}</p><ArrowRight className="card-arrow" size={18}/></motion.article>)}</div></div></section>

      <section className="section" id="projetos"><div className="container"><motion.div className="section-head" {...reveal}><div><span className="eyebrow">PROJETOS EM DESTAQUE</span><h2>Soluções reais para <span>desafios reais.</span></h2></div><p>Cada projeto combina tecnologia, experiência do usuário e entendimento de negócio.</p></motion.div><div className="projects-grid">{projects.map((p, i) => <motion.article className={`project-card ${i === 0 ? 'featured' : ''}`} key={p.name} {...reveal}><div className="project-glow" aria-hidden="true"></div><div className="project-art" aria-hidden="true"><span>{p.name.slice(0,2).toUpperCase()}</span><i/><i/><i/></div><span className="project-tag">{p.tag}</span><h3>{p.name}</h3><p>{p.desc}</p><div className="stack">{p.stack.map(s => <span key={s}>{s}</span>)}</div>{p.url && <a className="project-link" href={p.url} target="_blank" rel="noopener noreferrer" aria-label={`Visitar projeto ${p.name} (abre em nova aba)`}><ExternalLink size={18}/></a>}</motion.article>)}</div></div></section>

      <section className="section about" id="sobre"><div className="container about-grid"><motion.div {...reveal}><span className="eyebrow">SOBRE A PC</span><h2>Mais que tecnologia, parceria para o <span>seu sucesso.</span></h2><p>A PC Soluções em Tecnologia nasce da visão de que tecnologia deve resolver problemas reais, simplificar processos e criar novas oportunidades.</p><div className="founder-card"><div className="avatar" aria-hidden="true">PC</div><div><strong>Pedro Crisóstomo</strong><span>Founder & CEO / IT Consultant</span><p>Experiência em desenvolvimento, IA, automação, dados, suporte e relacionamento com clientes. Da descoberta do problema à entrega da solução.</p><div className="social"><a href="https://github.com/devpedrocrisostomo" target="_blank" rel="noopener noreferrer" aria-label="GitHub de Pedro Crisóstomo (abre em nova aba)"><Github size={18}/></a></div></div></div></motion.div><motion.div className="value-grid" {...reveal}>{[['Visão de negócio','Entendimento real do problema.'],['Soluções personalizadas','Tecnologia aplicada ao contexto.'],['Experiência completa','Da operação à solução digital.'],['Foco em resultados','Projetos que geram valor.']].map(([a,b]) => <div className="value-card" key={a}><Sparkles/><strong>{a}</strong><span>{b}</span></div>)}</motion.div></div></section>

      <section className="section experience" id="experiencia"><div className="container"><motion.div className="section-head" {...reveal}><div><span className="eyebrow">EXPERIÊNCIA</span><h2>Experiência técnica com <span>visão de operação.</span></h2></div><p>Uma trajetória que conecta desenvolvimento, atendimento e melhoria de processos.</p></motion.div><div className="experience-grid">{[['Desenvolvimento e sistemas','Aplicações web, integrações, bancos de dados e interfaces orientadas à experiência de uso.'],['Automação e relacionamento','Atuação com CRM, indicadores, processos e soluções de IA aplicadas ao trabalho de equipes.'],['Consultoria e entrega','Diagnóstico, proposta, implementação e acompanhamento de projetos para negócios reais.']].map(([title,description],i)=><motion.article className="experience-card" key={title} {...reveal}><span>0{i+1}</span><CheckCircle2 aria-hidden="true"/><h3>{title}</h3><p>{description}</p></motion.article>)}</div></div></section>

      <section className="section tech" id="tecnologias"><div className="container"><motion.div className="section-head" {...reveal}><div><span className="eyebrow">STACK & CAPACIDADES</span><h2>Tecnologia para construir, integrar e <span>evoluir.</span></h2></div></motion.div><div className="tech-grid">{[['Software','JavaScript • TypeScript • React • Next.js • Node.js • Python'],['Dados & Backend','PostgreSQL • Supabase • Prisma • SQL • Pandas • Streamlit'],['IA & Automação','OpenAI • LLMs • RAG • LangChain • LangGraph • N8N • UiPath'],['Cloud & Integrações','APIs • Webhooks • GitHub • Vercel • AWS • CRMs']].map(([t,s]) => <motion.div className="tech-card" key={t} {...reveal}><h3>{t}</h3><p>{s}</p></motion.div>)}</div></div></section>

      <section className="section cta" id="contato"><motion.div className="container cta-box" {...reveal}><span className="eyebrow">VAMOS CONSTRUIR?</span><h2>Transforme sua ideia em uma solução <span>tecnológica.</span></h2><p>Projetos de software, automação, IA, dados e consultoria para empresas e profissionais.</p><p><a href={contactHref}>{contactEmail}</a></p><a href={contactHref} className="btn">Entre em contato <ArrowRight size={17}/></a></motion.div></section>

      <footer><div className="container footer"><div className="brand"><span className="brand-mark">PC</span><span><strong>PC SOLUÇÕES</strong><small>EM TECNOLOGIA</small></span></div><p>Software • IA • Automação • Dados</p><span>© 2026 PC Soluções em Tecnologia</span></div></footer>
    </main>
  );
}
