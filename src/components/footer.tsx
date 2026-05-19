import Link from "next/link";
import { Github, Linkedin, Mail, MessageCircle } from "lucide-react";

export function Footer() {
  return (
    <footer className="mt-32 border-t border-[--color-border]">
      <div className="mx-auto flex max-w-3xl flex-col items-start justify-between gap-6 px-6 py-10 md:flex-row md:items-center md:px-8">
        <div>
          <p className="font-mono text-xs uppercase tracking-wider text-[--color-fg-dim]">
            © {new Date().getFullYear()} · Victor de Souto Soares
          </p>
          <p className="mt-1 text-sm text-[--color-fg-muted]">
            Construído com Next.js, Tailwind v4 e bastante café.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Link
            href="https://github.com/sudo-victor"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="grid size-9 place-items-center rounded-md border border-[--color-border] text-[--color-fg-muted] transition-colors hover:border-[--color-border-strong] hover:bg-[--color-bg-elevated] hover:text-[--color-fg]"
          >
            <Github className="size-4" />
          </Link>
          <Link
            href="https://www.linkedin.com/in/victor-de-souto-soares-4811b118a/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="grid size-9 place-items-center rounded-md border border-[--color-border] text-[--color-fg-muted] transition-colors hover:border-[--color-border-strong] hover:bg-[--color-bg-elevated] hover:text-[--color-fg]"
          >
            <Linkedin className="size-4" />
          </Link>
          <Link
            href="https://wa.me/5521999078583"
            target="_blank"
            rel="noreferrer"
            aria-label="WhatsApp"
            className="grid size-9 place-items-center rounded-md border border-[--color-border] text-[--color-fg-muted] transition-colors hover:border-[--color-border-strong] hover:bg-[--color-bg-elevated] hover:text-[--color-green]"
          >
            <MessageCircle className="size-4" />
          </Link>
          <Link
            href="mailto:contato@victorsouto.com.br"
            aria-label="Email"
            className="grid size-9 place-items-center rounded-md border border-[--color-border] text-[--color-fg-muted] transition-colors hover:border-[--color-border-strong] hover:bg-[--color-bg-elevated] hover:text-[--color-fg]"
          >
            <Mail className="size-4" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
