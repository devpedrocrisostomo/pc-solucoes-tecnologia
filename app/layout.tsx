import type { Metadata, Viewport } from 'next';
import './globals.css';
import { ServiceWorkerRegister } from '@/components/ServiceWorkerRegister';

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

export const metadata: Metadata = {
  ...(process.env.NEXT_PUBLIC_SITE_URL ? { metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL), alternates: { canonical: `${basePath}/` } } : {}),
  title: 'PC Soluções em Tecnologia | Software, IA, Automação e Dados',
  description: 'Consultoria em tecnologia liderada por Pedro Crisóstomo. Software, inteligência artificial, automação, dados e soluções digitais para negócios.',
  applicationName: 'PC Soluções em Tecnologia',
  keywords: ['PC Soluções em Tecnologia', 'Pedro Crisóstomo', 'software', 'inteligência artificial', 'automação', 'dados', 'consultoria em TI', 'Fortaleza'],
  openGraph: {
    type: 'website', locale: 'pt_BR', siteName: 'PC Soluções em Tecnologia',
    title: 'PC Soluções em Tecnologia | Tecnologia que transforma negócios',
    description: 'Software, IA, automação, dados e consultoria em TI com Pedro Crisóstomo.',
    ...(process.env.NEXT_PUBLIC_SITE_URL ? { images: [{ url: `${basePath}/icons/icon-512.png`, width: 512, height: 512, alt: 'Marca PC Soluções em Tecnologia' }] } : {}),
  },
  twitter: { card: 'summary', title: 'PC Soluções em Tecnologia', description: 'Software, IA, automação, dados e consultoria em TI.' },
  manifest: `${basePath}/manifest.webmanifest`,
  appleWebApp: {
    capable: true,
    statusBarStyle: 'black-translucent',
    title: 'PC Soluções',
  },
  icons: {
    icon: [{ url: `${basePath}/icons/icon.svg`, type: 'image/svg+xml' }, { url: `${basePath}/icons/icon-192.png`, sizes: '192x192', type: 'image/png' }],
    apple: `${basePath}/icons/icon-192.png`,
  },
};

export const viewport: Viewport = {
  themeColor: '#050914',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body>
        <ServiceWorkerRegister />
        {children}
      </body>
    </html>
  );
}
