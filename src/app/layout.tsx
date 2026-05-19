import type { Metadata, Viewport } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Toaster } from "sonner";

import { JsonLd } from "@/components/seo/json-ld";

import "./globals.css";

const SITE_URL = "https://victorsouto.com.br";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Victor Souto · Arquiteto de Software",
    template: "%s · Victor Souto",
  },
  description:
    "Arquiteto de Software, CTO na DiMaior e Desenvolvedor Especialista na Growth Edge. Levo produtos do papel à produção. Rio de Janeiro, Brasil.",
  keywords: [
    "Victor Souto",
    "Victor de Souto Soares",
    "Arquiteto de Software",
    "Software Architect",
    "Fullstack",
    "Next.js",
    "NestJS",
    "AWS",
    "TypeScript",
    "Rio de Janeiro",
  ],
  authors: [{ name: "Victor de Souto Soares", url: SITE_URL }],
  creator: "Victor de Souto Soares",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: SITE_URL,
    siteName: "Victor Souto",
    title: "Victor Souto · Arquiteto de Software",
    description:
      "CTO na DiMaior e Desenvolvedor Especialista na Growth Edge. Produtos digitais do papel à produção.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Victor Souto · Arquiteto de Software",
    description:
      "CTO na DiMaior e Desenvolvedor Especialista na Growth Edge. Produtos digitais do papel à produção.",
  },
  alternates: {
    canonical: SITE_URL,
    languages: { "pt-BR": SITE_URL },
  },
  category: "technology",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: "#282a36",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="pt-BR"
      className={`${GeistSans.variable} ${GeistMono.variable}`}
      suppressHydrationWarning
    >
      <body>
        <JsonLd />
        {children}
        <Toaster
          theme="dark"
          position="bottom-right"
          toastOptions={{
            style: {
              background: "var(--color-bg-elevated)",
              border: "1px solid var(--color-border)",
              color: "var(--color-fg)",
            },
          }}
        />
      </body>
    </html>
  );
}
