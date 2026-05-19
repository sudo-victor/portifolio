export type StackGroup = {
  label: string;
  items: string[];
};

export const stackGroups: StackGroup[] = [
  {
    label: "Linguagens",
    items: ["TypeScript", "JavaScript", "Python", "C#", "PHP"],
  },
  {
    label: "Frontend",
    items: ["Next.js", "React", "Angular"],
  },
  {
    label: "Backend",
    items: ["Node.js", "NestJS", "FastAPI", "Django", "Express", "Fastify", ".NET"],
  },
  {
    label: "Cloud & Infra",
    items: [
      "AWS Lambda",
      "AWS SQS",
      "AWS SNS",
      "AWS S3",
      "AWS Cognito",
      "Terraform",
      "Docker",
      "GitHub Actions",
    ],
  },
  {
    label: "Dados",
    items: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "SQL Server"],
  },
  {
    label: "Arquitetura",
    items: ["Clean Architecture", "DDD", "Hexagonal", "Event-Driven", "Design Patterns"],
  },
  {
    label: "Testes & Qualidade",
    items: ["Jest", "React Testing Library", "Cypress", "Mocha", "Chai"],
  },
];
