export type Experience = {
  period: string;
  role: string;
  company: string;
  summary: string;
};

export const experiences: Experience[] = [
  {
    period: "2021 — Atual",
    role: "Arquiteto em Inteligência Artificial",
    company: "Atlas Cognitive Solutions",
    summary:
      "Conduz arquitetura de plataformas de IA e governança de modelos para corporações latino-americanas em larga escala.",
  },
  {
    period: "2016 — 2021",
    role: "Líder de Arquitetura de Dados",
    company: "Inova Data Lab",
    summary:
      "Liderou squads multidisciplinares na modernização do data platform, reduzindo 40% do tempo de insights para áreas estratégicas.",
  },
  {
    period: "2012 — 2016",
    role: "Professor e Coordenador de Pós-Graduação",
    company: "PUC Minas",
    summary:
      "Desenvolveu currículos e projetos acadêmicos voltados a IA aplicada, formando mais de 800 profissionais.",
  },
];
