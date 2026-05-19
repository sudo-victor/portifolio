export type Role = {
  title: string;
  period: string;
  current?: boolean;
};

export type Experience = {
  company: string;
  location?: string;
  totalPeriod?: string;
  roles: Role[];
  description: string;
  stack?: string[];
};

export const experiences: Experience[] = [
  {
    company: "Growth Edge",
    totalPeriod: "3 meses",
    roles: [
      {
        title: "Desenvolvedor de Software Especialista",
        period: "Abr 2026 → Presente",
        current: true,
      },
      { title: "Desenvolvedor de Software Sênior", period: "Mar 2026 → Abr 2026" },
    ],
    description: "Resolvendo problemas de vendas com tecnologia.",
  },
  {
    company: "DiMaior",
    roles: [{ title: "Co-Founder · CTO", period: "Set 2025 → Presente", current: true }],
    description:
      "Responsável pela estratégia tecnológica e construção do ecossistema digital, liderando o desenvolvimento do Destrava: plataforma gamificada que prepara jovens para os desafios da vida adulta. Defino arquitetura, padrões e garantia de escalabilidade, performance e qualidade da concepção à produção.",
    stack: ["Next.js", "NestJS", "AWS", "TypeScript"],
  },
  {
    company: "Growth Machine",
    roles: [{ title: "Desenvolvedor Fullstack Sênior", period: "Jul 2024 → Mar 2026" }],
    description:
      "Funcionalidades escaláveis com AWS Lambda e arquitetura orientada a eventos. Frontend Next.js com foco em performance, acessibilidade e SEO. IA generativa para automação de experiências. Infraestrutura como código com Terraform. Monorepo com pipelines otimizados.",
    stack: ["AWS Lambda", "Next.js", "Terraform", "SQS", "SNS", "S3", "IA generativa"],
  },
  {
    company: "Hyper",
    roles: [{ title: "Desenvolvedor Fullstack", period: "Nov 2023 → Mai 2024" }],
    description:
      "Aplicações com NestJS, React, AWS, Docker, Python e Django Rest Framework. Clean Architecture, Clean Code, DDD e Design Patterns aplicados. Testes unitários, e2e e integração com Jest e Cypress. Documentação técnica via playbooks e diagramas.",
    stack: ["NestJS", "React", "AWS", "Docker", "Django", "Jest", "Cypress"],
  },
  {
    company: "Arnia · Escola de Programação",
    roles: [
      { title: "Instrutor de Desenvolvimento Backend", period: "Out 2022 → Dez 2023" },
    ],
    description:
      "Professor de desenvolvimento backend, teoria e prática, formando dezenas de novos desenvolvedores.",
    stack: ["Node.js", "NestJS", "Express", "MongoDB", "SQL"],
  },
  {
    company: "IN8",
    totalPeriod: "1 ano 1 mês",
    roles: [
      { title: "Tech Lead", period: "Jul 2023 → Nov 2023" },
      { title: "Desenvolvedor Fullstack", period: "Nov 2022 → Jul 2023" },
    ],
    description:
      "Microsserviços para produtos no nicho de milhas, conduzindo decisões técnicas e arquitetura.",
    stack: ["NestJS", "MongoDB", "Redis", "MySQL", "Postgres", "React"],
  },
  {
    company: "iZap Softworks",
    totalPeriod: "1 ano 10 meses",
    roles: [
      {
        title: "Desenvolvedor Fullstack · Fingermenu",
        period: "Mai 2022 → Nov 2023",
      },
      {
        title: "Desenvolvedor Frontend · Engagers Game",
        period: "Fev 2022 → Abr 2022",
      },
    ],
    description:
      "Liderança técnica do Fingermenu (modelagem, API, dashboard) e participação no Engagers Game, SaaS de engajamento corporativo em alta escala.",
    stack: ["NestJS", "MySQL", "AWS Cognito", "S3", "React", "Styled Components"],
  },
  {
    company: "MKS Sistemas",
    roles: [{ title: "Desenvolvedor Frontend", period: "Out 2022 → Nov 2022" }],
    description:
      "Frontend para projetos Web 3.0 com integração ReactJS e tecnologias Blockchain.",
    stack: ["React", "Blockchain"],
  },
  {
    company: "Loja Interativa",
    location: "Rio de Janeiro, Brasil",
    roles: [
      { title: "Estágio de Desenvolvimento de Sistemas", period: "Jun 2021 → Set 2022" },
    ],
    description:
      "Desenvolvedor Fullstack: aplicações da modelagem à publicação.",
    stack: [".NET", "Angular", "WordPress", "PHP", "Windows Server", "SQL Server"],
  },
];

export const education = [
  {
    school: "FIAP",
    degree: "Pós-graduação Lato Sensu · Arquitetura de Software",
    period: "Jun 2025 → Jul 2026",
  },
  {
    school: "Centro Universitário IBMR",
    degree: "Graduação · Análise e Desenvolvimento de Sistemas",
    period: "2021 → 2023",
  },
];
