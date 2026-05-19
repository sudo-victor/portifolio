import { Reveal } from "@/components/motion/reveal";
import { Badge } from "@/components/ui/badge";
import { SectionHeader } from "./section-header";
import { experiences } from "@/content/experience";

export function Experience() {
  return (
    <section id="experiencia" className="py-32">
      <SectionHeader
        index="02"
        title="Experiência"
        description="Cinco anos construindo produtos, de estágio em .NET a CTO de uma plataforma própria."
      />

      <ol className="relative space-y-12 border-l border-[--color-border] pl-8">
        {experiences.map((exp, i) => (
          <Reveal key={exp.company} as="li" delay={i * 0.04} className="relative">
            <span
              className="absolute -left-[33px] top-2 grid size-4 place-items-center rounded-full border border-[--color-border] bg-[--color-bg]"
              aria-hidden
            >
              <span
                className={
                  exp.roles[0].current
                    ? "size-1.5 rounded-full bg-[--color-accent] shadow-[0_0_12px_var(--color-accent)]"
                    : "size-1.5 rounded-full bg-[--color-fg-dim]"
                }
              />
            </span>

            <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
              <h3 className="text-lg font-semibold tracking-tight">
                {exp.company}
              </h3>
              {exp.totalPeriod && (
                <span className="font-mono text-[11px] uppercase tracking-wider text-[--color-fg-dim]">
                  {exp.totalPeriod}
                </span>
              )}
            </div>

            <ul className="mt-2 space-y-1">
              {exp.roles.map((r) => (
                <li
                  key={r.title + r.period}
                  className="flex flex-wrap items-baseline gap-x-3 text-sm"
                >
                  <span className="text-[--color-fg]">{r.title}</span>
                  <span className="font-mono text-[11px] text-[--color-fg-dim]">
                    {r.period}
                  </span>
                </li>
              ))}
            </ul>

            <p className="mt-3 max-w-2xl text-pretty text-[14px] leading-relaxed text-[--color-fg-muted]">
              {exp.description}
            </p>

            {exp.stack && (
              <div className="mt-4 flex flex-wrap gap-1.5">
                {exp.stack.map((s) => (
                  <Badge key={s}>{s}</Badge>
                ))}
              </div>
            )}
          </Reveal>
        ))}
      </ol>
    </section>
  );
}
