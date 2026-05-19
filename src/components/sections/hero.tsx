import Image from "next/image";
import Link from "next/link";
import { ArrowDown, Download, Github } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/motion/reveal";

export function Hero() {
  return (
    <section
      id="top"
      className="relative isolate flex min-h-dvh items-center overflow-hidden"
    >
      <div className="grid-bg absolute inset-0 -z-10" aria-hidden />
      <div
        className="absolute inset-x-0 top-0 -z-10 h-[60dvh] bg-gradient-to-b from-transparent to-[--color-bg]"
        aria-hidden
      />

      <div className="mx-auto w-full max-w-3xl px-6 pt-32 md:px-8">
        <Reveal>
          <div className="mb-8 inline-flex items-center gap-4">
            <div className="relative size-20 overflow-hidden rounded-full border-2 border-[--color-border] bg-[--color-bg-elevated] shadow-[0_0_0_4px_var(--color-bg)] ring-1 ring-[--color-purple]/40 md:size-24">
              <Image
                src="/me.png"
                alt="Victor de Souto Soares"
                fill
                sizes="(min-width: 768px) 96px, 80px"
                priority
                className="object-cover"
              />
            </div>
            <div className="flex flex-col gap-1">
              <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-[--color-fg-dim]">
                rj · brasil
              </span>
              <span className="text-sm text-[--color-fg-muted]">
                Olá, eu sou{" "}
                <span className="text-[--color-fg]">Victor</span>
              </span>
            </div>
          </div>
        </Reveal>

        <Reveal>
          <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-[--color-fg-muted]">
            <span
              className="relative grid size-2 place-items-center"
              aria-hidden
            >
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[--color-green] opacity-75" />
              <span className="relative inline-flex size-2 rounded-full bg-[--color-green]" />
            </span>
            Disponível para conversar sobre arquitetura
          </div>
        </Reveal>

        <Reveal delay={0.05}>
          <h1 className="mt-8 text-balance text-5xl font-semibold leading-[1.05] tracking-tight md:text-7xl">
            Victor de Souto Soares
          </h1>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-4 space-y-1 font-mono text-sm text-[--color-fg-muted] md:text-base">
            <p className="text-[--color-purple]">Arquiteto de Software</p>
            <p>
              CTO <span className="text-[--color-fg-dim]">@</span> DiMaior
              <span className="mx-2 text-[--color-fg-dim]">·</span>
              Desenvolvedor Especialista{" "}
              <span className="text-[--color-fg-dim]">@</span> Growth Edge
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <p className="mt-10 max-w-xl text-pretty text-lg leading-relaxed text-[--color-fg-muted] md:text-xl">
            Transformo ideias em{" "}
            <span className="text-[--color-fg]">produtos digitais</span> que
            geram impacto real. Da concepção à entrega, lidero decisões
            técnicas, formo times e ajudo empresas a crescer com{" "}
            <span className="text-[--color-fg]">software bem feito</span>.
          </p>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="mt-10 flex flex-wrap items-center gap-3">
            <Button asChild variant="accent" size="lg">
              <a href="#contato">Vamos conversar</a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/cv.pdf" target="_blank" rel="noreferrer">
                <Download className="size-4" />
                Currículo
              </Link>
            </Button>
            <Button asChild variant="ghost" size="lg">
              <Link
                href="https://github.com/sudo-victor"
                target="_blank"
                rel="noreferrer"
              >
                <Github className="size-4" />
                sudo-victor
              </Link>
            </Button>
          </div>
        </Reveal>

        <Reveal delay={0.3}>
          <div className="mt-24 flex items-center gap-2 font-mono text-xs text-[--color-fg-dim] md:mt-32">
            <ArrowDown className="size-3 animate-bounce" />
            <span>role pra continuar</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
