## Portfólio Ivon Matos

Site institucional em **React 18** construído com **Vite**, apresentando o trabalho de Ivon Matos como arquiteto em Inteligência Artificial, professor e arquiteto de dados.

### Tecnologias

- Vite + React 18 com TypeScript
- Bootstrap 5.3 customizado via SASS
- GSAP + ScrollTrigger para animações suaves
- React Router DOM para roteamento CSR
- react-helmet-async para metadados e SEO

### Recursos principais

- Páginas: Home, Blog (+ artigos), Sobre, Contato, Currículo
- Navegação fixa, responsiva e com animações de rolagem/hover
- SEO on-page com metadados, geo tags e JSON-LD
- Compatível com retina, dispositivos touch e navegadores modernos
- Conteúdos gerenciados via arquivos em `src/data`
- Documentação detalhada em `docs/documentacao.md`

### Scripts

```bash
npm run dev       # Ambiente de desenvolvimento (http://localhost:5173)
npm run build     # Build de produção (gera diretório dist)
npm run preview   # Servir build de produção localmente
npm run lint      # Análise estática com ESLint
```

### Estrutura

```
src/
  components/     # Componentes compartilhados (menu, rodapé, animações)
  pages/          # Páginas da aplicação (React Router)
  data/           # Conteúdo estático (posts, serviços, experiências)
  styles/         # Parciais SASS e variáveis globais
public/           # Recursos estáticos (favicon, imagens)
docs/             # Guia detalhado do projeto
```

### Próximos passos sugeridos

1. Ajustar conteúdo real das páginas (textos, imagens, links de currículo).
2. Conectar o formulário de contato a um serviço de envio de e-mails.
3. Integrar CMS ou backend para gerenciamento dos posts, caso necessário.
4. Configurar deploy (Netlify, Vercel, Azure Static Web Apps etc.) e monitoramento.

Mais detalhes e orientações estão disponíveis em `docs/documentacao.md`.
