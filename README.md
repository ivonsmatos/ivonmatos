## Portfólio Ivon Matos

Site institucional desenvolvido com Next.js 16 (App Router) para apresentar o trabalho de Ivon Matos como arquiteto em Inteligência Artificial, professor e arquiteto de dados.

### Tecnologias

- Next.js 16 (React 19) com diretório `app`
- Bootstrap 5 customizado com SASS
- GSAP + ScrollTrigger para animações suaves
- Tipografia baseada em Arial

### Recursos principais

- Páginas: Home, Blog (+ artigos), Sobre, Contato, Currículo
- Navegação fixa, responsiva e com animações de rolagem/hover
- SEO on-page com metadados completos, geo tags e JSON-LD
- Compatível com retina, dispositivos touch e navegadores modernos
- Conteúdos gerenciados via arquivos em `src/data`
- Documentação detalhada em `docs/documentacao.md`

### Scripts

```bash
npm run dev     # Ambiente de desenvolvimento
npm run build   # Build de produção
npm run start   # Servir build de produção
npm run lint    # Análise estática
```

### Estrutura

```
src/
  app/            # Páginas e componentes (App Router)
  data/           # Conteúdo estático (posts, serviços, experiências)
  styles/         # Parciais SASS e variáveis
public/images/    # Recursos visuais otimizados
docs/             # Guia detalhado do projeto
```

### Próximos passos sugeridos

1. Ajustar conteúdo real das páginas (textos, imagens, links de currículo).
2. Conectar o formulário de contato a um serviço de envio de e-mails.
3. Integrar CMS para gerenciamento dos posts, caso necessário.
4. Configurar deploy (Vercel, Netlify ou infraestrutura própria) e monitoramento.

Mais detalhes e orientações estão disponíveis em `docs/documentacao.md`.
