'use client';

import { useEffect, useState } from 'react';
import { ArrowUpRight, ArrowRight, Code2, Workflow, BrainCircuit, ChartNoAxesCombined, Menu, X, Github, Check, Plus, Minus } from 'lucide-react';

const email = 'mailto:devpedrocrisostomo@gmail.com';
type GithubRepository = { id: number; name: string; description: string | null; html_url: string; homepage: string | null; fork: boolean; archived: boolean; updated_at: string; language: string | null };
const githubUser = 'devpedrocrisostomo';
function GithubPortfolio() {
  const [repos, setRepos] = useState<GithubRepository[]>([]);
  const [status, setStatus] = useState<'loading' | 'ready' | 'error'>('loading');
  useEffect(() => {
    const controller = new AbortController();
    async function load() {
      try {
        const response = await fetch(`https://api.github.com/users/${githubUser}/repos?per_page=100&type=owner&sort=updated`, { signal: controller.signal, headers: { Accept: 'application/vnd.github+json' } });
        if (!response.ok) throw new Error('GitHub API unavailable');
        const data: GithubRepository[] = await response.json();
        if (!Array.isArray(data)) throw new Error('Invalid GitHub response');
        setRepos(data.filter(repo => !repo.fork && repo.name !== 'pc-solucoes-tecnologia'));
        setStatus('ready');
      } catch (error) {
        if (!controller.signal.aborted) setStatus('error');
      }
    }
    load();
    return () => controller.abort();
  }, []);
  return <div className="github-portfolio">
    <div className="github-portfolio-heading"><div><span className="eyebrow">REPOSITÓRIOS PÚBLICOS</span><h3>Projetos no GitHub</h3><p>Repositórios públicos do perfil oficial, atualizados automaticamente. Links para demonstrações são exibidos quando informados no GitHub.</p></div><a className="text-link" href={`https://github.com/${githubUser}?tab=repositories`} target="_blank" rel="noopener noreferrer">Ver perfil completo <ArrowUpRight size={17}/></a></div>
    {status === 'loading' && <p role="status">Carregando repositórios públicos...</p>}
    {status === 'error' && <p role="status">Não foi possível carregar os repositórios agora. <a className="text-link" href={`https://github.com/${githubUser}?tab=repositories`} target="_blank" rel="noopener noreferrer">Acessar diretamente no GitHub <ArrowUpRight size={16}/></a></p>}
    {status === 'ready' && (repos.length ? <div className="github-repos-grid">{repos.map(repo => <article className="github-repo" key={repo.id}><div className="github-repo-top"><Code2 size={21} strokeWidth={1.5}/><span>{repo.archived ? 'Arquivado' : repo.language || 'Projeto'}</span></div><h4>{repo.name}</h4><p>{repo.description || 'Projeto publicado no GitHub.'}</p><div className="github-repo-links"><a href={repo.html_url} target="_blank" rel="noopener noreferrer" aria-label={`Ver código de ${repo.name} no GitHub`}>Ver código <ArrowUpRight size={16}/></a>{repo.homepage && /^https:\/\//i.test(repo.homepage) && <a href={repo.homepage} target="_blank" rel="noopener noreferrer" aria-label={`Abrir demonstração de ${repo.name}`}>Abrir projeto <ArrowUpRight size={16}/></a>}</div></article>)}</div> : <p role="status">Nenhum outro repositório público foi encontrado neste perfil.</p>)}
    <p className="github-disclaimer">Projetos privados ou hospedados em outras contas não aparecem automaticamente. A presença de um link não garante que a aplicação esteja operacional.</p>
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
  { name: 'SocialFlow', category: 'SISTEMA DE GESTÃO', text: 'Gestão para assistência social, reunindo acompanhamento operacional, indicadores e relatórios em uma interface.', type: 'dashboard', labels: ['React', 'Node.js', 'PostgreSQL'], status: 'Projeto de portfólio' },
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
    <header className="site-header"><nav className="container navigation" aria-label="Navegação principal"><a href="#inicio" className="brand" aria-label="PC Solutions, início"><img className="brand-logo" src="/pc-solutions-logo.svg" alt="" width="52" height="40" /><span className="brand-name">PC Solutions</span></a><div id="navigation-links" className={`navigation-links ${menu ? 'is-open' : ''}`}>{[['Soluções','solucoes'],['Projetos','projetos'],['Sobre','sobre']].map(([name,id])=><a key={id} href={`#${id}`} onClick={()=>setMenu(false)}>{name}</a>)}<a className="nav-contact" href={email}>Vamos conversar <ArrowUpRight size={16}/></a></div><button type="button" className="menu-button" aria-label={menu ? 'Fechar menu' : 'Abrir menu'} aria-expanded={menu} aria-controls="navigation-links" onClick={()=>setMenu(!menu)}>{menu ? <X/> : <Menu/>}</button></nav></header>
    <section className="hero container" id="inicio"><div className="hero-copy" id="conteudo" tabIndex={-1}><span className="eyebrow"><i/> TECNOLOGIA COM PROPÓSITO</span><h1>Seu próximo passo.<br/>Uma solução<br/><span>bem construída.</span></h1><p>Software, inteligência artificial e automação para simplificar sua operação e transformar boas ideias em soluções reais.</p><div className="hero-actions"><a className="button primary" href={email}>Vamos falar sobre seu projeto <ArrowUpRight size={18}/></a><a className="text-link" href="#projetos">Explorar projetos <ArrowRight size={17}/></a></div><div className="hero-note"><img className="tiny-logo" src="/pc-solutions-logo.svg" alt="" width="36" height="30" /><p>Da primeira conversa à entrega.<br/><strong>Tecnologia feita com atenção ao seu negócio.</strong></p></div></div><div className="hero-art" aria-hidden="true"><div className="art-top"><span>PC / SOLUTIONS</span><span className="art-status"><i/> Tudo conectado.</span></div><div className="architecture"><div className="architecture-layer layer-bottom"><span>DADOS</span><div className="layer-grid"/></div><div className="architecture-layer layer-middle"><span>AUTOMAÇÃO</span><div className="layer-path"><i/><i/><i/></div></div><div className="architecture-layer layer-top"><span>SOFTWARE + IA</span><div className="layer-core">pc<span>.</span></div></div></div><div className="art-bottom"><span>Complexidade nos bastidores.<br/><strong>Simplicidade na experiência.</strong></span><ArrowUpRight size={25}/></div></div></section>
    <div className="capabilities"><div className="container"><span>Do desafio à solução</span><p>Software <i/> Inteligência artificial <i/> Automação <i/> Dados</p></div></div>
    <section className="section container" id="solucoes"><div className="section-heading"><div><span className="eyebrow">01 / O QUE FAZEMOS</span><h2>Tecnologia que se encaixa<br/>no seu negócio.</h2></div><p>Escolhemos as ferramentas a partir do problema. E construímos uma solução que sua equipe consegue usar.</p></div><div className="services-grid">{services.map(({icon:Icon,title,text,detail},i)=><article className="service" key={title}><div className="service-top"><Icon size={25} strokeWidth={1.5}/><span>0{i+1}</span></div><h3>{title}</h3><p>{text}</p><small>{detail}</small></article>)}</div></section>
    <section className="projects-section section" id="projetos"><div className="container"><div className="section-heading"><div><span className="eyebrow">02 / PROJETOS SELECIONADOS</span><h2>Ideias que ganham forma.</h2></div><p>Um olhar sobre os projetos que conectam desenvolvimento, experiência e necessidades reais.</p></div><div className="projects-grid">{projects.map(p=><article className="project" key={p.name}><ProjectPreview type={p.type} name={p.name}/><div className="project-info"><span className="project-category">{p.category}</span><div className="project-title"><h3>{p.name}</h3>{p.url && <a href={p.url} target="_blank" rel="noopener noreferrer" aria-label={`Visitar ${p.name}, abre em nova aba`}><ArrowUpRight size={22}/></a>}</div><p>{p.text}</p><div className="project-labels">{p.labels.map(l=><span key={l}>{l}</span>)}</div><small className="project-status"><i/>{p.status}</small></div></article>)}</div><div className="more-projects"><span>Também no portfólio: <strong>JurisFlow</strong> e <strong>HelpDesk Pro</strong>.</span><a className="text-link" href="https://github.com/devpedrocrisostomo" target="_blank" rel="noopener noreferrer">Explorar no GitHub <ArrowUpRight size={17}/></a></div></div></section>
    <section className="section container process-section"><div className="section-heading"><div><span className="eyebrow">03 / COMO TRABALHAMOS</span><h2>Clareza em cada etapa.</h2></div><p>Uma parceria próxima, com decisões alinhadas e entregas que você pode acompanhar.</p></div><div className="process-grid">{[['Entender','Ouvimos o contexto, identificamos o problema e definimos juntos o que precisa ser resolvido.'],['Planejar','Organizamos escopo, prioridades e etapas. Você sabe o que será entregue antes de começar.'],['Construir','Desenvolvemos e validamos a solução, com atenção à experiência e ao uso no dia a dia.'],['Entregar','Publicamos, orientamos o uso e alinhamos os próximos passos para a evolução do projeto.']].map(([title,text],i)=><article key={title}><span className="step-number">0{i+1}</span><h3>{title}</h3><p>{text}</p></article>)}</div></section>
    <section className="about-section section" id="sobre"><div className="container about-grid"><div><span className="eyebrow">04 / QUEM ESTÁ POR TRÁS</span><h2>Visão técnica.<br/>Conversa próxima.</h2><p className="about-intro">A PC Solutions é liderada por Pedro Crisóstomo, desenvolvedor e consultor de TI em Fortaleza.</p><p>Minha experiência reúne desenvolvimento, automação, dados, suporte e relacionamento com clientes. Essa combinação ajuda a olhar para a tecnologia a partir de quem vai utilizá-la.</p><a className="text-link" href={email}>Converse diretamente comigo <ArrowUpRight size={17}/></a></div><aside className="founder"><div className="founder-mark" aria-hidden="true"><img src="/pc-solutions-logo.svg" alt="" width="190" height="142" /></div><div className="founder-details"><h3>Pedro Crisóstomo</h3><p>Fundador & Consultor de TI</p><span>Formado em Análise e Desenvolvimento de Sistemas</span></div><div className="founder-footer"><span>Fortaleza, CE · Brasil</span><a href="https://github.com/devpedrocrisostomo" target="_blank" rel="noopener noreferrer" aria-label="GitHub de Pedro Crisóstomo, abre em nova aba"><Github size={21}/></a></div></aside></div></section>
    <section className="section container faq-section"><div><span className="eyebrow">ANTES DE COMEÇAR</span><h2>Podemos esclarecer.</h2><p>Uma boa solução começa com uma boa conversa.</p></div><div className="faq-list">{faq.map(([question,answer],i)=><div className="faq-item" key={question}><h3><button type="button" aria-expanded={activeFaq===i} aria-controls={`faq-answer-${i}`} onClick={()=>setActiveFaq(activeFaq===i ? null : i)}>{question}{activeFaq===i ? <Minus size={20}/> : <Plus size={20}/>}</button></h3><div id={`faq-answer-${i}`} hidden={activeFaq!==i}><p>{answer}</p></div></div>)}</div></section>
    <section className="contact-section" id="contato"><div className="container contact-inner"><div><span className="eyebrow">VAMOS CONSTRUIR JUNTOS</span><h2>Qual desafio podemos<br/>resolver com você?</h2><p>Conte sua ideia. Vamos entender o melhor caminho.</p><a className="button light" href={email}>Iniciar uma conversa <ArrowUpRight size={18}/></a></div><a className="contact-email" href={email}>devpedrocrisostomo@gmail.com <ArrowUpRight size={20}/></a></div></section>
    <footer className="container footer"><a href="#inicio" className="brand"><img className="brand-logo" src="/pc-solutions-logo.svg" alt="" width="52" height="40" /><span className="brand-name">PC Solutions</span></a><span>© 2026 PC Solutions</span><a href="#inicio">Voltar ao início ↑</a></footer>
  </main>;
}
