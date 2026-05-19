import { ArrowUpRight } from "lucide-react";

import { Reveal } from "@/components/motion/reveal";
import { Badge } from "@/components/ui/badge";
import { SectionHeader } from "./section-header";
import { projects } from "@/content/projects";

export function Projects() {
  return (
    <section id="projetos" className="py-32">
      <SectionHeader
        index="04"
        title="Projetos selecionados"
        description="Produtos em produção e em desenvolvimento, onde decisões técnicas viram experiência de usuário."
      />

      <div className="grid gap-4">
        {projects.map((p, i) => {
          const link = p.links?.[0];
          const Wrapper = link ? "a" : "div";
          const wrapperProps = link
            ? ({
                href: link.href,
                target: "_blank",
                rel: "noreferrer",
              } as const)
            : ({} as const);

          return (
            <Reveal key={p.name} delay={i * 0.05}>
              <Wrapper
                {...wrapperProps}
                className="group relative block rounded-lg border border-[--color-border] bg-[--color-bg-elevated]/30 p-6 transition-all hover:-translate-y-0.5 hover:border-[--color-border-strong] hover:bg-[--color-bg-elevated]/60"
              >
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-xl font-semibold tracking-tight">
                        {p.name}
                      </h3>
                      {link && (
                        <ArrowUpRight className="size-4 text-[--color-fg-dim] transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[--color-fg]" />
                      )}
                    </div>
                    <p className="mt-1 font-mono text-xs uppercase tracking-wider text-[--color-fg-dim]">
                      {p.org} · {p.role}
                    </p>
                  </div>
                  <Badge
                    className={
                      p.status === "Em produção"
                        ? "border-[--color-accent]/40 text-[--color-accent]"
                        : p.status === "Em desenvolvimento"
                        ? "border-[--color-border-strong] text-[--color-fg]"
                        : undefined
                    }
                  >
                    {p.status}
                  </Badge>
                </div>

                <p className="mt-4 max-w-2xl text-pretty text-[14px] leading-relaxed text-[--color-fg-muted]">
                  {p.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-1.5">
                  {p.stack.map((s) => (
                    <Badge key={s}>{s}</Badge>
                  ))}
                </div>
              </Wrapper>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
