import { Reveal } from "@/components/motion/reveal";

export function SectionHeader({
  index,
  title,
  description,
}: {
  index: string;
  title: string;
  description?: string;
}) {
  return (
    <header className="mb-12">
      <Reveal>
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-[--color-fg-dim]">
          <span className="text-[--color-accent]">{index}</span> · {title}
        </p>
      </Reveal>
      {description && (
        <Reveal delay={0.05}>
          <h2 className="mt-4 max-w-xl text-balance text-3xl font-semibold tracking-tight md:text-4xl">
            {description}
          </h2>
        </Reveal>
      )}
    </header>
  );
}
