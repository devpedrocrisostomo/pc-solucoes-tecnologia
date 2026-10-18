# PC Solutions

Site institucional responsivo da PC Solutions, com Pedro Crisóstomo como Founder & CEO / IT Consultant. Next.js 15 e TypeScript. Identidade em grafite, marfim e verde-lima, monograma PC, escultura WebGL com Three.js, React Three Fiber e Drei, menu móvel e perguntas frequentes acessíveis. A cena é carregada separadamente, permite pausar o movimento e interrompe a animação fora da tela ou com a aba oculta. Sem WebGL ou com movimento reduzido, uma escultura CSS substitui a cena. Os previews dos projetos são representações ilustrativas, identificadas no site.

## Desenvolvimento

```bash
npm ci
npm run dev
```

## Validação

```bash
npm run lint
npm run build
npm start
```

O site é estático na rota principal. O service worker é registrado apenas na produção. Teste a instalação PWA por HTTPS, com “Adicionar à Tela de Início” no Safari do iPhone e pelo menu de instalação do navegador no desktop.

## Publicar na Vercel

1. Envie esta pasta para um repositório Git e importe o repositório na Vercel.
2. Framework preset: Next.js; root directory: a pasta que contém este `package.json`; build command: `npm run build`.
3. Defina `NEXT_PUBLIC_SITE_URL` com a origem definitiva, por exemplo `https://seu-dominio.com.br`, sem barra final. Isso ativa URL canônica e imagem Open Graph absoluta.
4. Faça o deploy e confira `/manifest.webmanifest`, `/icons/icon-192.png`, `/icons/icon-512.png` e `/sw.js` em HTTPS.
5. Confirme o domínio e substitua o CTA de contato pelo canal comercial definitivo. Os CTAs apontam para `mailto:devpedrocrisostomo@gmail.com`.

Não há segredos de servidor ou serviço de formulário necessários nesta versão. O catálogo é curado em `app/page.tsx`: os botões abrem diretamente as demonstrações publicadas; projetos sem URL disponível são identificados sem link. Novos projetos exigem atualização explícita do catálogo.

## GitHub Pages

A publicação pelo arquivo `.github/workflows/pages.yml` exporta o site para `out/` e ajusta os caminhos de assets, manifest e service worker ao nome do repositório. No repositório, selecione **Settings → Pages → Source → GitHub Actions**. Cada push na branch `main` publica automaticamente.

Teste local equivalente:

```bash
GITHUB_PAGES=true NEXT_PUBLIC_BASE_PATH=/pc-solucoes-tecnologia NEXT_PUBLIC_SITE_URL=https://devpedrocrisostomo.github.io npm run build
```

O modo estático não usa `npm start`; sirva a pasta `out/` com um servidor de arquivos. O nome acima é uma sugestão de novo repositório. O workflow usa o caminho real retornado pelo GitHub Pages, inclusive quando houver domínio próprio.

## Cookies, privacidade e segurança (18/10/2026)

- Rotas públicas: `/privacidade`, `/cookies` e `/seguranca`. O rodapé oferece acesso permanente.
- O aviso de cookies é **informativo**: nenhum cookie próprio de analytics/marketing está configurado no código atual. O estado de leitura é salvo em `localStorage` (`pc-solutions.cookie-notice.v1`) e pode ser reaberto no rodapé. Cache Storage é usado pelo PWA. **Não confundir aviso com consentimento para rastreamento.**
- Antes de adicionar scripts de análise, publicidade, pixels ou integrações que usem dados pessoais, realizar inventário de cookies/serviços, atualizar estas políticas e criar gestão real de consentimento com recusa e revogação.
- Na Vercel/Next.js, `next.config.ts` define CSP compatível com a hidratação atual, X-Frame-Options, X-Content-Type-Options, Referrer-Policy, Permissions-Policy e HSTS. A CSP permite `unsafe-inline` para compatibilidade; **não é uma CSP estrita por nonce**.
- O modo `GITHUB_PAGES=true` usa exportação estática: a configuração `headers()` do Next.js **não é aplicada pelo GitHub Pages**. Caso o site seja servido por lá, a configuração equivalente depende do host/CDN.
- HTTPS, certificados, cookies eventualmente usados pela plataforma, logs, retenção e transferências internacionais devem ser verificados também no painel e nas políticas do provedor. A publicação de políticas por si só não certifica conformidade integral com a LGPD; revisão jurídica e inventário de fornecedores são recomendados.
