"use client";

import { MessageCircle, Mail, MapPin } from "lucide-react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Reveal } from "@/components/motion/reveal";
import { SectionHeader } from "./section-header";

const WHATSAPP_NUMBER = "5521999078583";

export function Contact() {
  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const name = String(fd.get("name") ?? "").trim();
    const email = String(fd.get("email") ?? "").trim();
    const about = String(fd.get("about") ?? "").trim();
    const message = String(fd.get("message") ?? "").trim();

    if (!name || !message) {
      toast.error("Preenche pelo menos nome e mensagem.");
      return;
    }

    const lines = [
      `Olá Victor, sou *${name}*.`,
      about ? `Assunto: ${about}` : null,
      "",
      message,
      email ? `\n— ${email}` : null,
    ].filter(Boolean);

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(lines.join("\n"))}`;
    window.open(url, "_blank", "noopener,noreferrer");
    toast.success("Abrindo WhatsApp…");
    (e.target as HTMLFormElement).reset();
  }

  return (
    <section id="contato" className="py-32">
      <SectionHeader
        index="06"
        title="Contato"
        description="Tem projeto, ideia ou só quer trocar uma figura sobre arquitetura? Me chama."
      />

      <div className="grid gap-8 md:grid-cols-[1fr_320px]">
        <Reveal>
          <form onSubmit={onSubmit} className="space-y-5">
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="name">Nome</Label>
                <Input id="name" name="name" placeholder="Seu nome" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email (opcional)</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="voce@email.com"
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="about">Assunto (opcional)</Label>
              <Input
                id="about"
                name="about"
                placeholder="Projeto, freela, parceria…"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">Mensagem</Label>
              <Textarea
                id="message"
                name="message"
                placeholder="Conta o contexto, o problema e o que você espera"
                required
              />
            </div>
            <Button
              type="submit"
              variant="accent"
              size="lg"
              className="w-full sm:w-auto"
            >
              Enviar pelo WhatsApp
              <MessageCircle className="size-4" />
            </Button>
          </form>
        </Reveal>

        <Reveal delay={0.08}>
          <aside className="flex flex-col gap-4 rounded-lg border border-[--color-border] bg-[--color-bg-elevated]/30 p-5">
            <a
              href="mailto:contato@victorsouto.com.br"
              className="group flex items-start gap-3"
            >
              <Mail className="mt-0.5 size-4 shrink-0 text-[--color-fg-dim]" />
              <div>
                <p className="font-mono text-[11px] uppercase tracking-wider text-[--color-fg-dim]">
                  Email
                </p>
                <p className="break-all text-sm text-[--color-fg] group-hover:text-[--color-accent]">
                  contato@victorsouto.com.br
                </p>
              </div>
            </a>
            <div className="border-t border-[--color-border]" />
            <a
              href="https://wa.me/5521999078583"
              target="_blank"
              rel="noreferrer"
              className="group flex items-start gap-3"
            >
              <MessageCircle className="mt-0.5 size-4 shrink-0 text-[--color-fg-dim]" />
              <div>
                <p className="font-mono text-[11px] uppercase tracking-wider text-[--color-fg-dim]">
                  WhatsApp
                </p>
                <p className="text-sm text-[--color-fg] group-hover:text-[--color-green]">
                  (21) 99907-8583
                </p>
              </div>
            </a>
            <div className="border-t border-[--color-border]" />
            <div className="flex items-start gap-3">
              <MapPin className="mt-0.5 size-4 shrink-0 text-[--color-fg-dim]" />
              <div>
                <p className="font-mono text-[11px] uppercase tracking-wider text-[--color-fg-dim]">
                  Base
                </p>
                <p className="text-sm text-[--color-fg]">
                  Rio de Janeiro, BR · Remoto
                </p>
              </div>
            </div>
            <div className="border-t border-[--color-border]" />
            <p className="text-xs text-[--color-fg-muted]">
              Respondo em até 48h em dias úteis.
            </p>
          </aside>
        </Reveal>
      </div>
    </section>
  );
}
