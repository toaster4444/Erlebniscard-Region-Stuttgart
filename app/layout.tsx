import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ErlebnisCard Tracker",
  description: "Leistungen der ErlebnisCard abhaken – lokal gespeichert.",
  manifest: "/manifest.webmanifest",
  themeColor: "#0b1220"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de">
      <head>
        <meta name="application-name" content="ErlebnisCard Tracker" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="ErlebnisCard" />
        <meta name="mobile-web-app-capable" content="yes" />
      </head>
      <body>{children}</body>
    </html>
  );
}
