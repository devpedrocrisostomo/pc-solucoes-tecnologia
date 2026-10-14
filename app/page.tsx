'use client';

import { useEffect, useState } from 'react';
import { InteractiveSculpture } from '@/components/InteractiveSculpture';
import { ArrowUpRight, ArrowRight, Code2, Workflow, BrainCircuit, ChartNoAxesCombined, Menu, X, Github, Check, Plus, Minus } from 'lucide-react';

const email = 'mailto:devpedrocrisostomo@gmail.com';
const publishedProjects = [
  { name: 'SocialFlow', description: 'Sistema de gestão para assistência social.', url: 'https://devpedrocrisostomo.github.io/socialflow/' },
  { name: 'SalesMind', description: 'Conheça a interface e os recursos do SalesMind.', url: 'https://devpedrocrisostomo.github.io/salesmind/' },
  { name: 'JurisFlow', description: 'Sistema de gestão para escritórios de advocacia.', url: 'https://devpedrocrisostomo.github.io/jurisflow/' },
  { name: 'Jr. Zezinho', description: 'Landing page com apresentação de serviços.', url: 'https://devpedrocrisostomo.github.io/lpjrzezinho/' },
  { name: 'PlotTher', description: 'Site institucional desenvolvido para cliente.', url: 'https://plotther.com.br' },
  { name: 'HelpDesk Pro', description: 'Sistema de atendimento e suporte técnico.', url: null },
  { name: 'Motion Video Renderer', description: 'Projeto de geração e renderização de vídeos.', url: null },
  { name: 'RAD Finance', description: 'Projeto de gestão financeira.', url: null },
];

function ProjectCatalog() {
  return <div className="github-portfolio">
    <div className="github-portfolio-heading"><div><span className="eyebrow">EXPLORE NOSSOS PROJETOS</span><h3>Sistemas e sites</h3><p>Abra as demonstrações para conhecer as interfaces e explorar cada projeto.</p></div></div>
    <div className="github-repos-grid">{publishedProjects.map(project => <article className="github-repo" key={project.name}>
      <div className="github-repo-top"><Code2 size={21} strokeWidth={1.5}/><span>{project.url ? 'Demonstração disponível' : 'Demonstração indisponível'}</span></div>
      <h4>{project.name}</h4><p>{project.description}</p>
      <div className="github-repo-links">{project.url ? <a href={project.url} target="_blank" rel="noopener noreferrer" aria-label={`Abrir ${project.name}, em nova aba`}>Abrir sistema <ArrowUpRight size={16}/></a> : <span>Sem demonstração pública disponível no momento.</span>}</div>
    </article>)}</div>
  </div>;
}
const services = [
  { icon: Code2, title: 'Software sob medida', text: 'Sites e sistemas web pensados para o seu negócio, com interfaces simples e integrações que fazem sentido.', detail: 'Sites • Aplicações web • Integrações' },
  { icon: BrainCircuit, title: 'Inteligência artificial', text: 'Agentes e assistentes que conectam conhecimento, atendimento e processos da sua empresa.', detail: 'Agentes de IA • Assistentes • RAG' },
  { icon: Workflow, title: 'Automação de processos', text: 'Menos tarefas repetitivas. Mais tempo para sua equipe, com fluxos entre as ferramentas que você já utiliza.', detail: 'CRM • APIs • Fluxos automatizados' },
  { icon: ChartNoAxesCombined, title: 'Dados e consultoria', text: 'Indicadores claros e orientação técnica para entender o cenário e escolher o próximo passo.', detail: 'Dashboards • Relatórios • Consultoria em TI' },
];
const projects = [
  { name: 'PlotTher', category: 'SITE INSTITUCIONAL', text: 'Da experiência de navegação à publicação: um projeto comercial com desenvolvimento, SEO e configuração de domínio.', type: 'website', url: 'https://plotther.com.br', labels: ['Web', 'UX/UI', 'SEO'], status: 'Projeto para cliente' },
  { name: 'SocialFlow', category: 'SISTEMA DE GESTÃO', text: 'Gestão para assistência social, reunindo acompanhamento operacional, indicadores e relatórios em uma interface.', type: 'dashboard', url: 'https://devpedrocrisostomo.github.io/socialflow/', labels: ['React', 'Node.js', 'PostgreSQL'], status: 'Projeto de portfólio' },
  { name: 'NexLead AI', category: 'IA & AUTOMAÇÃO', text: 'CRM e inteligência artificial para apoiar a operação de pequenas empresas. Uma plataforma em desenvolvimento.', type: 'automation', labels: ['Next.js', 'Supabase', 'IA'], status: 'Em desenvolvimento' },
];
const faq = [
  ['Como começamos um projeto?', 'Começamos com uma conversa sobre o seu negócio, o problema e o resultado esperado. A partir disso, preparo uma proposta com escopo, etapas e investimento.'],
  ['Vocês também trabalham com sistemas existentes?', 'Sim. Podemos avaliar seu sistema, identificar oportunidades de melhoria e planejar integrações, automações ou novas funcionalidades.'],
  ['Como funcionam os prazos e valores?', 'Dependem do escopo e da complexidade do projeto. Prazos, entregas e valores são combinados na proposta antes de iniciarmos o trabalho.'],
];

