import { MapPin, GraduationCap, Code2 } from "lucide-react";

import { Reveal } from "@/components/motion/reveal";
import { SectionHeader } from "./section-header";
import { education } from "@/content/experience";
import { age, yearsCoding, yearsWorking } from "@/lib/age";

export function About() {
  const myAge = age();
  const coding = yearsCoding();
  const working = yearsWorking();

  return (
    <section id="sobre" className="py-32">
      <SectionHeader
        index="01"
        title="Sobre"
        description="Engenharia de software como ofício: código bem projetado, testável e direto ao ponto."
      />

      <div className="grid gap-12 md:grid-cols-[1fr_auto]">
        <Reveal>
          <div className="space-y-5 text-pretty text-[15px] leading-relaxed text-[--color-fg-muted]">
            <p>
              Tenho <span className="text-[--color-fg]">{myAge} anos</span>,
              programo desde os{" "}
              <span className="text-[--color-fg]">10 anos de idade</span> e
              trabalho com isso{" "}
              <span className="text-[--color-fg]">há {working} anos</span>. Hoje
              atuo como Arquiteto de Software, levando produtos do papel à
              produção, com foco em{" "}
              <span className="text-[--color-fg]">
                JavaScript, Node.js, TypeScript, React, Python e .NET
              </span>
              .
            </p>
            <p>
              Trabalho em arquiteturas{" "}
              <span className="text-[--color-fg]">Clean, DDD e Hexagonal</span>,
              com pipelines de CI/CD em GitHub Actions, infra como código em
              Terraform e ecossistemas event-driven na AWS (Lambda, SQS, SNS,
              S3).
            </p>
            <p>
              Gosto de transformar problemas complexos em soluções simples e
              testáveis. Boa parte do meu trabalho recente envolve aplicar IA
              generativa para automatizar fluxos e melhorar a experiência de
              usuários reais.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <aside className="flex flex-col gap-4 rounded-lg border border-[--color-border] bg-[--color-bg-elevated]/30 p-5">
            <div className="flex items-start gap-3">
              <MapPin className="mt-0.5 size-4 shrink-0 text-[--color-fg-dim]" />
              <div>
                <p className="font-mono text-[11px] uppercase tracking-wider text-[--color-fg-dim]">
                  Localização
                </p>
                <p className="text-sm text-[--color-fg]">
                  Rio de Janeiro, Brasil
                </p>
              </div>
            </div>

            <div className="border-t border-[--color-border]" />

            <div className="flex items-start gap-3">
              <Code2 className="mt-0.5 size-4 shrink-0 text-[--color-fg-dim]" />
              <div>
                <p className="font-mono text-[11px] uppercase tracking-wider text-[--color-fg-dim]">
                  Tempo de carreira
                </p>
                <p className="text-sm text-[--color-fg]">
                  {coding} anos programando
                </p>
                <p className="text-xs text-[--color-fg-muted]">
                  {working} anos trabalhando profissionalmente
                </p>
              </div>
            </div>

            <div className="border-t border-[--color-border]" />

            <div className="flex items-start gap-3">
              <GraduationCap className="mt-0.5 size-4 shrink-0 text-[--color-fg-dim]" />
              <div className="space-y-3">
                <p className="font-mono text-[11px] uppercase tracking-wider text-[--color-fg-dim]">
                  Formação
                </p>
                {education.map((e) => (
                  <div key={e.school}>
                    <p className="text-sm text-[--color-fg]">{e.school}</p>
                    <p className="text-xs text-[--color-fg-muted]">{e.degree}</p>
                    <p className="font-mono text-[11px] text-[--color-fg-dim]">
                      {e.period}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </aside>
        </Reveal>
      </div>
    </section>
  );
}
