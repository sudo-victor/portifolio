"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const links = [
  { label: "Sobre", href: "#sobre" },
  { label: "Experiência", href: "#experiencia" },
  { label: "Stack", href: "#stack" },
  { label: "Projetos", href: "#projetos" },
  { label: "Contato", href: "#contato" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-[--color-border] bg-[--color-bg]/70 backdrop-blur-xl"
          : "border-b border-transparent",
      )}
    >
      <div className="mx-auto flex max-w-3xl items-center justify-between px-6 py-4 md:px-8">
        <Link
          href="#top"
          className="font-mono text-sm font-medium tracking-tight"
          aria-label="Início"
        >
          <span className="text-[--color-fg]">victor</span>
          <span className="text-[--color-accent]">.</span>
          <span className="text-[--color-fg-muted]">souto</span>
        </Link>
        <nav className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="rounded-md px-3 py-1.5 text-sm text-[--color-fg-muted] transition-colors hover:bg-[--color-bg-elevated] hover:text-[--color-fg]"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <a
          href="#contato"
          className="rounded-md border border-[--color-border] px-3 py-1.5 text-sm text-[--color-fg] transition-colors hover:border-[--color-border-strong] hover:bg-[--color-bg-elevated] md:hidden"
        >
          Contato
        </a>
      </div>
    </header>
  );
}
