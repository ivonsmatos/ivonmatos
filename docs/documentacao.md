# Documentação do Portfólio Ivon Matos

## Visão geral

Este repositório contém o portfólio profissional de Ivon Matos, arquiteto em Inteligência Artificial, professor e arquiteto de dados. O projeto foi desenvolvido com **Vite + React 18**, **Bootstrap 5**, **SASS** e animações com **GSAP** para proporcionar uma experiência moderna, responsiva e otimizada para SEO.

## Requisitos atendidos

- Layout responsivo com design plano, minimalista e tipografia Arial.
- Navegação fixa e transições suaves com GSAP (animações de rolagem e hover).
- Compatibilidade com retina e dispositivos touch.
- Estrutura de páginas: Home, Blog (+ páginas de artigo), Sobre, Contato e Currículo.
- Otimização SEO on-page (metadados, geo tags, JSON-LD, Open Graph, Twitter Card).
- Componentização limpa, comentários pontuais e código validado pelo lint.

## Scripts disponíveis

```bash
npm run dev       # Ambiente de desenvolvimento (http://localhost:5173)
npm run build     # Build de produção (gera dist)
npm run preview   # Servir build de produção localmente
npm run lint      # Análise estática com ESLint
```

## Estrutura principal

```
src/
  components/              # Componentes compartilhados (nav, footer, animações)
  pages/                   # Páginas renderizadas pelo React Router
  data/                    # Conteúdos estáticos (posts, serviços, experiências)
  styles/                  # Partials SASS (variáveis, mixins, animações)
public/
  images/                  # Ilustrações otimizadas para retina
  favicon.svg              # Ícone da aplicação
```

## Estilos e tema

- Paleta utilizada: `#A3B2BF`, `#C5D0D9`, `#EBEFF2`, `#595959`, `#0D0D0D`.
- `src/styles/globals.scss` importa parciais SASS, customiza variáveis Bootstrap e aplica utilitários como `max-w-*`, `card-portfolio`, `section` e `timeline`.
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

- Metadados base configurados em `src/App.tsx` via `react-helmet-async`.
- Cada página define suas tags específicas com `<Helmet>`.
- Inserção de JSON-LD no `index.html` para dados estruturados do tipo `Person`.

## Conteúdo

- Dados estáticos em `src/data` para facilitar manutenção de posts, serviços e experiências.
- Páginas de blog consomem esse conteúdo em lista e detalhamento (`/blog/[slug]`).
- Páginas podem ser internacionalizadas futuramente adaptando o conteúdo nas fontes de dados.

## Boas práticas de validação

- Execute `npm run lint` antes de abrir PRs.
- Para validação W3C, gere o build (`npm run build`) e submeta os arquivos HTML gerados (dist) ou use o validador via URL após deploy.
- Otimize imagens adicionais em `public/images` (usar SVG ou PNG comprimido).

## Deploy sugerido

1. Configure variáveis de ambiente (se necessárias) em `.env`.
2. Rode `npm run build` para garantir que o bundle está consistente.
3. Faça deploy em plataformas estáticas (Netlify, Vercel, Azure Static Web Apps ou infraestrutura própria).
4. Configure cabeçalhos HTTP (cache, `Content-Security-Policy`, `X-Frame-Options`) conforme o ambiente.

## Próximos passos opcionais

- Integrar um CMS (Contentful, Sanity, Ghost) para gerenciar os posts do blog.
- Conectar o formulário a um backend (Formspree, AWS SES, Azure Communication Services).
- Implementar testes automatizados (Playwright para e2e, Vitest/React Testing Library para unidade).
- Adicionar modo escuro e alternância manual caso desejado.

Para dúvidas adicionais, utilize a página de contato ou abra um issue no repositório.
