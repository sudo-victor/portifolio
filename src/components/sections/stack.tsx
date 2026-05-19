import { Reveal } from "@/components/motion/reveal";
import { SectionHeader } from "./section-header";
import { stackGroups } from "@/content/stack";

export function Stack() {
  return (
    <section id="stack" className="py-32">
      <SectionHeader
        index="03"
        title="Stack"
        description="Ferramentas que uso no dia a dia, escolhidas por consequência e não por hype."
      />

      <div className="grid gap-px overflow-hidden rounded-lg border border-[--color-border] bg-[--color-border] sm:grid-cols-2">
        {stackGroups.map((group, i) => (
          <Reveal
            key={group.label}
            delay={i * 0.04}
            className="bg-[--color-bg] p-6"
          >
            <h3 className="font-mono text-[11px] uppercase tracking-[0.2em] text-[--color-fg-dim]">
              {group.label}
            </h3>
            <ul className="mt-4 flex flex-wrap gap-x-3 gap-y-1.5">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="text-sm text-[--color-fg] transition-colors hover:text-[--color-accent]"
                >
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
