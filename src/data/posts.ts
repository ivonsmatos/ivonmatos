export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  tags: string[];
  readingTime: string;
  category: string;
};

export const posts: Post[] = [
  {
    slug: "arquitetura-responsavel-inteligencia-artificial",
    title: "Arquitetura responsável para Inteligência Artificial escalável",
    excerpt:
      "Uma visão holística sobre governança de dados, MLOps e observabilidade para levar IA do laboratório à produção com segurança.",
    date: "2025-08-12",
    tags: ["IA", "Arquitetura", "MLOps"],
    readingTime: "8 min",
    category: "Arquitetura de IA",
  },
  {
    slug: "mapa-maturidade-dados",
    title: "Como desenhar um mapa de maturidade de dados realista",
    excerpt:
      "Framework prático para diagnosticar capacidades analíticas e definir investimentos em dados alinhados ao negócio.",
    date: "2025-05-28",
    tags: ["Dados", "Estratégia", "Consultoria"],
    readingTime: "6 min",
    category: "Estratégia de Dados",
  },
  {
    slug: "ensinar-ia-experiencia",
    title: "Ensinar IA: lições de sala de aula aplicadas ao mercado",
    excerpt:
      "Metodologias ativas, projetos reais e mentoria para formação de times de alto desempenho em IA.",
    date: "2025-02-14",
    tags: ["Educação", "IA", "Mentoria"],
    readingTime: "5 min",
    category: "Educação em Tecnologia",
  },
];
