import * as React from "react";
import { cn } from "@/lib/utils";

export function Badge({
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-md border border-[--color-border] bg-[--color-bg-elevated] px-2 py-0.5 font-mono text-[11px] tracking-wide text-[--color-fg-muted]",
        className,
      )}
      {...props}
    />
  );
}
