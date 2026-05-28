import type { Metadata, Viewport } from 'next';
import { Inter, Fraunces, JetBrains_Mono } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sans',
  weight: ['300', '400', '500', '600', '700', '800', '900'],
});

const fraunces = Fraunces({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-display',
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  style: ['normal', 'italic'],
});

const jetbrains = JetBrains_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-mono',
  weight: ['400', '500'],
});

const SITE_URL = 'https://ivonmatos.com.br';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Ivon Matos | Chief AI Officer · AI Engineering & Data Strategy',
    template: '%s · Ivon Matos',
  },
  description:
    'Ivon Matos — Chief AI Officer na Scaledata. Especialista em arquitetura de Agentes Autônomos, Sistemas RAG, IA Generativa e estratégia de dados para negócios em São Paulo.',
  applicationName: 'Ivon Matos',
  authors: [{ name: 'Ivon Matos', url: SITE_URL }],
  generator: 'Next.js',
  keywords: [
    'Ivon Matos',
    'Chief AI Officer',
    'CAIO',
    'AI Engineering',
    'Data Strategy',
    'Python',
    'RAG',
    'Agentes Autônomos',
    'IA Generativa',
    'Scaledata',
    'consultor de IA',
    'engenheiro de IA',
  ],
  referrer: 'origin-when-cross-origin',
  creator: 'Ivon Matos',
  publisher: 'Ivon Matos',
  formatDetection: { email: true, telephone: true, address: false },
  alternates: {
    canonical: '/',
    languages: { 'pt-BR': '/', 'x-default': '/' },
  },
  openGraph: {
    type: 'profile',
    locale: 'pt_BR',
    url: SITE_URL,
    siteName: 'Ivon Matos',
    title: 'Ivon Matos | Chief AI Officer · AI Engineering & Data Strategy',
    description:
      'Chief AI Officer na Scaledata. Arquiteto de Agentes Autônomos e Sistemas RAG. Especialista em IA Generativa para soluções de negócios.',
    firstName: 'Ivon',
    lastName: 'Matos',
    images: [
      {
        url: '/og-image.svg',
        width: 1200,
        height: 630,
        alt: 'Ivon Matos — Chief AI Officer',
        type: 'image/svg+xml',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ivon Matos | Chief AI Officer · AI Engineering & Data Strategy',
    description:
      'Chief AI Officer na Scaledata. Arquiteto de Agentes Autônomos e Sistemas RAG.',
    images: ['/og-image.svg'],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  category: 'technology',
  other: {
    'geo.region': 'BR-SP',
    'geo.placename': 'São Paulo',
    language: 'Portuguese',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
  colorScheme: 'light dark',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#F2F2F2' },
    { media: '(prefers-color-scheme: dark)', color: '#00010D' },
  ],
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Person',
      '@id': `${SITE_URL}/#person`,
      name: 'Ivon Matos',
      givenName: 'Ivon',
      familyName: 'Matos',
      url: SITE_URL,
      image: `${SITE_URL}/og-image.svg`,
      jobTitle: 'Chief AI Officer (CAIO)',
      description:
        'AI Engineering & Data Strategy Specialist. Arquiteto de Agentes Autônomos e Sistemas RAG. Especialista em IA Generativa para soluções de negócios.',
      email: 'mailto:contato@ivonmatos.com.br',
      telephone: '+5511941906079',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'São Paulo',
        addressRegion: 'SP',
        addressCountry: 'BR',
      },
      worksFor: [
        { '@type': 'Organization', name: 'Scaledata' },
      ],
      alumniOf: [
        { '@type': 'EducationalOrganization', name: 'PUC Minas' },
        { '@type': 'EducationalOrganization', name: 'University of Nicosia' },
        { '@type': 'EducationalOrganization', name: 'PUCRS' },
        { '@type': 'EducationalOrganization', name: 'Fundação Getulio Vargas (FGV)' },
        { '@type': 'EducationalOrganization', name: 'Universidade Salvador (UNIFACS)' },
        { '@type': 'EducationalOrganization', name: 'Faculdade Dom Pedro II de Tecnologia' },
      ],
      knowsAbout: [
        'Inteligência Artificial Generativa',
        'Engenharia de IA',
        'Agentes Autônomos',
        'RAG — Retrieval Augmented Generation',
        'Python',
        'Governança de Dados',
        'Estratégia de Dados',
        'Machine Learning',
        'Business Intelligence',
        'React',
        'Next.js',
      ],
      sameAs: ['https://www.linkedin.com/in/ivon-matos/', 'https://github.com/ivonsmatos'],
      nationality: { '@type': 'Country', name: 'Brasil' },
    },
    {
      '@type': 'ProfilePage',
      '@id': `${SITE_URL}/#webpage`,
      url: SITE_URL,
      name: 'Ivon Matos | Chief AI Officer · AI Engineering & Data Strategy',
      inLanguage: 'pt-BR',
      isPartOf: { '@id': `${SITE_URL}/#website` },
      mainEntity: { '@id': `${SITE_URL}/#person` },
      speakable: {
        '@type': 'SpeakableSpecification',
        cssSelector: ['#hero-title', '#hero-tagline', '#sobre-lead'],
      },
    },
    {
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#website`,
      url: SITE_URL,
      name: 'Ivon Matos',
      description: 'Portfolio oficial — AI Engineering & Data Strategy',
      publisher: { '@id': `${SITE_URL}/#person` },
      inLanguage: 'pt-BR',
    },
    {
      '@type': 'FAQPage',
      '@id': `${SITE_URL}/#faq`,
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Quem é Ivon Matos?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Ivon Matos é Chief AI Officer (CAIO) na Scaledata. Especialista em arquitetura de Agentes Autônomos, Sistemas RAG, IA Generativa e estratégia de dados para negócios.',
          },
        },
        {
          '@type': 'Question',
          name: 'Qual a especialidade do Ivon Matos?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Engenharia de Soluções Cognitivas: arquitetura de sistemas que combinam Python, agentes autônomos, RAG e interfaces React para resolver problemas reais de negócio.',
          },
        },
        {
          '@type': 'Question',
          name: 'Como entrar em contato com Ivon Matos?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Por e-mail em contato@ivonmatos.com.br, WhatsApp (+55 11 94190-6079), LinkedIn em linkedin.com/in/ivon-matos ou GitHub em github.com/ivonsmatos.',
          },
        },
        {
          '@type': 'Question',
          name: 'Quais empresas Ivon Matos atendeu?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Roche Farmacêutica, Volvo, P&G, Coca-Cola, Banco Sicredi, Sulamérica e Bradesco, entre outras grandes marcas.',
          },
        },
      ],
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${fraunces.variable} ${jetbrains.variable}`}>
      <head>
        <link
          rel="icon"
          type="image/svg+xml"
          href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Crect width='100' height='100' rx='20' fill='%2300010D'/%3E%3Ctext x='50' y='68' font-family='Inter,system-ui,sans-serif' font-size='56' font-weight='700' fill='%23C2926C' text-anchor='middle'%3EIM%3C/text%3E%3C/svg%3E"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
