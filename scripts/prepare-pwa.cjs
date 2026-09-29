const fs = require('node:fs');
const path = require('node:path');
const base = process.env.NEXT_PUBLIC_BASE_PATH || '';
if (base && !/^\/[A-Za-z0-9._-]+$/.test(base)) throw new Error('Invalid NEXT_PUBLIC_BASE_PATH');
const asset = value => `${base}${value}`;
const manifest = {
  name: 'PC Soluções em Tecnologia', short_name: 'PC Soluções',
  description: 'Software, IA, automação, dados e consultoria em tecnologia.',
  start_url: asset('/'), scope: asset('/'), display: 'standalone',
  background_color: '#030712', theme_color: '#050914', lang: 'pt-BR',
  icons: [
    { src: asset('/icons/icon-192.png'), sizes: '192x192', type: 'image/png', purpose: 'any' },
    { src: asset('/icons/icon-512.png'), sizes: '512x512', type: 'image/png', purpose: 'any maskable' },
  ],
};
fs.writeFileSync(path.join('public', 'manifest.webmanifest'), JSON.stringify(manifest, null, 2) + '\n');
const home = JSON.stringify(asset('/'));
let sw = fs.readFileSync(path.join('scripts', 'sw-template.js'), 'utf8');
sw = sw.replace("'pc-solucoes-v2'", JSON.stringify(`pc-solucoes-${base || 'root'}-v3`));
sw = sw.replace(/const CORE = .*;/, `const CORE = ${JSON.stringify(['/', '/manifest.webmanifest', '/icons/icon-192.png', '/icons/icon-512.png'].map(asset))};`);
sw = sw.replace(/cache\.put\('\/'/g, `cache.put(${home}`).replace(/caches\.match\('\/'/g, `caches.match(${home}`);
// Only remove this site's previous cache versions on shared GitHub Pages origins.
sw = sw.replace('keys.filter(key => key !== CACHE)', "keys.filter(key => key.startsWith(" + JSON.stringify(`pc-solucoes-${base || 'root'}-`) + ") && key !== CACHE)");
fs.writeFileSync(path.join('public', 'sw.js'), sw);
fs.writeFileSync(path.join('public', '.nojekyll'), '');