function ProjectPreview({ type, name }: { type: string; name: string }) {
  return <div className={`project-preview ${type}`} aria-hidden="true"><div className="browser-preview"><div className="browser-bar"><i/><i/><i/><span>{name}</span></div>
    {type === 'website' ? <div className="mock-website"><div className="mock-nav"><b>PlotTher</b><span>Sobre &nbsp; Soluções &nbsp; Contato</span></div><div className="mock-web-body"><div><small>CONEXÕES QUE TRANSFORMAM</small><strong>Ideias com<br/>novas perspectivas.</strong><i className="mock-button"/></div><div className="mock-web-art"><i/><i/><i/></div></div></div> : type === 'dashboard' ? <div className="mock-dashboard"><div className="mock-sidebar"><b>SF</b><i/><i/><i/><i/></div><div className="mock-main"><b>Visão geral</b><div className="mock-metrics"><i/><i/><i/></div><div className="mock-chart">{[32,54,42,70,56,85,68,94].map((h,i)=><i key={i} style={{height:`${h}%`}}/>)}</div><div className="mock-lines"><i/><i/></div></div></div> : <div className="mock-automation"><div className="flow-node"><span>01</span>Receber lead</div><i/><div className="flow-node accent"><BrainCircuit size={18}/>Assistente de IA</div><i/><div className="flow-node"><Check size={17}/>Organizar no CRM</div></div>}
  </div><span className="preview-caption">Representação ilustrativa do projeto</span></div>;
}

