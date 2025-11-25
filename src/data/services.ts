export type Service = {
  title: string;
  description: string;
  highlights: string[];
};

export const services: Service[] = [
  {
    title: "Arquitetura em Inteligência Artificial",
    description:
      "Blueprints end-to-end para soluções de IA confiáveis, escaláveis e governáveis ao longo de todo o ciclo de vida.",
    highlights: [
      "Estratégia de modelos e pipelines",
      "Observabilidade e ética em IA",
      "Desenho de plataformas MLOps",
    ],
  },
  {
    title: "Arquitetura e Engenharia de Dados",
    description:
      "Modernização de ecossistemas de dados com foco em qualidade, automação e disponibilidade para decisões críticas.",
    highlights: [
      "Data mesh e lakehouse",
      "Governança e catálogo de dados",
      "Integração em tempo real",
    ],
  },
  {
    title: "Educação e Liderança Técnica",
    description:
      "Programas formativos, mentoria executiva e facilitação para times que precisam acelerar a adoção de IA.",
    highlights: [
      "Trilhas de capacitação customizadas",
      "Workshops imersivos hands-on",
      "Coaching para líderes técnicos",
    ],
  },
];
