import Image from "next/image";
import Link from "next/link";

import AnimatedSection from "./(components)/AnimatedSection";
import { experiences } from "@/data/experiences";
import { posts } from "@/data/posts";
import { services } from "@/data/services";

const metrics = [
  { value: "15+", label: "anos definindo estratégias de dados" },
  { value: "80%", label: "redução média no time-to-insight" },
  { value: "800+", label: "profissionais mentorados" },
];

const featuredTools = [
  "Azure Machine Learning",
  "Databricks",
  "Power BI",
  "Kafka",
  "Kubernetes",
  "TensorFlow",
  "LangChain",
  "DBT",
];

export default function Home() {
  return (
    <>
      <AnimatedSection id="inicio" className="pt-6">
        <div className="container hero">
          <div>
            <span className="badge-soft mb-3">Arquitetura em IA &amp; Dados</span>
            <h1 className="mb-4">
              Estratégia, arquitetura e educação para organizações movidas a
              inteligência artificial.
            </h1>
            <p className="mb-4">
              Sou Ivon Matos, arquiteto em Inteligência Artificial, professor e
              arquiteto de dados. Conecto visão de negócios, engenharia e ética
              digital para acelerar resultados com soluções inteligentes e
              confiáveis.
            </p>
            <div className="d-flex flex-wrap gap-3 mb-5">
              <Link className="btn btn-cta touch-friendly" href="/contato">
                Agendar conversa
              </Link>
              <Link className="btn btn-outline-dark touch-friendly" href="/curriculum">
                Ver currículo
              </Link>
            </div>
            <div className="row g-3">
              {metrics.map((item) => (
                <div className="col-12 col-md-4" key={item.label}>
                  <div className="card-portfolio text-center hover-activate">
                    <h3 className="mb-2">{item.value}</h3>
                    <p className="mb-0">{item.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="hero-image">
            <Image
              src="/images/ivon-matos-portrait.svg"
              alt="Ilustração de Ivon Matos"
              width={520}
              height={620}
              priority
            />
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection id="atuacao" className="section-muted">
        <div className="container">
          <div className="section__heading text-center">
            <span className="badge-soft mb-3">Serviços</span>
            <h2 className="mb-3">Da visão estratégica ao impacto mensurável</h2>
            <p className="mx-auto max-w-44">
              Projetos sob medida que combinam arquitetura, engenharia e
              desenvolvimento de talentos para transformar dados em soluções de
              inteligência artificial responsáveis.
            </p>
          </div>
          <div className="row g-4">
            {services.map((service) => (
              <div className="col-12 col-lg-4" key={service.title}>
                <article className="card-portfolio h-100">
                  <h3 className="mb-3">{service.title}</h3>
                  <p>{service.description}</p>
                  <ul className="list-unstyled mb-0">
                    {service.highlights.map((highlight) => (
                      <li className="d-flex align-items-start gap-2 mb-2" key={highlight}>
                        <span aria-hidden="true">•</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection id="experiencia">
        <div className="container">
          <div className="row align-items-start g-5">
            <div className="col-12 col-lg-5">
              <span className="badge-soft mb-3">Trajetória</span>
              <h2 className="mb-3">Experiência que une academia e mercado</h2>
              <p>
                Lidero programas que conectam ciência, engenharia e governança
                para entregar inteligência artificial aplicável, ética e
                escalável em ambientes complexos.
              </p>
            </div>
            <div className="col-12 col-lg-7">
              <div className="timeline">
                {experiences.map((experience) => (
                  <article className="timeline__item" key={experience.period}>
                    <h3 className="mb-1">{experience.role}</h3>
                    <p className="mb-1">
                      <strong>{experience.company}</strong> · {experience.period}
                    </p>
                    <p className="mb-0">{experience.summary}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection id="insights" className="section-muted">
        <div className="container">
          <div className="section__heading d-flex flex-column flex-lg-row align-items-lg-center justify-content-lg-between gap-3">
            <div>
              <span className="badge-soft mb-3">Insights</span>
              <h2 className="mb-0">Artigos recentes</h2>
            </div>
            <Link className="btn btn-outline-dark touch-friendly" href="/blog">
              Acessar blog
            </Link>
          </div>
          <div className="row g-4">
            {posts.map((post) => (
              <div className="col-12 col-lg-4" key={post.slug}>
                <article className="blog-card hover-activate h-100">
                  <span className="badge-soft mb-3">{post.category}</span>
                  <h3 className="mb-3">{post.title}</h3>
                  <p className="mb-3">{post.excerpt}</p>
                  <div className="d-flex justify-content-between text-muted small">
                    <span>{new Date(post.date).toLocaleDateString("pt-BR")}</span>
                    <span>{post.readingTime}</span>
                  </div>
                  <div className="d-flex flex-wrap gap-2 mt-3">
                    {post.tags.map((tag) => (
                      <span key={tag} className="badge-soft">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Link className="stretched-link" href={`/blog/${post.slug}`}>
                    <span className="visually-hidden">Ler {post.title}</span>
                  </Link>
                </article>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection id="ecosistema">
        <div className="container">
          <div className="section__heading text-center">
            <span className="badge-soft mb-3">Ferramentas favoritas</span>
            <h2 className="mb-3">Ecossistema tecnológico</h2>
            <p className="mx-auto max-w-42">
              Seleção de tecnologias que utilizo diariamente para projetar,
              orquestrar e monitorar plataformas de IA orientadas a resultados.
            </p>
          </div>
          <div className="row row-cols-2 row-cols-md-4 g-3">
            {featuredTools.map((tool) => (
              <div className="col" key={tool}>
                <div className="card-portfolio text-center py-4 hover-activate">
                  <p className="mb-0">{tool}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection id="cta-final" className="section-muted">
        <div className="container text-center">
          <h2 className="mb-4">Pronto para destravar valor com IA responsável?</h2>
          <p className="mx-auto mb-4 max-w-40">
            Vamos desenhar juntos uma jornada que combina estratégia, dados e
            capacitação para equipes que precisam entregar resultados rápidos e
            sustentáveis.
          </p>
          <div className="d-flex flex-wrap justify-content-center gap-3">
            <Link className="btn btn-cta touch-friendly" href="/contato">
              Iniciar projeto
            </Link>
            <Link className="btn btn-outline-dark touch-friendly" href="/sobre">
              Conhecer trajetória
            </Link>
          </div>
        </div>
      </AnimatedSection>
    </>
  );
}
