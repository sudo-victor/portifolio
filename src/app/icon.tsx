import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#282a36",
          color: "#bd93f9",
          fontFamily: "ui-sans-serif, system-ui, sans-serif",
          fontWeight: 700,
          fontSize: 18,
          letterSpacing: -0.5,
          borderRadius: 6,
        }}
      >
        vs
      </div>
    ),
    size,
  );
}
