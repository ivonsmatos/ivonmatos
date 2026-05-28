import type { MetadataRoute } from 'next';

export const dynamic = 'force-static';

const aiCrawlers = [
  'GPTBot',
  'ChatGPT-User',
  'OAI-SearchBot',
  'anthropic-ai',
  'Claude-Web',
  'ClaudeBot',
  'PerplexityBot',
  'Perplexity-User',
  'Google-Extended',
  'Applebot-Extended',
  'Bytespider',
  'Amazonbot',
  'cohere-ai',
  'Meta-ExternalAgent',
  'FacebookBot',
  'DiffBot',
  'YouBot',
  'AndiBot',
];

const searchEngines = ['Googlebot', 'Googlebot-Image', 'Bingbot', 'DuckDuckBot', 'Applebot', 'YandexBot'];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: '*', allow: '/', disallow: ['/private/', '/api/'] },
      ...searchEngines.map((ua) => ({ userAgent: ua, allow: '/' })),
      ...aiCrawlers.map((ua) => ({ userAgent: ua, allow: '/' })),
    ],
    sitemap: 'https://ivonmatos.com.br/sitemap.xml',
    host: 'https://ivonmatos.com.br',
  };
}