export default function Home() {
  const [menu, setMenu] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  useEffect(() => {
    if (!menu) return;
    const close = (event: KeyboardEvent) => { if (event.key === 'Escape') setMenu(false); };
    window.addEventListener('keydown', close);
    return () => window.removeEventListener('keydown', close);
  }, [menu]);
  return <main>
    <a className="skip-link" href="#conteudo">Pular para o conteúdo</a>
    <header className="site-header"><nav className="container navigation" aria-label="Navegação principal"><a href="#inicio" className="brand" aria-label="PC Solutions, início"><img className="brand-logo" src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/pc-solutions-logo.svg`} alt="" width="52" height="40" /><span className="brand-name">PC Solutions</span></a><div id="navigation-links" className={`navigation-links ${menu ? 'is-open' : ''}`}>{[['Soluções','solucoes'],['Projetos','projetos'],['Sobre','sobre']].map(([name,id])=><a key={id} href={`#${id}`} onClick={()=>setMenu(false)}>{name}</a>)}<a className="nav-contact" href={email}>Vamos conversar <ArrowUpRight size={16}/></a></div><button type="button" className="menu-button" aria-label={menu ? 'Fechar menu' : 'Abrir menu'} aria-expanded={menu} aria-controls="navigation-links" onClick={()=>setMenu(!menu)}>{menu ? <X/> : <Menu/>}</button></nav></header>
    <section className="hero-shell" id="inicio"><div className="hero container"><div className="hero-copy" id="conteudo" tabIndex={-1}><span className="eyebrow"><i/> CONSULTORIA & DESENVOLVIMENTO DIGITAL</span><h1>Boas ideias.<br/>Tecnologia à<br/><span>altura.</span></h1><p>Transformamos desafios em software, inteligência artificial e experiências digitais que fazem sentido para o seu negócio.</p><div className="hero-actions"><a className="button primary" href={email}>Vamos construir juntos <ArrowUpRight size={19}/></a><a className="text-link" href="#projetos">Conheça os projetos <ArrowRight size={17}/></a></div><div className="hero-note"><span className="availability-dot"/><p>Da estratégia à entrega.<br/><strong>Uma parceria próxima em cada etapa.</strong></p></div></div><div className="hero-art"><div className="art-top"><span>PC SOLUTIONS — DIGITAL STUDIO</span><span className="art-status"><i/> Conectando possibilidades</span></div><InteractiveSculpture/><div className="art-bottom"><span>Precisão técnica.<br/><strong>Possibilidades sem limites.</strong></span><span className="scene-index">01 / ∞</span></div></div></div><div className="hero-bottom container"><span>FORTALEZA, BRASIL · CONEXÕES SEM FRONTEIRAS</span><a href="#solucoes">Explore o que podemos criar <ArrowRight size={14}/></a></div></section>
    <div className="capabilities"><div className="container"><span>Do desafio à solução</span><p>Software <i/> Inteligência artificial <i/> Automação <i/> Dados</p></div></div>
    <section className="section container" id="solucoes"><div className="section-heading"><div><span className="eyebrow">01 / O QUE FAZEMOS</span><h2>Complexidade resolvida.<br/>Potencial ampliado.</h2></div><p>Escolhemos as ferramentas a partir do problema. E construímos uma solução que sua equipe consegue usar.</p></div><div className="services-grid">{services.map(({icon:Icon,title,text,detail},i)=><article className="service" key={title}><div className="service-top"><Icon size={25} strokeWidth={1.5}/><span>0{i+1}</span></div><h3>{title}</h3><p>{text}</p><small>{detail}</small></article>)}</div></section>
    <section className="projects-section section" id="projetos"><div className="container"><div className="section-heading"><div><span className="eyebrow">02 / PROJETOS SELECIONADOS</span><h2>Do conceito à experiência.</h2></div><p>Um olhar sobre os projetos que conectam desenvolvimento, experiência e necessidades reais.</p></div><div className="projects-grid">{projects.map(p=><article className="project" key={p.name}><ProjectPreview type={p.type} name={p.name}/><div className="project-info"><span className="project-category">{p.category}</span><div className="project-title"><h3>{p.name}</h3>{p.url && <a href={p.url} target="_blank" rel="noopener noreferrer" aria-label={`Visitar ${p.name}, abre em nova aba`}><ArrowUpRight size={22}/></a>}</div><p>{p.text}</p><div className="project-labels">{p.labels.map(l=><span key={l}>{l}</span>)}</div><small className="project-status"><i/>{p.status}</small></div></article>)}</div><div className="more-projects"><span>Também no portfólio: <strong>JurisFlow</strong> e <strong>HelpDesk Pro</strong>.</span><a className="text-link" href="#catalogo">Ver sistemas e sites <ArrowUpRight size={17}/></a></div></div></section>
    <section className="section container" id="catalogo" aria-label="Catálogo de sistemas e sites"><ProjectCatalog/></section>
    <section className="section container process-section"><div className="section-heading"><div><span className="eyebrow">03 / COMO TRABALHAMOS</span><h2>Um processo claro.<br/>Do início ao próximo passo.</h2></div><p>Uma parceria próxima, com decisões alinhadas e entregas que você pode acompanhar.</p></div><div className="process-grid">{[['Entender','Ouvimos o contexto, identificamos o problema e definimos juntos o que precisa ser resolvido.'],['Planejar','Organizamos escopo, prioridades e etapas. Você sabe o que será entregue antes de começar.'],['Construir','Desenvolvemos e validamos a solução, com atenção à experiência e ao uso no dia a dia.'],['Entregar','Publicamos, orientamos o uso e alinhamos os próximos passos para a evolução do projeto.']].map(([title,text],i)=><article key={title}><span className="step-number">0{i+1}</span><h3>{title}</h3><p>{text}</p></article>)}</div></section>
    <section className="about-section section" id="sobre"><div className="container about-grid"><div><span className="eyebrow">04 / QUEM ESTÁ POR TRÁS</span><h2>Tecnologia é sobre<br/>pessoas. Também.</h2><p className="about-intro">A PC Solutions é liderada por Pedro Crisóstomo, desenvolvedor e consultor de TI em Fortaleza.</p><p>Minha experiência reúne desenvolvimento, automação, dados, suporte e relacionamento com clientes. Essa combinação ajuda a olhar para a tecnologia a partir de quem vai utilizá-la.</p><a className="text-link" href={email}>Converse diretamente comigo <ArrowUpRight size={17}/></a></div><aside className="founder"><div className="founder-mark" aria-hidden="true"><img src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/pc-solutions-logo.svg`} alt="" width="190" height="142" /></div><div className="founder-details"><h3>Pedro Crisóstomo</h3><p>Fundador & Consultor de TI</p><span>Formado em Análise e Desenvolvimento de Sistemas</span></div><div className="founder-footer"><span>Fortaleza, CE · Brasil</span><a href="https://github.com/devpedrocrisostomo" target="_blank" rel="noopener noreferrer" aria-label="GitHub de Pedro Crisóstomo, abre em nova aba"><Github size={21}/></a></div></aside></div></section>
    <section className="section container faq-section"><div><span className="eyebrow">ANTES DE COMEÇAR</span><h2>Podemos esclarecer.</h2><p>Uma boa solução começa com uma boa conversa.</p></div><div className="faq-list">{faq.map(([question,answer],i)=><div className="faq-item" key={question}><h3><button type="button" aria-expanded={activeFaq===i} aria-controls={`faq-answer-${i}`} onClick={()=>setActiveFaq(activeFaq===i ? null : i)}>{question}{activeFaq===i ? <Minus size={20}/> : <Plus size={20}/>}</button></h3><div id={`faq-answer-${i}`} hidden={activeFaq!==i}><p>{answer}</p></div></div>)}</div></section>
    <section className="contact-section" id="contato"><div className="container contact-inner"><div><span className="eyebrow">VAMOS CONSTRUIR JUNTOS</span><h2>O próximo capítulo<br/>começa com uma ideia.</h2><p>Conte sua ideia. Vamos entender o melhor caminho.</p><a className="button light" href={email}>Iniciar uma conversa <ArrowUpRight size={18}/></a></div><a className="contact-email" href={email}>devpedrocrisostomo@gmail.com <ArrowUpRight size={20}/></a></div></section>
    <footer className="container footer"><a href="#inicio" className="brand"><img className="brand-logo" src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/pc-solutions-logo.svg`} alt="" width="52" height="40" /><span className="brand-name">PC Solutions</span></a><span>© 2026 PC Solutions</span><a href="#inicio">Voltar ao início ↑</a></footer>
  </main>;
}
