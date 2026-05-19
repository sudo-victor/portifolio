export type Project = {
  name: string;
  org: string;
  description: string;
  role: string;
  stack: string[];
  links?: { label: string; href: string }[];
  status: "Em produção" | "Em desenvolvimento" | "Encerrado";
};

export const projects: Project[] = [
  {
    name: "Destrava",
    org: "DiMaior",
    description:
      "Plataforma que prepara jovens para os desafios da vida adulta por meio de experiências práticas e gamificadas. Da concepção à produção: arquitetura, padrões de desenvolvimento, integrações em cloud e produto.",
    role: "Co-Founder & CTO",
    stack: ["Next.js", "NestJS", "AWS", "TypeScript", "Event-Driven"],
    status: "Em desenvolvimento",
  },
  {
    name: "Growth Machine",
    org: "Growth Edge",
    description:
      "Plataforma event-driven com AWS Lambda, IA generativa e Terraform. Monorepo com pipelines otimizados, observabilidade e foco em performance/SEO no frontend Next.js.",
    role: "Desenvolvedor Especialista",
    stack: ["AWS Lambda", "Next.js", "Terraform", "SQS/SNS", "IA generativa"],
    status: "Em produção",
  },
  {
    name: "Fingermenu",
    org: "iZap Softworks",
    description:
      "Sistema completo de dashboard e API para gestão de cardápios digitais. Modelagem de dados, autenticação via AWS Cognito, armazenamento em S3 e UI consistente.",
    role: "Fullstack Lead",
    stack: ["NestJS", "MySQL", "AWS Cognito", "S3", "React"],
    status: "Em produção",
  },
  {
    name: "Engagers Game",
    org: "iZap Softworks",
    description:
      "SaaS de engajamento em alta escala para colaboradores corporativos. Interfaces dinâmicas com gamificação.",
    role: "Frontend Developer",
    stack: ["React", "AWS S3", "Styled Components"],
    links: [{ label: "engagers.com.br", href: "https://engagers.com.br/" }],
    status: "Em produção",
  },
];
