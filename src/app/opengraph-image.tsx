import { ImageResponse } from "next/og";

import { yearsCoding, yearsWorking } from "@/lib/age";

export const alt = "Victor Souto · Arquiteto de Software";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OG() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          background: "#282a36",
          color: "#f8f8f2",
          fontFamily: "ui-sans-serif, system-ui, sans-serif",
          backgroundImage:
            "radial-gradient(ellipse at 80% 0%, rgba(189,147,249,0.22), transparent 55%), linear-gradient(to bottom, #282a36, #1e1f29)",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <div
            style={{
              width: 14,
              height: 14,
              borderRadius: 999,
              background: "#50fa7b",
              boxShadow: "0 0 24px #50fa7b",
            }}
          />
          <span
            style={{
              fontFamily: "ui-monospace, SFMono-Regular, monospace",
              fontSize: 22,
              color: "#6272a4",
              letterSpacing: 3,
              textTransform: "uppercase",
            }}
          >
            victor · souto
          </span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <h1
            style={{
              fontSize: 92,
              fontWeight: 700,
              letterSpacing: -3,
              lineHeight: 1,
              margin: 0,
              maxWidth: 900,
              color: "#f8f8f2",
            }}
          >
            Victor de Souto Soares
          </h1>
          <p
            style={{
              fontSize: 34,
              color: "#bd93f9",
              margin: 0,
              fontWeight: 500,
            }}
          >
            Arquiteto de Software · CTO @ DiMaior
          </p>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            fontFamily: "ui-monospace, SFMono-Regular, monospace",
            fontSize: 22,
            color: "#6272a4",
          }}
        >
          <span>
            {yearsCoding()} anos programando · {yearsWorking()} trabalhando
          </span>
          <span>victorsouto.com.br</span>
        </div>
      </div>
    ),
    size,
  );
}
