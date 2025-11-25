import type { Metadata } from "next";
import Link from "next/link";

import AnimatedSection from "../(components)/AnimatedSection";
import { experiences } from "@/data/experiences";
import { services } from "@/data/services";

export const metadata: Metadata = {
  title: "Currículo",
  description:
    "Currículo completo de Ivon Matos com experiências, competências técnicas, educação e reconhecimentos em IA e dados.",
};

const competencias = [
  {
    categoria: "Arquitetura e Engenharia",
    itens: [
      "Blueprints de plataformas MLOps",
      "Data mesh e governança distribuída",
      "Integração de dados em streaming",
    ],
  },
  {
    categoria: "Estratégia e Liderança",
    itens: [
      "Roadmaps orientados a valor",
      "Gestão de portfólio de IA",
      "Mentoria de times multidisciplinares",
    ],
  },
  {
    categoria: "Educação e Comunicação",
    itens: [
      "Docência em pós-graduação",
      "Workshops executivos",
      "Storytelling com dados",
    ],
  },
];

const educacao = [
  {
    curso: "Mestrado em Ciência da Computação",
    instituicao: "PUC Minas",
    periodo: "2010",
  },
  {
    curso: "Especialização em Engenharia de Dados",
    instituicao: "UFMG",
    periodo: "2008",
  },
];

const idiomas = [
  { idioma: "Português", nivel: "Nativo" },
  { idioma: "Inglês", nivel: "Fluente" },
  { idioma: "Espanhol", nivel: "Avançado" },
];

export default function CurriculumPage() {
  return (
    <>
      <AnimatedSection id="curriculo-intro" className="pt-6">
        <div className="container text-center">
          <span className="badge-soft mb-3">Currículo</span>
          <h1 className="mb-3">Experiência integrada em IA, dados e educação</h1>
          <p className="mx-auto max-w-42">
            Resumo das principais entregas, competências e formações que
            sustentam minha atuação em arquitetura de inteligência artificial e
            dados.
          </p>
          <Link className="btn btn-cta touch-friendly" href="/contato">
            Solicitar versão em PDF
          </Link>
        </div>
      </AnimatedSection>

      <AnimatedSection id="curriculo-experiencia" className="section-muted">
        <div className="container">
          <h2 className="mb-4">Experiência profissional</h2>
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
      </AnimatedSection>

      <AnimatedSection id="curriculo-competencias">
        <div className="container curriculum-grid">
          {competencias.map((competencia) => (
            <div className="card-portfolio" key={competencia.categoria}>
              <h2 className="mb-3 h4">{competencia.categoria}</h2>
              <ul className="mb-0">
                {competencia.itens.map((item) => (
                  <li className="mb-2" key={item}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </AnimatedSection>

      <AnimatedSection id="curriculo-servicos" className="section-muted">
        <div className="container">
          <h2 className="mb-4">Serviços oferecidos</h2>
          <div className="row g-4">
            {services.map((service) => (
              <div className="col-12 col-lg-4" key={service.title}>
                <article className="card-portfolio h-100">
                  <h3 className="mb-3">{service.title}</h3>
                  <p className="mb-3">{service.description}</p>
                  <ul className="mb-0">
                    {service.highlights.map((highlight) => (
                      <li className="mb-2" key={highlight}>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </article>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection id="curriculo-formacao">
        <div className="container curriculum-grid">
          <div>
            <h2 className="mb-3">Educação formal</h2>
            <ul className="mb-0">
              {educacao.map((item) => (
                <li className="mb-2" key={item.curso}>
                  <strong>{item.curso}</strong> · {item.instituicao} ({item.periodo})
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="mb-3">Idiomas</h2>
            <ul className="mb-0">
              {idiomas.map((item) => (
                <li className="mb-2" key={item.idioma}>
                  {item.idioma} — {item.nivel}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </AnimatedSection>
    </>
  );
}
