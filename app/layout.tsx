import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://napleslabs.com";

const title = {
  default: "NaplesLabs | Computer repair & upgrades in Naples, Florida",
  template: "%s | NaplesLabs",
};

const description =
  "Computer repair, upgrades, tune-ups, and data recovery in Naples, Florida. Upfront pricing, fast turnarounds, and no charge if we cannot fix or upgrade your machine.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  keywords: [
    "computer repair Naples Florida",
    "PC repair Naples",
    "laptop repair Naples",
    "SSD upgrade",
    "computer tune-up",
    "data recovery",
    "NaplesLabs",
  ],
  authors: [{ name: "NaplesLabs" }],
  creator: "NaplesLabs",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "NaplesLabs",
    title: title.default,
    description,
  },
  twitter: {
    card: "summary_large_image",
    title: title.default,
    description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Iosevka+Charon+Mono:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&family=Zalando+Sans+Expanded:ital,wght@0,200..900;1,200..900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full flex flex-col">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
