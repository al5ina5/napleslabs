import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt =
  "NaplesLabs — Computer repair and upgrades in Naples, Florida";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #facc15 0%, #fef9c3 45%, #ffffff 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: 64,
          fontFamily:
            "ui-sans-serif, system-ui, -apple-system, Segoe UI, sans-serif",
        }}
      >
        <div
          style={{
            fontSize: 80,
            fontWeight: 900,
            letterSpacing: -2,
            color: "#0a0a0a",
            textAlign: "center",
            lineHeight: 1.05,
          }}
        >
          NaplesLabs
        </div>
        <div
          style={{
            fontSize: 34,
            marginTop: 28,
            fontWeight: 600,
            color: "#262626",
            textAlign: "center",
            maxWidth: 900,
            lineHeight: 1.3,
          }}
        >
          Computer repair & upgrades in Naples, Florida
        </div>
        <div
          style={{
            fontSize: 24,
            marginTop: 20,
            fontWeight: 500,
            color: "#404040",
          }}
        >
          Fast turnarounds · Upfront pricing · No fix, no charge
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
