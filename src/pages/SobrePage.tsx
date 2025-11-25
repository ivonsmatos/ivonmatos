import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

import AnimatedSection from "@/components/AnimatedSection";
import { experiences } from "@/data/experiences";

const valores = [
  {
    title: "Ética aplicada",
    description:
      "Coloco responsabilidade e transparência no centro de cada decisão, da coleta ao compartilhamento de insights.",
  },
  {
    title: "Aprendizado contínuo",
    description:
      "Integro pesquisa acadêmica, cultura de experimentação e feedback rápido para manter times na fronteira da inovação.",
  },
  {
    title: "Entrega mensurável",
    description:
      "Cada iniciativa nasce com indicadores claros e mecanismos de retroalimentação com o negócio.",
  },
];

const certificacoes = [
  "Azure Solutions Architect Expert",
  "AWS Certified Machine Learning – Specialty",
  "Databricks Lakehouse Platform",
  "Scrum@Scale Practitioner",
  "MIT Professional Education – Applied Data Science",
];

const pesquisa = [
  "Coordenação de grupos de pesquisa em IA aplicada a energia e saúde",
  "Projetos em parceria com universidades latino-americanas",
  "Produção acadêmica sobre governança e ética em IA",
];

export default function SobrePage() {
  return (
    <>
      <Helmet>
        <title>Sobre Ivon Matos</title>
        <meta
          name="description"
          content="Conheça a trajetória de Ivon Matos, arquiteto em IA, professor e arquiteto de dados, atuando em projetos estratégicos na América Latina."
        />
        <link rel="canonical" href="https://ivonmatos.com.br/sobre" />
      </Helmet>

      <AnimatedSection id="sobre-intro" className="pt-6">
        <div className="container hero">
          <div>
            <span className="badge-soft mb-3">Sobre</span>
            <h1 className="mb-3">Construindo pontes entre estratégia, tecnologia e pessoas</h1>
            <p>
              Minha jornada combina mais de 15 anos liderando projetos de dados e inteligência artificial, desenhando
              arquiteturas resilientes e preparando times para operar com autonomia e responsabilidade.
            </p>
            <p>
              No universo acadêmico, atuo como professor e pesquisador, desenvolvendo programas imersivos que aproximam
              teoria e prática. No mercado, ajudo organizações a conectarem visão, processos e plataformas para gerar valor
              sustentável.
            </p>
          </div>
          <div className="hero-image">
            <img src="/images/ivon-matos-portrait.svg" alt="Ilustração de Ivon Matos" width={520} height={620} loading="lazy" />
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection id="sobre-valores" className="section-muted">
        <div className="container">
          <div className="section__heading text-center">
            <span className="badge-soft mb-3">Valores</span>
            <h2 className="mb-3">Princípios que guiam cada projeto</h2>
            <p className="mx-auto max-w-42">
              Toda solução precisa equilibrar impacto, transparência e sustentabilidade. Esses são os pilares que orientam
              minhas decisões.
            </p>
          </div>
          <div className="row g-4">
            {valores.map((valor) => (
              <div className="col-12 col-lg-4" key={valor.title}>
                <article className="card-portfolio h-100">
                  <h3 className="mb-3">{valor.title}</h3>
                  <p className="mb-0">{valor.description}</p>
                </article>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection id="sobre-experiencia">
        <div className="container">
          <div className="row g-5">
            <div className="col-12 col-lg-5">
              <span className="badge-soft mb-3">Experiência</span>
              <h2 className="mb-3">Do laboratório à produção</h2>
              <p>
                Traduzi pesquisas em IA em plataformas escaláveis, estruturando times multidisciplinares e frameworks de
                governança que suportam a evolução contínua de modelos em produção.
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

      <AnimatedSection id="sobre-certificacoes" className="section-muted">
        <div className="container curriculum-grid">
          <div>
            <h2 className="mb-3">Certificações e formações</h2>
            <ul className="mb-0">
              {certificacoes.map((certificacao) => (
                <li className="mb-2" key={certificacao}>
                  {certificacao}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="mb-3">Pesquisa e impacto social</h2>
            <ul className="mb-0">
              {pesquisa.map((item) => (
                <li className="mb-2" key={item}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection id="sobre-cta">
        <div className="container text-center">
          <h2 className="mb-3">Vamos criar soluções responsáveis?</h2>
          <p className="mx-auto max-w-40 mb-4">
            Conte comigo para estruturar ecossistemas de dados, acelerar jornadas de IA e formar times prontos para inovar
            com segurança.
          </p>
          <Link className="btn btn-cta touch-friendly" to="/contato">
            Falar com Ivon
          </Link>
        </div>
      </AnimatedSection>
    </>
  );
}
