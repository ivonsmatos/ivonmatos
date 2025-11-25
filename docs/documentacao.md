# Documentação do Portfólio Ivon Matos

## Visão geral

Este repositório contém o portfólio profissional de Ivon Matos, arquiteto em Inteligência Artificial, professor e arquiteto de dados. O projeto foi desenvolvido com **Next.js 16 (App Router)**, **React 19**, **Bootstrap 5**, **SASS** e animações com **GSAP** para proporcionar uma experiência moderna, responsiva e otimizada para SEO.

## Requisitos atendidos

- Layout responsivo com design plano, minimalista e tipografia Arial.
- Navegação fixa e transições suaves com GSAP (animações de rolagem e hover).
- Versões em modo claro, compatibilidade com retina e dispositivos touch.
- Estrutura de páginas: Home, Blog (+ páginas de artigo), Sobre, Contato e Currículo.
- Otimização SEO on-page (metadados, geo tags, JSON-LD, Open Graph, Twitter Card).
- Componentização limpa, comentários pontuais e código validado pelo lint.

## Scripts disponíveis

```bash
npm run dev     # Ambiente de desenvolvimento (http://localhost:3000)
npm run build   # Build de produção com verificação de tipos
npm run start   # Servidor em modo produção após o build
npm run lint    # Análise estática com ESLint
```

## Estrutura principal

```
src/
  app/
    (components)/          # Componentes compartilhados (nav, footer, animações)
    blog/                  # Páginas de blog e artigos
    contato/               # Página de contato com formulário
    curriculum/            # Página com currículo
    sobre/                 # Página "Sobre"
    globals.scss           # Tema global com Bootstrap customizado
    layout.tsx             # Layout raiz + metadados/SEO
    page.tsx               # Página inicial
  data/                    # Conteúdos estáticos (posts, serviços, experiências)
  styles/                  # Partials SASS (variáveis, mixins, animações)
public/
  images/                  # Ilustrações otimizadas para retina
```

## Estilos e tema

- Paleta utilizada: `#A3B2BF`, `#C5D0D9`, `#EBEFF2`, `#595959`, `#0D0D0D`.
- `globals.scss` importa parciais SASS, customiza variáveis Bootstrap e aplica utilitários como `max-w-*`, `card-portfolio`, `section` e `timeline`.
- Classes `hover-activate` e `reveal` suportam animações de interação.

## Animações

- `AnimatedSection` aplica **GSAP + ScrollTrigger** para revelar seções durante a rolagem.
- Cartões utilizam transições CSS para feedback em hover/focus.
- O menu aplica comportamento sticky com alteração de padding e sombra ao rolar.

## Acessibilidade

- Uso de `skip-link`, semântica HTML e atributos ARIA nos componentes interativos.
- Formulários com rótulos associados e mensagens auxiliares.
- Controles touch friendly (`min-height: 48px`) e navegação via teclado.

## SEO e metadados

- `layout.tsx` define `Metadata` com título, descrições, palavras-chave, Open Graph, Twitter e geo metatags.
- Inserção de JSON-LD com dados estruturados do tipo `Person`.
- Páginas específicas exportam seus metadados (`metadata` ou `generateMetadata`).

## Conteúdo

- Dados estáticos em `src/data` para facilitar manutenção de posts, serviços e experiências.
- Páginas de blog consomem esse conteúdo em lista e detalhamento (`/blog/[slug]`).
- Páginas podem ser internacionalizadas futuramente adaptando o conteúdo nas fontes de dados.

## Boas práticas de validação

- Execute `npm run lint` antes de abrir PRs.
- Para validação W3C, gere o build (`npm run build`) e submeta os arquivos HTML gerados ou use o validador via URL após deploy.
- Otimize imagens adicionais em `public/images` (usar SVG ou PNG comprimido).

## Deploy sugerido

1. Configure variáveis de ambiente (se necessárias) em `.env`.
2. Rode `npm run build` para garantir que o bundle está consistente.
3. Faça deploy em plataformas compatíveis (Vercel, Netlify ou infraestrutura própria).
4. Configure cabeçalhos HTTP (cache, `Content-Security-Policy`, `X-Frame-Options`) conforme o ambiente.

## Próximos passos opcionais

- Integrar um CMS (Contentful, Sanity, Ghost) para gerenciar os posts do blog.
- Conectar o formulário a um backend (Formspree, AWS SES, Azure Communication Services).
- Implementar testes automatizados (Playwright para e2e, Vitest/React Testing Library para unidade).
- Adicionar modo escuro e alternância manual caso desejado.

Para dúvidas adicionais, utilize a página de contato ou abra um issue no repositório.
