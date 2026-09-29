# PC Soluções em Tecnologia

Site institucional responsivo da PC Soluções em Tecnologia, com Pedro Crisóstomo como Founder & CEO / IT Consultant. Next.js 15, TypeScript, Framer Motion e cena 3D carregada apenas em telas maiores sem preferência por movimento reduzido.

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
5. Confirme o domínio e substitua o CTA de contato pelo canal comercial definitivo. O link atual aponta para o GitHub público de Pedro.

Não há segredos de servidor ou serviço de formulário necessários nesta versão. O cartão PlotTher aponta para o site publicado; os demais cartões não exibem links enquanto suas URLs públicas não forem confirmadas.

## GitHub Pages

A publicação pelo arquivo `.github/workflows/pages.yml` exporta o site para `out/` e ajusta os caminhos de assets, manifest e service worker ao nome do repositório. No repositório, selecione **Settings → Pages → Source → GitHub Actions**. Cada push na branch `main` publica automaticamente.

Teste local equivalente:

```bash
GITHUB_PAGES=true NEXT_PUBLIC_BASE_PATH=/pc-solucoes-tecnologia NEXT_PUBLIC_SITE_URL=https://devpedrocrisostomo.github.io npm run build
```

O modo estático não usa `npm start`; sirva a pasta `out/` com um servidor de arquivos. O nome acima é uma sugestão de novo repositório. O workflow usa o caminho real retornado pelo GitHub Pages, inclusive quando houver domínio próprio.
