import { Helmet } from "react-helmet-async";
import { Link, useParams } from "react-router-dom";

import AnimatedSection from "@/components/AnimatedSection";
import { posts } from "@/data/posts";

import NotFoundPage from "./NotFoundPage";

const contentBySlug: Record<string, { paragraphs: string[]; bullets: string[] }> = {
  "arquitetura-responsavel-inteligencia-artificial": {
    paragraphs: [
      "Ao arquitetar sistemas de IA, a governança precisa nascer junto com o primeiro modelo. Isso significa pensar em proveniência de dados, rastreabilidade de experimentos e guardrails éticos desde o desenho inicial.",
      "Combinando MLOps, observabilidade e boas práticas de engenharia, transformamos modelos em produtos confiáveis que evoluem sem surpresas em produção.",
    ],
    bullets: [
      "Mapeamento de riscos e explicabilidade",
      "Monitoramento contínuo de drift e performance",
      "Playbooks de incidentes e rollback seguro",
    ],
  },
  "mapa-maturidade-dados": {
    paragraphs: [
      "Um mapa de maturidade realista nasce da escuta ativa do negócio e da leitura madura do legado tecnológico. Métricas vazias não sustentam transformações.",
      "Desdobro a maturidade em ondas: processos, tecnologia, cultura e impacto. Cada etapa traz ganhos mensuráveis e patrocinadores claros.",
    ],
    bullets: [
      "Diagnóstico colaborativo com stakeholders",
      "Indicadores de valor focados em resultado",
      "Roadmap evolutivo com quick wins e bets",
    ],
  },
  "ensinar-ia-experiencia": {
    paragraphs: [
      "Ensinar IA vai muito além de explicar algoritmos. É sobre formar senso crítico, responsabilidade e visão sistêmica em times multidisciplinares.",
      "Projetos reais, experimentação orientada a dados e mentoria ininterrupta criam ambientes onde aprendizado e entregas caminham juntos.",
    ],
    bullets: [
      "Metodologias ativas e aprendizagem invertida",
      "Projetos integradores com dados reais",
      "Feedbacks estruturados e mentoria contínua",
    ],
  },
};

export default function BlogPostPage() {
  const { slug } = useParams();
  const post = posts.find((item) => item.slug === slug);

  if (!post || !slug) {
    return <NotFoundPage />;
  }

  const content = contentBySlug[post.slug];
  const formattedDate = new Date(post.date).toLocaleDateString("pt-BR");
  const canonicalUrl = `https://ivonmatos.com.br/blog/${post.slug}`;

  return (
    <>
      <Helmet>
        <title>{post.title}</title>
        <meta name="description" content={post.excerpt} />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.excerpt} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="article:published_time" content={post.date} />
        <link rel="canonical" href={canonicalUrl} />
      </Helmet>

      <AnimatedSection id="post-topo" className="pt-6">
        <div className="container">
          <Link className="btn btn-outline-dark mb-4" to="/blog">
            ← Voltar para o blog
          </Link>
          <span className="badge-soft mb-3">{post.category}</span>
          <h1 className="mb-3">{post.title}</h1>
          <div className="d-flex gap-3 text-muted">
            <span>{formattedDate}</span>
            <span>{post.readingTime}</span>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection id="post-conteudo" className="section-muted">
        <div className="container max-w-44">
          {content?.paragraphs?.map((paragraph) => (
            <p key={paragraph} className="mb-4">
              {paragraph}
            </p>
          ))}
          {content?.bullets?.length ? (
            <ul className="mb-5">
              {content.bullets.map((bullet) => (
                <li className="mb-2" key={bullet}>
                  {bullet}
                </li>
              ))}
            </ul>
          ) : null}
          <p className="mb-0">
            Gostou do conteúdo? Vamos continuar a conversa. Enviei insights exclusivos na minha newsletter e compartilho
            bastidores de projetos no LinkedIn.
          </p>
        </div>
      </AnimatedSection>
    </>
  );
}
