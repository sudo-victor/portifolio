import { age, yearsCoding, yearsWorking } from "@/lib/age";

const SITE_URL = "https://victorsouto.com.br";

const myAge = age();
const coding = yearsCoding();
const working = yearsWorking();

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `${SITE_URL}#person`,
  name: "Victor de Souto Soares",
  alternateName: "Victor Souto",
  url: SITE_URL,
  image: `${SITE_URL}/me.png`,
  jobTitle: "Arquiteto de Software",
  description: `Arquiteto de Software de ${myAge} anos, CTO na DiMaior e Desenvolvedor Especialista na Growth Edge. Programa desde os 10 anos de idade e trabalha profissionalmente com desenvolvimento há ${working} anos.`,
  birthDate: "2003",
  email: "mailto:contato@victorsouto.com.br",
  telephone: "+55-21-99907-8583",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Rio de Janeiro",
    addressRegion: "RJ",
    addressCountry: "BR",
  },
  sameAs: [
    "https://github.com/sudo-victor",
    "https://www.linkedin.com/in/victor-de-souto-soares-4811b118a/",
    "https://wa.me/5521999078583",
  ],
  knowsAbout: [
    "Software Architecture",
    "Clean Architecture",
    "Domain-Driven Design",
    "Hexagonal Architecture",
    "Event-Driven Architecture",
    "TypeScript",
    "JavaScript",
    "Node.js",
    "NestJS",
    "Next.js",
    "React",
    "Python",
    "FastAPI",
    "Django",
    "AWS Lambda",
    "AWS",
    "Terraform",
    "IA Generativa",
    ".NET",
    "Angular",
  ],
  worksFor: [
    {
      "@type": "Organization",
      name: "DiMaior",
      url: "https://dimaior.com.br",
      member: { "@type": "Role", roleName: "CTO · Co-Founder" },
    },
    {
      "@type": "Organization",
      name: "Growth Edge",
      member: {
        "@type": "Role",
        roleName: "Desenvolvedor de Software Especialista",
      },
    },
  ],
  alumniOf: [
    {
      "@type": "CollegeOrUniversity",
      name: "FIAP",
      description: "Pós-graduação em Arquitetura de Software (2025-2026)",
    },
    {
      "@type": "CollegeOrUniversity",
      name: "Centro Universitário IBMR",
      description: "Graduação em Análise e Desenvolvimento de Sistemas (2021-2023)",
    },
  ],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}#website`,
  url: SITE_URL,
  name: "Victor Souto",
  description:
    "Portfolio de Victor de Souto Soares, Arquiteto de Software no Rio de Janeiro.",
  inLanguage: "pt-BR",
  author: { "@id": `${SITE_URL}#person` },
  publisher: { "@id": `${SITE_URL}#person` },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Quem é Victor de Souto Soares?",
      acceptedAnswer: {
        "@type": "Answer",
        text: `Victor de Souto Soares é Arquiteto de Software brasileiro de ${myAge} anos, baseado no Rio de Janeiro. É CTO e Co-Founder da DiMaior e atua como Desenvolvedor de Software Especialista na Growth Edge. Programa desde os 10 anos de idade (${coding} anos de experiência) e trabalha profissionalmente com desenvolvimento de software há ${working} anos.`,
      },
    },
    {
      "@type": "Question",
      name: "Qual é a stack de tecnologias do Victor Souto?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "TypeScript, JavaScript, Node.js, NestJS, Next.js, React, Python (FastAPI, Django), .NET, AWS (Lambda, SQS, SNS, S3, Cognito), Terraform, Docker, PostgreSQL, MongoDB, Redis. Arquiteturas Clean, DDD, Hexagonal e Event-Driven.",
      },
    },
    {
      "@type": "Question",
      name: "Onde Victor Souto trabalha atualmente?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Atualmente é CTO e Co-Founder da DiMaior (desde setembro de 2025) e Desenvolvedor de Software Especialista na Growth Edge (desde abril de 2026).",
      },
    },
    {
      "@type": "Question",
      name: "Como entrar em contato com Victor Souto?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Por email em contato@victorsouto.com.br, WhatsApp em +55 21 99907-8583, pelo formulário em victorsouto.com.br, no LinkedIn (victor-de-souto-soares) ou no GitHub (sudo-victor).",
      },
    },
  ],
};

export function JsonLd() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}
