import Link from 'next/link';
import type { ReactNode } from 'react';

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

export function LegalPage({
  category,
  title,
  description,
  children,
}: {
  category: string;
  title: string;
  description: string;
  children: ReactNode;
}) {
  return (
    <div className="legal-page">
      <a className="skip-link" href="#conteudo">Pular para o conteúdo</a>
      <header className="site-header">
        <nav className="container legal-nav" aria-label="Navegação institucional">
          <Link href="/" className="brand" aria-label="PC Solutions, página inicial">
            <img className="brand-logo" src={`${basePath}/pc-solutions-logo.svg`} alt="" width="52" height="40" />
            <span className="brand-name">PC Solutions</span>
          </Link>
          <Link href="/" className="legal-back">← Voltar ao site</Link>
        </nav>
      </header>
      <main className="container legal-main" id="conteudo">
        <header className="legal-intro">
          <span className="eyebrow">{category}</span>
          <h1>{title}</h1>
          <p>{description}</p>
          <small>Última atualização: 18 de outubro de 2026</small>
        </header>
        <div className="legal-grid">
          <article className="legal-article">{children}</article>
          <aside className="legal-aside" aria-label="Navegação pelas políticas">
            <span>INFORMAÇÕES LEGAIS</span>
            <nav>
              <Link href="/privacidade">Privacidade e dados pessoais</Link>
              <Link href="/cookies">Cookies e armazenamento</Link>
              <Link href="/seguranca">Segurança da informação</Link>
            </nav>
            <p>Para dúvidas e solicitações de privacidade:</p>
            <a href="mailto:devpedrocrisostomo@gmail.com">devpedrocrisostomo@gmail.com</a>
          </aside>
        </div>
      </main>
      <footer className="container legal-footer">
        <span>© 2026 PC Solutions</span>
        <Link href="/">Voltar à página inicial ↑</Link>
      </footer>
    </div>
  );
}
