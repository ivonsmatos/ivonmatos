import type { MetadataRoute } from 'next';

export const dynamic = 'force-static';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Ivon Matos — Chief AI Officer',
    short_name: 'Ivon Matos',
    description:
      'Chief AI Officer · AI Engineering & Data Strategy. Especialista em Agentes Autônomos, RAG e IA Generativa.',
    start_url: '/',
    scope: '/',
    display: 'standalone',
    orientation: 'portrait',
    background_color: '#F2F2F2',
    theme_color: '#00010D',
    lang: 'pt-BR',
    dir: 'ltr',
    categories: ['business', 'education', 'productivity'],
    icons: [
      {
        src: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 192 192'%3E%3Crect width='192' height='192' rx='38' fill='%2300010D'/%3E%3Ctext x='96' y='128' font-family='Inter,sans-serif' font-size='104' font-weight='700' fill='%23C2926C' text-anchor='middle'%3EIM%3C/text%3E%3C/svg%3E",
        sizes: '192x192',
        type: 'image/svg+xml',
        purpose: 'any',
      },
      {
        src: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3Crect width='512' height='512' rx='102' fill='%2300010D'/%3E%3Ctext x='256' y='340' font-family='Inter,sans-serif' font-size='280' font-weight='700' fill='%23C2926C' text-anchor='middle'%3EIM%3C/text%3E%3C/svg%3E",
        sizes: '512x512',
        type: 'image/svg+xml',
        purpose: 'maskable',
      },
    ],
  };
}
