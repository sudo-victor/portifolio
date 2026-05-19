import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <main className="grid min-h-dvh place-items-center px-6">
      <div className="text-center">
        <p className="font-mono text-sm text-[--color-fg-dim]">404</p>
        <h1 className="mt-4 text-3xl font-semibold tracking-tight">
          Página não encontrada
        </h1>
        <p className="mt-2 text-[--color-fg-muted]">
          O recurso que você procura não existe ou foi movido.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex items-center gap-2 rounded-md border border-[--color-border] px-4 py-2 text-sm transition hover:border-[--color-border-strong] hover:bg-[--color-bg-elevated]"
        >
          <ArrowLeft className="size-4" />
          Voltar pro início
        </Link>
      </div>
    </main>
  );
}
